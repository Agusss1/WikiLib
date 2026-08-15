import type { Metadata } from "next";
import Link from "next/link";
import { FAQS } from "@/content/debates";
import { ARTICLES_BY_SLUG } from "@/content/articles";
import { Badge, Note, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Preguntas difíciles",
  description: "Las preguntas que más cuestan responder, con una respuesta corta, un desarrollo y una nota sobre lo que la respuesta no resuelve.",
};

export default function Preguntas() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="FAQ"
        title="Preguntas difíciles"
        lead="Las que más cuesta contestar son las que más vale la pena leer. Cada una tiene una respuesta corta, un desarrollo, y una nota explícita sobre lo que esa respuesta no resuelve."
      />

      <div className="mb-9">
        <Note tone="warn" title="Un criterio que aplicamos a toda esta sección">
          Si una respuesta te deja completamente conforme, desconfiá. Las preguntas de acá
          son difíciles justamente porque las respuestas disponibles tienen límites, y
          señalarlos es parte de responderlas bien.
        </Note>
      </div>

      <nav className="mb-9 rounded-[var(--radius)] border border-border bg-bg-subtle p-4">
        <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-fg-subtle">
          Índice
        </p>
        <ul className="space-y-1.5">
          {FAQS.map((f) => (
            <li key={f.id}>
              <a href={`#${f.id}`} className="text-[14px] text-fg-muted hover:text-accent">
                {f.question}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-10">
        {FAQS.map((f) => (
          <article key={f.id} id={f.id} className="scroll-mt-24 border-b border-border pb-9 last:border-0">
            <h2 className="text-[1.35rem] font-bold leading-snug tracking-[-0.02em]">
              {f.question}
            </h2>

            <div className="mt-4 rounded-[var(--radius)] border border-accent-border bg-accent-subtle p-4">
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.11em] text-accent">
                Respuesta corta
              </p>
              <p className="text-[15px] leading-relaxed">{f.short}</p>
            </div>

            <div className="prose mt-5">
              {f.long.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {f.caveat && (
              <div className="mt-4 rounded-[var(--radius)] border border-warn/30 bg-warn-subtle px-4 py-3.5">
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.11em] text-warn">
                  Lo que esta respuesta no resuelve
                </p>
                <p className="text-[14px] leading-relaxed text-fg-muted">{f.caveat}</p>
              </div>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-[12.5px] text-fg-subtle">Seguir leyendo:</span>
              {f.relatedArticles.map((slug) => {
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
              {f.topics.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
