"use client";

import Link from "next/link";
import { useState } from "react";
import type { Scenario } from "@/content/interactive";
import { ARTICLES_BY_SLUG } from "@/content/articles";
import { Badge } from "@/components/ui";

/**
 * "¿Qué haría un liberal?"
 *
 * Deliberadamente NO hay respuesta correcta. Elegir una opción abre su
 * análisis —consecuencias, incentivos, trade-off, quién gana y quién pierde—
 * y habilita comparar con las demás. El objetivo es enseñar a razonar, no
 * premiar la opción "liberal".
 */
export function ScenarioPlayer({ scenario }: { scenario: Scenario }) {
  const [chosen, setChosen] = useState<string | null>(null);
  const [compareAll, setCompareAll] = useState(false);

  const option = scenario.options.find((o) => o.id === chosen);
  const shown = compareAll ? scenario.options : option ? [option] : [];

  return (
    <div>
      <section className="mb-7 rounded-[var(--radius)] border border-border bg-bg-elevated p-5">
        <h2 className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-fg-subtle">
          La situación
        </h2>
        <p className="text-[15.5px] leading-relaxed">{scenario.situation}</p>
        <div className="mt-4 border-t border-border pt-3.5">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-fg-subtle">
            Datos que conviene considerar
          </p>
          <ul className="space-y-1.5">
            {scenario.context.map((c, i) => (
              <li key={i} className="flex gap-2.5 text-[14px] leading-relaxed text-fg-muted">
                <span aria-hidden className="mt-[8px] h-[4px] w-[4px] shrink-0 rounded-full bg-border-strong" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-7">
        <h2 className="mb-1 text-[1.15rem] font-bold tracking-[-0.015em]">¿Qué harías?</h2>
        <p className="mb-4 text-[13.5px] text-fg-muted">
          No hay opción correcta marcada. Elegí una y vas a ver su análisis completo.
        </p>
        <div className="space-y-2.5">
          {scenario.options.map((o) => (
            <button
              key={o.id}
              onClick={() => setChosen(o.id)}
              className={`flex w-full items-start gap-3 rounded-[var(--radius)] border p-4 text-left text-[14.5px] leading-relaxed transition-colors ${
                chosen === o.id
                  ? "border-accent bg-accent-subtle"
                  : "border-border bg-bg-elevated hover:border-accent-border"
              }`}
            >
              <span
                aria-hidden
                className={`mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 ${
                  chosen === o.id ? "border-accent bg-accent" : "border-border-strong"
                }`}
              />
              <span className={chosen === o.id ? "font-medium" : ""}>{o.label}</span>
            </button>
          ))}
        </div>
      </section>

      {chosen && (
        <>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-[1.15rem] font-bold tracking-[-0.015em]">
              {compareAll ? "Todas las opciones, comparadas" : "Qué pasaría"}
            </h2>
            <button
              onClick={() => setCompareAll((v) => !v)}
              className="rounded-[var(--radius-sm)] border border-border px-3 py-1.5 text-[13px] font-medium text-fg-muted transition-colors hover:border-accent-border hover:text-accent"
            >
              {compareAll ? "Ver sólo mi elección" : "Comparar con las demás"}
            </button>
          </div>

          <div className="mb-8 space-y-4">
            {shown.map((o) => (
              <div
                key={o.id}
                className={`rounded-[var(--radius)] border p-5 ${
                  o.id === chosen ? "border-accent-border bg-accent-subtle/40" : "border-border bg-bg-elevated"
                }`}
              >
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <h3 className="text-[15.5px] font-semibold">{o.label}</h3>
                  {o.id === chosen && <Badge tone="accent">Tu elección</Badge>}
                </div>

                <div className="space-y-3.5">
                  <div>
                    <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.11em] text-fg-subtle">
                      Consecuencias
                    </p>
                    <ul className="space-y-1.5">
                      {o.consequences.map((c, i) => (
                        <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed text-fg-muted">
                          <span aria-hidden className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-border-strong" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {[
                      { label: "Incentivos que genera", text: o.incentives },
                      { label: "Qué se resigna", text: o.tradeoff },
                      { label: "Quién gana y quién pierde", text: o.whoWinsLoses },
                    ].map((f) => (
                      <div key={f.label} className="rounded-[var(--radius-sm)] border border-border bg-bg-subtle p-3">
                        <p className="mb-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-fg-subtle">
                          {f.label}
                        </p>
                        <p className="text-[13px] leading-relaxed text-fg-muted">{f.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <section className="mb-8">
            <h2 className="mb-3 text-[1.15rem] font-bold tracking-[-0.015em]">
              Qué defendería cada corriente
            </h2>
            <div className="space-y-2.5">
              {scenario.currents.map((c, i) => (
                <div key={i} className="rounded-[var(--radius)] border border-border bg-bg-elevated p-4">
                  <p className="text-[12.5px] font-bold uppercase tracking-[0.08em] text-accent">
                    {c.current}
                  </p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-fg-muted">{c.would}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8 rounded-[var(--radius)] border border-opinion/30 bg-opinion-subtle p-5">
            <h2 className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-opinion">
              La lección, que no es política sino de método
            </h2>
            <p className="text-[14.5px] leading-relaxed">{scenario.lesson}</p>
          </section>

          <section className="border-t border-border pt-7">
            <h2 className="mb-4 text-[1.1rem] font-bold tracking-[-0.015em]">
              Para entenderlo mejor
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {scenario.relatedArticles.map((slug) => {
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
        </>
      )}
    </div>
  );
}
