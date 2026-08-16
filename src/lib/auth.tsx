"use client";

import {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
  type ReactNode,
} from "react";
import { ApiError, api, type UsuarioApi } from "./api";

type Resultado = { ok: boolean; error?: string; mensaje?: string };

type AuthState = {
  listo: boolean;
  /** false si la API todavía no está instalada en el servidor. */
  configurado: boolean;
  usuario: UsuarioApi | null;
  /** Verificado = confirmó el email. Es lo que habilita a publicar. */
  verificado: boolean;
  /** ID de cliente de Google, o "" si el ingreso con Google no está configurado. */
  googleClientId: string;
  registrarse: (email: string, clave: string, apodo: string) => Promise<Resultado>;
  entrar: (email: string, clave: string) => Promise<Resultado>;
  entrarConGoogle: (credential: string) => Promise<Resultado>;
  salir: () => Promise<void>;
  enviarCodigo: () => Promise<Resultado>;
  confirmarCodigo: (codigo: string) => Promise<Resultado>;
  cambiarApodo: (apodo: string) => Promise<Resultado>;
  refrescar: () => Promise<void>;
};

const Ctx = createContext<AuthState | null>(null);

type RespSesion = { usuario: UsuarioApi | null; google_client_id: string };

export function AuthProvider({ children }: { children: ReactNode }) {
  const [listo, setListo] = useState(false);
  const [configurado, setConfigurado] = useState(true);
  const [usuario, setUsuario] = useState<UsuarioApi | null>(null);
  const [googleClientId, setGoogle] = useState("");

  const refrescar = useCallback(async () => {
    try {
      const r = await api.get<RespSesion>("sesion.php");
      setUsuario(r.usuario);
      setGoogle(r.google_client_id ?? "");
      setConfigurado(true);
    } catch (e) {
      // 503 = falta config.php. Cualquier otro fallo también deja la comunidad
      // fuera de servicio, pero el resto del sitio sigue andando igual.
      setConfigurado(!(e instanceof ApiError && (e.status === 503 || e.status === 0 || e.status === 404)));
      setUsuario(null);
    }
  }, []);

  useEffect(() => {
    let vivo = true;
    void refrescar().finally(() => {
      if (vivo) setListo(true);
    });
    return () => {
      vivo = false;
    };
  }, [refrescar]);

  function envolver(fn: () => Promise<Resultado>): Promise<Resultado> {
    return fn().catch((e) => ({
      ok: false,
      error: e instanceof ApiError ? e.message : "Algo falló. Probá de nuevo.",
    }));
  }

  const registrarse = useCallback<AuthState["registrarse"]>(
    (email, clave, apodo) =>
      envolver(async () => {
        const r = await api.post<{ usuario: UsuarioApi; mensaje: string }>(
          "registro.php",
          { email, clave, apodo },
        );
        setUsuario(r.usuario);
        return { ok: true, mensaje: r.mensaje };
      }),
    [],
  );

  const entrar = useCallback<AuthState["entrar"]>(
    (email, clave) =>
      envolver(async () => {
        const r = await api.post<{ usuario: UsuarioApi }>("ingresar.php", {
          email,
          clave,
        });
        setUsuario(r.usuario);
        return { ok: true };
      }),
    [],
  );

  const entrarConGoogle = useCallback<AuthState["entrarConGoogle"]>(
    (credential) =>
      envolver(async () => {
        const r = await api.post<{ usuario: UsuarioApi }>("google.php", {
          credential,
        });
        setUsuario(r.usuario);
        return { ok: true };
      }),
    [],
  );

  const salir = useCallback(async () => {
    try {
      await api.post("salir.php");
    } finally {
      setUsuario(null);
    }
  }, []);

  const enviarCodigo = useCallback<AuthState["enviarCodigo"]>(
    () =>
      envolver(async () => {
        const r = await api.post<{ mensaje: string }>("codigo-enviar.php");
        return { ok: true, mensaje: r.mensaje };
      }),
    [],
  );

  const confirmarCodigo = useCallback<AuthState["confirmarCodigo"]>(
    (codigo) =>
      envolver(async () => {
        const r = await api.post<{ mensaje: string; usuario: UsuarioApi }>(
          "codigo-verificar.php",
          { codigo },
        );
        setUsuario(r.usuario);
        return { ok: true, mensaje: r.mensaje };
      }),
    [],
  );

  const cambiarApodo = useCallback<AuthState["cambiarApodo"]>(
    (apodo) =>
      envolver(async () => {
        const r = await api.post<{ mensaje: string; apodo: string }>("perfil.php", {
          apodo,
        });
        setUsuario((u) => (u ? { ...u, apodo: r.apodo } : u));
        return { ok: true, mensaje: r.mensaje };
      }),
    [],
  );

  const value = useMemo<AuthState>(
    () => ({
      listo,
      configurado,
      usuario,
      verificado: Boolean(usuario?.verificado),
      googleClientId,
      registrarse,
      entrar,
      entrarConGoogle,
      salir,
      enviarCodigo,
      confirmarCodigo,
      cambiarApodo,
      refrescar,
    }),
    [listo, configurado, usuario, googleClientId, registrarse, entrar,
     entrarConGoogle, salir, enviarCodigo, confirmarCodigo, cambiarApodo, refrescar],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth(): AuthState {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return ctx;
}
