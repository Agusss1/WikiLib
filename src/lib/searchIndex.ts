import { ARTICLES } from "@/content/articles";
import { AUTHORS } from "@/content/authors";
import { BOOKS } from "@/content/books";
import { CONSTITUTION } from "@/content/constitution";
import { DEBATES, FAQS } from "@/content/debates";
import { GLOSSARY } from "@/content/glossary";
import { INDICATORS } from "@/content/data";
import { PATHS } from "@/content/learning";
import { SCENARIOS } from "@/content/interactive";
import { CATEGORY_META } from "@/content/taxonomy";
import type { Block } from "@/content/schema";
import { stripInline } from "./inline";

export type DocKind =
  | "articulo"
  | "termino"
  | "autor"
  | "libro"
  | "debate"
  | "pregunta"
  | "constitucion"
  | "ruta"
  | "escenario"
  | "dato";

export type SearchDoc = {
  id: string;
  kind: DocKind;
  title: string;
  /** Subtítulo mostrado en el resultado. */
  subtitle: string;
  href: string;
  /** Cuerpo indexado. No se muestra. */
  body: string;
  tags: string[];
  level?: string;
  category?: string;
  /** Prioridad base: los artículos pesan más que un término del diccionario. */
  boost: number;
};

export const KIND_LABEL: Record<DocKind, string> = {
  articulo: "Artículo",
  termino: "Diccionario",
  autor: "Autor",
  libro: "Libro",
  debate: "Debate",
  pregunta: "Pregunta difícil",
  constitucion: "Constitución",
  ruta: "Ruta de aprendizaje",
  escenario: "¿Qué haría un liberal?",
  dato: "Indicador",
};

function blocksToText(blocks: Block[] | undefined): string {
  if (!blocks) return "";
  const parts: string[] = [];
  for (const b of blocks) {
    switch (b.t) {
      case "p":
      case "h":
        parts.push(b.text);
        break;
      case "ul":
      case "ol":
        parts.push(b.items.join(" "));
        break;
      case "quote":
        parts.push(b.text, b.cite);
        break;
      case "callout":
        parts.push(b.title ?? "", b.text);
        break;
      case "steps":
        parts.push(b.items.map((i) => `${i.title} ${i.text}`).join(" "));
        break;
      case "compare":
        parts.push(
          b.columns
            .map((c) => `${c.title} ${c.subtitle ?? ""} ${c.items.join(" ")}`)
            .join(" "),
        );
        break;
      case "figure":
        parts.push(`${b.label} ${b.value}`);
        break;
      case "formula":
        parts.push(b.text, b.caption ?? "");
        break;
    }
  }
  return stripInline(parts.join(" "));
}

export function buildDocs(): SearchDoc[] {
  const docs: SearchDoc[] = [];

  for (const a of ARTICLES) {
    docs.push({
      id: `articulo:${a.slug}`,
      kind: "articulo",
      title: a.title,
      subtitle: a.summary,
      href: `/articulo/${a.slug}`,
      body: [
        a.question ?? "",
        a.summary,
        a.keyIdeas.join(" "),
        a.topics.join(" "),
        a.tags.join(" "),
        blocksToText(a.simple),
        blocksToText(a.technical),
        blocksToText(a.argentina),
        blocksToText(a.everyday),
        blocksToText(a.liberalArgument),
        (a.critiques ?? []).map((c) => c.objection).join(" "),
        a.glossary.join(" "),
      ].join(" "),
      tags: a.tags,
      level: a.level,
      category: CATEGORY_META[a.category].title,
      boost: 3,
    });
  }

  for (const t of GLOSSARY) {
    docs.push({
      id: `termino:${t.id}`,
      kind: "termino",
      title: t.term,
      subtitle: t.definition,
      href: `/diccionario#${t.id}`,
      body: [t.definition, (t.aliases ?? []).join(" ")].join(" "),
      tags: t.aliases ?? [],
      boost: 1.6,
    });
  }

  for (const a of AUTHORS) {
    docs.push({
      id: `autor:${a.id}`,
      kind: "autor",
      title: a.name,
      subtitle: a.hook,
      href: `/autores/${a.id}`,
      body: [
        a.hook,
        a.bio.join(" "),
        a.ideas.map((i) => `${i.title} ${i.text}`).join(" "),
        a.works.map((w) => w.title).join(" "),
        a.concepts.join(" "),
        a.current,
        a.country,
        a.interests.join(" "),
      ].join(" "),
      tags: a.concepts,
      boost: 2,
    });
  }

  for (const b of BOOKS) {
    docs.push({
      id: `libro:${b.id}`,
      kind: "libro",
      title: b.title,
      subtitle: `${b.author}, ${b.year}`,
      href: `/biblioteca/${b.id}`,
      body: [b.summary, b.keyIdeas.join(" "), b.concepts.join(" "), b.author, b.forWhom].join(" "),
      tags: b.concepts,
      level: b.difficulty,
      boost: 1.6,
    });
  }

  for (const d of DEBATES) {
    docs.push({
      id: `debate:${d.id}`,
      kind: "debate",
      title: d.claim,
      subtitle: d.meaning,
      href: `/debates/${d.id}`,
      body: [
        d.meaning,
        d.inFavor.join(" "),
        d.liberalResponse.join(" "),
        d.counter.join(" "),
        d.reply.join(" "),
        d.topics.join(" "),
      ].map(stripInline).join(" "),
      tags: d.topics,
      level: d.level,
      boost: 2,
    });
  }

  for (const f of FAQS) {
    docs.push({
      id: `pregunta:${f.id}`,
      kind: "pregunta",
      title: f.question,
      subtitle: f.short,
      href: `/preguntas#${f.id}`,
      body: [f.short, f.long.join(" "), f.caveat ?? "", f.topics.join(" ")].map(stripInline).join(" "),
      tags: f.topics,
      boost: 2.2,
    });
  }

  for (const c of CONSTITUTION) {
    docs.push({
      id: `constitucion:${c.n}`,
      kind: "constitucion",
      title: `Artículo ${c.n} — ${c.title}`,
      subtitle: c.simple,
      href: `/constitucion#art-${c.n.replace(/[^a-z0-9]/gi, "-")}`,
      body: [c.text, c.simple, c.deep.join(" "), c.liberal ?? "", c.topics.join(" ")].join(" "),
      tags: c.topics,
      boost: 2,
    });
  }

  for (const p of PATHS) {
    docs.push({
      id: `ruta:${p.id}`,
      kind: "ruta",
      title: p.title,
      subtitle: p.subtitle,
      href: `/rutas/${p.id}`,
      body: [p.subtitle, p.forWhom, p.modules.map((m) => `${m.title} ${m.goal}`).join(" ")].join(" "),
      tags: [],
      level: p.level,
      boost: 1.8,
    });
  }

  for (const s of SCENARIOS) {
    docs.push({
      id: `escenario:${s.id}`,
      kind: "escenario",
      title: s.title,
      subtitle: s.situation,
      href: `/que-haria-un-liberal/${s.id}`,
      body: [s.situation, s.context.join(" "), s.options.map((o) => o.label).join(" "), s.lesson].join(" "),
      tags: [],
      boost: 1.6,
    });
  }

  for (const i of INDICATORS) {
    docs.push({
      id: `dato:${i.id}`,
      kind: "dato",
      title: i.name,
      subtitle: i.question,
      href: `/datos#${i.id}`,
      body: [i.question, i.measures, i.caveats.join(" ")].join(" "),
      tags: [],
      boost: 1.4,
    });
  }

  return docs;
}

export const SEARCH_DOCS = buildDocs();
