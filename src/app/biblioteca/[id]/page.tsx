import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BOOKS, BOOKS_BY_ID, BOOK_CATEGORY_LABEL } from "@/content/books";
import { ARTICLES_BY_SLUG } from "@/content/articles";
import { AUTHORS } from "@/content/authors";
import { getSource } from "@/content/sources";
import { Badge, Breadcrumbs, LevelBadge, Note } from "@/components/ui";

export function generateStaticParams() {
  return BOOKS.map((b) => ({ id: b.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const b = BOOKS_BY_ID[id];
  if (!b) return { title: "Libro no encontrado" };
  return { title: b.title, description: b.summary };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const b = BOOKS_BY_ID[id];
  if (!b) notFound();

  const src = b.sourceId ? getSource(b.sourceId) : undefined;
  const author = AUTHORS.find((a) =>
    b.author.toLowerCase().includes(a.name.split(" ").slice(-1)[0].toLowerCase()),
  );

  return (
    <article className="mx-auto max-w-[48rem]">
      <Breadcrumbs
        items={[{ label: "Biblioteca", href: "/biblioteca" }, { label: b.title }]}
      />

      <header className="mb-8 border-b border-border pb-7">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {b.categories.map((c) => (
            <Badge key={c} tone="accent">
              {BOOK_CATEGORY_LABEL[c]}
            </Badge>
          ))}
        </div>
        <h1 className="text-[clamp(1.6rem,4vw,2.2rem)] font-bold leading-[1.15] tracking-[-0.025em]">
          {b.title}
        </h1>
        <p className="mt-2 text-[1.05rem] text-fg-muted">
          {author ? (
            <Link href={`/autores/${author.id}`} className="text-accent hover:underline">
              {b.author}
            </Link>
          ) : (
            b.author
          )}{" "}
          · {b.year}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <LevelBadge level={b.difficulty} />
          <Badge>{b.pages} páginas aprox.</Badge>
        </div>
      </header>

      <section className="mb-9">
        <h2 className="mb-2.5 text-[1.15rem] font-bold tracking-[-0.015em]">De qué trata</h2>
        <p className="max-w-[62ch] text-[15.5px] leading-relaxed">{b.summary}</p>
      </section>

      <section className="mb-9">
        <h2 className="mb-3 text-[1.15rem] font-bold tracking-[-0.015em]">Ideas principales</h2>
        <ul className="space-y-2.5">
          {b.keyIdeas.map((k, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-[var(--radius)] border border-border bg-bg-elevated px-4 py-3 text-[14.5px] leading-relaxed"
            >
              <span aria-hidden className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent" />
              <span>{k}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-9">
        <h2 className="mb-3 text-[1.15rem] font-bold tracking-[-0.015em]">
          Conceptos que vas a encontrar
        </h2>
        <div className="flex flex-wrap gap-2">
          {b.concepts.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-bg-subtle px-3 py-1 text-[13px] text-fg-muted"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-9">
        <Note tone="ok" title="Para quién está recomendado">
          {b.forWhom}
        </Note>
      </section>

      {b.availability && (
        <section className="mb-9">
          <Note tone="info" title="Dónde conseguirlo">
            {b.availability}
          </Note>
        </section>
      )}

      {src && (
        <section className="mb-9">
          <h2 className="mb-2 text-[1.15rem] font-bold tracking-[-0.015em]">Ficha de la fuente</h2>
          <p className="text-[14px] text-fg-muted">
            {[src.author, src.publisher, src.year].filter(Boolean).join(" · ")}
            {" · "}
            <Link href={`/fuentes#${src.id}`} className="text-accent hover:underline">
              ver en el registro de fuentes
            </Link>
          </p>
        </section>
      )}

      <section className="border-t border-border pt-8">
        <h2 className="mb-4 text-[1.15rem] font-bold tracking-[-0.015em]">
          Artículos donde se usa
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {b.relatedArticles.map((slug) => {
            const a = ARTICLES_BY_SLUG[slug];
            return (
              a && (
                <Link
                  key={slug}
                  href={`/articulo/${slug}`}
                  className="group rounded-[var(--radius)] border border-border bg-bg-elevated p-4 transition-colors hover:border-accent-border"
                >
                  <p className="text-[14.5px] font-semibold group-hover:text-accent">{a.title}</p>
                  <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-fg-muted">
                    {a.summary}
                  </p>
                </Link>
              )
            );
          })}
        </div>
      </section>
    </article>
  );
}
