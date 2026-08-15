/**
 * Validador de contenido.
 *
 * Convierte los principios editoriales en un chequeo que corre en cada build.
 * Un principio que no se puede verificar es una consigna; esto es lo que
 * separa a WikiLib de un sitio que simplemente *dice* que cita sus fuentes.
 *
 * Falla el build ante errores. Las advertencias no lo bloquean pero se
 * reportan, porque señalan deuda editorial acumulándose.
 */
import { ARTICLES, ARTICLES_BY_SLUG } from "../src/content/articles/index.js";
import { AUTHORS, AUTHORS_BY_ID } from "../src/content/authors.js";
import { BOOKS } from "../src/content/books.js";
import { CONSTITUTION } from "../src/content/constitution.js";
import { DEBATES, FAQS } from "../src/content/debates.js";
import { GLOSSARY, GLOSSARY_BY_ID } from "../src/content/glossary.js";
import { INDICATORS, HISTORICAL_DATA } from "../src/content/data.js";
import { PATHS, QUIZZES, QUIZZES_BY_ID } from "../src/content/learning.js";
import { SCENARIOS, CONCEPT_MAPS } from "../src/content/interactive.js";
import { SOURCES_BY_ID } from "../src/content/sources.js";
import { CATEGORY_META } from "../src/content/taxonomy.js";
import type { Block } from "../src/content/schema.js";

const errors: string[] = [];
const warnings: string[] = [];

const err = (where: string, msg: string) => errors.push(`${where}: ${msg}`);
const warn = (where: string, msg: string) => warnings.push(`${where}: ${msg}`);

const STATIC_PAGES = new Set([
  "argentina-en-datos",
  "diccionario",
  "biblioteca",
  "comunidad",
  "fuentes",
  "constitucion",
]);

function linkTargets(text: string): string[] {
  const out: string[] = [];
  const re = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) out.push(m[1].trim());
  return out;
}

function termRefs(text: string): string[] {
  const out: string[] = [];
  const re = /\{\{([^}|]+)(?:\|[^}]*)?\}\}/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) out.push(m[1].trim());
  return out;
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const TERM_LOOKUP = new Set<string>();
for (const t of GLOSSARY) {
  TERM_LOOKUP.add(t.id);
  TERM_LOOKUP.add(normalize(t.term));
  for (const a of t.aliases ?? []) TERM_LOOKUP.add(normalize(a));
}

/** Recorre todos los textos de un bloque, validando lo que cada tipo exige. */
function walkBlocks(blocks: Block[] | undefined, where: string): string[] {
  if (!blocks) return [];
  const texts: string[] = [];
  for (const b of blocks) {
    switch (b.t) {
      case "p":
      case "h":
        texts.push(b.text);
        break;
      case "ul":
      case "ol":
        texts.push(...b.items);
        break;
      case "quote":
        // PRINCIPIO: no hay cita sin fuente.
        if (!b.sourceId) err(where, `cita sin sourceId: «${b.text.slice(0, 50)}...»`);
        else if (!SOURCES_BY_ID[b.sourceId])
          err(where, `cita con fuente inexistente "${b.sourceId}"`);
        if (!b.cite?.trim()) err(where, "cita sin atribución (`cite` vacío)");
        break;
      case "callout":
        texts.push(b.text, b.title ?? "");
        break;
      case "steps":
        for (const s of b.items) texts.push(s.title, s.text);
        break;
      case "compare":
        for (const c of b.columns) texts.push(c.title, c.subtitle ?? "", ...c.items);
        break;
      case "figure":
        // PRINCIPIO: ningún número sin valor, fecha y fuente.
        if (!b.value?.trim()) err(where, `figure "${b.label}" sin valor`);
        if (!b.asOf?.trim()) err(where, `figure "${b.label}" sin fecha`);
        if (!b.sourceId) err(where, `figure "${b.label}" sin fuente`);
        else if (!SOURCES_BY_ID[b.sourceId])
          err(where, `figure "${b.label}" con fuente inexistente "${b.sourceId}"`);
        texts.push(b.label);
        break;
      case "formula":
        texts.push(b.text, b.caption ?? "");
        break;
    }
  }
  return texts;
}

