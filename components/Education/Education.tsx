'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCalendarAlt, FaCertificate, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import type { EducationItem, Locale } from '../../lib/types';
import { useSiteContent } from '../useSiteContent';

const EDUCATION_ICONS = {
  bootcamp: <FaCertificate className="text-[var(--accent-warm)]" />,
  degree: <FaGraduationCap className="text-[var(--accent)]" />
} as const;

export default function Education() {
  const { t, i18n } = useTranslation();
  const content = useSiteContent();
  const lang = (i18n.language.split('-')[0] === 'fr' ? 'fr' : 'en') as Locale;
  const educationKeys = ['bootcamp', 'degree'] as const;
  const extraEducation = content?.extraEducation?.[lang] ?? [];

  return (
    <section id="education" className="section-shell">
      <div className="section-glow-line" />

      <div className="container-premium relative z-10">
        <div className="mb-14 grid gap-5 md:grid-cols-[0.8fr_1fr] md:items-end">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent)]">{t('education.label')}</p>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="section-title mb-4"
            >
              {t('education.title1')} <span className="text-gradient">{t('education.title2')}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="section-copy max-w-2xl"
            >
              {t('education.subtitle')}
            </motion.p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {educationKeys.map((key, index) => {
            const item = t(`education.items.${key}`, { returnObjects: true }) as EducationItem;

            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="grid-card h-full"
              >
                <div className="mb-8 flex items-start justify-between gap-6">
                  <div className="border border-white/8 bg-black/10 p-5 text-3xl">{EDUCATION_ICONS[key]}</div>
                  <div className="flex items-center gap-2 border border-white/8 bg-white/[0.04] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    <FaCalendarAlt size={12} className="text-[var(--accent-warm)]" />
                    {item.date}
                  </div>
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">{item.title}</h3>

                <div className="mb-5 flex items-center gap-2 font-semibold text-[var(--accent)]">
                  <FaMapMarkerAlt size={14} />
                  {item.school}
                  <span className="text-slate-500">/</span>
                  <span className="font-normal text-slate-400">{item.location}</span>
                </div>

                <p className="mb-7 text-base leading-7 text-slate-400">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--accent)] md:text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
          {extraEducation.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: (index + 2) * 0.08 }}
              viewport={{ once: true }}
              className="grid-card h-full"
            >
              <div className="mb-8 flex items-start justify-between gap-6">
                <div className="border border-white/8 bg-black/10 p-5 text-3xl"><FaCertificate className="text-[var(--accent-warm)]" /></div>
                <div className="flex items-center gap-2 border border-white/8 bg-white/[0.04] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  <FaCalendarAlt size={12} className="text-[var(--accent-warm)]" />
                  {item.date}
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-white">{item.title}</h3>
              <div className="mb-5 flex items-center gap-2 font-semibold text-[var(--accent)]">
                <FaMapMarkerAlt size={14} />
                {item.school}
                <span className="text-slate-500">/</span>
                <span className="font-normal text-slate-400">{item.location}</span>
              </div>
              <p className="mb-7 text-base leading-7 text-slate-400">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
