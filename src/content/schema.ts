/**
 * Modelo de contenido de WikiLib.
 *
 * Decisión de arquitectura: el contenido NO es prosa libre (Markdown/MDX) sino
 * *datos tipados*. Cada artículo es un objeto que obliga al autor a completar
 * la secuencia editorial del proyecto:
 *
 *   simple -> técnica -> ejemplo argentino -> argumento liberal -> críticas -> debate abierto -> fuentes
 *
 * Esto tiene tres consecuencias buscadas:
 *  1. La estructura pedagógica se garantiza por tipos, no por disciplina del autor.
 *  2. Se puede distinguir *hecho* de *opinión* a nivel de bloque y renderizarlo distinto.
 *  3. El mismo objeto se indexa para búsqueda, se valida en CI y migra a una tabla
 *     de base de datos sin reescribir el contenido.
 */

// ---------------------------------------------------------------------------
// Taxonomía
// ---------------------------------------------------------------------------

export const LEVELS = ["inicial", "intermedio", "avanzado"] as const;
export type Level = (typeof LEVELS)[number];

export const STATUSES = [
  "borrador",
  "pendiente-de-revision",
  "necesita-fuentes",
  "publicado",
] as const;
export type Status = (typeof STATUSES)[number];

export const CATEGORIES = [
  "empeza-aca",
  "conceptos",
  "economia",
  "argentina",
  "alberdi",
  "corrientes",
  "vida-real",
  "debates",
  "constitucion",
  "cultura",
] as const;
export type Category = (typeof CATEGORIES)[number];

export const SOURCE_KINDS = [
  "primaria",
  "oficial",
  "academica",
  "libro",
  "universidad",
  "organismo",
  "prensa",
] as const;
export type SourceKind = (typeof SOURCE_KINDS)[number];

/** Orden de prioridad editorial (punto 21 del proyecto). Menor = más confiable. */
export const SOURCE_PRIORITY: Record<SourceKind, number> = {
  primaria: 1,
  oficial: 2,
  academica: 3,
  libro: 4,
  universidad: 5,
  organismo: 6,
  prensa: 7,
};

export const SOURCE_KIND_LABEL: Record<SourceKind, string> = {
  primaria: "Fuente primaria",
  oficial: "Documento oficial",
  academica: "Paper académico",
  libro: "Libro",
  universidad: "Universidad",
  organismo: "Organismo internacional",
  prensa: "Medio periodístico",
};

// ---------------------------------------------------------------------------
// Fuentes
// ---------------------------------------------------------------------------

export type Source = {
  id: string;
  kind: SourceKind;
  title: string;
  author?: string;
  year?: string;
  publisher?: string;
  /** Referencia interna precisa: capítulo, artículo, página. */
  locator?: string;
  url?: string;
  /** Aclaración editorial: qué respalda exactamente esta fuente y qué no. */
  note?: string;
};

// ---------------------------------------------------------------------------
// Bloques de contenido
// ---------------------------------------------------------------------------

/**
 * Texto enriquecido mínimo, resuelto por `renderInline`:
 *   **negrita**            -> énfasis fuerte
 *   *cursiva*              -> énfasis
 *   [[slug]]               -> enlace a artículo (usa su título)
 *   [[slug|texto]]         -> enlace a artículo con texto propio
 *   {{termino}}            -> término del diccionario (tooltip + enlace)
 *   [texto](https://...)   -> enlace externo
 */
export type RichText = string;

export type Block =
  | { t: "p"; text: RichText }
  | { t: "h"; text: string }
  | { t: "ul"; items: RichText[] }
  | { t: "ol"; items: RichText[] }
  /** Cita textual. `sourceId` es OBLIGATORIO: sin fuente no hay cita. */
  | { t: "quote"; text: string; cite: string; sourceId: string }
  | {
      t: "callout";
      kind: "dato" | "ojo" | "debate" | "opinion" | "ejemplo" | "incertidumbre";
      title?: string;
      text: RichText;
    }
  | { t: "steps"; items: { title: string; text: RichText }[] }
  | {
      t: "compare";
      columns: { title: string; subtitle?: string; items: RichText[] }[];
    }
  /** Dato numérico. Exige valor, fecha y fuente: no se admiten cifras sueltas. */
  | {
      t: "figure";
      label: string;
      value: string;
      asOf: string;
      sourceId: string;
      method?: string;
    }
  | { t: "formula"; text: string; caption?: string };

