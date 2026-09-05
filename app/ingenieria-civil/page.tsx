
import Image from "next/image";
import Link from "next/link";

const tiposMuros = [
  {
    titulo: "Muro de mampostería reforzada",
    subtitulo: "Muro de bloque",
    imagen: "/muro-bloque.jpeg",
    descripcion:
      "Sistema modular construido con bloques, acero de refuerzo y concreto en sus celdas. Puede ser una alternativa adecuada para desniveles moderados y determinados proyectos residenciales.",
    caracteristicas: [
      "Buena relación entre costo y altura",
      "Construcción por etapas",
      "Sistema de mampostería reforzada",
      "Acabado mediante repello u otro revestimiento",
    ],
  },
  {
    titulo: "Muro de concreto armado",
    subtitulo: "Mayor capacidad estructural",
    imagen: "/muro-concreto.jpeg",
    descripcion:
      "Muros de concreto armado diseñados de acuerdo con las condiciones particulares del proyecto, considerando las cargas, altura de retención, fundación y sistema de drenaje.",
    caracteristicas: [
      "Alta capacidad estructural",
      "Adecuado para mayores exigencias",
      "Posibilidad de menor espesor",
      "Diseño de fundación y drenaje",
    ],
  },
  {
    titulo: "Muro de gaviones",
    subtitulo: "Sistema flexible de contención",
    imagen: "/muro-gaviones.jpeg",
    descripcion:
      "Estructuras formadas por canastas de malla metálica rellenas de piedra. Su comportamiento flexible y capacidad de drenaje pueden resultar adecuados para determinados taludes y proyectos.",
    caracteristicas: [
      "Sistema flexible",
      "Buen comportamiento frente al drenaje",
      "Control de erosión",
      "Aplicaciones en taludes y terrenos con condiciones particulares",
    ],
  },
];

const proceso = [
  {
    numero: "01",
    titulo: "Visita e inspección del sitio",
    descripcion:
      "Revisamos las condiciones del terreno, el desnivel, el acceso y las características del entorno del proyecto.",
  },
  {
    numero: "02",
    titulo: "Definición del sistema de retención",
    descripcion:
      "Analizamos las condiciones del proyecto para recomendar el sistema de muro más conveniente de acuerdo con la altura, las cargas, las condiciones del terreno y el alcance del proyecto.",
  },
  {
    numero: "03",
    titulo: "Cálculo y diseño estructural",
    descripcion:
      "Desarrollamos el diseño estructural y definimos los elementos necesarios para la fundación, el refuerzo y el sistema de drenaje.",
  },
  {
    numero: "04",
    titulo: "Trámite y dirección técnica",
    descripcion:
      "Gestionamos los trámites correspondientes y brindamos acompañamiento profesional durante el desarrollo del proyecto.",
  },
  {
    numero: "05",
    titulo: "Construcción y supervisión",
    descripcion:
      "Ejecutamos o supervisamos la construcción, dando seguimiento a aspectos como el refuerzo, drenaje, geometría y acabados del muro.",
  },
];

const galeria = [
  {
    imagen: "/muro-obra-1.jpeg",
    titulo: "Muro de retención",
    descripcion: "Proyecto de construcción.",
  },
  {
    imagen: "/muro-obra-2.jpeg",
    titulo: "Proceso constructivo",
    descripcion: "Supervisión y ejecución de obra.",
  },
  {
    imagen: "/muro-obra-3.jpeg",
    titulo: "Muro terminado",
    descripcion: "Resultado final del proyecto.",
  },
  {
    imagen: "/muro-obra-4.jpeg",
    titulo: "Obra de contención",
    descripcion: "Solución adaptada a las condiciones del terreno.",
  },
];

