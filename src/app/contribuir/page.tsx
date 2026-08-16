import type { Metadata } from "next";
import Link from "next/link";
import { CONTRIBUTION_STATES, CONTRIBUTION_TYPES } from "@/content/editorial";
import { Badge, Note, PageHeader, Section } from "@/components/ui";
import { SiHayComunidad } from "@/components/Disponible";

export const metadata: Metadata = {
  title: "Contribuir",
  description: "Cómo proponer artículos, correcciones, fuentes y datos, y cómo funciona el proceso de moderación editorial.",
};

const TONE: Record<string, "neutral" | "info" | "warn" | "ok" | "danger"> = {
  neutral: "neutral",
  info: "info",
  warn: "warn",
  ok: "ok",
  danger: "danger",
};

export default function Contribuir() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="Participar"
        title="Contribuir"
        lead="La Wiki se construye entre varios, pero con estándares. Acá está qué se puede aportar, qué pedimos a cambio y cómo funciona la revisión."
      />

      <div className="mb-9">
        <Note tone="ok" title="La contribución más valiosa que podés hacer">
          Encontrar un error nuestro. Una cita mal atribuida, un dato sin fuente, una
          objeción presentada de manera débil o un artículo que suena a propaganda. Eso
          vale más que un artículo nuevo, porque protege lo único que hace útil al proyecto.
        </Note>
      </div>

      <Section title="Qué se puede aportar">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {CONTRIBUTION_TYPES.map((t) => (
            <div
              key={t.id}
              className="rounded-[var(--radius)] border border-border bg-bg-elevated p-4"
            >
              <p className="text-[14.5px] font-semibold">{t.label}</p>
              <p className="mt-1 text-[13.5px] leading-relaxed text-fg-muted">{t.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Cómo funciona la revisión"
        subtitle="Toda propuesta pasa por estos estados. El historial de cambios queda visible."
      >
        <ol className="space-y-2.5">
          {CONTRIBUTION_STATES.map((s, i) => (
            <li
              key={s.id}
              className="flex gap-3.5 rounded-[var(--radius)] border border-border bg-bg-elevated px-4 py-3.5"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bg-inset text-[12px] font-bold tabular-nums text-fg-subtle">
                {i + 1}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[14.5px] font-semibold">{s.label}</p>
                  <Badge tone={TONE[s.color]}>{s.id}</Badge>
                </div>
                <p className="mt-1 text-[13.5px] leading-relaxed text-fg-muted">
                  {s.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        title="Qué pedimos en una propuesta"
        subtitle="No hace falta que escribas como un académico. Hace falta que se pueda verificar."
      >
        <ul className="space-y-2.5">
          {[
            "Que las afirmaciones factuales tengan una fuente que se pueda consultar. Fuente primaria si existe.",
            "Que se distinga lo que es un hecho de lo que es una interpretación.",
            "Que se incluya al menos una objeción fuerte a lo que se afirma, en su mejor versión.",
            "Que no se inventen citas. Si no encontrás la cita exacta, parafraseá y decilo.",
            "Que se indique cuando hay desacuerdo dentro del liberalismo, en lugar de presentar una posición como «la» liberal.",
            "Que el lenguaje sea claro. Si un chico de 16 años no lo entiende, todavía no está terminado.",
          ].map((r, i) => (
            <li
              key={i}
              className="flex gap-2.5 rounded-[var(--radius)] border border-border bg-bg-elevated px-4 py-3 text-[14px] leading-relaxed"
            >
              <span aria-hidden className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Section>

      <SiHayComunidad>
        <Section
          title="Cómo enviar una propuesta"
          subtitle="Por ahora, la vía más directa es el foro: queda a la vista de todos y se puede discutir antes de que entre a la Wiki."
        >
          <Link
            href="/comunidad"
            className="inline-block rounded-[var(--radius-sm)] bg-accent px-4 py-2 text-[14px] font-semibold text-accent-fg hover:opacity-90"
          >
            Abrir un hilo en «Sobre la Wiki» →
          </Link>
          <p className="mt-4 max-w-[68ch] text-[14px] leading-relaxed text-fg-muted">
            Contá qué encontraste o qué proponés, con la fuente si corresponde. Si el
            aporte cumple los estándares, se incorpora al artículo con la corrección
            registrada y la fecha de revisión actualizada.
          </p>
        </Section>
      </SiHayComunidad>

    </div>
  );
}
