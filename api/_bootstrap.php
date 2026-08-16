<?php
declare(strict_types=1);

/**
 * Base común de la API de WikiLib.
 *
 * Corre en el mismo dominio que el sitio, así que la sesión viaja en una
 * cookie httpOnly en lugar de un token en localStorage: un script inyectado
 * en la página no puede leerla.
 */

// ---------------------------------------------------------------------------
// Configuración
// ---------------------------------------------------------------------------
$rutaConfig = __DIR__ . '/config.php';
if (!is_file($rutaConfig)) {
    http_response_code(503);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'error' => 'La API no está configurada. Falta api/config.php.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
/** @var array $CONFIG */
$CONFIG = require $rutaConfig;

// ---------------------------------------------------------------------------
// Respuestas
// ---------------------------------------------------------------------------
function responder(array $datos, int $codigo = 200): never
{
    http_response_code($codigo);
    header('Content-Type: application/json; charset=utf-8');
    header('X-Content-Type-Options: nosniff');
    echo json_encode($datos, JSON_UNESCAPED_UNICODE);
    exit;
}

function fallar(string $mensaje, int $codigo = 400): never
{
    responder(['error' => $mensaje], $codigo);
}

// ---------------------------------------------------------------------------
// Sesión
// ---------------------------------------------------------------------------
$seguro = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
    || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');

session_set_cookie_params([
    'lifetime' => 60 * 60 * 24 * 30,
    'path'     => '/',
    'httponly' => true,
    'secure'   => $seguro,
    // Strict evita que un sitio ajeno provoque peticiones autenticadas.
    // Alcanza como defensa contra CSRF sin necesidad de tokens aparte.
    'samesite' => 'Strict',
]);
session_name('wikilib_sesion');
session_start();

// ---------------------------------------------------------------------------
// Origen
// ---------------------------------------------------------------------------
$origen = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origen !== '') {
    if (!in_array($origen, $CONFIG['origenes'], true)) {
        fallar('Origen no autorizado.', 403);
    }
    header('Access-Control-Allow-Origin: ' . $origen);
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Vary: Origin');
}
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ---------------------------------------------------------------------------
// Base de datos
// ---------------------------------------------------------------------------
function bd(): PDO
{
    static $pdo = null;
    if ($pdo instanceof PDO) {
        return $pdo;
    }
    global $CONFIG;
    $d = $CONFIG['db'];
    // 'dsn' permite apuntar a otro motor o a un puerto distinto sin tocar el
    // código. Si no está, se arma el DSN de MySQL, que es el caso normal.
    $dsn = $d['dsn'] ?? "mysql:host={$d['host']};dbname={$d['name']};charset=utf8mb4";
    try {
        $pdo = new PDO(
            $dsn,
            $d['user'] ?? null,
            $d['pass'] ?? null,
            [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                // Consultas preparadas de verdad, no emuladas: es lo que
                // cierra la puerta a la inyección de SQL.
                PDO::ATTR_EMULATE_PREPARES   => false,
            ]
        );
    } catch (PDOException $e) {
        error_log('WikiLib BD: ' . $e->getMessage());
        fallar('No se pudo conectar con la base de datos.', 500);
    }
    return $pdo;
}

// ---------------------------------------------------------------------------
// Entrada
// ---------------------------------------------------------------------------
function cuerpo(): array
{
    $crudo = file_get_contents('php://input') ?: '';
    $datos = json_decode($crudo, true);
    return is_array($datos) ? $datos : [];
}

function campo(array $datos, string $clave, int $max = 8000): string
{
    $v = $datos[$clave] ?? '';
    if (!is_string($v)) {
        return '';
    }
    return mb_substr(trim($v), 0, $max);
}

function exigirMetodo(string $metodo): void
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== $metodo) {
        fallar('Método no permitido.', 405);
    }
}

// ---------------------------------------------------------------------------
// Usuario actual
// ---------------------------------------------------------------------------
function usuarioActual(): ?array
{
    if (empty($_SESSION['uid'])) {
        return null;
    }
    $st = bd()->prepare(
        'SELECT id, email, apodo, verificado, creado_en FROM usuarios WHERE id = ?'
    );
    $st->execute([$_SESSION['uid']]);
    $u = $st->fetch();
    if (!$u) {
        // La cuenta ya no existe: no dejar una sesión colgada apuntando al vacío.
        session_destroy();
        return null;
    }
    $u['verificado'] = (bool) $u['verificado'];
    return $u;
}

