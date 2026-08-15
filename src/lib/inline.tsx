import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { ARTICLES_BY_SLUG } from "@/content/articles";
import { AUTHORS_BY_ID } from "@/content/authors";
import { findTerm } from "@/content/glossary";

/**
 * Resolución de enlaces internos.
 *
 * Se busca en este orden: artículo, autor, página fija. Un enlace que no
 * resuelve NO se rompe silenciosamente: se renderiza con estilo de "enlace
 * roto" y el validador de contenido lo reporta.
 */
const STATIC_PAGES: Record<string, { href: string; title: string }> = {
  "argentina-en-datos": { href: "/datos", title: "Argentina en datos" },
  diccionario: { href: "/diccionario", title: "Diccionario" },
  biblioteca: { href: "/biblioteca", title: "Biblioteca" },
  comunidad: { href: "/comunidad", title: "Comunidad" },
  fuentes: { href: "/fuentes", title: "Fuentes" },
  constitucion: { href: "/constitucion", title: "Constitución" },
};

export type ResolvedLink = { href: string; title: string } | null;

export function resolveLink(slug: string): ResolvedLink {
  const a = ARTICLES_BY_SLUG[slug];
  if (a) return { href: `/articulo/${a.slug}`, title: a.title };
  const au = AUTHORS_BY_ID[slug];
  if (au) return { href: `/autores/${au.id}`, title: au.name };
  const p = STATIC_PAGES[slug];
  if (p) return p;
  return null;
}

/**
 * Marcado inline soportado:
 *   **negrita**  *cursiva*  [[slug]]  [[slug|texto]]  {{término}}  [texto](url)
 *
 * Se implementa con un tokenizador propio en lugar de Markdown completo,
 * porque el conjunto es deliberadamente chico: menos superficie de error y
 * control total sobre cómo se renderiza cada elemento.
 */
const TOKEN =
  /(\*\*[^*]+\*\*)|(\*[^*]+\*)|(\[\[[^\]]+\]\])|(\{\{[^}]+\}\})|(\[[^\]]+\]\((https?:\/\/[^)]+)\))/g;

export function renderInline(text: string, keyPrefix = ""): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  let m: RegExpExecArray | null;
  TOKEN.lastIndex = 0;

  while ((m = TOKEN.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const raw = m[0];
    const k = `${keyPrefix}-${i++}`;

    if (raw.startsWith("**")) {
      out.push(<strong key={k}>{raw.slice(2, -2)}</strong>);
    } else if (raw.startsWith("[[")) {
      const inner = raw.slice(2, -2);
      const [slug, label] = inner.split("|");
      const link = resolveLink(slug.trim());
      if (link) {
        out.push(
          <Link key={k} href={link.href} className="wikilink">
            {label?.trim() || link.title}
          </Link>,
        );
      } else {
        out.push(
          <span
            key={k}
            className="wikilink--missing"
            title="Este artículo todavía no existe"
          >
            {label?.trim() || slug.trim()}
          </span>,
        );
      }
    } else if (raw.startsWith("{{")) {
      const inner = raw.slice(2, -2);
      const [ref, alt] = inner.split("|");
      const label = (alt ?? ref).trim();
      const term = findTerm(ref.trim());
      if (term) {
        out.push(
          <Link
            key={k}
            href={`/diccionario#${term.id}`}
            className="glossterm"
            title={term.definition}
          >
            {label}
          </Link>,
        );
      } else {
        out.push(<Fragment key={k}>{label}</Fragment>);
      }
    } else if (raw.startsWith("[")) {
      const label = raw.slice(1, raw.indexOf("]"));
      const url = m[6];
      out.push(
        <a
          key={k}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="wikilink"
        >
          {label}
        </a>,
      );
    } else {
      out.push(<em key={k}>{raw.slice(1, -1)}</em>);
    }
    last = m.index + raw.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** Versión sin JSX, para búsqueda y metadatos. */
export function stripInline(text: string): string {
  return text
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\{\{([^}|]+)\|([^}]+)\}\}/g, "$2")
    .replace(/\{\{([^}]+)\}\}/g, "$1")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1");
}
