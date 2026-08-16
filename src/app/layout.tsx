import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header, Sidebar } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/lib/auth";
import { Bienvenida } from "@/components/Bienvenida";

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

/**
 * Recuperación ante archivos viejos en caché.
 *
 * Cuando el sitio se vuelve a publicar, los archivos JavaScript cambian de
 * nombre. Un navegador que conservó el HTML anterior pide archivos que ya no
 * existen, y como eso ocurre ANTES de que React arranque, ninguna pantalla de
 * error del sitio llega a mostrarse: el visitante ve una excepción del
 * navegador y una página en blanco.
 *
 * Este script corre antes que todo, detecta ese caso concreto, limpia la caché
 * y recarga una única vez. La marca en sessionStorage evita que un problema
 * distinto provoque un ciclo de recargas.
 */
const RECOVERY_SCRIPT = `(function(){
  var CLAVE='wikilib:recarga', ESPERA=60000;
  function intentoReciente(){
    try{ return Date.now() - Number(sessionStorage.getItem(CLAVE)||0) < ESPERA; }
    catch(e){ return true; }
  }
  function marcar(){ try{ sessionStorage.setItem(CLAVE, String(Date.now())); }catch(e){} }
  function avisar(){
    if(document.getElementById('wl-aviso')) return;
    var d=document.createElement('div');
    d.id='wl-aviso';
    d.setAttribute('style','position:fixed;inset:0;z-index:99999;display:grid;place-items:center;'
      +'padding:24px;background:#fbfbfa;color:#1a1a18;'
      +'font-family:system-ui,-apple-system,sans-serif;text-align:center');
    d.innerHTML='<div style="max-width:32rem">'
      +'<p style="margin:0 0 8px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#1c5d99;font-weight:700">WikiLib</p>'
      +'<h1 style="margin:0 0 12px;font-size:20px">No pudimos cargar la página</h1>'
      +'<p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#5c5c56">'
      +'Puede ser una conexión inestable. Probá recargar; si sigue igual, cerrá y volvé a abrir el navegador.</p>'
      +'<button id="wl-recargar" style="background:#1c5d99;color:#fff;border:0;border-radius:6px;'
      +'padding:10px 18px;font-size:14px;font-weight:600">Recargar</button></div>';
    document.body.appendChild(d);
    var b=document.getElementById('wl-recargar');
    if(b) b.addEventListener('click',function(){ marcar(); location.reload(); });
  }
  function recuperar(){
    // Una sola recuperación por minuto. Sin este freno, un archivo que falta de
    // verdad haría que la página se recargue en bucle para siempre.
    if(intentoReciente()){ avisar(); return; }
    marcar();
    try{
      if(window.caches&&caches.keys){ caches.keys().then(function(ks){ ks.forEach(function(k){ caches.delete(k); }); }); }
      if(navigator.serviceWorker&&navigator.serviceWorker.getRegistrations){
        navigator.serviceWorker.getRegistrations().then(function(rs){ rs.forEach(function(r){ r.unregister(); }); });
      }
    }catch(e){}
    setTimeout(function(){ location.reload(); },150);
  }
  window.addEventListener('error',function(ev){
    var t=ev.target;
    if(t&&(t.tagName==='SCRIPT'||t.tagName==='LINK')){
      var u=t.src||t.href||'';
      if(u.indexOf('/_next/')>-1) recuperar();
      return;
    }
    if(/ChunkLoadError|Loading chunk|dynamically imported module/i.test(String(ev.message||''))) recuperar();
  },true);
  window.addEventListener('unhandledrejection',function(ev){
    var r=ev.reason, m=(r&&(r.name+' '+r.message))||String(r||'');
    if(/ChunkLoadError|Loading chunk|dynamically imported module/i.test(m)) recuperar();
  });
})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: RECOVERY_SCRIPT }} />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
        >
          Saltar al contenido
        </a>
        <AuthProvider>
          <Header />
          <div className="mx-auto flex max-w-[1400px]">
            <Sidebar />
            <main id="contenido" className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10">
              {children}
            </main>
          </div>
          <Footer />
          <Bienvenida />
        </AuthProvider>
      </body>
    </html>
  );
}
