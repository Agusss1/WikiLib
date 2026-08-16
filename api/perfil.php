<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

exigirMetodo('POST');
$u = exigirSesion();
limitar('perfil', 10, 3600);

$apodo = campo(cuerpo(), 'apodo', 24);
if (mb_strlen($apodo) < 3 || mb_strlen($apodo) > 24) {
    fallar('El apodo debe tener entre 3 y 24 caracteres.');
}
if (!preg_match('/^[\p{L}\p{N}_. -]+$/u', $apodo)) {
    fallar('El apodo sólo puede tener letras, números, espacios, puntos, guiones y guiones bajos.');
}

$st = bd()->prepare('SELECT 1 FROM usuarios WHERE apodo = ? AND id <> ?');
$st->execute([$apodo, $u['id']]);
if ($st->fetch()) {
    fallar('Ese apodo ya está en uso. Elegí otro.');
}

bd()->prepare('UPDATE usuarios SET apodo = ? WHERE id = ?')->execute([$apodo, $u['id']]);
responder(['ok' => true, 'mensaje' => 'Apodo actualizado.', 'apodo' => $apodo]);
