<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

exigirMetodo('POST');
limitar('ingresar', 10, 900);

$d     = cuerpo();
$email = mb_strtolower(campo($d, 'email', 190));
$clave = (string) ($d['clave'] ?? '');

$st = bd()->prepare('SELECT id, clave_hash, apodo, email, verificado FROM usuarios WHERE email = ?');
$st->execute([$email]);
$u = $st->fetch();

// Un mensaje único para email inexistente y contraseña equivocada: decir cuál
// de los dos falló le confirmaría a un atacante qué direcciones están registradas.
if (!$u || !$u['clave_hash'] || !password_verify($clave, $u['clave_hash'])) {
    fallar('El email o la contraseña no coinciden.', 401);
}

if (password_needs_rehash($u['clave_hash'], PASSWORD_DEFAULT)) {
    bd()->prepare('UPDATE usuarios SET clave_hash = ? WHERE id = ?')
        ->execute([password_hash($clave, PASSWORD_DEFAULT), $u['id']]);
}

session_regenerate_id(true);
$_SESSION['uid'] = (int) $u['id'];

responder(['usuario' => [
  'id'         => (int) $u['id'],
  'email'      => $u['email'],
  'apodo'      => $u['apodo'],
  'verificado' => (bool) $u['verificado'],
]]);
