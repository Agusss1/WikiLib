import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PATHS, PATHS_BY_ID } from "@/content/learning";
import { PathModules } from "@/components/PathProgress";
import { Badge, Breadcrumbs, LevelBadge, PageHeader } from "@/components/ui";

export function generateStaticParams() {
  return PATHS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const p = PATHS_BY_ID[id];
  if (!p) return { title: "Ruta no encontrada" };
  return { title: p.title, description: p.subtitle };
}

export default async function PathPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = PATHS_BY_ID[id];
  if (!p) notFound();

  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs items={[{ label: "Rutas", href: "/rutas" }, { label: p.title }]} />
      <PageHeader eyebrow="Ruta de aprendizaje" title={p.title} lead={p.subtitle}>
        <div className="flex flex-wrap gap-2">
          <LevelBadge level={p.level} />
          <Badge>{p.modules.length} módulos</Badge>
          <Badge>~{Math.round(p.minutes / 60)} horas de lectura</Badge>
        </div>
        <p className="mt-4 max-w-[62ch] text-[14px] leading-relaxed text-fg-muted">
          <span className="font-semibold text-fg">Para quién es: </span>
          {p.forWhom}
        </p>
      </PageHeader>
      <PathModules path={p} />
    </div>
  );
}
