'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiPrisma, SiPostgresql, SiTailwindcss,
  SiSupabase, SiVercel, SiJavascript, SiExpress, SiRedis, SiReactquery, SiZod, SiJsonwebtokens, SiCloudinary, SiGooglecloud
} from 'react-icons/si';
import { SiVite } from 'react-icons/si';
import { HiOutlineExternalLink, HiX, HiArrowRight, HiLightningBolt, HiShieldCheck, HiDatabase } from 'react-icons/hi';
import { FaBrain, FaProjectDiagram } from 'react-icons/fa';
import './Aside.css';
import type { ReactNode } from 'react';
import type { StaticImageData } from 'next/image';

import ImgGenerator from './ProjectsImages/ai-generator-img.png';
import Freelancer from './ProjectsImages/freelancer.png';
import Nexora from './ProjectsImages/nexora.png';
import cats from './ProjectsImages/cats-gellery.jpg';
import linkedin from './ProjectsImages/automation-v2.png';
import extractor from './ProjectsImages/data-extractor-v2.png';

type AsideProject = {
  title: string;
  description: string;
  fullDescription: string;
  tags: { name: string; icon: ReactNode }[];
  image: StaticImageData;
  link: string;
  featured: boolean;
};

export default function Aside() {
  const [selectedProject, setSelectedProject] = useState<AsideProject | null>(null);

  const projects: AsideProject[] = [
    {
      title: 'NEXORA - Plateforme SaaS RH IA',
      description: 'Architecture SaaS multi-tenant avec moteur de workflows BPMS. Intégration avancée de LLM pour le matching de CV.',
      fullDescription:
        "Nexora est une solution de gestion RH de pointe qui automatise les processus complexes. Elle utilise l'IA pour analyser les CV, gérer les flux de travail (BPMS) et fournir des analyses en temps réel.",
      tags: [
        { name: 'React 18 & Vite', icon: <SiVite className="text-[#646CFF]" /> },
        { name: 'Node.js & Express', icon: <SiExpress className="text-white" /> },
        { name: 'PostgreSQL & Prisma', icon: <SiPrisma className="text-white" /> },
        { name: 'Groq AI (CV Parsing)', icon: <FaBrain className="text-purple-400" /> },
        { name: 'TanStack Query', icon: <SiReactquery className="text-[#FF4154]" /> },
        { name: 'Zustand (State)', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'Zod & React Hook Form', icon: <SiZod className="text-[#274D82]" /> },
        { name: 'JWT & Refresh Tokens', icon: <SiJsonwebtokens className="text-pink-500" /> },
        { name: 'SSE (Notifications)', icon: <HiLightningBolt className="text-yellow-400" /> },
        { name: 'Cloudinary (Storage)', icon: <SiCloudinary className="text-[#3448C5]" /> },
        { name: 'Redis (Caching)', icon: <SiRedis className="text-[#DC382D]" /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> }
      ],
      image: Nexora,
      link: 'https://nexora-si.com/',
      featured: true
    },
    {
      title: 'SaaS de Gestion Freelance',
      description: 'Pilotage complet de collaborateurs tiers. Chatbot automatisé n8n et automatisation de workflows via API.',
      fullDescription:
        "Une plateforme robuste permettant aux entreprises de gérer leurs ressources externes, incluant le suivi des missions, la facturation et une communication automatisée via n8n.",
      tags: [
        { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: 'n8n Logic', icon: <FaProjectDiagram className="text-[#FF6C37]" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: 'Auth Shield', icon: <HiShieldCheck className="text-green-400" /> }
      ],
      image: Freelancer,
      link: 'https://gestion-freelancer.vercel.app/',
      featured: true
    },
    {
      title: 'Data Extractor Premium',
      description: 'Extension Chrome professionnelle pour l’extraction massive de données (emails, téléphones) avec exportation CSV/Excel.',
      fullDescription:
        "Data Extractor est une extension Chrome (Manifest V3) conçue pour la prospection. Elle analyse les pages web en temps réel pour extraire les coordonnées de contact et les organise dans une interface moderne avec export automatisé.",
      tags: [
        { name: 'Chrome API', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'Glassmorphism UI', icon: <SiTailwindcss className="text-[#06B6D4]" /> }
      ],
      image: extractor,
      link: 'https://github.com/SandidHajar/data-extracting-extention',
      featured: true
    },
    {
      title: 'Automation LinkedIn LinkedIn',
      description: 'Script Tampermonkey pour l’automatisation intelligente des processus de login/signup et remplissage de formulaires.',
      fullDescription:
        'Développement d’un script d’automatisation robuste qui détecte les types de formulaires LinkedIn et remplit dynamiquement les données utilisateurs, optimisant ainsi les workflows répétitifs.',
      tags: [
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'Tampermonkey', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'DOM Manipulation', icon: <SiJavascript className="text-[#F7DF1E]" /> }
      ],
      image: linkedin,
      link: 'https://github.com/SandidHajar/Import_Data',
      featured: false
    },
    {
      title: 'Générateur d\'Images par IA',
      description:
        "Application créative utilisant l'API Gemini Vision pour transformer des prompts en designs uniques. Galerie communautaire et espace personnel.",
      fullDescription:
        "Utilisant les dernières avancées en IA générative, cette application permet de créer, sauvegarder et partager des visuels époustouflants. L'architecture est optimisée pour la rapidité et la scalabilité.",
      tags: [
        { name: 'Gemini API', icon: <SiGooglecloud className="text-[#4285F4]" /> },
        { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" /> },
        { name: 'Vercel', icon: <SiVercel className="text-white" /> }
      ],
      image: ImgGenerator,
      link: 'https://images-ai-generator-xi.vercel.app/',
      featured: false
    },
    {
      title: 'Cats Gallery - Système Full-Stack & API',
      description: 'Plateforme interactive avec architecture API robuste, testée sous Postman, et gestion complète via TiDB Cloud.',
      fullDescription:
        "Ce projet démontre une approche 'Backend-First'. Avant l'interface, j'ai développé une API REST complète avec Node.js et Express, validée par une suite de tests rigoureuse sur Postman. Le stockage est assuré par TiDB Cloud (Base de données distribuée compatible MySQL).",
      tags: [
        { name: 'Node.js & Express', icon: <SiExpress className="text-white" /> },
        { name: 'Postman API Testing', icon: <HiShieldCheck className="text-orange-400" /> },
        { name: 'TiDB Cloud (SQL)', icon: <HiDatabase className="text-[#4479A1]" /> },
        { name: 'CRUD Logic', icon: <FaProjectDiagram className="text-blue-400" /> }
      ],
      image: cats,
      link: 'https://cats-galery.vercel.app/',
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#0f172a] py-24">
      <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <h2 className="mb-6 text-4xl font-extrabold text-white md:text-6xl">
              Mes <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Projets</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-light italic text-gray-400 md:text-xl">
              "Le code est une forme d'art qui résout des problèmes concrets."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex h-full flex-col"
            >
              <div className="group/laptop relative mb-6 cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="relative overflow-hidden rounded-t-xl border-x-4 border-t-4 border-[#374151] bg-[#1f2937] p-2 shadow-2xl md:p-3">
                  <div className="relative h-44 w-full overflow-hidden rounded-sm bg-slate-800 md:h-56">
                    <img
                      src={project.image.src}
                      alt={project.title}
                      className="h-auto w-full object-top transition-transform duration-[6000ms] ease-in-out group-hover/laptop:-translate-y-[calc(100%-11rem)] md:group-hover/laptop:-translate-y-[calc(100%-14rem)]"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 transition-colors duration-300 group-hover/laptop:bg-transparent" />
                  </div>
                </div>
                <div className="relative h-4 rounded-b-xl bg-[#4b5563] shadow-xl">
                  <div className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-md bg-[#1f2937]" />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-purple-400">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <div key={i} className="flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-[10px] font-bold text-gray-300">
                      <span className="text-base">{tag.icon}</span> {tag.name}
                    </div>
                  ))}
                </div>

                <div
                  className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-purple-400 underline decoration-purple-500/30 underline-offset-4 transition-all hover:gap-3"
                  onClick={() => setSelectedProject(project)}
                >
                  VOIR PLUS <HiArrowRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              className="relative flex max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 shadow-2xl flex-col lg:flex-row h-[90vh] lg:h-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-50 rounded-full border border-slate-700 bg-slate-800 p-2 text-white transition-colors hover:bg-red-500/20"
              >
                <HiX className="text-2xl" />
              </button>

              <div className="group/modal-scroll relative h-[35vh] w-full overflow-hidden border-r border-slate-800 bg-slate-800 lg:h-auto lg:w-3/5">
                <img
                  src={selectedProject.image.src}
                  alt={selectedProject.title}
                  className="h-auto w-full object-top transition-transform duration-[8000ms] ease-linear hover:-translate-y-[calc(100%-400px)] lg:hover:-translate-y-[calc(100%-600px)]"
                />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
              </div>

              <div className="w-full overflow-y-auto bg-slate-900 p-8 lg:w-2/5 md:p-12">
                <h2 className="mb-6 text-3xl font-bold text-white">{selectedProject.title}</h2>
                <p className="mb-8 text-lg leading-relaxed text-gray-300">{selectedProject.fullDescription}</p>
                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-purple-400">
                    Technologies utilisées
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700">
                        <span className="text-xl">{tag.icon}</span>
                        {tag.name}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-10 sm:flex-row">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105"
                  >
                    Visiter le Site <HiOutlineExternalLink className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
