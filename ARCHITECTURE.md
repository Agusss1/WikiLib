# WikiLib — Arquitectura y propuesta de proyecto

> Nombre provisional del proyecto: **Wiki Liberal Argentina**.
> Este documento responde al punto 35 del pedido inicial: análisis, arquitectura,
> stack, modelo de datos, estructura, navegación, MVP y plan de construcción.
> Está escrito para poder discutirse y corregirse, no como decisión cerrada.

---

## 1. Análisis del punto de partida

El repositorio estaba vacío: no había proyecto previo que analizar ni
restricciones heredadas. Eso permitió elegir la arquitectura desde cero, y también
significa que **todas las decisiones de este documento están abiertas a revisión**.

El pedido describe algo más grande que un sitio: una infraestructura de conocimiento
con estándares editoriales, comunidad y progresión pedagógica. De ahí se desprenden
cuatro exigencias que condicionan toda la arquitectura:

| Exigencia | Consecuencia técnica |
|---|---|
| Cada artículo debe seguir la misma secuencia pedagógica | El contenido no puede ser prosa libre |
| No se pueden inventar citas ni datos | La ausencia de fuente tiene que ser un error, no un descuido |
| Hay que distinguir hecho de opinión | La distinción debe existir a nivel de dato, no de estilo |
| Alguien de 16 años y alguien avanzado usan lo mismo | Un solo contenido con capas, no dos sitios |

---

## 2. La decisión central: el contenido es dato, no prosa

**Es la decisión más importante del proyecto y la que conviene discutir primero.**

Lo natural en un proyecto así sería escribir los artículos en Markdown o MDX. Se
descartó. En su lugar, cada artículo es un **objeto TypeScript tipado**:

```ts
type Article = {
  slug: string;
  title: string;
  question?: string;        // La pregunta tal como la escribiría un lector
  summary: string;
  category: Category;
  level: "inicial" | "intermedio" | "avanzado";
  updated: string;          // Obligatorio. Se muestra siempre.

  simple: Block[];          // "Como si tuvieras 15 años"
  technical: Block[];       // Explicación completa
  argentina?: Block[];      // Cómo se ve esto acá
  everyday?: Block[];       // En la vida cotidiana
  liberalArgument?: Block[];// Se renderiza marcado como interpretación
  positions?: Position[];   // Desacuerdos internos del liberalismo
  critiques?: Critique[];   // Objeción + respuesta
  openDebate?: Block[];
  uncertainty?: string;     // Dónde la evidencia es débil

  keyIdeas: string[];
  related: string[];        // slugs, validados
  glossary: string[];       // términos, validados
  sources: string[];        // ids de fuente, validados
  furtherReading?: Reading[];
};
```

### Qué se gana con esto

1. **La estructura pedagógica se garantiza por tipos, no por disciplina del autor.**
   Es imposible publicar un artículo sin explicación simple. El compilador lo impide.

2. **No hay cita sin fuente. Literalmente.**
   ```ts
   | { t: "quote"; text: string; cite: string; sourceId: string }  // sourceId NO es opcional
   ```
   Escribir una cita sin fuente hace que el proyecto no compile. El principio editorial
   más importante del pedido queda garantizado por el sistema de tipos, no por buena
   voluntad.

3. **No hay cifra sin fecha ni fuente.**
   ```ts
   | { t: "figure"; label: string; value: string; asOf: string; sourceId: string }
   ```

4. **Hecho y opinión se distinguen a nivel de dato.** `liberalArgument` y `positions`
   se renderizan siempre con un rótulo de interpretación. No depende de que el autor
   se acuerde de aclararlo.

5. **El mismo objeto sirve para todo**: se indexa para búsqueda, alimenta al asistente,
   se valida en CI y se computa en el panel editorial. Una sola fuente de verdad.

6. **Migra a base de datos sin reescribir contenido.** El tipo `Article` es exactamente
   el esquema de la tabla futura. Los `Block[]` van a una columna JSONB.

### Qué se pierde

- Escribir un artículo requiere tocar TypeScript, no un editor visual. **Este es el
  costo real y hay que asumirlo:** limita quién puede contribuir directamente hasta
  que exista el editor web (etapa 3). Se mitiga con funciones helper que hacen el
  contenido casi tan legible como Markdown:
  ```ts
  p("La inflación es que el dinero pierde **valor**, no que las cosas valgan más."),
  quote("La inflación es siempre y en todo lugar un fenómeno monetario…",
        "Milton Friedman, 1970", "friedman-counter"),
  callout("ojo", "Cuidado con esto", "…"),
  ```

