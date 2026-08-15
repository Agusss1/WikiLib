import type { Metadata } from "next";
import { Profile } from "@/components/Profile";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mi progreso",
  description: "Tu nivel, tus rutas, tus tests y tu lista de lectura.",
};

export default function Perfil() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="Tu cuenta"
        title="Mi progreso"
        lead="Lo que leíste, lo que guardaste y cómo vas en cada ruta. Todo se guarda en este navegador: no hace falta registrarse para usarlo."
      />
      <Profile />
    </div>
  );
}
