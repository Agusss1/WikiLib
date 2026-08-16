<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

exigirMetodo('POST');
limitar('registro', 5, 3600);

$d      = cuerpo();
$email  = mb_strtolower(campo($d, 'email', 190));
$clave  = (string) ($d['clave'] ?? '');
$apodo  = campo($d, 'apodo', 24);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fallar('Ese email no parece válido.');
}
if (mb_strlen($clave) < 8) {
    fallar('La contraseña tiene que tener al menos 8 caracteres.');
}
if (mb_strlen($apodo) < 3 || mb_strlen($apodo) > 24) {
    fallar('El apodo debe tener entre 3 y 24 caracteres.');
}
if (!preg_match('/^[\p{L}\p{N}_. -]+$/u', $apodo)) {
    fallar('El apodo sólo puede tener letras, números, espacios, puntos, guiones y guiones bajos.');
}

$st = bd()->prepare('SELECT 1 FROM usuarios WHERE email = ?');
$st->execute([$email]);
if ($st->fetch()) {
    fallar('Ya existe una cuenta con ese email. Probá iniciar sesión.');
}

$st = bd()->prepare('SELECT 1 FROM usuarios WHERE apodo = ?');
$st->execute([$apodo]);
if ($st->fetch()) {
    fallar('Ese apodo ya está en uso. Elegí otro.');
}

$st = bd()->prepare(
    'INSERT INTO usuarios (email, clave_hash, apodo, verificado) VALUES (?, ?, ?, 0)'
);
$st->execute([$email, password_hash($clave, PASSWORD_DEFAULT), $apodo]);

// Sesión inmediata: se puede usar todo el sitio sin verificar.
// La verificación se exige recién al publicar.
session_regenerate_id(true);
$_SESSION['uid'] = (int) bd()->lastInsertId();

responder([
  'usuario' => [
    'id'         => $_SESSION['uid'],
    'email'      => $email,
    'apodo'      => $apodo,
    'verificado' => false,
  ],
  'mensaje' => 'Cuenta creada. Ya podés leer y navegar todo; para publicar en la comunidad hay que verificar el email.',
], 201);
