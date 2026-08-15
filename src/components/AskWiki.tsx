"use client";

import Link from "next/link";
import { useState } from "react";
import { answerQuestion, type Answer } from "@/lib/answer";
import { SOURCE_KIND_LABEL } from "@/content/schema";
import { Badge, EmptyState, Note } from "@/components/ui";

const EXAMPLES = [
  "No entiendo por qué emitir dinero puede generar inflación",
  "¿Por qué sube el dólar en Argentina?",
  "¿Quién construye las rutas si no lo hace el Estado?",
  "¿Qué diferencia hay entre liberalismo y libertarismo?",
  "¿Qué dice la Constitución sobre la propiedad?",
];

export function AskWiki() {
  const [q, setQ] = useState("");
  const [answer, setAnswer] = useState<Answer | null>(null);

  function ask(question: string) {
    setQ(question);
    setAnswer(answerQuestion(question));
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(q);
        }}
        className="mb-6"
      >
        <div className="flex flex-col gap-3 rounded-[var(--radius)] border border-border-strong bg-bg-elevated p-4 focus-within:border-accent sm:flex-row sm:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Escribí tu pregunta con tus palabras…"
            aria-label="Tu pregunta"
            className="w-full bg-transparent text-[15px] outline-none placeholder:text-fg-subtle"
          />
          <button
            type="submit"
            className="shrink-0 rounded-[var(--radius-sm)] bg-accent px-4 py-2 text-[14px] font-semibold text-accent-fg transition-opacity hover:opacity-90"
          >
            Preguntar
          </button>
        </div>
      </form>

      {!answer && (
        <div className="mb-8">
          <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-fg-subtle">
            Ejemplos
          </p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map((e) => (
              <button
                key={e}
                onClick={() => ask(e)}
                className="rounded-full border border-border bg-bg-subtle px-3 py-1.5 text-[13px] text-fg-muted transition-colors hover:border-accent-border hover:text-accent"
              >
                {e}
              </button>
            ))}
          </div>
        </div>
      )}

      {answer && !answer.found && (
        <EmptyState
          title="La Wiki no cubre esto todavía"
          description={answer.note}
          action={
            <Link
              href="/contribuir"
              className="rounded-[var(--radius-sm)] bg-accent px-4 py-2 text-[14px] font-semibold text-accent-fg"
            >
              Proponer este tema
            </Link>
          }
        />
      )}

      {answer?.found && (
        <div className="space-y-7">
          {answer.lead && (
            <section className="rounded-[var(--radius)] border border-accent-border bg-accent-subtle p-5">
              <p className="mb-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-accent">
                Respuesta corta
              </p>
              <p className="text-[15.5px] leading-relaxed">{answer.lead}</p>
              {answer.leadSource && (
                <Link
                  href={answer.leadSource.href}
                  className="mt-2.5 inline-block text-[13px] font-medium text-accent hover:underline"
                >
                  De: {answer.leadSource.title} →
                </Link>
              )}
            </section>
          )}

          {answer.passages.length > 0 && (
            <section>
              <h2 className="mb-1 text-[1.1rem] font-bold tracking-[-0.015em]">
                Lo que dice la Wiki
              </h2>
              <p className="mb-4 text-[13px] text-fg-muted">
                Fragmentos textuales de artículos publicados. No se genera texto nuevo.
              </p>
              <div className="space-y-3">
                {answer.passages.map((p, i) => (
                  <blockquote
                    key={i}
                    className="rounded-[var(--radius)] border-l-[3px] border-border-strong bg-bg-elevated py-3.5 pl-4 pr-4"
                  >
                    <p className="text-[14.5px] leading-relaxed">{p.text}</p>
                    <footer className="mt-2.5 flex flex-wrap items-center gap-2 text-[12px]">
                      <Badge
                        tone={p.section.includes("interpretación") ? "opinion" : "neutral"}
                      >
                        {p.section}
                      </Badge>
                      <Link
                        href={`/articulo/${p.articleSlug}`}
                        className="text-accent hover:underline"
                      >
                        {p.articleTitle}
                      </Link>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </section>
          )}

          {answer.terms.length > 0 && (
            <section>
              <h2 className="mb-3 text-[1.1rem] font-bold tracking-[-0.015em]">
                Términos que aparecen
              </h2>
              <dl className="divide-y divide-border overflow-hidden rounded-[var(--radius)] border border-border bg-bg-elevated">
                {answer.terms.map((t) => (
                  <div key={t.href} className="px-4 py-3">
                    <dt className="text-[14px] font-semibold">
                      <Link href={t.href} className="hover:text-accent">
                        {t.term}
                      </Link>
                    </dt>
                    <dd className="mt-0.5 text-[13.5px] leading-relaxed text-fg-muted">
                      {t.definition}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <section>
            <h2 className="mb-3 text-[1.1rem] font-bold tracking-[-0.015em]">
              Fuentes utilizadas
            </h2>
            <ul className="space-y-2">
              {answer.sources.map((s) => (
                <li key={s.id} className="text-[13.5px] leading-relaxed">
                  <Badge>{SOURCE_KIND_LABEL[s.kind]}</Badge>{" "}
                  <Link href={`/fuentes#${s.id}`} className="hover:text-accent">
                    {s.title}
                  </Link>
                  {s.author && <span className="text-fg-subtle"> — {s.author}</span>}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-[1.1rem] font-bold tracking-[-0.015em]">
              Artículos relacionados
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {answer.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group rounded-[var(--radius)] border border-border bg-bg-elevated p-4 transition-colors hover:border-accent-border"
                >
                  <p className="text-[14.5px] font-semibold group-hover:text-accent">
                    {r.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-fg-muted">
                    {r.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <Note tone="warn" title="Cómo leer esta respuesta">
            {answer.note}
          </Note>
        </div>
      )}
    </div>
  );
}
