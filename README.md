# WikiLib — Wiki Liberal Argentina

> **Aprender. Pensar. Debatir. Participar.**

Base de conocimiento liberal argentina. Pensada para que alguien de 16 años entre sin
saber nada y llegue a entender por qué se discute lo que se discute en el país — y para
que alguien avanzado pueda usarla como referencia.

No es un sitio partidario ni una enciclopedia académica. Cada artículo se explica
primero simple, después completo, con ejemplo argentino, con la lectura liberal
marcada como interpretación, con las objeciones más fuertes que existen en contra, y
con sus fuentes.

---

## Qué hay adentro

| | |
|---|---|
| **36** artículos con estructura editorial completa | **141** términos en el diccionario |
| **44** fuentes con jerarquía de prioridad | **12** autores con sus críticas incluidas |
| **19** libros con dificultad y disponibilidad | **6** rutas de aprendizaje, 61 módulos |
| **13** quizzes con explicación por respuesta | **6** debates con el mejor argumento de cada lado |
| **11** preguntas difíciles | **4** escenarios interactivos de política pública |
| **12** artículos de la Constitución explicados | **11** indicadores con su metodología |

---

## Probarlo

```bash
git clone -b claude/wikilib-argentina-platform-kw9y1z https://github.com/Agusss1/WikiLib.git
cd WikiLib
npm install
npm run dev
```

Abrir **http://localhost:3000**. Requiere Node 20 o superior.

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo, con recarga en caliente |
| `npm run preview` | Compila y sirve el sitio estático final |
| `npm run build` | Valida el contenido y compila a `out/` |
| `npm run content:check` | Sólo el validador editorial |
| `npm run check:assistant` | Verifica que el asistente no responda fuera de tema |
| `npm run typecheck` | `tsc --noEmit` |

### Publicarlo

El sitio compila a HTML estático en `out/`. No necesita servidor Node en
producción y se puede alojar en cualquier lado.

**En un dominio propio** (Hostinger, Netlify, Cloudflare Pages, un bucket):

```bash
npm run build          # genera out/ — SIN variables de entorno
```

Subir **el contenido de `out/`** a la raíz del sitio (`public_html/` en Hostinger),
incluido el `.htaccess`, que configura la página 404, la compresión y el cacheo.

> **Importante:** no definir `NEXT_PUBLIC_BASE_PATH` al compilar para un dominio
> raíz. Esa variable existe sólo para servir desde una subruta como
> `usuario.github.io/WikiLib`, y si queda puesta, todos los CSS y JS apuntan a
> una carpeta que no existe: el sitio carga sin estilos.

**En GitHub Pages**, hay un flujo listo en `.github/workflows/deploy.yml`. Se
ejecuta a pedido desde la pestaña Actions, y requiere haber elegido una vez
**Settings → Pages → Source → GitHub Actions**.

---

## Lo que hace distinto a este proyecto

**El contenido es dato tipado, no prosa libre.** Un artículo es un objeto TypeScript
que obliga a completar la secuencia editorial. Eso tiene una consecuencia concreta:

```ts
// Este tipo hace imposible publicar una cita sin fuente.
| { t: "quote"; text: string; cite: string; sourceId: string }
```

Si alguien escribe una cita sin fuente, o una cifra sin fecha, o un enlace a un
artículo que no existe, **el sitio no compila**. Los principios editoriales no son una
declaración de intenciones: cuatro de los doce están verificados automáticamente en
cada build por `scripts/check-content.ts`.

**El asistente no inventa.** «Preguntale a la Wiki» responde por recuperación sobre
contenido ya publicado y revisado, mostrando de qué artículo salió cada fragmento. Si
la Wiki no cubre el tema, lo dice en lugar de improvisar.

**Las objeciones están escritas en su mejor versión.** El validador incluso advierte
cuando el argumento a favor de una posición es mucho más corto que la respuesta
liberal, porque eso suele indicar un hombre de paja.

---

## Estructura

```
src/content/     Todo el contenido. No importa nada de la UI.
src/lib/         Búsqueda, recuperación, marcado inline, progreso.
src/components/  UI reutilizable.
src/app/         Rutas.
scripts/         El validador editorial.
```

La regla: `content/` no sabe cómo se muestra. Se puede rehacer el diseño entero sin
tocar un artículo.

---

## Comunidad y cuentas

El sitio es estático, así que las cuentas viven en **Supabase**: registro con email y
contraseña o con Google, y verificación por código de 6 dígitos.

Se puede **crear cuenta y usar todo el sitio sin verificar nada**. La verificación se
pide sólo al **publicar** en la comunidad, y esa regla está aplicada por una política de
Postgres, no por la interfaz: ocultar el botón no protegería nada, porque cualquiera
puede llamar a la API directamente.

Sin configurar, la Wiki funciona igual y sólo la sección Comunidad muestra un aviso.
Puesta en marcha en **[`supabase/README.md`](./supabase/README.md)**.

## Documentación

**[ARCHITECTURE.md](./ARCHITECTURE.md)** — arquitectura completa, modelo de datos,
decisiones tomadas y las cinco que conviene revisar antes de seguir.

---

## Estándares editoriales

Están publicados en `/estandares` y son parte del producto, no un anexo:

- Distinguir hechos de opiniones
- Citar fuentes, priorizando siempre la primaria
- No inventar citas ni estadísticas
- Presentar el argumento contrario en su mejor versión
- Reconocer los desacuerdos internos del liberalismo
- Indicar cuándo hay incertidumbre
- Distinguir hechos históricos de interpretaciones
- Indicar fecha de actualización
- No convertir un artículo en propaganda
- Separar el contenido de la Wiki del contenido de la comunidad

Si encontrás una cita mal atribuida, un dato sin respaldo o un artículo que suena a
propaganda, reportarlo es la contribución más valiosa que se puede hacer.
