'use client';

import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import { useLanguage } from '../../context/LanguageContext';

const content = {
  fr: {
    title: 'Expérience',
    subtitle: 'Points Forts',
    highlights: [
      'Plus de 5 applications full-stack conçues et déployées',
      'Architecture SaaS et systèmes multi-tenants',
      'Authentification robuste et sécurité API (JWT/OTP)',
      'Applications temps réel (SSE / WebSockets)'
    ]
  },
  en: {
    title: 'Experience',
    subtitle: 'Highlights',
    highlights: [
      '5+ full-stack applications built and deployed',
      'SaaS architecture & Multi-tenant systems',
      'Robust Authentication & API Security (JWT/OTP)',
      'Real-time applications (SSE / WebSockets)'
    ]
  }
} as const;

export default function ExperienceHighlights() {
  const { lang } = useLanguage();
  const selected = content[lang];

  return (
    <section className="section-shell">
      <div className="container-premium">
        <div className="glass relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] p-10 group md:p-12">
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-sky-400/20 to-orange-300/20 opacity-0 blur transition duration-1000 group-hover:opacity-100" />

          <div className="relative z-10 flex flex-col items-center gap-12 md:flex-row">
            <div className="md:w-1/3">
              <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">{selected.title}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
                {selected.subtitle}
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-6 md:w-2/3 sm:grid-cols-2">
              {selected.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <HiCheckCircle className="shrink-0 text-emerald-400" size={24} />
                  <span className="text-sm font-medium leading-tight text-slate-200 md:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
