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

  for (const r of raw) {
    if (seen.has(r.id as string)) continue;
    seen.add(r.id as string);
    const doc = byId.get(r.id as string);
    if (!doc) continue;
    hits.push({ ...doc, score: r.score * doc.boost });
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
