import type { Metadata } from "next";
import Link from "next/link";
import { SOURCES } from "@/content/sources";
import { ARTICLES } from "@/content/articles";
import { SOURCE_KIND_LABEL, SOURCE_PRIORITY, SOURCE_KINDS } from "@/content/schema";
import { Badge, Note, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Fuentes",
  description: "Registro completo de fuentes de WikiLib, ordenado por prioridad editorial.",
};

export default function Fuentes() {
  const usage = new Map<string, string[]>();
  for (const a of ARTICLES) {
    for (const s of a.sources) {
      usage.set(s, [...(usage.get(s) ?? []), a.slug]);
    }
  }

  const kinds = [...SOURCE_KINDS].sort(
    (a, b) => SOURCE_PRIORITY[a] - SOURCE_PRIORITY[b],
  );

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Transparencia"
        title="Fuentes"
        lead={`Las ${SOURCES.length} fuentes que respaldan el contenido de la Wiki, ordenadas por la prioridad editorial del proyecto.`}
      />

      <div className="mb-9">
        <Note tone="info" title="Orden de prioridad">
          Cuando existe la fuente original, no usamos un resumen. Preferimos, en este orden:
          fuentes primarias (normas, obras), documentos oficiales, papers académicos, libros,
          universidades, organismos internacionales y por último medios periodísticos. Ninguna
          cita textual se publica sin fuente identificada: el propio sistema de tipos lo impide.
        </Note>
      </div>

      {kinds.map((kind) => {
        const list = SOURCES.filter((s) => s.kind === kind);
        if (list.length === 0) return null;
        return (
          <section key={kind} className="mb-10">
            <div className="mb-4 flex items-baseline gap-3 border-b border-border pb-2">
              <h2 className="text-[1.15rem] font-bold tracking-[-0.015em]">
                {SOURCE_KIND_LABEL[kind]}
              </h2>
              <span className="text-[12.5px] text-fg-subtle">
                prioridad {SOURCE_PRIORITY[kind]}
              </span>
            </div>
            <ul className="space-y-4">
              {list.map((s) => {
                const used = usage.get(s.id) ?? [];
                return (
                  <li key={s.id} id={s.id} className="scroll-mt-24">
                    <p className="text-[15px] font-semibold">{s.title}</p>
                    <p className="mt-0.5 text-[13.5px] text-fg-muted">
                      {[s.author, s.publisher, s.year, s.locator].filter(Boolean).join(" · ")}
                    </p>
                    {s.note && (
                      <p className="mt-1.5 max-w-[70ch] text-[13px] leading-relaxed text-fg-subtle">
                        {s.note}
                      </p>
                    )}
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      {s.url && (
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12.5px] text-accent hover:underline"
                        >
                          Ir a la fuente ↗
                        </a>
                      )}
                      {used.length > 0 && (
                        <Badge title={used.join(", ")}>
                          usada en {used.length} {used.length === 1 ? "artículo" : "artículos"}
                        </Badge>
                      )}
                    </div>
                    {used.length > 0 && (
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {used.slice(0, 6).map((slug) => (
                          <Link
                            key={slug}
                            href={`/articulo/${slug}`}
                            className="text-[12px] text-fg-subtle hover:text-accent hover:underline"
                          >
                            {slug}
                          </Link>
                        ))}
                        {used.length > 6 && (
                          <span className="text-[12px] text-fg-subtle">
                            +{used.length - 6} más
                          </span>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
