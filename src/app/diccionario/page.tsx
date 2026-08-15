import type { Metadata } from "next";
import Link from "next/link";
import { GLOSSARY, GLOSSARY_LETTERS } from "@/content/glossary";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Diccionario",
  description: "Diccionario A–Z de términos de economía, política y derecho, con definiciones cortas y enlace al artículo completo.",
};

export default function Diccionario() {
  const byLetter = GLOSSARY_LETTERS.map((letter) => ({
    letter,
    terms: GLOSSARY.filter((t) => t.term[0].toUpperCase() === letter).sort((a, b) =>
      a.term.localeCompare(b.term, "es"),
    ),
  }));

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Referencia"
        title="Diccionario"
        lead={`${GLOSSARY.length} términos de economía, política y derecho. Cada definición es corta a propósito: si querés más, hay un enlace al artículo completo.`}
      />

      <nav
        aria-label="Índice alfabético"
        className="sticky top-14 z-20 -mx-4 mb-8 flex flex-wrap gap-1 border-y border-border bg-bg/90 px-4 py-2.5 backdrop-blur-md sm:mx-0 sm:rounded-[var(--radius)] sm:border"
      >
        {GLOSSARY_LETTERS.map((l) => (
          <a
            key={l}
            href={`#letra-${l}`}
            className="flex h-7 w-7 items-center justify-center rounded-[var(--radius-sm)] text-[13px] font-semibold text-fg-muted transition-colors hover:bg-accent-subtle hover:text-accent"
          >
            {l}
          </a>
        ))}
      </nav>

      {byLetter.map(({ letter, terms }) => (
        <section key={letter} id={`letra-${letter}`} className="mb-10 scroll-mt-32">
          <h2 className="mb-3 border-b border-border pb-1.5 text-[1.5rem] font-bold tracking-[-0.02em] text-accent">
            {letter}
          </h2>
          <dl className="divide-y divide-border">
            {terms.map((t) => (
              <div key={t.id} id={t.id} className="scroll-mt-32 py-3.5">
                <dt className="flex flex-wrap items-baseline gap-2">
                  <span className="text-[15px] font-semibold">{t.term}</span>
                  {t.aliases?.length ? (
                    <span className="text-[12.5px] text-fg-subtle">
                      también: {t.aliases.join(", ")}
                    </span>
                  ) : null}
                </dt>
                <dd className="mt-1 text-[14px] leading-relaxed text-fg-muted">
                  {t.definition}
                  {t.article && (
                    <>
                      {" "}
                      <Link
                        href={`/articulo/${t.article}`}
                        className="whitespace-nowrap text-accent hover:underline"
                      >
                        Ver explicación completa →
                      </Link>
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
