<?php
/**
 * Copiar este archivo como config.php y completar con los datos reales.
 *
 * config.php NO se sube al repositorio: contiene credenciales.
 */
return [
  // hPanel -> Bases de datos -> MySQL. Anotar los cuatro valores al crearla.
  'db' => [
    'host' => 'localhost',
    'name' => 'uXXXXXXX_wikilib',
    'user' => 'uXXXXXXX_wikilib',
    'pass' => '',
  ],

  // Casilla desde la que salen los códigos de verificación.
  // Conviene crearla en hPanel -> Correos, con el dominio propio: así el SPF
  // coincide y los mensajes no caen en spam.
  'mail' => [
    'from'      => 'no-reply@wikilib.xyz',
    'from_name' => 'WikiLib',
  ],

  // Opcional. Sin esto, el botón de Google no se muestra y el resto funciona igual.
  // Se obtiene en console.cloud.google.com -> Credenciales -> ID de cliente OAuth.
  'google_client_id' => '',

  // Orígenes autorizados a llamar a esta API.
  'origenes' => ['https://wikilib.xyz', 'https://www.wikilib.xyz'],
];
