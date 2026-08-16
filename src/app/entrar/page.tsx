import type { Metadata } from "next";
import { FormularioCuenta } from "@/components/Auth";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Entrar",
  description: "Creá tu cuenta para participar en la comunidad de WikiLib.",
};

export default function Entrar() {
  return (
    <div className="mx-auto max-w-md py-4">
      <PageHeader
        eyebrow="Cuenta"
        title="Entrar a WikiLib"
        lead="Leer no requiere cuenta. La necesitás para participar de los debates."
      />
      <FormularioCuenta />
    </div>
  );
}
