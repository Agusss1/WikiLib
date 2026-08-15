import type { Metadata } from "next";
import { ARTICLES } from "@/content/articles";
import { CATEGORY_LIST } from "@/content/taxonomy";
import { Card, Grid, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "La Wiki",
  description: "Todas las categorías de WikiLib: conceptos, economía, Argentina, Alberdi, corrientes, debates y más.",
};

export default function WikiIndex() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="La Wiki"
        title="Todas las categorías"
        lead="Cada artículo sigue la misma estructura: primero simple, después completo, con ejemplo argentino, la lectura liberal marcada como interpretación, las objeciones más fuertes y sus fuentes."
      />
      <Grid cols={2}>
        {CATEGORY_LIST.map((c) => {
          const n = ARTICLES.filter((a) => a.category === c.id).length;
          return (
            <Card
              key={c.id}
              href={`/wiki/${c.id}`}
              glyph={c.glyph}
              eyebrow={`${n} ${n === 1 ? "artículo" : "artículos"}`}
              title={c.title}
              description={c.description}
            />
          );
        })}
      </Grid>
    </div>
  );
}
