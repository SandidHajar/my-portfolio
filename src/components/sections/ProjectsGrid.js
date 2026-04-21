import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineExternalLink, HiX, HiArrowRight, HiShieldCheck } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { caseStudies } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';

const ProjectsGrid = () => {
  const [selectedId, setSelectedId] = useState(null);
  const { lang } = useLanguage();
  
  // Règle d'or du recrutement : "Less is More". On affiche uniquement les projets majeurs.
  const currentProjects = caseStudies[lang].filter(p => p.featured === true);
  const selectedProject = currentProjects.find(p => p.id === selectedId);

  const t = {
    fr: {
      sectionTitle: "Études de Cas",
      mainTitle1: "Réalisations Techniques",
      mainTitle2: "Détaillées",
      subtitle: "Chaque projet est une exploration rigoureuse de la résolution de problèmes complexes, optimisée pour la performance, la sécurité et la scalabilité.",
      readCase: "Lire l'étude de cas",
      business: "Impact Métier",
      challenge: "Le Défi",
      solution: "La Solution Technique",
      core: "Cœur Technique",
      metrics: "Analyses d'Impact",
      demo: "Lancer la Démo",
      source: "Code Source",
      architecture: "Stratégie d'Architecture"
    },
    en: {
      sectionTitle: "Case Studies",
      mainTitle1: "Detailed Engineering",
      mainTitle2: "Work",
      subtitle: "Each project is a rigorous exploration of complex problem-solving, optimized for performance, security, and scalability.",
      readCase: "Read Case Study",
      business: "Business Value",
      challenge: "The Challenge",
      solution: "The Technical Solution",
      core: "Technical Core",
      metrics: "Impact Analytics",
      demo: "Launch Demo",
      source: "Source Code",
      architecture: "Architecture Strategy"
    }
  };

  return (
    <section id="work" className="py-24 relative">
      <div className="container-premium">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-px w-12 bg-violet-500" />
            <span className="text-violet-500 font-bold uppercase tracking-widest text-xs">{t[lang].sectionTitle}</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t[lang].mainTitle1} <span className="text-gradient">{t[lang].mainTitle2}</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-lg font-light">
            {t[lang].subtitle}
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedId(project.id)}
            >
              <div className="glass rounded-[2rem] h-full flex flex-col overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:border-violet-500/30 group-hover:bg-white/5 shadow-2xl">
                {/* 1. APERÇU DE L'IMAGE */}
                <div className="w-full h-48 overflow-hidden relative border-b border-slate-800/50">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                  
                  {/* Badges Overlay */}
                  <div className="absolute top-4 right-4 flex gap-2 z-20 pointer-events-none">
                    {project.badges?.map((badge, idx) => (
                      <span key={idx} className="bg-slate-950/80 backdrop-blur border border-white/10 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-lg">
                        {badge}
                      </span>
                    ))}
                  </div>

                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  {/* 2. TITRE & IMPACT */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  
                  {project.shortImpact && (
                    <p className="text-slate-300 text-sm mt-1 mb-5 font-medium leading-relaxed border-l-2 border-violet-500/50 pl-3">
                      {project.shortImpact}
                    </p>
                  )}

                  {/* 3. TECH STACK */}
                  <div className="text-violet-400 font-bold text-xs tracking-widest uppercase mb-6 flex flex-wrap gap-2">
                    {project.tech.map(t => t.name).join(' • ')}
                  </div>

                  {/* 4. FEATURES BULLET POINTS */}
                  <ul className="flex-1 space-y-3 mb-8">
                    {project.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-violet-500 font-bold mt-0.5">-</span>
                        <span className="text-sm text-slate-300 font-light leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bouton Voir Détails */}
                  <div className="flex items-center gap-2 text-white font-bold text-sm tracking-tight pt-6 border-t border-slate-800 group-hover:gap-4 transition-all uppercase mt-auto">
                    {t[lang].readCase} <HiArrowRight size={18} className="text-violet-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={selectedId}
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              className="relative w-full max-w-5xl glass rounded-[2.5rem] overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 p-2 glass hover:bg-red-500/20 text-white rounded-full transition-all z-10"
              >
                <HiX size={24} />
              </button>

              <div className="p-10 md:p-16">
                {/* Project Image Header */}
                <div className="w-full h-48 md:h-72 rounded-[2rem] overflow-hidden mb-12 border border-white/5 relative group/modal-img">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-auto object-top transition-transform duration-[8000ms] hover:-translate-y-[calc(100%-18rem)] md:hover:-translate-y-[calc(100%-25rem)] ease-linear"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                  {/* Left Column: Context */}
                  <div className="flex-1 space-y-10">
                    <div>
                      <h4 className="text-violet-400 font-bold tracking-widest text-[10px] uppercase mb-4">{t[lang].business}</h4>
                      <h2 className="text-4xl font-bold text-white mb-6">{selectedProject.title}</h2>
                      
                      {selectedProject.businessImpact && (
                        <div className="bg-violet-900/20 border border-violet-500/20 rounded-2xl p-6 mb-8 shadow-inner">
                          <p className="text-white text-lg font-medium leading-relaxed">
                            {selectedProject.businessImpact}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <h4 className="text-slate-500 font-bold tracking-widest text-[10px] uppercase">{t[lang].challenge}</h4>
                        <p className="text-slate-400 font-light leading-relaxed text-sm">
                          {selectedProject.problem}
                        </p>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-slate-500 font-bold tracking-widest text-[10px] uppercase flex items-center gap-1.5">
                          <HiShieldCheck size={16} className="text-emerald-400" />
                          {t[lang].solution}
                        </h4>
                        <p className="text-slate-400 font-light leading-relaxed text-sm">
                          {selectedProject.solution}
                        </p>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-slate-800/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedProject.features.map((f, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-2 shrink-0" />
                            <span className="text-sm text-slate-300 font-light leading-snug">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Specs */}
                  <div className="lg:w-[320px] space-y-12">
                     <div className="glass p-8 rounded-[2rem] border-white/5 space-y-8">
                        <div>
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">{t[lang].core}</h4>
                          <div className="flex flex-wrap gap-4">
                            {selectedProject.tech.map((T, i) => (
                              <div key={i} className="flex flex-col items-center gap-1 group/icon">
                                <div className="p-3 glass rounded-xl text-slate-400 group-hover/icon:text-white transition-colors">
                                  <T.icon size={24} />
                                </div>
                                <span className="text-[9px] text-slate-600 font-bold uppercase">{T.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">{t[lang].metrics}</h4>
                          <div className="space-y-6">
                            {selectedProject.metrics.map((m, i) => (
                              <div key={i}>
                                <div className="text-2xl font-bold text-white tracking-tighter">{m.value}</div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{m.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                     </div>

                     <div className="space-y-4">
                        <a 
                          href={selectedProject.demo} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-all"
                        >
                          {t[lang].demo} <HiOutlineExternalLink size={20} />
                        </a>
                        <a 
                          href={selectedProject.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center justify-center gap-3 w-full py-4 glass text-white font-bold rounded-2xl hover:bg-white/5 transition-all outline outline-1 outline-white/10"
                        >
                          {t[lang].source} <FaGithub size={20} />
                        </a>
                     </div>
                  </div>
                </div>

                {/* Architecture Note */}
                <div className="mt-16 pt-12 border-t border-slate-900">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[.25em] mb-4">{t[lang].architecture}</h4>
                  <p className="text-sm text-slate-400 font-light max-w-3xl leading-relaxed">
                    {selectedProject.architecture}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsGrid;
