import type { Metadata } from "next";
import { Suspense } from "react";
import { DetalleHilo } from "@/components/Foro";
import { Breadcrumbs } from "@/components/ui";
import { PaginaDeComunidad } from "@/components/Disponible";

export const metadata: Metadata = {
  title: "Debate",
  description: "Discusión de la comunidad de WikiLib.",
};

export default function HiloPage() {
  return (
    <PaginaDeComunidad>
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs
          items={[{ label: "Comunidad", href: "/comunidad" }, { label: "Debate" }]}
        />
        <Suspense fallback={<p className="text-[14px] text-fg-muted">Cargando…</p>}>
          <DetalleHilo />
        </Suspense>
      </div>
    </PaginaDeComunidad>
  );
}
