
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "¿Cuándo necesitas un avalúo inmobiliario? | Habi-Tec Costa Rica",
  description:
    "Conoce cuándo necesitas un avalúo inmobiliario, qué incluye un informe profesional y cómo solicitar una valoración de propiedades en Costa Rica.",
  alternates: {
    canonical:
      "https://www.habiteccr.com/cuando-necesitas-un-avaluo-inmobiliario",
  },
  openGraph: {
    title: "¿Cuándo necesitas un avalúo inmobiliario?",
    description:
      "Guía sobre avalúos de propiedades, valoración comercial y peritajes inmobiliarios en Costa Rica.",
    url: "https://www.habiteccr.com/cuando-necesitas-un-avaluo-inmobiliario",
    type: "article",
    locale: "es_CR",
  },
};

const whatsapp =
  "https://wa.me/50686878320?text=" +
  encodeURIComponent(
    "Hola, deseo información sobre el servicio de avalúos inmobiliarios de Habi-Tec."
  );

export default function BlogAvaluoPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
        <nav
          aria-label="Ruta de navegación"
          className="mb-8 text-sm text-gray-500"
        >
          <Link href="/" className="hover:text-blue-700">
            Inicio
          </Link>
          {" / "}
          <Link href="/#blog" className="hover:text-blue-700">
            Blog
          </Link>
          {" / "}
          <span className="text-gray-700">Avalúos inmobiliarios</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700">
            Avalúos inmobiliarios · Costa Rica
          </p>

          <h1 className="mb-5 text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
            ¿Cuándo necesitas realmente un avalúo inmobiliario y qué incluye?
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            Conocer el valor de una propiedad es fundamental para tomar
            decisiones informadas al vender, comprar, invertir o resolver
            asuntos legales relacionados con un inmueble.
          </p>
        </header>

        <div className="mb-10 rounded-2xl bg-gray-50 p-6 sm:p-8">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            ¿Qué es un avalúo inmobiliario?
          </h2>
          <p className="leading-7">
            Es un estudio técnico que estima el valor de un inmueble en una
            fecha determinada, considerando sus características físicas,
            ubicación, estado de conservación, condiciones del mercado y
            finalidad de la valoración.
          </p>
          <p className="mt-3 leading-7">
            En Habi-Tec, los servicios de valoración se orientan a las
            necesidades específicas de cada cliente y al propósito del informe
            solicitado.
          </p>
        </div>

        <section className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            1. ¿En qué situaciones necesitas un avalúo?
          </h2>

          <h3 className="text-xl font-semibold">
            A. Para vender una propiedad a un precio razonable
          </h3>
          <p className="leading-7">
            Establecer un precio únicamente por intuición puede provocar que
            una propiedad permanezca mucho tiempo en el mercado o se venda
            por debajo de su valor. Un avalúo comercial permite contar con
            una referencia técnica para negociar con mayor fundamento.
          </p>

          <h3 className="text-xl font-semibold">
            B. Para herencias, divorcios y procesos judiciales
          </h3>
          <p className="leading-7">
            La valoración de un inmueble puede ayudar a estimar el patrimonio,
            analizar propuestas de distribución de bienes y aportar evidencia
            técnica en un procedimiento legal. Si el informe se utilizará
            judicialmente, deben verificarse los requisitos particulares del
            proceso y la designación profesional correspondiente.
          </p>

          <h3 className="text-xl font-semibold">
            C. Para préstamos con garantía hipotecaria
          </h3>
          <p className="leading-7">
            Cuando una propiedad se utiliza como garantía, conocer su valor
            estimado ayuda a las partes a evaluar la operación y sus riesgos.
            El avalúo no sustituye el estudio registral, el análisis de
            solvencia ni los demás requisitos legales o financieros.
          </p>

          <h3 className="text-xl font-semibold">
            D. Para seguros, trámites y decisiones de inversión
          </h3>
          <p className="leading-7">
            Una valoración también puede ser útil para revisar el valor de
            determinados activos, estudiar una inversión o aportar información
            para un trámite fiscal, notarial o de aseguramiento. El método y
            el alcance deben ajustarse a la finalidad concreta.
          </p>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            2. ¿Qué incluye un avalúo profesional?
          </h2>

          <h3 className="text-xl font-semibold">
            Inspección y características del inmueble
          </h3>
          <p className="leading-7">
            Según el alcance contratado, se revisan el terreno, las
            construcciones, las áreas, los materiales, los acabados, la
            antigüedad aparente, el estado de conservación y otros elementos
            relevantes para la valoración.
          </p>

          <h3 className="text-xl font-semibold">
            Ubicación y condiciones del entorno
          </h3>
          <p className="leading-7">
            Se analizan factores como accesibilidad, servicios disponibles,
            características de la zona, uso de suelo y restricciones que
            puedan incidir en el aprovechamiento del inmueble.
          </p>

          <h3 className="text-xl font-semibold">
            Investigación del mercado inmobiliario
          </h3>
          <p className="leading-7">
            Se buscan referencias comparables y se analizan sus diferencias
            respecto de la propiedad estudiada. Los precios publicados son
            referencias de oferta y no necesariamente equivalen a precios
            efectivos de venta.
          </p>

          <h3 className="text-xl font-semibold">
            Métodos de valoración
          </h3>
          <ul className="list-disc space-y-2 pl-6 leading-7">
            <li>
              <strong>Enfoque de mercado:</strong> compara el inmueble con
              propiedades similares.
            </li>
            <li>
              <strong>Enfoque de costo:</strong> estima el costo de reposición
              y considera la depreciación aplicable.
            </li>
            <li>
              <strong>Enfoque de ingresos:</strong> analiza la capacidad de
              generar rentas cuando corresponde al tipo de inmueble y a la
              finalidad del estudio.
            </li>
          </ul>

          <h3 className="text-xl font-semibold">
            Informe técnico y documentación
          </h3>
          <p className="leading-7">
            El informe puede incluir identificación del inmueble, finalidad,
            metodología, análisis, fotografías, referencias utilizadas,
            supuestos, limitaciones y conclusión de valor. Los documentos
            concretos dependen del tipo de avalúo y de los requisitos
            aplicables.
          </p>
        </section>

        <section className="mb-10 rounded-2xl border border-gray-200 p-6 sm:p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            3. ¿Qué debes tener a mano para solicitarlo?
          </h2>
          <ul className="list-disc space-y-2 pl-6 leading-7">
            <li>Ubicación exacta de la propiedad.</li>
            <li>Plano catastrado, si está disponible.</li>
            <li>Número de finca o información registral disponible.</li>
            <li>Información sobre terreno y construcciones.</li>
            <li>Motivo del avalúo y entidad destinataria, si corresponde.</li>
          </ul>
          <p className="mt-4 leading-7">
            No todos los casos requieren exactamente los mismos documentos.
            Es recomendable consultar primero el alcance del servicio.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Conclusión: toma decisiones con respaldo técnico
          </h2>
          <p className="leading-7">
            Un avalúo inmobiliario aporta una referencia fundamentada para
            tomar decisiones patrimoniales, comerciales o legales. Su utilidad
            depende de que el informe responda al propósito solicitado y
            utilice una metodología apropiada.
          </p>
        </section>

        <section className="rounded-2xl bg-slate-900 p-7 text-white sm:p-10">
          <h2 className="mb-4 text-2xl font-bold">
            ¿Necesitas un avalúo inmobiliario?
          </h2>
          <p className="mb-6 leading-7 text-gray-200">
            En Habi-Tec brindamos servicios profesionales de ingeniería civil
            y valoración de inmuebles. Consultá la disponibilidad del servicio
            para tu propiedad en la zona sur de Costa Rica y los requisitos
            según la finalidad del informe.
          </p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-gray-100"
          >
            Solicitar información por WhatsApp
          </a>
        </section>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <Link
            href="/"
            className="font-medium text-blue-700 hover:underline"
          >
            ← Volver a Habi-Tec
          </Link>
        </div>
      </article>
    </main>
  );
}
