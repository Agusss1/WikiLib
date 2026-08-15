import type { Metadata } from "next";
import { DEBATES } from "@/content/debates";
import { Badge, Card, Grid, Note, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Debates",
  description: "Argumentario: cada afirmación difícil con su mejor argumento a favor, la respuesta liberal, una objeción fuerte y lo que sigue abierto.",
};

export default function Debates() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Argumentario"
        title="Debates"
        lead="Esto no es un manual para ganar discusiones. Cada entrada empieza por el mejor argumento del otro lado, porque no se puede responder bien algo que no se entendió."
      />

      <div className="mb-8">
        <Note tone="opinion" title="Cómo leer esta sección">
          El orden es deliberado: primero qué significa la afirmación, después el argumento
          más fuerte a favor, después la respuesta liberal, después una objeción a esa
          respuesta, y al final lo que sigue genuinamente sin resolver. Si te salteás los
          dos primeros pasos, la sección no sirve para lo que fue escrita.
        </Note>
      </div>

      <Grid cols={2}>
        {DEBATES.map((d) => (
          <Card
            key={d.id}
            href={`/debates/${d.id}`}
            eyebrow="Afirmación"
            title={d.claim}
            description={d.meaning}
            meta={
              <>
                {d.topics.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
                {d.open.length > 0 && <Badge tone="opinion">{d.open.length} puntos abiertos</Badge>}
              </>
            }
          />
        ))}
      </Grid>
    </div>
  );
}
