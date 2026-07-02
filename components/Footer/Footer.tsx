'use client';

import { motion } from 'framer-motion';
import { HiArrowRight, HiMail, HiOutlineCheckCircle } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const availability = t('footer.availability', { returnObjects: true }) as string[];

  return (
    <footer id="contact" className="relative overflow-hidden pb-10 pt-24">
      <div className="container-premium relative z-10">
        <div className="case-study relative mb-20 p-8 md:p-14">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="senior-eyebrow mb-8"
              >
                <span className="h-2 w-2 bg-emerald-400" />
                {t('footer.subtitle')}
              </motion.div>

              <h2 className="mb-8 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                {t('footer.title1')} <br />
                <span className="text-gradient">{t('footer.title2')}</span>
              </h2>

              <p className="mb-8 max-w-xl text-base leading-8 text-slate-300">
                {t('footer.description')}
              </p>

              <div className="mb-12 space-y-5">
                <p className="ml-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                  {t('footer.availabilityLabel')}
                </p>
                <div className="flex flex-wrap gap-3">
                  {availability.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex cursor-default items-center gap-2.5 border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 transition-all hover:border-[var(--accent)] hover:bg-white/[0.07]"
                    >
                      <HiOutlineCheckCircle className="text-[var(--accent)]" size={16} />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row">
                <motion.a
                  href="mailto:sandidhajar03@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="button-primary group px-10 py-5"
                >
                  <HiMail size={22} />
                  {t('footer.btn')}
                  <HiArrowRight className="transition-transform group-hover:translate-x-1.5" />
                </motion.a>

                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/SandidHajar"
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary group h-16 w-16 p-0 text-slate-400 hover:text-white"
                  >
                    <FaGithub size={24} className="transition-transform group-hover:scale-110" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hajar-sandid-13656b386/"
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary group h-16 w-16 p-0 text-slate-400 hover:text-white"
                  >
                    <FaLinkedin size={24} className="transition-transform group-hover:scale-110" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative mx-auto h-[28rem] w-[28rem]">
                <div className="absolute inset-0 border border-white/10" />
                <div className="absolute inset-8 border border-white/10" />
                <div className="absolute inset-10 overflow-hidden border-2 border-white/10 bg-slate-900/40 shadow-[0_0_80px_rgba(52,211,153,0.12)] backdrop-blur-sm transition-all duration-700">
                  <img
                    src="/assets/ChatGPT%20Image%202%20juil.%202026%2C%2000_17_39.png"
                    alt="Hajar Sandid"
                    className="h-full w-full scale-105 object-cover transition-transform duration-1000 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/10 via-transparent to-orange-200/10 opacity-60" />
                </div>

                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute right-4 top-4 border border-white/20 bg-[var(--accent)] px-5 py-2.5 shadow-[0_10px_20px_rgba(52,211,153,0.22)]"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-950">{t('footer.status')}</span>
                </motion.div>

                <div className="status-pulse absolute bottom-12 left-12 h-4 w-4 border-4 border-[#020617] bg-emerald-500 shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 border-t border-white/5 pt-10 text-xs font-medium uppercase tracking-[0.22em] text-slate-500 md:flex-row">
          <p>© 2024 - 2026 {t('navbar.name')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
