
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://habiteccr.com";

export const metadata: Metadata = {
  title:
    "Pruebas de laboratorio en construcción en Costa Rica: por qué no son un gasto en vano",
  description:
    "Conoce por qué el estudio de suelos, estabilidad de laderas y pruebas de concreto protegen tu inversión y evitan sobrecostos al construir en Costa Rica.",
  alternates: {
    canonical: `${siteUrl}/pruebas-de-laboratorio-construccion-costa-rica`,
  },
  openGraph: {
    title:
      "Pruebas de laboratorio en construcción: proteja su inversión",
    description:
      "Descubra cómo los estudios de suelos, estabilidad de laderas y ensayos de concreto ayudan a prevenir problemas estructurales.",
    url: `${siteUrl}/pruebas-de-laboratorio-construccion-costa-rica`,
    siteName: "Habi-Tec",
    locale: "es_CR",
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Pruebas de laboratorio en la construcción: por qué son el seguro de tu inversión y no un gasto en vano",
  description:
    "Conoce la importancia de los estudios de suelos, estabilidad de laderas y pruebas de resistencia del concreto en proyectos de construcción en Costa Rica.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteUrl}/pruebas-de-laboratorio-construccion-costa-rica`,
  },
  author: {
    "@type": "Organization",
    name: "Habi-Tec Diseño y Construcción",
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "Habi-Tec Diseño y Construcción",
    url: siteUrl,
  },
  inLanguage: "es-CR",
};

