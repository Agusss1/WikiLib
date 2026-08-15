"use client";

import Link from "next/link";
import { ARTICLES, ARTICLES_BY_SLUG } from "@/content/articles";
import { PATHS } from "@/content/learning";
import { QUIZZES_BY_ID } from "@/content/learning";
import { CATEGORY_META } from "@/content/taxonomy";
import { computeLevel, useProgress } from "@/lib/progress";
import { ProgressBar } from "./PathProgress";
import { Badge, EmptyState, Note } from "@/components/ui";

export function Profile() {
  const p = useProgress();

  if (!p.ready) {
    return <p className="text-[14px] text-fg-muted">Cargando tu progreso…</p>;
  }

  const level = computeLevel(p);
  const readSet = new Set(p.read);

  const byCategory = Object.values(CATEGORY_META)
    .map((c) => {
      const total = ARTICLES.filter((a) => a.category === c.id).length;
      const done = ARTICLES.filter((a) => a.category === c.id && readSet.has(a.slug)).length;
      return { ...c, total, done };
    })
    .filter((c) => c.total > 0)
    .sort((a, b) => a.order - b.order);

  const quizEntries = Object.entries(p.quizzes);
  const savedArticles = p.saved.map((s) => ARTICLES_BY_SLUG[s]).filter(Boolean);

  return (
    <div className="space-y-9">
      {/* Nivel ------------------------------------------------------------ */}
      <section className="rounded-[var(--radius)] border border-accent-border bg-accent-subtle p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
              Tu nivel
            </p>
            <p className="mt-1 text-[1.8rem] font-bold leading-none tracking-[-0.025em]">
              {level.name}
            </p>
          </div>
          <p className="text-[13px] tabular-nums text-fg-muted">
            {level.points} puntos
            {level.next !== Infinity && ` · ${level.next - level.points} para el próximo nivel`}
          </p>
        </div>
        <div className="mt-4">
          <ProgressBar done={level.pct} total={100} />
        </div>
        <p className="mt-3 text-[12.5px] text-fg-subtle">
          Se calcula con los artículos que marcaste como leídos y los quizzes que hiciste.
        </p>
      </section>

      {/* Progreso por categoría ------------------------------------------- */}
      <section>
        <h2 className="mb-4 text-[1.2rem] font-bold tracking-[-0.015em]">
          Progreso por área
        </h2>
        <div className="space-y-3">
          {byCategory.map((c) => (
            <div
              key={c.id}
              className="rounded-[var(--radius)] border border-border bg-bg-elevated p-4"
            >
              <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-2">
                <Link href={`/wiki/${c.id}`} className="text-[14.5px] font-semibold hover:text-accent">
                  <span aria-hidden className="mr-1.5 text-accent">{c.glyph}</span>
                  {c.title}
                </Link>
              </div>
              <ProgressBar done={c.done} total={c.total} />
            </div>
          ))}
        </div>
      </section>

      {/* Rutas ------------------------------------------------------------ */}
      <section>
        <h2 className="mb-4 text-[1.2rem] font-bold tracking-[-0.015em]">Tus rutas</h2>
        <div className="space-y-3">
          {PATHS.map((path) => {
            const done = (p.paths[path.id] ?? []).length;
            return (
              <div
                key={path.id}
                className="rounded-[var(--radius)] border border-border bg-bg-elevated p-4"
              >
                <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-2">
                  <Link
                    href={`/rutas/${path.id}`}
                    className="text-[14.5px] font-semibold hover:text-accent"
                  >
                    {path.title}
                  </Link>
                  {done === path.modules.length && done > 0 && (
                    <Badge tone="ok">Completada</Badge>
                  )}
                </div>
                <ProgressBar done={done} total={path.modules.length} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Quizzes ---------------------------------------------------------- */}
      <section>
        <h2 className="mb-4 text-[1.2rem] font-bold tracking-[-0.015em]">Tus tests</h2>
        {quizEntries.length === 0 ? (
          <EmptyState
            title="Todavía no hiciste ningún test"
            description="Después de cada respuesta te explicamos por qué, aciertes o no. Es una forma rápida de descubrir qué te falta."
            action={
              <Link
                href="/tests/general"
                className="rounded-[var(--radius-sm)] bg-accent px-4 py-2 text-[14px] font-semibold text-accent-fg"
              >
                Empezar por el test general
              </Link>
            }
          />
        ) : (
          <ul className="divide-y divide-border overflow-hidden rounded-[var(--radius)] border border-border bg-bg-elevated">
            {quizEntries.map(([id, r]) => {
              const quiz = QUIZZES_BY_ID[id];
              return (
                <li key={id} className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
                  <Link
                    href={`/tests/${id}`}
                    className="text-[14px] font-medium hover:text-accent"
                  >
                    {quiz?.title ?? id}
                  </Link>
                  <span className="text-[13px] tabular-nums text-fg-muted">
                    Mejor: {r.best}/{r.total} · {r.attempts}{" "}
                    {r.attempts === 1 ? "intento" : "intentos"}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* Guardados -------------------------------------------------------- */}
      <section>
        <h2 className="mb-4 text-[1.2rem] font-bold tracking-[-0.015em]">
          Tu lista de lectura
        </h2>
        {savedArticles.length === 0 ? (
          <EmptyState
            title="No guardaste ningún artículo"
            description="Podés guardar cualquier artículo con el botón de la estrella para leerlo después."
          />
        ) : (
          <ul className="divide-y divide-border overflow-hidden rounded-[var(--radius)] border border-border bg-bg-elevated">
            {savedArticles.map(
              (a) =>
                a && (
                  <li key={a.slug} className="px-4 py-3">
                    <Link
                      href={`/articulo/${a.slug}`}
                      className="text-[14.5px] font-medium hover:text-accent"
                    >
                      {a.title}
                    </Link>
                    <p className="mt-0.5 text-[13px] text-fg-muted">{a.summary}</p>
                  </li>
                ),
            )}
          </ul>
        )}
      </section>

      {/* Datos ------------------------------------------------------------ */}
      <section>
        <Note tone="info" title="Dónde vive este progreso">
          Se guarda en este navegador, no en un servidor. Eso significa que funciona sin
          crear cuenta, y también que no lo vas a ver en otro dispositivo. Cuando el
          proyecto tenga cuentas de usuario, este mismo progreso va a poder sincronizarse.
        </Note>
        <button
          onClick={() => {
            if (confirm("¿Borrar todo tu progreso guardado en este navegador?")) p.reset();
          }}
          className="mt-4 rounded-[var(--radius-sm)] border border-danger/30 bg-danger-subtle px-3.5 py-2 text-[13px] font-medium text-danger transition-opacity hover:opacity-80"
        >
          Borrar mi progreso
        </button>
      </section>
    </div>
  );
}
