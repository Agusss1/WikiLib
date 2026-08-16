# Conectar la comunidad

La Wiki funciona entera sin esto. Sólo la sección **Comunidad** necesita cuentas,
y por eso vive en un servicio aparte: el sitio es HTML estático y no tiene
servidor propio donde correr autenticación ni base de datos.

Toda la configuración lleva unos diez minutos y se hace una sola vez.

---

## 1. Crear el proyecto

En [supabase.com](https://supabase.com) → **New project**. Elegí la región más
cercana (São Paulo para Argentina). El plan gratuito alcanza de sobra.

## 2. Crear las tablas

**SQL Editor → New query** → pegar todo el contenido de
[`schema.sql`](./schema.sql) → **Run**.

Eso crea perfiles, hilos, respuestas y reportes, y —lo importante— las políticas
que hacen que **sólo las cuentas verificadas puedan publicar**. Esa regla vive en
la base de datos, no en la interfaz: ocultar un botón no protege nada, porque
cualquiera puede llamar a la API directamente.

## 3. Permitir registrarse sin verificar

**Authentication → Sign In / Providers → Email** y **desactivar "Confirm email"**.

Es lo que hace posible el comportamiento pedido: la persona se registra y entra
enseguida, y recién cuando quiere publicar se le pide el código. Si esta opción
queda activada, Supabase le bloquea el ingreso hasta confirmar, que es
exactamente lo contrario.

## 4. Que el mail traiga un código y no un enlace

**Authentication → Emails → Magic Link**, y usar una plantilla con el token:

```html
<h2>Tu código de verificación</h2>
<p>Ingresá este código en WikiLib para verificar tu cuenta:</p>
<p style="font-size:28px;letter-spacing:6px;font-weight:bold">{{ .Token }}</p>
<p>Vence en una hora. Si no pediste esto, ignorá el mensaje.</p>
```

La clave es `{{ .Token }}`: es el código de 6 dígitos. Si la plantilla usa
`{{ .ConfirmationURL }}`, llega un enlace en lugar de un número.

## 5. Entrar con Google

1. En [Google Cloud Console](https://console.cloud.google.com/apis/credentials):
   **Create credentials → OAuth client ID → Web application**.
2. En **Authorized redirect URIs**, pegar la URL que muestra Supabase en
   **Authentication → Providers → Google** (termina en `/auth/v1/callback`).
3. Copiar el *Client ID* y el *Client secret* a Supabase y activar el proveedor.

## 6. Autorizar tu dominio

**Authentication → URL Configuration**:

- **Site URL**: `https://wikilib.xyz`
- **Redirect URLs**: agregar `https://wikilib.xyz/entrar/` y, para desarrollo,
  `http://localhost:3000/entrar/`

Sin esto el login de Google vuelve a una página en blanco.

## 7. Conectar el sitio

Crear un archivo `.env.local` en la raíz del proyecto:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
```

Los dos valores están en **Project Settings → API**. Usar la clave `anon`
(pública), **nunca** la `service_role`.

Después:

```bash
npm run build     # los valores quedan incrustados en el HTML generado
```

y subir de nuevo el contenido de `out/` al hosting.

> La clave `anon` es pública por diseño y no es un secreto: la seguridad la dan
> las políticas de acceso del paso 2, no el ocultamiento de esa clave.

---

## Comprobar que quedó bien

1. Registrarte con un email y un apodo → deberías entrar enseguida.
2. Ir a **Comunidad** → tiene que decir que falta verificar la cuenta.
3. Intentar publicar igual → la base lo rechaza aunque se fuerce desde afuera.
4. Pedir el código, ingresarlo → el aviso desaparece y aparece "Abrir un hilo".
5. Probar "Continuar con Google" → entra ya verificado, sin pedir código.
