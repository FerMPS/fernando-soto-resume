"use client"; // Necesario para las animaciones
import { motion } from "framer-motion";

export default function Home() {
  // Variantes de animación para reutilizar
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <main className="min-h-screen bg-deep-charcoal font-sans text-soft-grey p-6 md:p-12 lg:p-20 overflow-x-hidden selection:bg-accent selection:text-pure-white">
      {/* HEADER - Estático en el flujo (se queda arriba al hacer scroll) */}
      <header className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-50 uppercase tracking-[0.4em] text-[16px]">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-light text-pure-white"
        >
          Fernando Manuel Palacios Soto
        </motion.h1>
        <nav className="flex gap-10">
          <a
            href="https://www.linkedin.com/in/fernando-soto-88615b25b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/FerMPS"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            GitHub
          </a>
        </nav>
      </header>

      {/* HERO SECTION - Animación de entrada principal */}
      <section className="min-h-[90vh] flex flex-col justify-center pt-32">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-[10rem] leading-[0.8] text-pure-white uppercase tracking-tighter font-medium"
        >
          Web Developer
          <br />
          <span className="text-accent">& Cybersecurity Enthusiast</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex justify-end md:mr-20"
        >
          <p className="mt-12 text-lg md:text-2xl max-w-2xl font-light tracking-wide leading-relaxed text-right">
            IT professional with a background in computer systems, networking,
            and cybersecurity. Experienced in database management, process
            automation, and web development, currently completing a Bachelor's
            degree in Computer Science.
          </p>
        </motion.div>
      </section>

      <div className="mt-40 space-y-60">
        {/* 01. TRABAJOS - Proyectos extraídos de tu experiencia real */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="border-t border-soft-grey/10 pt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-3">
              <span className="text-8xl font-black text-pure-white/5 tracking-tighter leading-none block">
                01
              </span>
              <h3 className="text-2xl uppercase tracking-[0.3em] text-accent mt-[-20px] ml-4 font-medium">
                My Work
              </h3>
            </div>
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Sectrekk"
                desc="Modular blog website template."
                tags={["Laravel", "PHP", "UI/UX"]}
                variants={fadeIn}
              />
              <ProjectCard
                title="Auto-Messaging"
                desc="Automated system for medical appointment notifications implemented in Hospital San Juan de Dios[cite: 10]."
                tags={["Automation", "Data"]}
                variants={fadeIn}
              />
              <ProjectCard
                title="Imprenta UMA"
                desc="Production management system developed with Google Apps Script."
                tags={["GAS", "Scripts"]}
                variants={fadeIn}
              />
            </div>
          </div>
        </motion.section>

        {/* 02. EXPERIENCIA - Historial académico y profesional */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10"
        >
          <div className="md:col-span-3">
            <span className="text-8xl font-black text-pure-white/5 tracking-tighter leading-none block">
              02
            </span>
            <h3 className="text-2xl uppercase tracking-[0.3em] text-accent mt-[-20px] ml-4 font-medium">
              Experiencie
            </h3>
          </div>
          <div className="md:col-span-9 space-y-12">
            <ExperienceItem
              company="Hospital San Juan de Dios"
              role="Data Analyst & Automation"
              period="2025"
            />
            <ExperienceItem
              company="ITCA-FEPADE"
              role="Adjunct Instructor - Programming & Cybersecurity"
              period="2023 - 2024"
            />
            <ExperienceItem
              company="Teleperformance"
              role="Bilingual Customer Service Representative"
              period="2020 - 2021"
            />
          </div>
        </motion.section>

        {/* 03. SKILLS & AFICIONES */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10"
        >
          <div className="md:col-span-3">
            <span className="text-8xl font-black text-pure-white/5 tracking-tighter leading-none block">
              03
            </span>
            <h3 className="text-2xl uppercase tracking-[0.3em] text-accent mt-[-20px] ml-4 font-medium">
              Skills
            </h3>
          </div>
          <div className="md:col-span-9">
            <ul className="text-3xl md:text-5xl font-light text-pure-white flex flex-wrap gap-x-12 gap-y-6">
              {[
                "C# / ASP.NET",
                "Java / Spring",
                "Python",
                "SQL",
                "Cybersecurity",
                "UI Design",
                "Networking",
              ].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 10, color: "#ff4d4d" }}
                  className="cursor-default"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>
      </div>

      <footer className="mt-60 pb-10 text-[10px] uppercase tracking-[0.5em] opacity-20 text-center">
        FERNANDO SOTO — 2026
      </footer>
    </main>
  );
}

function ProjectCard({ title, desc, tags, variants }: any) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5, borderColor: "rgba(255, 77, 77, 0.3)" }}
      className="group bg-pure-white/[0.02] p-8 flex flex-col h-full border border-soft-grey/5 transition-colors duration-500"
    >
      <h4 className="text-2xl font-medium text-pure-white group-hover:text-accent transition-colors">
        {title}
      </h4>
      <p className="text-sm mt-4 text-soft-grey opacity-70 font-light flex-grow">
        {desc}
      </p>
      <div className="mt-6 flex gap-2 flex-wrap">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className="text-[9px] uppercase tracking-widest text-pure-white/40 border border-pure-white/10 px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ExperienceItem({ company, role, period }: any) {
  return (
    <div className="flex justify-between items-baseline border-b border-soft-grey/10 pb-6">
      <div>
        <h4 className="text-2xl font-medium text-pure-white">{company}</h4>
        <p className="text-xs uppercase tracking-widest opacity-60 mt-1">
          {role}
        </p>
      </div>
      <span className="text-sm font-light opacity-40">{period}</span>
    </div>
  );
}
