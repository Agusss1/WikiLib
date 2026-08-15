import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/content/articles";
import { SOURCES } from "@/content/sources";
import { GLOSSARY } from "@/content/glossary";
import { AUTHORS } from "@/content/authors";
import { BOOKS } from "@/content/books";
import { DEBATES, FAQS } from "@/content/debates";
import { SCENARIOS } from "@/content/interactive";
import { PATHS, QUIZZES } from "@/content/learning";
import { CONSTITUTION } from "@/content/constitution";
import { INDICATORS, HISTORICAL_DATA } from "@/content/data";
import { PRINCIPLES } from "@/content/editorial";
import { CATEGORY_META, LEVEL_META } from "@/content/taxonomy";
import { Badge, Note, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Panel editorial",
  description: "Estado del contenido: cobertura, deuda editorial, uso de fuentes y cumplimiento de los principios.",
};

/**
 * Panel editorial.
 *
 * Todo lo que muestra se computa del propio contenido en tiempo de build.
 * No requiere base de datos, y por eso nunca puede quedar desactualizado
 * respecto de lo que está publicado.
 */
export default function Admin() {
  const today = new Date();

  const stale = ARTICLES.map((a) => ({
    a,
    days: Math.floor(
      (today.getTime() - new Date(a.updated + "T12:00:00").getTime()) / 86_400_000,
    ),
  }))
    .sort((x, y) => y.days - x.days)
    .slice(0, 8);

  const noCritiques = ARTICLES.filter((a) => !a.critiques?.length);
  const noArgentina = ARTICLES.filter((a) => !a.argentina?.length);
  const noUncertainty = ARTICLES.filter(
    (a) => a.level !== "inicial" && !a.uncertainty && !a.openDebate?.length,
  );
  const unresolved = ARTICLES.flatMap((a) =>
    (a.critiques ?? [])
      .filter((c) => c.unresolved)
      .map((c) => ({ slug: a.slug, title: a.title, objection: c.objection })),
  );
  const needsVerification = HISTORICAL_DATA.filter((d) => d.needsVerification);

  const sourceUsage = new Map<string, number>();
  for (const a of ARTICLES)
    for (const s of a.sources) sourceUsage.set(s, (sourceUsage.get(s) ?? 0) + 1);
  const unusedSources = SOURCES.filter((s) => !sourceUsage.has(s.id));

  const byCategory = Object.values(CATEGORY_META)
    .map((c) => ({ ...c, n: ARTICLES.filter((a) => a.category === c.id).length }))
    .sort((a, b) => a.order - b.order);

  const byLevel = (["inicial", "intermedio", "avanzado"] as const).map((l) => ({
    level: l,
    n: ARTICLES.filter((a) => a.level === l).length,
  }));

  const totals = [
    { label: "Artículos", n: ARTICLES.length, href: "/wiki" },
    { label: "Términos", n: GLOSSARY.length, href: "/diccionario" },
    { label: "Fuentes", n: SOURCES.length, href: "/fuentes" },
    { label: "Autores", n: AUTHORS.length, href: "/autores" },
    { label: "Libros", n: BOOKS.length, href: "/biblioteca" },
    { label: "Debates", n: DEBATES.length, href: "/debates" },
    { label: "Preguntas", n: FAQS.length, href: "/preguntas" },
    { label: "Escenarios", n: SCENARIOS.length, href: "/que-haria-un-liberal" },
    { label: "Rutas", n: PATHS.length, href: "/rutas" },
    { label: "Quizzes", n: QUIZZES.length, href: "/tests" },
    { label: "Arts. Constitución", n: CONSTITUTION.length, href: "/constitucion" },
    { label: "Indicadores", n: INDICATORS.length, href: "/datos" },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Interno"
        title="Panel editorial"
        lead="Estado real del contenido, calculado directamente de los archivos publicados. No hay base de datos que pueda quedar desincronizada."
      />

      <div className="mb-9">
        <Note tone="info" title="Sobre el acceso">
          En el MVP este panel es público a propósito: mostrar la deuda editorial es parte
          de la transparencia del proyecto. Cuando existan roles de usuario, las acciones de
          moderación quedarán detrás de autenticación, pero estas métricas pueden seguir
          siendo visibles.
        </Note>
      </div>

      <Section title="Volumen">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {totals.map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className="rounded-[var(--radius)] border border-border bg-bg-elevated p-4 transition-colors hover:border-accent-border"
            >
              <p className="text-[1.75rem] font-bold leading-none tabular-nums tracking-[-0.02em]">
                {t.n}
              </p>
              <p className="mt-1.5 text-[12.5px] text-fg-muted">{t.label}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Cobertura" subtitle="Dónde está concentrado el contenido y dónde falta.">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-[var(--radius)] border border-border bg-bg-elevated p-5">
            <h3 className="mb-3 text-[13px] font-bold uppercase tracking-[0.11em] text-fg-subtle">
              Por categoría
            </h3>
            <ul className="space-y-2">
              {byCategory.map((c) => (
                <li key={c.id} className="flex items-center gap-3">
                  <span className="w-40 shrink-0 truncate text-[13.5px]">{c.title}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-bg-inset">
                    <div
                      className={`h-full rounded-full ${c.n === 0 ? "bg-danger" : "bg-accent"}`}
                      style={{ width: `${Math.min(100, (c.n / 8) * 100)}%` }}
                    />
                  </div>
                  <span className="w-6 shrink-0 text-right text-[12.5px] tabular-nums text-fg-subtle">
                    {c.n}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[var(--radius)] border border-border bg-bg-elevated p-5">
            <h3 className="mb-3 text-[13px] font-bold uppercase tracking-[0.11em] text-fg-subtle">
              Por nivel
            </h3>
            <ul className="space-y-2">
              {byLevel.map((l) => (
                <li key={l.level} className="flex items-center gap-3">
                  <span className="w-24 shrink-0 text-[13.5px]">{LEVEL_META[l.level].label}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-bg-inset">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${(l.n / ARTICLES.length) * 100}%` }}
                    />
                  </div>
                  <span className="w-6 shrink-0 text-right text-[12.5px] tabular-nums text-fg-subtle">
                    {l.n}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-border pt-3 text-[12.5px] leading-relaxed text-fg-subtle">
              Un desbalance hacia «avanzado» indicaría que el sitio dejó de ser accesible
              para quien empieza, que es el objetivo declarado del proyecto.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Deuda editorial"
        subtitle="Lo que falta. Se muestra a propósito: un panel que sólo muestra logros no sirve para trabajar."
      >
        <div className="space-y-4">
          {[
            {
              title: "Sin objeciones",
              items: noCritiques.map((a) => ({ slug: a.slug, label: a.title })),
              note: "Un artículo sin críticas es propaganda hasta que se demuestre lo contrario. El validador ya lo exige a partir de nivel intermedio.",
              tone: "warn" as const,
            },
            {
              title: "Sin ejemplo argentino",
              items: noArgentina.map((a) => ({ slug: a.slug, label: a.title })),
              note: "El proyecto existe para explicar estas ideas aplicadas a Argentina. Un artículo sin ese anclaje está a medio hacer.",
              tone: "warn" as const,
            },
            {
              title: "Sin declaración de incertidumbre ni debate abierto",
              items: noUncertainty.map((a) => ({ slug: a.slug, label: a.title })),
              note: "Artículos intermedios o avanzados donde no se señala qué sigue discutido.",
              tone: "warn" as const,
            },
          ].map((group) => (
            <div
              key={group.title}
              className="rounded-[var(--radius)] border border-border bg-bg-elevated p-5"
            >
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h3 className="text-[14.5px] font-bold">{group.title}</h3>
                <Badge tone={group.items.length === 0 ? "ok" : group.tone}>
                  {group.items.length}
                </Badge>
              </div>
              <p className="mb-3 text-[13px] leading-relaxed text-fg-muted">{group.note}</p>
              {group.items.length === 0 ? (
                <p className="text-[13px] text-ok">Sin pendientes.</p>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((it) => (
                    <Link
                      key={it.slug}
                      href={`/articulo/${it.slug}`}
                      className="rounded-full border border-border bg-bg-subtle px-2.5 py-1 text-[12.5px] text-fg-muted hover:border-accent-border hover:text-accent"
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Objeciones sin saldar"
        subtitle="Críticas que el equipo editorial marcó como no resueltas. Es información, no un problema a ocultar."
      >
        <ul className="divide-y divide-border overflow-hidden rounded-[var(--radius)] border border-border bg-bg-elevated">
          {unresolved.slice(0, 12).map((u, i) => (
            <li key={i} className="px-4 py-3">
              <p className="text-[13.5px] leading-relaxed">«{u.objection}»</p>
              <Link
                href={`/articulo/${u.slug}#criticas`}
                className="mt-1 inline-block text-[12.5px] text-accent hover:underline"
              >
                {u.title} →
              </Link>
            </li>
          ))}
        </ul>
        {unresolved.length > 12 && (
          <p className="mt-2 text-[12.5px] text-fg-subtle">
            y {unresolved.length - 12} más.
          </p>
        )}
      </Section>

      <Section title="Actualización" subtitle="Los artículos que hace más tiempo no se revisan.">
        <ul className="divide-y divide-border overflow-hidden rounded-[var(--radius)] border border-border bg-bg-elevated">
          {stale.map(({ a, days }) => (
            <li key={a.slug} className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
              <Link href={`/articulo/${a.slug}`} className="text-[14px] font-medium hover:text-accent">
                {a.title}
              </Link>
              <span className="text-[12.5px] tabular-nums text-fg-subtle">
                {a.updated} · hace {days} {days === 1 ? "día" : "días"}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Fuentes y datos">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-[var(--radius)] border border-border bg-bg-elevated p-5">
            <div className="mb-2 flex items-center gap-2">
              <h3 className="text-[14.5px] font-bold">Fuentes sin usar</h3>
              <Badge tone={unusedSources.length === 0 ? "ok" : "neutral"}>
                {unusedSources.length}
              </Badge>
            </div>
            <p className="mb-3 text-[13px] leading-relaxed text-fg-muted">
              Registradas pero todavía no citadas por ningún artículo. Suelen indicar temas
              que faltan cubrir.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {unusedSources.slice(0, 10).map((s) => (
                <Link
                  key={s.id}
                  href={`/fuentes#${s.id}`}
                  className="rounded-full border border-border bg-bg-subtle px-2.5 py-1 text-[12px] text-fg-muted hover:text-accent"
                >
                  {s.id}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius)] border border-border bg-bg-elevated p-5">
            <div className="mb-2 flex items-center gap-2">
              <h3 className="text-[14.5px] font-bold">Datos por verificar</h3>
              <Badge tone={needsVerification.length === 0 ? "ok" : "warn"}>
                {needsVerification.length}
              </Badge>
            </div>
            <p className="mb-3 text-[13px] leading-relaxed text-fg-muted">
              Cifras marcadas como pendientes de contrastar contra la fuente primaria. Se
              publican con la advertencia visible en lugar de presentarse como firmes.
            </p>
            <ul className="space-y-1.5">
              {needsVerification.map((d, i) => (
                <li key={i} className="text-[12.5px] leading-relaxed text-fg-muted">
                  · {d.label} — {d.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Principios editoriales"
        subtitle="Los principios que rigen el contenido y cuáles se validan de forma automática en cada build."
      >
        <ul className="divide-y divide-border overflow-hidden rounded-[var(--radius)] border border-border bg-bg-elevated">
          {PRINCIPLES.map((p) => (
            <li key={p.id} className="flex flex-wrap items-start justify-between gap-3 px-4 py-3">
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold">{p.title}</p>
                <p className="mt-0.5 text-[12.5px] leading-relaxed text-fg-muted">{p.rule}</p>
              </div>
              <Badge tone={p.automated ? "ok" : "neutral"}>
                {p.automated ? "automático" : "revisión"}
              </Badge>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[13px] leading-relaxed text-fg-muted">
          El validador corre con <code className="rounded bg-bg-inset px-1.5 py-0.5 font-mono text-[12px]">npm run content:check</code>{" "}
          y bloquea el build ante cualquier error.{" "}
          <Link href="/estandares" className="text-accent hover:underline">
            Ver la versión pública de estos principios
          </Link>
          .
        </p>
      </Section>
    </div>
  );
}
