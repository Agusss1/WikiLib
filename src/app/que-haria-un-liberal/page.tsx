import type { Metadata } from "next";
import { SCENARIOS } from "@/content/interactive";
import { Card, Grid, Note, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "¿Qué haría un liberal?",
  description: "Situaciones reales de política pública donde elegís una opción y ves sus consecuencias, incentivos y trade-offs.",
};

export default function QueHariaUnLiberal() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Interactivo"
        title="¿Qué haría un liberal?"
        lead="Situaciones concretas de política pública. Elegís una opción y ves qué pasaría: consecuencias, incentivos que genera, qué se resigna y quién gana y quién pierde."
      />

      <div className="mb-8">
        <Note tone="warn" title="Esto no es un test de pureza ideológica">
          Ninguna opción está marcada como correcta, y eso es deliberado. El objetivo es
          entrenar una forma de pensar —incentivos, consecuencias, trade-offs,
          instituciones—, no que aprendas cuál es la respuesta que se espera de vos.
          En varios de estos casos las corrientes liberales eligen distinto entre sí.
        </Note>
      </div>

      <Grid cols={2}>
        {SCENARIOS.map((s) => (
          <Card
            key={s.id}
            href={`/que-haria-un-liberal/${s.id}`}
            eyebrow={`${s.options.length} opciones`}
            title={s.title}
            description={s.situation}
          />
        ))}
      </Grid>
    </div>
  );
}
