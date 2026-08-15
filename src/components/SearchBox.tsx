"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { search, SUGGESTED_QUERIES } from "@/lib/search";
import { KIND_LABEL } from "@/lib/searchIndex";

/**
 * Buscador global. Se abre con la tecla "/" o con Cmd/Ctrl+K desde cualquier
 * página, porque es la función más usada de un sitio de referencia.
 */
export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => (q.trim() ? search(q, 12) : []), [q]);

  useEffect(() => {
    if (open) {
      setQ("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => setActive(0), [q]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      }
      if (e.key === "Enter") {
        const hit = results[active];
        if (hit) {
          e.preventDefault();
          onClose();
          router.push(hit.href);
        } else if (q.trim()) {
          e.preventDefault();
          onClose();
          router.push(`/buscar?q=${encodeURIComponent(q)}`);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, results, active, onClose, router, q]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 pt-[10vh] backdrop-blur-[2px]"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-[var(--radius)] border border-border bg-bg-elevated shadow-[var(--shadow)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Buscar en la Wiki"
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <span aria-hidden className="text-fg-subtle">⌕</span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="¿Qué querés aprender?"
            className="w-full bg-transparent text-[15px] outline-none placeholder:text-fg-subtle"
            aria-label="Buscar"
          />
          <kbd className="hidden rounded border border-border bg-bg-inset px-1.5 py-0.5 text-[10px] text-fg-subtle sm:block">
            esc
          </kbd>
        </div>

        <div className="thin-scroll max-h-[55vh] overflow-y-auto">
          {q.trim() === "" ? (
            <div className="px-4 py-4">
              <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-fg-subtle">
                Probá con
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_QUERIES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQ(s)}
                    className="rounded-full border border-border bg-bg-subtle px-2.5 py-1 text-[12.5px] text-fg-muted transition-colors hover:border-accent-border hover:text-accent"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <p className="px-4 py-8 text-center text-[14px] text-fg-muted">
              No encontramos nada para «{q}». Probá con otras palabras, o{" "}
              <Link href="/contribuir" className="text-accent hover:underline" onClick={onClose}>
                proponé el artículo
              </Link>
              .
            </p>
          ) : (
            <ul className="py-1.5">
              {results.map((r, i) => (
                <li key={r.id}>
                  <Link
                    href={r.href}
                    onClick={onClose}
                    onMouseEnter={() => setActive(i)}
                    className={`block px-4 py-2.5 transition-colors ${
                      i === active ? "bg-accent-subtle" : ""
                    }`}
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.1em] text-fg-subtle">
                        {KIND_LABEL[r.kind]}
                      </span>
                      <span className="truncate text-[14.5px] font-medium">{r.title}</span>
                    </div>
                    <p className="mt-0.5 line-clamp-1 text-[13px] text-fg-muted">
                      {r.subtitle}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {q.trim() !== "" && results.length > 0 && (
          <div className="border-t border-border px-4 py-2.5">
            <Link
              href={`/buscar?q=${encodeURIComponent(q)}`}
              onClick={onClose}
              className="text-[13px] text-accent hover:underline"
            >
              Ver todos los resultados para «{q}» →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

/** Barra de búsqueda de la página principal. */
export function HeroSearch() {
  const [q, setQ] = useState("");
  const router = useRouter();
  const results = useMemo(() => (q.trim() ? search(q, 6) : []), [q]);

  return (
    <div className="relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (q.trim()) router.push(`/buscar?q=${encodeURIComponent(q)}`);
        }}
        className="flex items-center gap-3 rounded-[var(--radius)] border border-border-strong bg-bg-elevated px-4 py-3.5 shadow-[var(--shadow-sm)] transition-shadow focus-within:border-accent focus-within:shadow-[var(--shadow)]"
      >
        <span aria-hidden className="text-lg text-fg-subtle">⌕</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="¿Qué querés aprender?"
          aria-label="Buscar en la Wiki"
          className="w-full bg-transparent text-[16px] outline-none placeholder:text-fg-subtle"
        />
        <button
          type="submit"
          className="hidden shrink-0 rounded-[var(--radius-sm)] bg-accent px-3.5 py-1.5 text-[13px] font-semibold text-accent-fg transition-opacity hover:opacity-90 sm:block"
        >
          Buscar
        </button>
      </form>

      {results.length > 0 && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-40 overflow-hidden rounded-[var(--radius)] border border-border bg-bg-elevated shadow-[var(--shadow)]">
          <ul className="py-1.5">
            {results.map((r) => (
              <li key={r.id}>
                <Link href={r.href} className="block px-4 py-2.5 hover:bg-accent-subtle">
                  <div className="flex items-baseline gap-2">
                    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.1em] text-fg-subtle">
                      {KIND_LABEL[r.kind]}
                    </span>
                    <span className="truncate text-[14.5px] font-medium">{r.title}</span>
                  </div>
                  <p className="mt-0.5 line-clamp-1 text-[13px] text-fg-muted">{r.subtitle}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
