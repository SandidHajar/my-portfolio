import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  const skillLines = [
    t('skills.categories.frontend'),
    t('skills.categories.backend'),
    t('skills.categories.database'),
    t('skills.categories.tools')
  ];

  return (
    <section id="my_skills" className="py-20 relative bg-[#020617]">
      <div className="container-premium">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tighter">
              {t('skills.title1')} <span className="text-gradient">{t('skills.title2')}</span>
            </h2>
            <div className="h-px w-20 bg-violet-500 mx-auto opacity-50" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

            {skillLines.map((line, i) => {
              // Extract category and skills safely, handling spacing variations in different languages
              const parts = line.split(/:(.+)/);
              const category = parts[0] ? parts[0].trim() : '';
              const skillsStr = parts[1] ? parts[1].trim() : '';
              const skills = skillsStr ? skillsStr.split(',').map(s => s.trim()) : [];

              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-3xl p-8 border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/5 rounded-bl-full group-hover:bg-violet-600/10 transition-colors" />
                  
                  <h3 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    {category}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3 relative z-10">
                    {skills.map((skill, j) => (
                      <div 
                        key={j} 
                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:bg-violet-500/20 hover:border-violet-500/40 hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
