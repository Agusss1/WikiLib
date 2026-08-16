/**
 * Cliente de la API de WikiLib.
 *
 * La API son archivos PHP en el mismo dominio que el sitio (`/api/*.php`).
 * Eso tiene dos consecuencias buenas:
 *
 *  - La sesión viaja en una cookie httpOnly en lugar de un token guardado en
 *    localStorage. Un script inyectado en la página no puede leerla.
 *  - No hay CORS ni terceros: todo vive en el hosting propio.
 */

/** En producción es el mismo dominio. En desarrollo se puede apuntar afuera. */
const BASE = process.env.NEXT_PUBLIC_API_BASE ?? "/api";

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/** Si el servidor tarda demasiado, mejor un error claro que una espera sin fin. */
const LIMITE_MS = 12_000;

async function pedir<T>(
  ruta: string,
  opciones: { metodo?: "GET" | "POST"; datos?: unknown } = {},
): Promise<T> {
  const control = new AbortController();
  const temporizador = setTimeout(() => control.abort(), LIMITE_MS);

  try {
    const res = await fetch(`${BASE}/${ruta}`, {
      method: opciones.metodo ?? "GET",
      // Necesario para que la cookie de sesión viaje en cada llamada.
      credentials: "include",
      headers: opciones.datos ? { "Content-Type": "application/json" } : undefined,
      body: opciones.datos ? JSON.stringify(opciones.datos) : undefined,
      signal: control.signal,
    });

    const texto = await res.text();
    let cuerpo: unknown = null;
    try {
      cuerpo = texto ? JSON.parse(texto) : null;
    } catch {
      // El servidor devolvió algo que no es JSON: casi siempre un error de PHP
      // o una página de error del hosting. Mostrar el HTML crudo no ayuda.
      throw new ApiError(
        res.ok
          ? "El servidor devolvió una respuesta inesperada."
          : `El servidor respondió con un error (${res.status}).`,
        res.status,
      );
    }

    if (!res.ok) {
      const msg =
        (cuerpo as { error?: string } | null)?.error ??
        `El servidor respondió con un error (${res.status}).`;
      throw new ApiError(msg, res.status);
    }
    return cuerpo as T;
  } catch (e) {
    if (e instanceof ApiError) throw e;
    if (e instanceof DOMException && e.name === "AbortError") {
      throw new ApiError("El servidor tardó demasiado en responder.", 0);
    }
    throw new ApiError("No se pudo conectar con el servidor.", 0);
  } finally {
    clearTimeout(temporizador);
  }
}

export const api = {
  get: <T,>(ruta: string) => pedir<T>(ruta),
  post: <T,>(ruta: string, datos?: unknown) =>
    pedir<T>(ruta, { metodo: "POST", datos }),
};

export type UsuarioApi = {
  id: number;
  email: string;
  apodo: string;
  verificado: boolean;
};
