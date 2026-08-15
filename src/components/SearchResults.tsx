"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { search, SUGGESTED_QUERIES } from "@/lib/search";
import { KIND_LABEL, type DocKind } from "@/lib/searchIndex";
import { Badge, EmptyState } from "@/components/ui";

const FILTERS: { id: DocKind | "todo"; label: string }[] = [
  { id: "todo", label: "Todo" },
  { id: "articulo", label: "Artículos" },
  { id: "termino", label: "Diccionario" },
  { id: "autor", label: "Autores" },
  { id: "libro", label: "Libros" },
  { id: "debate", label: "Debates" },
  { id: "pregunta", label: "Preguntas" },
  { id: "constitucion", label: "Constitución" },
];

export function SearchResults() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") ?? "";
  const [q, setQ] = useState(initial);
  const [filter, setFilter] = useState<DocKind | "todo">("todo");

  useEffect(() => setQ(initial), [initial]);

  const all = useMemo(() => (q.trim() ? search(q, 60) : []), [q]);
  const results = filter === "todo" ? all : all.filter((r) => r.kind === filter);

  const counts = useMemo(() => {
    const c: Partial<Record<DocKind, number>> = {};
    for (const r of all) c[r.kind] = (c[r.kind] ?? 0) + 1;
    return c;
  }, [all]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.replace(`/buscar?q=${encodeURIComponent(q)}`);
        }}
        className="mb-6 flex items-center gap-3 rounded-[var(--radius)] border border-border-strong bg-bg-elevated px-4 py-3 focus-within:border-accent"
      >
        <span aria-hidden className="text-fg-subtle">⌕</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="¿Qué querés aprender?"
          aria-label="Buscar"
          autoFocus
          className="w-full bg-transparent text-[15px] outline-none placeholder:text-fg-subtle"
        />
      </form>

      {q.trim() === "" ? (
        <div>
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-fg-subtle">
            Probá con
          </p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_QUERIES.map((s) => (
              <button
                key={s}
                onClick={() => setQ(s)}
                className="rounded-full border border-border bg-bg-subtle px-3 py-1.5 text-[13.5px] text-fg-muted transition-colors hover:border-accent-border hover:text-accent"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : all.length === 0 ? (
        <EmptyState
          title={`No encontramos nada para «${q}»`}
          description="Probá con otras palabras o con un término más general. Si creés que la Wiki debería cubrir este tema, podés proponerlo: estamos construyendo priorizando calidad antes que cantidad."
          action={
            <Link
              href="/contribuir"
              className="rounded-[var(--radius-sm)] bg-accent px-4 py-2 text-[14px] font-semibold text-accent-fg"
            >
              Proponer el artículo
            </Link>
          }
        />
      ) : (
        <>
          <div className="mb-5 flex flex-wrap gap-1.5">
            {FILTERS.filter((f) => f.id === "todo" || counts[f.id as DocKind]).map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full border px-3 py-1 text-[12.5px] font-medium transition-colors ${
                  filter === f.id
                    ? "border-accent-border bg-accent-subtle text-accent"
                    : "border-border bg-bg-subtle text-fg-muted hover:text-fg"
                }`}
              >
                {f.label}
                <span className="ml-1.5 tabular-nums opacity-60">
                  {f.id === "todo" ? all.length : counts[f.id as DocKind]}
                </span>
              </button>
            ))}
          </div>

          <p className="mb-4 text-[13px] text-fg-subtle">
            {results.length} {results.length === 1 ? "resultado" : "resultados"}
          </p>

          <ul className="divide-y divide-border overflow-hidden rounded-[var(--radius)] border border-border bg-bg-elevated">
            {results.map((r) => (
              <li key={r.id}>
                <Link href={r.href} className="group block px-5 py-4 hover:bg-bg-subtle">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <Badge tone="accent">{KIND_LABEL[r.kind]}</Badge>
                    {r.category && <Badge>{r.category}</Badge>}
                  </div>
                  <p className="text-[15px] font-semibold group-hover:text-accent">
                    {r.title}
                  </p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-fg-muted">
                    {r.subtitle}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
