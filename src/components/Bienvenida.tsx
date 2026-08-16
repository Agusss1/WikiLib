"use client";

import { useEffect, useState } from "react";

/**
 * Saludo de bienvenida.
 *
 * Aparece abajo a la derecha, después de un instante, y se puede cerrar. Se
 * recuerda por siete días: agradecer una vez es simpático, hacerlo en cada
 * visita es molesto.
 *
 * No tapa nada del contenido ni bloquea la lectura, a diferencia de un modal.
 */
const CLAVE = "wikilib:bienvenida";
const DIAS = 7;

export function Bienvenida() {
  const [visible, setVisible] = useState(false);
  const [saliendo, setSaliendo] = useState(false);

  useEffect(() => {
    let ultima = 0;
    try {
      ultima = Number(localStorage.getItem(CLAVE) ?? 0);
    } catch {
      return; // sin almacenamiento, mejor no insistir en cada carga
    }
    if (Date.now() - ultima < DIAS * 86_400_000) return;

    const t = setTimeout(() => setVisible(true), 1400);
    return () => clearTimeout(t);
  }, []);

  function cerrar() {
    setSaliendo(true);
    try {
      localStorage.setItem(CLAVE, String(Date.now()));
    } catch {
      /* si no se puede guardar, se volverá a mostrar; no es grave */
    }
    setTimeout(() => setVisible(false), 220);
  }

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-4 right-4 z-40 w-[calc(100vw-2rem)] max-w-sm rounded-[var(--radius)] border border-accent-border bg-bg-elevated p-4 shadow-[var(--shadow)] transition-all duration-200 sm:bottom-6 sm:right-6 ${
        saliendo ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <button
        onClick={cerrar}
        aria-label="Cerrar mensaje"
        className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-[var(--radius-sm)] text-[15px] text-fg-subtle transition-colors hover:bg-bg-subtle hover:text-fg"
      >
        <span aria-hidden>✕</span>
      </button>

      <p className="pr-6 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
        Gracias por entrar
      </p>
      <p className="mt-1.5 pr-4 text-[14px] leading-relaxed text-fg-muted">
        Este sitio se mantiene gracias a vos. No hay publicidad ni muro de pago:
        lo que leas acá es gratis y va a seguir siéndolo.
      </p>
      <a
        href="/nosotros/"
        className="mt-3 inline-block text-[13px] font-semibold text-accent hover:underline"
      >
        Quiénes estamos detrás →
      </a>
    </div>
  );
}
