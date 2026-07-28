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
            Tramita tu permiso de construcción en Costa Rica de forma rápida, segura y sin complicaciones. Te acompañamos en todo el proceso ante el CFIA y la Municipalidad.
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
              src="/permisos.jpeg"
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
              El permiso de construcción es la autorización oficial que se debe obtener antes de iniciar cualquier obra (nueva construcción, remodelación o ampliación), y certifica que el proyecto cumple con las normas técnicas, de seguridad y urbanísticas vigentes. Este trámite se gestiona principalmente a través del CFIA (Colegio Federado de Ingenieros y de Arquitectos), quien revisa los planos y da el visado profesional. Además, el proyecto debe ser revisado y aprobado por instituciones como el Ministerio de Salud (condiciones sanitarias) y la Municipalidad correspondiente (uso de suelo y cumplimiento de reglamentos locales), entre otras entidades según el tipo de obra (AyA, ICE, Bomberos, etc.).
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
                Se analiza el uso de suelo suministrado por la Municipalidad de cabecera, en este uso de suelo hay reglas de construcción tales como: retiros de construcción, áreas mínimas de construcción, si se puede construir vivienda o comercio, altura máxima, entre otros.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-xl mb-3">
                Dirección Técnica
              </h3>

              <p>
                La dirección técnica es el servicio mediante el cual un profesional responsable supervisa que la construcción se esté realizando correctamente, siguiendo los planos aprobados y las normas de calidad y seguridad. Es como tener un "responsable" que vigila que la obra se construya bien, desde el inicio hasta el final, y que firma ante el CFIA y la Municipalidad garantizando que todo se hizo como corresponde.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-xl mb-3">
                Gestión ante el CFIA
              </h3>

              <p>
                Se suben los planos acordes a los requisitos solicitados por el CFIA tales como: planos arquitectonicos, planos estructurales, planos mecánicos y planos eléctricos. Planos eléctricos deben contener diagrama unifilar y tablero eléctrico acorde a la norma NEC.
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
              <p>
                Plano Catastro.
                Disponibilidad de agua.
                Permiso de vertido de aguas negras en caso de requerirse.
              </p>
            </a>

            <a
              href="/permisos-de-construccion/cuanto-cuesta"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl">
                ¿Cuánto cuesta un permiso?
              </h3>
              <p>
                Depende del tipo y tamaño de la  construcción, ya que varía de acuerdo al costo total de la construcción.
              </p>
            </a>

            <a
              href="/permisos-de-construccion/cuanto-dura"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl">
                ¿Cuánto dura el permiso?
              </h3>
               <p>
                Una vez dado el permiso municipal dura 1 año, con opciones a prórrogas.
              </p>
            </a>

            <a
              href="/permisos-de-construccion/plazo-tramite"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl">
                ¿Cuánto tarda el trámite?
              </h3>
              <p>
                El trámite tarda: 20 días CFIA, 30 días Muncipalidad, 30 días de subsanación. *días hábiles.
              </p>
            </a>

            <a
              href="/permisos-de-construccion/direccion-tecnica"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl">
                ¿Dirección Técnica?
              </h3>
              <p>
                En Costa Rica es de carácter obligatorio tener un director técnico en obra.
              </p>
            </a>

            <a
              href="/permisos-de-construccion/documentos"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl">
                Documentos necesarios
              </h3>
              <p>
                Uso de suelo municipal, plano catastro, disponibilidad de agua, entre otros.
              </p>
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
                  Que pasa si construyo sin permisos y la municipalidad me clausuró? hay que solicitar los permisos correspondientes y pagar una multa.
              </p>

            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-xl mb-3">
                Pregunta 2
              </h3>

              <p>
                Puedo hacer cambios en la construcción sin autorización del director técnico? No se puede, tiene que ser autorizado por el director técnico.
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