---

## 3. Stack tecnológico

| Capa | Elección | Por qué |
|---|---|---|
| Framework | **Next.js 15** (App Router) | Genera todo el sitio estático: rapidísimo, indexable, hosting barato. Tiene camino claro a partes dinámicas cuando haga falta. |
| Lenguaje | **TypeScript** estricto | Es lo que hace posible la decisión del punto 2. |
| Estilos | **Tailwind CSS v4** sobre tokens CSS | Los tokens permiten el modo oscuro sin duplicar clases y mantienen la coherencia visual. |
| Búsqueda | **MiniSearch** en el cliente | Índice de ~200 KB, búsqueda instantánea, sin servidor ni costo. |
| Contenido | Módulos TypeScript versionados en git | Historial de cambios gratis, revisión por pull request, sin base de datos. |
| Progreso | `localStorage` | Perfil y progreso funcionando desde el día uno, sin backend. |
| Validación | Script propio en CI | Convierte los principios editoriales en un chequeo que bloquea el build. |

### Lo que se decidió NO usar todavía

- **Base de datos**: el contenido de la Wiki no la necesita y el progreso tampoco. La
  necesita la comunidad, que es etapa 3.
- **CMS**: agregaría una dependencia y perdería la validación por tipos.
- **Autenticación**: no hace falta para leer, estudiar ni medir progreso.
- **Motor de búsqueda externo**: con este volumen de contenido, el cliente alcanza.

Cada una tiene su punto de entrada definido más abajo. La regla fue: no incorporar
infraestructura antes de que exista el problema que resuelve.

---

## 4. Modelo de datos

### Hoy (archivos versionados)

```
Article ──┬── sources: string[] ──→ Source        (validado)
          ├── related: string[] ──→ Article       (validado)
          ├── glossary: string[] ─→ GlossaryTerm  (validado)
          └── Block[]
                ├── quote  → sourceId  (obligatorio)
                └── figure → sourceId + asOf (obligatorios)

Author ─→ works[].sourceId, quotes[].sourceId, relatedArticles[]
Book ──→ sourceId, relatedArticles[]
LearningPath ─→ modules[].article, modules[].quizId
Quiz ─→ questions[].article
Debate / Faq / Scenario / ConstitutionArticle / Indicator ─→ relatedArticles[]
```

Todas las flechas se verifican en `npm run content:check`. Un enlace roto no llega
a producción.

### Mañana (cuando entre la comunidad)

Postgres. El contenido de la Wiki puede quedar en git incluso entonces —tiene
ventajas de auditoría que una base de datos no da— y la base cubre lo que git no
puede: usuarios, discusión y moderación.

```sql
users            (id, email, display_name, role, created_at)
progress         (user_id, article_slug, read_at, saved_at)
path_progress    (user_id, path_id, module_key, completed_at)
quiz_attempts    (user_id, quiz_id, score, total, created_at)

contributions    (id, author_id, type, target_slug, payload JSONB,
                  status, reviewer_id, review_note, created_at)
                 -- status: borrador | pendiente-de-revision |
                 --         necesita-fuentes | aprobado | rechazado
revisions        (id, article_slug, payload JSONB, author_id, created_at)

threads          (id, author_id, title, body, topic, created_at)
posts            (id, thread_id, author_id, body, created_at)
reports          (id, target_type, target_id, reporter_id, reason, status)
events           (id, title, city, starts_at, description)
```

`contributions.payload` guarda un `Article` parcial con la misma forma que hoy tienen
los archivos. Por eso el editor web va a poder correr **el mismo validador** que corre
en el build: un colaborador recibe el mismo mensaje de error que recibiría un
desarrollador.

---

## 5. Estructura de carpetas

