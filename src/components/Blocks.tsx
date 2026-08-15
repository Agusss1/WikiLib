import Link from "next/link";
import type { Block } from "@/content/schema";
import { getSource } from "@/content/sources";
import { renderInline } from "@/lib/inline";

/**
 * Renderiza los bloques tipados del contenido.
 *
 * Cada tipo de bloque tiene una presentación distinta a propósito: el lector
 * debe poder distinguir de un vistazo un dato de una cita, y una cita de una
 * comparación de posiciones.
 */
export function Blocks({ blocks, idPrefix = "b" }: { blocks: Block[]; idPrefix?: string }) {
  return (
    <>
      {blocks.map((b, i) => (
        <BlockView key={`${idPrefix}-${i}`} block={b} k={`${idPrefix}-${i}`} />
      ))}
    </>
  );
}

const CALLOUT_STYLE: Record<
  Extract<Block, { t: "callout" }>["kind"],
  { box: string; label: string; text: string; glyph: string }
> = {
  dato: { box: "border-info/30 bg-info-subtle", label: "text-info", text: "Dato", glyph: "▮" },
  ojo: { box: "border-warn/30 bg-warn-subtle", label: "text-warn", text: "Ojo", glyph: "△" },
  debate: { box: "border-opinion/30 bg-opinion-subtle", label: "text-opinion", text: "Debate abierto", glyph: "⇄" },
  opinion: { box: "border-opinion/30 bg-opinion-subtle", label: "text-opinion", text: "Interpretación", glyph: "◆" },
  ejemplo: { box: "border-ok/30 bg-ok-subtle", label: "text-ok", text: "Ejemplo", glyph: "●" },
  incertidumbre: { box: "border-warn/30 bg-warn-subtle", label: "text-warn", text: "Incertidumbre", glyph: "?" },
};

function BlockView({ block: b, k }: { block: Block; k: string }) {
  switch (b.t) {
    case "p":
      return <p>{renderInline(b.text, k)}</p>;

    case "h":
      return (
        <h3 className="mb-3 mt-8 text-[1.1rem] font-bold tracking-[-0.01em] text-fg first:mt-0">
          {b.text}
        </h3>
      );

    case "ul":
      return (
        <ul>
          {b.items.map((it, i) => (
            <li key={i}>{renderInline(it, `${k}-${i}`)}</li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol>
          {b.items.map((it, i) => (
            <li key={i}>{renderInline(it, `${k}-${i}`)}</li>
          ))}
        </ol>
      );

    case "quote": {
      const src = getSource(b.sourceId);
      return (
        <figure className="my-6 border-l-[3px] border-accent pl-5">
          <blockquote className="font-serif text-[1.08rem] italic leading-relaxed text-fg">
            «{b.text}»
          </blockquote>
          <figcaption className="mt-2.5 text-[13px] text-fg-subtle">
            — {b.cite}
            {src && (
              <>
                {" · "}
                <Link
                  href={`/fuentes#${src.id}`}
                  className="text-accent hover:underline"
                  title={`${src.title}${src.year ? `, ${src.year}` : ""}`}
                >
                  ver fuente
                </Link>
              </>
            )}
          </figcaption>
        </figure>
      );
    }

    case "callout": {
      const s = CALLOUT_STYLE[b.kind];
      return (
        <aside className={`my-5 rounded-[var(--radius)] border px-4 py-3.5 ${s.box}`}>
          <p className={`mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] ${s.label}`}>
            <span aria-hidden>{s.glyph}</span>
            {s.text}
          </p>
          {b.title && <p className="mb-1 text-[14px] font-semibold text-fg">{b.title}</p>}
          <p className="text-[14px] leading-relaxed text-fg-muted">
            {renderInline(b.text, k)}
          </p>
        </aside>
      );
    }

    case "steps":
      return (
        <ol className="my-5 list-none space-y-3 p-0">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-3.5 p-0">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-subtle text-[12px] font-bold tabular-nums text-accent">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="mb-0.5 text-[15px] font-semibold text-fg">{it.title}</p>
                <p className="text-[14px] leading-relaxed text-fg-muted">
                  {renderInline(it.text, `${k}-${i}`)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "compare":
      return (
        <div
          className={`my-6 grid grid-cols-1 gap-3 ${
            b.columns.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
          }`}
        >
          {b.columns.map((c, i) => (
            <div
              key={i}
              className="rounded-[var(--radius)] border border-border bg-bg-subtle p-4"
            >
              <p className="text-[14px] font-bold text-fg">{c.title}</p>
              {c.subtitle && (
                <p className="mt-0.5 text-[12px] text-fg-subtle">{c.subtitle}</p>
              )}
              <ul className="mt-3 list-none space-y-2 p-0">
                {c.items.map((it, j) => (
                  <li
                    key={j}
                    className="relative pl-4 text-[13.5px] leading-relaxed text-fg-muted before:absolute before:left-0 before:top-[0.62em] before:h-[4px] before:w-[4px] before:rounded-full before:bg-border-strong"
                  >
                    {renderInline(it, `${k}-${i}-${j}`)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case "figure": {
      const src = getSource(b.sourceId);
      return (
        <div className="my-5 rounded-[var(--radius)] border border-border bg-bg-elevated p-4">
          <p className="text-[12px] uppercase tracking-[0.1em] text-fg-subtle">{b.label}</p>
          <p className="mt-1 text-[1.6rem] font-bold tabular-nums leading-none tracking-[-0.02em] text-fg">
            {b.value}
          </p>
          <p className="mt-2.5 text-[12px] text-fg-subtle">
            {b.asOf}
            {src && (
              <>
                {" · Fuente: "}
                <Link href={`/fuentes#${src.id}`} className="text-accent hover:underline">
                  {src.publisher ?? src.title}
                </Link>
              </>
            )}
          </p>
          {b.method && (
            <p className="mt-2 border-t border-border pt-2 text-[12px] leading-relaxed text-fg-subtle">
              {b.method}
            </p>
          )}
        </div>
      );
    }

    case "formula":
      return (
        <div className="my-5 rounded-[var(--radius)] border border-border bg-bg-inset px-4 py-3.5">
          <p className="font-mono text-[14px] leading-relaxed text-fg">{b.text}</p>
          {b.caption && (
            <p className="mt-2 text-[12.5px] leading-relaxed text-fg-subtle">{b.caption}</p>
          )}
        </div>
      );
  }
}
