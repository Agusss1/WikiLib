import type { Metadata } from "next";
import { PATHS } from "@/content/learning";
import { PathCards } from "@/components/PathProgress";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Rutas de aprendizaje",
  description: "Cursos ordenados por módulos, con lecturas, preguntas y quizzes. El progreso se guarda en tu navegador.",
};

export default function Rutas() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Cursos"
        title="Rutas de aprendizaje"
        lead="Cada ruta es un recorrido ordenado: módulos con una lectura, preguntas para pensar y un quiz. Tu progreso se guarda en este navegador, sin necesidad de crear una cuenta."
      />
      <PathCards paths={PATHS} />
    </div>
  );
}
