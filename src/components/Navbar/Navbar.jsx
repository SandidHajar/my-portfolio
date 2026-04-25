import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.work'), href: '#work' },
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.education'), href: '#education' },
    { name: t('navbar.skills'), href: '#my_skills' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const LangSwitcher = ({ className = "" }) => (
    <div className={`flex items-center gap-1 text-xs font-bold ${className}`}>
      <button 
        onClick={() => handleLangChange('en')}
        className={`px-2 py-1 rounded transition-colors ${currentLang === 'en' ? 'text-white bg-violet-600/40' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
      >
        EN
      </button>
      <span className="text-slate-700">|</span>
      <button 
        onClick={() => handleLangChange('fr')}
        className={`px-2 py-1 rounded transition-colors ${currentLang === 'fr' ? 'text-white bg-violet-600/40' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
      >
        FR
      </button>
    </div>
  );

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container-premium">
        <div className={`glass rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'shadow-2xl border-white/5' : 'bg-transparent border-transparent'
        }`}>
          {/* Logo */}
          <a href="/" className="font-bold text-xl tracking-tighter flex items-center gap-3 group min-h-[44px]">
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/10 shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
              <img 
                src="/assets/hs-brand-icon.png" 
                alt="HS Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="hidden sm:block text-white font-bold tracking-tighter">{t('navbar.name')}</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors min-h-[44px] flex items-center"
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-px bg-slate-800" />
            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <LangSwitcher />

              <a href="https://github.com/SandidHajar" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] md:min-h-auto md:min-w-auto flex items-center justify-center">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/hajar-sandid-13656b386/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] md:min-h-auto md:min-w-auto flex items-center justify-center">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <LangSwitcher />
            <button 
              className="text-slate-400 hover:text-white transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full mt-2 px-6 md:hidden"
          >
            <div className="glass rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-300 hover:text-violet-400 min-h-[44px] flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px w-full bg-slate-800 my-2" />
              <div className="flex gap-4">
                <a href="https://github.com/SandidHajar" target="_blank" rel="noreferrer" className="flex-1 min-h-[48px] glass rounded-xl flex items-center justify-center text-slate-300">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/hajar-sandid-13656b386/" target="_blank" rel="noreferrer" className="flex-1 min-h-[48px] glass rounded-xl flex items-center justify-center text-slate-300">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