// ---------------------------------------------------------------------------
// Artículos
// ---------------------------------------------------------------------------
const slugs = new Set<string>();

for (const a of ARTICLES) {
  const where = `artículo "${a.slug}"`;

  if (slugs.has(a.slug)) err(where, "slug duplicado");
  slugs.add(a.slug);

  if (!/^[a-z0-9-]+$/.test(a.slug)) err(where, "slug con caracteres inválidos");
  if (!CATEGORY_META[a.category]) err(where, `categoría desconocida "${a.category}"`);

  // PRINCIPIO: indicar fecha de actualización.
  if (!/^\d{4}-\d{2}-\d{2}$/.test(a.updated))
    err(where, `fecha de actualización inválida "${a.updated}" (se espera AAAA-MM-DD)`);

  // Estructura editorial mínima.
  if (!a.simple?.length) err(where, "falta la explicación simple");
  if (!a.technical?.length) err(where, "falta la explicación técnica");
  if (!a.keyIdeas?.length) err(where, "faltan ideas clave");
  if (a.summary.length > 240) warn(where, "el resumen supera 240 caracteres");

  // PRINCIPIO: citar fuentes.
  if (!a.sources?.length) err(where, "no declara ninguna fuente");
  for (const s of a.sources)
    if (!SOURCES_BY_ID[s]) err(where, `fuente inexistente "${s}"`);

  // PRINCIPIO: presentar objeciones. Exigido a partir de nivel intermedio.
  if (a.level !== "inicial" && !a.critiques?.length)
    err(where, "artículo intermedio/avanzado sin objeciones");
  if (a.level === "inicial" && !a.critiques?.length)
    warn(where, "artículo inicial sin objeciones: considerá agregar al menos una");

  for (const c of a.critiques ?? []) {
    if (!c.response?.length) err(where, `objeción sin respuesta: «${c.objection.slice(0, 40)}...»`);
    if (c.objection.length < 40)
      warn(where, `objeción muy breve, ¿está en su versión más fuerte?: «${c.objection}»`);
  }

  // Referencias cruzadas.
  for (const r of a.related) {
    if (r === a.slug) err(where, "se relaciona consigo mismo");
    if (!ARTICLES_BY_SLUG[r]) err(where, `related apunta a artículo inexistente "${r}"`);
  }
  for (const g of a.glossary)
    if (!GLOSSARY_BY_ID[g]) err(where, `glossary apunta a término inexistente "${g}"`);

  for (const fr of a.furtherReading ?? [])
    if (fr.sourceId && !SOURCES_BY_ID[fr.sourceId])
      err(where, `lectura recomendada con fuente inexistente "${fr.sourceId}"`);

  // Enlaces y términos dentro del texto.
  const texts = [
    ...walkBlocks(a.simple, where),
    ...walkBlocks(a.technical, where),
    ...walkBlocks(a.argentina, where),
    ...walkBlocks(a.everyday, where),
    ...walkBlocks(a.liberalArgument, where),
    ...walkBlocks(a.openDebate, where),
    ...a.keyIdeas,
    ...(a.critiques ?? []).flatMap((c) => walkBlocks(c.response, where)),
  ];

  for (const t of texts) {
    for (const target of linkTargets(t)) {
      if (
        !ARTICLES_BY_SLUG[target] &&
        !AUTHORS_BY_ID[target] &&
        !STATIC_PAGES.has(target)
      )
        err(where, `enlace [[${target}]] no resuelve`);
    }
    for (const term of termRefs(t)) {
      if (!TERM_LOOKUP.has(normalize(term)))
        warn(where, `término {{${term}}} no está en el diccionario`);
    }
  }
}

// ---------------------------------------------------------------------------
// Diccionario
// ---------------------------------------------------------------------------
const termIds = new Set<string>();
for (const t of GLOSSARY) {
  const where = `término "${t.id}"`;
  if (termIds.has(t.id)) err(where, "id duplicado");
  termIds.add(t.id);
  if (t.article && !ARTICLES_BY_SLUG[t.article])
    err(where, `apunta a artículo inexistente "${t.article}"`);
  if (t.definition.length > 300) warn(where, "definición larga: el diccionario debe ser breve");
}

