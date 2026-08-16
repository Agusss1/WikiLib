import Link from "next/link";
import { ARTICLES_BY_SLUG } from "@/content/articles";
import { CATEGORY_LIST } from "@/content/taxonomy";
import { PATHS } from "@/content/learning";
import { FAQS } from "@/content/debates";
import { HeroSearch } from "@/components/SearchBox";
import { Badge, Card, Grid, LevelBadge, Section } from "@/components/ui";
import { SiHayComunidad } from "@/components/Disponible";

const START_HERE = [
  "que-es-el-liberalismo",
  "libertad",
  "mercado",
  "estado",
  "inflacion",
];

export default function Home() {
  const starters = START_HERE.map((s) => ARTICLES_BY_SLUG[s]).filter(Boolean);

  return (
    <div className="mx-auto max-w-5xl">
      {/* Hero -------------------------------------------------------------- */}
      <section className="py-8 sm:py-12">
        <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
          Aprender · Pensar · Debatir · Participar
        </p>
        <h1 className="max-w-[20ch] text-[clamp(2rem,5.5vw,3.1rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          Una base de conocimiento liberal argentina.
        </h1>
        <p className="mt-4 max-w-[58ch] text-[1.08rem] leading-relaxed text-fg-muted">
          Entrá sin saber nada. Entendé qué es el liberalismo, cómo funciona la economía,
          qué pasó en Argentina y qué se discute realmente. Con fuentes, con las objeciones
          incluidas y sin propaganda.
        </p>

        <div className="mt-8 max-w-2xl">
          <HeroSearch />
          <p className="mt-2.5 text-[12.5px] text-fg-subtle">
            Probá con «por qué sube el dólar», «Alberdi» o «qué es la inflación». También
            podés abrir el buscador con la tecla <kbd className="rounded border border-border bg-bg-inset px-1 text-[11px]">/</kbd>.
          </p>
        </div>
      </section>

      {/* Empezá por acá ---------------------------------------------------- */}
      <Section
        title="Empezá por acá"
        subtitle="Cinco preguntas que abren todo lo demás. No hace falta saber nada previo."
        action={
          <Link href="/empeza-aca" className="text-[13.5px] font-medium text-accent hover:underline">
            Ver la sección completa →
          </Link>
        }
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {starters.map((a) => (
            <Link
              key={a.slug}
              href={`/articulo/${a.slug}`}
              className="group rounded-[var(--radius)] border border-border bg-bg-elevated p-5 transition-all hover:border-accent-border hover:shadow-[var(--shadow)]"
            >
              <h3 className="text-[1.05rem] font-semibold leading-snug tracking-[-0.01em] group-hover:text-accent">
                {a.question ?? a.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-[13.5px] leading-relaxed text-fg-muted">
                {a.summary}
              </p>
              <div className="mt-3.5">
                <LevelBadge level={a.level} />
              </div>
            </Link>
          ))}
          <Link
            href="/rutas/descubri-el-liberalismo"
            className="group flex flex-col justify-between rounded-[var(--radius)] border border-accent-border bg-accent-subtle p-5 transition-all hover:shadow-[var(--shadow)]"
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                Recorrido guiado
              </p>
              <h3 className="mt-2 text-[1.05rem] font-semibold leading-snug tracking-[-0.01em]">
                Tu primer recorrido liberal
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-fg-muted">
                Diez niveles, de la libertad a la economía argentina. Unas tres horas de
                lectura, con progreso guardado.
              </p>
            </div>
            <span className="mt-4 text-[13px] font-semibold text-accent">Empezar →</span>
          </Link>
        </div>
      </Section>

      {/* Categorías -------------------------------------------------------- */}
      <Section
        title="Explorar la Wiki"
        subtitle="Diez áreas. Cada artículo se explica primero simple, después en profundidad, con ejemplo argentino y con sus objeciones."
      >
        <Grid cols={3}>
          {CATEGORY_LIST.map((c) => (
            <Card
              key={c.id}
              href={`/wiki/${c.id}`}
              glyph={c.glyph}
              title={c.title}
              description={c.description}
            />
          ))}
        </Grid>
      </Section>

      {/* Herramientas ------------------------------------------------------ */}
      <Section
        title="Herramientas para pensar"
        subtitle="El objetivo no es que repitas consignas: es que puedas discutir con argumentos."
      >
        <Grid cols={3}>
          <Card
            href="/debates"
            eyebrow="Argumentario"
            title="Debates"
            description="Cada afirmación difícil con el mejor argumento a favor, la respuesta liberal, una objeción fuerte y lo que sigue abierto."
          />
          <Card
            href="/preguntas"
            eyebrow="FAQ"
            title="Preguntas difíciles"
            description="«¿Quién construye las rutas?», «¿Si el mercado funciona por qué hay pobres?». Con respuesta corta y desarrollo."
          />
          <Card
            href="/que-haria-un-liberal"
            eyebrow="Interactivo"
            title="¿Qué haría un liberal?"
            description="Situaciones reales donde elegís una política y ves sus consecuencias, incentivos y quién gana o pierde. Ninguna opción es «la correcta»."
          />
          <Card
            href="/articulo/como-debatir"
            eyebrow="Método"
            title="Cómo debatir"
            description="Steelman, falacias, correlación y causalidad, uso de fuentes y cuándo cambiar de opinión."
          />
          <Card
            href="/mapa"
            eyebrow="Visual"
            title="Mapa conceptual"
            description="Cómo se encadenan libertad, propiedad, mercado y precios. Y cómo se encadenan gasto, déficit, emisión e inflación."
          />
          <Card
            href="/datos"
            eyebrow="Datos"
            title="Argentina en datos"
            description="Qué mide cada indicador, quién lo publica, con qué metodología y qué advertencias tiene antes de citarlo."
          />
        </Grid>
      </Section>

      {/* Rutas ------------------------------------------------------------- */}
      <Section
        title="Rutas de aprendizaje"
        subtitle="Cursos ordenados, con quizzes y progreso guardado en tu navegador."
        action={
          <Link href="/rutas" className="text-[13.5px] font-medium text-accent hover:underline">
            Ver todas →
          </Link>
        }
      >
        <Grid cols={3}>
          {PATHS.slice(0, 3).map((p) => (
            <Card
              key={p.id}
              href={`/rutas/${p.id}`}
              title={p.title}
              description={p.subtitle}
              meta={
                <>
                  <LevelBadge level={p.level} />
                  <Badge>{p.modules.length} módulos</Badge>
                  <Badge>{Math.round(p.minutes / 60)} h aprox.</Badge>
                </>
              }
            />
          ))}
        </Grid>
      </Section>

      {/* Preguntas destacadas ---------------------------------------------- */}
      <Section
        title="Las preguntas incómodas"
        subtitle="Las que más cuesta responder son las que más vale la pena leer."
        action={
          <Link href="/preguntas" className="text-[13.5px] font-medium text-accent hover:underline">
            Ver todas →
          </Link>
        }
      >
        <div className="divide-y divide-border overflow-hidden rounded-[var(--radius)] border border-border bg-bg-elevated">
          {FAQS.slice(0, 5).map((f) => (
            <Link
              key={f.id}
              href={`/preguntas#${f.id}`}
              className="group block px-5 py-4 transition-colors hover:bg-bg-subtle"
            >
              <p className="text-[15px] font-semibold group-hover:text-accent">
                {f.question}
              </p>
              <p className="mt-1 line-clamp-2 text-[13.5px] leading-relaxed text-fg-muted">
                {f.short}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Comunidad + estándares -------------------------------------------- */}
      <Section title="El proyecto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            href="/estandares"
            className="group rounded-[var(--radius)] border border-border bg-bg-elevated p-6 transition-colors hover:border-accent-border"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
              Estándares editoriales
            </p>
            <h3 className="mt-2 text-[1.1rem] font-semibold group-hover:text-accent">
              Por qué podés confiar en esto
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-fg-muted">
              Doce principios verificables: no inventamos citas ni datos, distinguimos
              hechos de opiniones y presentamos las objeciones en su versión más fuerte.
              Cuatro de esos principios están validados automáticamente en cada build.
            </p>
          </Link>
          <SiHayComunidad>
            <Link
              href="/comunidad"
              className="group rounded-[var(--radius)] border border-border bg-bg-elevated p-6 transition-colors hover:border-accent-border"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                Comunidad
              </p>
              <h3 className="mt-2 text-[1.1rem] font-semibold group-hover:text-accent">
                La Wiki es la puerta de entrada
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-fg-muted">
                Debates con gente que estudió los mismos temas. El contenido de la
                comunidad está separado del de la Wiki y siempre señalizado como tal.
              </p>
            </Link>
          </SiHayComunidad>
        </div>
      </Section>

    </div>
  );
}
