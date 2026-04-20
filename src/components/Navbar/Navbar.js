import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = {
    fr: { work: 'Projets', about: 'À propos', philosophy: 'Philosophie', contact: 'Contact' },
    en: { work: 'Work', about: 'About', philosophy: 'Philosophy', contact: 'Contact' }
  };

  const navLinks = [
    { name: t[lang].work, href: '#work' },
    { name: t[lang].about, href: '#about' },
    { name: t[lang].philosophy, href: '#philosophy' },
    { name: t[lang].contact, href: '#contact' },
  ];

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
          <a href="/" className="font-bold text-xl tracking-tighter flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
            </div>
            <span className="hidden sm:block text-white">Hajar Sandid</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-px bg-slate-800" />
            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <button 
                onClick={toggleLanguage}
                className="flex items-center justify-center w-8 h-8 rounded-md bg-white/5 hover:bg-white/10 text-xs font-bold text-white transition-colors border border-white/10 mr-2"
              >
                {lang === 'fr' ? 'EN' : 'FR'}
              </button>
              
              <a href="https://github.com/SandidHajar" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/hajar-sandid" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleLanguage}
              className="flex items-center justify-center w-8 h-8 rounded-md bg-white/5 text-xs font-bold text-white border border-white/10"
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
            <button 
              className="text-slate-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
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
                  className="text-lg font-medium text-slate-300 hover:text-violet-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px w-full bg-slate-800 my-2" />
              <div className="flex gap-4">
                <a href="https://github.com/SandidHajar" target="_blank" rel="noreferrer" className="flex-1 py-3 glass rounded-xl flex items-center justify-center text-slate-300">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/hajar-sandid" target="_blank" rel="noreferrer" className="flex-1 py-3 glass rounded-xl flex items-center justify-center text-slate-300">
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
