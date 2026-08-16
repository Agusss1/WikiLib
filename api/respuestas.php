<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

$metodo = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($metodo === 'GET') {
    $hilo = isset($_GET['hilo']) ? (int) $_GET['hilo'] : 0;
    if ($hilo <= 0) {
        fallar('Falta indicar el hilo.');
    }
    $st = bd()->prepare(
        'SELECT r.id, r.cuerpo, r.creado_en, u.apodo AS autor, u.id AS autor_id
           FROM respuestas r
           JOIN usuarios u ON u.id = r.usuario_id
          WHERE r.hilo_id = ? AND r.oculto = 0
          ORDER BY r.creado_en ASC
          LIMIT 500'
    );
    $st->execute([$hilo]);
    $rs = array_map(static function (array $r): array {
        $r['id'] = (int) $r['id'];
        $r['autor_id'] = (int) $r['autor_id'];
        return $r;
    }, $st->fetchAll());
    responder(['respuestas' => $rs]);
}

exigirMetodo('POST');
$u = exigirVerificado();
limitar('respuesta', 30, 3600);

$d     = cuerpo();
$hilo  = (int) ($d['hilo'] ?? 0);
$texto = campo($d, 'cuerpo', 8000);

if ($hilo <= 0) {
    fallar('Falta indicar el hilo.');
}
if (mb_strlen($texto) < 2) {
    fallar('La respuesta no puede estar vacía.');
}

$st = bd()->prepare('SELECT 1 FROM hilos WHERE id = ? AND oculto = 0');
$st->execute([$hilo]);
if (!$st->fetch()) {
    fallar('Ese hilo no existe o fue borrado.', 404);
}

bd()->prepare(
    'INSERT INTO respuestas (hilo_id, usuario_id, cuerpo) VALUES (?, ?, ?)'
)->execute([$hilo, $u['id'], $texto]);

responder(['id' => (int) bd()->lastInsertId()], 201);
