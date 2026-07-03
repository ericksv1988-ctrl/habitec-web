import { Metadata } from "next";
import ConstruccionCasasArticle from "@/components/ConstruccionCasasArticle";

export const metadata: Metadata = {
  alternates: {
  canonical: "https://habiteccr.com/construccion-de-casas-costa-rica",
},
  title: "Construcción de Casas en Costa Rica | Habi-Tec",
  description:
    "Guía completa para construir una casa en Costa Rica. Conozca el proceso, permisos, sistemas constructivos y recomendaciones de Habi-Tec.",
    keywords: [
  "construcción de casas Costa Rica",
  "construir casa Costa Rica",
  "empresa constructora Costa Rica",
  "diseño y construcción",
  "casas llave en mano",
  "mampostería integral",
  "permisos de construcción Costa Rica",
  "planos constructivos",
  ],
};

export default function ConstruccionCasas() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <ConstruccionCasasArticle />
    </main>
  );
}