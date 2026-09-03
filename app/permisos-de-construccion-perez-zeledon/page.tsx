import Link from "next/link";

export const metadata = {
  title: "Permisos de Construcción en Pérez Zeledón | Habi-Tec",
  description:
    "Gestión de permisos de construcción en Pérez Zeledón. Habi-Tec brinda asesoría, planos, ingeniería y acompañamiento para tramitar proyectos de construcción en Pérez Zeledón y zonas cercanas.",
  keywords: [
    "permisos de construcción Pérez Zeledón",
    "permiso de construcción Pérez Zeledón",
    "trámite permiso construcción Pérez Zeledón",
    "permisos de construcción San Isidro de El General",
    "planos construcción Pérez Zeledón",
    "ingeniería civil Pérez Zeledón",
    "arquitectura Pérez Zeledón",
    "permisos construcción Buenos Aires Costa Rica",
  ],
};

const whatsappNumber = "50686878320";

export default function PermisosConstruccionPerezZeledonPage() {
  const whatsappMessage = encodeURIComponent(
    "Hola HabiTec, quiero consultar sobre un permiso de construcción en Pérez Zeledón."
  );

  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.20),_transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
              Habi-Tec · Arquitectura, Ingeniería y Construcción
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Permisos de Construcción en Pérez Zeledón
            </h1>

              <h2 className="text-lg font-medium leading-relaxed tracking-normal text-gray-200 sm:text-xl lg:text-2x">
              Arquitectura, ingeniería y construcción para su proyecto en Pérez Zeledón
              </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              ¿Va a construir, ampliar o remodelar una propiedad en Pérez
              Zeledón? En Habi-Tec le ayudamos a organizar el proceso técnico
              necesario para llevar su proyecto desde la idea y los planos
              hasta la gestión del permiso de construcción.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/50686878320"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-7 py-4 font-semibold text-white transition hover:bg-sky-400"
              >
                Consultar mi proyecto
              </a>

              <a
                href="#proceso"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Ver cómo funciona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
              Pérez Zeledón
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Un permiso de construcción comienza mucho antes de presentar el
              trámite
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Muchas personas piensan que solicitar un permiso de
                construcción consiste únicamente en llenar un formulario.
                En realidad, dependiendo del proyecto, antes de llegar al
                trámite pueden ser necesarios planos, información del terreno,
                criterios técnicos, alineamientos, disponibilidad de servicios
                y documentación adicional.
              </p>

              <p>
                Por eso en Habi-Tec no nos enfocamos solamente en presentar un
                trámite. Buscamos revisar el proyecto desde el punto de vista
                de arquitectura e ingeniería para reducir problemas durante el
                proceso.
              </p>

              <p>
                La Municipalidad de Pérez Zeledón dispone de trámites y
                documentación específica para permisos de construcción,
                incluyendo requisitos diferenciados según el tipo de obra.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-900">
              ¿Qué podemos hacer por usted?
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Revisión inicial de la propiedad",
                "Orientación sobre el proceso",
                "Diseño arquitectónico",
                "Planos constructivos",
                "Ingeniería civil",
                "Preparación y gestión del trámite",
                "Seguimiento del proceso",
                "Asesoría para proyectos nuevos, ampliaciones y remodelaciones",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                    ✓
                  </span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EL PROBLEMA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
              Evite empezar por el lugar equivocado
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Antes de solicitar el permiso de construccion, revisemos si su proyecto está
              listo
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "¿Se puede construir en el terreno?",
                text: "Revisamos la información disponible de la propiedad y los aspectos que pueden afectar la viabilidad del proyecto.",
              },
              {
                title: "¿Necesita planos?",
                text: "Si el proyecto requiere diseño arquitectónico y planos constructivos, podemos integrar esta etapa dentro del servicio.",
              },
              {
                title: "¿Necesita ingeniería?",
                text: "Cuando el proyecto requiere componentes de ingeniería, podemos coordinar la parte técnica como parte del proceso.",
              },
              {
                title: "¿Es una ampliación?",
                text: "También podemos orientarle cuando el proyecto consiste en ampliar o modificar una construcción existente.",
              },
              {
                title: "¿Es una remodelación?",
                text: "Analizamos el alcance de la intervención para determinar qué documentación y gestión puede requerir.",
              },
              {
                title: "¿Ya tiene planos?",
                text: "Si ya cuenta con documentación técnica, podemos revisar qué falta para avanzar con el proceso.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
            Nuestro proceso
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            De la consulta al permiso de construcción
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Cada proyecto es diferente. Por eso primero conocemos su propiedad
            y el tipo de obra antes de definir el camino técnico más adecuado.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Conocemos el proyecto",
              text: "Conversamos sobre la propiedad, el tipo de construcción y lo que usted desea realizar.",
            },
            {
              number: "02",
              title: "Revisamos lo necesario",
              text: "Identificamos la documentación, planos y aspectos técnicos que deben considerarse.",
            },
            {
              number: "03",
              title: "Preparamos el proyecto",
              text: "Integramos arquitectura e ingeniería cuando el proyecto lo requiere.",
            },
            {
              number: "04",
              title: "Gestionamos el trámite",
              text: "Acompañamos el proceso de presentación y seguimiento correspondiente.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <span className="text-4xl font-bold text-sky-500">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIPOS DE PROYECTO */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">
              Proyectos
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Permisos para diferentes tipos de construcción
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Podemos orientarle según el tipo y alcance de la obra que desea
              realizar en Pérez Zeledón.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Casas de habitación",
              "Ampliaciones",
              "Remodelaciones",
              "Locales comerciales",
              "Bodegas",
              "Apartamentos",
              "Oficinas",
              "Obras complementarias",
              "Otros proyectos constructivos",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIO INTEGRAL */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl bg-sky-50 p-8 sm:p-12">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Más que un trámite
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Si necesita permiso, también podemos ayudarle con el proyecto
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Una de las ventajas de trabajar con Habi-Tec es que el proceso
              puede integrar diferentes servicios profesionales. Si todavía
              no tiene los planos, necesita ingeniería o está apenas
              definiendo qué quiere construir, podemos acompañarle desde esa
              etapa.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Link
                href="/diseno-arquitectonico"
                className="rounded-xl bg-white p-5 font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5"
              >
                Diseño arquitectónico →
              </Link>

              <Link
                href="/ingenieria-civil"
                className="rounded-xl bg-white p-5 font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5"
              >
                Ingeniería civil →
              </Link>

              <Link
                href="/construccion-por-administracion"
                className="rounded-xl bg-white p-5 font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5"
              >
                Construcción →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
                Atención regional
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Pérez Zeledón y zonas cercanas
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Habi-Tec orienta y desarrolla proyectos de arquitectura e
                ingeniería para clientes de Pérez Zeledón y otras zonas de la
                región sur.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                También podemos valorar proyectos provenientes de
                <strong> Buenos Aires de Puntarenas</strong> y comunidades
                cercanas, especialmente cuando requieren diseño, ingeniería,
                permisos o una solución integral.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-bold text-slate-900">
                ¿Dónde podemos atenderle?
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "San Isidro de El General",
                  "Daniel Flores",
                  "Rivas",
                  "San Pedro",
                  "Platanares",
                  "Pejibaye",
                  "Cajón",
                  "Barú",
                  "Río Nuevo",
                  "Páramo",
                  "La Amistad",
                  "Buenos Aires",
                ].map((place) => (
                  <span
                    key={place}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-sky-600">
          Preguntas frecuentes
        </p>

        <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          Preguntas sobre permisos de construcción en Pérez Zeledón
        </h2>

        <div className="mt-12 divide-y divide-slate-200">
          {[
            {
              q: "¿Habi-Tec tramita permisos de construcción en Pérez Zeledón?",
              a: "Sí. Podemos orientarle y gestionar la parte profesional del proceso según las características de su proyecto, incluyendo arquitectura, planos e ingeniería cuando corresponda.",
            },
            {
              q: "¿Puedo contratar solamente el trámite del permiso?",
              a: "Depende de la situación del proyecto y de la documentación con la que ya cuente. Primero revisamos qué tiene avanzado y qué hace falta.",
            },
            {
              q: "¿También hacen los planos de la casa?",
              a: "Sí. Habi-Tec ofrece servicios de diseño arquitectónico e ingeniería, por lo que podemos integrar el desarrollo de los planos al proceso cuando sea necesario.",
            },
            {
              q: "¿Atienden ampliaciones y remodelaciones?",
              a: "Sí. Podemos revisar proyectos de ampliación, remodelación y otros tipos de intervención para determinar el alcance profesional y los trámites correspondientes.",
            },
            {
              q: "¿Trabajan solamente en San Isidro de El General?",
              a: "No. La atención se dirige al cantón de Pérez Zeledón y podemos valorar proyectos en sus diferentes distritos y comunidades, además de otras zonas cercanas.",
            },
            {
              q: "¿Puedo consultar mi proyecto antes de contratar?",
              a: "Sí. El primer paso es conocer qué desea construir, dónde se encuentra la propiedad y qué documentación tiene disponible para indicarle el camino más conveniente.",
            },
          ].map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold text-slate-900">
                {item.q}

                <span className="text-2xl text-sky-500 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 pr-8 leading-7 text-slate-600">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-sky-600">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            ¿Está pensando construir en Pérez Zeledón?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-sky-50">
            Cuéntenos qué desea construir, dónde se encuentra la propiedad y
            qué documentación tiene disponible. Revisaremos su caso y le
            indicaremos cómo podemos ayudarle.
          </p>

          <div className="mt-9">
            <a
              href="https://wa.me/50686878320"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-sky-700 shadow-lg transition hover:bg-slate-50"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}