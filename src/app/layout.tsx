import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { Header, Sidebar } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "WikiLib — Wiki Liberal Argentina",
    template: "%s · WikiLib",
  },
  description:
    "Base de conocimiento liberal argentina. Aprendé qué es el liberalismo desde cero, entendé la economía y la historia del país, y encontrá argumentos con sus fuentes y sus objeciones.",
  applicationName: "WikiLib",
  keywords: [
    "liberalismo", "Argentina", "Alberdi", "economía", "inflación",
    "Constitución", "libertarismo", "instituciones",
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#16171a" },
  ],
};

/**
 * Evita el parpadeo de tema: aplica la preferencia guardada antes del primer
 * pintado. Debe correr sincrónicamente, por eso va inline.
 */
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('wikilib:theme');if(t&&t!=='system')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
        >
          Saltar al contenido
        </a>
        <Header />
        <div className="mx-auto flex max-w-[1400px]">
          <Sidebar />
          <main id="contenido" className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

export function NotFoundLink() {
  return <Link href="/">Volver al inicio</Link>;
}
