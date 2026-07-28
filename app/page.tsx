import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">Habi-Tec Diseño y Construcción</h1>
          <nav className="hidden md:flex gap-6 text-slate-900">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#blog">Blog</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Habi-Tec Diseño y Construcción</h1>
          <p className="text-xl mb-8 max-w-3xl">
            Diseño arquitectónico, ingeniería civil, construcción por administración,
            avalúos y gestión de permisos en Costa Rica.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="https://wa.me/50686878320" target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-6 py-3 rounded-lg">
              Solicitar Cotización
            </a>
            <a href="#contacto" className="bg-blue-600 px-6 py-3 rounded-lg">
              Ver Contacto
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
            <Image src="/heroconstruccion.jpeg" alt="Construimos sueños" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Construimos sueños</h2>
            <p className="text-lg text-gray-600">
              Cada proyecto es una historia que ayudamos a construir, desde los planos hasta
              la última puerta. En HabiTec convertimos tu idea en una realidad sólida,
              con profesionalismo y atención al detalle.
            </p>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Diseño Arquitectónico</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Anteproyectos</li>
                <li>• Planos constructivos</li>
                <li>• Diseño residencial</li>
                <li>• Modelado 3D</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Ingeniería Civil</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Dirección técnica</li>
                <li>• Inspecciones</li>
                <li>• Consultoría</li>
                <li>• Gestión de proyectos</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Construcción por Administración</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Presupuestos</li>
                <li>• Control de costos</li>
                <li>• Supervisión de obra</li>
                <li>• Coordinación de contratistas</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Avalúos</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Bienes inmuebles</li>
                <li>• Valoración de mercado</li>
                <li>• Compra y venta</li>
                <li>• Procesos administrativos</li>
              </ul>
            </div>

            <a
  href="/permisos-de-construccion"
  className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
>
  <h3 className="text-xl font-bold mb-3 text-blue-900">
    Permisos de Construcción
  </h3>

  <ul className="space-y-2 text-slate-700">
    <li>• Trámite ante el CFIA</li>
    <li>• Permisos Municipales</li>
    <li>• Dirección Técnica</li>
    <li>• Asesoría Integral</li>
  </ul>

  <span className="inline-block mt-5 text-blue-600 font-semibold">
    Más información →
  </span>
</a>

          </div>
        </div>
      </section>

      <section className="text-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Sobre mí</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
              <Image 
                src="/sobremi.png" 
                alt="Ing. Erick Salazar Vega - Habi-Tec" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Ing. Erick Salazar Vega</h3>
              <p className="mb-4">
                Profesional en Ingeniería Civil con experiencia en diseño,
                construcción, avalúos y gestión de proyectos.
              </p>
              <p className="mb-4">
                Incorporado al CFIA y graduado del Tecnológico de Costa Rica,
                brindando soluciones técnicas con enfoque profesional,
                transparencia y calidad. Máster en Gestión de proyectos,
                Con más de 13 años de experiencia en construcción.
              </p>
              <p>
                Especializado en diseño arquitectónico, construcción por
                administración, avalúos y trámites para proyectos
                residenciales y comerciales.
              </p>
            </div>
          </div>
        </div>
      </section>

