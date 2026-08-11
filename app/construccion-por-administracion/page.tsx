import Image from "next/image";
import Link from "next/link";

const etapas = [
  {
    numero: "01",
    titulo: "Trazo y fundaciones",
    imagen: "/proceso-trazo-fundaciones.jpg",
    descripcion:
      "En esta etapa se realiza el trazo de la vivienda y se ejecutan los trabajos correspondientes a las fundaciones. Es una fase fundamental para establecer correctamente la ubicación y geometría de los elementos de la construcción.",
    controles: [
      "Revisión del trazo y escuadras.",
      "Revisión del acero de refuerzo.",
      "Revisión de instalaciones electromecánicas.",
      "Pruebas de presión hidrostática.",
      "Verificación de pendientes de aguas pluviales y sanitarias.",
      "Revisión de tuberías de ventilación.",
    ],
  },
  {
    numero: "02",
    titulo: "Construcción de paredes",
    imagen: "/proceso-paredes.jpg",
    descripcion:
      "Las paredes se ejecutan de acuerdo con los planos y especificaciones del proyecto. La correcta alineación, verticalidad y ejecución de los elementos de mampostería son aspectos importantes durante esta etapa.",
    controles: [
      "Revisión de plomos.",
      "Revisión de líneas y alineación.",
      "Verificación de escuadras.",
      "Revisión del acero de refuerzo.",
      "Control del sisado.",
      "Revisión del colado de celdas.",
      "Verificación de salidas electromecánicas.",
    ],
  },
  {
    numero: "03",
    titulo: "Estructura de techo y cubierta",
    imagen: "/proceso-techo.jpg",
    descripcion:
      "La estructura del techo y la cubierta protegen la vivienda y permiten una adecuada evacuación del agua. En esta etapa se revisan tanto la estructura como la correcta instalación de las láminas.",
    controles: [
      "Verificación de pendientes.",
      "Revisión de traslapes entre láminas.",
      "Verificación del espaciamiento de clavadores.",
      "Revisión de las uniones de la estructura.",
      "Control de las soldaduras.",
      "Revisión general de la estructura del techo.",
    ],
  },
  {
    numero: "04",
    titulo: "Repellos",
    imagen: "/proceso-repellos.jpg",
    descripcion:
      "Los repellos permiten preparar las superficies de las paredes para las siguientes etapas de acabado. La preparación de la superficie y la correcta aplicación del mortero son fundamentales para obtener un resultado adecuado.",
    controles: [
      "Revisión de la dosificación del mortero.",
      "Verificación de maestras.",
      "Control de plomos y escuadras.",
      "Preparación y humedecimiento de las paredes.",
      "Limpieza de las superficies.",
      "Revisión de la uniformidad del acabado.",
    ],
  },
  {
    numero: "05",
    titulo: "Acabados",
    imagen: "/proceso-acabados.jpg",
    descripcion:
      "En la etapa de acabados se ejecutan los trabajos que dan a la vivienda su apariencia y terminación final. La supervisión permite controlar tanto la calidad visual como la correcta ejecución de los trabajos.",
    controles: [
      "Revisión de enchapes.",
      "Control de niveles y alineación.",
      "Revisión de cruces y juntas.",
      "Correcta aplicación de fragua.",
      "Revisión de aplicación de pintura.",
      "Control de trabajos en gypsum.",
      "Revisión general de las superficies terminadas.",
    ],
  },
];

const servicios = [
  {
    titulo: "Presupuesto y planificación",
    descripcion:
      "Elaboración y seguimiento del presupuesto de construcción, planificación de las actividades y coordinación de los diferentes trabajos del proyecto.",
    icono: "📊",
  },
  {
    titulo: "Control de costos",
    descripcion:
      "Seguimiento de los gastos de la obra y control de los recursos utilizados durante el proceso constructivo.",
    icono: "💰",
  },
  {
    titulo: "Supervisión de obra",
    descripcion:
      "Seguimiento técnico de las diferentes etapas de construcción y revisión de aspectos importantes de calidad y ejecución.",
    icono: "👷",
  },
  {
    titulo: "Coordinación de contratistas",
    descripcion:
      "Coordinación de los diferentes participantes y actividades necesarias para el desarrollo de la obra.",
    icono: "🤝",
  },
  {
    titulo: "Control del avance",
    descripcion:
      "Seguimiento del avance de los trabajos para mantener una adecuada coordinación entre las diferentes etapas.",
    icono: "📈",
  },
  {
    titulo: "Acompañamiento profesional",
    descripcion:
      "El propietario cuenta con acompañamiento profesional durante el desarrollo de las diferentes etapas del proyecto.",
    icono: "🏗️",
  },
];

