"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Session, User } from "@supabase/supabase-js";
import { getSupabase, isSupabaseConfigured, mensajeDeError } from "./supabase";

export type Perfil = { id: string; apodo: string; bio: string | null };

type Resultado = { ok: boolean; error?: string; mensaje?: string };

type AuthState = {
  listo: boolean;
  configurado: boolean;
  user: User | null;
  perfil: Perfil | null;
  /** Verificado = confirmó su email. Es lo que habilita a publicar. */
  verificado: boolean;
  registrarse: (email: string, password: string, apodo: string) => Promise<Resultado>;
  entrar: (email: string, password: string) => Promise<Resultado>;
  entrarConGoogle: () => Promise<Resultado>;
  salir: () => Promise<void>;
  enviarCodigo: () => Promise<Resultado>;
  confirmarCodigo: (codigo: string) => Promise<Resultado>;
  cambiarApodo: (apodo: string) => Promise<Resultado>;
  refrescar: () => Promise<void>;
};

const Ctx = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [listo, setListo] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [perfil, setPerfil] = useState<Perfil | null>(null);

  const sb = getSupabase();
  const user = session?.user ?? null;

  const cargarPerfil = useCallback(
    async (uid: string) => {
      if (!sb) return;
      const { data } = await sb
        .from("profiles")
        .select("id, apodo, bio")
        .eq("id", uid)
        .maybeSingle();
      setPerfil((data as Perfil) ?? null);
    },
    [sb],
  );

  useEffect(() => {
    if (!sb) {
      setListo(true);
      return;
    }
    let vivo = true;

    // Si el backend no responde, la interfaz igual tiene que quedar usable:
    // se muestra el formulario de ingreso en lugar de un "Cargando…" eterno.
    const salvavidas = setTimeout(() => {
      if (vivo) setListo(true);
    }, 8000);

    sb.auth
      .getSession()
      .then(({ data }) => {
        if (!vivo) return;
        setSession(data.session);
        if (data.session?.user) void cargarPerfil(data.session.user.id);
      })
      .catch(() => undefined)
      .finally(() => {
        if (!vivo) return;
        clearTimeout(salvavidas);
        setListo(true);
      });

    const { data: sub } = sb.auth.onAuthStateChange((_evt, s) => {
      if (!vivo) return;
      setSession(s);
      if (s?.user) void cargarPerfil(s.user.id);
      else setPerfil(null);
    });

    return () => {
      vivo = false;
      clearTimeout(salvavidas);
      sub.subscription.unsubscribe();
    };
  }, [sb, cargarPerfil]);

  /**
   * El perfil lo crea un trigger de la base al registrarse. Puede tardar un
   * instante, así que si todavía no está se reintenta unas pocas veces en
   * lugar de dejar al usuario sin apodo.
   */
  const refrescar = useCallback(async () => {
    if (!sb) return;
    const { data } = await sb.auth.getSession();
    setSession(data.session);
    if (!data.session?.user) return;
    for (let i = 0; i < 4; i++) {
      await cargarPerfil(data.session.user.id);
      const { data: p } = await sb
        .from("profiles")
        .select("id")
        .eq("id", data.session.user.id)
        .maybeSingle();
      if (p) break;
      await new Promise((r) => setTimeout(r, 400));
    }
  }, [sb, cargarPerfil]);

  const registrarse = useCallback<AuthState["registrarse"]>(
    async (email, password, apodo) => {
      if (!sb) return { ok: false, error: "La comunidad todavía no está configurada." };
      const limpio = apodo.trim();
      if (limpio.length < 3 || limpio.length > 24)
        return { ok: false, error: "El apodo debe tener entre 3 y 24 caracteres." };

      const { error } = await sb.auth.signUp({
        email: email.trim(),
        password,
        options: { data: { apodo: limpio } },
      });
      if (error) return { ok: false, error: mensajeDeError(error.message) };
      await refrescar();
      return {
        ok: true,
        mensaje:
          "Cuenta creada. Ya podés leer y navegar todo; para publicar en la comunidad hay que verificar el email.",
      };
    },
    [sb, refrescar],
  );

  const entrar = useCallback<AuthState["entrar"]>(
    async (email, password) => {
      if (!sb) return { ok: false, error: "La comunidad todavía no está configurada." };
      const { error } = await sb.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (error) return { ok: false, error: mensajeDeError(error.message) };
      await refrescar();
      return { ok: true };
    },
    [sb, refrescar],
  );

  const entrarConGoogle = useCallback<AuthState["entrarConGoogle"]>(async () => {
    if (!sb) return { ok: false, error: "La comunidad todavía no está configurada." };
    const { error } = await sb.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/entrar/` },
    });
    if (error) return { ok: false, error: mensajeDeError(error.message) };
    return { ok: true };
  }, [sb]);

  const salir = useCallback(async () => {
    if (!sb) return;
    await sb.auth.signOut();
    setSession(null);
    setPerfil(null);
  }, [sb]);

  /** Manda un código de 6 dígitos al email de la cuenta. */
  const enviarCodigo = useCallback<AuthState["enviarCodigo"]>(async () => {
    if (!sb || !user?.email)
      return { ok: false, error: "No hay una cuenta activa." };
    const { error } = await sb.auth.signInWithOtp({
      email: user.email,
      options: { shouldCreateUser: false },
    });
    if (error) return { ok: false, error: mensajeDeError(error.message) };
    return {
      ok: true,
      mensaje: `Te mandamos un código de 6 dígitos a ${user.email}. Puede tardar un par de minutos, y a veces cae en spam.`,
    };
  }, [sb, user]);

  const confirmarCodigo = useCallback<AuthState["confirmarCodigo"]>(
    async (codigo) => {
      if (!sb || !user?.email)
        return { ok: false, error: "No hay una cuenta activa." };
      const token = codigo.replace(/\D/g, "");
      if (token.length !== 6)
        return { ok: false, error: "El código son 6 dígitos." };

      const { error } = await sb.auth.verifyOtp({
        email: user.email,
        token,
        type: "email",
      });
      if (error) return { ok: false, error: mensajeDeError(error.message) };
      await refrescar();
      return { ok: true, mensaje: "Cuenta verificada. Ya podés publicar en la comunidad." };
    },
    [sb, user, refrescar],
  );

  const cambiarApodo = useCallback<AuthState["cambiarApodo"]>(
    async (apodo) => {
      if (!sb || !user) return { ok: false, error: "No hay una cuenta activa." };
      const limpio = apodo.trim();
      if (limpio.length < 3 || limpio.length > 24)
        return { ok: false, error: "El apodo debe tener entre 3 y 24 caracteres." };
      const { error } = await sb
        .from("profiles")
        .update({ apodo: limpio })
        .eq("id", user.id);
      if (error) return { ok: false, error: mensajeDeError(error.message) };
      await cargarPerfil(user.id);
      return { ok: true, mensaje: "Apodo actualizado." };
    },
    [sb, user, cargarPerfil],
  );

  /**
   * Google devuelve cuentas ya confirmadas. Para email con contraseña,
   * `email_confirmed_at` sólo se completa cuando la persona valida el código.
   */
  const verificado = Boolean(
    user &&
      ((user as unknown as { email_confirmed_at?: string }).email_confirmed_at ||
        user.confirmed_at),
  );

  const value = useMemo<AuthState>(
    () => ({
      listo,
      configurado: isSupabaseConfigured,
      user,
      perfil,
      verificado,
      registrarse,
      entrar,
      entrarConGoogle,
      salir,
      enviarCodigo,
      confirmarCodigo,
      cambiarApodo,
      refrescar,
    }),
    [listo, user, perfil, verificado, registrarse, entrar, entrarConGoogle, salir,
     enviarCodigo, confirmarCodigo, cambiarApodo, refrescar],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth(): AuthState {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return ctx;
}
