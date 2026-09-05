import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arquitectura, Ingeniería y Constructora en Coto Brus | Habi-Tec",
  description:
    "Arquitectura, ingeniería civil y construcción en Coto Brus. Habi-Tec atiende proyectos en San Vito, Ciudad Neily, Paso Canoas, Golfito y comunidades de la Zona Sur.",
  keywords: [
    "arquitectura Coto Brus",
    "ingeniería civil Coto Brus",
    "constructora Coto Brus",
    "arquitecto Coto Brus",
    "ingeniero civil Coto Brus",
    "construcción Coto Brus",
    "construcción de casas Coto Brus",
    "diseño de casas Coto Brus",
    "permisos de construcción Coto Brus",
    "constructora San Vito",
    "arquitectura San Vito",
    "ingeniería San Vito",
    "constructora Ciudad Neily",
    "ingeniería Ciudad Neily",
    "constructora Paso Canoas",
    "ingeniería Paso Canoas",
    "constructora Golfito",
    "ingeniería Golfito",
  ],
  alternates: {
    canonical:
      "https://www.habiteccr.com/arquitectura-ingenieria-constructora-coto-brus",
  },
};

const faqs = [
  {
    question: "¿Habi-Tec trabaja en San Vito de Coto Brus?",
    answer:
      "Sí. Habi-Tec atiende proyectos de arquitectura, ingeniería civil, construcción y gestión de permisos en San Vito y diferentes comunidades de Coto Brus.",
  },
  {
    question: "¿Trabajan en Ciudad Neily?",
    answer:
      "Sí. Habi-Tec puede coordinar proyectos de diseño arquitectónico, ingeniería civil, planos, permisos y construcción en Ciudad Neily y otras comunidades de Corredores.",
  },
  {
    question: "¿Realizan proyectos en Paso Canoas?",
    answer:
      "Sí. Habi-Tec atiende proyectos residenciales y comerciales en Paso Canoas, incluyendo diseño arquitectónico, ingeniería civil, construcción y asesoría para permisos.",
  },
  {
    question: "¿Trabajan en Golfito?",
    answer:
      "Sí. Habi-Tec puede atender proyectos de arquitectura, ingeniería civil y construcción en Golfito y comunidades cercanas.",
  },
  {
    question: "¿Pueden diseñar y construir una casa en Coto Brus?",
    answer:
      "Sí. Habi-Tec puede acompañar el proyecto desde el diseño arquitectónico y los planos hasta la ingeniería, gestión de permisos y construcción, de acuerdo con el alcance contratado.",
  },
  {
    question: "¿Realizan permisos de construcción en Coto Brus?",
    answer:
      "Sí. Habi-Tec brinda asesoría y gestión de la documentación técnica necesaria para proyectos de construcción, remodelación y ampliación.",
  },
];