export default function ConstruccionPorAdministracion() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* =========================================================
          HEADER
      ========================================================= */}

      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <Link
            href="/"
            className="font-bold text-xl text-slate-900"
          >
            Habi-Tec Diseño y Construcción
          </Link>

          <nav className="hidden md:flex gap-6 text-slate-700">
            <Link href="/" className="hover:text-blue-600 transition">
              Inicio
            </Link>

            <Link
              href="/#servicios"
              className="hover:text-blue-600 transition"
            >
              Servicios
            </Link>

            <Link
              href="/#proyectos"
              className="hover:text-blue-600 transition"
            >
              Proyectos
            </Link>

            <Link
              href="/#blog"
              className="hover:text-blue-600 transition"
            >
              Blog
            </Link>

            <Link
              href="/#contacto"
              className="hover:text-blue-600 transition"
            >
              Contacto
            </Link>
          </nav>

        </div>
      </header>


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="bg-slate-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <p className="text-blue-400 font-semibold uppercase tracking-wide mb-4">
                Habi-Tec Diseño y Construcción
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Construcción por Administración en Costa Rica
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Administramos y supervisamos el proceso constructivo de su
                proyecto, procurando mantener el control de los costos,
                la ejecución y la calidad durante las diferentes etapas
                de la construcción.
              </p>

              <div className="flex flex-wrap gap-4">

                <a
                  href="https://wa.me/50686878320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-lg font-semibold transition"
                >
                  Solicitar cotización
                </a>

                <a
                  href="#proceso"
                  className="border border-white hover:bg-white hover:text-slate-900 px-7 py-4 rounded-lg font-semibold transition"
                >
                  Ver proceso constructivo
                </a>

              </div>

            </div>


            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">

              <Image
                src="/heroconstruccion.jpeg"
                alt="Construcción de vivienda en Costa Rica"
                fill
                priority
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRODUCCIÓN
      ========================================================= */}

      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-blue-600 font-semibold mb-3">
            ¿Qué significa construir por administración?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Una forma de administrar la construcción con mayor control
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            La construcción por administración permite organizar y administrar
            los diferentes recursos y actividades necesarios para ejecutar
            una obra, manteniendo un seguimiento del presupuesto, los trabajos
            y el avance del proyecto.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed mt-5">
            En Habi-Tec acompañamos al propietario durante el proceso
            constructivo y coordinamos las diferentes actividades necesarias
            para que el proyecto avance de manera ordenada.
          </p>

        </div>

      </section>


      {/* =========================================================
          VENTAJAS
      ========================================================= */}

      <section className="py-20 px-6 bg-slate-50">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-blue-600 font-semibold mb-3">
              ¿Por qué construir por administración?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Mayor seguimiento durante la construcción
            </h2>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {servicios.map((servicio) => (

              <div
                key={servicio.titulo}
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition"
              >

                <div className="text-4xl mb-5">
                  {servicio.icono}
                </div>

                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {servicio.titulo}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {servicio.descripcion}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          QUÉ INCLUYE
      ========================================================= */}

      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <p className="text-blue-600 font-semibold mb-3">
                Nuestro servicio
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Qué hacemos durante la administración de la obra?
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Cada proyecto tiene características particulares. Por eso,
                el alcance del servicio se define de acuerdo con las
                necesidades de la obra y del propietario.
              </p>

              <div className="space-y-4">

                {[
                  "Planificación y organización de los trabajos.",
                  "Seguimiento del presupuesto.",
                  "Coordinación de contratistas.",
                  "Seguimiento del avance de la obra.",
                  "Supervisión de aspectos técnicos.",
                  "Control y revisión de diferentes etapas constructivas.",
                  "Acompañamiento profesional durante el proyecto.",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <span className="text-blue-600 font-bold text-xl">
                      ✓
                    </span>

                    <p className="text-slate-700">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">

              <Image
                src="/proyecto3.jpeg"
                alt="Supervisión y construcción de obra"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PROCESO CONSTRUCTIVO
      ========================================================= */}

      <section
        id="proceso"
        className="py-24 px-6 bg-slate-900 text-white"
      >

        <div className="max-w-6xl mx-auto">

          <div className="max-w-3xl mb-16">

            <p className="text-blue-400 font-semibold mb-3">
              Supervisión del proceso constructivo
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Así se desarrolla una construcción
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              La construcción de una vivienda está compuesta por diferentes
              etapas. En cada una existen aspectos que deben ser revisados
              antes de continuar con los siguientes trabajos.
            </p>

          </div>


          <div className="space-y-16">

            {etapas.map((etapa, index) => (

              <article
                key={etapa.numero}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >

                {/* IMAGEN */}

                <div
                  className={`relative h-[360px] rounded-2xl overflow-hidden shadow-2xl ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >

                  <Image
                    src={etapa.imagen}
                    alt={`${etapa.titulo} durante el proceso constructivo`}
                    fill
                    className="object-cover"
                  />

                </div>


                {/* TEXTO */}

                <div
                  className={
                    index % 2 !== 0
                      ? "lg:order-1"
                      : ""
                  }
                >

                  <div className="text-blue-400 text-5xl font-bold mb-3">
                    {etapa.numero}
                  </div>

                  <h3 className="text-3xl font-bold mb-5">
                    {etapa.titulo}
                  </h3>

                  <p className="text-slate-300 leading-relaxed mb-7">
                    {etapa.descripcion}
                  </p>

                  <div>

                    <h4 className="font-bold text-lg mb-4">
                      ¿Qué revisamos?
                    </h4>

                    <ul className="space-y-3">

                      {etapa.controles.map((control) => (

                        <li
                          key={control}
                          className="flex gap-3 text-slate-300"
                        >

                          <span className="text-blue-400 font-bold">
                            ✓
                          </span>

                          <span>
                            {control}
                          </span>

                        </li>

                      ))}

                    </ul>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          CONTROL DE CALIDAD
      ========================================================= */}

      <section className="py-20 px-6 bg-white">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-blue-600 font-semibold mb-3">
            Supervisión
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            La importancia de revisar cada etapa
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Una construcción no consiste únicamente en ejecutar trabajos.
            También es necesario verificar que los diferentes elementos
            se estén realizando de acuerdo con los planos, especificaciones
            y condiciones del proyecto.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed mt-5">
            La revisión durante el proceso permite detectar situaciones
            que pueden ser corregidas oportunamente antes de que queden
            ocultas por las etapas posteriores.
          </p>

        </div>

      </section>


      {/* =========================================================
          BLOQUE DE DIFERENCIACIÓN
      ========================================================= */}

      <section className="py-20 px-6 bg-slate-50">

        <div className="max-w-6xl mx-auto">

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

            <div className="grid md:grid-cols-3 gap-10 text-center">

              <div>

                <div className="text-4xl mb-4">
                  📋
                </div>

                <h3 className="text-xl font-bold mb-3 text-blue-900">
                  Planificación
                </h3>

                <p className="text-slate-600">
                  Organizamos las actividades necesarias para desarrollar
                  el proyecto de manera ordenada.
                </p>

              </div>


              <div>

                <div className="text-4xl mb-4">
                  👷
                </div>

                <h3 className="text-xl font-bold mb-3 text-blue-900">
                  Supervisión
                </h3>

                <p className="text-slate-600">
                  Damos seguimiento a las diferentes etapas y revisamos
                  aspectos técnicos de la ejecución.
                </p>

              </div>


              <div>

                <div className="text-4xl mb-4">
                  📊
                </div>

                <h3 className="text-xl font-bold mb-3 text-blue-900">
                  Control
                </h3>

                <p className="text-slate-600">
                  Seguimos el presupuesto, el avance y las actividades
                  relacionadas con la obra.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="py-24 px-6 bg-blue-700 text-white">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Está pensando en construir su casa?
          </h2>

          <p className="text-xl text-blue-100 leading-relaxed mb-10">
            Cuéntenos sobre su proyecto y conversemos sobre la mejor forma
            de planificar y administrar su construcción.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/50686878320"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold transition"
            >
              Solicitar cotización por WhatsApp
            </a>

            <Link
              href="/"
              className="border border-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-bold transition"
            >
              Volver a Habi-Tec
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="bg-slate-950 text-slate-300 py-12 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-3 gap-10">

            <div>

              <h3 className="text-white text-xl font-bold mb-4">
                Habi-Tec Diseño y Construcción
              </h3>

              <p className="leading-relaxed">
                Diseño, ingeniería, construcción y gestión de proyectos
                en Costa Rica.
              </p>

            </div>


            <div>

              <h3 className="text-white font-bold mb-4">
                Servicios
              </h3>

              <ul className="space-y-2">

                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition"
                  >
                    Diseño Arquitectónico
                  </Link>
                </li>

                <li>
                  <Link
                    href="/construccion-por-administracion"
                    className="hover:text-white transition"
                  >
                    Construcción por Administración
                  </Link>
                </li>

                <li>
                  <Link
                    href="/permisos-de-construccion"
                    className="hover:text-white transition"
                  >
                    Permisos de Construcción
                  </Link>
                </li>

              </ul>

            </div>


            <div>

              <h3 className="text-white font-bold mb-4">
                Contacto
              </h3>

              <p>WhatsApp: +506 8687-8320</p>

              <p className="mt-2">
                info@habiteccr.com
              </p>

            </div>

          </div>


          <div className="border-t border-slate-800 mt-10 pt-8 text-sm text-slate-500">

            © {new Date().getFullYear()} Habi-Tec Diseño y Construcción.
            Todos los derechos reservados.

          </div>

        </div>

      </footer>


      {/* =========================================================
          WHATSAPP FLOTANTE
      ========================================================= */}

      <a
        href="https://wa.me/50686878320"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition z-50"
      >
        WhatsApp
      </a>

    </main>
  );
}