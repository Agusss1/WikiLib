"use client";

import type { ReactNode } from "react";
import { useAuth } from "@/lib/auth";

/**
 * Visibilidad de la comunidad.
 *
 * Criterio del proyecto: lo que no está disponible **no se muestra**. Nada de
 * avisos del tipo "esto todavía no está conectado": eso le cuenta al visitante
 * el estado interno del proyecto y hace ver roto algo que simplemente no está.
 *
 * Por eso se renderiza sólo cuando la API respondió que está operativa. El
 * orden importa: primero no aparece nada y después aparece si corresponde,
 * nunca al revés, para que no haya un parpadeo de secciones que desaparecen.
 */
export function useComunidadDisponible(): boolean {
  const { listo, configurado } = useAuth();
  return listo && configurado;
}

export function SiHayComunidad({ children }: { children: ReactNode }) {
  return useComunidadDisponible() ? <>{children}</> : null;
}

/**
 * Para páginas enteras que dependen de la comunidad. Mientras se averigua,
 * no muestra nada; si no está disponible, se comporta como una dirección que
 * no existe.
 */
export function PaginaDeComunidad({ children }: { children: ReactNode }) {
  const { listo, configurado } = useAuth();
  if (!listo) return null;
  if (!configurado) return <NoExiste />;
  return <>{children}</>;
}

function NoExiste() {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <p className="text-[15px] font-semibold">No encontramos esta página</p>
      <p className="mx-auto mt-2 max-w-[46ch] text-[14px] text-fg-muted">
        Puede que el enlace esté mal escrito. Probá buscar lo que necesitás con la
        tecla <kbd className="rounded border border-border bg-bg-inset px-1 text-[12px]">/</kbd>.
      </p>
      <a
        href="/"
        className="mt-5 inline-block rounded-[var(--radius-sm)] bg-accent px-4 py-2 text-[14px] font-semibold text-accent-fg"
      >
        Volver al inicio
      </a>
    </div>
  );
}
