'use client';

import { motion } from 'framer-motion';
import { HiArrowNarrowRight, HiCode, HiDownload, HiOutlineDesktopComputer, HiSparkles } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const proofCards = t('hero.proofCards', { returnObjects: true }) as Array<{ label: string; sub: string }>;

  return (
    <section className="senior-hero">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.28),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_34%),linear-gradient(180deg,rgba(5,8,18,0.96),rgba(8,10,20,0.92))]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(168,85,247,0.06)_48%,transparent_100%)]" />
      <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full border border-violet-400/15 blur-3xl sm:h-[34rem] sm:w-[34rem]" />

      <div className="container-premium relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="mx-auto w-full max-w-[40rem] sm:pt-6 lg:mx-0 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="senior-eyebrow mb-5 sm:mb-6 reveal-up"
            >
              <span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(196,181,253,0.9)]" />
              <span>{t('hero.badge')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="senior-title mb-4 max-w-[9ch] text-[clamp(2.2rem,9vw,4.9rem)] leading-[0.94] reveal-up delay-2"
            >
              <span className="block">{t('hero.titleLine1')}</span>
              <span className="hero-stack-gradient block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-300 bg-clip-text text-transparent">
                {t('hero.titleLine2')}
              </span>
              <span className="block">{t('hero.titleLine3')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="senior-lead mb-7 max-w-lg text-[0.95rem] sm:text-[1.02rem] reveal-up delay-3"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              className="mb-7 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <a href="#work" className="button-primary group w-full sm:w-auto">
                {t('hero.btnWork')}
                <HiArrowNarrowRight className="transition-transform group-hover:translate-x-1" />
              </a>

              <a href={t('hero.cvPath')} download="Hajar_Sandid_CV.pdf" className="button-secondary group w-full sm:w-auto">
                <HiDownload size={18} className="transition-transform group-hover:-translate-y-0.5" />
                {t('hero.btnCV')}
              </a>
            </motion.div>

            <div className="grid gap-2.5 sm:grid-cols-3">
              {proofCards.map((card) => (
                <div key={card.label} className="glass rounded-2xl border border-white/8 px-4 py-2.5">
                  <p className="text-sm font-semibold text-white">{card.label}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">{card.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.24, duration: 0.7 }}
            className="relative mx-auto w-full max-w-[560px] pt-2 lg:pt-0"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-4 md:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_34%)]" />
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />
              <div className="absolute inset-y-10 left-0 w-px bg-gradient-to-b from-transparent via-violet-300/30 to-transparent" />

              <div className="relative grid gap-3 sm:gap-4 lg:grid-cols-2">
                <div className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#0d1020]/80 p-4 sm:p-5">
                  <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-200">
                    <HiSparkles />
                    {t('hero.visual.uiTitle')}
                  </div>

                  <div className="flex flex-1 flex-col gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm leading-6 text-slate-300">
                        {t('hero.visual.card1')}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-4">
                      <p className="text-sm leading-6 text-violet-100">
                        {t('hero.visual.card2')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hero-code-panel flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#0b0d16]/90 p-4 sm:p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300">
                      <HiCode />
                      {t('hero.visual.codeTitle')}
                    </div>
                    <HiOutlineDesktopComputer size={22} className="text-violet-300/70" />
                  </div>

                  <div className="flex flex-1 flex-col gap-3 font-mono text-[11px] sm:text-[12px]">
                    <div className="hero-code-line flex-1 rounded-xl bg-white/[0.03] p-4">
                      <span className="text-violet-300">const</span> build ={' '}
                      <span className="text-emerald-300">clean</span>();
                    </div>
                    <div className="hero-code-line flex-1 rounded-xl bg-white/[0.03] p-4">
                      <span className="text-violet-300">useEffect</span>(() =&gt; ship(), []);
                    </div>
                    <div className="hero-code-line flex-1 rounded-xl bg-white/[0.03] p-4">
                      <span className="text-violet-300">return</span> &lt;Aesthetic /&gt;
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-3 grid gap-2.5 sm:mt-4 sm:grid-cols-3">
                {[
                  ['React', 'Next.js'],
                  ['Node.js', 'Laravel'],
                  ['UI/UX', 'Aesthetic']
                ].map(([main, sub]) => (
                  <div key={main} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5">
                    <p className="text-sm font-semibold text-white">{main}</p>
                    <p className="mt-1 text-sm font-semibold text-violet-200">{sub}</p>
                    <p className="mt-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                      {t('hero.visual.production')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
