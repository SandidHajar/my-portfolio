'use client';

import { motion } from 'framer-motion';
import { HiOutlineExternalLink, HiLightningBolt } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import type { Locale, ProjectItem } from '../../lib/types';
import type { StaticImageData } from 'next/image';

export default function FeaturedProject() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language.split('-')[0] === 'fr' ? 'fr' : 'en') as Locale;
  const project = (projects[lang] || projects.en).find((p) => p.id === 'nexora') as ProjectItem | undefined;

  if (!project) return null;

  return (
    <section id="featured" className="section-shell">
      <div className="container-premium relative z-10">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-10 bg-sky-300" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-300">
              {t('featured.flagship')}
            </span>
          </motion.div>
          <h2 className="section-title max-w-4xl">{project.title}</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="case-study"
        >
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="project-media relative">
              <img
                src={(project.image as StaticImageData).src}
                alt={project.title}
                className="case-study-image h-full min-h-[360px] lg:min-h-[620px]"
              />
              <div className="absolute bottom-4 left-4 border border-white/15 bg-black/55 px-4 py-3 backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300">{t('projects.impactLabel')}</p>
                <p className="mt-1 text-sm font-semibold text-white">{project.impact}</p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
              <div className="space-y-7">
                <div className="border-b border-white/10 pb-7">
                  <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    {t('featured.problem')}
                  </h4>
                  <p className="text-lg leading-8 text-white">{project.problem}</p>
                </div>

                <div className="border-b border-white/10 pb-7">
                  <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    {t('featured.solution')}
                  </h4>
                  <p className="text-base leading-7 text-slate-300">{project.description}</p>
                </div>

                <div>
                  <h4 className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                    <HiLightningBolt /> {t('featured.results')}
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-3">
                    {(project.metrics ?? []).map((m, i) => (
                  <li key={i} className="border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300 transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
                    <span className="font-bold text-white">{m.value}</span> {m.label}
                  </li>
                ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    {t('featured.stack')}
                  </h4>
                  <p className="border border-white/8 bg-black/10 px-4 py-4 font-mono text-sm text-[var(--accent)]">
                    {project.stack}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="button-primary text-sm"
                  >
                    {t('featured.liveDemo')} <HiOutlineExternalLink />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary text-sm"
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
}
