import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineExternalLink, HiLightningBolt } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data/projects';
import { useTranslation } from 'react-i18next';

const FeaturedProject = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];
  const project = (projects[lang] || projects['en']).find(p => p.id === 'nexora');
  
  if (!project) return null;

  return (
    <section id="featured" className="py-20 relative overflow-hidden">
      <div className="container-premium relative z-10">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-2"
          >
            <div className="h-px w-8 bg-pink-500" />
            <span className="text-pink-500 font-bold uppercase tracking-widest text-[10px]">{t('featured.flagship')}</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">
            {project.title}
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[2rem] overflow-hidden border-white/10 shadow-2xl bg-white/[0.02]"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Project Image */}
            <div className="lg:w-1/2 relative group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover min-h-[300px] lg:min-h-[450px] opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent lg:hidden" />
            </div>

            {/* Structured Content */}
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="space-y-8">
                {/* Problem */}
                <div>
                  <h4 className="text-slate-500 font-bold tracking-widest text-[10px] uppercase mb-2">{t('featured.problem')}</h4>
                  <p className="text-white text-lg font-medium">{project.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-slate-500 font-bold tracking-widest text-[10px] uppercase mb-2">{t('featured.solution')}</h4>
                  <p className="text-slate-300 text-base leading-relaxed">{project.description}</p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-violet-400 font-bold tracking-widest text-[10px] uppercase mb-3 flex items-center gap-2">
                    <HiLightningBolt /> {t('featured.results')}
                  </h4>
                  <ul className="space-y-2">
                    {project.metrics.map((m, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                        <div className="w-1 h-1 rounded-full bg-emerald-500" />
                        <span className="font-bold text-white">{m.value}</span> {m.label}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack */}
                <div>
                  <h4 className="text-slate-500 font-bold tracking-widest text-[10px] uppercase mb-2">{t('featured.stack')}</h4>
                  <p className="text-violet-300 font-mono text-sm">{project.stack}</p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all text-sm"
                  >
                    {t('featured.liveDemo')} <HiOutlineExternalLink />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 glass text-white font-bold rounded-xl hover:bg-white/5 transition-all text-sm"
                  >
                    {t('featured.github')} <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
