import MiniSearch, { type SearchResult } from "minisearch";
import { SEARCH_DOCS, type SearchDoc } from "./searchIndex";
import { SEARCH_SYNONYMS } from "@/content/taxonomy";

/** Quita acentos y normaliza, para que "inflacion" encuentre "inflación". */
export function fold(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/** Palabras que no aportan a la búsqueda en español. */
const STOP = new Set([
  "el","la","los","las","un","una","unos","unas","de","del","al","a","en","y","o","que","es",
  "por","para","con","sin","se","su","sus","lo","le","les","mi","tu","como","mas","más","pero",
  "si","no","ya","muy","hay","son","ser","este","esta","esto","eso","esa","ese","cual","cuales",
  "qué","que","cuando","donde","porque","por qué","porqué","sobre","entre","hasta","desde",
]);

/**
 * Palabras funcionales que NO cuentan para medir si una consulta trata
 * realmente de un tema de la Wiki. Sin esta lista, una consulta como
 * "cuál es la mejor receta de milanesas" coincidía por difuso con artículos
 * que contienen "cuál" o "mejor", y el asistente respondía con seguridad
 * sobre algo que la Wiki no cubre.
 */
const FUNCTION_WORDS = new Set([
  "quien","quienes","cual","cuales","como","cuando","cuanto","cuanta","cuantos","cuantas",
  "donde","adonde","mejor","peor","mucho","mucha","poco","poca","todo","toda","todos","todas",
  "hacer","hace","hacen","tener","tiene","tienen","poder","puede","pueden","debe","deben",
  "decir","dice","saber","sabe","entiendo","entender","explicar","significa","pasa","pasaria",
  "quiero","quisiera","necesito","gustaria","favor","gracias","hola","dame","decime","contame",
  "queda","quedan","esta","estan","estoy","sirve","sirven","llama","llaman","existe","existen",
  "usar","usa","usan","dar","da","dan","ver","mira","busco","buscar","conocer","aprender",
]);

/** Términos de contenido de una consulta: los que de verdad indican el tema. */
export function contentTerms(q: string): string[] {
  return fold(q)
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length >= 4 && !STOP.has(w) && !FUNCTION_WORDS.has(w));
}

function wordsOf(text: string): Set<string> {
  return new Set(fold(text).split(/[^a-z0-9]+/).filter(Boolean));
}

function covered(words: Set<string>, terms: string[]): number {
  if (terms.length === 0) return 1;
  let n = 0;
  for (const t of terms) {
    // Coincidencia exacta, o el término como prefijo de una palabra del texto
    // (para tolerar plurales y flexiones: "impuesto" cubre "impuestos").
    if (words.has(t)) {
      n += 1;
      continue;
    }
    for (const w of words) {
      if (w.length > t.length && w.startsWith(t) && w.length - t.length <= 3) {
        n += 1;
        break;
      }
    }
  }
  return n / terms.length;
}

/**
 * Qué proporción de los términos de contenido de la consulta aparece en el
 * documento. Es la señal que distingue "esto trata del tema" de "esto
 * coincidió por ruido difuso".
 */
export function coverage(doc: SearchDoc, terms: string[]): number {
  // Se compara contra palabras completas, no subcadenas: "gano" no debe dar
  // por cubierto un documento sólo porque contiene "órgano".
  return covered(wordsOf(`${doc.title} ${doc.subtitle} ${doc.body} ${doc.tags.join(" ")}`), terms);
}

/**
 * Cobertura restringida a los campos que definen de qué trata un documento:
 * título, resumen, etiquetas y categoría. Que un término aparezca en el
 * cuerpo lo hace mencionado; que aparezca acá lo hace su tema.
 */
export function topicCoverage(doc: SearchDoc, terms: string[]): number {
  return covered(
    wordsOf(`${doc.title} ${doc.subtitle} ${doc.tags.join(" ")} ${doc.category ?? ""}`),
    terms,
  );
}