function exigirSesion(): array
{
    $u = usuarioActual();
    if (!$u) {
        fallar('Necesitás iniciar sesión.', 401);
    }
    return $u;
}

/** Publicar exige cuenta verificada. Se comprueba acá, no en el navegador. */
function exigirVerificado(): array
{
    $u = exigirSesion();
    if (!$u['verificado']) {
        fallar('Necesitás verificar tu cuenta antes de publicar.', 403);
    }
    return $u;
}

// ---------------------------------------------------------------------------
// Límite de intentos
//
// Sin esto, cualquiera puede probar contraseñas a repetición o usar el envío
// de códigos para mandar correo a terceros.
// ---------------------------------------------------------------------------
function limitar(string $accion, int $maximo, int $ventanaSegundos): void
{
    $ip = substr((string) ($_SERVER['REMOTE_ADDR'] ?? 'desconocida'), 0, 45);
    $desde = date('Y-m-d H:i:s', time() - $ventanaSegundos);

    $st = bd()->prepare(
        'SELECT COUNT(*) c FROM intentos WHERE accion = ? AND ip = ? AND creado_en > ?'
    );
    $st->execute([$accion, $ip, $desde]);
    if ((int) $st->fetch()['c'] >= $maximo) {
        fallar('Demasiados intentos seguidos. Esperá unos minutos.', 429);
    }

    bd()->prepare('INSERT INTO intentos (accion, ip) VALUES (?, ?)')
        ->execute([$accion, $ip]);

    // Limpieza oportunista: evita que la tabla crezca sin control sin
    // necesitar una tarea programada.
    if (random_int(1, 50) === 1) {
        bd()->prepare('DELETE FROM intentos WHERE creado_en < ?')
            ->execute([date('Y-m-d H:i:s', time() - 86400)]);
    }
}

// ---------------------------------------------------------------------------
// Correo
// ---------------------------------------------------------------------------
function enviarCodigo(string $destino, string $codigo): bool
{
    global $CONFIG;
    $de     = $CONFIG['mail']['from'];
    $deNom  = $CONFIG['mail']['from_name'];

    $asunto = '=?UTF-8?B?' . base64_encode("Tu código de WikiLib: $codigo") . '?=';

    $html = '<!doctype html><html lang="es"><body style="font-family:system-ui,sans-serif;'
        . 'background:#fbfbfa;padding:32px;color:#1a1a18">'
        . '<div style="max-width:480px;margin:0 auto;background:#fff;border:1px solid #e3e3df;'
        . 'border-radius:10px;padding:28px">'
        . '<p style="margin:0 0 6px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;'
        . 'color:#1c5d99;font-weight:700">WikiLib</p>'
        . '<h1 style="margin:0 0 12px;font-size:20px">Tu código de verificación</h1>'
        . '<p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#5c5c56">'
        . 'Ingresá este código en WikiLib para poder publicar en la comunidad:</p>'
        . '<p style="margin:0 0 20px;font-size:32px;letter-spacing:8px;font-weight:700;'
        . 'font-family:monospace">' . htmlspecialchars($codigo, ENT_QUOTES) . '</p>'
        . '<p style="margin:0;font-size:13px;line-height:1.6;color:#86867e">'
        . 'Vence en una hora. Si no pediste esto, ignorá el mensaje: '
        . 'nadie puede entrar a tu cuenta sólo con este correo.</p>'
        . '</div></body></html>';

    $cabeceras = implode("\r\n", [
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'From: ' . mb_encode_mimeheader($deNom) . " <$de>",
        'Reply-To: ' . $de,
        'X-Mailer: WikiLib',
    ]);

    $ok = @mail($destino, $asunto, $html, $cabeceras, '-f' . $de);
    if (!$ok) {
        error_log("WikiLib: no se pudo enviar el código a $destino");
    }
    return $ok;
}

function generarCodigo(): string
{
    return str_pad((string) random_int(0, 999999), 6, '0', STR_PAD_LEFT);
}