export default function ingenieriacivil() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="bg-slate-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <p className="text-blue-400 font-semibold uppercase tracking-wide mb-4">
                Ingeniería Civil · Habi-Tec
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Diseño y construcción de muros de retención en Costa Rica
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Diseñamos y construimos soluciones de contención adaptadas
                a las condiciones del terreno, las cargas y las necesidades
                particulares de cada proyecto.
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
                  href="#tipos"
                  className="border border-white hover:bg-white hover:text-slate-900 px-7 py-4 rounded-lg font-semibold transition"
                >
                  Ver tipos de muros
                </a>

              </div>

            </div>


            <div className="relative h-[430px] rounded-2xl overflow-hidden shadow-2xl">

              <Image
                src="/muro-hero.jpeg"
                alt="Diseño y construcción de muro de retención"
                fill
                priority
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PROBLEMA DEL CLIENTE
      ========================================================= */}

      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-blue-600 font-semibold mb-3">
            ¿Necesita contener un terreno?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cada terreno requiere una solución diferente
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            La solución de un muro de retención no debe definirse únicamente
            por su apariencia o por el costo de los materiales. La altura
            a retener, las condiciones del terreno, las cargas existentes,
            el acceso al sitio y el sistema de drenaje son algunos de los
            factores que deben considerarse.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed mt-5">
            En Habi-Tec analizamos las condiciones particulares de cada
            proyecto para definir una solución de ingeniería adecuada.
          </p>

        </div>

      </section>


      {/* =========================================================
          ALCANCE
      ========================================================= */}

      <section className="py-20 px-6 bg-slate-50">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-blue-600 font-semibold mb-3">
              Alcance del servicio
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Del cálculo estructural a la obra construida
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Podemos acompañar el proyecto desde el análisis inicial y
              diseño hasta la dirección técnica y construcción, según
              el alcance requerido.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {[
              {
                numero: "01",
                titulo: "Diseño estructural",
                texto:
                  "Diseño de elementos estructurales de acuerdo con las condiciones y características del proyecto.",
              },
              {
                numero: "02",
                titulo: "Muros de bloque",
                texto:
                  "Diseño y construcción de muros de mampostería reforzada para proyectos donde este sistema sea adecuado.",
              },
              {
                numero: "03",
                titulo: "Muros de concreto",
                texto:
                  "Diseño de muros de concreto armado considerando altura, cargas, fundación y drenaje.",
              },
              {
                numero: "04",
                titulo: "Muros de gaviones",
                texto:
                  "Diseño y construcción de soluciones en gaviones para aplicaciones donde sus características sean apropiadas.",
              },
              {
                numero: "05",
                titulo: "Estudio del sitio",
                texto:
                  "Revisión de las condiciones del terreno, desniveles, accesos y entorno del proyecto.",
              },
              {
                numero: "06",
                titulo: "Dirección técnica",
                texto:
                  "Acompañamiento profesional durante el diseño y, cuando corresponde, durante la construcción.",
              },
            ].map((item) => (

              <div
                key={item.numero}
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition"
              >

                <span className="text-blue-600 font-bold text-lg">
                  {item.numero}
                </span>

                <h3 className="text-xl font-bold text-blue-900 mt-3 mb-3">
                  {item.titulo}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.texto}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          TIPOS DE MUROS
      ========================================================= */}

      <section id="tipos" className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-blue-600 font-semibold mb-3">
              Soluciones de contención
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              ¿Qué tipo de muro necesita su proyecto?
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              La elección del sistema depende de las condiciones particulares
              de cada sitio. No existe un único tipo de muro adecuado para
              todos los proyectos.
            </p>

          </div>


          <div className="space-y-16">

            {tiposMuros.map((muro, index) => (

              <article
                key={muro.titulo}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >

                <div
                  className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >

                  <Image
                    src={muro.imagen}
                    alt={`${muro.titulo} en Costa Rica`}
                    fill
                    className="object-cover"
                  />

                </div>


                <div
                  className={
                    index % 2 !== 0
                      ? "lg:order-1"
                      : ""
                  }
                >

                  <p className="text-blue-600 font-semibold mb-2">
                    {muro.subtitulo}
                  </p>

                  <h3 className="text-3xl font-bold text-slate-900 mb-5">
                    {muro.titulo}
                  </h3>

                  <p className="text-lg text-slate-600 leading-relaxed mb-7">
                    {muro.descripcion}
                  </p>

                  <h4 className="font-bold text-lg mb-4">
                    Características
                  </h4>

                  <ul className="space-y-3">

                    {muro.caracteristicas.map((item) => (

                      <li
                        key={item}
                        className="flex gap-3 text-slate-700"
                      >

                        <span className="text-blue-600 font-bold">
                          ✓
                        </span>

                        <span>{item}</span>

                      </li>

                    ))}

                  </ul>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          COMPARACIÓN
      ========================================================= */}

      <section className="py-20 px-6 bg-slate-900 text-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-blue-400 font-semibold mb-3">
              Comparación técnica
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              ¿Qué sistema puede ser adecuado?
            </h2>

            <p className="text-slate-300 max-w-3xl mx-auto mt-5 leading-relaxed">
              La decisión debe realizarse considerando las condiciones
              particulares del proyecto y no solamente el costo inicial.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-7">

            <div className="border border-slate-700 rounded-2xl p-7">

              <h3 className="text-2xl font-bold mb-2">
                Mampostería
              </h3>

              <p className="text-slate-300 mb-5">
                Sistema de bloque reforzado.
              </p>

              <ul className="space-y-3 text-slate-300">

                <li>✓ Sistema modular</li>
                <li>✓ Construcción por etapas</li>
                <li>✓ Aplicaciones residenciales</li>

              </ul>

            </div>


            <div className="border border-slate-700 rounded-2xl p-7">

              <h3 className="text-2xl font-bold mb-2">
                Concreto armado
              </h3>

              <p className="text-slate-300 mb-5">
                Sistema de mayor capacidad estructural.
              </p>

              <ul className="space-y-3 text-slate-300">

                <li>✓ Alta capacidad estructural</li>
                <li>✓ Diseño de refuerzo</li>
                <li>✓ Fundación y drenaje</li>

              </ul>

            </div>


            <div className="border border-slate-700 rounded-2xl p-7">

              <h3 className="text-2xl font-bold mb-2">
                Gaviones
              </h3>

              <p className="text-slate-300 mb-5">
                Sistema flexible de contención.
              </p>

              <ul className="space-y-3 text-slate-300">

                <li>✓ Adaptabilidad</li>
                <li>✓ Drenaje natural</li>
                <li>✓ Control de erosión</li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          METODOLOGÍA
      ========================================================= */}

      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="max-w-3xl mb-14">

            <p className="text-blue-600 font-semibold mb-3">
              Metodología Habi-Tec
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              Así desarrollamos su proyecto
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Desde la visita inicial hasta la construcción, cada proyecto
              se desarrolla considerando las características particulares
              del terreno y las necesidades del propietario.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

            {proceso.map((paso) => (

              <div
                key={paso.numero}
                className="relative"
              >

                <div className="text-5xl font-bold text-blue-100">
                  {paso.numero}
                </div>

                <h3 className="text-xl font-bold text-blue-900 mt-2 mb-3">
                  {paso.titulo}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {paso.descripcion}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          GALERÍA
      ========================================================= */}

      <section className="py-24 px-6 bg-slate-50">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-blue-600 font-semibold mb-3">
              Proyectos y experiencia
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              Muros de retención
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Fotografías de proyectos y trabajos relacionados con soluciones
              de contención y construcción.
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-8">

            {galeria.map((foto) => (

              <div
                key={foto.imagen}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >

                <div className="relative h-[330px]">

                  <Image
                    src={foto.imagen}
                    alt={foto.titulo}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold text-blue-900">
                    {foto.titulo}
                  </h3>

                  <p className="text-slate-600 mt-2">
                    {foto.descripcion}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          POR QUÉ HABI-TEC
      ========================================================= */}

      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-blue-600 font-semibold mb-3">
            ¿Por qué Habi-Tec?
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            Ingeniería con respaldo profesional
          </h2>


          <div className="grid md:grid-cols-2 gap-6 text-left">

            {[
              "Diseño estructural con responsabilidad profesional.",
              "Recomendación del sistema de muro según las condiciones del proyecto.",
              "Planos y documentación técnica para el proyecto.",
              "Acompañamiento profesional durante la construcción.",
              "Experiencia en construcción y supervisión de obras.",
              "Atención personalizada durante el desarrollo del proyecto.",
            ].map((item) => (

              <div
                key={item}
                className="bg-slate-50 rounded-xl p-6 flex gap-4"
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

      </section>


      {/* =========================================================
          PERFIL PROFESIONAL
      ========================================================= */}

      <section className="py-20 px-6 bg-slate-900 text-white">

        <div className="max-w-5xl mx-auto">

          <div className="grid md:grid-cols-3 gap-10 items-center">

            <div className="relative h-72 rounded-2xl overflow-hidden">

              <Image
                src="/sobremi.png"
                alt="Ing. Erick Salazar Vega"
                fill
                className="object-cover"
              />

            </div>


            <div className="md:col-span-2">

              <p className="text-blue-400 font-semibold mb-3">
                Profesional responsable
              </p>

              <h2 className="text-3xl font-bold mb-5">
                Ing. Erick Salazar Vega
              </h2>

              <p className="text-slate-300 leading-relaxed mb-4">
                Profesional en Ingeniería Civil, incorporado al CFIA y
                graduado del Tecnológico de Costa Rica, con experiencia
                en construcción, diseño y gestión de proyectos.
              </p>

              <p className="text-slate-300 leading-relaxed">
                El objetivo es ofrecer soluciones de ingeniería adaptadas
                a las condiciones reales de cada proyecto, con comunicación
                clara y acompañamiento profesional.
              </p>

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
            ¿Necesita diseñar un muro de retención?
          </h2>

          <p className="text-xl text-blue-100 leading-relaxed mb-10">
            Cuéntenos sobre su terreno, desnivel o proyecto y coordinemos
            una valoración inicial de sus necesidades.
          </p>

          <a
            href="https://wa.me/50686878320"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold transition"
          >
            Solicitar cotización por WhatsApp
          </a>

        </div>

      </section>


      {/* =========================================================
          FOOTER SIMPLE
      ========================================================= */}

      <footer className="bg-slate-950 text-slate-400 py-10 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h3 className="text-white text-xl font-bold mb-3">
            Habi-Tec Arquitectura, Ingeniería y Construcción
          </h3>

          <p>
            Ingeniería Civil · Diseño · Construcción
          </p>

          <p className="mt-3">
            WhatsApp: +506 8687-8320 · info@habiteccr.com
          </p>

          <div className="mt-6">

            <Link
              href="/"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              ← Volver a Habi-Tec
            </Link>

          </div>

        </div>

      </footer>


      {/* =========================================================
          WHATSAPP
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