import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Cliente de Supabase.
 *
 * El sitio es HTML estático alojado en un hosting común, así que no hay
 * servidor propio donde correr la autenticación. Supabase provee cuentas,
 * verificación por email, Google OAuth y Postgres, y el sitio le habla
 * directamente desde el navegador.
 *
 * Devuelve null si no está configurado. Eso es deliberado: la Wiki tiene que
 * seguir funcionando entera —artículos, buscador, rutas, tests— aunque la
 * comunidad no esté conectada. Sólo esa sección se degrada, con un aviso claro
 * en lugar de una pantalla rota.
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!isSupabaseConfigured) return null;
  if (client) return client;
  client = createClient(url!, anonKey!, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      // Necesario para que vuelva del login de Google leyendo el fragmento
      // de la URL, ya que no hay servidor que procese el callback.
      detectSessionInUrl: true,
      flowType: "pkce",
    },
  });
  return client;
}

/** Traduce los errores de Supabase a algo que una persona entienda. */
export function mensajeDeError(raw: string | undefined | null): string {
  if (!raw) return "Algo falló. Probá de nuevo en un momento.";
  const m = raw.toLowerCase();

  if (m.includes("invalid login credentials"))
    return "El email o la contraseña no coinciden.";
  if (m.includes("user already registered") || m.includes("already been registered"))
    return "Ya existe una cuenta con ese email. Probá iniciar sesión.";
  if (m.includes("password should be at least"))
    return "La contraseña tiene que tener al menos 8 caracteres.";
  if (m.includes("unable to validate email") || m.includes("invalid email"))
    return "Ese email no parece válido.";
  if (m.includes("token has expired") || m.includes("expired"))
    return "El código venció. Pedí uno nuevo.";
  if (m.includes("invalid token") || m.includes("otp"))
    return "El código no es correcto. Revisá que sean los 6 dígitos del último mail.";
  if (m.includes("rate limit") || m.includes("too many"))
    return "Demasiados intentos seguidos. Esperá un minuto y probá de nuevo.";
  if (m.includes("duplicate key") && m.includes("apodo"))
    return "Ese apodo ya está en uso. Elegí otro.";
  if (m.includes("row-level security") || m.includes("violates row-level"))
    return "Necesitás verificar tu cuenta antes de publicar.";
  if (m.includes("profiles_apodo_check"))
    return "El apodo debe tener entre 3 y 24 caracteres, sin símbolos raros.";
  if (m.includes("threads_title_check"))
    return "El título tiene que tener entre 8 y 160 caracteres.";
  if (m.includes("threads_body_check"))
    return "El texto del hilo tiene que tener entre 20 y 8000 caracteres.";
  if (m.includes("posts_body_check"))
    return "La respuesta no puede estar vacía.";
  if (m.includes("failed to fetch") || m.includes("networkerror"))
    return "No se pudo conectar. Revisá tu conexión.";
  return raw;
}
