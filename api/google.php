<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

/**
 * Ingreso con Google.
 *
 * El navegador obtiene un id_token y lo manda acá. El servidor lo valida
 * contra Google antes de creer nada: un token no verificado es simplemente
 * texto que cualquiera puede inventar.
 */
exigirMetodo('POST');
limitar('google', 20, 900);

$clientId = (string) ($CONFIG['google_client_id'] ?? '');
if ($clientId === '') {
    fallar('El ingreso con Google no está configurado.', 503);
}

$token = campo(cuerpo(), 'credential', 4096);
if ($token === '') {
    fallar('Falta el token de Google.');
}

$ctx = stream_context_create(['http' => ['timeout' => 10, 'ignore_errors' => true]]);
$raw = @file_get_contents(
    'https://oauth2.googleapis.com/tokeninfo?id_token=' . urlencode($token),
    false,
    $ctx
);
$info = $raw ? json_decode($raw, true) : null;

if (!is_array($info) || !empty($info['error'])) {
    fallar('No pudimos validar tu cuenta de Google.', 401);
}
if (($info['aud'] ?? '') !== $clientId) {
    fallar('Ese token no fue emitido para este sitio.', 401);
}
if (!in_array($info['iss'] ?? '', ['accounts.google.com', 'https://accounts.google.com'], true)) {
    fallar('Token de origen inesperado.', 401);
}
if ((int) ($info['exp'] ?? 0) < time()) {
    fallar('El token de Google venció. Probá de nuevo.', 401);
}

$email    = mb_strtolower((string) ($info['email'] ?? ''));
$googleId = (string) ($info['sub'] ?? '');
$verifEmail = ($info['email_verified'] ?? 'false');
$emailVerificado = $verifEmail === true || $verifEmail === 'true';

if ($email === '' || $googleId === '') {
    fallar('Google no devolvió un email utilizable.', 401);
}

$st = bd()->prepare('SELECT id, email, apodo, verificado FROM usuarios WHERE google_id = ? OR email = ?');
$st->execute([$googleId, $email]);
$u = $st->fetch();

if ($u) {
    // Vincula la cuenta preexistente creada con email y contraseña.
    bd()->prepare('UPDATE usuarios SET google_id = ?, verificado = GREATEST(verificado, ?) WHERE id = ?')
        ->execute([$googleId, $emailVerificado ? 1 : 0, $u['id']]);
    $id = (int) $u['id'];
    $apodo = $u['apodo'];
    $verificado = $u['verificado'] || $emailVerificado;
} else {
    // Apodo a partir del nombre de Google, desambiguando si ya existe.
    $base = trim((string) ($info['name'] ?? '')) ?: explode('@', $email)[0];
    $base = preg_replace('/[^\p{L}\p{N}_. -]/u', '', $base) ?? '';
    $base = mb_substr(trim($base), 0, 24);
    if (mb_strlen($base) < 3) {
        $base = 'lector';
    }
    $apodo = $base;
    $n = 0;
    while (true) {
        $c = bd()->prepare('SELECT 1 FROM usuarios WHERE apodo = ?');
        $c->execute([$apodo]);
        if (!$c->fetch()) {
            break;
        }
        $apodo = mb_substr($base, 0, 20) . (++$n);
    }

    bd()->prepare(
        'INSERT INTO usuarios (email, apodo, verificado, google_id) VALUES (?, ?, ?, ?)'
    )->execute([$email, $apodo, $emailVerificado ? 1 : 0, $googleId]);
    $id = (int) bd()->lastInsertId();
    $verificado = $emailVerificado;
}

session_regenerate_id(true);
$_SESSION['uid'] = $id;

responder(['usuario' => [
  'id'         => $id,
  'email'      => $email,
  'apodo'      => $apodo,
  'verificado' => (bool) $verificado,
]]);