<section id="proyectos" className="py-20 px-6 text-slate-900">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-10 text-center">
      Proyectos Destacados
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Proyecto 1 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <div className="relative h-64">
          <Image
            src="/proyecto1.png"
            alt="Casa Moderna - Diseño Arquitectónico"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-blue-900">
            Casa Moderna de campo. Cliente Roberto Pérez Diaz
          </h3>

          <p className="text-gray-600 mt-2">
            Diseño arquitectónico y visualización 3D.
          </p>
        </div>
      </div>

      {/* Proyecto 2 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <div className="relative h-64">
          <Image
            src="/proyecto2.png"
            alt="Casa Contemporánea"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-blue-900">
            Casa moderna, fachada posterior.
          </h3>

          <p className="text-gray-600 mt-2">
            Diseño residencial personalizado. Render.
          </p>
        </div>
      </div>

      {/* Proyecto 3 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <div className="relative h-64">
          <Image
            src="/proyecto3.jpeg"
            alt="Construcción de Condominio"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-blue-900">
            Condominio Residencial, construcción por servicio profesional.
          </h3>

          <p className="text-gray-600 mt-2">
            Supervisión y ejecución de obra. Condominio Vista a la Colina.
          </p>
        </div>
      </div>

      {/* Proyecto 4 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <div className="relative h-64">
          <Image
            src="/proyecto4.jpeg"
            alt="Casa de Habitación"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-blue-900">
            Vivienda Unifamiliar de playa. Cliente Manuel Bogantes Saborio.
          </h3>

          <p className="text-gray-600 mt-2">
            Diseño y construcción integral. Render 3D.
          </p>
        </div>
      </div>

      {/* Proyecto 5 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <div className="relative h-64">
          <Image
            src="/proyecto5.jpeg"
            alt="Diseño Interior"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-blue-900">
            Diseño Interior
          </h3>

          <p className="text-gray-600 mt-2">
            Propuesta de acabados y espacios. 
          </p>
        </div>
      </div>

      {/* Proyecto 6 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <div className="relative h-64">
          <Image
            src="/proyecto6.jpeg"
            alt="Casa Minimalista"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-blue-900">
            Casa Minimalista. Diseño de casa personal.
          </h3>

          <p className="text-gray-600 mt-2">
            Diseño contemporáneo y planificación constructiva. Diseño 3D.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* BLOG */}
<section id="blog" className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold mb-12 text-center">
      Blog
    </h2>

    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Texto */}
      <article className="bg-gray-50 rounded-xl shadow-lg p-8">

        <h3 className="text-3xl font-bold mb-6 text-blue-900">
          Ventajas de construir bajo administración
        </h3>

        <p className="text-gray-700 mb-6">
          La construcción por administración permite al propietario mantener un
          mayor control sobre el presupuesto, la calidad de los materiales y el
          avance del proyecto, siempre con el respaldo de un profesional.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Mayor control del presupuesto.</li>
          <li>Transparencia en los gastos de la obra.</li>
          <li>Flexibilidad para realizar cambios durante la construcción.</li>
          <li>Compra directa de materiales y selección de proveedores.</li>
          <li>Supervisión técnica por un ingeniero civil.</li>
          <li>Mejor control de la calidad y los tiempos de ejecución.</li>
        </ul>

        <p className="mt-6 text-gray-700">
          En Habi-Tec Diseño y Construcción administramos su proyecto de forma
          transparente, buscando optimizar costos sin comprometer la calidad.
        </p>
        <a
        
          href="/construccion-de-casas-costa-rica"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Conozca nuestro servicio de construcción de casas →
        </a>

      </article>

      {/* Imagen */}
      <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/foto blog.jpg"
          alt="Construcción bajo administración"
          fill
          className="object-cover"
        />
      </div>

    </div>

  </div>
</section>
{/* CONTACTO */}
<section id="contacto" className="py-20 px-6 bg-slate-900 text-white">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-6">
      Solicita una Cotización
    </h2>

    <p className="text-lg mb-10">
      Contáctame para discutir tu proyecto y encontrar la mejor solución para tus necesidades.
    </p>

    <div className="space-y-4 text-lg">
      <p>📱 WhatsApp: +506 8687-8320</p>
      <p>📧 Correo: info@habiteccr.com</p>
      <p>📸 Instagram: @habitec2021</p>
      <p>📸 Facebook:@HabiTec2021</p> 
    </div>
    

    <div className="mt-10">
      <a
        href="https://wa.me/50686878320"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-lg font-semibold inline-block"
      >
        Contactar por WhatsApp
      </a>
    </div>

  </div>
</section>

{/* BOTÓN FLOTANTE DE WHATSAPP */}
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