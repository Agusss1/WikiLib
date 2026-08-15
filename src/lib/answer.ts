import { ARTICLES_BY_SLUG } from "@/content/articles";
import { FAQS } from "@/content/debates";
import { GLOSSARY_BY_ID } from "@/content/glossary";
import { getSource } from "@/content/sources";
import type { Source } from "@/content/schema";
import { search } from "./search";
import { stripInline } from "./inline";
import type { Block } from "@/content/schema";

/**
 * Motor de respuestas de "Preguntale a la Wiki".
 *
 * Es *recuperación*, no generación. La respuesta se arma exclusivamente con
 * texto ya publicado y revisado en la Wiki, y siempre expone de qué artículo
 * salió cada fragmento.
 *
 * La decisión es deliberada: un modelo generativo sin anclaje puede inventar
 * una cita o un dato, que es exactamente lo que los principios editoriales de
 * este proyecto prohíben. Este motor no puede alucinar porque no escribe nada
 * nuevo. Cuando la Wiki no cubre el tema, lo dice en lugar de improvisar.
 *
 * La capa generativa opcional (ver ARCHITECTURE.md) se apoya sobre este mismo
 * recuperador: redacta la síntesis a partir de estos pasajes y nunca fuera de
 * ellos.
 */

export type Passage = {
  text: string;
  articleSlug: string;
  articleTitle: string;
  section: string;
  href: string;
};

export type Answer = {
  found: boolean;
  /** Respuesta directa cuando hay una coincidencia fuerte. */
  lead?: string;
  leadSource?: { title: string; href: string };
  passages: Passage[];
  sources: Source[];
  related: { title: string; href: string; summary: string }[];
  terms: { term: string; definition: string; href: string }[];
  /** Advertencia mostrada al usuario sobre los límites de la respuesta. */
  note: string;
};

const SECTION_LABEL: Record<string, string> = {
  simple: "Explicado simple",
  technical: "Explicación completa",
  argentina: "En Argentina",
  everyday: "En la vida cotidiana",
  liberalArgument: "La lectura liberal (interpretación)",
};

function blockText(b: Block): string | null {
  switch (b.t) {
    case "p":
      return b.text;
    case "ul":
    case "ol":
      return b.items.join(". ");
    case "callout":
      return `${b.title ? b.title + ": " : ""}${b.text}`;
    case "steps":
      return b.items.map((i) => `${i.title}: ${i.text}`).join(" ");
    case "formula":
      return b.text;
    default:
      return null;
  }
}

/** Puntúa un pasaje por solapamiento de términos con la consulta. */
function scorePassage(text: string, terms: string[]): number {
  const folded = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  let score = 0;
  for (const t of terms) if (folded.includes(t)) score += 1;
  // Penaliza pasajes muy largos: preferimos respuestas concisas.
  return score / Math.log2(Math.max(text.length, 64));
}

export function answerQuestion(question: string): Answer {
  const q = question.trim();
  if (!q) {
    return {
      found: false,
      passages: [],
      sources: [],
      related: [],
      terms: [],
      note: "Escribí una pregunta.",
    };
  }

  const hits = search(q, 12);
  const queryTerms = q
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 3);

  // 1. Coincidencia directa con una pregunta difícil.
  const faqHit = hits.find((h) => h.kind === "pregunta");
  const faq = faqHit ? FAQS.find((f) => `pregunta:${f.id}` === faqHit.id) : undefined;

  // 2. Artículos relevantes.
  const articleHits = hits.filter((h) => h.kind === "articulo").slice(0, 4);
  const articles = articleHits
    .map((h) => ARTICLES_BY_SLUG[h.id.replace("articulo:", "")])
    .filter(Boolean);

  if (!faq && articles.length === 0) {
    return {
      found: false,
      passages: [],
      sources: [],
      related: [],
      terms: [],
      note:
        "Esto no está cubierto en la Wiki todavía. No vamos a improvisar una respuesta: preferimos decir que no lo tenemos antes que inventarlo. Podés proponerlo como artículo nuevo.",
    };
  }

  // 3. Extrae los pasajes más relevantes de cada artículo.
  const passages: Passage[] = [];
  for (const a of articles) {
    const sections: [string, Block[] | undefined][] = [
      ["simple", a.simple],
      ["technical", a.technical],
      ["argentina", a.argentina],
      ["everyday", a.everyday],
      ["liberalArgument", a.liberalArgument],
    ];
    const candidates: { text: string; section: string; score: number }[] = [];
    for (const [key, blocks] of sections) {
      for (const b of blocks ?? []) {
        const t = blockText(b);
        if (!t || t.length < 60) continue;
        const clean = stripInline(t);
        candidates.push({
          text: clean,
          section: SECTION_LABEL[key] ?? key,
          score: scorePassage(clean, queryTerms),
        });
      }
    }
    candidates.sort((x, y) => y.score - x.score);
    for (const c of candidates.slice(0, 2)) {
      if (c.score <= 0) continue;
      passages.push({
        text: c.text,
        articleSlug: a.slug,
        articleTitle: a.title,
        section: c.section,
        href: `/articulo/${a.slug}#${
          Object.keys(SECTION_LABEL).find((k) => SECTION_LABEL[k] === c.section) ?? ""
        }`,
      });
    }
  }

  // 4. Fuentes de todos los artículos utilizados.
  const sourceIds = new Set<string>();
  for (const a of articles) for (const s of a.sources) sourceIds.add(s);
  if (faq) for (const slug of faq.relatedArticles) {
    const ra = ARTICLES_BY_SLUG[slug];
    if (ra) for (const s of ra.sources) sourceIds.add(s);
  }
  const sources = [...sourceIds].map(getSource).filter(Boolean) as Source[];

  // 5. Términos del diccionario que aparecen en los artículos usados.
  const termIds = new Set<string>();
  for (const a of articles) for (const g of a.glossary) termIds.add(g);
  const terms = [...termIds]
    .slice(0, 8)
    .map((id) => GLOSSARY_BY_ID[id])
    .filter(Boolean)
    .map((t) => ({ term: t.term, definition: t.definition, href: `/diccionario#${t.id}` }));

  const related = articles.map((a) => ({
    title: a.title,
    href: `/articulo/${a.slug}`,
    summary: a.summary,
  }));

  return {
    found: true,
    lead: faq ? faq.short : articles[0]?.summary,
    leadSource: faq
      ? { title: faq.question, href: `/preguntas#${faq.id}` }
      : articles[0]
        ? { title: articles[0].title, href: `/articulo/${articles[0].slug}` }
        : undefined,
    passages: passages.slice(0, 6),
    sources: sources.slice(0, 10),
    related,
    terms,
    note:
      "Esta respuesta está armada con texto ya publicado en la Wiki, sin generar contenido nuevo. Los pasajes marcados como «interpretación» son posiciones, no hechos verificados.",
  };
}
