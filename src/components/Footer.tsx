import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-bg-subtle">
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[15px] font-bold tracking-[-0.02em]">WikiLib</p>
            <p className="mt-1.5 max-w-[34ch] text-[13px] leading-relaxed text-fg-muted">
              Aprender. Pensar. Debatir. Participar.
            </p>
            <p className="mt-3 max-w-[34ch] text-[12.5px] leading-relaxed text-fg-subtle">
              Un proyecto de <Link href="/nosotros" className="text-accent hover:underline">La Mises</Link>,
              para acercar conocimiento accesible y gratuito a cada rincón de la
              provincia de Buenos Aires.
            </p>
            <a
              href="https://www.instagram.com/la.mises/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[12.5px] font-medium text-accent hover:underline"
            >
              @la.mises en Instagram ↗
            </a>
          </div>
          {[
            {
              title: "Aprender",
              links: [
                ["/empeza-aca", "Empezá acá"],
                ["/rutas", "Rutas"],
                ["/tests", "Tests"],
                ["/diccionario", "Diccionario"],
              ],
            },
            {
              title: "Pensar",
              links: [
                ["/debates", "Debates"],
                ["/preguntas", "Preguntas difíciles"],
                ["/que-haria-un-liberal", "¿Qué haría un liberal?"],
                ["/articulo/como-debatir", "Cómo debatir"],
              ],
            },
            {
              title: "El proyecto",
              links: [
                ["/nosotros", "Nosotros"],
                ["/estandares", "Estándares editoriales"],
                ["/fuentes", "Fuentes"],
                ["/contribuir", "Contribuir"],
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.13em] text-fg-subtle">
                {col.title}
              </p>
              <ul className="space-y-1.5">
                {col.links.map(([href, label]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[13px] text-fg-muted transition-colors hover:text-accent"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-9 border-t border-border pt-5">
          <p className="max-w-[80ch] text-[12.5px] leading-relaxed text-fg-subtle">
            Este sitio distingue hechos de interpretaciones, cita sus fuentes y presenta
            las objeciones en su versión más fuerte. Cuando algo está discutido, lo dice.
            Si encontrás un error, una cita mal atribuida o un dato sin respaldo,{" "}
            <Link href="/contribuir" className="text-accent hover:underline">
              avisanos
            </Link>
            : la credibilidad es el activo principal del proyecto.
          </p>
        </div>
      </div>
    </footer>
  );
}
