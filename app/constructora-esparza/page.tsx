import Image from "next/image";

export const metadata = {
  title: "Constructora en Esparza | Habi-Tec Diseño y Construcción",
  description:
    "Constructora en Esparza especializada en construcción de casas, ingeniería civil, planos constructivos, permisos de construcción y remodelaciones.",
};

export default function ConstructoraEsparza() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-blue-400 font-semibold mb-4">
            Habi-Tec Diseño y Construcción
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Constructora en Esparza
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Servicios de construcción, ingeniería civil, diseño, planos
            constructivos y gestión de permisos para proyectos en Esparza
            y comunidades cercanas.
          </p>

          <a
            href="https://wa.me/50686878320"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-lg font-semibold transition"
          >
            Consultar sobre mi proyecto
          </a>

        </div>
      </section>


      {/* INTRODUCCIÓN */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Construcción e ingeniería en Esparza
          </h2>

          <p className="text-lg text-gray-600 mb-5">
            Si está pensando en construir una casa, ampliar una propiedad
            o desarrollar un proyecto en Esparza, contar con asesoría
            profesional desde las primeras etapas puede ayudar a tomar
            mejores decisiones sobre diseño, costos y ejecución.
          </p>

          <p className="text-lg text-gray-600">
            En Habi-Tec Diseño y Construcción ofrecemos servicios de
            ingeniería civil, diseño arquitectónico, construcción,
            elaboración de planos y gestión de permisos para proyectos
            residenciales y comerciales.
          </p>

        </div>
      </section>


      {/* SERVICIOS */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-10 text-center">
            Servicios de construcción en Esparza
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Construcción de casas
              </h3>

              <p className="text-gray-600">
                Desarrollo y construcción de viviendas, desde la
                planificación inicial hasta la ejecución de la obra.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Ingeniería civil
              </h3>

              <p className="text-gray-600">
                Servicios de ingeniería, inspección, consultoría y
                soluciones técnicas para proyectos de construcción.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Planos constructivos
              </h3>

              <p className="text-gray-600">
                Diseño y coordinación de planos para viviendas y
                diferentes tipos de proyectos.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Permisos de construcción
              </h3>

              <p className="text-gray-600">
                Asesoría y gestión de los trámites necesarios para
                desarrollar proyectos de construcción.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Remodelaciones y ampliaciones
              </h3>

              <p className="text-gray-600">
                Servicios profesionales para ampliaciones, remodelaciones
                y mejoras de propiedades existentes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Dirección y supervisión
              </h3>

              <p className="text-gray-600">
                Supervisión profesional de los trabajos para mantener
                control técnico y constructivo durante la obra.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* PROYECTOS EN ESPARZA */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Proyectos de construcción en Esparza
          </h2>

          <p className="text-lg text-gray-600 mb-5">
            Esparza cuenta con diferentes zonas residenciales y rurales
            donde se desarrollan viviendas nuevas, ampliaciones,
            remodelaciones y otros proyectos de construcción.
          </p>

          <p className="text-lg text-gray-600">
            Cada proyecto requiere valorar las características del terreno,
            las necesidades del propietario y los requisitos técnicos y
            administrativos correspondientes. En Habi-Tec brindamos
            acompañamiento profesional durante las diferentes etapas
            del proyecto.
          </p>

        </div>
      </section>


      {/* ZONAS CERCANAS */}
      <section className="py-14 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl font-bold mb-5">
            Zonas cercanas que atendemos
          </h2>

          <p className="text-gray-600">
            Atendemos proyectos en Esparza y comunidades cercanas,
            incluyendo Espíritu Santo, San Rafael, Caldera, San Jerónimo,
            Macacona, San Juan Grande y otros sectores de la zona,
            dependiendo de las características de cada proyecto.
          </p>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            ¿Tiene un proyecto de construcción en Esparza?
          </h2>

          <p className="text-lg text-slate-300 mb-8">
            Contáctenos para conocer su proyecto y determinar la mejor
            solución de ingeniería, diseño, permisos o construcción.
          </p>

          <a
            href="https://wa.me/50686878320"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold transition"
          >
            Contactar por WhatsApp
          </a>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <p className="font-semibold">
            Habi-Tec Diseño y Construcción
          </p>

          <p className="text-slate-500 text-sm mt-2">
            Ingeniería civil, construcción y gestión de permisos en Costa Rica.
          </p>

        </div>
      </footer>


      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/50686878320"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        WhatsApp
      </a>

    </main>
  );
}