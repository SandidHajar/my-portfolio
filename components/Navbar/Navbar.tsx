'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useLanguage } from '../../context/LanguageContext';

const NAV_LINKS = [
  { key: 'work', href: '#featured' },
  { key: 'about', href: '#about' },
  { key: 'education', href: '#education' },
  { key: 'skills', href: '#my_skills' },
  { key: 'contact', href: '#contact' }
] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { lang: currentLang, changeLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLangChange = (lang: 'en' | 'fr') => {
    changeLanguage(lang);
  };

  const LangSwitcher = () => (
    <div className="flex items-center gap-1 text-xs font-bold">
      <button
        onClick={() => handleLangChange('en')}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          currentLang === 'en' ? 'bg-white text-[#07111f]' : 'text-slate-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLangChange('fr')}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          currentLang === 'fr' ? 'text-[#07111f] bg-white ' : 'text-slate-400 hover:text-white'
        }`}
      >
        FR
      </button>
    </div>
  );

  return (
    <nav className={`fixed left-0 top-0 z-[100] w-full transition-all duration-300 ${isScrolled ? 'py-4' : 'py-5'}`}>
      <div className="container-premium">
        <div
          className={`flex items-center justify-between rounded-xl px-5 py-3 transition-all duration-500 ${
            isScrolled ? 'glass border-white/10 shadow-2xl' : 'surface-panel border-white/8'
          }`}
        >
          <a href="/" className="group flex min-h-[44px] items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-lg transition-transform duration-300 group-hover:scale-[1.04]">
              <img src="/assets/hs-brand-icon.png" alt="HS Logo" className="h-full w-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <span className="block font-semibold tracking-tight text-white">{t('navbar.name')}</span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Full-Stack Portfolio
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {t(`navbar.${link.key}`)}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-1">
              <LangSwitcher />
            </div>
            <ThemeToggle />
            <a
              href="https://github.com/SandidHajar"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:text-white"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/hajar-sandid-13656b386/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:text-white"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-1">
              <LangSwitcher />
            </div>
            <ThemeToggle />
            <button
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen((value) => !value)}
            >
              {mobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-full mt-2 w-full px-6 md:hidden"
          >
            <div className="glass flex flex-col gap-3 rounded-xl p-5 shadow-2xl">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(`navbar.${link.key}`)}
                </a>
              ))}
              <div className="my-1 h-px w-full bg-white/10" />
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/SandidHajar"
                  target="_blank"
                  rel="noreferrer"
                  className="glass flex min-h-[48px] items-center justify-center rounded-lg text-slate-300"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hajar-sandid-13656b386/"
                  target="_blank"
                  rel="noreferrer"
                  className="glass flex min-h-[48px] items-center justify-center rounded-lg text-slate-300"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
