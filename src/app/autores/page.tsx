import type { Metadata } from "next";
import Link from "next/link";
import { AUTHORS, AUTHORS_BY_ID, INTEREST_GUIDE } from "@/content/authors";
import { Badge, Card, Grid, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Autores",
  description: "Biblioteca de autores liberales: ideas, obras, citas verificadas, críticas y por dónde empezar a leerlos.",
};

export default function Autores() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Biblioteca"
        title="Autores"
        lead="Cada ficha incluye sus ideas centrales, sus obras, sus críticas —también las que le hacen desde adentro del liberalismo— y por dónde conviene empezar."
      />

      <Section
        title="¿Qué autor leer según lo que te interesa?"
        subtitle="Si no sabés por dónde arrancar, elegí lo que querés entender."
      >
        <div className="space-y-2.5">
          {INTEREST_GUIDE.map((g) => (
            <div
              key={g.interest}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-[var(--radius)] border border-border bg-bg-elevated px-4 py-3"
            >
              <span className="text-[14px] font-medium">{g.label}</span>
              <span aria-hidden className="text-fg-subtle">→</span>
              <div className="flex flex-wrap gap-1.5">
                {g.authors.map((id) => {
                  const a = AUTHORS_BY_ID[id];
                  return (
                    a && (
                      <Link
                        key={id}
                        href={`/autores/${id}`}
                        className="rounded-full border border-accent-border bg-accent-subtle px-2.5 py-0.5 text-[12.5px] font-medium text-accent hover:opacity-80"
                      >
                        {a.name}
                      </Link>
                    )
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Todos los autores">
        <Grid cols={2}>
          {AUTHORS.map((a) => (
            <Card
              key={a.id}
              href={`/autores/${a.id}`}
              eyebrow={`${a.years} · ${a.country}`}
              title={a.name}
              description={a.hook}
              meta={<Badge tone="accent">{a.current}</Badge>}
            />
          ))}
        </Grid>
      </Section>
    </div>
  );
}
