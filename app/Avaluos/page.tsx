import Link from "next/link";

export const metadata = {
  title: "Avalúos de Propiedades en Zona Sur de Costa Rica. | Habi-Tec",
  description:
    "Avalúos de casas, terrenos y construcciones en Zona Sur de Costa Rica. Valoración profesional para compra, venta, financiamiento, procesos judiciales como conciliaciones de divorcios o reparticion de herencias y otros fines.",
  keywords: [
    "avalúos Costa Rica",
    "avalúo de propiedades Costa Rica",
    "avalúo de casas",
    "avalúo de terrenos",
    "valoración de propiedades",
    "avalúos inmobiliarios",
    "avalúos judiciales",
    "avalúos para divorcios",
    "peritajes de propiedades",
    "avalúos Ciudad neily",
    "avalúos paso canoas",
    "avalúos buenos aires",
    "avalúos zona sur",
    "avalúos uvita",
    "avalúos osa",
    "avalúos Pérez Zeledón",
  ],
};

const whatsappNumber = "50686878320";

export default function AvaluosPage() {
  const whatsappMessage = encodeURIComponent(
    "Hola Habi-Tec, quisiera solicitar información sobre un avalúo de una propiedad."
  );

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          <div className="max-w-4xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-300">
              Avalúos y valoración de propiedades
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Avalúos de propiedades en Zona Sur de Costa Rica
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Conozca el valor de una casa, terreno o construcción mediante
              una valoración técnica basada en las características de la
              propiedad, su ubicación y las condiciones del mercado.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href={`https://wa.me/86878320`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-500"
              >
                Solicitar un avalúo
              </a>

              <a
                href="#servicios"
                className="rounded-lg border border-white/30 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Ver servicios
              </a>

            </div>

          </div>
        </div>
      </section>


      {/* INTRODUCCIÓN */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Valoración profesional
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Necesita conocer el valor de una propiedad?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Un avalúo permite determinar un valor estimado de una propiedad
              considerando factores como el terreno, las construcciones,
              ubicación, características físicas, estado de conservación y
              referencias del mercado.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              En Habi-Tec realizamos valoraciones de terrenos, viviendas,
              edificaciones y otros bienes inmuebles según el objetivo
              específico del cliente.
            </p>

          </div>

          <div className="rounded-2xl bg-slate-100 p-8">

            <h3 className="text-xl font-bold">
              Un avalúo puede ser útil para:
            </h3>

            <ul className="mt-6 space-y-4 text-gray-700">

              <li className="flex gap-3">
                <span className="font-bold text-blue-600">✓</span>
                Compra o venta de una propiedad
              </li>

              <li className="flex gap-3">
                <span className="font-bold text-blue-600">✓</span>
                Procesos de financiamiento
              </li>

              <li className="flex gap-3">
                <span className="font-bold text-blue-600">✓</span>
                División o distribución de bienes
              </li>

              <li className="flex gap-3">
                <span className="font-bold text-blue-600">✓</span>
                Procesos judiciales y periciales
              </li>

              <li className="flex gap-3">
                <span className="font-bold text-blue-600">✓</span>
                Conocer el valor de mercado de un inmueble
              </li>

            </ul>

          </div>

        </div>

      </section>


      {/* SERVICIOS */}
      <section
        id="servicios"
        className="bg-slate-50 py-20"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Servicios de valoración
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Avalúos según las necesidades de cada propiedad
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Analizamos las características físicas y económicas del inmueble
              para establecer una valoración acorde con el propósito del
              avalúo.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-200">

              <div className="text-3xl">🏠</div>

              <h3 className="mt-5 text-xl font-bold">
                Avalúos de viviendas
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Valoración de casas y edificaciones residenciales considerando
                características constructivas, ubicación, estado de
                conservación y referencias comparables.
              </p>

            </div>


            {/* CARD 2 */}
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-200">

              <div className="text-3xl">🌳</div>

              <h3 className="mt-5 text-xl font-bold">
                Avalúos de terrenos
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Análisis del valor del terreno considerando ubicación,
                características físicas, accesibilidad, entorno y condiciones
                que puedan influir en su valor.
              </p>

            </div>


            {/* CARD 3 */}
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-200">

              <div className="text-3xl">🏗️</div>

              <h3 className="mt-5 text-xl font-bold">
                Avalúos de construcciones
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Valoración de edificaciones existentes considerando sus
                características constructivas, dimensiones, edad, estado y
                condiciones particulares.
              </p>

            </div>


            {/* CARD 4 */}
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-200">

              <div className="text-3xl">⚖️</div>

              <h3 className="mt-5 text-xl font-bold">
                Avalúos y peritajes
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Valoraciones técnicas para procesos donde sea necesario
                establecer o analizar el valor de una propiedad o construcción.
              </p>

            </div>


            {/* CARD 5 */}
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-200">

              <div className="text-3xl">📊</div>

              <h3 className="mt-5 text-xl font-bold">
                Valoración para compra o venta
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Una valoración puede ayudar al propietario o comprador a contar
                con una referencia técnica antes de negociar una propiedad.
              </p>

            </div>


            {/* CARD 6 */}
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-200">

              <div className="text-3xl">📋</div>

              <h3 className="mt-5 text-xl font-bold">
                Valoraciones especiales
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Análisis de propiedades con condiciones particulares que
                requieren una valoración adaptada al objetivo específico del
                cliente.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PROCESO */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Proceso de trabajo
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            ¿Cómo realizamos un avalúo?
          </h2>

        </div>


        <div className="mt-12 grid gap-8 md:grid-cols-4">

          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
              1
            </div>

            <h3 className="mt-5 font-bold">
              Información inicial
            </h3>

            <p className="mt-2 text-gray-600">
              Conocemos la propiedad y el objetivo para el cual se necesita la
              valoración.
            </p>
          </div>


          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
              2
            </div>

            <h3 className="mt-5 font-bold">
              Inspección
            </h3>

            <p className="mt-2 text-gray-600">
              Se revisan las características físicas del terreno y las
              construcciones existentes.
            </p>
          </div>


          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
              3
            </div>

            <h3 className="mt-5 font-bold">
              Análisis
            </h3>

            <p className="mt-2 text-gray-600">
              Se analizan las condiciones de la propiedad y la información
              disponible para determinar su valor.
            </p>
          </div>


          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
              4
            </div>

            <h3 className="mt-5 font-bold">
              Informe
            </h3>

            <p className="mt-2 text-gray-600">
              Se entrega el resultado de la valoración de acuerdo con el
              alcance definido para el servicio.
            </p>
          </div>

        </div>

      </section>


      {/* ZONAS */}
      <section className="bg-slate-950 py-20 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              Cobertura
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Avalúos en diferentes zonas de Costa Rica
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Atendemos solicitudes de valoración de propiedades en distintas
              zonas del país, coordinando la inspección según la ubicación y
              las características del inmueble.
            </p>

          </div>


          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "Coto Brus",
              "San Vito",
              "Ciudad Neily",
              "Paso Canoas",
              "Golfito",
              "Osa",
              "Pérez Zeledón",
              "Buenos Aires",
              "Parrita",
              "Quepos",
            ].map((zona) => (
              <span
                key={zona}
                className="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-200"
              >
                {zona}
              </span>
            ))}

          </div>

        </div>

      </section>


      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">

        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Preguntas frecuentes sobre avalúos
        </h2>


        <div className="mt-10 divide-y divide-gray-200">

          <details className="group py-6">
            <summary className="cursor-pointer list-none text-lg font-semibold">
              ¿Qué información se necesita para solicitar un avalúo?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Inicialmente se puede solicitar información básica de la
              propiedad, plano catastro, su ubicación y el propósito del avalúo. Dependiendo
              del caso, pueden requerirse documentos adicionales.
            </p>
          </details>


          <details className="group py-6">
            <summary className="cursor-pointer list-none text-lg font-semibold">
              ¿Se debe visitar la propiedad?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Para una valoración que requiera conocer las condiciones físicas
              del inmueble, normalmente es necesaria una inspección de la
              propiedad.
            </p>
          </details>


          <details className="group py-6">
            <summary className="cursor-pointer list-none text-lg font-semibold">
              ¿Pueden realizar avalúos de terrenos?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Sí. La valoración puede enfocarse en el terreno, en las
              construcciones existentes o en ambos, dependiendo del objetivo
              del servicio.
            </p>
          </details>


          <details className="group py-6">
            <summary className="cursor-pointer list-none text-lg font-semibold">
              ¿Cuánto cuesta un avalúo?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              El costo depende principalmente de la ubicación, tipo de
              propiedad, características del inmueble y alcance requerido.
              Para obtener una cotización es necesario conocer primero los
              datos básicos de la propiedad.
            </p>
          </details>

        </div>

      </section>


      {/* CTA FINAL */}
      <section className="bg-blue-600 py-16 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <h2 className="text-3xl font-bold sm:text-4xl">
            ¿Necesita conocer el valor de una propiedad?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Cuéntenos dónde se encuentra la propiedad y qué tipo de avalúo
            necesita. Podemos revisar su caso y orientarle sobre el servicio
            adecuado.
          </p>

          <a
            href={`https://wa.me/86878320`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-blue-700 transition hover:bg-gray-100"
          >
            Solicitar información
          </a>

        </div>

      </section>


      {/* NAVEGACIÓN */}
      <section className="border-t bg-white py-8">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-center text-sm text-gray-600 sm:flex-row sm:justify-center sm:gap-8 lg:px-8">

          <Link
            href="/"
            className="transition hover:text-blue-600"
          >
            Inicio
          </Link>

          <Link
            href="/ingenieria-civil"
            className="transition hover:text-blue-600"
          >
            Ingeniería Civil
          </Link>

          <Link
            href="/construccion"
            className="transition hover:text-blue-600"
          >
            Construcción
          </Link>

          <Link
            href="/permisos-de-construccion"
            className="transition hover:text-blue-600"
          >
            Permisos de construcción
          </Link>

        </div>

      </section>

    </main>
  );
}