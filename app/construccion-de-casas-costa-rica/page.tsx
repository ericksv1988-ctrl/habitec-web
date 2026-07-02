import { Metadata } from "next";
import ConstruccionCasasArticle from "@/components/ConstruccionCasasArticle";

export const metadata: Metadata = {
  title: "Construcción de Casas en Costa Rica | Habi-Tec",
  description:
    "Guía completa para construir una casa en Costa Rica. Conozca el proceso, permisos, sistemas constructivos y recomendaciones de Habi-Tec.",
};

export default function ConstruccionCasas() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <ConstruccionCasasArticle />
    </main>
  );
}