// ---------------------------------------------------------------------------
// Autores y libros
// ---------------------------------------------------------------------------
for (const a of AUTHORS) {
  const where = `autor "${a.id}"`;
  for (const q of a.quotes ?? []) {
    // PRINCIPIO: no hay cita sin fuente.
    if (!SOURCES_BY_ID[q.sourceId]) err(where, `cita con fuente inexistente "${q.sourceId}"`);
    if (!q.cite?.trim()) err(where, "cita sin atribución precisa");
  }
  for (const w of a.works)
    if (w.sourceId && !SOURCES_BY_ID[w.sourceId])
      err(where, `obra con fuente inexistente "${w.sourceId}"`);
  for (const r of a.relatedArticles)
    if (!ARTICLES_BY_SLUG[r]) err(where, `relatedArticles inexistente "${r}"`);
  if (!a.critiques?.length) err(where, "sin sección de críticas");
}

for (const b of BOOKS) {
  const where = `libro "${b.id}"`;
  if (b.sourceId && !SOURCES_BY_ID[b.sourceId])
    err(where, `fuente inexistente "${b.sourceId}"`);
  for (const r of b.relatedArticles)
    if (!ARTICLES_BY_SLUG[r]) err(where, `relatedArticles inexistente "${r}"`);
}

// ---------------------------------------------------------------------------
// Debates, FAQ, escenarios
// ---------------------------------------------------------------------------
for (const d of DEBATES) {
  const where = `debate "${d.id}"`;
  if (!d.inFavor.length) err(where, "sin argumento a favor");
  if (!d.counter.length) err(where, "sin contraargumento");
  if (!d.open.length) err(where, "sin debate abierto");
  // El argumento contrario no puede ser un espantapájaros.
  const favorLen = d.inFavor.join(" ").length;
  const responseLen = d.liberalResponse.join(" ").length;
  if (favorLen < responseLen * 0.5)
    warn(
      where,
      `el argumento a favor (${favorLen} car.) es mucho más breve que la respuesta liberal (${responseLen} car.): revisá que no sea un hombre de paja`,
    );
  for (const r of d.relatedArticles)
    if (!ARTICLES_BY_SLUG[r]) err(where, `relatedArticles inexistente "${r}"`);
}

for (const f of FAQS) {
  const where = `pregunta "${f.id}"`;
  if (!f.long.length) err(where, "sin desarrollo");
  for (const r of f.relatedArticles)
    if (!ARTICLES_BY_SLUG[r]) err(where, `relatedArticles inexistente "${r}"`);
}

for (const s of SCENARIOS) {
  const where = `escenario "${s.id}"`;
  if (s.options.length < 3) err(where, "menos de 3 opciones: el escenario sería binario");
  for (const o of s.options) {
    if (!o.consequences.length) err(where, `opción "${o.id}" sin consecuencias`);
    if (!o.whoWinsLoses) err(where, `opción "${o.id}" sin quién gana y quién pierde`);
  }
  for (const r of s.relatedArticles)
    if (!ARTICLES_BY_SLUG[r]) err(where, `relatedArticles inexistente "${r}"`);
}

// ---------------------------------------------------------------------------
// Rutas y quizzes
// ---------------------------------------------------------------------------
for (const p of PATHS) {
  const where = `ruta "${p.id}"`;
  for (const m of p.modules) {
    if (!ARTICLES_BY_SLUG[m.article])
      err(where, `módulo ${m.n} apunta a artículo inexistente "${m.article}"`);
    if (m.quizId && !QUIZZES_BY_ID[m.quizId])
      err(where, `módulo ${m.n} apunta a quiz inexistente "${m.quizId}"`);
  }
}

for (const q of QUIZZES) {
  const where = `quiz "${q.id}"`;
  for (const [i, question] of q.questions.entries()) {
    if (question.correct < 0 || question.correct >= question.options.length)
      err(where, `pregunta ${i + 1}: índice de respuesta correcta fuera de rango`);
    // PRINCIPIO: explicar siempre, no sólo corregir.
    if (!question.explain?.trim()) err(where, `pregunta ${i + 1} sin explicación`);
    if (question.article && !ARTICLES_BY_SLUG[question.article])
      err(where, `pregunta ${i + 1} apunta a artículo inexistente "${question.article}"`);
    if (new Set(question.options).size !== question.options.length)
      err(where, `pregunta ${i + 1} tiene opciones duplicadas`);
  }
}

