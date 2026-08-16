"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { Badge, Note } from "@/components/ui";
import { GoogleBoton } from "@/components/GoogleBoton";

function Campo({
  label,
  hint,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-semibold">{label}</span>
      <input
        {...props}
        className="w-full rounded-[var(--radius-sm)] border border-border bg-bg-elevated px-3.5 py-2.5 text-[15px] outline-none transition-colors focus:border-accent"
      />
      {hint && <span className="mt-1 block text-[12px] text-fg-subtle">{hint}</span>}
    </label>
  );
}

function Aviso({ error, ok }: { error?: string | null; ok?: string | null }) {
  if (!error && !ok) return null;
  return (
    <div
      role="status"
      className={`rounded-[var(--radius-sm)] border px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
        error
          ? "border-danger/30 bg-danger-subtle text-danger"
          : "border-ok/30 bg-ok-subtle text-ok"
      }`}
    >
      {error ?? ok}
    </div>
  );
}

const boton =
  "w-full rounded-[var(--radius-sm)] bg-accent px-4 py-2.5 text-[14.5px] font-semibold text-accent-fg transition-opacity hover:opacity-90 disabled:opacity-50";

/** Panel de verificación: pide el código de 6 dígitos que llega al mail. */
export function PanelVerificacion() {
  const { usuario, verificado, enviarCodigo, confirmarCodigo } = useAuth();
  const [codigo, setCodigo] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  if (verificado) {
    return (
      <Note tone="ok" title="Cuenta verificada">
        Podés abrir hilos y responder en la comunidad.
      </Note>
    );
  }

  async function pedir() {
    setCargando(true);
    setError(null);
    setOk(null);
    const r = await enviarCodigo();
    setCargando(false);
    if (r.ok) setOk(r.mensaje ?? null);
    else setError(r.error ?? null);
  }

  async function confirmar(e: React.FormEvent) {
    e.preventDefault();
    setCargando(true);
    setError(null);
    setOk(null);
    const r = await confirmarCodigo(codigo);
    setCargando(false);
    if (r.ok) setOk(r.mensaje ?? null);
    else setError(r.error ?? null);
  }

  return (
    <div className="rounded-[var(--radius)] border border-warn/30 bg-warn-subtle p-5">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <h2 className="text-[15.5px] font-bold">Falta verificar tu cuenta</h2>
        <Badge tone="warn">Sin verificar</Badge>
      </div>
      <p className="mb-4 text-[14px] leading-relaxed text-fg-muted">
        Podés leer y usar toda la Wiki así como estás. Para <strong>publicar en la
        comunidad</strong> hace falta confirmar que el mail es tuyo. Te mandamos un
        código de 6 dígitos a <strong>{usuario?.email}</strong>.
      </p>

      <button onClick={pedir} disabled={cargando} className={`${boton} mb-4`}>
        {cargando ? "Un momento…" : "Enviarme el código"}
      </button>

      {/* El campo va siempre visible: quien ya recibió un código tiene que poder
          usarlo sin pedir otro, aunque el último envío haya fallado. */}
      <form onSubmit={confirmar} className="space-y-3 border-t border-warn/20 pt-4">
        <Campo
          label="¿Ya tenés el código?"
          hint="Son los 6 dígitos del mail. Vence en una hora."
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={7}
          placeholder="000000"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button
          type="submit"
          disabled={cargando || codigo.replace(/\D/g, "").length < 6}
          className={boton}
        >
          {cargando ? "Verificando…" : "Verificar mi cuenta"}
        </button>
      </form>

      <div className="mt-3">
        <Aviso error={error} ok={ok} />
      </div>

      <p className="mt-3 text-[12px] leading-relaxed text-fg-subtle">
        Si no llega, revisá spam. Los correos automáticos suelen tardar unos minutos.
      </p>
    </div>
  );
}

