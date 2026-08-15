import type { Metadata } from "next";
import Link from "next/link";
import { AskWiki } from "@/components/AskWiki";
import { Note, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Preguntale a la Wiki",
  description: "Preguntá con tus palabras y obtené una respuesta armada con el contenido publicado de la Wiki, con sus fuentes.",
};

export default function Preguntale() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="Asistente"
        title="Preguntale a la Wiki"
        lead="Escribí tu pregunta como se te ocurra. La respuesta se arma con lo que ya está publicado y revisado acá, mostrando siempre de dónde salió cada parte."
      />

      <div className="mb-8">
        <Note tone="info" title="Por qué este asistente no inventa nada">
          No genera texto: <strong>recupera</strong>. Busca los pasajes más relevantes de
          los artículos publicados y te los muestra con su origen. Si la Wiki no cubre el
          tema, te lo dice en lugar de improvisar una respuesta que suene bien. Es una
          decisión editorial: los principios de este proyecto prohíben inventar datos y
          citas, y un modelo generativo sin anclaje puede hacer exactamente eso. Ver{" "}
          <Link href="/estandares" className="text-accent hover:underline">
            estándares editoriales
          </Link>
          .
        </Note>
      </div>

      <AskWiki />
    </div>
  );
}
