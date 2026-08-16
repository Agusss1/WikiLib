"use client";

import { useEffect, useRef } from "react";
import { useAuth } from "@/lib/auth";

/**
 * Botón de "Continuar con Google".
 *
 * Usa Google Identity Services. El navegador obtiene un id_token y lo manda a
 * la API; el servidor lo valida contra Google antes de crear la sesión, porque
 * un token sin verificar es sólo texto que cualquiera puede escribir.
 *
 * Si no hay client id configurado, no se muestra nada y el resto del ingreso
 * funciona igual.
 */
type GoogleId = {
  accounts: {
    id: {
      initialize: (o: {
        client_id: string;
        callback: (r: { credential: string }) => void;
      }) => void;
      renderButton: (el: HTMLElement, o: Record<string, unknown>) => void;
    };
  };
};

declare global {
  interface Window {
    google?: GoogleId;
  }
}

export function GoogleBoton({ onError }: { onError: (m: string) => void }) {
  const { googleClientId, entrarConGoogle } = useAuth();
  const contenedor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!googleClientId || !contenedor.current) return;
    let cancelado = false;

    function dibujar() {
      if (cancelado || !window.google || !contenedor.current) return;
      window.google.accounts.id.initialize({
        client_id: googleClientId,
        callback: async (r) => {
          const res = await entrarConGoogle(r.credential);
          if (!res.ok) onError(res.error ?? "No se pudo entrar con Google.");
        },
      });
      window.google.accounts.id.renderButton(contenedor.current, {
        type: "standard",
        theme: "outline",
        size: "large",
        text: "continue_with",
        locale: "es-419",
        width: 320,
      });
    }

    if (window.google) {
      dibujar();
      return;
    }
    const s = document.createElement("script");
    s.src = "https://accounts.google.com/gsi/client";
    s.async = true;
    s.defer = true;
    s.onload = dibujar;
    s.onerror = () => onError("No se pudo cargar el ingreso con Google.");
    document.head.appendChild(s);

    return () => {
      cancelado = true;
    };
  }, [googleClientId, entrarConGoogle, onError]);

  if (!googleClientId) return null;

  return (
    <>
      <div ref={contenedor} className="flex justify-center [color-scheme:light]" />
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-border" />
        <span className="text-[12px] text-fg-subtle">o con tu email</span>
        <span className="h-px flex-1 bg-border" />
      </div>
    </>
  );
}
