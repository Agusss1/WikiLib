import type { Metadata } from "next";
import Link from "next/link";
import { INDICATORS, HISTORICAL_DATA, DATA_CATEGORIES, type Indicator } from "@/content/data";
import { getSource } from "@/content/sources";
import { ARTICLES_BY_SLUG } from "@/content/articles";
import { Badge, Note, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Argentina en datos",
  description: "Qué mide cada indicador, quién lo publica, con qué metodología y qué advertencias tiene antes de citarlo.",
};

const ORDER: Indicator["category"][] = [
  "precios", "monetario", "fiscal", "actividad", "social", "externo",
];

export default function Datos() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Datos"
        title="Argentina en datos"
        lead="Esta sección no publica cifras de coyuntura: publica el mapa de dónde están y cómo leerlas. La fuente oficial siempre va a estar más actualizada que este sitio."
      />

      <div className="mb-9 space-y-4">
        <Note tone="warn" title="Por qué acá no vas a encontrar «la inflación de este mes»">
          Es una decisión editorial. Un número copiado a mano envejece, se desactualiza y
          termina circulando sin contexto. Lo que sí podemos sostener es la ficha de cada
          indicador: qué mide exactamente, quién lo publica, con qué metodología, qué
          advertencias tiene y dónde consultarlo. Eso no caduca, y es lo que hace falta
          para no citar mal un dato.
        </Note>
        <Note tone="info" title="Cómo está pensado esto técnicamente">
          El modelo de datos separa el <strong>indicador</strong> (estable, verificable) del{" "}
          <strong>valor</strong> (fechado y con fuente obligatoria). Cuando se conecten las
          APIs del INDEC y del BCRA, los valores se pueblan solos y esta separación sigue
          funcionando igual.
        </Note>
      </div>

      {ORDER.map((cat) => {
        const list = INDICATORS.filter((i) => i.category === cat);
        if (!list.length) return null;
        return (
          <section key={cat} className="mb-10">
            <h2 className="mb-4 border-b border-border pb-2 text-[1.2rem] font-bold tracking-[-0.015em]">
              {DATA_CATEGORIES[cat]}
            </h2>
            <div className="space-y-4">
              {list.map((i) => {
                const src = getSource(i.sourceId);
                return (
                  <article
                    key={i.id}
                    id={i.id}
                    className="scroll-mt-24 rounded-[var(--radius)] border border-border bg-bg-elevated p-5"
                  >
                    <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-[16px] font-bold tracking-[-0.01em]">{i.name}</h3>
                      <Badge>{i.frequency}</Badge>
                    </div>
                    <p className="text-[14px] italic text-fg-muted">{i.question}</p>

                    <p className="mt-3 text-[14px] leading-relaxed">
                      <span className="font-semibold">Qué mide: </span>
                      {i.measures}
                    </p>

                    <div className="mt-3.5 rounded-[var(--radius-sm)] border border-warn/25 bg-warn-subtle px-3.5 py-3">
                      <p className="mb-1.5 text-[10.5px] font-bold uppercase tracking-[0.11em] text-warn">
                        Antes de citarlo
                      </p>
                      <ul className="space-y-1.5">
                        {i.caveats.map((c, k) => (
                          <li key={k} className="flex gap-2 text-[13px] leading-relaxed text-fg-muted">
                            <span aria-hidden className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-warn/50" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {i.commonMistakes && (
                      <div className="mt-3 rounded-[var(--radius-sm)] border border-border bg-bg-subtle px-3.5 py-3">
                        <p className="mb-1.5 text-[10.5px] font-bold uppercase tracking-[0.11em] text-fg-subtle">
                          Errores frecuentes
                        </p>
                        <ul className="space-y-1">
                          {i.commonMistakes.map((m, k) => (
                            <li key={k} className="text-[13px] leading-relaxed text-fg-muted">
                              · {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-3.5 flex flex-wrap items-center gap-2">
                      {src?.url && (
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-[var(--radius-sm)] bg-accent px-3 py-1.5 text-[13px] font-semibold text-accent-fg hover:opacity-90"
                        >
                          Ver la serie oficial ↗
                        </a>
                      )}
                      {i.relatedArticles.map((slug) => {
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
                );
              })}
            </div>
          </section>
        );
      })}

      <section className="mb-10">
        <h2 className="mb-2 border-b border-border pb-2 text-[1.2rem] font-bold tracking-[-0.015em]">
          Hechos y datos históricos
        </h2>
        <p className="mb-4 text-[14px] text-fg-muted">
          Sólo hechos ampliamente documentados. Los que todavía no verificamos contra la
          fuente primaria están marcados como tales, en lugar de presentarse como firmes.
        </p>
        <ul className="divide-y divide-border overflow-hidden rounded-[var(--radius)] border border-border bg-bg-elevated">
          {HISTORICAL_DATA.map((d, i) => {
            const src = getSource(d.sourceId);
            return (
              <li key={i} className="px-5 py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="text-[14.5px] font-semibold">{d.label}</p>
                  {d.needsVerification && (
                    <Badge tone="warn">Pendiente de verificación</Badge>
                  )}
                </div>
                <p className="mt-1 text-[1.05rem] font-bold tabular-nums tracking-[-0.01em]">
                  {d.value}
                </p>
                <p className="mt-1 text-[12.5px] text-fg-subtle">
                  {d.asOf}
                  {src && (
                    <>
                      {" · "}
                      <Link href={`/fuentes#${src.id}`} className="text-accent hover:underline">
                        {src.publisher ?? src.title}
                      </Link>
                    </>
                  )}
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-fg-muted">{d.note}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
