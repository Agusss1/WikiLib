<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

exigirMetodo('POST');
$u = exigirSesion();
limitar('verificar', 15, 900);

$codigo = preg_replace('/\D/', '', campo(cuerpo(), 'codigo', 10)) ?? '';
if (strlen($codigo) !== 6) {
    fallar('El código son 6 dígitos.');
}

$st = bd()->prepare(
    'SELECT id, codigo_hash, intentos, vence_en FROM codigos
     WHERE usuario_id = ? ORDER BY id DESC LIMIT 1'
);
$st->execute([$u['id']]);
$fila = $st->fetch();

if (!$fila) {
    fallar('No hay ningún código pendiente. Pedí uno nuevo.');
}
if (strtotime($fila['vence_en']) < time()) {
    bd()->prepare('DELETE FROM codigos WHERE id = ?')->execute([$fila['id']]);
    fallar('El código venció. Pedí uno nuevo.');
}
// Sin este tope, seis dígitos se adivinan por fuerza bruta.
if ((int) $fila['intentos'] >= 8) {
    bd()->prepare('DELETE FROM codigos WHERE id = ?')->execute([$fila['id']]);
    fallar('Demasiados intentos con ese código. Pedí uno nuevo.');
}

if (!password_verify($codigo, $fila['codigo_hash'])) {
    bd()->prepare('UPDATE codigos SET intentos = intentos + 1 WHERE id = ?')
        ->execute([$fila['id']]);
    fallar('El código no es correcto. Revisá que sean los 6 dígitos del último mail.');
}

bd()->prepare('UPDATE usuarios SET verificado = 1 WHERE id = ?')->execute([$u['id']]);
bd()->prepare('DELETE FROM codigos WHERE usuario_id = ?')->execute([$u['id']]);

responder([
  'ok' => true,
  'mensaje' => 'Cuenta verificada. Ya podés publicar en la comunidad.',
  'usuario' => [
    'id'         => (int) $u['id'],
    'email'      => $u['email'],
    'apodo'      => $u['apodo'],
    'verificado' => true,
  ],
]);
