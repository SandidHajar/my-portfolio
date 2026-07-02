'use client';

import { motion } from 'framer-motion';
import { HiOutlineTemplate, HiOutlineServer, HiOutlineBriefcase, HiOutlineLightningBolt } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const icons = [HiOutlineTemplate, HiOutlineServer, HiOutlineBriefcase, HiOutlineLightningBolt] as const;

export default function WhatIBring() {
  const { t } = useTranslation();
  const items = t('whatIBring.items', { returnObjects: true }) as string[];

  return (
    <section className="section-shell">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/6 blur-[120px]" />

      <div className="container-premium relative z-10">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-200/70">{t('whatIBring.label')}</p>
            <h2 className="section-title mb-6">{t('whatIBring.title')}</h2>
            <div className="mx-auto h-px w-20 bg-sky-300/60 opacity-70" />
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {items.map((item, i) => {
              const Icon = icons[i] ?? HiOutlineLightningBolt;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="grid-card group"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-sky-300/5 transition-colors group-hover:bg-sky-300/10" />
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-sky-300 shadow-lg transition-all group-hover:bg-sky-300/10">
                    <Icon size={26} />
                  </div>
                  <h3 className="relative z-10 text-lg font-semibold tracking-tight text-white md:text-xl">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {t('whatIBring.description')}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