// ---------------------------------------------------------------------------
// Constitución, datos y mapas
// ---------------------------------------------------------------------------
for (const c of CONSTITUTION) {
  const where = `Constitución art. ${c.n}`;
  if (!c.text?.trim()) err(where, "sin texto de la norma");
  if (!c.simple?.trim()) err(where, "sin explicación simple");
  for (const r of c.relatedArticles)
    if (!ARTICLES_BY_SLUG[r]) err(where, `relatedArticles inexistente "${r}"`);
}

for (const i of INDICATORS) {
  const where = `indicador "${i.id}"`;
  if (!SOURCES_BY_ID[i.sourceId]) err(where, `fuente inexistente "${i.sourceId}"`);
  // PRINCIPIO: no publicar datos sin advertencia metodológica.
  if (!i.caveats.length) err(where, "sin advertencias metodológicas");
  for (const r of i.relatedArticles)
    if (!ARTICLES_BY_SLUG[r]) err(where, `relatedArticles inexistente "${r}"`);
}

for (const d of HISTORICAL_DATA) {
  const where = `dato "${d.label}"`;
  if (!SOURCES_BY_ID[d.sourceId]) err(where, `fuente inexistente "${d.sourceId}"`);
  if (!d.asOf) err(where, "sin fecha");
  if (d.indicatorId && !INDICATORS.some((i) => i.id === d.indicatorId))
    err(where, `indicador inexistente "${d.indicatorId}"`);
  if (d.needsVerification) warn(where, "marcado como pendiente de verificación");
}

for (const m of CONCEPT_MAPS) {
  const where = `mapa "${m.id}"`;
  const ids = new Set(m.nodes.map((n) => n.id));
  if (!ids.has(m.root)) err(where, `root "${m.root}" no está entre los nodos`);
  for (const [from, to] of m.edges) {
    if (!ids.has(from)) err(where, `arista desde nodo inexistente "${from}"`);
    if (!ids.has(to)) err(where, `arista hacia nodo inexistente "${to}"`);
  }
  for (const n of m.nodes)
    if (n.article && !ARTICLES_BY_SLUG[n.article])
      err(where, `nodo "${n.id}" apunta a artículo inexistente "${n.article}"`);
}

// ---------------------------------------------------------------------------
// Huérfanos: artículos a los que nadie enlaza
// ---------------------------------------------------------------------------
const linkedTo = new Set<string>();
for (const a of ARTICLES) for (const r of a.related) linkedTo.add(r);
for (const p of PATHS) for (const m of p.modules) linkedTo.add(m.article);
for (const a of ARTICLES)
  if (!linkedTo.has(a.slug))
    warn(`artículo "${a.slug}"`, "ningún otro contenido enlaza a este artículo");

// ---------------------------------------------------------------------------
// Reporte
// ---------------------------------------------------------------------------
const stats = {
  artículos: ARTICLES.length,
  términos: GLOSSARY.length,
  autores: AUTHORS.length,
  libros: BOOKS.length,
  fuentes: Object.keys(SOURCES_BY_ID).length,
  debates: DEBATES.length,
  preguntas: FAQS.length,
  escenarios: SCENARIOS.length,
  rutas: PATHS.length,
  quizzes: QUIZZES.length,
  "artículos de la Constitución": CONSTITUTION.length,
  indicadores: INDICATORS.length,
};

console.log("\n  Validación de contenido de WikiLib\n");
console.log(
  "  " +
    Object.entries(stats)
      .map(([k, v]) => `${v} ${k}`)
      .join("  ·  "),
);

if (warnings.length) {
  console.log(`\n  ${warnings.length} advertencia(s):`);
  for (const w of warnings) console.log(`    · ${w}`);
}

if (errors.length) {
  console.log(`\n  ${errors.length} error(es):`);
  for (const e of errors) console.log(`    ✗ ${e}`);
  console.log("\n  El contenido no cumple los estándares editoriales.\n");
  process.exit(1);
}

console.log("\n  Sin errores. El contenido cumple los estándares editoriales.\n");
