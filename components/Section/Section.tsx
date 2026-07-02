'use client';

import { motion } from 'framer-motion';
import { HiOutlineCode, HiOutlineCube, HiOutlineShieldCheck } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const expertiseIcons = [HiOutlineShieldCheck, HiOutlineCube, HiOutlineCode] as const;

export default function Section() {
  const { t } = useTranslation();
  const expertiseList = t('about.expertiseList', { returnObjects: true }) as string[];

  return (
    <section id="about" className="section-shell">
      <div className="section-glow-line" />

      <div className="container-premium relative z-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent)]"
          >
            {t('about.label')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="section-title max-w-4xl">
              {t('about.title1')} <span className="text-gradient">{t('about.title2')}</span>
            </h2>
            <p className="section-copy mt-5 max-w-3xl">
              {t('about.intro')}
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
            className="case-study p-8 md:p-10"
          >
            <p className="mb-8 text-3xl font-semibold leading-tight text-white md:text-4xl">
              {t('about.grad.text1')}{' '}
              <span className="text-[var(--accent)]">{t('about.grad.date')}</span>{' '}
              {t('about.grad.text2')}{' '}
              <span className="text-[var(--accent-warm)]">{t('about.grad.school')}</span>
              {t('about.grad.text3')}
            </p>

            <div className="grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Focus</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white">SaaS, APIs, dashboards</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Approach</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white">Clean architecture</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Delivery</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white">Production-minded</p>
              </div>
            </div>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="case-study flex flex-col justify-between p-8 md:p-10"
          >
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
                {t('about.expertiseTitle')}
              </p>
              <div className="space-y-4">
                {expertiseList.map((item, index) => {
                  const Icon = expertiseIcons[index] ?? HiOutlineCode;

                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex gap-4 border border-white/10 bg-white/[0.035] p-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-black/10 text-[var(--accent)]">
                        <Icon size={22} />
                      </div>
                      <p className="text-sm font-medium leading-6 text-slate-300">{item}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <blockquote className="mt-8 border-l-2 border-[var(--accent)] pl-5 text-lg font-medium leading-8 text-slate-300">
              {t('about.goal')}
            </blockquote>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
