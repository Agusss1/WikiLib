import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchResults } from "@/components/SearchResults";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Buscar",
  description: "Buscá en toda la Wiki: artículos, términos, autores, libros, debates y datos.",
};

export default function BuscarPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        title="Buscar"
        lead="El buscador tolera errores de tipeo y entiende lenguaje coloquial. Si escribís «porque sube el dolar» va a encontrar tipo de cambio, emisión, reservas y cepo."
      />
      <Suspense fallback={<p className="text-[14px] text-fg-muted">Cargando…</p>}>
        <SearchResults />
      </Suspense>
    </div>
  );
}
