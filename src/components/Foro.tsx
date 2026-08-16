"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import {
  TEMAS, TEMA_LABEL, crearHilo, fecha, listarHilos, listarRespuestas,
  obtenerHilo, responder, type Hilo, type Respuesta,
} from "@/lib/foro";
import { ApiError } from "@/lib/api";

/** Los errores de la API ya vienen redactados para leer; el resto se generaliza. */
function texto(e: unknown): string {
  return e instanceof ApiError ? e.message : "Algo falló. Probá de nuevo.";
}
import { Badge, EmptyState, Note } from "@/components/ui";

const boton =
  "rounded-[var(--radius-sm)] bg-accent px-4 py-2 text-[14px] font-semibold text-accent-fg transition-opacity hover:opacity-90 disabled:opacity-50";

/**
 * Aviso de permisos. Distingue tres estados —sin cuenta, sin verificar y
 * listo— porque decirle a alguien "no podés publicar" sin explicarle qué le
 * falta es la forma más rápida de perderlo.
 */
function Permiso({ accion }: { accion: string }) {
  const { usuario, verificado } = useAuth();
  if (verificado) return null;
  if (!usuario) {
    return (
      <Note tone="info" title={`Para ${accion} hace falta una cuenta`}>
        Leer es libre y no requiere registrarse.{" "}
        <Link href="/entrar" className="text-accent hover:underline">
          Crear cuenta o entrar
        </Link>
        .
      </Note>
    );
  }
  return (
    <Note tone="warn" title="Falta verificar tu cuenta">
      Ya tenés cuenta, pero para {accion} hay que confirmar el email con un código.{" "}
      <Link href="/entrar" className="text-accent hover:underline">
        Verificar ahora
      </Link>
      .
    </Note>
  );
}

