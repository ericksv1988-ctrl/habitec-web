import Link from "next/link";

export const metadata = {
  title:
    "Constructora en Osa | Casas de Playa, Diseño e Ingeniería | Habi-Tec",
  description:
    "Diseño, ingeniería y construcción de casas de playa, viviendas, proyectos turísticos y propiedades de descanso en Osa, Uvita, Dominical, Bahía Ballena y comunidades cercanas.",
  keywords: [
    "constructora en Osa",
    "constructora Osa Costa Rica",
    "construcción de casas en Osa",
    "casas de playa Osa",
    "constructora en Uvita",
    "constructora en Dominical",
    "casas en Uvita Costa Rica",
    "diseño de casas de playa",
    "construcción de casas en Dominical",
    "ingeniería civil Osa",
    "planos de construcción Osa",
    "permisos de construcción Osa",
    "casas para Airbnb Osa",
  ],
};

export default function ConstructoraOsa() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 opacity-95" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Habi-Tec · Arquitectura, Ingeniería y Construcción
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Construcción de casas en Osa
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-300">
              Diseñamos y desarrollamos casas de playa, viviendas de descanso
              y proyectos residenciales adaptados al clima, el terreno y el
              entorno natural de Osa, Uvita, Dominical y Bahía Ballena.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="https://wa.me/50686878320"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
              >
                Consultar mi proyecto
              </a>

              <Link
                href="/"
                className="rounded-lg border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Conocer Habi-Tec
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Construir en Osa
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Una casa en Osa debe responder al lugar donde se construye
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Osa combina montaña, bosque tropical, playas, ríos y comunidades
              costeras con una creciente actividad turística. Esto hace que
              cada proyecto tenga condiciones particulares de terreno,
              orientación, clima, accesibilidad y uso.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              En Habi-Tec desarrollamos proyectos considerando esas condiciones
              desde las primeras etapas del diseño. El objetivo es que la
              arquitectura, la ingeniería y la construcción trabajen como un
              solo proyecto.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Ya sea una vivienda para disfrutar en familia, una casa de playa,
              una propiedad para alquiler vacacional o un proyecto residencial,
              podemos acompañarle desde la idea inicial hasta la construcción.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-100 p-8">
            <h3 className="text-2xl font-bold">
              Proyectos pensados para Osa
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              {[
                "Casas de playa",
                "Casas de descanso",
                "Viviendas residenciales",
                "Propiedades para alquiler vacacional",
                "Remodelaciones",
                "Proyectos turísticos",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      ✓
                    </span>

                    <span className="font-medium text-gray-800">
                      {item}
                    </span>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>


      {/* CASAS DE PLAYA / TURISMO */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Casas de playa y propiedades de descanso
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Diseñar una propiedad para disfrutarla también es diseñar una
              experiencia
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Una casa en Osa puede tener un propósito muy diferente al de una
              vivienda convencional. Puede ser una segunda residencia, una
              propiedad para vacaciones, una casa para compartir con familiares
              o un proyecto pensado para alquiler turístico.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Por eso estudiamos aspectos como la relación entre espacios
              interiores y exteriores, ventilación, iluminación natural,
              terrazas, áreas sociales, privacidad, mantenimiento y
              características del terreno.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <article className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-3xl">🌴</div>

              <h3 className="mt-5 text-xl font-bold">
                Casas para descanso
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Espacios diseñados para aprovechar el entorno natural, la
                privacidad y las condiciones particulares del terreno.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-3xl">🏡</div>

              <h3 className="mt-5 text-xl font-bold">
                Alquiler vacacional
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Proyectos residenciales que pueden incorporar criterios de
                funcionalidad, mantenimiento y experiencia del huésped.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-3xl">🌿</div>

              <h3 className="mt-5 text-xl font-bold">
                Integración con el entorno
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Diseño que busca aprovechar las vistas, la vegetación, la
                topografía y las características naturales del sitio.
              </p>
            </article>

          </div>

        </div>
      </section>


      {/* UBICACIONES */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Cobertura regional
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Proyectos en Osa y el Pacífico Sur
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Atendemos proyectos en diferentes comunidades de Osa y zonas
            cercanas, coordinando cada servicio según las características del
            terreno y el alcance del proyecto.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            "Uvita",
            "Dominical",
            "Bahía Ballena",
            "Playa Blanca",
            "Osa",
            "Sierpe",
            "Piedras Blancas",
            "Bosque de Osa",
            "Playa Hermosa",
            "Coronado",
            "Dominicalito",
            "Palmar Norte",
          ].map((zone) => (
            <div
              key={zone}
              className="rounded-xl border border-gray-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="font-semibold text-gray-900">
                {zone}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Diseño · Ingeniería · Construcción
              </p>
            </div>
          ))}

        </div>

      </section>


      {/* SERVICIOS */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
              Servicios Habi-Tec
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Desde el terreno hasta la construcción
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              Podemos participar en una o varias etapas del proyecto,
              dependiendo de lo que necesite el propietario.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Diseño arquitectónico",
                text: "Anteproyecto, distribución, diseño residencial y desarrollo de la propuesta arquitectónica.",
              },
              {
                title: "Planos constructivos",
                text: "Desarrollo de la documentación técnica necesaria para llevar el proyecto a la etapa constructiva.",
              },
              {
                title: "Ingeniería civil",
                text: "Soluciones de ingeniería adaptadas a las características particulares del terreno y del proyecto.",
              },
              {
                title: "Permisos de construcción",
                text: "Acompañamiento en la gestión de los trámites necesarios para desarrollar el proyecto.",
              },
              {
                title: "Construcción",
                text: "Ejecución y coordinación de proyectos residenciales y de construcción.",
              },
              {
                title: "Construcción por administración",
                text: "Control de presupuesto, compras, contratistas, avance y seguimiento técnico de la obra.",
              },
            ].map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-300">
                  {service.text}
                </p>
              </article>
            ))}

          </div>

        </div>
      </section>


      {/* TERRENO */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Antes de construir
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              El terreno es parte del proyecto
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              En Osa existen terrenos con pendientes, diferencias de nivel,
              accesos particulares, vegetación y condiciones climáticas que
              deben analizarse antes de definir una solución constructiva.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Por eso recomendamos estudiar las características del sitio antes
              de definir completamente la vivienda. Una buena decisión en esta
              etapa puede facilitar el diseño, la construcción y el control del
              presupuesto.
            </p>
          </div>

          <div className="space-y-4">

            {[
              "Topografía y pendientes",
              "Acceso al terreno",
              "Orientación y aprovechamiento de vistas",
              "Condiciones de drenaje",
              "Características del suelo",
              "Disponibilidad de servicios",
              "Requisitos de permisos",
              "Condiciones particulares de la propiedad",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                  ✓
                </span>

                <span className="font-medium text-gray-800">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* PROCESO */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Metodología Habi-Tec
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Un proyecto bien planificado comienza antes de construir
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">

            {[
              {
                number: "01",
                title: "Conocemos el terreno",
                text: "Analizamos la propiedad, sus condiciones y las necesidades del propietario.",
              },
              {
                number: "02",
                title: "Definimos el proyecto",
                text: "Desarrollamos la propuesta arquitectónica y las soluciones técnicas.",
              },
              {
                number: "03",
                title: "Planificamos",
                text: "Coordinamos planos, permisos, presupuesto y las diferentes etapas.",
              },
              {
                number: "04",
                title: "Construimos",
                text: "Acompañamos la ejecución y supervisamos el desarrollo de la obra.",
              },
            ].map((step) => (
              <div key={step.number} className="relative">

                <span className="text-5xl font-bold text-blue-100">
                  {step.number}
                </span>

                <h3 className="mt-2 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* POR QUÉ HABITEC */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="rounded-3xl bg-blue-50 p-8 lg:p-12">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Habi-Tec
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Arquitectura, ingeniería y construcción en un mismo proyecto
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Habi-Tec integra diseño arquitectónico, ingeniería civil,
                permisos y construcción para ofrecer al propietario un proceso
                ordenado y acompañado profesionalmente.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Profesional incorporado al CFIA",
                "Más de 14 años de experiencia",
                "Diseño arquitectónico",
                "Ingeniería civil",
                "Gestión de permisos",
                "Construcción por administración",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white p-4 shadow-sm"
                >
                  <span className="font-semibold text-gray-800">
                    ✓ {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Preguntas frecuentes
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Construcción en Osa
          </h2>
        </div>

        <div className="mt-12 space-y-4">

          <details className="group rounded-xl border border-gray-200 bg-white p-6">
            <summary className="cursor-pointer list-none font-bold">
              ¿Habi-Tec construye casas en Osa?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Sí. Habi-Tec puede desarrollar proyectos residenciales y casas
              de playa en diferentes sectores de Osa, dependiendo de las
              características y alcance de cada proyecto.
            </p>
          </details>

          <details className="group rounded-xl border border-gray-200 bg-white p-6">
            <summary className="cursor-pointer list-none font-bold">
              ¿Trabajan en Uvita y Bahía Ballena?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Sí. Atendemos proyectos de diseño, ingeniería, planos, permisos
              y construcción en Uvita, Bahía Ballena y comunidades cercanas.
            </p>
          </details>

          <details className="group rounded-xl border border-gray-200 bg-white p-6">
            <summary className="cursor-pointer list-none font-bold">
              ¿Construyen casas de playa?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Sí. Podemos desarrollar viviendas de playa y casas de descanso
              considerando las características del terreno, el clima, la
              orientación, los espacios exteriores y las necesidades del
              propietario.
            </p>
          </details>

          <details className="group rounded-xl border border-gray-200 bg-white p-6">
            <summary className="cursor-pointer list-none font-bold">
              ¿Pueden diseñar una casa pensada para alquiler vacacional?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Podemos desarrollar el diseño y la construcción considerando
              necesidades propias de una propiedad destinada al alquiler
              vacacional, como distribución, espacios exteriores,
              mantenimiento, privacidad y funcionalidad.
            </p>
          </details>

          <details className="group rounded-xl border border-gray-200 bg-white p-6">
            <summary className="cursor-pointer list-none font-bold">
              ¿Trabajan en Dominical?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Sí. Habi-Tec puede coordinar proyectos de arquitectura,
              ingeniería civil y construcción en Dominical y comunidades
              cercanas.
            </p>
          </details>

          <details className="group rounded-xl border border-gray-200 bg-white p-6">
            <summary className="cursor-pointer list-none font-bold">
              ¿Pueden encargarse de los permisos?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Sí. Podemos acompañar el proceso de gestión de permisos y
              coordinación de la documentación técnica necesaria para el
              proyecto.
            </p>
          </details>

          <details className="group rounded-xl border border-gray-200 bg-white p-6">
            <summary className="cursor-pointer list-none font-bold">
              ¿Puedo contratar únicamente el diseño o la ingeniería?
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              Sí. Los servicios pueden contratarse de acuerdo con las
              necesidades particulares del proyecto. Podemos participar desde
              el diseño inicial o incorporarnos posteriormente para ingeniería,
              permisos, supervisión o construcción.
            </p>
          </details>

        </div>

      </section>


      {/* CTA FINAL */}
      <section className="bg-blue-700 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Tiene un terreno en Osa y está pensando en construir?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Cuéntenos dónde está su propiedad, qué desea construir y cuál es
            el propósito del proyecto. Podemos revisar las características
            generales y orientarle sobre los siguientes pasos.
          </p>

          <div className="mt-8 flex justify-center">

            <a
              href="https://wa.me/50686878320"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-gray-100"
            >
              Consultar proyecto por WhatsApp
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}