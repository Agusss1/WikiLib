"use client";

import Link from "next/link";
import type { LearningPath } from "@/content/learning";
import { useProgress } from "@/lib/progress";
import { Badge, LevelBadge } from "@/components/ui";

/** Barra de progreso reutilizable. */
export function ProgressBar({ done, total }: { done: number; total: number }) {
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="h-1.5 flex-1 overflow-hidden rounded-full bg-bg-inset"
        role="progressbar"
        aria-valuenow={done}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="shrink-0 text-[12px] font-semibold tabular-nums text-fg-subtle">
        {done}/{total}
      </span>
    </div>
  );
}

export function PathCards({ paths }: { paths: LearningPath[] }) {
  const { paths: done, ready } = useProgress();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {paths.map((p) => {
        const completed = ready ? (done[p.id] ?? []).length : 0;
        return (
          <Link
            key={p.id}
            href={`/rutas/${p.id}`}
            className="group flex flex-col rounded-[var(--radius)] border border-border bg-bg-elevated p-5 transition-all hover:border-accent-border hover:shadow-[var(--shadow)]"
          >
            <h3 className="text-[1.05rem] font-semibold leading-snug group-hover:text-accent">
              {p.title}
            </h3>
            <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-fg-muted">
              {p.subtitle}
            </p>
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              <LevelBadge level={p.level} />
              <Badge>{p.modules.length} módulos</Badge>
              <Badge>~{Math.round(p.minutes / 60)} h</Badge>
            </div>
            <div className="mt-4">
              <ProgressBar done={completed} total={p.modules.length} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function PathModules({ path }: { path: LearningPath }) {
  const { paths, ready, completeModule } = useProgress();
  const done = ready ? (paths[path.id] ?? []) : [];

  return (
    <>
      <div className="mb-8 rounded-[var(--radius)] border border-border bg-bg-elevated p-5">
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-fg-subtle">
            Tu progreso
          </p>
          {!ready && <span className="text-[12px] text-fg-subtle">cargando…</span>}
        </div>
        <ProgressBar done={done.length} total={path.modules.length} />
        <p className="mt-3 text-[12.5px] text-fg-subtle">
          Se guarda en este navegador. No hace falta crear una cuenta.
        </p>
      </div>

      <ol className="space-y-3">
        {path.modules.map((m) => {
          const key = String(m.n);
          const isDone = done.includes(key);
          return (
            <li
              key={m.n}
              className={`rounded-[var(--radius)] border p-5 transition-colors ${
                isDone ? "border-ok/30 bg-ok-subtle" : "border-border bg-bg-elevated"
              }`}
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => completeModule(path.id, key)}
                  disabled={!ready}
                  aria-label={isDone ? `Marcar módulo ${m.n} como pendiente` : `Marcar módulo ${m.n} como completado`}
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[12px] font-bold tabular-nums transition-colors disabled:opacity-50 ${
                    isDone
                      ? "border-ok bg-ok text-bg"
                      : "border-border-strong text-fg-subtle hover:border-accent hover:text-accent"
                  }`}
                >
                  {isDone ? "✓" : m.n}
                </button>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[15.5px] font-semibold">{m.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-fg-muted">
                    <span className="font-medium text-fg">Al terminar vas a entender: </span>
                    {m.goal}
                  </p>

                  <div className="mt-3 rounded-[var(--radius-sm)] border border-border bg-bg-subtle px-3.5 py-2.5">
                    <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-fg-subtle">
                      Para pensar
                    </p>
                    <ul className="space-y-1">
                      {m.questions.map((q, i) => (
                        <li key={i} className="text-[13px] leading-relaxed text-fg-muted">
                          · {q}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <Link
                      href={`/articulo/${m.article}`}
                      className="rounded-[var(--radius-sm)] bg-accent px-3 py-1.5 text-[13px] font-semibold text-accent-fg hover:opacity-90"
                    >
                      Leer el artículo →
                    </Link>
                    {m.quizId && (
                      <Link
                        href={`/tests/${m.quizId}`}
                        className="rounded-[var(--radius-sm)] border border-border px-3 py-1.5 text-[13px] font-semibold text-fg-muted hover:border-accent-border hover:text-accent"
                      >
                        Hacer el quiz
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
}
