import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AUTHORS, AUTHORS_BY_ID } from "@/content/authors";
import { ARTICLES_BY_SLUG } from "@/content/articles";
import { BOOKS } from "@/content/books";
import { getSource } from "@/content/sources";
import { Badge, Breadcrumbs, LevelBadge, Note } from "@/components/ui";

export function generateStaticParams() {
  return AUTHORS.map((a) => ({ id: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const a = AUTHORS_BY_ID[id];
  if (!a) return { title: "Autor no encontrado" };
  return { title: a.name, description: a.hook };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const a = AUTHORS_BY_ID[id];
  if (!a) notFound();

  const books = BOOKS.filter((b) =>
    b.author.toLowerCase().includes(a.name.split(" ").slice(-1)[0].toLowerCase()),
  );

  return (
    <article className="mx-auto max-w-[52rem]">
      <Breadcrumbs items={[{ label: "Autores", href: "/autores" }, { label: a.name }]} />

      <header className="mb-8 border-b border-border pb-7">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge tone="accent">{a.current}</Badge>
          <Badge>{a.country}</Badge>
          <Badge>{a.years}</Badge>
        </div>
        <h1 className="text-[clamp(1.85rem,4.5vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.025em]">
          {a.name}
        </h1>
        <p className="mt-4 max-w-[58ch] text-[1.1rem] leading-relaxed text-fg-muted">
          {a.hook}
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-3 text-[1.2rem] font-bold tracking-[-0.015em]">Quién fue</h2>
        <div className="prose">
          {a.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-[1.2rem] font-bold tracking-[-0.015em]">Ideas centrales</h2>
        <div className="space-y-3">
          {a.ideas.map((idea, i) => (
            <div
              key={i}
              className="rounded-[var(--radius)] border border-border bg-bg-elevated p-4"
            >
              <p className="text-[15px] font-semibold">{idea.title}</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-fg-muted">{idea.text}</p>
            </div>
          ))}
        </div>
      </section>

      {a.quotes && a.quotes.length > 0 && (
        <section className="mb-10">
          <div className="mb-4 flex flex-wrap items-baseline gap-3">
            <h2 className="text-[1.2rem] font-bold tracking-[-0.015em]">Citas</h2>
            <span className="text-[12.5px] text-fg-subtle">
              Todas con fuente identificada. No publicamos citas sin referencia.
            </span>
          </div>
          {a.quotes.map((q, i) => {
            const src = getSource(q.sourceId);
            return (
              <figure key={i} className="mb-5 border-l-[3px] border-accent pl-5">
                <blockquote className="font-serif text-[1.08rem] italic leading-relaxed">
                  «{q.text}»
                </blockquote>
                <figcaption className="mt-2 text-[13px] text-fg-subtle">
                  — {q.cite}
                  {src && (
                    <>
                      {" · "}
                      <Link href={`/fuentes#${src.id}`} className="text-accent hover:underline">
                        ver fuente
                      </Link>
                    </>
                  )}
                </figcaption>
              </figure>
            );
          })}
        </section>
      )}

      <section className="mb-10">
        <h2 className="mb-4 text-[1.2rem] font-bold tracking-[-0.015em]">Obras</h2>
        <ul className="divide-y divide-border overflow-hidden rounded-[var(--radius)] border border-border bg-bg-elevated">
          {a.works.map((w, i) => (
            <li key={i} className="px-4 py-3.5">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-[14.5px] font-semibold">{w.title}</span>
                <span className="text-[13px] text-fg-subtle">({w.year})</span>
              </div>
              {w.note && (
                <p className="mt-1 text-[13.5px] leading-relaxed text-fg-muted">{w.note}</p>
              )}
              {w.sourceId && (
                <Link
                  href={`/fuentes#${w.sourceId}`}
                  className="mt-1 inline-block text-[12.5px] text-accent hover:underline"
                >
                  Ficha de la fuente →
                </Link>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-[1.2rem] font-bold tracking-[-0.015em]">Influencia</h2>
        <p className="max-w-[62ch] text-[15px] leading-relaxed text-fg-muted">{a.influence}</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-1.5 text-[1.2rem] font-bold tracking-[-0.015em]">Críticas</h2>
        <p className="mb-4 max-w-[62ch] text-[14px] text-fg-muted">
          Incluidas las que se le hacen desde dentro del liberalismo. Un autor que sólo
          aparece con sus aciertos no está siendo presentado con seriedad.
        </p>
        <ul className="space-y-2.5">
          {a.critiques.map((c, i) => (
            <li
              key={i}
              className="rounded-[var(--radius)] border border-warn/25 bg-warn-subtle px-4 py-3 text-[14px] leading-relaxed text-fg-muted"
            >
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <Note tone="ok" title="Por dónde empezar">
          <p className="mb-1.5 font-semibold text-fg">{a.startHere.what}</p>
          <p>{a.startHere.why}</p>
          <div className="mt-2.5">
            <LevelBadge level={a.startHere.level} />
          </div>
        </Note>
      </section>

      {books.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-[1.2rem] font-bold tracking-[-0.015em]">
            Sus libros en la biblioteca
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {books.map((b) => (
              <Link
                key={b.id}
                href={`/biblioteca/${b.id}`}
                className="group rounded-[var(--radius)] border border-border bg-bg-elevated p-4 transition-colors hover:border-accent-border"
              >
                <p className="text-[14.5px] font-semibold group-hover:text-accent">{b.title}</p>
                <p className="mt-1 text-[13px] text-fg-muted">
                  {b.year} · {b.pages} págs. aprox.
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-border pt-8">
        <h2 className="mb-4 text-[1.15rem] font-bold tracking-[-0.015em]">
          Artículos relacionados
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {a.relatedArticles.map((slug) => {
            const art = ARTICLES_BY_SLUG[slug];
            return (
              art && (
                <Link
                  key={slug}
                  href={`/articulo/${slug}`}
                  className="group rounded-[var(--radius)] border border-border bg-bg-elevated p-4 transition-colors hover:border-accent-border"
                >
                  <p className="text-[14.5px] font-semibold group-hover:text-accent">
                    {art.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-fg-muted">
                    {art.summary}
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
