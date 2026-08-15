import type { Metadata } from "next";
import Link from "next/link";
import { CONCEPT_MAPS } from "@/content/interactive";
import { Note, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mapa conceptual",
  description: "Cómo se encadenan libertad, propiedad, mercado y precios. Y cómo se encadenan gasto público, déficit, emisión e inflación.",
};

/**
 * Los mapas se dibujan como cadenas de nodos con sus relaciones explicitadas.
 * Se eligió una representación en columnas y no un grafo con posicionamiento
 * libre porque tiene que leerse igual de bien en un teléfono.
 */
export default function Mapa() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Visual"
        title="Mapa conceptual"
        lead="Los conceptos de este sitio no son una lista: son cadenas donde cada eslabón se apoya en el anterior. Cada nodo lleva a su artículo."
      />

      <div className="mb-9">
        <Note tone="opinion" title="Una advertencia sobre estos mapas">
          Las flechas expresan la relación que la tradición liberal sostiene entre estos
          conceptos. Cada eslabón es discutible, y varios están discutidos: el artículo de
          cada nodo incluye las objeciones. Un mapa así es una hipótesis ordenada, no una
          demostración.
        </Note>
      </div>

      {CONCEPT_MAPS.map((map) => {
        const outgoing = new Map<string, [string, string, string][]>();
        for (const e of map.edges) {
          outgoing.set(e[0], [...(outgoing.get(e[0]) ?? []), e]);
        }

        // Orden de recorrido desde la raíz, en anchura.
        const order: string[] = [];
        const queue = [map.root];
        const seen = new Set<string>();
        while (queue.length) {
          const id = queue.shift()!;
          if (seen.has(id)) continue;
          seen.add(id);
          order.push(id);
          for (const [, to] of outgoing.get(id) ?? []) queue.push(to);
        }
        for (const n of map.nodes) if (!seen.has(n.id)) order.push(n.id);

        const byId = new Map(map.nodes.map((n) => [n.id, n]));

        return (
          <section key={map.id} className="mb-14">
            <h2 className="text-[1.35rem] font-bold tracking-[-0.02em]">{map.title}</h2>
            <p className="mt-1.5 mb-6 max-w-[62ch] text-[14.5px] leading-relaxed text-fg-muted">
              {map.description}
            </p>

            <div className="space-y-2.5">
              {order.map((id) => {
                const node = byId.get(id);
                if (!node) return null;
                const edges = outgoing.get(id) ?? [];
                const isRoot = id === map.root;
                return (
                  <div
                    key={id}
                    className={`rounded-[var(--radius)] border p-4 ${
                      isRoot
                        ? "border-accent-border bg-accent-subtle"
                        : "border-border bg-bg-elevated"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      {node.article ? (
                        <Link
                          href={`/articulo/${node.article}`}
                          className="text-[15.5px] font-bold tracking-[-0.01em] text-accent hover:underline"
                        >
                          {node.label}
                        </Link>
                      ) : (
                        <span className="text-[15.5px] font-bold tracking-[-0.01em]">
                          {node.label}
                        </span>
                      )}
                      {isRoot && (
                        <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-accent-fg">
                          punto de partida
                        </span>
                      )}
                    </div>

                    {edges.length > 0 && (
                      <ul className="mt-2.5 space-y-1.5 border-l border-border pl-4">
                        {edges.map(([, to, label], i) => {
                          const target = byId.get(to);
                          return (
                            <li key={i} className="text-[13.5px] leading-relaxed">
                              <span className="text-fg-subtle">{label} → </span>
                              {target?.article ? (
                                <Link
                                  href={`/articulo/${target.article}`}
                                  className="font-medium text-accent hover:underline"
                                >
                                  {target.label}
                                </Link>
                              ) : (
                                <span className="font-medium">{target?.label}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
