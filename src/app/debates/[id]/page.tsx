import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DEBATES, DEBATES_BY_ID } from "@/content/debates";
import { ARTICLES_BY_SLUG } from "@/content/articles";
import { Badge, Breadcrumbs, LevelBadge } from "@/components/ui";
import { renderInline } from "@/lib/inline";

export function generateStaticParams() {
  return DEBATES.map((d) => ({ id: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const d = DEBATES_BY_ID[id];
  if (!d) return { title: "Debate no encontrado" };
  return { title: d.claim, description: d.meaning };
}

function Step({
  n,
  label,
  hint,
  tone,
  items,
  idPrefix,
}: {
  n: number;
  label: string;
  hint: string;
  tone: "neutral" | "warn" | "accent" | "opinion";
  items: string[];
  idPrefix: string;
}) {
  const border: Record<string, string> = {
    neutral: "border-border",
    warn: "border-warn/35",
    accent: "border-accent-border",
    opinion: "border-opinion/35",
  };
  const chip: Record<string, string> = {
    neutral: "bg-bg-inset text-fg-muted",
    warn: "bg-warn-subtle text-warn",
    accent: "bg-accent-subtle text-accent",
    opinion: "bg-opinion-subtle text-opinion",
  };
  return (
    <section className={`mb-6 rounded-[var(--radius)] border-l-[3px] ${border[tone]} bg-bg-elevated py-4 pl-5 pr-4`}>
      <div className="mb-3 flex flex-wrap items-baseline gap-3">
        <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.1em] ${chip[tone]}`}>
          {n}. {label}
        </span>
        <span className="text-[12.5px] text-fg-subtle">{hint}</span>
      </div>
      <div className="prose">
        {items.map((t, i) => (
          <p key={i}>{renderInline(t, `${idPrefix}-${i}`)}</p>
        ))}
      </div>
    </section>
  );
}

export default async function DebatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const d = DEBATES_BY_ID[id];
  if (!d) notFound();

  return (
    <article className="mx-auto max-w-[52rem]">
      <Breadcrumbs items={[{ label: "Debates", href: "/debates" }, { label: d.claim }]} />

      <header className="mb-8 border-b border-border pb-7">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge tone="accent">Afirmación</Badge>
          <LevelBadge level={d.level} />
          {d.topics.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <h1 className="text-[clamp(1.6rem,4vw,2.3rem)] font-bold leading-[1.15] tracking-[-0.025em]">
          «{d.claim}»
        </h1>
      </header>

      <section className="mb-8 rounded-[var(--radius)] border border-border bg-bg-subtle p-5">
        <h2 className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-fg-subtle">
          ¿Qué significa exactamente?
        </h2>
        <p className="text-[15px] leading-relaxed">{d.meaning}</p>
      </section>

      <Step
        n={1}
        label="El mejor argumento a favor"
        hint="Escrito en su versión más fuerte, no en la más fácil de refutar"
        tone="warn"
        items={d.inFavor}
        idPrefix="fav"
      />
      <Step
        n={2}
        label="La respuesta liberal"
        hint="Interpretación, no dato"
        tone="accent"
        items={d.liberalResponse}
        idPrefix="lib"
      />
      <Step
        n={3}
        label="Objeción a esa respuesta"
        hint="Lo que un crítico informado contestaría"
        tone="warn"
        items={d.counter}
        idPrefix="cnt"
      />
      <Step
        n={4}
        label="Réplica posible"
        hint="Incluye lo que conviene conceder"
        tone="accent"
        items={d.reply}
        idPrefix="rep"
      />

      <section className="mb-9 rounded-[var(--radius)] border border-opinion/30 bg-opinion-subtle p-5">
        <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-opinion">
          Qué sigue sin resolver
        </h2>
        <ul className="space-y-2">
          {d.open.map((o, i) => (
            <li key={i} className="flex gap-2.5 text-[14.5px] leading-relaxed">
              <span aria-hidden className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-opinion" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border pt-8">
        <h2 className="mb-4 text-[1.15rem] font-bold tracking-[-0.015em]">
          Para entender el fondo del asunto
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {d.relatedArticles.map((slug) => {
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
