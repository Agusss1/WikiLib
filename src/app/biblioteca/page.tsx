import type { Metadata } from "next";
import Link from "next/link";
import { BOOKS, BOOK_CATEGORY_LABEL, type BookCategory } from "@/content/books";
import { Badge, LevelBadge, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Biblioteca",
  description: "Libros con dificultad, resumen, ideas principales, para quién están recomendados y dónde conseguirlos legalmente.",
};

const ORDER: BookCategory[] = [
  "primeros", "economia", "filosofia", "politica",
  "argentina", "libertarismo", "clasico", "avanzadas", "criticas",
];

export default function Biblioteca() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Biblioteca"
        title="Libros"
        lead="Ordenados por para qué sirven, no por prestigio. Cada ficha dice cuán difícil es, cuántas páginas tiene y para quién está recomendado. Cuando el libro está en dominio público, lo indicamos."
      />

      <nav className="mb-8 flex flex-wrap gap-1.5">
        {ORDER.map((c) => (
          <a
            key={c}
            href={`#${c}`}
            className="rounded-full border border-border bg-bg-subtle px-3 py-1 text-[12.5px] font-medium text-fg-muted transition-colors hover:border-accent-border hover:text-accent"
          >
            {BOOK_CATEGORY_LABEL[c]}
          </a>
        ))}
      </nav>

      {ORDER.map((cat) => {
        const books = BOOKS.filter((b) => b.categories.includes(cat));
        if (books.length === 0) return null;
        return (
          <section key={cat} id={cat} className="mb-10 scroll-mt-24">
            <h2 className="mb-4 border-b border-border pb-2 text-[1.2rem] font-bold tracking-[-0.015em]">
              {BOOK_CATEGORY_LABEL[cat]}
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {books.map((b) => (
                <Link
                  key={b.id}
                  href={`/biblioteca/${b.id}`}
                  className="group flex flex-col rounded-[var(--radius)] border border-border bg-bg-elevated p-4 transition-all hover:border-accent-border hover:shadow-[var(--shadow)]"
                >
                  <h3 className="text-[15px] font-semibold leading-snug group-hover:text-accent">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-fg-subtle">
                    {b.author} · {b.year}
                  </p>
                  <p className="mt-2 line-clamp-3 flex-1 text-[13.5px] leading-relaxed text-fg-muted">
                    {b.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <LevelBadge level={b.difficulty} />
                    <Badge>{b.pages} págs.</Badge>
                    {b.availability && <Badge tone="ok">Dominio público</Badge>}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
