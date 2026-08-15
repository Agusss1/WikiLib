import Link from "next/link";
import { ARTICLES } from "@/content/articles";
import { CATEGORY_META, LEVEL_META } from "@/content/taxonomy";
import type { Category } from "@/content/schema";
import { Badge, Breadcrumbs, EmptyState, LevelBadge, PageHeader } from "@/components/ui";

/** Vista de categoría, reutilizada por /wiki/[categoria] y por los atajos del menú. */
export function CategoryView({ category }: { category: Category }) {
  const meta = CATEGORY_META[category];
  const articles = ARTICLES.filter((a) => a.category === category).sort(
    (a, b) => LEVEL_META[a.level].order - LEVEL_META[b.level].order,
  );

  const byLevel = (["inicial", "intermedio", "avanzado"] as const)
    .map((l) => ({ level: l, items: articles.filter((a) => a.level === l) }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="mx-auto max-w-4xl">
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: meta.title }]} />
      <PageHeader
        eyebrow={`${meta.glyph} Categoría`}
        title={meta.title}
        lead={meta.description}
      >
        <Badge>
          {articles.length} {articles.length === 1 ? "artículo" : "artículos"}
        </Badge>
      </PageHeader>

      {articles.length === 0 ? (
        <EmptyState
          title="Todavía no hay artículos publicados en esta categoría"
          description="Estamos construyendo la Wiki priorizando calidad antes que cantidad. Si querés proponer un artículo para esta sección, es un buen momento."
          action={
            <Link
              href="/contribuir"
              className="rounded-[var(--radius-sm)] bg-accent px-4 py-2 text-[14px] font-semibold text-accent-fg"
            >
              Proponer un artículo
            </Link>
          }
        />
      ) : (
        byLevel.map((g) => (
          <section key={g.level} className="mb-10">
            <div className="mb-4 flex items-baseline gap-3">
              <h2 className="text-[1.1rem] font-bold tracking-[-0.015em]">
                {LEVEL_META[g.level].label}
              </h2>
              <span className="text-[13px] text-fg-subtle">
                {LEVEL_META[g.level].description}
              </span>
            </div>
            <div className="divide-y divide-border overflow-hidden rounded-[var(--radius)] border border-border bg-bg-elevated">
              {g.items.map((a) => (
                <Link
                  key={a.slug}
                  href={`/articulo/${a.slug}`}
                  className="group block px-5 py-4 transition-colors hover:bg-bg-subtle"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-[15.5px] font-semibold group-hover:text-accent">
                      {a.question ?? a.title}
                    </h3>
                    <div className="flex shrink-0 flex-wrap gap-1.5">
                      {a.topics.slice(0, 2).map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-muted">
                    {a.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}

/** Listado plano reutilizable. */
export function ArticleList({
  slugs,
  articles,
}: {
  slugs?: string[];
  articles?: typeof ARTICLES;
}) {
  const list =
    articles ?? (slugs ?? []).map((s) => ARTICLES.find((a) => a.slug === s)).filter(Boolean);
  return (
    <div className="divide-y divide-border overflow-hidden rounded-[var(--radius)] border border-border bg-bg-elevated">
      {list.map(
        (a) =>
          a && (
            <Link
              key={a.slug}
              href={`/articulo/${a.slug}`}
              className="group block px-5 py-4 transition-colors hover:bg-bg-subtle"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[15px] font-semibold group-hover:text-accent">
                  {a.question ?? a.title}
                </h3>
                <LevelBadge level={a.level} />
              </div>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-muted">{a.summary}</p>
            </Link>
          ),
      )}
    </div>
  );
}
