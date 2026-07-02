'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();
  const skillLines = [
    t('skills.categories.frontend'),
    t('skills.categories.backend'),
    t('skills.categories.database'),
    t('skills.categories.tools')
  ];

  return (
    <section id="my_skills" className="section-shell">
      <div className="container-premium">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
              {t('skills.label')}
            </p>
            <h2 className="section-title mb-6">
              {t('skills.title1')} <span className="text-gradient">{t('skills.title2')}</span>
            </h2>
            <p className="section-copy max-w-md">
              {t('skills.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {skillLines.map((line, i) => {
              const parts = line.split(/:(.+)/);
              const category = parts[0] ? parts[0].trim() : '';
              const skillsStr = parts[1] ? parts[1].trim() : '';
              const skills = skillsStr ? skillsStr.split(',').map((s) => s.trim()) : [];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="grid-card group min-h-[220px]"
                >
                  <h3 className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-400">
                    <span className="h-2 w-2 bg-[var(--accent)]" />
                    {category}
                  </h3>
                  <div className="relative z-10 flex flex-wrap gap-3">
                    {skills.map((skill, j) => (
                      <div
                        key={j}
                        className="cursor-default border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-slate-300 transition-all hover:border-[var(--accent)] hover:bg-white/[0.07] hover:text-white"
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
}
