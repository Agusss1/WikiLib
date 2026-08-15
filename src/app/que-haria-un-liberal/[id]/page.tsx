import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SCENARIOS, SCENARIOS_BY_ID } from "@/content/interactive";
import { ScenarioPlayer } from "@/components/ScenarioPlayer";
import { Breadcrumbs, PageHeader } from "@/components/ui";

export function generateStaticParams() {
  return SCENARIOS.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const s = SCENARIOS_BY_ID[id];
  if (!s) return { title: "Escenario no encontrado" };
  return { title: s.title, description: s.situation };
}

export default async function ScenarioPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const s = SCENARIOS_BY_ID[id];
  if (!s) notFound();

  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs
        items={[
          { label: "¿Qué haría un liberal?", href: "/que-haria-un-liberal" },
          { label: s.title },
        ]}
      />
      <PageHeader eyebrow="Escenario" title={s.title} />
      <ScenarioPlayer scenario={s} />
    </div>
  );
}
