import { api } from "./api";

export type Hilo = {
  id: number;
  titulo: string;
  cuerpo: string;
  tema: string;
  creado_en: string;
  autor: string;
  autor_id: number;
  respuestas: number;
};

export type Respuesta = {
  id: number;
  cuerpo: string;
  creado_en: string;
  autor: string;
  autor_id: number;
};

export const TEMAS = [
  { id: "general", label: "General" },
  { id: "economia", label: "Economía" },
  { id: "argentina", label: "Argentina" },
  { id: "filosofia", label: "Filosofía política" },
  { id: "lecturas", label: "Lecturas" },
  { id: "wiki", label: "Sobre la Wiki" },
] as const;

export const TEMA_LABEL: Record<string, string> = Object.fromEntries(
  TEMAS.map((t) => [t.id, t.label]),
);

export async function listarHilos(tema = "todos"): Promise<Hilo[]> {
  const r = await api.get<{ hilos: Hilo[] }>(
    `hilos.php?tema=${encodeURIComponent(tema)}`,
  );
  return r.hilos;
}

export async function obtenerHilo(id: string): Promise<Hilo> {
  const r = await api.get<{ hilo: Hilo }>(`hilos.php?id=${encodeURIComponent(id)}`);
  return r.hilo;
}

export async function listarRespuestas(hiloId: string): Promise<Respuesta[]> {
  const r = await api.get<{ respuestas: Respuesta[] }>(
    `respuestas.php?hilo=${encodeURIComponent(hiloId)}`,
  );
  return r.respuestas;
}

export async function crearHilo(input: {
  titulo: string;
  cuerpo: string;
  tema: string;
}): Promise<number> {
  const r = await api.post<{ id: number }>("hilos.php", input);
  return r.id;
}

export async function responder(input: {
  hilo: string;
  cuerpo: string;
}): Promise<void> {
  await api.post("respuestas.php", { hilo: Number(input.hilo), cuerpo: input.cuerpo });
}

/** Fecha relativa, en el registro que usa la gente acá. */
export function fecha(iso: string): string {
  // MySQL devuelve "2026-08-15 23:41:02"; sin la T, Safari no lo interpreta.
  const d = new Date(iso.replace(" ", "T") + (iso.includes("Z") ? "" : "Z"));
  const diff = (Date.now() - d.getTime()) / 1000;
  if (Number.isNaN(diff)) return "";
  if (diff < 60) return "recién";
  if (diff < 3600) return `hace ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `hace ${Math.floor(diff / 3600)} h`;
  if (diff < 604800) return `hace ${Math.floor(diff / 86400)} d`;
  return d.toLocaleDateString("es-AR", { day: "numeric", month: "short", year: "numeric" });
}
