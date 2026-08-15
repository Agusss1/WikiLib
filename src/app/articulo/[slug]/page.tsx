import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, ARTICLES_BY_SLUG, getArticle } from "@/content/articles";
import { GLOSSARY_BY_ID } from "@/content/glossary";
import { getSource } from "@/content/sources";
import { SOURCE_KIND_LABEL } from "@/content/schema";
import { CATEGORY_META } from "@/content/taxonomy";
import { Blocks } from "@/components/Blocks";
import { ArticleActions } from "@/components/ArticleActions";
import { Badge, Breadcrumbs, LevelBadge, Prose } from "@/components/ui";
import { renderInline } from "@/lib/inline";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Artículo no encontrado" };
  return { title: a.title, description: a.summary };
}

/** Secciones del cuerpo, en el orden editorial fijo del proyecto. */
const SECTIONS = [
  { key: "simple", label: "Explicado simple", hint: "Como si tuvieras 15 años", tone: "ok" },
  { key: "technical", label: "Explicación completa", hint: null, tone: "neutral" },
  { key: "argentina", label: "En Argentina", hint: null, tone: "accent" },
  { key: "everyday", label: "En la vida cotidiana", hint: null, tone: "neutral" },
] as const;

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const cat = CATEGORY_META[a.category];
  const sources = a.sources.map(getSource).filter(Boolean);
  const related = a.related.map((s) => ARTICLES_BY_SLUG[s]).filter(Boolean);
  const terms = a.glossary.map((g) => GLOSSARY_BY_ID[g]).filter(Boolean);

  return (
    <article className="mx-auto max-w-[52rem]">
      <Breadcrumbs
        items={[
          { label: "Wiki", href: "/wiki" },
          { label: cat.title, href: `/wiki/${cat.id}` },
          { label: a.title },
        ]}
      />

      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge tone="accent">{cat.short}</Badge>
          <LevelBadge level={a.level} />
          {a.topics.slice(0, 2).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <h1 className="text-[clamp(1.85rem,4.5vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.025em]">
          {a.title}
        </h1>
        <p className="mt-4 max-w-[58ch] text-[1.1rem] leading-relaxed text-fg-muted">
          {a.summary}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-border py-3.5">
          <ArticleActions slug={a.slug} />
          <p className="text-[12px] text-fg-subtle">
            Revisado el{" "}
            <time dateTime={a.updated}>
              {new Date(a.updated + "T12:00:00").toLocaleDateString("es-AR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
        </div>
      </header>

      {/* Ideas clave ---------------------------------------------------- */}
      <section className="mb-9 rounded-[var(--radius)] border border-accent-border bg-accent-subtle p-5">
        <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.13em] text-accent">
          Lo esencial
        </h2>
        <ul className="space-y-2">
          {a.keyIdeas.map((k, i) => (
            <li key={i} className="flex gap-2.5 text-[14.5px] leading-relaxed">
              <span aria-hidden className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent" />
              <span>{renderInline(k, `key-${i}`)}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Cuerpo --------------------------------------------------------- */}
      {SECTIONS.map((s) => {
        const blocks = a[s.key];
        if (!blocks || blocks.length === 0) return null;
        return (
          <section key={s.key} className="mb-11" id={s.key}>
            <div className="mb-4 flex items-baseline gap-3">
              <h2 className="text-[1.28rem] font-bold tracking-[-0.015em]">{s.label}</h2>
              {s.hint && <span className="text-[12.5px] text-fg-subtle">{s.hint}</span>}
            </div>
            <Prose>
              <Blocks blocks={blocks} idPrefix={s.key} />
            </Prose>
          </section>
        );
      })}

      {/* Argumento liberal — marcado como interpretación ----------------- */}
      {a.liberalArgument && (
        <section className="mb-11" id="argumento-liberal">
          <div className="mb-4 flex flex-wrap items-baseline gap-3">
            <h2 className="text-[1.28rem] font-bold tracking-[-0.015em]">
              La lectura liberal
            </h2>
            <Badge tone="opinion">Interpretación, no dato</Badge>
          </div>
          <div className="rounded-[var(--radius)] border-l-[3px] border-opinion bg-opinion-subtle/40 py-1 pl-5 pr-4">
            <Prose>
              <Blocks blocks={a.liberalArgument} idPrefix="lib" />
            </Prose>
          </div>
        </section>
      )}

      {/* Posiciones internas -------------------------------------------- */}
      {a.positions && a.positions.length > 0 && (
        <section className="mb-11" id="posiciones">
          <h2 className="mb-1.5 text-[1.28rem] font-bold tracking-[-0.015em]">
            No todos los liberales piensan igual
          </h2>
          <p className="mb-4 max-w-[62ch] text-[14px] text-fg-muted">
            Sobre este tema las corrientes discrepan. Presentarlas como una sola posición
            sería inexacto.
          </p>
          <div className="space-y-2.5">
            {a.positions.map((p, i) => (
              <div
                key={i}
                className="rounded-[var(--radius)] border border-border bg-bg-elevated p-4"
              >
                <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-accent">
                  {p.current}
                </p>
                <p className="mt-1.5 text-[14.5px] leading-relaxed">{p.stance}</p>
                {p.reasoning && (
                  <p className="mt-2 border-t border-border pt-2 text-[13.5px] leading-relaxed text-fg-muted">
                    <span className="font-semibold">Por qué: </span>
                    {p.reasoning}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Críticas -------------------------------------------------------- */}
      {a.critiques && a.critiques.length > 0 && (
        <section className="mb-11" id="criticas">
          <h2 className="mb-1.5 text-[1.28rem] font-bold tracking-[-0.015em]">
            Objeciones y respuestas
          </h2>
          <p className="mb-5 max-w-[62ch] text-[14px] text-fg-muted">
            Las objeciones están escritas en su versión más fuerte, no en la más fácil de
            refutar. Si una te parece más convincente que la respuesta, eso es información
            útil.
          </p>
          <div className="space-y-5">
            {a.critiques.map((c, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[var(--radius)] border border-border"
              >
                <div className="border-b border-border bg-bg-subtle px-5 py-4">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <Badge tone="warn">Objeción</Badge>
                    {c.unresolved && (
                      <Badge tone="opinion" title="El equipo editorial considera que esta objeción no está saldada">
                        Sin saldar
                      </Badge>
                    )}
                  </div>
                  <p className="text-[15px] font-medium leading-relaxed">«{c.objection}»</p>
                  {c.from && (
                    <p className="mt-1.5 text-[12.5px] text-fg-subtle">{c.from}</p>
                  )}
                </div>
                <div className="bg-bg-elevated px-5 py-4">
                  <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.11em] text-fg-subtle">
                    Respuesta posible
                  </p>
                  <Prose>
                    <Blocks blocks={c.response} idPrefix={`crit-${i}`} />
                  </Prose>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Debate abierto e incertidumbre ---------------------------------- */}
      {(a.openDebate || a.uncertainty) && (
        <section className="mb-11" id="abierto">
          <h2 className="mb-4 text-[1.28rem] font-bold tracking-[-0.015em]">
            Qué sigue discutido
          </h2>
          {a.openDebate && (
            <Prose>
              <Blocks blocks={a.openDebate} idPrefix="open" />
            </Prose>
          )}
          {a.uncertainty && (
            <div className="mt-4 rounded-[var(--radius)] border border-warn/30 bg-warn-subtle px-4 py-3.5">
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.11em] text-warn">
                Dónde hay incertidumbre
              </p>
              <p className="text-[14px] leading-relaxed text-fg-muted">{a.uncertainty}</p>
            </div>
          )}
        </section>
      )}

      {/* Para profundizar ------------------------------------------------ */}
      {a.furtherReading && a.furtherReading.length > 0 && (
        <section className="mb-11" id="profundizar">
          <h2 className="mb-4 text-[1.28rem] font-bold tracking-[-0.015em]">
            Para profundizar
          </h2>
          <ul className="space-y-3">
            {a.furtherReading.map((r, i) => (
              <li
                key={i}
                className="rounded-[var(--radius)] border border-border bg-bg-elevated p-4"
              >
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-[15px] font-semibold">{r.title}</span>
                  {r.author && (
                    <span className="text-[13px] text-fg-subtle">— {r.author}</span>
                  )}
                  {r.level && <LevelBadge level={r.level} />}
                </div>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-muted">{r.why}</p>
                {r.sourceId && getSource(r.sourceId) && (
                  <Link
                    href={`/fuentes#${r.sourceId}`}
                    className="mt-2 inline-block text-[12.5px] text-accent hover:underline"
                  >
                    Ver ficha de la fuente →
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Fuentes ---------------------------------------------------------- */}
      <section className="mb-11" id="fuentes">
        <h2 className="mb-1.5 text-[1.28rem] font-bold tracking-[-0.015em]">Fuentes</h2>
        <p className="mb-4 max-w-[62ch] text-[14px] text-fg-muted">
          Ordenadas por prioridad editorial: primero las fuentes primarias y los documentos
          oficiales.
        </p>
        <ul className="space-y-2.5">
          {sources.map(
            (s) =>
              s && (
                <li key={s.id} id={`src-${s.id}`} className="text-[14px] leading-relaxed">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <Badge>{SOURCE_KIND_LABEL[s.kind]}</Badge>
                    <span className="font-medium">{s.title}</span>
                  </div>
                  <p className="mt-0.5 text-[13px] text-fg-muted">
                    {[s.author, s.publisher, s.year].filter(Boolean).join(" · ")}
                    {s.url && (
                      <>
                        {" · "}
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline"
                        >
                          enlace
                        </a>
                      </>
                    )}
                  </p>
                  {s.note && (
                    <p className="mt-1 text-[12.5px] leading-relaxed text-fg-subtle">
                      {s.note}
                    </p>
                  )}
                </li>
              ),
          )}
        </ul>
      </section>

      {/* Términos y relacionados ------------------------------------------ */}
      {terms.length > 0 && (
        <section className="mb-9">
          <h2 className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-fg-subtle">
            Términos de este artículo
          </h2>
          <div className="flex flex-wrap gap-2">
            {terms.map(
              (t) =>
                t && (
                  <Link
                    key={t.id}
                    href={`/diccionario#${t.id}`}
                    title={t.definition}
                    className="rounded-full border border-border bg-bg-subtle px-3 py-1 text-[13px] text-fg-muted transition-colors hover:border-accent-border hover:text-accent"
                  >
                    {t.term}
                  </Link>
                ),
            )}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="border-t border-border pt-8">
          <h2 className="mb-4 text-[1.15rem] font-bold tracking-[-0.015em]">Seguí por acá</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/articulo/${r.slug}`}
                className="group rounded-[var(--radius)] border border-border bg-bg-elevated p-4 transition-colors hover:border-accent-border"
              >
                <p className="text-[14.5px] font-semibold leading-snug group-hover:text-accent">
                  {r.title}
                </p>
                <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-fg-muted">
                  {r.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
