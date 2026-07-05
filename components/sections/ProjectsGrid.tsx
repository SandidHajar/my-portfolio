'use client';

import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import type { ManagedProjectItem, ProjectItem, Locale } from '../../lib/types';
import { useSiteContent } from '../useSiteContent';

function getProjectImageSrc(image: ProjectItem['image'] | ManagedProjectItem['image']) {
  return typeof image === 'string' ? image : image.src;
}

export default function ProjectsGrid() {
  const { t, i18n } = useTranslation();
  const content = useSiteContent();
  const lang = (i18n.language.split('-')[0] === 'fr' ? 'fr' : 'en') as Locale;
  const displayProjects = [...(projects[lang] || projects.en), ...(content?.extraProjects?.[lang] ?? [])]
    .filter((project) => project.id !== 'nexora')
    .slice(0, 4);

  return (
    <section id="work" className="section-shell">
      <div className="container-premium">
        <div className="mb-14 grid gap-5 md:grid-cols-[0.8fr_1fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-10 bg-sky-300" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-300">
              {t('projects.sectionTitle')}
            </span>
          </motion.div>
          <div>
            <h2 className="section-title">
              {t('projects.mainTitle1')} <span className="text-gradient">{t('projects.mainTitle2')}</span>
            </h2>
            <p className="section-copy mt-4 max-w-2xl">
              {t('projects.description')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {displayProjects.map((project: ProjectItem | ManagedProjectItem, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <article className="case-study flex h-full flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
                <div className="project-media">
                  <img
                    src={getProjectImageSrc(project.image)}
                    alt={project.title}
                    className="case-study-image min-h-[240px] md:min-h-[280px]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    {!!project.impact && (
                      <span className="shrink-0 border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                        {project.impact}
                      </span>
                    )}
                  </div>

                  <p className="mb-6 text-sm leading-7 text-slate-300">{project.description}</p>

                  {!!project.bullets?.length && (
                    <div className="mb-7 grid gap-2">
                      {project.bullets.slice(0, 2).map((bullet, i) => (
                        <p key={i} className="border-l-2 border-[var(--accent)] py-1 pl-4 text-sm leading-6 text-slate-300">
                          {bullet}
                        </p>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto border-t border-white/10 pt-5">
                    {!!project.stack && (
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <span className="pt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                          {t('projects.stackLabel')}
                        </span>
                        <span className="max-w-[70%] text-right font-mono text-[12px] leading-6 text-[var(--accent)]">
                          {project.stack}
                        </span>
                      </div>
                    )}

                    <div className="flex gap-3">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="button-primary flex-1 text-xs"
                        >
                          <HiExternalLink size={14} />
                          {t('projects.liveDemo')}
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="button-secondary flex-1 text-xs"
                        >
                          <FaGithub size={14} />
                          {t('projects.source')}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
