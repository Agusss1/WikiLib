"use client";

import Link from "next/link";
import { useState } from "react";
import type { Quiz as QuizType } from "@/content/learning";
import { useProgress } from "@/lib/progress";
import { ARTICLES_BY_SLUG } from "@/content/articles";

/**
 * Quiz con explicación tras cada respuesta.
 *
 * Decisión de diseño: la explicación se muestra SIEMPRE, se acierte o no,
 * y antes de poder avanzar. El objetivo del quiz es enseñar, no puntuar.
 */
export function Quiz({ quiz }: { quiz: QuizType }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const { recordQuiz, quizzes } = useProgress();

  const q = quiz.questions[current];
  const isLast = current === quiz.questions.length - 1;
  const score = answers.filter((a, i) => a === quiz.questions[i].correct).length;
  const previous = quizzes[quiz.id];

  function choose(i: number) {
    if (selected !== null) return;
    setSelected(i);
    setAnswers((prev) => [...prev, i]);
  }

  function next() {
    if (isLast) {
      const finalScore = [...answers].filter(
        (a, i) => a === quiz.questions[i].correct,
      ).length;
      recordQuiz(quiz.id, finalScore, quiz.questions.length);
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setDone(false);
  }

  if (done) {
    const pct = Math.round((score / quiz.questions.length) * 100);
    const verdict =
      pct >= 80
        ? { label: "Nivel avanzado", tone: "ok" as const, text: "Dominás el tema. Probá una ruta de nivel avanzado o el quiz general." }
        : pct >= 50
          ? { label: "Nivel intermedio", tone: "info" as const, text: "Tenés la base. Repasá los artículos de las que erraste: ahí está lo que falta." }
          : { label: "Nivel inicial", tone: "warn" as const, text: "Recién empezás, y está perfecto. Hacé la ruta correspondiente y volvé después." };

    return (
      <div>
        <div className="mb-6 rounded-[var(--radius)] border border-border bg-bg-elevated p-6 text-center">
          <p className="text-[13px] uppercase tracking-[0.12em] text-fg-subtle">Resultado</p>
          <p className="mt-2 text-[3rem] font-bold leading-none tabular-nums tracking-[-0.03em]">
            {score}
            <span className="text-[1.5rem] text-fg-subtle">/{quiz.questions.length}</span>
          </p>
          <p
            className={`mt-3 inline-block rounded-full px-3 py-1 text-[13px] font-semibold ${
              verdict.tone === "ok"
                ? "bg-ok-subtle text-ok"
                : verdict.tone === "info"
                  ? "bg-info-subtle text-info"
                  : "bg-warn-subtle text-warn"
            }`}
          >
            {verdict.label}
          </p>
          <p className="mx-auto mt-3 max-w-[44ch] text-[14px] leading-relaxed text-fg-muted">
            {verdict.text}
          </p>
          {previous && previous.attempts > 1 && (
            <p className="mt-2 text-[12.5px] text-fg-subtle">
              Tu mejor resultado: {previous.best}/{previous.total} en {previous.attempts} intentos.
            </p>
          )}
        </div>

        <h2 className="mb-4 text-[1.15rem] font-bold tracking-[-0.015em]">Repaso</h2>
        <div className="space-y-3">
          {quiz.questions.map((question, i) => {
            const ok = answers[i] === question.correct;
            return (
              <div
                key={i}
                className={`rounded-[var(--radius)] border p-4 ${
                  ok ? "border-ok/25 bg-ok-subtle" : "border-danger/25 bg-danger-subtle"
                }`}
              >
                <p className="text-[14.5px] font-semibold">
                  <span aria-hidden className="mr-1.5">{ok ? "✓" : "✗"}</span>
                  {question.q}
                </p>
                {!ok && (
                  <p className="mt-1.5 text-[13.5px] text-fg-muted">
                    Respondiste: <span className="line-through">{question.options[answers[i]]}</span>
                    <br />
                    Correcta: <span className="font-medium text-fg">{question.options[question.correct]}</span>
                  </p>
                )}
                <p className="mt-2 text-[13.5px] leading-relaxed text-fg-muted">
                  {question.explain}
                </p>
                {question.article && ARTICLES_BY_SLUG[question.article] && (
                  <Link
                    href={`/articulo/${question.article}`}
                    className="mt-2 inline-block text-[12.5px] font-medium text-accent hover:underline"
                  >
                    Leer {ARTICLES_BY_SLUG[question.article].title} →
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={restart}
            className="rounded-[var(--radius-sm)] bg-accent px-4 py-2 text-[14px] font-semibold text-accent-fg hover:opacity-90"
          >
            Volver a intentar
          </button>
          <Link
            href="/tests"
            className="rounded-[var(--radius-sm)] border border-border px-4 py-2 text-[14px] font-semibold text-fg-muted hover:border-accent-border hover:text-accent"
          >
            Otros tests
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-bg-inset">
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-300"
            style={{ width: `${((current + (selected !== null ? 1 : 0)) / quiz.questions.length) * 100}%` }}
          />
        </div>
        <span className="shrink-0 text-[12.5px] font-semibold tabular-nums text-fg-subtle">
          {current + 1}/{quiz.questions.length}
        </span>
      </div>

      <h2 className="mb-5 text-[1.25rem] font-semibold leading-snug tracking-[-0.015em]">
        {q.q}
      </h2>

      <div className="space-y-2.5">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.correct;
          const isChosen = i === selected;
          let cls = "border-border bg-bg-elevated hover:border-accent-border";
          if (selected !== null) {
            if (isCorrect) cls = "border-ok/45 bg-ok-subtle";
            else if (isChosen) cls = "border-danger/45 bg-danger-subtle";
            else cls = "border-border bg-bg-elevated opacity-55";
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={selected !== null}
              className={`flex w-full items-start gap-3 rounded-[var(--radius)] border p-4 text-left text-[14.5px] leading-relaxed transition-colors ${cls}`}
            >
              <span
                aria-hidden
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[11px] font-bold"
              >
                {selected !== null && isCorrect ? "✓" : selected !== null && isChosen ? "✗" : String.fromCharCode(65 + i)}
              </span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="mt-5 rounded-[var(--radius)] border border-accent-border bg-accent-subtle p-4">
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.11em] text-accent">
            Por qué
          </p>
          <p className="text-[14px] leading-relaxed">{q.explain}</p>
          {q.article && ARTICLES_BY_SLUG[q.article] && (
            <Link
              href={`/articulo/${q.article}`}
              className="mt-2 inline-block text-[13px] font-medium text-accent hover:underline"
            >
              Leer el artículo completo →
            </Link>
          )}
          <button
            onClick={next}
            className="mt-4 block w-full rounded-[var(--radius-sm)] bg-accent px-4 py-2.5 text-[14px] font-semibold text-accent-fg hover:opacity-90"
          >
            {isLast ? "Ver resultado" : "Siguiente pregunta"}
          </button>
        </div>
      )}
    </div>
  );
}
