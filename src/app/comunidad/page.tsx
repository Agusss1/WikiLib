import type { Metadata } from "next";
import Link from "next/link";
import { ListaHilos } from "@/components/Foro";
import { Note, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Comunidad",
  description: "Debates de la comunidad de WikiLib, separados del contenido editorial de la Wiki.",
};

export default function Comunidad() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Participar"
        title="Comunidad"
        lead="La Wiki es la puerta de entrada; esto es lo que hay del otro lado. Un espacio para discutir en serio con gente que estudió los mismos temas."
      />

      <div className="mb-8">
        <Note tone="warn" title="Una distinción que este sitio no va a borrar nunca">
          El <strong>contenido de la Wiki</strong> pasa por estándares editoriales:
          fuentes, objeciones, revisión y fecha de actualización. Lo que leas{" "}
          <strong>acá abajo es opinión de sus autores</strong>, no contenido revisado, y
          está señalizado como tal en todas partes.{" "}
          <Link href="/estandares" className="text-accent hover:underline">
            Ver estándares
          </Link>
          .
        </Note>
      </div>

      <Section title="Debates">
        <ListaHilos />
      </Section>

      <Section title="Las reglas de la casa">
        <ol className="space-y-2.5">
          {[
            "Discutí ideas, no personas. El argumento se responde; el que lo dice, no se ataca.",
            "Antes de refutar, reformulá la posición del otro de manera que él la reconozca como propia.",
            "Si afirmás un hecho, decí de dónde lo sacás. «Lo leí en algún lado» no es una fuente.",
            "Distinguí lo que sabés de lo que suponés. Admitir incertidumbre suma credibilidad, no la resta.",
            "Está permitido cambiar de opinión. Es, de hecho, el objetivo del ejercicio.",
            "No se admite contenido que use la comunidad para hacer campaña partidaria. Este no es un espacio de un partido.",
          ].map((r, i) => (
            <li
              key={i}
              className="flex gap-3.5 rounded-[var(--radius)] border border-border bg-bg-elevated px-4 py-3"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-subtle text-[12px] font-bold tabular-nums text-accent">
                {i + 1}
              </span>
              <span className="text-[14.5px] leading-relaxed">{r}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Por qué pedimos verificar el email">
        <p className="max-w-[68ch] text-[14.5px] leading-relaxed text-fg-muted">
          Podés crear tu cuenta y usar todo el sitio sin verificar nada: leer, hacer las
          rutas, los tests y guardar tu progreso. La verificación se pide sólo al momento
          de <strong>publicar</strong>. La razón es concreta: una discusión sostenida se
          arruina cuando cualquiera puede fabricar cuentas descartables en segundos, y ese
          costo lo terminan pagando los que participan de buena fe. Un código al mail es la
          barrera más baja que cumple esa función sin pedirte datos personales.
        </p>
        <div className="mt-4">
          <Link
            href="/entrar"
            className="inline-block rounded-[var(--radius-sm)] bg-accent px-4 py-2 text-[14px] font-semibold text-accent-fg hover:opacity-90"
          >
            Crear cuenta o entrar
          </Link>
        </div>
      </Section>
    </div>
  );
}
