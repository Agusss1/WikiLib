import Link from "next/link";
import { EmptyState } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl py-16">
      <EmptyState
        title="No encontramos esta página"
        description="Puede que el artículo todavía no exista o que el enlace esté mal. Probá buscar el tema con la tecla / o proponelo como artículo nuevo."
        action={
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-[var(--radius-sm)] bg-accent px-4 py-2 text-[14px] font-semibold text-accent-fg"
            >
              Volver al inicio
            </Link>
            <Link
              href="/contribuir"
              className="rounded-[var(--radius-sm)] border border-border px-4 py-2 text-[14px] font-semibold"
            >
              Proponer el artículo
            </Link>
          </div>
        }
      />
    </div>
  );
}