```
src/
├── content/                  # TODO el contenido. Sin JSX, sin lógica de UI.
│   ├── schema.ts             # Tipos + helpers de autoría. El contrato.
│   ├── sources.ts            # Registro central de fuentes
│   ├── taxonomy.ts           # Categorías, niveles, sinónimos de búsqueda
│   ├── articles/             # 36 artículos agrupados por área
│   ├── glossary.ts           # 141 términos
│   ├── authors.ts  books.ts  # Biblioteca
│   ├── learning.ts           # Rutas y quizzes
│   ├── debates.ts            # Argumentario y preguntas difíciles
│   ├── interactive.ts        # Escenarios y mapas conceptuales
│   ├── constitution.ts       # Constitución artículo por artículo
│   ├── data.ts               # Indicadores y datos históricos
│   └── editorial.ts          # Principios y estados de contribución
│
├── lib/                      # Lógica pura, sin JSX
│   ├── searchIndex.ts        # Aplana todo el contenido a documentos
│   ├── search.ts             # MiniSearch + sinónimos + tolerancia a errores
│   ├── answer.ts             # Recuperación para "Preguntale a la Wiki"
│   ├── inline.tsx            # Marcado inline: [[enlaces]], {{términos}}
│   └── progress.ts           # Progreso del usuario
│
├── components/               # UI reutilizable
└── app/                      # Rutas (Next.js App Router)

scripts/check-content.ts      # El validador
```

La regla: **`content/` no importa nada de `app/` ni de `components/`.** El contenido
no sabe cómo se muestra. Eso permite cambiar por completo el diseño sin tocar un
artículo, y mover el contenido a una base de datos sin tocar la UI.

---

## 6. Navegación

Barra lateral fija en escritorio, menú desplegable en móvil, agrupada por intención
del usuario y no por tipo de contenido:

- **Empezar** — Inicio · Empezá acá · Rutas · Tests
- **Wiki** — Categorías · Economía · Argentina · Alberdi · Constitución · Corrientes · Vida real
- **Herramientas** — Diccionario · Debates · Preguntas difíciles · ¿Qué haría un liberal? · Mapa conceptual · Argentina en datos · Preguntale a la Wiki
- **Biblioteca** — Autores · Libros · Fuentes
- **Comunidad** — Comunidad · Contribuir · Mi progreso · Estándares editoriales

Además: buscador global con `/` o `Cmd/Ctrl+K` desde cualquier página, breadcrumbs en
todas las vistas profundas, y enlaces contextuales dentro del texto de los artículos.

---

## 7. Búsqueda

El pedido pone un ejemplo concreto: escribir «porque sube el dolar» tiene que
encontrar tipo de cambio, inflación, emisión, reservas y cepo. Funciona:

```
"porque sube el dolar" →  Tipo de cambio: por qué sube el dólar
                          ¿Qué es el cepo cambiario?
                          Las crisis argentinas
                          El Banco Central está perdiendo reservas (escenario)
                          Atraso cambiario (diccionario)
```

Cuatro mecanismos combinados:

1. **Normalización**: se quitan acentos, así «inflacion» encuentra «inflación».
2. **Tolerancia a errores** (`fuzzy: 0.2`) y coincidencia por prefijo.
3. **Diccionario de sinónimos y coloquialismos**: `dolar → tipo de cambio, cepo,
   reservas, brecha`; `maquinita → emisión, inflación`; `laburo → trabajo, empleo`.
4. **Prioridad por tipo**: un artículo pesa más que un término del diccionario.

El índice cubre las **diez** clases de contenido del sitio, no sólo los artículos.

---

## 8. El asistente: por qué recupera en lugar de generar

El punto 25 del pedido describe un asistente que responde usando el contenido de la
Wiki, muestra sus fuentes y avisa cuando algo no está cubierto.

Está implementado como **recuperación pura**: busca los pasajes más relevantes de los
artículos publicados y los muestra con su origen. **No genera texto nuevo.**

La razón es que los principios editoriales del proyecto prohíben inventar citas y
datos, y un modelo generativo sin anclaje estricto puede hacer exactamente eso.
Un asistente que alucina una cita de Alberdi destruiría en un día la credibilidad que
el resto de la arquitectura está diseñada para proteger.

**Capa generativa opcional (etapa 2).** El paso siguiente natural es agregar síntesis
en lenguaje natural sobre los mismos pasajes recuperados:

```
consulta → recuperador (ya existe, en src/lib/answer.ts)
         → pasajes + fuentes
         → modelo, con instrucción de responder ÚNICAMENTE con esos pasajes
         → respuesta + citas verificables contra los pasajes de entrada
```

Condiciones que ese paso debe cumplir para no romper los estándares: la respuesta se
construye sólo con los pasajes recuperados, cada afirmación queda enlazada al artículo
del que salió, y si el recuperador no trae nada, el asistente responde que no está en
la Wiki en lugar de improvisar. La API key iría en variable de entorno y el modo
recuperación seguiría siendo el comportamiento por defecto.

