import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navbar */}
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
        <Image
         src="/dujanex-logo.png"
         alt="DUJANEX logo"
         width={56}
         height={56}
         priority
      />

         <div className="flex flex-col leading-tight">
         <span className="text-lg font-bold tracking-wide text-zinc-900">
            DUJANEX
         </span>
         <span className="text-xs text-zinc-500">
          Empresa mexicana de desarrollo de software
        </span>
      </div>
    </a>
          <nav className="hidden gap-6 text-sm text-zinc-700 md:flex">
            <a className="hover:text-zinc-900" href="#servicios">Servicios</a>
            <a className="hover:text-zinc-900" href="#portafolio">Portafolio</a>
            <a className="hover:text-zinc-900" href="#proceso">Proceso</a>
            <a className="hover:text-zinc-900" href="#contacto">Contacto</a>
          </nav>

          <a
            href="#contacto"
            className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-800"
          >
            Cotizar
          </a>
        </div>
      </header>

      {/* Hero (estilo profesional) */}
      <section className="bg-linear-to-b from-purple-700 to-purple-950">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="mx-auto inline-flex items-center rounded-full bg-white/70 px-4 py-2 text-xs font-medium text-zinc-900">
            Desarrollo web + software a medida
          </p>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Creamos páginas web y software a medida para empresas
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 md:text-lg">
            Diseñamos soluciones modernas que automatizan procesos, mejoran la operación y proyectan una imagen profesional.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-700"
            >
              Solicitar cotización
            </a>
            <a
              href="#portafolio"
              className="rounded-lg border border-zinc-900/20 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-white"
            >
              Ver proyectos
            </a>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold">Servicios</h2>
        <p className="mt-2 text-zinc-600">
          Enfocados en lo que más valor da a un negocio: presencia digital y automatización.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Páginas web profesionales</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Landing pages, sitios corporativos y portafolios con diseño moderno, SEO y velocidad.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Software a medida</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Sistemas personalizados para registro, reportes, encuestas, paneles y automatización de procesos.
            </p>
          </div>
        </div>
      </section>

      {/* Portafolio */}
      <section id="portafolio" className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">Portafolio</h2>
          <p className="mt-2 text-zinc-600">
            Proyectos reales orientados a salud, automatización y gestión de información.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Aurif</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Software para centro audiológico: registro de pacientes y generación automática de reportes.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Estudio Económico</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Plataforma de encuestas y generación de estudio socioeconómico completo para empresas.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">App NFC Emergencias</h3>
              <p className="mt-2 text-sm text-zinc-600">
                App para lectura NFC en pulseras médicas: muestra información vital para atención de urgencias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold">Proceso</h2>
        <p className="mt-2 text-zinc-600">
          Simple, claro y con entregables desde el día 1.
        </p>

        <ol className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            ["1. Diagnóstico", "Entendemos tu necesidad y definimos alcance."],
            ["2. Propuesta", "Te entregamos plan, tiempos y costo estimado."],
            ["3. Desarrollo", "Construimos por etapas con avances visibles."],
            ["4. Entrega y soporte", "Publicación, capacitación y mantenimiento."],
          ].map(([title, desc]) => (
            <li key={title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-zinc-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold">¿Listo para empezar?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Escríbenos y te ayudamos a planear tu sitio web o tu sistema a medida.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
              href="mailto:DUJANEX@outlook.com"
            >
              Enviar correo
            </a>
            <a
              className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              href="https://wa.me/5219933339842?text=Hola%20me%20interesa%20una%20cotizaci%C3%B3n%20para%20una%20p%C3%A1gina%20web%20o%20software%20a%20medida."
             target="_blank"
             rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <p className="mt-10 text-xs text-white/50">
            © {new Date().getFullYear()} DUJANEX. Todos los derechos reservados.
          </p>
        </div>
      </section>
    </main>
  );
}
