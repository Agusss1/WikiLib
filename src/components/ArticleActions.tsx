"use client";

import { useProgress } from "@/lib/progress";

/** Marcar como leído y guardar. Usa progreso local; no requiere cuenta. */
export function ArticleActions({ slug }: { slug: string }) {
  const { read, saved, ready, toggleRead, toggleSaved } = useProgress();
  const isRead = read.includes(slug);
  const isSaved = saved.includes(slug);

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => toggleRead(slug)}
        disabled={!ready}
        className={`flex items-center gap-1.5 rounded-[var(--radius-sm)] border px-3 py-1.5 text-[13px] font-medium transition-colors disabled:opacity-50 ${
          isRead
            ? "border-ok/30 bg-ok-subtle text-ok"
            : "border-border text-fg-muted hover:border-accent-border hover:text-accent"
        }`}
      >
        <span aria-hidden>{isRead ? "✓" : "○"}</span>
        {isRead ? "Leído" : "Marcar como leído"}
      </button>
      <button
        onClick={() => toggleSaved(slug)}
        disabled={!ready}
        className={`flex items-center gap-1.5 rounded-[var(--radius-sm)] border px-3 py-1.5 text-[13px] font-medium transition-colors disabled:opacity-50 ${
          isSaved
            ? "border-accent-border bg-accent-subtle text-accent"
            : "border-border text-fg-muted hover:border-accent-border hover:text-accent"
        }`}
      >
        <span aria-hidden>{isSaved ? "★" : "☆"}</span>
        {isSaved ? "Guardado" : "Guardar"}
      </button>
    </div>
  );
}
