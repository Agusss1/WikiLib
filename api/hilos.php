<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

$metodo = $_SERVER['REQUEST_METHOD'] ?? 'GET';

// ---------------------------------------------------------------------------
// GET: listar hilos, o uno solo con ?id=
// Leer no requiere cuenta.
// ---------------------------------------------------------------------------
if ($metodo === 'GET') {
    $id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

    if ($id > 0) {
        $st = bd()->prepare(
            'SELECT h.id, h.titulo, h.cuerpo, h.tema, h.creado_en,
                    u.apodo AS autor, u.id AS autor_id,
                    (SELECT COUNT(*) FROM respuestas r
                      WHERE r.hilo_id = h.id AND r.oculto = 0) AS respuestas
               FROM hilos h
               JOIN usuarios u ON u.id = h.usuario_id
              WHERE h.id = ? AND h.oculto = 0'
        );
        $st->execute([$id]);
        $h = $st->fetch();
        if (!$h) {
            fallar('Ese hilo no existe o fue borrado.', 404);
        }
        $h['id'] = (int) $h['id'];
        $h['autor_id'] = (int) $h['autor_id'];
        $h['respuestas'] = (int) $h['respuestas'];
        responder(['hilo' => $h]);
    }

    $tema = isset($_GET['tema']) ? substr((string) $_GET['tema'], 0, 32) : 'todos';
    $sql = 'SELECT h.id, h.titulo, h.cuerpo, h.tema, h.creado_en,
                   u.apodo AS autor, u.id AS autor_id,
                   (SELECT COUNT(*) FROM respuestas r
                     WHERE r.hilo_id = h.id AND r.oculto = 0) AS respuestas
              FROM hilos h
              JOIN usuarios u ON u.id = h.usuario_id
             WHERE h.oculto = 0';
    $args = [];
    if ($tema !== '' && $tema !== 'todos') {
        $sql .= ' AND h.tema = ?';
        $args[] = $tema;
    }
    $sql .= ' ORDER BY h.creado_en DESC LIMIT 50';

    $st = bd()->prepare($sql);
    $st->execute($args);
    $hilos = array_map(static function (array $h): array {
        $h['id'] = (int) $h['id'];
        $h['autor_id'] = (int) $h['autor_id'];
        $h['respuestas'] = (int) $h['respuestas'];
        return $h;
    }, $st->fetchAll());

    responder(['hilos' => $hilos]);
}

// ---------------------------------------------------------------------------
// POST: crear un hilo. Exige cuenta VERIFICADA.
// ---------------------------------------------------------------------------
exigirMetodo('POST');
$u = exigirVerificado();
limitar('hilo', 10, 3600);

$d      = cuerpo();
$titulo = campo($d, 'titulo', 160);
$texto  = campo($d, 'cuerpo', 8000);
$tema   = campo($d, 'tema', 32) ?: 'general';

$temasValidos = ['general', 'economia', 'argentina', 'filosofia', 'lecturas', 'wiki'];
if (!in_array($tema, $temasValidos, true)) {
    $tema = 'general';
}
if (mb_strlen($titulo) < 8 || mb_strlen($titulo) > 160) {
    fallar('El título tiene que tener entre 8 y 160 caracteres.');
}
if (mb_strlen($texto) < 20) {
    fallar('El texto del hilo tiene que tener al menos 20 caracteres.');
}

bd()->prepare(
    'INSERT INTO hilos (usuario_id, titulo, cuerpo, tema) VALUES (?, ?, ?, ?)'
)->execute([$u['id'], $titulo, $texto, $tema]);

responder(['id' => (int) bd()->lastInsertId()], 201);
