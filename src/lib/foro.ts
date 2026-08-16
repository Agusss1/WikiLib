import { getSupabase } from "./supabase";

/**
 * Corta una consulta que no responde.
 *
 * Sin esto, si el backend está caído o mal configurado, la promesa nunca se
 * resuelve y la pantalla queda en "Cargando…" indefinidamente. Es preferible
 * un error explicable a una espera sin final.
 */
const LIMITE_MS = 10_000;

async function conTiempoLimite<T>(p: PromiseLike<T>, que: string): Promise<T> {
  let temporizador: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      Promise.resolve(p),
      new Promise<never>((_, rechazar) => {
        temporizador = setTimeout(
          () => rechazar(new Error(`No se pudo ${que}: el servidor no respondió.`)),
          LIMITE_MS,
        );
      }),
    ]);
  } finally {
    if (temporizador) clearTimeout(temporizador);
  }
}

export type Hilo = {
  id: string;
  title: string;
  body: string;
  topic: string;
  created_at: string;
  author_id: string;
  author_apodo: string;
  reply_count: number;
};

export type Respuesta = {
  id: string;
  thread_id: string;
  body: string;
  created_at: string;
  author_id: string;
  author_apodo: string;
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

export async function listarHilos(tema?: string): Promise<Hilo[]> {
  const sb = getSupabase();
  if (!sb) return [];
  let q = sb
    .from("threads_with_author")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);
  if (tema && tema !== "todos") q = q.eq("topic", tema);
  const { data, error } = await conTiempoLimite(q, "cargar los debates");
  if (error) throw error;
  return (data ?? []) as Hilo[];
}

export async function obtenerHilo(id: string): Promise<Hilo | null> {
  const sb = getSupabase();
  if (!sb) return null;
  const { data, error } = await conTiempoLimite(
    sb.from("threads_with_author").select("*").eq("id", id).maybeSingle(),
    "cargar el hilo",
  );
  if (error) throw error;
  return (data as Hilo) ?? null;
}

export async function listarRespuestas(hiloId: string): Promise<Respuesta[]> {
  const sb = getSupabase();
  if (!sb) return [];
  const { data, error } = await conTiempoLimite(
    sb.from("posts_with_author").select("*").eq("thread_id", hiloId)
      .order("created_at", { ascending: true }),
    "cargar las respuestas",
  );
  if (error) throw error;
  return (data ?? []) as Respuesta[];
}

export async function crearHilo(input: {
  authorId: string;
  title: string;
  body: string;
  topic: string;
}) {
  const sb = getSupabase();
  if (!sb) throw new Error("La comunidad no está configurada.");
  const { data, error } = await conTiempoLimite(
    sb.from("threads").insert({
      author_id: input.authorId,
      title: input.title.trim(),
      body: input.body.trim(),
      topic: input.topic,
    }).select("id").single(),
    "publicar el hilo",
  );
  if (error) throw error;
  return data.id as string;
}

export async function responder(input: {
  authorId: string;
  threadId: string;
  body: string;
}) {
  const sb = getSupabase();
  if (!sb) throw new Error("La comunidad no está configurada.");
  const { error } = await conTiempoLimite(
    sb.from("posts").insert({
      author_id: input.authorId,
      thread_id: input.threadId,
      body: input.body.trim(),
    }),
    "publicar la respuesta",
  );
  if (error) throw error;
}

/** Fecha en formato corto y legible en Argentina. */
export function fecha(iso: string): string {
  const d = new Date(iso);
  const diff = (Date.now() - d.getTime()) / 1000;
  if (diff < 60) return "recién";
  if (diff < 3600) return `hace ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `hace ${Math.floor(diff / 3600)} h`;
  if (diff < 604800) return `hace ${Math.floor(diff / 86400)} d`;
  return d.toLocaleDateString("es-AR", { day: "numeric", month: "short", year: "numeric" });
}
