"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchDialog } from "./SearchBox";

export const NAV_SECTIONS: {
  title: string;
  items: { href: string; label: string; note?: string }[];
}[] = [
  {
    title: "Empezar",
    items: [
      { href: "/", label: "Inicio" },
      { href: "/empeza-aca", label: "Empezá acá", note: "Si no sabés nada del tema" },
      { href: "/rutas", label: "Rutas de aprendizaje" },
      { href: "/tests", label: "Tests" },
    ],
  },
  {
    title: "Wiki",
    items: [
      { href: "/wiki", label: "Todas las categorías" },
      { href: "/economia", label: "Economía" },
      { href: "/argentina", label: "Argentina" },
      { href: "/alberdi", label: "Alberdi" },
      { href: "/constitucion", label: "Constitución" },
      { href: "/corrientes", label: "Corrientes" },
      { href: "/vida-real", label: "Liberalismo en la vida real" },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { href: "/diccionario", label: "Diccionario" },
      { href: "/debates", label: "Debates" },
      { href: "/preguntas", label: "Preguntas difíciles" },
      { href: "/que-haria-un-liberal", label: "¿Qué haría un liberal?" },
      { href: "/mapa", label: "Mapa conceptual" },
      { href: "/datos", label: "Argentina en datos" },
      { href: "/preguntale", label: "Preguntale a la Wiki" },
    ],
  },
  {
    title: "Biblioteca",
    items: [
      { href: "/autores", label: "Autores" },
      { href: "/biblioteca", label: "Libros" },
      { href: "/fuentes", label: "Fuentes" },
    ],
  },
  {
    title: "Comunidad",
    items: [
      { href: "/comunidad", label: "Comunidad" },
      { href: "/contribuir", label: "Contribuir" },
      { href: "/perfil", label: "Mi progreso" },
      { href: "/estandares", label: "Estándares editoriales" },
    ],
  },
];

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    const stored = localStorage.getItem("wikilib:theme") as typeof theme | null;
    if (stored) setTheme(stored);
  }, []);

  const apply = (t: typeof theme) => {
    setTheme(t);
    localStorage.setItem("wikilib:theme", t);
    const root = document.documentElement;
    if (t === "system") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", t);
  };

  const next = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
  const glyph = theme === "light" ? "☀" : theme === "dark" ? "☾" : "◐";
  const label =
    theme === "light" ? "Tema claro" : theme === "dark" ? "Tema oscuro" : "Tema del sistema";

  return (
    <button
      onClick={() => apply(next)}
      title={`${label}. Clic para cambiar.`}
      aria-label={`${label}. Clic para cambiar.`}
      className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-sm)] border border-border text-[14px] text-fg-muted transition-colors hover:border-accent-border hover:text-accent"
    >
      <span aria-hidden>{glyph}</span>
    </button>
  );
}

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      const typing =
        el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
      if (!typing && e.key === "/") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-3 px-4 sm:px-6">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="-ml-1 flex h-8 w-8 items-center justify-center rounded-[var(--radius-sm)] text-fg-muted transition-colors hover:bg-bg-subtle lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <span aria-hidden className="text-[18px]">{menuOpen ? "✕" : "☰"}</span>
          </button>

          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <span
              aria-hidden
              className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-accent text-[13px] font-bold text-accent-fg"
            >
              W
            </span>
            <span className="text-[15px] font-bold tracking-[-0.02em]">
              WikiLib
              <span className="ml-1.5 hidden font-normal text-fg-subtle sm:inline">
                Wiki Liberal Argentina
              </span>
            </span>
          </Link>

          <div className="flex-1" />

          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 rounded-[var(--radius-sm)] border border-border bg-bg-subtle px-3 py-1.5 text-[13px] text-fg-subtle transition-colors hover:border-accent-border hover:text-fg-muted"
            aria-label="Buscar"
          >
            <span aria-hidden>⌕</span>
            <span className="hidden sm:inline">Buscar</span>
            <kbd className="ml-2 hidden rounded border border-border bg-bg px-1.5 py-0.5 text-[10px] md:block">
              /
            </kbd>
          </button>

          <ThemeToggle />
        </div>

        {menuOpen && (
          <nav className="thin-scroll max-h-[70vh] overflow-y-auto border-t border-border bg-bg-elevated px-4 py-4 lg:hidden">
            <SidebarLinks pathname={pathname} />
          </nav>
        )}
      </header>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function SidebarLinks({ pathname }: { pathname: string }) {
  return (
    <>
      {NAV_SECTIONS.map((section) => (
        <div key={section.title} className="mb-6 last:mb-0">
          <p className="mb-2 px-2 text-[11px] font-bold uppercase tracking-[0.13em] text-fg-subtle">
            {section.title}
          </p>
          <ul className="space-y-0.5">
            {section.items.map((it) => {
              const active =
                pathname === it.href ||
                (it.href !== "/" && pathname.startsWith(it.href + "/"));
              return (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    className={`block rounded-[var(--radius-sm)] px-2 py-1.5 text-[13.5px] transition-colors ${
                      active
                        ? "bg-accent-subtle font-semibold text-accent"
                        : "text-fg-muted hover:bg-bg-subtle hover:text-fg"
                    }`}
                  >
                    {it.label}
                    {it.note && (
                      <span className="mt-0.5 block text-[11.5px] text-fg-subtle">
                        {it.note}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-60 shrink-0 border-r border-border lg:block">
      <nav className="thin-scroll h-full overflow-y-auto px-3 py-6">
        <SidebarLinks pathname={pathname} />
      </nav>
    </aside>
  );
}
