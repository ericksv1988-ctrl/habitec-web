import Image from "next/image";
export default function Home() {
  return (
    
    <main className="min-h-screen bg-white"><header className="bg-white border-b">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

    <h1 className="font-bold text-xl">
      Habi-Tec Diseño y Construccion
    </h1>

    <nav className="hidden md:flex gap-6">
<a href="#inicio">Inicio</a>
<a href="#servicios">Servicios</a>
<a href="#proyectos">Proyectos</a>
<a href="#contacto">Contacto</a>
    </nav>

  </div>
</header>

      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-bold mb-6">
            Habi-Tec Diseño & Construcción
          </h1>

          <p className="text-xl mb-8 max-w-3xl">
            Diseño arquitectónico, ingeniería civil,
            construcción por administración,
            avalúos y gestión de permisos en Costa Rica.
          </p>

<div className="flex gap-4 flex-wrap">
  <a
    href="https://wa.me/50671044293"
    target="_blank"
    className="bg-blue-600 px-6 py-3 rounded-lg"
  >
    Solicitar Cotización
  </a>

  <a
    href="#contacto"
    className="bg-blue-600 px-6 py-3 rounded-lg"
  >
    Ver Contacto
  </a>
</div>


<section className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
      <Image
        src="/heroconstruccion.jpeg"
        alt="Construimos sueños"
        fill
        className="object-cover"
      />
    </div>

    <div>
      <h2 className="text-4xl font-bold mb-4 text-slate-900">
        Construimos sueños
      </h2>
      <p className="text-lg text-gray-600">
        Cada proyecto es una historia que ayudamos a construir, desde los planos hasta la última puerta. En Habi-Tec convertimos tu idea en una realidad sólida, con profesionalismo y atención al detalle.
      </p>
    </div>

  </div>
</section>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-8">
            Servicios
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

            <div className="border p-6 rounded-xl">
              <h3 className="font-bold mb-3">
                Diseño Arquitectónico
              </h3>
              <p>
                Anteproyectos, planos y modelado.
              </p>
            </div>

            <div className="border p-6 rounded-xl">
              <h3 className="font-bold mb-3">
                Ingeniería Civil
              </h3>
              <p>
                Dirección técnica e inspecciones.
              </p>
            </div>

            <div className="border p-6 rounded-xl">
              <h3 className="font-bold mb-3">
                Construcción por Administración
              </h3>
              <p>
                Supervisión y control de obra.
              </p>
            </div>

            <div className="border p-6 rounded-xl">
              <h3 className="font-bold mb-3">
                Avalúos
              </h3>
              <p>
                Valoración de bienes inmuebles.
              </p>
            </div>

            <div className="border p-6 rounded-xl">
              <h3 className="font-bold mb-3">
                Trámites y Permisos
              </h3>
              <p>
                CFIA y municipalidades.
              </p>
            </div>

          </div>

        </div>
      </section>
<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold mb-8">
      Sobre mí
    </h2>

    <div className="grid md:grid-cols-2 gap-10 items-center">

      <div>
        <div className="h-80 bg-gray-300 rounded-xl flex items-center justify-center">
          Foto Profesional
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Ing. Erick Salazar Vega
        </h3>

        <p className="mb-4">
          Profesional en Ingeniería Civil con experiencia en diseño,
          construcción, avalúos y gestión de proyectos.
        </p>

        <p className="mb-4">
          Incorporado al CFIA y graduado del Tecnológico de Costa Rica,
          brindando soluciones técnicas con enfoque profesional,
          transparencia y calidad.
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
<section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold mb-10 text-center">
      Servicios
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
        <h3 className="text-xl font-bold mb-3 text-blue-900">
          Diseño Arquitectónico
        </h3>
        <ul className="space-y-2">
          <li>• Anteproyectos</li>
          <li>• Planos constructivos</li>
          <li>• Diseño residencial</li>
          <li>• Modelado 3D</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
        <h3 className="text-xl font-bold mb-3 text-blue-900">
          Ingeniería Civil
        </h3>
        <ul className="space-y-2">
          <li>• Dirección técnica</li>
          <li>• Inspecciones</li>
          <li>• Consultoría</li>
          <li>• Gestión de proyectos</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
        <h3 className="text-xl font-bold mb-3 text-blue-900">
          Construcción por Administración
        </h3>
        <ul className="space-y-2">
          <li>• Presupuestos</li>
          <li>• Control de costos</li>
          <li>• Supervisión de obra</li>
          <li>• Coordinación de contratistas</li>
        </ul>
      </div>

    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
        <h3 className="text-xl font-bold mb-3 text-blue-900">
          Avalúos
        </h3>
        <ul className="space-y-2">
          <li>• Bienes inmuebles</li>
          <li>• Valoración de mercado</li>
          <li>• Compra y venta</li>
          <li>• Procesos administrativos</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
        <h3 className="text-xl font-bold mb-3 text-blue-900">
          Trámites y Permisos
        </h3>
        <ul className="space-y-2">
          <li>• CFIA</li>
          <li>• Municipalidades</li>
          <li>• Visados</li>
          <li>• Gestión documental</li>
        </ul>
      </div>

    </div>

  </div>
</section>
<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold mb-10 text-center">
      Proyectos Destacados
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="h-64 bg-gray-300 rounded-xl flex items-center justify-center">
        Proyecto 1
      </div>

      <div className="h-64 bg-gray-300 rounded-xl flex items-center justify-center">
        Proyecto 2
      </div>

      <div className="h-64 bg-gray-300 rounded-xl flex items-center justify-center">
        Proyecto 3
      </div>

      <div className="h-64 bg-gray-300 rounded-xl flex items-center justify-center">
        Proyecto 4
      </div>

      <div className="h-64 bg-gray-300 rounded-xl flex items-center justify-center">
        Proyecto 5
      </div>

      <div className="h-64 bg-gray-300 rounded-xl flex items-center justify-center">
        Proyecto 6
      </div>

    </div>

  </div>
</section>
<a
  href="https://wa.me/50671044293"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition"
>
  WhatsApp
</a>
<section
  id="contacto"
  className="py-20 px-6 bg-slate-900 text-white"
>
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-6">
      Solicita una Cotización
    </h2>

    <p className="text-lg mb-10">
      Contáctame para discutir tu proyecto y encontrar la mejor solución para tus necesidades.
    </p>

    <div className="space-y-4 text-lg">

      <p>
        📱 WhatsApp: +506 7104-4293
      </p>

      <p>
        📧 Correo: ericksv1988@gmail.com
      </p>

      <p>
        📸 Instagram: @habitec2021
      </p>

    </div>

    <div className="mt-10">
      <a
        href="https://wa.me/50671044293"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 px-8 py-4 rounded-lg font-semibold inline-block"
      >
        Contactar por WhatsApp
      </a>
    </div>

  </div>
</section>
    </main>
    
  );
}