// ---------------------------------------------------------------------------
// Piezas de un artículo
// ---------------------------------------------------------------------------

/** Objeción + respuesta posible. La objeción se escribe en su versión más fuerte. */
export type Critique = {
  objection: string;
  /** Quién sostiene algo parecido, si corresponde. */
  from?: string;
  response: Block[];
  /** true si el equipo editorial considera que la objeción no está saldada. */
  unresolved?: boolean;
};

/** Posiciones distintas *dentro* del liberalismo (punto 7 del proyecto). */
export type Position = {
  current: string;
  stance: string;
  reasoning?: string;
};

export type Reading = {
  title: string;
  author?: string;
  why: string;
  sourceId?: string;
  url?: string;
  level?: Level;
};

// ---------------------------------------------------------------------------
// Artículo
// ---------------------------------------------------------------------------

export type Article = {
  slug: string;
  title: string;
  /** La pregunta que el artículo contesta, tal como la escribiría un lector. */
  question?: string;
  /** Una frase. Se usa en tarjetas, búsqueda y respuestas del asistente. */
  summary: string;
  category: Category;
  level: Level;
  topics: string[];
  tags: string[];
  /** Fecha de última revisión editorial (ISO). Se muestra siempre. */
  updated: string;
  status: Status;

  /** "Explicado como si tuvieras 15 años." */
  simple: Block[];
  /** Explicación normal / técnica. */
  technical: Block[];
  /** Cómo se ve esto en Argentina. */
  argentina?: Block[];
  /** Cómo se ve esto en la vida cotidiana. */
  everyday?: Block[];
  /** Lectura liberal del tema. Se renderiza marcado como interpretación. */
  liberalArgument?: Block[];
  /** Diferencias internas del liberalismo sobre este tema. */
  positions?: Position[];
  /** Objeciones fuertes + respuestas posibles. */
  critiques?: Critique[];
  /** Qué sigue genuinamente discutido. */
  openDebate?: Block[];
  /** Dónde la evidencia es débil o disputada. Se muestra destacado. */
  uncertainty?: string;

  keyIdeas: string[];
  /** Slugs de artículos relacionados. Validado en `content:check`. */
  related: string[];
  /** Términos del diccionario. Validado en `content:check`. */
  glossary: string[];
  /** Ids de fuentes. Validado en `content:check`. */
  sources: string[];
  furtherReading?: Reading[];
};

// ---------------------------------------------------------------------------
// Helpers de autoría (mantienen los archivos de contenido legibles)
// ---------------------------------------------------------------------------

export const p = (text: RichText): Block => ({ t: "p", text });
export const h = (text: string): Block => ({ t: "h", text });
export const ul = (...items: RichText[]): Block => ({ t: "ul", items });
export const ol = (...items: RichText[]): Block => ({ t: "ol", items });
export const quote = (text: string, cite: string, sourceId: string): Block => ({
  t: "quote",
  text,
  cite,
  sourceId,
});
export const callout = (
  kind: Extract<Block, { t: "callout" }>["kind"],
  title: string,
  text: RichText,
): Block => ({ t: "callout", kind, title, text });
export const steps = (...items: { title: string; text: RichText }[]): Block => ({
  t: "steps",
  items,
});
export const compare = (
  ...columns: { title: string; subtitle?: string; items: RichText[] }[]
): Block => ({ t: "compare", columns });
export const figure = (
  label: string,
  value: string,
  asOf: string,
  sourceId: string,
  method?: string,
): Block => ({ t: "figure", label, value, asOf, sourceId, method });
export const formula = (text: string, caption?: string): Block => ({
  t: "formula",
  text,
  caption,
});
