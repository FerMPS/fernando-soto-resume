"use client";
import { motion } from "framer-motion";

export default function Home() {
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
      <header className="absolute top-0 left-0 w-full px-6 md:px-12 lg:px-20 pt-6 md:pt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 z-50 uppercase tracking-[0.4em] text-[12px] md:text-[16px]">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-light text-pure-white"
        >
          Fernando Manuel Palacios Soto
        </motion.h1>

        <nav className="flex gap-6 md:gap-10">
          <a href="#" className="hover:text-accent transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-accent transition">
            GitHub
          </a>
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
          Web Developer
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
        {/* WORK */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-pure-white mb-4">
            Selected Work
          </h2>

          <p className="text-soft-grey/60 max-w-2xl mx-auto mb-16">
            A collection of projects focused on clean design, performance and
            real-world impact.
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10 lg:gap-14">
            <ProjectCard
              title="Sectrekk"
              desc="Modular blog website template."
              tags={["Laravel", "PHP", "UI/UX"]}
            />
            <ProjectCard
              title="Auto-Messaging"
              desc="Medical appointment automation system."
              tags={["Automation", "Data"]}
            />
            <ProjectCard
              title="Imprenta UMA"
              desc="Production management system."
              tags={["GAS", "Scripts"]}
            />
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-pure-white mb-16">
            Experience
          </h2>

          <div className="flex flex-col gap-6">
            {" "}
            <ExperienceItem
              company="Hospital San Juan de Dios"
              role="Data Analyst & Automation"
              period="2025"
            />
            <ExperienceItem
              company="ITCA-FEPADE"
              role="Adjunct Instructor - Programming & Cybersecurity"
              period="2023 — 2024"
            />
            <ExperienceItem
              company="Teleperformance"
              role="Bilingual Customer Service Representative"
              period="2020 — 2021"
            />
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-pure-white mb-16">
            Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "C# / ASP.NET",
              "Java / Spring",
              "Python",
              "SQL",
              "Cybersecurity",
              "UI Design",
              "Networking",
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 border border-soft-grey/20 rounded-full text-soft-grey/70 text-sm hover:border-accent/50 hover:text-accent transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>
      </div>

      <footer className="mt-60 pb-10 text-[10px] uppercase tracking-[0.5em] opacity-20 text-center">
        FERNANDO SOTO — 2026
      </footer>
    </main>
  );
}

function ProjectCard({ title, desc, tags }: any) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl bg-white/[0.03] backdrop-blur-sm 
                 border border-white/10 p-8 flex flex-col 
                 shadow-[0_10px_30px_rgba(0,0,0,0.3)] 
                 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] 
                 transition-all duration-100 overflow-hidden"
    >
      <div className="relative z-10">
        <h4 className="text-xl md:text-2xl font-medium text-pure-white group-hover:text-accent transition">
          {title}
        </h4>

        <p className="text-sm mt-4 text-soft-grey/70 leading-relaxed flex-grow">
          {desc}
        </p>

        <div className="mt-6 flex gap-2 flex-wrap">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest 
                         text-pure-white/50 border border-white/10 
                         px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceItem({ company, role, period }: any) {
  return (
    <div
      className="flex justify-between items-start gap-6 p-6 rounded-2xl 
                 bg-white/[0.02] border border-white/10 
                 shadow-[0_8px_25px_rgba(0,0,0,0.25)] 
                 hover:shadow-[0_12px_35px_rgba(0,0,0,0.4)] 
                 transition-all duration-300"
    >
      {/* LEFT */}
      <div className="flex flex-col gap-1">
        <p className="text-pure-white text-lg">
          {company}
        </p>
        <p className="text-soft-grey/80 text-sm">
          {role}
        </p>
      </div>

      {/* RIGHT */}
      <span className="text-soft-grey/40 text-sm whitespace-nowrap">
        {period}
      </span>
    </div>
  );
}