/** Formulario de ingreso y registro. */
export function FormularioCuenta() {
  const { configurado, listo, usuario, salir, registrarse, entrar } = useAuth();
  const [modo, setModo] = useState<"entrar" | "registro">("entrar");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apodo, setApodo] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  if (!listo || !configurado) return null;

  if (usuario) {
    return (
      <div className="space-y-5">
        <div className="rounded-[var(--radius)] border border-border bg-bg-elevated p-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-fg-subtle">
            Tu cuenta
          </p>
          <p className="mt-1.5 text-[1.15rem] font-bold tracking-[-0.015em]">
            {usuario.apodo}
          </p>
          <p className="mt-0.5 text-[13.5px] text-fg-muted">{usuario.email}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/comunidad"
              className="rounded-[var(--radius-sm)] bg-accent px-3.5 py-2 text-[13.5px] font-semibold text-accent-fg hover:opacity-90"
            >
              Ir a la comunidad
            </Link>
            <Link
              href="/perfil"
              className="rounded-[var(--radius-sm)] border border-border px-3.5 py-2 text-[13.5px] font-semibold text-fg-muted hover:border-accent-border hover:text-accent"
            >
              Mi progreso
            </Link>
            <button
              onClick={() => void salir()}
              className="rounded-[var(--radius-sm)] border border-border px-3.5 py-2 text-[13.5px] font-semibold text-fg-muted hover:border-danger/40 hover:text-danger"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
        <PanelVerificacion />
      </div>
    );
  }

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    setCargando(true);
    setError(null);
    setOk(null);
    const r =
      modo === "registro"
        ? await registrarse(email, password, apodo)
        : await entrar(email, password);
    setCargando(false);
    if (r.ok) setOk(r.mensaje ?? null);
    else setError(r.error ?? null);
  }

  return (
    <div className="space-y-5">
      <div className="flex rounded-[var(--radius-sm)] border border-border bg-bg-subtle p-1">
        {(["entrar", "registro"] as const).map((m) => (
          <button
            key={m}
            onClick={() => {
              setModo(m);
              setError(null);
              setOk(null);
            }}
            className={`flex-1 rounded-[calc(var(--radius-sm)-2px)] px-3 py-2 text-[13.5px] font-semibold transition-colors ${
              modo === m ? "bg-bg-elevated text-fg shadow-[var(--shadow-sm)]" : "text-fg-muted"
            }`}
          >
            {m === "entrar" ? "Ya tengo cuenta" : "Crear cuenta"}
          </button>
        ))}
      </div>

      <GoogleBoton onError={setError} />

      <form onSubmit={enviar} className="space-y-3.5">
        {modo === "registro" && (
          <Campo
            label="Apodo"
            placeholder="Cómo te van a ver los demás"
            hint="Entre 3 y 24 caracteres. Es lo único que se muestra públicamente."
            required
            minLength={3}
            maxLength={24}
            value={apodo}
            onChange={(e) => setApodo(e.target.value)}
          />
        )}
        <Campo
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="vos@gmail.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Campo
          label="Contraseña"
          type="password"
          autoComplete={modo === "registro" ? "new-password" : "current-password"}
          placeholder="••••••••"
          required
          minLength={8}
          hint={modo === "registro" ? "Mínimo 8 caracteres." : undefined}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Aviso error={error} ok={ok} />
        <button type="submit" disabled={cargando} className={boton}>
          {cargando
            ? "Un momento…"
            : modo === "registro"
              ? "Crear mi cuenta"
              : "Entrar"}
        </button>
      </form>

      <p className="text-[12.5px] leading-relaxed text-fg-subtle">
        Podés crear la cuenta y usar todo el sitio sin verificar nada. La verificación
        por email sólo hace falta cuando quieras publicar en la comunidad, y existe para
        que las discusiones no se llenen de cuentas descartables.
      </p>
    </div>
  );
}

/** Menú de cuenta en el encabezado. */
export function MenuCuenta() {
  const { configurado, listo, usuario, verificado, salir } = useAuth();
  const [abierto, setAbierto] = useState(false);

  if (!configurado || !listo) return null;

  if (!usuario) {
    return (
      <Link
        href="/entrar"
        className="rounded-[var(--radius-sm)] border border-border px-3 py-1.5 text-[13px] font-semibold text-fg-muted transition-colors hover:border-accent-border hover:text-accent"
      >
        Entrar
      </Link>
    );
  }

  const inicial = (usuario.apodo || usuario.email || "?").trim().charAt(0).toUpperCase();

  return (
    <div className="relative">
      <button
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        aria-label="Menú de cuenta"
        className="flex h-8 items-center gap-2 rounded-[var(--radius-sm)] border border-border px-2 transition-colors hover:border-accent-border"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-fg">
          {inicial}
        </span>
        <span className="hidden max-w-[10ch] truncate text-[13px] font-medium sm:block">
          {usuario.apodo}
        </span>
        {!verificado && (
          <span
            title="Falta verificar tu cuenta"
            className="h-1.5 w-1.5 rounded-full bg-warn"
          />
        )}
      </button>

      {abierto && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setAbierto(false)}
            role="presentation"
          />
          <div className="absolute right-0 top-[calc(100%+6px)] z-50 w-56 overflow-hidden rounded-[var(--radius)] border border-border bg-bg-elevated shadow-[var(--shadow)]">
            <div className="border-b border-border px-4 py-3">
              <p className="truncate text-[13.5px] font-semibold">{usuario.apodo}</p>
              <p className="mt-0.5 truncate text-[12px] text-fg-subtle">{usuario.email}</p>
              {!verificado && (
                <p className="mt-1.5 text-[11.5px] font-medium text-warn">
                  Falta verificar
                </p>
              )}
            </div>
            {[
              ["/entrar", "Mi cuenta"],
              ["/perfil", "Mi progreso"],
              ["/comunidad", "Comunidad"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setAbierto(false)}
                className="block px-4 py-2.5 text-[13.5px] text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => {
                setAbierto(false);
                void salir();
              }}
              className="w-full border-t border-border px-4 py-2.5 text-left text-[13.5px] text-fg-muted transition-colors hover:bg-bg-subtle hover:text-danger"
            >
              Cerrar sesión
            </button>
          </div>
        </>
      )}
    </div>
  );
}
