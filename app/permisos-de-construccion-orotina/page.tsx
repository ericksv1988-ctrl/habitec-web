import Image from "next/image";

export const metadata = {
  title: "Permisos de Construcción en Orotina | Habi-Tec",
  description:
    "Gestión de permisos de construcción en Orotina. Planos, ingeniería civil, trámites municipales y asesoría para proyectos de construcción en Orotina y alrededores.",
};

export default function PermisosConstruccionOrotina() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-blue-400 font-semibold mb-4">
            Habi-Tec Arquitectura, Ingeniería y Construcción
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Permisos de Construcción en Orotina
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Gestión de permisos, planos e ingeniería para proyectos de
            construcción en Orotina y sus alrededores. Le acompañamos
            desde la planificación del proyecto hasta la gestión de los
            trámites necesarios para construir.
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
            Ingeniería y construcción en Orotina
          </h2>

          <p className="text-lg text-gray-600 mb-5">
            Si está planeando construir, ampliar o remodelar una propiedad
            en Orotina, contar con profesionales que conozcan los procesos
            técnicos y administrativos puede facilitar considerablemente
            el desarrollo del proyecto.
          </p>

          <p className="text-lg text-gray-600">
            En Habi-Tec Diseño y Construcción brindamos servicios de
            ingeniería civil, diseño, planos constructivos, gestión de
            permisos y construcción para proyectos residenciales y
            comerciales.
          </p>

        </div>
      </section>


      {/* SERVICIOS */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-10 text-center">
            Servicios de construcción en Orotina
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Permisos de construcción
              </h3>

              <p className="text-gray-600">
                Asesoría y gestión de los trámites necesarios para
                desarrollar proyectos de construcción en Orotina.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Planos constructivos
              </h3>

              <p className="text-gray-600">
                Elaboración y coordinación de planos para proyectos
                residenciales y comerciales.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Ingeniería civil
              </h3>

              <p className="text-gray-600">
                Servicios de ingeniería, inspección, consultoría y
                soluciones técnicas para diferentes tipos de proyectos.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Construcción de casas
              </h3>

              <p className="text-gray-600">
                Desarrollo y construcción de viviendas, desde la
                planificación hasta la ejecución de la obra.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Remodelaciones y ampliaciones
              </h3>

              <p className="text-gray-600">
                Asesoría técnica para ampliar, remodelar o realizar
                mejoras en propiedades existentes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Dirección y supervisión
              </h3>

              <p className="text-gray-600">
                Supervisión profesional para mantener el control técnico
                y constructivo durante la ejecución del proyecto.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* SOBRE OROTINA */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Proyectos de construcción en Orotina
          </h2>

          <p className="text-lg text-gray-600 mb-5">
            Orotina es una zona con crecimiento residencial y comercial,
            donde se desarrollan viviendas nuevas, ampliaciones,
            remodelaciones y diferentes tipos de proyectos de
            infraestructura. Tiene un excelente clima, con amplia
            naturaleza y un ambiente tranquilo para vivir.
          </p>

          <p className="text-lg text-gray-600">
            Cada proyecto requiere analizar las condiciones particulares
            del terreno, el tipo de construcción y los requisitos
            correspondientes antes de iniciar la obra. En Habi-Tec
            brindamos acompañamiento profesional durante este proceso.
          </p>

        </div>
      </section>


      {/* ZONAS */}
      <section className="py-14 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl font-bold mb-5">
            Zonas cercanas que atendemos
          </h2>

          <p className="text-gray-600">
            Atendemos proyectos en Orotina y diferentes sectores y
            comunidades cercanas, dependiendo de las características y
            necesidades de cada proyecto. Como coyolar, san mateo, la ceiba,
            desmonte, tambor de alajuela, mastate, hacienda vieja, huacas, 
            entre otros.
          </p>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            ¿Tiene un proyecto de construcción en Orotina?
          </h2>

          <p className="text-lg text-slate-300 mb-8">
            Contáctenos para conocer su proyecto y determinar los servicios
            de ingeniería, planos, permisos o construcción que necesita.
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
            Habi-Tec Arquitectura, Ingeniería y Construcción
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