import type { Metadata } from "next";
import Link from "next/link";
import { PRINCIPLES } from "@/content/editorial";
import { Badge, Note, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Estándares editoriales",
  description: "Los doce principios que rigen el contenido de WikiLib, y cómo se verifica el cumplimiento de cada uno.",
};

export default function Estandares() {
  const automated = PRINCIPLES.filter((p) => p.automated).length;

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="El proyecto"
        title="Estándares editoriales"
        lead="La credibilidad es el activo principal de este proyecto. Estos son los principios que aplicamos, y —más importante— cómo se verifica que se cumplan."
      />

      <div className="mb-9">
        <Note tone="ok" title="Por qué esto no es una declaración de intenciones">
          {automated} de estos {PRINCIPLES.length} principios están validados{" "}
          <strong>automáticamente</strong> en cada compilación del sitio. Si alguien
          escribe una cita sin fuente, un dato sin fecha o un enlace que no resuelve, el
          sitio directamente no compila. Un principio que no se puede verificar es una
          consigna.
        </Note>
      </div>

      <div className="space-y-4">
        {PRINCIPLES.map((p, i) => (
          <article
            key={p.id}
            className="rounded-[var(--radius)] border border-border bg-bg-elevated p-5"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-bg-inset text-[11px] font-bold tabular-nums text-fg-subtle">
                {i + 1}
              </span>
              <h2 className="text-[15.5px] font-bold tracking-[-0.01em]">{p.title}</h2>
              {p.automated ? (
                <Badge tone="ok" title="Se verifica en cada build">
                  Validado automáticamente
                </Badge>
              ) : (
                <Badge title="Se verifica en revisión editorial">Revisión editorial</Badge>
              )}
            </div>
            <p className="text-[14.5px] leading-relaxed">{p.rule}</p>
            <p className="mt-2.5 border-t border-border pt-2.5 text-[13px] leading-relaxed text-fg-muted">
              <span className="font-semibold text-fg">Cómo lo verificamos: </span>
              {p.howWeCheck}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-9">
        <Note tone="warn" title="Si encontrás un incumplimiento">
          Es la contribución más valiosa que podés hacer. Una cita mal atribuida, un dato
          sin fuente, una objeción presentada de manera débil o un artículo que suena a
          propaganda:{" "}
          <Link href="/contribuir" className="text-accent hover:underline">
            reportalo acá
          </Link>
          .
        </Note>
      </div>
    </div>
  );
}
