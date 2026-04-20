import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiPrisma, SiPostgresql, SiTailwindcss, 
  SiSupabase, SiVercel, SiJavascript, 
  SiExpress, SiRedis,  SiVite, 
  SiReactquery, SiZod, SiJsonwebtokens, SiCloudinary,
  SiGooglecloud
} from 'react-icons/si';
import { 
  HiOutlineExternalLink, HiX, HiArrowRight, HiLightningBolt, HiShieldCheck, HiDatabase
} from 'react-icons/hi';
import { FaBrain, FaProjectDiagram} from 'react-icons/fa';
import './Aside.css';

import weather from './ProjectsImages/weather-app.png';
import Gemini from './ProjectsImages/gemini-chat.jpg';
import ImgGenerator from './ProjectsImages/ai-generator-img.png';
import Freelancer from './ProjectsImages/freelancer.png';
import Nexora from './ProjectsImages/nexora.png';
import cats from './ProjectsImages/cats-gellery.jpg';
import linkedin from './ProjectsImages/automation-v2.png';
import extractor from './ProjectsImages/data-extractor-v2.png';
import apiDev from './ProjectsImages/api-dev.png';

export default function Aside() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'NEXORA - Plateforme SaaS RH IA',
      description: 'Architecture SaaS multi-tenant avec moteur de workflows BPMS. Intégration avancée de LLM pour le matching de CV.',
      fullDescription: 'Nexora est une solution de gestion RH de pointe qui automatise les processus complexes. Elle utilise l\'IA pour analyser les CV, gérer les flux de travail (BPMS) et fournir des analyses en temps réel.',
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
        { name: 'TailwindCSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      ],
      image: Nexora,
      link: 'https://nexora-si.com/',
      featured: true,
    },
    {
      title: 'SaaS de Gestion Freelance',
      description: 'Pilotage complet de collaborateurs tiers. Chatbot automatisé n8n et automatisation de workflows via API.',
      fullDescription: 'Une plateforme robuste permettant aux entreprises de gérer leurs ressources externes, incluant le suivi des missions, la facturation et une communication automatisée via n8n.',
      tags: [
        { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: 'n8n Logic', icon: <FaProjectDiagram className="text-[#FF6C37]" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: 'Auth Shield', icon: <HiShieldCheck className="text-green-400" /> }
      ],
      image: Freelancer,
      link: 'https://gestion-freelancer.vercel.app/',
      featured: true,
    },
    {
      title: 'Data Extractor Premium',
      description: 'Extension Chrome professionnelle pour l’extraction massive de données (emails, téléphones) avec exportation CSV/Excel.',
      fullDescription: 'Data Extractor est une extension Chrome (Manifest V3) conçue pour la prospection. Elle analyse les pages web en temps réel pour extraire les coordonnées de contact et les organise dans une interface moderne avec export automatisé.',
      tags: [
        { name: 'Chrome API', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'Glassmorphism UI', icon: <SiTailwindcss className="text-[#06B6D4]" /> }
      ],
      image: extractor,
      link: 'https://github.com/SandidHajar/data-extracting-extention',
      featured: true,
    },
    {
      title: 'Automation LinkedIn LinkedIn',
      description: 'Script Tampermonkey pour l’automatisation intelligente des processus de login/signup et remplissage de formulaires.',
      fullDescription: 'Développement d’un script d’automatisation robuste qui détecte les types de formulaires LinkedIn et remplit dynamiquement les données utilisateurs, optimisant ainsi les workflows répétitifs.',
      tags: [
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'Tampermonkey', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'DOM Manipulation', icon: <SiJavascript className="text-[#F7DF1E]" /> }
      ],
      image: linkedin,
      link: 'https://github.com/SandidHajar/Import_Data',
      featured: false,
    },
    {
      title: 'Générateur d\'Images par IA',
      description: 'Application créative utilisant l\'API Gemini Vision pour transformer des prompts en designs uniques. Galerie communautaire et espace personnel.',
      fullDescription: 'Utilisant les dernières avancées en IA générative, cette application permet de créer, sauvegarder et partager des visuels époustouflants. L\'architecture est optimisée pour la rapidité et la scalabilité.',
      tags: [
        { name: 'Gemini API', icon: <SiGooglecloud className="text-[#4285F4]" /> },
        { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" /> },
        { name: 'Vercel', icon: <SiVercel className="text-white" /> }
      ],
      image: ImgGenerator,
      link: 'https://images-ai-generator-xi.vercel.app/',
      featured: false,
    },
    {
      title: 'Cats Gallery - Système Full-Stack & API',
      description: 'Plateforme interactive avec architecture API robuste, testée sous Postman, et gestion complète via TiDB Cloud.',
      fullDescription: 'Ce projet démontre une approche "Backend-First". Avant l\'interface, j\'ai développé une API REST complète avec Node.js et Express, validée par une suite de tests rigoureuse sur Postman. Le stockage est assuré par TiDB Cloud (Base de données distribuée compatible MySQL).',
      tags: [
        { name: 'Node.js & Express', icon: <SiExpress className="text-white" /> },
        { name: 'Postman API Testing', icon: <HiShieldCheck className="text-orange-400" /> },
        { name: 'TiDB Cloud (SQL)', icon: <HiDatabase className="text-[#4479A1]" /> },
        { name: 'CRUD Logic', icon: <FaProjectDiagram className="text-blue-400" /> }
      ],
      image: cats, 
      link: 'https://cats-galery.vercel.app/',
      featured: false,
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      {/* Éléments de fond */}
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Projets</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light italic">
              "Le code est une forme d'art qui résout des problèmes concrets."
            </p>
          </motion.div>
        </div>

        {/* Grille des Projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col h-full group"
            >
              {/* Mockup Laptop Style */}
              <div 
                className="relative mb-6 cursor-pointer group/laptop"
                onClick={() => setSelectedProject(project)}
              >
                {/* Cadre de l'écran */}
                <div className="bg-[#1f2937] p-2 md:p-3 rounded-t-xl border-x-4 border-t-4 border-[#374151] shadow-2xl relative overflow-hidden">
                  <div className="h-44 md:h-56 w-full overflow-hidden bg-slate-800 rounded-sm relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-top transition-transform duration-[6000ms] ease-in-out group-hover/laptop:-translate-y-[calc(100%-11rem)] md:group-hover/laptop:-translate-y-[calc(100%-14rem)]"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover/laptop:bg-transparent transition-colors duration-300" />
                  </div>
                </div>
                {/* Base du Laptop */}
                <div className="h-4 bg-[#4b5563] rounded-b-xl relative shadow-xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-[#1f2937] rounded-b-md" />
                </div>
              </div>

              {/* Infos Projet */}
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800/80 rounded-md border border-slate-700 text-[10px] font-bold text-gray-300">
                      {tag.icon} {tag.name}
                    </div>
                  ))}
                </div>

                <div 
                  className="flex items-center gap-2 text-purple-400 font-semibold text-sm cursor-pointer hover:gap-3 transition-all underline underline-offset-4 decoration-purple-500/30"
                  onClick={() => setSelectedProject(project)}
                >
                  VOIR PLUS <HiArrowRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL - Détails du Projet */}
      <AnimatePresence>
        {selectedProject && (
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
              className="relative w-full max-w-6xl bg-slate-900 border border-slate-800 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row h-[90vh] lg:h-auto max-h-[90vh]"
            >
              {/* Bouton Fermer */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-slate-800 hover:bg-red-500/20 text-white rounded-full transition-colors border border-slate-700"
              >
                <HiX className="text-2xl" />
              </button>

              {/* Gauche : Aperçu défilant */}
              <div className="w-full lg:w-3/5 h-[35vh] lg:h-auto relative bg-slate-800 border-r border-slate-800 group/modal-scroll overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-auto object-top transition-transform duration-[8000ms] hover:-translate-y-[calc(100%-400px)] lg:hover:-translate-y-[calc(100%-600px)] ease-linear"
                />
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
              </div>

              {/* Droite : Description & Tech */}
              <div className="w-full lg:w-2/5 p-8 md:p-12 overflow-y-auto bg-slate-900">
                <h2 className="text-3xl font-bold text-white mb-6">
                  {selectedProject.title}
                </h2>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {selectedProject.fullDescription}
                </p>

                <div className="space-y-6">
                  <h4 className="text-purple-400 font-bold tracking-widest text-xs uppercase">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag, i) => (
                      <div key={i} className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 rounded-xl border border-slate-700 text-sm font-medium text-white hover:bg-slate-700 transition-colors">
                        <span className="text-xl">{tag.icon}</span>
                        {tag.name}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-10 mt-10 border-t border-slate-800 flex flex-col sm:flex-row gap-4">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-lg"
                  >
                    Visiter le Site <HiOutlineExternalLink className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
