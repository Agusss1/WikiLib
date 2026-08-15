"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Progreso del usuario.
 *
 * MVP: se guarda en localStorage. Es una decisión deliberada — permite que
 * todo el sistema de perfil, lecturas, marcadores y rutas funcione desde el
 * día uno sin backend, base de datos ni cuentas.
 *
 * La forma de los datos ya está pensada para migrar: cuando exista autenticación,
 * este objeto pasa a ser una fila por usuario y estos hooks cambian su
 * implementación sin que ningún componente tenga que tocarse.
 */
export type ProgressState = {
  read: string[];
  saved: string[];
  /** id de ruta -> slugs de módulos completados */
  paths: Record<string, string[]>;
  /** id de quiz -> mejor puntaje obtenido */
  quizzes: Record<string, { best: number; total: number; attempts: number }>;
  /** Temas que el usuario sigue. */
  topics: string[];
  name?: string;
};

const EMPTY: ProgressState = {
  read: [],
  saved: [],
  paths: {},
  quizzes: {},
  topics: [],
};

const KEY = "wikilib:progress:v1";
const EVENT = "wikilib:progress-change";

function load(): ProgressState {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    return { ...EMPTY, ...(JSON.parse(raw) as Partial<ProgressState>) };
  } catch {
    return EMPTY;
  }
}

function save(s: ProgressState) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(s));
    window.dispatchEvent(new CustomEvent(EVENT));
  } catch {
    /* almacenamiento no disponible: el sitio sigue funcionando sin progreso */
  }
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(EMPTY);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(load());
    setReady(true);
    const sync = () => setState(load());
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const update = useCallback((fn: (s: ProgressState) => ProgressState) => {
    const next = fn(load());
    save(next);
    setState(next);
  }, []);

  const toggleRead = useCallback(
    (slug: string) =>
      update((s) => ({
        ...s,
        read: s.read.includes(slug)
          ? s.read.filter((x) => x !== slug)
          : [...s.read, slug],
      })),
    [update],
  );

  const toggleSaved = useCallback(
    (slug: string) =>
      update((s) => ({
        ...s,
        saved: s.saved.includes(slug)
          ? s.saved.filter((x) => x !== slug)
          : [...s.saved, slug],
      })),
    [update],
  );

  const completeModule = useCallback(
    (pathId: string, moduleKey: string) =>
      update((s) => {
        const cur = s.paths[pathId] ?? [];
        return {
          ...s,
          paths: {
            ...s.paths,
            [pathId]: cur.includes(moduleKey)
              ? cur.filter((x) => x !== moduleKey)
              : [...cur, moduleKey],
          },
        };
      }),
    [update],
  );

  const recordQuiz = useCallback(
    (quizId: string, score: number, total: number) =>
      update((s) => {
        const prev = s.quizzes[quizId];
        return {
          ...s,
          quizzes: {
            ...s.quizzes,
            [quizId]: {
              best: Math.max(prev?.best ?? 0, score),
              total,
              attempts: (prev?.attempts ?? 0) + 1,
            },
          },
        };
      }),
    [update],
  );

  const toggleTopic = useCallback(
    (topic: string) =>
      update((s) => ({
        ...s,
        topics: s.topics.includes(topic)
          ? s.topics.filter((x) => x !== topic)
          : [...s.topics, topic],
      })),
    [update],
  );

  const setName = useCallback(
    (name: string) => update((s) => ({ ...s, name })),
    [update],
  );

  const reset = useCallback(() => {
    save(EMPTY);
    setState(EMPTY);
  }, []);

  return {
    ...state,
    ready,
    toggleRead,
    toggleSaved,
    completeModule,
    recordQuiz,
    toggleTopic,
    setName,
    reset,
  };
}

/** Nivel del usuario según lo que leyó y los quizzes que hizo. */
export function computeLevel(s: ProgressState) {
  const quizPoints = Object.values(s.quizzes).reduce((n, q) => n + q.best, 0);
  const points = s.read.length * 3 + quizPoints * 2;
  const levels = [
    { min: 0, name: "Curioso", next: 30 },
    { min: 30, name: "Lector", next: 80 },
    { min: 80, name: "Estudioso", next: 160 },
    { min: 160, name: "Analista", next: 280 },
    { min: 280, name: "Referente", next: Infinity },
  ];
  const idx = levels.findLastIndex((l) => points >= l.min);
  const cur = levels[Math.max(0, idx)];
  const prev = levels[Math.max(0, idx)].min;
  const pct =
    cur.next === Infinity
      ? 100
      : Math.round(((points - prev) / (cur.next - prev)) * 100);
  return { points, name: cur.name, pct: Math.min(100, Math.max(0, pct)), next: cur.next };
}