---

## 9. Moderación y contribuciones

Estados definidos en `src/content/editorial.ts` y ya visibles en `/contribuir`:

```
borrador → pendiente-de-revisión → ┬→ aprobado
                                   ├→ necesita-fuentes → (vuelve a revisión)
                                   └→ rechazado (con motivo)
```

Hoy el contenido vive versionado en git, así que el historial de cambios y la revisión
por pares ya existen vía pull requests. El editor web (etapa 3) va a escribir en
`contributions.payload` y correr el mismo validador.

Tipos de contribución previstos, incluido uno que suele faltar en proyectos así:
**«objeción faltante»** — señalar una crítica fuerte que un artículo no contempla. Es
la que más protege al proyecto de convertirse en cámara de eco.

---

## 10. Progreso del usuario

`localStorage`, con esta forma:

```ts
{
  read: string[],                    // slugs leídos
  saved: string[],                   // lista de lectura
  paths: { [pathId]: string[] },     // módulos completados
  quizzes: { [quizId]: { best, total, attempts } },
  topics: string[]
}
```

Funciona sin cuenta, sin servidor y sin cookies. El nivel del usuario (Curioso →
Lector → Estudioso → Analista → Referente) se calcula de ahí.

Cuando existan cuentas, este objeto se convierte en filas de `progress`,
`path_progress` y `quiz_attempts`, y los hooks cambian su implementación sin que
ningún componente tenga que modificarse.

---

## 11. El validador: los principios convertidos en código

`npm run content:check` corre antes de cada build y **bloquea** si encuentra:

- una cita sin `sourceId`, o con un id que no existe
- una cifra sin valor, sin fecha o sin fuente
- un artículo sin explicación simple, sin ideas clave o sin fuentes
- un artículo de nivel intermedio o avanzado **sin objeciones**
- un enlace `[[slug]]` que no resuelve
- un `related`, `glossary` o `sourceId` que apunta al vacío
- una respuesta correcta de quiz fuera de rango, u opciones duplicadas
- un quiz sin explicación en alguna pregunta
- un indicador sin advertencias metodológicas
- un escenario con menos de tres opciones, o con una opción sin análisis de quién gana y quién pierde

Y **advierte** (sin bloquear) sobre: artículos huérfanos, definiciones demasiado
largas, datos pendientes de verificación, y —esto es lo interesante— **debates donde
el argumento a favor es mucho más corto que la respuesta liberal**, porque eso suele
ser señal de un hombre de paja.

Cuatro de los doce principios editoriales están así automatizados. Los otros ocho
requieren juicio humano y están documentados en `/estandares` diciendo explícitamente
cuál es cuál.

---

## 12. MVP: qué está construido

| Pedido | Estado |
|---|---|
| Inicio | ✅ |
| Buscador | ✅ tolerante a errores, con sinónimos |
| Wiki + categorías + artículos | ✅ 36 artículos, 10 categorías |
| Autores | ✅ 12, con críticas y guía por interés |
| Biblioteca | ✅ 19 libros en 9 categorías |
| Argentina | ✅ historia, crisis, Constitución, Alberdi |
| Diccionario | ✅ 141 términos, A–Z |
| Rutas de aprendizaje | ✅ 6 rutas, 61 módulos |
| Usuarios y progreso | ✅ local, sin backend |
| Comunidad básica | ⚠️ diseñada y documentada; requiere cuentas |
| Panel de administración | ✅ con métricas de deuda editorial |
| Fuentes | ✅ 44, con jerarquía de prioridad |
| Tests | ✅ 13 quizzes con explicación por respuesta |
| Debates y argumentario | ✅ 6 debates con estructura completa |
| Preguntas difíciles | ✅ 11, con nota de lo que no resuelven |
| ¿Qué haría un liberal? | ✅ 4 escenarios interactivos |
| Mapa conceptual | ✅ 2 mapas navegables |
| Argentina en datos | ✅ 11 indicadores con metodología |
| Asistente IA | ✅ por recuperación; síntesis generativa en etapa 2 |
| Modo oscuro, responsive | ✅ verificado en 390 px y 1280 px |

---

## 13. Los 30 artículos fundamentales

El pedido pide 30 artículos "extremadamente buenos" antes que 500 genéricos. Hay **36**
publicados, todos con la estructura completa, sus fuentes y sus objeciones:

