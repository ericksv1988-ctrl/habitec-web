import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construcción de Casas Costa Rica | Habi-Tec",
  description:
    "Empresa especializada en diseño y construcción de casas en Costa Rica. Más de 14 años de experiencia en proyectos residenciales.",
};

export default function ConstruccionCasas() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-6">
        Construcción de Casas Costa Rica
      </h1>

      <p className="text-lg mb-6">
        En Habi-Tec diseñamos y construimos viviendas personalizadas en todo
        Costa Rica. Nuestro equipo le acompaña desde el diseño arquitectónico
        hasta la entrega final de la obra.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        ¿Qué incluye nuestro servicio?
      </h2>

      <ul className="list-disc ml-6 space-y-2">
        <li>Diseño arquitectónico.</li>
        <li>Planos constructivos.</li>
        <li>Permisos de construcción.</li>
        <li>Construcción por administración.</li>
        <li>Supervisión profesional.</li>
      </ul>

      <a
        href="https://wa.me/50671044293"
        className="inline-block mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Solicitar Cotización
      </a>

    </main>
  );
}