// ---------------------------------------------------------------------------
// Listado de hilos
// ---------------------------------------------------------------------------
export function ListaHilos() {
  const { configurado, verificado } = useAuth();
  const [hilos, setHilos] = useState<Hilo[]>([]);
  const [tema, setTema] = useState("todos");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [creando, setCreando] = useState(false);

  const cargar = useCallback(async () => {
    if (!configurado) {
      setCargando(false);
      return;
    }
    setCargando(true);
    setError(null);
    try {
      setHilos(await listarHilos(tema));
    } catch (e) {
      setError(texto(e));
    } finally {
      setCargando(false);
    }
  }, [tema, configurado]);

  useEffect(() => {
    void cargar();
  }, [cargar]);

  if (!configurado) return null;

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {[{ id: "todos", label: "Todos" }, ...TEMAS].map((t) => (
            <button
              key={t.id}
              onClick={() => setTema(t.id)}
              className={`rounded-full border px-3 py-1 text-[12.5px] font-medium transition-colors ${
                tema === t.id
                  ? "border-accent-border bg-accent-subtle text-accent"
                  : "border-border bg-bg-subtle text-fg-muted hover:text-fg"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        {verificado && (
          <button onClick={() => setCreando((v) => !v)} className={boton}>
            {creando ? "Cancelar" : "Abrir un hilo"}
          </button>
        )}
      </div>

      {!verificado && (
        <div className="mb-5">
          <Permiso accion="abrir un hilo" />
        </div>
      )}

      {creando && (
        <FormularioHilo
          onListo={() => {
            setCreando(false);
            void cargar();
          }}
        />
      )}

      {error && (
        <div className="mb-4 rounded-[var(--radius-sm)] border border-danger/30 bg-danger-subtle px-3.5 py-2.5 text-[13.5px] text-danger">
          {error}
        </div>
      )}

      {cargando ? (
        <p className="text-[14px] text-fg-muted">Cargando debates…</p>
      ) : hilos.length === 0 ? (
        <EmptyState
          title="Todavía no hay hilos acá"
          description="La comunidad recién arranca. Si tenés una pregunta o una posición para discutir, abrí el primero."
          action={
            !verificado ? (
              <Link href="/entrar" className={boton}>
                Crear cuenta para participar
              </Link>
            ) : undefined
          }
        />
      ) : (
        <ul className="divide-y divide-border overflow-hidden rounded-[var(--radius)] border border-border bg-bg-elevated">
          {hilos.map((h) => (
            <li key={h.id}>
              <Link
                href={`/comunidad/hilo/?id=${h.id}`}
                className="group block px-5 py-4 transition-colors hover:bg-bg-subtle"
              >
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <Badge tone="accent">{TEMA_LABEL[h.tema] ?? h.tema}</Badge>
                  <span className="text-[12px] text-fg-subtle">
                    {h.autor} · {fecha(h.creado_en)}
                  </span>
                </div>
                <p className="text-[15.5px] font-semibold leading-snug group-hover:text-accent">
                  {h.titulo}
                </p>
                <p className="mt-1 line-clamp-2 text-[13.5px] leading-relaxed text-fg-muted">
                  {h.cuerpo}
                </p>
                <p className="mt-2 text-[12.5px] text-fg-subtle">
                  {h.respuestas} {h.respuestas === 1 ? "respuesta" : "respuestas"}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FormularioHilo({ onListo }: { onListo: () => void }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState("general");
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    setEnviando(true);
    setError(null);
    try {
      await crearHilo({ titulo: title, cuerpo: body, tema: topic });
      onListo();
    } catch (err) {
      setError(texto(err));
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form
      onSubmit={enviar}
      className="mb-6 space-y-3.5 rounded-[var(--radius)] border border-accent-border bg-bg-elevated p-5"
    >
      <div>
        <label className="mb-1.5 block text-[13px] font-semibold">Título</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          minLength={8}
          maxLength={160}
          placeholder="¿Qué querés discutir?"
          className="w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3.5 py-2.5 text-[15px] outline-none focus:border-accent"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-[13px] font-semibold">Tema</label>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3.5 py-2.5 text-[15px] outline-none focus:border-accent"
        >
          {TEMAS.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-[13px] font-semibold">Tu planteo</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          minLength={20}
          maxLength={8000}
          rows={7}
          placeholder="Antes de mandar: ¿está claro qué afirmás y por qué? Si citás un dato, decí de dónde sale."
          className="w-full resize-y rounded-[var(--radius-sm)] border border-border bg-bg px-3.5 py-2.5 text-[15px] leading-relaxed outline-none focus:border-accent"
        />
        <p className="mt-1 text-[12px] text-fg-subtle">
          Recordá la regla de la casa: antes de refutar, reformulá la posición contraria de
          manera que su autor la reconozca como propia.
        </p>
      </div>
      {error && (
        <div className="rounded-[var(--radius-sm)] border border-danger/30 bg-danger-subtle px-3.5 py-2.5 text-[13.5px] text-danger">
          {error}
        </div>
      )}
      <button type="submit" disabled={enviando} className={boton}>
        {enviando ? "Publicando…" : "Publicar hilo"}
      </button>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Detalle de un hilo
//
// Usa ?id= en lugar de una ruta dinámica porque el sitio se publica como
// HTML estático: una ruta /comunidad/[id] no se puede pregenerar para hilos
// que todavía no existen.
// ---------------------------------------------------------------------------
export function DetalleHilo() {
  const params = useSearchParams();
  const router = useRouter();
  const id = params.get("id");
  const { configurado, verificado } = useAuth();

  const [hilo, setHilo] = useState<Hilo | null>(null);
  const [respuestas, setRespuestas] = useState<Respuesta[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);

  const cargar = useCallback(async () => {
    if (!configurado || !id) {
      setCargando(false);
      return;
    }
    setCargando(true);
    try {
      const [h, r] = await Promise.all([obtenerHilo(id), listarRespuestas(id)]);
      setHilo(h);
      setRespuestas(r);
    } catch (e) {
      setError(texto(e));
    } finally {
      setCargando(false);
    }
  }, [id, configurado]);

  useEffect(() => {
    void cargar();
  }, [cargar]);

  if (!configurado) return null;
  if (!id)
    return (
      <EmptyState
        title="No se indicó ningún hilo"
        description="Volvé al listado y elegí uno."
        action={
          <Link href="/comunidad" className={boton}>
            Ver los debates
          </Link>
        }
      />
    );
  if (cargando) return <p className="text-[14px] text-fg-muted">Cargando…</p>;
  if (error)
    return (
      <div className="rounded-[var(--radius-sm)] border border-danger/30 bg-danger-subtle px-3.5 py-2.5 text-[13.5px] text-danger">
        {error}
      </div>
    );
  if (!hilo)
    return (
      <EmptyState
        title="Este hilo no existe o fue borrado"
        description="Puede que el enlace esté mal o que su autor lo haya eliminado."
        action={
          <Link href="/comunidad" className={boton}>
            Ver los debates
          </Link>
        }
      />
    );

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!id) return;
    setEnviando(true);
    setError(null);
    try {
      await responder({ hilo: id, cuerpo: mensaje });
      setMensaje("");
      await cargar();
    } catch (err) {
      setError(texto(err));
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div>
      <button
        onClick={() => router.push("/comunidad")}
        className="mb-5 text-[13px] text-fg-muted hover:text-accent"
      >
        ← Volver a los debates
      </button>

      <article className="mb-8 rounded-[var(--radius)] border border-border bg-bg-elevated p-6">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Badge tone="accent">{TEMA_LABEL[hilo.tema] ?? hilo.tema}</Badge>
          <Badge>Contenido de la comunidad</Badge>
        </div>
        <h1 className="text-[1.5rem] font-bold leading-snug tracking-[-0.02em]">
          {hilo.titulo}
        </h1>
        <p className="mt-1.5 text-[12.5px] text-fg-subtle">
          {hilo.autor} · {fecha(hilo.creado_en)}
        </p>
        <div className="prose mt-4">
          {hilo.cuerpo.split("\n").filter(Boolean).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>

      <h2 className="mb-4 text-[1.15rem] font-bold tracking-[-0.015em]">
        {respuestas.length} {respuestas.length === 1 ? "respuesta" : "respuestas"}
      </h2>

      {respuestas.length > 0 && (
        <ul className="mb-8 space-y-3">
          {respuestas.map((r) => (
            <li
              key={r.id}
              className="rounded-[var(--radius)] border border-border bg-bg-elevated p-4"
            >
              <p className="text-[12.5px] font-semibold text-fg-muted">
                {r.autor}{" "}
                <span className="font-normal text-fg-subtle">· {fecha(r.creado_en)}</span>
              </p>
              <div className="prose mt-2">
                {r.cuerpo.split("\n").filter(Boolean).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}

      {verificado ? (
        <form
          onSubmit={enviar}
          className="space-y-3 rounded-[var(--radius)] border border-border bg-bg-elevated p-5"
        >
          <label className="block text-[13px] font-semibold">Tu respuesta</label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
            minLength={2}
            maxLength={8000}
            rows={5}
            placeholder="Respondé al argumento, no a la persona."
            className="w-full resize-y rounded-[var(--radius-sm)] border border-border bg-bg px-3.5 py-2.5 text-[15px] leading-relaxed outline-none focus:border-accent"
          />
          {error && (
            <div className="rounded-[var(--radius-sm)] border border-danger/30 bg-danger-subtle px-3.5 py-2.5 text-[13.5px] text-danger">
              {error}
            </div>
          )}
          <button type="submit" disabled={enviando} className={boton}>
            {enviando ? "Publicando…" : "Responder"}
          </button>
        </form>
      ) : (
        <Permiso accion="responder" />
      )}
    </div>
  );
}
