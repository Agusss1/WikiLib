import type { Metadata } from "next";
import Link from "next/link";
import { QUIZZES } from "@/content/learning";
import { Badge, LevelBadge, Note, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Tests",
  description: "Quizzes sobre liberalismo, economía, historia argentina, Alberdi, Constitución e inflación, con explicación tras cada respuesta.",
};

export default function Tests() {
  const general = QUIZZES.find((q) => q.id === "general");
  const rest = QUIZZES.filter((q) => q.id !== "general");

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Aprendizaje"
        title="Tests"
        lead="Después de cada respuesta aparece la explicación, aciertes o no. El objetivo es que aprendas algo, no que saques un puntaje."
      />

      {general && (
        <Link
          href={`/tests/${general.id}`}
          className="group mb-8 block rounded-[var(--radius)] border border-accent-border bg-accent-subtle p-6 transition-shadow hover:shadow-[var(--shadow)]"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
            Empezá por acá
          </p>
          <h2 className="mt-2 text-[1.3rem] font-bold tracking-[-0.02em] group-hover:text-accent">
            {general.title}
          </h2>
          <p className="mt-1.5 max-w-[56ch] text-[14.5px] leading-relaxed text-fg-muted">
            {general.description} Al final te ubica en nivel inicial, intermedio o avanzado.
          </p>
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            <Badge tone="accent">{general.questions.length} preguntas</Badge>
            <LevelBadge level={general.level} />
          </div>
        </Link>
      )}

      <h2 className="mb-4 text-[1.2rem] font-bold tracking-[-0.015em]">Tests por tema</h2>
      <div className="mb-9 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((q) => (
          <Link
            key={q.id}
            href={`/tests/${q.id}`}
            className="group flex flex-col rounded-[var(--radius)] border border-border bg-bg-elevated p-5 transition-all hover:border-accent-border hover:shadow-[var(--shadow)]"
          >
            <h3 className="text-[1rem] font-semibold group-hover:text-accent">{q.title}</h3>
            <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-fg-muted">
              {q.description}
            </p>
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              <Badge>{q.questions.length} preguntas</Badge>
              <LevelBadge level={q.level} />
            </div>
          </Link>
        ))}
      </div>

      <Note tone="info" title="Sobre el puntaje">
        No hay ranking ni comparación con otros. El resultado se guarda en tu navegador para
        que puedas ver tu progreso en <Link href="/perfil" className="text-accent hover:underline">tu perfil</Link>.
      </Note>
    </div>
  );
}
