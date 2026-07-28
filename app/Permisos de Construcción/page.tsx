import Image from "next/image";

export const metadata = {
  title: "Permisos de Construcción en Costa Rica | Habi-Tec",
  description:
    "Trámite de permisos de construcción, dirección técnica y gestión ante el CFIA y municipalidades.",
};

export default function PermisosConstruccion() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-bold mb-6">
            Permisos de Construcción en Costa Rica
          </h1>

          <p className="text-xl max-w-3xl mb-8">
            {/* ESCRIBE AQUÍ EL TEXTO INTRODUCTORIO */}
          </p>

          <a
            href="https://wa.me/50686878320"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold inline-block"
          >
            Solicitar Asesoría
          </a>

        </div>
      </section>

      {/* IMAGEN + DESCRIPCIÓN */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="relative h-96 rounded-xl overflow-hidden">

            <Image
              src="/permisos.jpg"
              alt="Permisos de construcción"
              fill
              className="object-cover"
            />

          </div>

          <div>

            <h2 className="text-4xl font-bold mb-6">
              ¿Qué es un permiso de construcción?
            </h2>

            <p className="text-lg text-gray-700">
              {/* ESCRIBE AQUÍ */}
            </p>

          </div>

        </div>

      </section>

      {/* SERVICIOS */}

      <section className="bg-gray-100 py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Nuestros Servicios
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-xl mb-3">
                Trámite Municipal
              </h3>

              <p>
                {/* TEXTO */}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-xl mb-3">
                Dirección Técnica
              </h3>

              <p>
                {/* TEXTO */}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-xl mb-3">
                Gestión ante el CFIA
              </h3>

              <p>
                {/* TEXTO */}
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ARTÍCULOS */}

      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">

            Información sobre Permisos de Construcción

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <a
              href="/permisos-de-construccion/requisitos-vivienda-unifamiliar"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl">
                Requisitos para vivienda unifamiliar
              </h3>
            </a>

            <a
              href="/permisos-de-construccion/cuanto-cuesta"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl">
                ¿Cuánto cuesta un permiso?
              </h3>
            </a>

            <a
              href="/permisos-de-construccion/cuanto-dura"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl">
                ¿Cuánto dura el permiso?
              </h3>
            </a>

            <a
              href="/permisos-de-construccion/plazo-tramite"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl">
                ¿Cuánto tarda el trámite?
              </h3>
            </a>

            <a
              href="/permisos-de-construccion/direccion-tecnica"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl">
                ¿Qué es la Dirección Técnica?
              </h3>
            </a>

            <a
              href="/permisos-de-construccion/documentos"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl">
                Documentos necesarios
              </h3>
            </a>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="bg-gray-100 py-20 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">

            Preguntas Frecuentes

          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-xl mb-3">
                Pregunta 1
              </h3>

              <p>
                {/* RESPUESTA */}
              </p>

            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-xl mb-3">
                Pregunta 2
              </h3>

              <p>
                {/* RESPUESTA */}
              </p>

            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-xl mb-3">
                Pregunta 3
              </h3>

              <p>
                {/* RESPUESTA */}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-slate-900 text-white py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">

            ¿Necesita tramitar un permiso de construcción?

          </h2>

          <p className="text-lg mb-10">

            {/* TEXTO */}

          </p>

          <a
            href="https://wa.me/50686878320"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold inline-block"
          >
            Contactar por WhatsApp
          </a>

        </div>

      </section>

    </main>
  );
}