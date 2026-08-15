import type { Metadata } from "next";
import Link from "next/link";
import { CONSTITUTION } from "@/content/constitution";
import { ARTICLES_BY_SLUG } from "@/content/articles";
import { Badge, Note, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Constitución",
  description: "La Constitución argentina explicada artículo por artículo, separando el texto de la norma, la doctrina jurídica y la lectura liberal.",
};

const anchor = (n: string) => `art-${n.replace(/[^a-z0-9]/gi, "-")}`;

export default function Constitucion() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Fuente primaria"
        title="La Constitución argentina"
        lead="Los artículos que más importan para entender qué puede y qué no puede hacer el Estado. Cada uno con el texto de la norma, una explicación simple, la doctrina jurídica y la lectura liberal claramente separadas."
      />

      <div className="mb-9">
        <Note tone="warn" title="El criterio de esta sección">
          Distinguimos tres cosas que la discusión pública mezcla todo el tiempo: <strong>lo
          que dice el texto</strong> (verificable), <strong>cómo lo interpretó la
          jurisprudencia</strong> (doctrina) y <strong>qué opina uno al respecto</strong>
          (política). Confundirlas es la causa más frecuente de discusiones constitucionales
          que no llegan a ningún lado.
        </Note>
      </div>

      <nav className="mb-10 rounded-[var(--radius)] border border-border bg-bg-subtle p-4">
        <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-fg-subtle">
          Artículos
        </p>
        <div className="flex flex-wrap gap-1.5">
          {CONSTITUTION.map((c) => (
            <a
              key={c.n}
              href={`#${anchor(c.n)}`}
              className="rounded-[var(--radius-sm)] border border-border bg-bg-elevated px-2.5 py-1 text-[13px] font-medium text-fg-muted transition-colors hover:border-accent-border hover:text-accent"
              title={c.title}
            >
              Art. {c.n}
            </a>
          ))}
        </div>
      </nav>

      <div className="space-y-10">
        {CONSTITUTION.map((c) => (
          <article
            key={c.n}
            id={anchor(c.n)}
            className="scroll-mt-24 border-b border-border pb-10 last:border-0"
          >
            <div className="mb-3 flex flex-wrap items-baseline gap-3">
              <h2 className="text-[1.4rem] font-bold tracking-[-0.02em]">
                Artículo {c.n}
              </h2>
              <span className="text-[15px] text-fg-muted">{c.title}</span>
            </div>

            <figure className="mb-5 rounded-[var(--radius)] border-l-[3px] border-accent bg-bg-subtle py-4 pl-5 pr-4">
              <p className="mb-2 text-[10.5px] font-bold uppercase tracking-[0.12em] text-accent">
                Texto de la norma {c.excerpt && "· extracto"}
              </p>
              <blockquote className="font-serif text-[15px] leading-relaxed">
                {c.text}
              </blockquote>
              <figcaption className="mt-2.5 text-[12px] text-fg-subtle">
                Constitución de la Nación Argentina ·{" "}
                <Link href="/fuentes#cn-argentina" className="text-accent hover:underline">
                  ver fuente
                </Link>
              </figcaption>
            </figure>

            <div className="mb-5 rounded-[var(--radius)] border border-ok/30 bg-ok-subtle p-4">
              <p className="mb-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-ok">
                Qué significa
              </p>
              <p className="text-[14.5px] leading-relaxed">{c.simple}</p>
            </div>

            <div className="mb-5">
              <p className="mb-2 text-[10.5px] font-bold uppercase tracking-[0.12em] text-fg-subtle">
                Para profundizar · doctrina jurídica
              </p>
              <ul className="space-y-2">
                {c.deep.map((d, i) => (
                  <li key={i} className="flex gap-2.5 text-[14px] leading-relaxed text-fg-muted">
                    <span aria-hidden className="mt-[8px] h-[4px] w-[4px] shrink-0 rounded-full bg-border-strong" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {c.liberal && (
              <div className="mb-5 rounded-[var(--radius)] border border-opinion/30 bg-opinion-subtle p-4">
                <p className="mb-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-opinion">
                  Lectura liberal · interpretación, no doctrina
                </p>
                <p className="text-[14px] leading-relaxed">{c.liberal}</p>
              </div>
            )}

            {c.debate && (
              <div className="mb-5 rounded-[var(--radius)] border border-warn/30 bg-warn-subtle p-4">
                <p className="mb-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-warn">
                  Discusión abierta
                </p>
                <p className="text-[14px] leading-relaxed text-fg-muted">{c.debate}</p>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2">
              {c.topics.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
              {c.relatedArticles.map((slug) => {
                const a = ARTICLES_BY_SLUG[slug];
                return (
                  a && (
                    <Link
                      key={slug}
                      href={`/articulo/${slug}`}
                      className="rounded-full border border-border bg-bg-subtle px-2.5 py-1 text-[12.5px] text-fg-muted transition-colors hover:border-accent-border hover:text-accent"
                    >
                      {a.title}
                    </Link>
                  )
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
