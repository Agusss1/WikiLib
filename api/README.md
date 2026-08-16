# Instalar la comunidad en Hostinger

La Wiki funciona entera sin esto. Sólo la sección **Comunidad** necesita cuentas, y
por eso hay una API en PHP que corre en tu propio hosting: sin servicios de terceros,
sin costos adicionales y con los datos en tu servidor.

Son unos 15 minutos, una sola vez.

---

## 1. Crear la base de datos

En **hPanel → Bases de datos → MySQL**:

1. Crear una base nueva. Anotá los **cuatro** valores que te muestra: nombre de la
   base, usuario, contraseña y host (casi siempre `localhost`).
2. Entrar a **phpMyAdmin** → elegir la base → pestaña **SQL**.
3. Pegar todo el contenido de [`schema.sql`](./schema.sql) y ejecutar.

Deberían quedar seis tablas: `usuarios`, `codigos`, `hilos`, `respuestas`,
`reportes` e `intentos`.

## 2. Crear la casilla de envío

En **hPanel → Correos → Cuentas de correo**, crear algo como
`no-reply@wikilib.xyz`.

Esto importa más de lo que parece: si los códigos salen desde una dirección del
propio dominio, el registro SPF coincide y los mensajes tienen muchas más chances de
llegar a la bandeja en lugar de a spam.

## 3. Subir la API

Subir la carpeta `api/` completa a **`public_html/api/`**, salvo `README.md` y
`config.example.php`, que no hacen falta en el servidor.

Debe quedar así:

```
public_html/
├── index.html          ← el sitio
├── _next/
└── api/
    ├── .htaccess
    ├── _bootstrap.php
    ├── config.php      ← lo creás en el paso siguiente
    ├── sesion.php
    ├── registro.php
    └── … el resto
```

El `.htaccess` que va adentro de `api/` bloquea el acceso directo a `config.php` y a
`_bootstrap.php`. **No lo borres**: sin él, alguien podría pedir
`wikilib.xyz/api/config.php` y ver las credenciales de la base.

## 4. Crear `config.php`

Copiar `config.example.php` como **`config.php`** y completar con los datos del
paso 1:

```php
'db' => [
  'host' => 'localhost',
  'name' => 'u123456789_wikilib',
  'user' => 'u123456789_wikilib',
  'pass' => 'la-contraseña-que-anotaste',
],
'mail' => [
  'from'      => 'no-reply@wikilib.xyz',
  'from_name' => 'WikiLib',
],
'origenes' => ['https://wikilib.xyz', 'https://www.wikilib.xyz'],
```

**Comprobar que anda**: abrí `https://wikilib.xyz/api/sesion.php` en el navegador.
Tiene que responder `{"usuario":null,"google_client_id":""}`. Si ves un error de
conexión, revisá los cuatro datos de la base.

## 5. Ingreso con Google (opcional)

Si lo salteás, el botón no aparece y el registro con email funciona igual.

1. En [Google Cloud Console](https://console.cloud.google.com/apis/credentials):
   **Crear credenciales → ID de cliente de OAuth → Aplicación web**.
2. En **Orígenes autorizados de JavaScript**: `https://wikilib.xyz`
3. Copiar el *ID de cliente* a `config.php`:
   ```php
   'google_client_id' => '123456789-xxxxx.apps.googleusercontent.com',
   ```

No hace falta el *client secret*: el servidor valida el token contra Google
directamente.

## 6. Publicar el sitio

El sitio y la API van en el mismo dominio, así que no hay nada más que configurar:

```bash
npm run build
```

y subir el contenido de `out/` a `public_html/`, **sin borrar la carpeta `api/`**.

---

## Cómo comprobar que quedó todo bien

1. Registrate con un email y un apodo → tenés que entrar enseguida.
2. Andá a **Comunidad** → dice que falta verificar tu cuenta.
3. Pedí el código y revisá que llegue el mail (mirá spam la primera vez).
4. Ingresá el código → aparece el botón **Abrir un hilo**.
5. Publicá un hilo y respondelo.

---

## Cómo está protegido esto

| Riesgo | Cómo se ataja |
|---|---|
| Inyección de SQL | Consultas preparadas reales (`EMULATE_PREPARES` desactivado) |
| Contraseñas robadas | `password_hash` con bcrypt; nunca se guarda el texto |
| Códigos filtrados de la base | Se guardan hasheados, igual que las contraseñas |
| Fuerza bruta de contraseñas | 10 intentos por IP cada 15 minutos |
| Fuerza bruta del código | 8 intentos por código, y después se anula |
| Usar la API para spamear | 6 códigos por IP y 5 por cuenta cada hora |
| Robo de sesión por scripts | Cookie `httpOnly`: el JavaScript no puede leerla |
| Peticiones desde otro sitio | Cookie `SameSite=Strict` + lista de orígenes permitidos |
| Ver quién está registrado | Email inexistente y contraseña mala dan el mismo mensaje |
| Publicar sin verificar | Se rechaza en el servidor, no en el navegador |

Ese último es el importante: si la comprobación estuviera sólo en la interfaz,
alcanzaría con abrir la consola del navegador para saltearla.

---

## Si algo falla

**"La API no está configurada"** → falta `config.php`, o quedó con otro nombre.

**"No se pudo conectar con la base de datos"** → alguno de los cuatro valores de
`db` está mal. En Hostinger el usuario suele llevar el prefijo `u123456789_`.

**El código no llega** → revisá spam. Si nunca llega, probablemente `mail()` esté
deshabilitado en tu plan; en ese caso hay que usar SMTP con la casilla del paso 2.

**"Origen no autorizado"** → falta tu dominio en `origenes`. Si entrás por
`www.wikilib.xyz`, ese también tiene que estar.

**Error 500 sin explicación** → mirá el registro de errores en
**hPanel → Avanzado → Registros de errores de PHP**.