export default function PruebasLaboratorioPage() {
  return (
    <main className="bg-white text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* ENCABEZADO */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <nav className="mb-8 text-sm text-gray-300">
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Construcción</span>
          </nav>

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-400">
            Ingeniería y construcción en Costa Rica
          </p>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
            Pruebas de laboratorio en la construcción: por qué son el seguro
            de tu inversión y no un gasto en vano
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            Conozca cómo los estudios de suelos, estabilidad de laderas y
            ensayos de resistencia del concreto ayudan a prevenir fallas
            estructurales y sobrecostos en su proyecto.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-300">
            <span>Habi-Tec</span>
            <span>•</span>
            <span>Ingeniería civil</span>
            <span>•</span>
            <span>Costa Rica</span>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1fr_300px] lg:py-20">

        <article className="min-w-0">
          <div className="mb-10 border-l-4 border-amber-500 bg-gray-50 p-6">
            <p className="text-lg leading-relaxed text-gray-700">
              Cuando se planifica una obra en Costa Rica, es común que el
              propietario busque optimizar cada colón del presupuesto. En
              ese proceso, estudios técnicos como el análisis de suelos,
              la estabilidad de laderas o los ensayos de resistencia del
              concreto suelen percibirse como trámites costosos o requisitos
              burocráticos que no se ven en el acabado final de la casa.
            </p>
          </div>

          <p className="mb-8 leading-8">
            Sin embargo, en la ingeniería y la arquitectura moderna, omitir
            estas pruebas significa tomar decisiones sin conocer completamente
            las condiciones del proyecto. Lejos de ser un gasto en vano,
            las pruebas de laboratorio y los estudios especializados son
            herramientas de prevención que ayudan a evitar fallas estructurales,
            reparaciones costosas y modificaciones durante la construcción.
          </p>

          {/* SECCIÓN 1 */}
          <section className="mb-12">
            <h2 className="mb-5 text-2xl font-bold text-slate-900 md:text-3xl">
              1. Estudio de suelos: conocer lo que sostiene tu obra
            </h2>

            <p className="mb-5 leading-8">
              Antes de excavar una sola zanja, es indispensable conocer las
              características del terreno. En Costa Rica, la composición
              del suelo puede cambiar considerablemente de una zona a otra:
              desde suelos arcillosos en el Valle Central hasta terrenos
              arenosos, aluviales o con niveles freáticos elevados en zonas
              costeras y rurales.
            </p>

<figure className="my-8">
  <img
    src="ensayo-dpl-suelos-costa-rica.jpg"
    alt="Ensayo de penetración dinámica ligera DPL para investigación geotécnica de suelos en Costa Rica"
    className="h-auto w-full rounded-xl object-cover shadow-md"
    loading="lazy"
    width="1200"
    height="800"
  />
  <figcaption className="mt-3 text-center text-sm text-gray-500">
    Ensayo de penetración dinámica ligera (DPL), utilizado
    para investigar las condiciones y resistencia del terreno.
  </figcaption>
</figure>

            <h3 className="mb-2 text-xl font-semibold text-slate-800">
              ¿Qué evalúa un estudio de suelos?
            </h3>

            <ul className="mb-6 list-disc space-y-2 pl-6 leading-7">
              <li>La capacidad soportante del terreno.</li>
              <li>La estratigrafía y composición de las diferentes capas.</li>
              <li>La profundidad recomendada para el desplante de cimientos.</li>
              <li>La presencia de agua subterránea y otras condiciones relevantes.</li>
              <li>Los parámetros geotécnicos necesarios para el diseño de cimentaciones.</li>
            </ul>

            <h3 className="mb-2 text-xl font-semibold text-slate-800">
              ¿Qué puede pasar si se omite?
            </h3>

            <p className="mb-5 leading-8">
              Diseñar una cimentación sin información suficiente del terreno
              puede provocar asentamientos diferenciales. Estos problemas
              pueden manifestarse mediante paredes agrietadas, puertas y
              ventanas que se descuadran, pisos hundidos y deformaciones
              en diferentes elementos de la edificación.
            </p>

            <p className="leading-8">
              En casos severos, puede ser necesario ejecutar trabajos de
              recalce o reforzamiento de cimentaciones, cuyo costo puede
              superar ampliamente el de una investigación geotécnica
              realizada oportunamente.
            </p>

            <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-6">
              <h3 className="mb-2 font-bold text-blue-900">
                El ahorro real
              </h3>
              <p className="leading-7 text-blue-900">
                Un estudio de suelos permite que el ingeniero estructural
                diseñe una cimentación acorde con las condiciones reales
                del terreno, evitando tanto soluciones insuficientes como
                sobredimensionamientos innecesarios.
              </p>
            </div>
          </section>

          {/* SECCIÓN 2 */}
          <section className="mb-12">
            <h2 className="mb-5 text-2xl font-bold text-slate-900 md:text-3xl">
              2. Estudio de estabilidad de laderas: indispensable en terrenos quebrados
            </h2>

            <p className="mb-5 leading-8">
              Construir en terrenos con pendientes o vistas panorámicas es
              atractivo en cantones montañosos y costeros del país, como
              Pérez Zeledón, Uvita, Quepos y diferentes zonas del Valle
              Central. No obstante, la topografía irregular y las lluvias
              intensas de Costa Rica hacen necesario analizar cómo se
              comportará el terreno cuando se realicen cortes o rellenos.
            </p>

            <h3 className="mb-2 text-xl font-semibold text-slate-800">
              ¿Qué evalúa?
            </h3>

            <ul className="mb-6 list-disc space-y-2 pl-6 leading-7">
              <li>Las condiciones de estabilidad del talud.</li>
              <li>El riesgo de deslizamientos y movimientos de masa.</li>
              <li>La influencia del agua superficial y subterránea.</li>
              <li>La geometría de los cortes y rellenos proyectados.</li>
              <li>La necesidad de obras de contención y drenaje.</li>
            </ul>

            <h3 className="mb-2 text-xl font-semibold text-slate-800">
              ¿Qué pasa si se omite?
            </h3>

            <p className="leading-8">
              Un corte mal diseñado o un relleno sin las condiciones
              adecuadas de estabilidad puede generar deslizamientos,
              especialmente durante la época lluviosa. Esto puede poner
              en riesgo la vivienda, las propiedades vecinas, las vías
              de acceso y la seguridad de sus ocupantes.
            </p>

            <p className="mt-5 leading-8">
              Por esta razón, antes de construir en terrenos inclinados,
              es importante determinar si se requiere una evaluación
              geotécnica especializada y un diseño adecuado de las obras
              de estabilización.
            </p>
          </section>

          {/* SECCIÓN 3 */}
          <section className="mb-12">
            <h2 className="mb-5 text-2xl font-bold text-slate-900 md:text-3xl">
              3. Pruebas de concreto: garantizar la resistencia real
            </h2>

            <p className="mb-5 leading-8">
              El concreto es uno de los materiales fundamentales de la
              mayoría de las edificaciones en Costa Rica. Sin embargo,
              su calidad depende tanto de la mezcla suministrada como
              de su transporte, colocación, vibrado y curado en el sitio
              de construcción.
            </p>

            <h3 className="mb-2 text-xl font-semibold text-slate-800">
              ¿Qué evalúan las pruebas de resistencia?
            </h3>

            <p className="mb-5 leading-8">
              Mediante muestras tomadas durante el vaciado, se elaboran
              cilindros de concreto que posteriormente son sometidos
              a ensayos de compresión en un laboratorio competente.
              Estos ensayos permiten verificar si el material alcanza
              la resistencia especificada para el proyecto.
            </p>

            <p className="mb-5 leading-8">
              Por ejemplo, una especificación de resistencia puede ser
              de 210 kg/cm² o 280 kg/cm², dependiendo del diseño
              estructural y de las características de cada elemento.
              Los ensayos pueden realizarse a diferentes edades,
              comúnmente a los 7 y 28 días, según el plan de control
              de calidad.
            </p>

            <h3 className="mb-2 text-xl font-semibold text-slate-800">
              ¿Qué pasa si se omite?
            </h3>

            <p className="leading-8">
              A simple vista, un concreto deficiente puede lucir igual
              que uno que cumple con la resistencia especificada. Si
              el material no alcanza los valores requeridos, la capacidad
              estructural del elemento podría verse comprometida.
              Esto resulta especialmente importante en Costa Rica,
              donde las edificaciones deben diseñarse considerando
              las solicitaciones sísmicas correspondientes.
            </p>

            <p className="mt-5 leading-8">
              El control de calidad permite identificar posibles
              incumplimientos y tomar decisiones técnicas oportunas,
              antes de que los problemas se extiendan a otras etapas
              de la construcción.
            </p>
          </section>

          {/* SECCIÓN 4 */}
          <section className="mb-12">
            <h2 className="mb-5 text-2xl font-bold text-slate-900 md:text-3xl">
              4. Respaldo técnico y requisitos para proyectos de construcción
            </h2>

            <p className="mb-5 leading-8">
              Más allá de la seguridad física, los estudios técnicos
              y los informes de laboratorio proporcionan documentación
              que respalda las decisiones tomadas durante el desarrollo
              de una obra.
            </p>

            <h3 className="mb-2 text-xl font-semibold text-slate-800">
              Permisos de construcción
            </h3>

            <p className="mb-5 leading-8">
              Dependiendo de las características del terreno y de la
              complejidad del proyecto, pueden requerirse estudios
              geotécnicos, análisis de estabilidad u otros documentos
              técnicos para respaldar el diseño y la tramitación.
            </p>

            <p className="mb-6 leading-8">
              Si está planeando construir en la zona sur del país,
              puede conocer más sobre nuestro servicio de{" "}
              <Link
                href="/permisos-de-construccion-perez-zeledon"
                className="font-semibold text-blue-700 underline hover:text-blue-900"
              >
                permisos de construcción en Pérez Zeledón
              </Link>.
            </p>

            <h3 className="mb-2 text-xl font-semibold text-slate-800">
              Financiamiento y respaldo documental
            </h3>

            <p className="mb-5 leading-8">
              Las entidades financieras pueden solicitar documentación
              técnica y verificaciones relacionadas con las condiciones
              del proyecto, según el tipo de financiamiento y las
              garantías involucradas.
            </p>

            <h3 className="mb-2 text-xl font-semibold text-slate-800">
              Garantía de calidad y valor de la propiedad
            </h3>

            <p className="leading-8">
              Contar con informes de laboratorio, bitácoras y documentación
              técnica permite conservar evidencia de los controles
              realizados durante la construcción. Esta información
              puede resultar valiosa para futuras inspecciones,
              mantenimientos o procesos de compraventa.
            </p>
          </section>

          {/* CONCLUSIÓN */}
          <section className="mb-12">
            <h2 className="mb-5 text-2xl font-bold text-slate-900 md:text-3xl">
              Construir con respaldo técnico desde el primer día
            </h2>

            <p className="mb-5 leading-8">
              Invertir en estudios geotécnicos y controles de calidad
              permite reducir la incertidumbre durante la construcción.
              El alcance y el costo de estas investigaciones dependen
              del tipo de proyecto, las características del terreno
              y las especificaciones técnicas requeridas.
            </p>

            <p className="mb-5 leading-8">
              En Habi-Tec integramos servicios de ingeniería civil,
              arquitectura y gestión técnica de proyectos para ayudar
              a nuestros clientes a tomar decisiones informadas desde
              la evaluación inicial del lote hasta el desarrollo
              de la obra.
            </p>

            <p className="leading-8">
              Nuestro objetivo es que cada proyecto se desarrolle
              con criterios técnicos adecuados, optimizando los
              recursos disponibles sin comprometer la seguridad
              ni la calidad de la construcción.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-2xl bg-slate-900 p-8 text-white md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
              Habi-Tec · Arquitectura, Ingeniería y Construcción
            </p>

            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              ¿Está planeando construir en Costa Rica?
            </h2>

            <p className="mb-7 leading-7 text-gray-300">
              Le asesoramos en la evaluación técnica de su proyecto,
              planificación, diseño y gestión de permisos de construcción.
              Tome decisiones con respaldo profesional desde el inicio.
            </p>

            <a
              href="https://wa.me/50686878320"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-amber-500 px-7 py-3 font-bold text-slate-950 transition hover:bg-amber-400"
            >
              Solicitar asesoría por WhatsApp
            </a>

            <p className="mt-5 text-sm text-gray-400">
              Habi-Tec Diseño y Construcción · Costa Rica
            </p>
          </section>
        </article>

        {/* BARRA LATERAL */}
        <aside className="space-y-6">
          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="mb-4 text-lg font-bold text-slate-900">
              Servicios de Habi-Tec
            </h2>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-blue-700 hover:underline"
                >
                  Arquitectura e ingeniería
                </Link>
              </li>
              <li>
                <Link
                  href="/permisos-de-construccion-perez-zeledon"
                  className="text-blue-700 hover:underline"
                >
                  Permisos de construcción
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-blue-700 hover:underline"
                >
                  Construcción de viviendas
                </Link>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-gray-50 p-6">
            <h2 className="mb-3 text-lg font-bold text-slate-900">
              ¿Necesita asesoría profesional?
            </h2>

            <p className="mb-5 text-sm leading-6 text-gray-600">
              Consulte sobre su proyecto de construcción y los
              requerimientos técnicos necesarios.
            </p>

            <a
              href="https://wa.me/50686878320"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-slate-700"
            >
              Contactar a Habi-Tec
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
