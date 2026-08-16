<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

/** Quién está conectado. Se llama al cargar cualquier página. */
$u = usuarioActual();
responder([
  'usuario' => $u ? [
    'id'         => (int) $u['id'],
    'email'      => $u['email'],
    'apodo'      => $u['apodo'],
    'verificado' => $u['verificado'],
  ] : null,
  // Público por diseño: el ID de cliente de Google no es un secreto.
  'google_client_id' => (string) ($GLOBALS['CONFIG']['google_client_id'] ?? ''),
]);