**Fundamentos (6)** — ¿Qué es el liberalismo? · ¿Qué significa ser liberal? · Libertad ·
Estado · Propiedad privada · Responsabilidad individual

**Mercado y economía básica (6)** — Escasez, incentivos y costo de oportunidad ·
Oferta, demanda y precios · Mercado · Competencia · División del trabajo y comercio ·
Capitalismo

**Moneda (4)** — Dinero · Inflación · Emisión monetaria · Banco Central

**Fiscal (4)** — Impuestos · Gasto público · Déficit fiscal · Deuda pública

**Cambiario (2)** — Tipo de cambio · Cepo cambiario

**Instituciones (4)** — Igualdad ante la ley · Estado de derecho · Instituciones ·
Democracia y liberalismo

**Argentina (4)** — El liberalismo en Argentina · La Constitución de 1853 ·
Las crisis argentinas · Juan Bautista Alberdi

**Corrientes y debates (6)** — Corrientes del liberalismo · Si el mercado funciona,
¿por qué hay pobres? · Cómo debatir bien · Cultura liberal · Tecnología e IA ·
Educación

Los diez primeros niveles de la ruta inicial corresponden exactamente a la progresión
pedida en el punto 3: libertad → Estado → propiedad → mercado → capitalismo → dinero →
impuestos → inflación → déficit → Argentina.

---

## 14. Qué conviene construir después

**Etapa 2 — profundizar lo que ya funciona** (no requiere infraestructura nueva)

1. Llegar a 100 artículos, priorizando: «Liberalismo en la vida real» (alquilar,
   emprender, contratar, jubilarse, salud, seguridad, justicia), historia argentina en
   detalle (Revolución de Mayo, organización nacional, peronismo, convertibilidad,
   2001), y más entradas de la Constitución.
2. Ampliar el argumentario a 20 debates y la FAQ a 30 preguntas.
3. Ingesta automática de INDEC y BCRA para poblar los `DataPoint`.
4. Capa generativa del asistente sobre el recuperador existente.

**Etapa 3 — comunidad** (acá sí entra el backend)

5. Postgres + autenticación, migrando el progreso local.
6. Editor web de contribuciones con el mismo validador.
7. Foro, grupos de lectura, eventos, moderación con los estados ya definidos.

**Etapa 4 — escala**

8. 500+ artículos con equipo editorial y revisión distribuida.
9. Búsqueda semántica si el índice cliente deja de alcanzar.

El orden responde a la prioridad declarada en el pedido:
**claridad → credibilidad → utilidad → comunidad → escala**.

---

## 15. Decisiones que conviene revisar

Las que más impacto tienen y sobre las que hace falta una definición:

1. **Contenido tipado vs. editor visual.** Es la decisión de fondo. Garantiza los
   estándares pero limita quién puede contribuir sin pasar por el editor web.
2. **Progreso local vs. cuentas desde el inicio.** Hoy funciona sin registro, y eso
   baja mucho la barrera de entrada. La contra es que el progreso no se sincroniza
   entre dispositivos.
3. **Asistente por recuperación vs. generativo.** Se eligió no alucinar sobre sonar
   mejor. Es discutible si la síntesis generativa vale el riesgo, y con qué controles.
4. **El panel editorial es público.** Muestra la deuda editorial del proyecto a
   cualquiera. Es coherente con la transparencia declarada, y es una decisión que
   podría no gustar.
5. **El nombre.** «WikiLib» es de trabajo. El pedido dejaba el nombre abierto.

---

## 16. Estado técnico

```
npm run dev             # desarrollo
npm run build           # valida el contenido y luego compila
npm run content:check   # sólo el validador
npm run typecheck       # tsc --noEmit
```

- Build: pasa. ~100 páginas estáticas.
- Validador: sin errores; 2 advertencias intencionales (un dato marcado como pendiente
  de verificar, que es exactamente lo que la advertencia debe reportar).
- Sin desbordes horizontales ni errores de consola en 390 px, 1280 px, claro y oscuro.

**Deuda técnica conocida:** `npm audit` reporta advertencias en `postcss` y `sharp`,
ambas dependencias de build de Next.js 15 sin parche no disruptivo disponible. No
afectan el sitio publicado (son herramientas de compilación). Se resuelven al migrar
a Next.js 16, que conviene hacer como cambio aparte.
