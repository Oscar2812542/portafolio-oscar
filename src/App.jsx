
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stackSections = [
  {
    id: 1,
    title: "Frontend",
    items: ["React", "TailwindCSS", "JavaScript", "HTML5", "CSS3", "Vite"],
  },
  {
    id: 2,
    title: "Desarrollo de videojuegos",
    items: ["Unity", "C#", "Photon PUN", "Diseño 2D"],
  },
  {
    id: 3,
    title: "Modelado 3D",
    items: ["Blender 4.2", "Renderizado", "Low Poly", "Texturizado"],
  },
  {
    id: 4,
    title: "Backend & Bases de datos",
    items: ["MySQL", "PHP", "Java", "Kotlin"],
  },
];

const projects = [
  {
    id: 1,
    title: "Juego 2D — Cueva Oscura",
    description: "Videojuego estilo metroidvania inspirado en Blasphemous. Incluye enemigos dinámicos, ambientación oscura y sistema progresivo de dificultad.",
    tags: ["Unity", "C#", "Pixel Art"],
    img: "/projects/Juego2D.jpg",
  },
  {
    id: 2,
    title: "Sistema PWA para Panadería",
    description: "Sistema administrativo y de inventario desarrollado como Progressive Web App con diseño responsive y manejo de productos en tiempo real.",
    tags: ["JavaScript", "MySQL", "PWA"],
    img: "/projects/Panadería.jpg    cd c:\Users\urabe\Downloads\portafolio_oscar_final
    git init
    git add .
    git commit -m "primer commit"
    git branch -M main
    git remote add origin https://github.com/Oscar2812542/portafolio-oscar.git
    git push -u origin main",
  },
  {
    id: 3,
    title: "Editor de Video para Android y PC ",
    description: "Aplicación móvil estilo CapCut para cargar, recortar y exportar videos desde Android usando Kotlin.",
    tags: ["Android Studio", "Kotlin"],
    img: "/projects/placeholder.svg",
  },
  {
    id: 4,
    title: "Assets y Modelos 3D",
    description: "Colección de modelos y assets 3D creados en Blender para videojuegos y visualización interactiva.",
    tags: ["Blender", "Render", "3D"],
    img: "/projects/image.png",
  },
];

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const heroText = "Construyo videojuegos, aplicaciones web y experiencias visuales modernas.";
  const heroDescription = "Desarrollador creativo enfocado en videojuegos, desarrollo web, modelado 3D y experiencias digitales inmersivas. Combino diseño, programación y tecnología para crear proyectos modernos y funcionales.";
  const professionalTitle = "Creative Developer • Game Developer • 3D Artist";
  const aboutTitle = "Transformo ideas en experiencias digitales visuales e interactivas.";
  const aboutText = `Actualmente estudio informática y desarrollo proyectos enfocados en videojuegos, aplicaciones web y sistemas visuales. Tengo experiencia utilizando React, Unity, Blender, MySQL, Java, Kotlin y herramientas de diseño digital.

Me gusta combinar programación con creatividad para desarrollar experiencias modernas, interfaces atractivas y proyectos interactivos.`;

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === "dark" ? "bg-[#050816] text-white" : "bg-slate-50 text-slate-900"}`}>
      <div
        className="pointer-events-none fixed inset-0 opacity-80"
        style={{
          background: `radial-gradient(700px at ${cursorPos.x}px ${cursorPos.y}px, rgba(99,102,241,0.2), transparent 70%)`,
        }}
      />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-72 bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl" />

      <header className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-indigo-400">Portafolio profesional</p>
          <h1 className="text-3xl font-semibold mt-2">Óscar García</h1>
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">{professionalTitle}</p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#home" className="hover:text-white transition">Inicio</a>
            <a href="#about" className="hover:text-white transition">Sobre mí</a>
            <a href="#stack" className="hover:text-white transition">Stack</a>
            <a href="#projects" className="hover:text-white transition">Proyectos</a>
            <a href="#contact" className="hover:text-white transition">Contacto</a>
          </nav>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium transition hover:border-indigo-400/50"
          >
            {theme === "dark" ? "Modo claro" : "Modo oscuro"}
          </button>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <section id="home" className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-indigo-400">Creative Developer</p>
            <h2 className="mt-6 text-5xl font-semibold leading-tight md:text-6xl">{heroText}</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{heroDescription}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-500/20 transition hover:bg-indigo-400"
              >
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-indigo-400/50"
              >
                Contactarme
              </a>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_-60px_rgb(99,102,241,0.7)] backdrop-blur-xl">
                <p className="text-5xl font-semibold text-indigo-400">1</p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">Año de experiencia</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_-60px_rgb(99,102,241,0.7)] backdrop-blur-xl">
                <p className="text-5xl font-semibold text-indigo-400">20+</p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">Proyectos entregados</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_-60px_rgb(99,102,241,0.7)] backdrop-blur-xl">
                <p className="text-5xl font-semibold text-indigo-400">100%</p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">Satisfacción profesional</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -right-6 bottom-10 h-36 w-36 rounded-full bg-sky-400/10 blur-3xl" />
            <img
              src="/foto.jpg"
              alt="Óscar García"
              className="relative rounded-[2rem] border border-white/10 object-cover shadow-2xl"
            />
          </motion.div>
        </section>

        <section id="about" className="mt-24 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.8fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-indigo-400">Sobre mí</p>
              <h3 className="mt-4 text-3xl font-semibold">{aboutTitle}</h3>
            </div>
            <div className="space-y-5 text-slate-300">
              {aboutText.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-base leading-8">{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="mt-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-indigo-400">Stack tecnológico</p>
              <h3 className="mt-4 text-3xl font-semibold">Herramientas y tecnologías principales</h3>
            </div>
            <p className="max-w-xl text-slate-400">Frontend, videojuegos, modelado 3D y backend, todo con un enfoque profesional y creativo.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {stackSections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: section.id * 0.1 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl"
              >
                <h4 className="text-xl font-semibold text-white">{section.title}</h4>
                <ul className="mt-5 space-y-3 text-slate-300">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-indigo-400">Proyectos</p>
              <h3 className="mt-4 text-3xl font-semibold">Proyectos recientes</h3>
            </div>
            <p className="max-w-xl text-slate-400">Videojuegos, PWA, apps Android y assets 3D con estilo premium y enfoque profesional.</p>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: project.id * 0.1 }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-indigo-400/50"
              >
                <img src={project.img} alt={project.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-xl backdrop-blur-xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-indigo-400">Actualmente trabajando en</p>
              <h3 className="mt-4 text-3xl font-semibold">Proyectos activos</h3>
            </div>
            <div className="space-y-3 text-slate-300">
              <p>• Videojuego 2D inspirado en Blasphemous</p>
              <p>• Herramientas IA para creación de contenido</p>
              <p>• Assets 3D para videojuegos</p>
              <p>• Sistemas web modernos</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-24 rounded-[2rem] border border-white/10 bg-indigo-500/5 p-10 backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-indigo-400">Contacto</p>
              <h3 className="mt-4 text-3xl font-semibold">¿Tienes una idea o proyecto?</h3>
              <p className="mt-4 max-w-xl text-slate-300">Hablemos y construyamos algo increíble.</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:chchico280102@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-indigo-400"
              >
                Enviar correo
              </a>
              <div className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-slate-300">
                <a href="https://github.com/Oscar2812542" target="_blank" rel="noreferrer" className="hover:text-white">
                  GitHub
                </a>
                <a href="https://wa.me/14171068502" target="_blank" rel="noreferrer" className="hover:text-white">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-white/5 py-8 text-center text-sm text-slate-400">
        © 2026 Óscar García
        <br />
        Diseñado y desarrollado por mí.
      </footer>
    </div>
  );
}
