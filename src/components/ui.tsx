import Link from "next/link";
import type { ReactNode } from "react";
import { LEVEL_META } from "@/content/taxonomy";
import type { Level } from "@/content/schema";

export function Badge({
  children,
  tone = "neutral",
  title,
}: {
  children: ReactNode;
  tone?: "neutral" | "accent" | "ok" | "warn" | "danger" | "opinion" | "info";
  title?: string;
}) {
  const tones: Record<string, string> = {
    neutral: "bg-bg-inset text-fg-muted border-border",
    accent: "bg-accent-subtle text-accent border-accent-border",
    ok: "bg-ok-subtle text-ok border-ok/25",
    warn: "bg-warn-subtle text-warn border-warn/25",
    danger: "bg-danger-subtle text-danger border-danger/25",
    opinion: "bg-opinion-subtle text-opinion border-opinion/25",
    info: "bg-info-subtle text-info border-info/25",
  };
  return (
    <span
      title={title}
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-[2px] text-[11px] font-medium leading-none tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function LevelBadge({ level }: { level: Level }) {
  const tone = level === "inicial" ? "ok" : level === "intermedio" ? "info" : "warn";
  return (
    <Badge tone={tone} title={LEVEL_META[level].description}>
      {LEVEL_META[level].label}
    </Badge>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Migas de pan" className="mb-5 text-[13px] text-fg-subtle">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden className="text-border-strong">/</span>}
            {it.href ? (
              <Link href={it.href} className="hover:text-accent transition-colors">
                {it.label}
              </Link>
            ) : (
              <span className="text-fg-muted">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="mb-9 border-b border-border pb-7">
      {eyebrow && (
        <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">
          {eyebrow}
        </p>
      )}
      <h1 className="text-[clamp(1.75rem,4vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em]">
        {title}
      </h1>
      {lead && (
        <p className="mt-3 max-w-[62ch] text-[1.0625rem] leading-relaxed text-fg-muted">
          {lead}
        </p>
      )}
      {children && <div className="mt-5">{children}</div>}
    </header>
  );
}

export function Card({
  href,
  eyebrow,
  title,
  description,
  meta,
  glyph,
}: {
  href: string;
  eyebrow?: string;
  title: string;
  description?: string;
  meta?: ReactNode;
  glyph?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-[var(--radius)] border border-border bg-bg-elevated p-5 shadow-[var(--shadow-sm)] transition-all hover:border-accent-border hover:shadow-[var(--shadow)]"
    >
      {(eyebrow || glyph) && (
        <div className="mb-2 flex items-center gap-2">
          {glyph && <span aria-hidden className="text-accent">{glyph}</span>}
          {eyebrow && (
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-fg-subtle">
              {eyebrow}
            </span>
          )}
        </div>
      )}
      <h3 className="text-[1.02rem] font-semibold leading-snug tracking-[-0.01em] group-hover:text-accent">
        {title}
      </h3>
      {description && (
        <p className="mt-2 line-clamp-3 text-[14px] leading-relaxed text-fg-muted">
          {description}
        </p>
      )}
      {meta && <div className="mt-4 flex flex-wrap items-center gap-2 pt-1">{meta}</div>}
    </Link>
  );
}

export function Section({
  title,
  subtitle,
  action,
  children,
  id,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mb-12">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-[1.35rem] font-bold tracking-[-0.015em]">{title}</h2>
          {subtitle && (
            <p className="mt-1 max-w-[60ch] text-[14px] text-fg-muted">{subtitle}</p>
          )}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export function Grid({
  children,
  cols = 3,
}: {
  children: ReactNode;
  cols?: 2 | 3 | 4;
}) {
  const map = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };
  return <div className={`grid grid-cols-1 gap-4 ${map[cols]}`}>{children}</div>;
}

export function Note({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "warn" | "opinion" | "ok" | "danger";
  title?: string;
  children: ReactNode;
}) {
  const styles: Record<string, string> = {
    info: "border-info/30 bg-info-subtle",
    warn: "border-warn/30 bg-warn-subtle",
    opinion: "border-opinion/30 bg-opinion-subtle",
    ok: "border-ok/30 bg-ok-subtle",
    danger: "border-danger/30 bg-danger-subtle",
  };
  const titleColor: Record<string, string> = {
    info: "text-info",
    warn: "text-warn",
    opinion: "text-opinion",
    ok: "text-ok",
    danger: "text-danger",
  };
  return (
    <div className={`rounded-[var(--radius)] border px-4 py-3.5 ${styles[tone]}`}>
      {title && (
        <p className={`mb-1 text-[13px] font-semibold ${titleColor[tone]}`}>{title}</p>
      )}
      <div className="text-[14px] leading-relaxed text-fg-muted">{children}</div>
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="prose">{children}</div>;
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-[var(--radius)] border border-dashed border-border-strong bg-bg-subtle px-6 py-12 text-center">
      <p className="text-[15px] font-semibold">{title}</p>
      <p className="mx-auto mt-2 max-w-[46ch] text-[14px] text-fg-muted">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
