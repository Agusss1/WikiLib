import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/content/articles";
import { GLOSSARY } from "@/content/glossary";
import { SOURCES } from "@/content/sources";
import { PATHS } from "@/content/learning";
import { Note, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "WikiLib es un proyecto de La Mises, una organización que busca acercar conocimiento de forma accesible y gratuita a cada rincón de la provincia de Buenos Aires.",
};

const INSTAGRAM = "https://www.instagram.com/la.mises/";

export default function Nosotros() {
  const modulos = PATHS.reduce((n, p) => n + p.modules.length, 0);

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="Nosotros"
        title="Quiénes estamos detrás"
        lead="WikiLib es un proyecto de La Mises."
      />

      <Section title="La Mises">
        <div className="prose">
          <p>
            Somos una organización nueva. Nacimos con una idea sencilla y bastante
            terca: que el conocimiento sobre economía, política e historia argentina
            tendría que estar al alcance de cualquiera que quiera entenderlo, sin
            importar dónde viva ni cuánto pueda pagar.
          </p>
          <p>
            Nuestro objetivo es <strong>compartir ese conocimiento de forma accesible y
            gratuita en cada rincón de la provincia de Buenos Aires</strong>. Accesible
            no quiere decir sólo gratis: quiere decir escrito para que se entienda.
            Buena parte de lo que se publica sobre estos temas está escrito para gente
            que ya sabe, y eso deja afuera justamente a quien más le serviría.
          </p>
          <p>
            Por eso cada artículo de esta Wiki se explica primero en lenguaje simple y
            recién después en profundidad. Alguien de 16 años que nunca leyó nada del
            tema tiene que poder empezar por acá.
          </p>
        </div>
      </Section>

      <Section title="Qué hacemos y qué no">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-[var(--radius)] border border-ok/30 bg-ok-subtle p-5">
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-ok">
              Lo que hacemos
            </p>
            <ul className="space-y-2">
              {[
                "Explicar ideas difíciles en castellano claro.",
                "Citar de dónde sale cada afirmación.",
                "Mostrar las objeciones más fuertes a lo que sostenemos.",
                "Decir cuándo algo está discutido en lugar de simplificarlo.",
                "Mantenerlo gratis y sin publicidad.",
              ].map((x, i) => (
                <li key={i} className="flex gap-2.5 text-[14px] leading-relaxed text-fg-muted">
                  <span aria-hidden className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-ok" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius)] border border-border bg-bg-subtle p-5">
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-fg-subtle">
              Lo que no hacemos
            </p>
            <ul className="space-y-2">
              {[
                "No somos un partido ni hacemos campaña por ninguno.",
                "No inventamos citas ni estadísticas. Nunca.",
                "No presentamos opiniones como si fueran hechos.",
                "No escondemos los desacuerdos internos del liberalismo.",
                "No cobramos ni pedimos registrarse para leer.",
              ].map((x, i) => (
                <li key={i} className="flex gap-2.5 text-[14px] leading-relaxed text-fg-muted">
                  <span aria-hidden className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-border-strong" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Dónde encontrarnos">
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-[var(--radius)] border border-border bg-bg-elevated p-5 transition-all hover:border-accent-border hover:shadow-[var(--shadow)]"
        >
          <span
            aria-hidden
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" stroke="none" />
            </svg>
          </span>
          <span className="min-w-0">
            <span className="block text-[15.5px] font-semibold group-hover:text-accent">
              @la.mises
            </span>
            <span className="mt-0.5 block text-[13.5px] leading-relaxed text-fg-muted">
              Seguinos en Instagram. Ahí publicamos lo nuevo de la Wiki, actividades y
              material breve.
            </span>
          </span>
          <span aria-hidden className="ml-auto shrink-0 text-fg-subtle group-hover:text-accent">
            ↗
          </span>
        </a>
      </Section>

      <Section title="Este sitio, en números">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { n: ARTICLES.length, l: "artículos" },
            { n: SOURCES.length, l: "fuentes citadas" },
            { n: GLOSSARY.length, l: "términos" },
            { n: modulos, l: "módulos de estudio" },
          ].map((x) => (
            <div
              key={x.l}
              className="rounded-[var(--radius)] border border-border bg-bg-elevated p-4"
            >
              <p className="text-[1.75rem] font-bold leading-none tabular-nums tracking-[-0.02em]">
                {x.n}
              </p>
              <p className="mt-1.5 text-[12.5px] text-fg-muted">{x.l}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 max-w-[68ch] text-[14px] leading-relaxed text-fg-muted">
          Preferimos treinta artículos que resistan una lectura exigente antes que
          quinientos armados a las apuradas. Cada uno indica cuándo fue revisado por
          última vez.
        </p>
      </Section>

      <Section title="Cómo se sostiene">
        <Note tone="ok" title="Gracias por entrar">
          Este sitio se mantiene gracias a que alguien lo usa. No hay publicidad, no hay
          muro de pago y no vendemos datos de nadie. Si te sirvió, la mejor forma de
          ayudar es simple: compartilo con alguien a quien le pueda servir, y avisanos
          si encontrás un error.
        </Note>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/estandares"
            className="rounded-[var(--radius-sm)] border border-border px-4 py-2 text-[14px] font-semibold text-fg-muted transition-colors hover:border-accent-border hover:text-accent"
          >
            Nuestros estándares editoriales
          </Link>
          <Link
            href="/contribuir"
            className="rounded-[var(--radius-sm)] border border-border px-4 py-2 text-[14px] font-semibold text-fg-muted transition-colors hover:border-accent-border hover:text-accent"
          >
            Cómo colaborar
          </Link>
        </div>
      </Section>
    </div>
  );
}
