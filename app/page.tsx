"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedImg, setSelectedImg] = useState(null); // Estado para el modal
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
    <main className="min-h-screen bg-deep-charcoal font-sans text-soft-grey px-6 md:px-12 lg:px-20 overflow-x-hidden selection:bg-accent selection:text-pure-white">
      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full px-6 md:px-12 lg:px-20 pt-6 md:pt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 z-50 tracking-[0.4em] text-[14px] md:text-[18px]">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-light text-pure-white uppercase"
        >
          Fernando Manuel Palacios Soto
        </motion.h1>

        <nav className="flex gap-6 md:gap-10">
          {[
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/in/fernando-soto-88615b25b",
            },
            {
              name: "GitHub",
              url: "https://github.com/FerMPS",
            },
            {
              name: "Resume",
              url: "/docs/fscv26_En.pdf",
            },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-soft-grey/80 hover:text-accent transition-colors duration-300"
            >
              {link.name}
              {/* Línea de subrayado animada */}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section className="min-h-[90vh] flex flex-col justify-center pt-48 md:pt-32">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-[8rem] lg:text-[10rem] leading-[1.1] md:leading-[0.8] text-pure-white uppercase tracking-tighter font-medium"
        >
          Full Stack Developer
          <br />
          <span className="text-accent">& Cybersecurity Enthusiast</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex justify-end"
        >
          <p className="mt-8 md:mt-12 text-base md:text-2xl max-w-3xl font-light tracking-wide leading-relaxed text-right">
            IT professional with a background in computer systems, networking,
            and cybersecurity. Experienced in database management, process
            automation, and web development.
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <div className="mt-40 space-y-52">
        {/* SKILLS */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center py-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-[5rem] text-pure-white uppercase text-center tracking-tighter font-medium mb-32">
            Ski<span className="text-accent">lls</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-4">
            {[
              "C# / ASP.NET",
              "Java / Spring",
              "Python",
              "PHP / Laravel",
              "SQL",
              "Cybersecurity",
              "UI Design",
              "Networking",
              "Linux / CLI",
              "Windows Server",
              "Google Cloud",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-8 py-4 border border-soft-grey/20 rounded-full text-soft-grey/80 text-lg md:text-xl cursor-default backdrop-blur-sm hover:border-accent/50 hover:text-accent transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* WORK */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="px-6 py-32"
        >
          <h2 className="text-4xl sm:text-5xl md:text-[5rem] text-pure-white uppercase text-center tracking-tighter font-medium mb-32">
            Check out some of <span className="text-accent">my work</span>
          </h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Sectrekk"
              desc="A sophisticated modular template designed for high-performance blog structures."
              tags={["Laravel", "PHP"]}
              imageUrl="/pattern.svg"
            />
            <ProjectCard
              title="Art-Gallery"
              desc="Immersive visual experience showcasing classical art with modern interactions."
              tags={["UI/UX", "Laravel"]}
              imageUrl="/pattern.svg"
            />
            <ProjectCard
              title="Imprenta UMA"
              desc="Complex production management system focused on operational efficiency."
              tags={["GAS", "Scripts"]}
              imageUrl="/pattern.svg"
            />
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 py-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-[5rem] text-pure-white uppercase text-center tracking-tighter font-medium mb-32">
            Exp<span className="text-accent">erience</span>
          </h2>

          <div className="flex flex-col">
            <ExperienceItem
              company="Hospital San Juan de Dios"
              role="Data Analyst & Automation"
              period="2025"
              tasks={[
                "Data entry and management, accurate digitization of records in database.",
                "Development and implementation of an automated messaging system for appointment notifications.",
                "Generation of weekly reports to track key metrics and improve operational efficiency.",
              ]}
            />
            <ExperienceItem
              company="ITCA-FEPADE"
              role="Adjunct Instructor"
              period="2023 — 2024"
              tasks={[
                "Delivered technical instruction in Programming Logic, Server Installation and Maintenance, Cybersecurity, and Electronics",
                "Designed course syllabi and instructional materials, and supported faculty development by training colleagues in the integration of technology into teaching practices.",
              ]}
            />
            <ExperienceItem
              company="Teleperformance"
              role="Bilingual CSR"
              period="2020 — 2021"
              tasks={[
                "Provided bilingual customer support for an internet and telecommunications services account.",
              ]}
            />
          </div>
        </motion.section>

        {/* SECCIÓN CERTIFICACIONES ACTUALIZADA */}
        <motion.section className="max-w-7xl mx-auto px-6 py-32">
          <h2 className="text-2xl sm:text-3xl md:text-[5rem] text-pure-white uppercase text-center tracking-tighter font-medium mb-32">
            Certific<span className="text-accent">ations</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            <CertificationCard
              title="Git & GitHub"
              provider="Platzi"
              year="2025"
              imageUrl="/certifications/git&github.webp"
              onOpen={setSelectedImg} // Pasamos la función
            />
            <CertificationCard
              title="Internet Networks"
              provider="Platzi"
              year="2025"
              imageUrl="/certifications/redesinformaticas.webp"
              onOpen={setSelectedImg}
            />
            <CertificationCard
              title="Learning Cybersecurity"
              provider="Platzi"
              year="2025"
              imageUrl="/certifications/seguridadinformatica.webp"
              onOpen={setSelectedImg}
            />
          </div>
        </motion.section>

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-charcoal/90 backdrop-blur-xl p-4 md:p-20 cursor-zoom-out"
            >
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedImg}
                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg border border-white/10"
                alt="Enlarged Certificate"
              />

              {/* Botón de cerrar flotante */}
              <div className="absolute top-10 right-10 text-pure-white text-xs tracking-[0.5em] uppercase opacity-50 hover:opacity-100 transition-opacity">
                Click to close
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="mt-60 pb-10 text-[10px] uppercase tracking-[0.5em] opacity-20 text-center">
        FERNANDO SOTO — 2026
      </footer>
    </main>
  );
}

function ProjectCard({ title, desc, tags, imageUrl }: any) {
  return (
    <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-accent transition-colors duration-500">
      {/* Fondo*/}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
        />
        {/* Overlay  */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* CONTENIDO TEXTUAL */}
      <div className="relative z-10 h-full p-10 flex flex-col justify-end items-start text-left">
        <div className="flex gap-3 mb-4">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="text-[11px] uppercase tracking-[0.3em] text-soft-grey/50 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <h4 className="text-5xl tracking-tighter text-pure-white mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h4>

        <p className="text-soft-grey text-lg leading-relaxed max-w-[90%] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          {desc}
        </p>

        {/* Línea decorativa roja */}
        <div className="w-0 h-[1px] bg-accent mt-6 group-hover:w-full transition-all duration-700 opacity-50" />
      </div>
    </div>
  );
}

function ExperienceItem({ company, role, period, tasks }: any) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-4 py-12 border-b border-soft-grey/10 last:border-none transition-none">
      {/* Lado Izquierdo: Empresa y Periodo */}
      <div className="flex flex-col gap-1 min-w-[200px]">
        <span className="text-accent text-lg uppercase tracking-widest font-medium">
          {period}
        </span>
        <h3 className="text-pure-white text-3xl font-light">{company}</h3>
      </div>

      {/* Lado Derecho: Rol y Tareas */}
      <div className="flex flex-col gap-4 max-w-lg w-full">
        <p className="text-soft-grey text-2xl">{role}</p>
        <ul className="flex flex-col gap-3">
          {tasks.map((task: string, index: number) => (
            <li
              key={index}
              className="text-soft-grey/70 text-sm leading-relaxed flex items-start gap-3"
            >
              <span className="text-accent">•</span>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CertificationCard({ title, provider, year, imageUrl, onOpen }: any) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group flex flex-col gap-6 cursor-pointer"
      onClick={() => onOpen(imageUrl)} // Al hacer clic, enviamos la URL
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center p-8">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 scale-90 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="space-y-1 px-2">
        <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-medium">
          {provider} — {year}
        </span>
        <h4 className="text-pure-white text-xl md:text-2xl font-light leading-tight group-hover:text-accent transition-colors duration-300">
          {title}
        </h4>
      </div>
    </motion.div>
  );
}
