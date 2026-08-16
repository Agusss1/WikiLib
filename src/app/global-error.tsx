"use client";

/**
 * Último recurso: sólo se usa si falla el propio layout raíz, así que no puede
 * apoyarse en nada del sitio y trae sus estilos en línea.
 */
export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="es-AR">
      <body
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "#fbfbfa",
          color: "#1a1a18",
          display: "grid",
          placeItems: "center",
          minHeight: "100vh",
          margin: 0,
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: "34rem", textAlign: "center" }}>
          <p
            style={{
              margin: "0 0 8px",
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#1c5d99",
              fontWeight: 700,
            }}
          >
            WikiLib
          </p>
          <h1 style={{ margin: "0 0 12px", fontSize: "22px" }}>Algo se interrumpió</h1>
          <p style={{ margin: "0 0 20px", fontSize: "15px", lineHeight: 1.6, color: "#5c5c56" }}>
            Puede que haya quedado una versión vieja guardada en tu navegador.
            Recargar suele alcanzar.
          </p>
          <button
            onClick={() => {
              try {
                if ("caches" in window) caches.keys().then((k) => k.forEach((x) => caches.delete(x)));
              } catch {}
              location.reload();
            }}
            style={{
              background: "#1c5d99",
              color: "#fff",
              border: 0,
              borderRadius: "6px",
              padding: "10px 18px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Recargar
          </button>
          <button
            onClick={reset}
            style={{
              marginLeft: "10px",
              background: "transparent",
              color: "#5c5c56",
              border: "1px solid #e3e3df",
              borderRadius: "6px",
              padding: "10px 18px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Intentar de nuevo
          </button>
        </div>
      </body>
    </html>
  );
}
