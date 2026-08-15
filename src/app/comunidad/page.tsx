import type { Metadata } from "next";
import Link from "next/link";
import { PATHS } from "@/content/learning";
import { DEBATES } from "@/content/debates";
import { Badge, Card, Grid, Note, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Comunidad",
  description: "Debates, grupos de lectura, encuentros y contenido generado por la comunidad, separado del contenido editorial de la Wiki.",
};

export default function Comunidad() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Participar"
        title="Comunidad"
        lead="La Wiki es la puerta de entrada; esto es lo que hay del otro lado. Un espacio para discutir, leer en grupo, encontrarse y aportar."
      />

      <div className="mb-9">
        <Note tone="warn" title="Una distinción que este sitio no va a borrar nunca">
          El <strong>contenido de la Wiki</strong> pasa por estándares editoriales: fuentes,
          objeciones, revisión y fecha de actualización. El <strong>contenido de la
          comunidad</strong> es opinión de sus autores y va a estar siempre señalizado como
          tal. Mezclarlos destruiría lo único que hace valioso al proyecto.{" "}
          <Link href="/estandares" className="text-accent hover:underline">
            Ver estándares
          </Link>
          .
        </Note>
      </div>

      <Section
        title="Espacios"
        subtitle="Estas secciones requieren cuentas de usuario y moderación. Están diseñadas y documentadas; su implementación es la siguiente etapa del proyecto."
      >
        <Grid cols={2}>
          {[
            {
              title: "Debates de la comunidad",
              desc: "Hilos abiertos donde cualquiera puede plantear una posición. Con la regla de la casa: presentá el mejor argumento del otro lado antes de responderlo.",
              badge: "Requiere cuentas",
            },
            {
              title: "Preguntas y respuestas",
              desc: "Preguntá lo que no entendés sin miedo a que sea básico. Las preguntas más frecuentes terminan convirtiéndose en artículos de la Wiki.",
              badge: "Requiere cuentas",
            },
            {
              title: "Grupos de lectura",
              desc: "Leer los libros de la biblioteca en grupo, con un ritmo pautado y discusión por capítulo. Empieza por Bastiat.",
              badge: "Requiere cuentas",
            },
            {
              title: "Encuentros",
              desc: "Charlas, presentaciones y reuniones presenciales por ciudad. Agenda pública con inscripción.",
              badge: "Requiere cuentas",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-[var(--radius)] border border-dashed border-border-strong bg-bg-subtle p-5"
            >
              <div className="mb-2">
                <Badge tone="warn">{s.badge}</Badge>
              </div>
              <h3 className="text-[1.02rem] font-semibold">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-fg-muted">{s.desc}</p>
            </div>
          ))}
        </Grid>
      </Section>

      <Section
        title="Mientras tanto, podés empezar por acá"
        subtitle="Lo que ya funciona hoy, sin necesidad de cuenta."
      >
        <Grid cols={3}>
          <Card
            href="/contribuir"
            eyebrow="Aportar"
            title="Contribuir a la Wiki"
            description="Proponer artículos, corregir errores, aportar fuentes o señalar una objeción que falta. Es la forma más útil de participar hoy."
          />
          <Card
            href="/debates"
            eyebrow="Discutir"
            title={`${DEBATES.length} debates para practicar`}
            description="Cada uno con el mejor argumento de cada lado. Buen entrenamiento antes de discutir en cualquier otro lado."
          />
          <Card
            href={`/rutas/${PATHS[0].id}`}
            eyebrow="Estudiar"
            title="Hacer una ruta"
            description="Recorridos de diez a quince módulos con lecturas, preguntas y quizzes. Sirve igual solo que en grupo."
          />
        </Grid>
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
    </div>
  );
}
