import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data/projects';
import { useTranslation } from 'react-i18next';

const ProjectsGrid = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];

  // Exclude NEXORA and limit to 2 other projects
  const displayProjects = (projects[lang] || projects['en'])
    .filter(p => p.id !== 'nexora')
    .slice(0, 2);

  return (
    <section id="work" className="py-20 relative">
      <div className="container-premium">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-2"
          >
            <div className="h-px w-8 bg-violet-500" />
            <span className="text-violet-500 font-bold uppercase tracking-widest text-[10px]">{t('projects.sectionTitle')}</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">
            {t('projects.mainTitle1')} <span className="text-gradient">{t('projects.mainTitle2')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-[2rem] p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">
                   {project.title}
                </h3>

                <ul className="space-y-3 mb-8 flex-1">
                  {project.bullets.slice(0, 3).map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <HiCheckCircle className="text-emerald-500 mt-1 shrink-0" size={14} />
                      <span className="text-sm text-slate-400 font-light leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 mt-auto border-t border-white/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t('projects.stackLabel')}</span>
                    <span className="text-[11px] text-violet-300 font-mono text-right max-w-[65%]">{project.stack}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t('projects.impactLabel')}</span>
                    <span className="text-[11px] text-emerald-400 font-bold text-right max-w-[65%]">{project.impact}</span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-bold hover:bg-violet-500 hover:text-white transition-all group"
                      >
                        <HiExternalLink size={14} className="group-hover:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-bold hover:bg-white/10 hover:text-white transition-all group"
                      >
                        <FaGithub size={14} className="group-hover:scale-110 transition-transform" />
                        Code Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