export default function ArquitecturaIngenieriaConstructoraCotoBrusPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Habi-Tec Diseño y Construcción",
    url: "https://www.habiteccr.com/",
    telephone: "+50686878320",
    description:
      "Servicios de arquitectura, ingeniería civil, construcción y gestión de permisos en Coto Brus y la Zona Sur de Costa Rica.",
    areaServed: [
      {
        "@type": "City",
        name: "San Vito",
      },
      {
        "@type": "AdministrativeArea",
        name: "Coto Brus",
      },
      {
        "@type": "City",
        name: "Ciudad Neily",
      },
      {
        "@type": "City",
        name: "Paso Canoas",
      },
      {
        "@type": "City",
        name: "Golfito",
      },
    ],
  };

  return (
    <main className="bg-white text-gray-900">
      {/* SEO STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* HERO */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-300">
              Habi-Tec 
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Arquitectura, Ingeniería y Constructora en Coto Brus
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              Diseño arquitectónico, ingeniería civil, construcción y gestión
              de permisos para proyectos en San Vito, Coto Brus y diferentes
              comunidades de la Zona Sur de Costa Rica.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/506XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-200"
              >
                Solicitar cotización
              </a>

              <Link
                href="/ingenieria-civil"
                className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Ver servicios de ingeniería
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Soluciones para proyectos de construcción en Coto Brus
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              HabiTec  ofrece servicios de arquitectura,
              ingeniería civil y construcción en Coto Brus, con atención
              dirigida a proyectos ubicados en San Vito y otras
              comunidades de la región.
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              Nuestro trabajo integra diferentes etapas del proyecto para que
              el propietario pueda contar con acompañamiento profesional desde
              la idea inicial hasta la ejecución de la obra. Dependiendo de
              las necesidades del proyecto, podemos participar en el diseño
              arquitectónico, elaboración de planos, ingeniería, gestión de
              permisos y construcción.
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              Además de Coto Brus, podemos coordinar proyectos en localidades
              cercanas como Ciudad Neily, Paso Canoas y Golfito, ampliando la
              cobertura de nuestros servicios hacia diferentes sectores de la
              Zona Sur.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-100 p-8">
            <h3 className="text-xl font-bold">
              Servicios profesionales
            </h3>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✓ Diseño arquitectónico</li>
              <li>✓ Ingeniería civil</li>
              <li>✓ Planos constructivos</li>
              <li>✓ Diseño de casas</li>
              <li>✓ Construcción</li>
              <li>✓ Construcción por administración</li>
              <li>✓ Gestión de permisos</li>
              <li>✓ Avalúos</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ARQUITECTURA */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Arquitectura
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Diseño arquitectónico y arquitectura en Coto Brus
            </h2>

            <p className="mt-6 leading-7 text-gray-700">
              Diseñamos viviendas y otros proyectos considerando las
              características del terreno, las necesidades del propietario y
              el presupuesto disponible. El servicio de arquitectura en Coto
              Brus puede comenzar desde la definición de la idea y continuar
              con la distribución de espacios, propuesta arquitectónica,
              planos y coordinación con ingeniería.
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              Para quienes desean construir una vivienda, desarrollamos
              propuestas de{" "}
              <strong>diseño de casas en Coto Brus</strong>, buscando un
              equilibrio entre funcionalidad, estética y viabilidad
              constructiva.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Diseño de casas",
                "Planos arquitectónicos",
                "Anteproyectos",
                "Modelado y visualización",
                "Diseño residencial",
                "Diseño comercial",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white p-5 shadow-sm"
                >
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INGENIERÍA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Ingeniería Civil
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Ingeniería civil en Coto Brus
            </h2>

            <p className="mt-6 leading-7 text-gray-700">
              Habi-Tec brinda servicios de{" "}
              <strong>ingeniería civil en Coto Brus</strong> para proyectos
              residenciales, comerciales y diferentes necesidades de
              construcción. La ingeniería permite analizar las condiciones
              específicas de cada proyecto y definir soluciones técnicas
              adecuadas.
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              Dependiendo del proyecto, podemos trabajar en diseño estructural,
              inspección, supervisión, análisis de soluciones constructivas y
              documentación técnica necesaria para desarrollar la obra.
            </p>

            <h3 className="mt-10 text-2xl font-bold">
              Ingeniería para terrenos y estructuras
            </h3>

            <p className="mt-4 leading-7 text-gray-700">
              Las condiciones topográficas de la Zona Sur pueden generar
              diferencias de nivel y necesidades particulares de manejo del
              terreno. Por ello, evaluamos proyectos que requieran{" "}
              <strong>muros de retención, estructuras de contención,
              gaviones, drenajes y otras soluciones de ingeniería</strong>.
            </p>

            <div className="mt-8">
              <Link
                href="/ingenieria-civil"
                className="font-semibold underline underline-offset-4"
              >
                Conocer los servicios de ingeniería civil →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONSTRUCTORA */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Construcción
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Constructora en Coto Brus
            </h2>

            <p className="mt-6 leading-7 text-gray-300">
              Habi-Tec desarrolla proyectos de construcción residencial y
              comercial en San Vito y diferentes comunidades de Coto Brus.
              Nuestro objetivo es integrar diseño, ingeniería, planificación y
              ejecución para facilitar al propietario el desarrollo de su
              proyecto.
            </p>

            <p className="mt-4 leading-7 text-gray-300">
              Si está buscando una{" "}
              <strong>constructora en Coto Brus</strong> para construir una
              casa, realizar una ampliación, remodelación u otro proyecto,
              podemos analizar las características de la obra y definir el
              alcance de los servicios profesionales requeridos.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Construcción de casas",
                "Construcción residencial",
                "Construcción comercial",
                "Ampliaciones",
                "Remodelaciones",
                "Construcción por administración",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PERMISOS */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Gestión de proyectos
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Permisos de construcción en Coto Brus
            </h2>

            <p className="mt-6 leading-7 text-gray-700">
              Antes de iniciar una construcción es importante revisar las
              condiciones del terreno, los requerimientos técnicos y la
              documentación necesaria para tramitar el proyecto. Habi-Tec
              brinda asesoría para la{" "}
              <strong>gestión de permisos de construcción en Coto Brus</strong>
              y otros trámites relacionados con proyectos de construcción.
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              También podemos orientar a propietarios que desean construir,
              ampliar o remodelar una propiedad y necesitan determinar qué
              documentación, planos y servicios profesionales requieren.
            </p>

            <div className="mt-8">
              <Link
                href="/permisos-de-construccion"
                className="font-semibold underline underline-offset-4"
              >
                Más información sobre permisos de construcción →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ZONA SUR */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Cobertura regional
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Arquitectura, ingeniería y construcción en la Zona Sur
            </h2>

            <p className="mt-6 leading-7 text-gray-700">
              Desde San Vito de Coto Brus podemos coordinar proyectos en
              diferentes localidades de la Zona Sur. La atención se adapta a
              las características y ubicación de cada proyecto, permitiendo
              evaluar previamente el alcance de los servicios requeridos.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border p-6">
                <h3 className="text-xl font-bold">Ciudad Neily</h3>
                <p className="mt-3 leading-7 text-gray-600">
                  Servicios de arquitectura, ingeniería civil, planos,
                  permisos y construcción para proyectos residenciales y
                  comerciales en Ciudad Neily y comunidades de Corredores.
                </p>
              </div>

              <div className="rounded-2xl border p-6">
                <h3 className="text-xl font-bold">Paso Canoas</h3>
                <p className="mt-3 leading-7 text-gray-600">
                  Atención de proyectos de diseño de casas, ingeniería,
                  construcción y gestión de permisos en Paso Canoas y sus
                  alrededores.
                </p>
              </div>

              <div className="rounded-2xl border p-6">
                <h3 className="text-xl font-bold">Golfito</h3>
                <p className="mt-3 leading-7 text-gray-600">
                  Coordinación de proyectos de arquitectura, ingeniería civil
                  y construcción en Golfito y comunidades cercanas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAN VITO */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Presencia local
              </p>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Habi-Tec en San Vito de Coto Brus
              </h2>

              <p className="mt-6 leading-7 text-gray-700">
                Habi-Tec cuenta con presencia en San Vito de Coto Brus para
                facilitar la atención de propietarios que necesitan servicios
                profesionales de arquitectura, ingeniería civil y construcción
                en la región.
              </p>

              <p className="mt-4 leading-7 text-gray-700">
                La atención local permite coordinar reuniones, revisar las
                necesidades de cada proyecto y determinar el alcance de los
                servicios antes de iniciar los trabajos.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold">
                ¿Está en San Vito o Coto Brus?
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Si está pensando en construir, diseñar una vivienda, realizar
                una ampliación o necesita asesoría de ingeniería, podemos
                revisar su proyecto.
              </p>

              <a
                href="https://wa.me/50686878320"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white"
              >
                Solicitar cotización
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Experiencia profesional para desarrollar su proyecto
            </h2>

            <p className="mt-6 leading-7 text-gray-700">
              Habi-Tec está dirigido por un profesional en Ingeniería Civil
              incorporado al CFIA, con más de 14 años de experiencia en
              construcción, diseño y gestión de proyectos.
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              Nuestro enfoque busca integrar arquitectura, ingeniería,
              permisos y construcción para ofrecer al propietario un proceso
              ordenado y acompañado profesionalmente.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-5 font-semibold">
                ✓ Profesional incorporado al CFIA
              </div>

              <div className="rounded-xl bg-gray-50 p-5 font-semibold">
                ✓ Más de 14 años de experiencia
              </div>

              <div className="rounded-xl bg-gray-50 p-5 font-semibold">
                ✓ Arquitectura + ingeniería + construcción
              </div>

              <div className="rounded-xl bg-gray-50 p-5 font-semibold">
                ✓ Atención en la Zona Sur
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Preguntas frecuentes
            </h2>

            <div className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold">{faq.question}</h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="bg-gray-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            ¿Tiene un proyecto en Coto Brus o la Zona Sur?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Cuéntenos qué desea construir, diseñar o tramitar. Podemos revisar
            las características de su proyecto y orientarle sobre los
            siguientes pasos.
          </p>

          <a
            href="https://wa.me/50686878320"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-bold text-gray-900 transition hover:bg-gray-200"
          >
            Solicitar cotización por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}