<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

exigirMetodo('POST');
$u = exigirSesion();

if ($u['verificado']) {
    responder(['ok' => true, 'mensaje' => 'Tu cuenta ya está verificada.']);
}

// Tope por IP y también por cuenta: sin el segundo, alguien podría usar la
// API para bombardear de correos a una dirección ajena que registró.
limitar('codigo', 6, 3600);

$st = bd()->prepare(
    'SELECT COUNT(*) c FROM codigos WHERE usuario_id = ? AND creado_en > ?'
);
$st->execute([$u['id'], date('Y-m-d H:i:s', time() - 3600)]);
if ((int) $st->fetch()['c'] >= 5) {
    fallar('Pediste demasiados códigos. Esperá una hora.', 429);
}

$codigo = generarCodigo();

// Se envía primero y se guarda después. Al revés quedaría un código válido en
// la base que nunca llegó a destino: la persona no podría usarlo y tampoco
// sabría por qué.
if (!enviarCodigo($u['email'], $codigo)) {
    fallar(
        'No pudimos enviar el correo desde el servidor. '
        . 'Si ya tenías un código de antes, todavía lo podés usar.',
        500
    );
}

bd()->prepare('DELETE FROM codigos WHERE usuario_id = ?')->execute([$u['id']]);
bd()->prepare(
    'INSERT INTO codigos (usuario_id, codigo_hash, vence_en) VALUES (?, ?, ?)'
)->execute([
    $u['id'],
    password_hash($codigo, PASSWORD_DEFAULT),
    date('Y-m-d H:i:s', time() + 3600),
]);

responder([
  'ok' => true,
  'mensaje' => "Te mandamos un código de 6 dígitos a {$u['email']}. Puede tardar un par de minutos, y a veces cae en spam.",
]);
