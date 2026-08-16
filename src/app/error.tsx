"use client";

import { useEffect } from "react";

/**
 * Pantalla de error.
 *
 * La causa más común en un sitio estático es que el navegador conserve un HTML
 * viejo en caché que pide archivos JavaScript que ya no existen, porque el
 * sitio se volvió a publicar. En ese caso no hay nada que el visitante pueda
 * arreglar, así que la página se recupera sola: limpia la caché y recarga.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    const esArchivoViejo =
      error.name === "ChunkLoadError" ||
      /chunk|dynamically imported module|Failed to fetch/i.test(error.message);
    if (esArchivoViejo) void recargarLimpio();
  }, [error]);

  return (
    <div className="mx-auto max-w-lg py-20 text-center">
      <h1 className="text-[1.35rem] font-bold tracking-[-0.02em]">
        Algo se interrumpió
      </h1>
      <p className="mx-auto mt-3 max-w-[44ch] text-[14.5px] leading-relaxed text-fg-muted">
        Puede que haya quedado una versión vieja de la página guardada en tu
        navegador. Recargar suele alcanzar.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => void recargarLimpio()}
          className="rounded-[var(--radius-sm)] bg-accent px-4 py-2 text-[14px] font-semibold text-accent-fg hover:opacity-90"
        >
          Recargar
        </button>
        <button
          onClick={reset}
          className="rounded-[var(--radius-sm)] border border-border px-4 py-2 text-[14px] font-semibold text-fg-muted hover:border-accent-border hover:text-accent"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}

/** Borra cachés y service workers antes de recargar, una sola vez por sesión. */
export async function recargarLimpio() {
  try {
    if (sessionStorage.getItem("wikilib:recargado")) {
      sessionStorage.removeItem("wikilib:recargado");
    } else {
      sessionStorage.setItem("wikilib:recargado", "1");
    }
    if ("caches" in window) {
      const claves = await caches.keys();
      await Promise.all(claves.map((k) => caches.delete(k)));
    }
    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
    }
  } catch {
    // Si el navegador no deja limpiar, igual conviene recargar.
  }
  location.reload();
}