/**
 * Criterio de pertinencia para el asistente: el documento trata del tema, o
 * bien contiene casi todos los términos de contenido de la consulta.
 * Sin este umbral, una pregunta ajena a la Wiki obtenía igual una respuesta
 * segura, que es exactamente lo que los estándares editoriales prohíben.
 */
export function isRelevant(doc: SearchDoc, terms: string[]): boolean {
  if (terms.length === 0) return true;
  // Una consulta de una sola palabra pregunta por un tema, así que ese
  // término tiene que estar en el título, el resumen o las etiquetas.
  // Que aparezca de pasada en el cuerpo no alcanza: "asado" aparece como
  // ejemplo dentro del artículo sobre el dinero, y eso no convierte a ese
  // artículo en una respuesta sobre asados.
  if (terms.length === 1) return topicCoverage(doc, terms) > 0;
  return topicCoverage(doc, terms) > 0 || coverage(doc, terms) >= 0.75;
}

let engine: MiniSearch<SearchDoc> | null = null;

export function getEngine(): MiniSearch<SearchDoc> {
  if (engine) return engine;
  engine = new MiniSearch<SearchDoc>({
    idField: "id",
    fields: ["title", "subtitle", "body", "tags", "category"],
    storeFields: ["id", "kind", "title", "subtitle", "href", "level", "category"],
    processTerm: (term) => {
      const t = fold(term);
      if (t.length < 2 || STOP.has(t)) return null;
      return t;
    },
    tokenize: (text) => text.split(/[\s\-–—/(),.;:!¡?¿"'«»[\]{}]+/).filter(Boolean),
    searchOptions: {
      boost: { title: 5, subtitle: 2.5, tags: 2, category: 1.5 },
      prefix: true,
      fuzzy: 0.2,
    },
  });
  engine.addAll(SEARCH_DOCS);
  return engine;
}

/**
 * Expande la consulta con sinónimos y formas coloquiales.
 * Es lo que hace que "porque sube el dolar" encuentre tipo de cambio,
 * emisión, reservas y cepo.
 */
export function expandQuery(q: string): string {
  const words = fold(q).split(/\s+/).filter(Boolean);
  const extra = new Set<string>();
  for (const w of words) {
    const syn = SEARCH_SYNONYMS[w];
    if (syn) for (const s of syn) extra.add(s);
    // formas verbales frecuentes -> raíz
    if (w.endsWith("ando") || w.endsWith("iendo")) extra.add(w.slice(0, -4));
  }
  return [...words, ...extra].join(" ");
}

export type Hit = SearchDoc & { score: number };

export function search(q: string, limit = 30): Hit[] {
  const query = q.trim();
  if (!query) return [];
  const ms = getEngine();
  const expanded = expandQuery(query);

  const raw: SearchResult[] = ms.search(expanded, {
    combineWith: "OR",
    prefix: true,
    fuzzy: 0.2,
  });

  const byId = new Map(SEARCH_DOCS.map((d) => [d.id, d]));
  const seen = new Set<string>();
  const hits: Hit[] = [];
  const terms = contentTerms(query);

  for (const r of raw) {
    if (seen.has(r.id as string)) continue;
    seen.add(r.id as string);
    const doc = byId.get(r.id as string);
    if (!doc) continue;
    const cov = coverage(doc, terms);
    // Un documento que no contiene ningún término de contenido de la consulta
    // coincidió por ruido difuso, no por tema.
    if (terms.length > 0 && cov === 0) continue;
    hits.push({ ...doc, score: r.score * doc.boost * (0.4 + cov) });
  }

  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}

/** Sugerencias para el buscador cuando no hay resultados. */
export const SUGGESTED_QUERIES = [
  "¿Qué es el liberalismo?",
  "por qué sube el dólar",
  "qué es la inflación",
  "para qué sirve el Estado",
  "Alberdi",
  "impuestos en Argentina",
  "liberalismo vs libertarismo",
  "quién construye las rutas",
];
