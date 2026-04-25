import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowNarrowRight, HiDownload, HiCheckCircle } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-premium relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-8 border-violet-500/20"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 status-pulse shadow-[0_0_10px_#10b981]" />
            <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
              {t('hero.badge')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6"
          >
            {t('hero.title').split('|')[0]} <br className="hidden sm:block" />
            <span className="text-gradient leading-[1.3] block mt-2 sm:mt-0 text-3xl md:text-5xl lg:text-6xl">
              {t('hero.title').split('|')[1]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-light"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-col gap-3 mb-10 w-full max-w-[550px] text-left mx-auto"
          >
            {t('hero.bullets', { returnObjects: true }).map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-4 text-slate-200 bg-white/[0.03] border border-white/10 px-5 py-3.5 rounded-xl hover:bg-white/[0.06] hover:border-violet-500/30 transition-colors">
                <HiCheckCircle className="text-emerald-400 text-2xl shrink-0" />
                <span className="font-medium text-[14px] sm:text-[15px]">{bullet}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <a
              href="#work"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white font-bold transition-all shadow-xl shadow-violet-600/30 group w-full sm:w-auto"
            >
              {t('hero.btnWork')}
              <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/hajar_sandid_cv.pdf"
              download="hajar_sandid_cv.pdf"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 hover:border-violet-500/50 hover:bg-white/5 text-white font-bold transition-all group w-full sm:w-auto"
            >
              <HiDownload className="group-hover:-translate-y-0.5 transition-transform" size={18} />
              {t('hero.btnCV')}
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-slate-400 hover:text-white font-medium transition-colors group w-full sm:w-auto hover:bg-white/5"
            >
              {t('hero.btnContact')}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 pt-12 border-t border-slate-900 grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl hidden md:grid"
        >
          {Object.entries(t('hero.stats', { returnObjects: true })).map(([key, stat]) => (
            <div key={key} className="flex flex-col items-center text-center gap-1">
              <span className="text-slate-100 font-bold tracking-tight">{stat.label}</span>
              {stat.label2 && <span className="text-xs text-violet-400 font-semibold">{stat.label2}</span>}
              <span className="text-sm text-slate-500">{stat.sub}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
