import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineExternalLink, HiX, HiArrowRight, HiShieldCheck } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { caseStudies } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';

const ProjectsGrid = () => {
  const [selectedId, setSelectedId] = useState(null);
  const { lang } = useLanguage();
  
  const currentProjects = caseStudies[lang];
  const selectedProject = currentProjects.find(p => p.id === selectedId);

  const t = {
    fr: {
      sectionTitle: "Études de Cas",
      mainTitle1: "Réalisations Techniques",
      mainTitle2: "Détaillées",
      subtitle: "Chaque projet est une exploration rigoureuse de la résolution de problèmes complexes, optimisée pour la performance, la sécurité et la scalabilité.",
      readCase: "Lire l'étude de cas",
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
              <div className="glass rounded-[2rem] p-8 h-full flex flex-col transition-all duration-500 group-hover:scale-[1.02] group-hover:border-violet-500/30 group-hover:bg-white/5 shadow-2xl">
                {/* Tech Icons Row */}
                <div className="flex gap-4 mb-8">
                  {project.tech.slice(0, 3).map((T, i) => (
                    <div key={i} className="text-slate-400 group-hover:text-violet-400 transition-colors">
                      <T.icon size={28} />
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-slate-400 font-light leading-relaxed mb-8 flex-1">
                  {project.tagline}
                </p>

                {/* Metrics Preview */}
                <div className="grid grid-cols-3 gap-4 mb-8 pt-8 border-t border-slate-800">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-amber-500 font-bold text-lg">{m.value}</span>
                      <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-white font-bold text-sm tracking-tight pt-4 group-hover:gap-4 transition-all uppercase">
                  {t[lang].readCase} <HiArrowRight size={18} className="text-violet-500" />
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
                  <div className="flex-1 space-y-12">
                    <div>
                      <h4 className="text-violet-400 font-bold tracking-widest text-[10px] uppercase mb-4">{t[lang].challenge}</h4>
                      <h2 className="text-4xl font-bold text-white mb-6">{selectedProject.title}</h2>
                      <p className="text-slate-200 text-lg leading-relaxed font-light italic">
                        "{selectedProject.problem}"
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-100 flex items-center gap-2">
                        <HiShieldCheck size={20} className="text-emerald-400" />
                        {t[lang].solution}
                      </h4>
                      <p className="text-slate-400 font-light leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {selectedProject.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-2 shrink-0" />
                          <span className="text-sm text-slate-300 font-light leading-snug">{f}</span>
                        </div>
                      ))}
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
