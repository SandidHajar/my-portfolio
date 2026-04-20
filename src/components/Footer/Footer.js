import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title1: "Envie de bâtir des",
      title2: "systèmes à fort impact ?",
      subtitle: "Je suis actuellement ouverte à de nouvelles opportunités (Stage / CDI / Remote). Discutons de la manière dont je peux contribuer à votre équipe technique.",
      btn: "Me contacter",
      designed: "Conçu & Développé par",
      built: "Construit avec une vision de production.",
      mailTo: "mailto:sandidhajar@gmail.com?subject=Opportunité - Hajar Sandid (Portfolio)"
    },
    en: {
      title1: "Ready to build",
      title2: "high-impact systems?",
      subtitle: "I am currently open to new opportunities (Internship / Full-time / Remote). Let’s discuss how I can contribute to your technical team.",
      btn: "Get in touch",
      designed: "Designed & Engineered by",
      built: "Built with a production mindset.",
      mailTo: "mailto:sandidhajar@gmail.com?subject=Opportunity - Hajar Sandid (Portfolio)"
    }
  };

  return (
    <footer id="contact" className="relative py-24 overflow-hidden border-t border-slate-900 bg-slate-950/50">
      <div className="container-premium relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 text-center lg:text-left">
          
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              {t[lang].title1} <br />
              <span className="text-gradient">{t[lang].title2}</span>
            </motion.h2>
            <p className="text-slate-400 text-lg md:text-xl font-light mb-10">
              {t[lang].subtitle}
            </p>
            
            <a 
              href={t[lang].mailTo} 
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-white text-black font-bold text-base hover:bg-slate-200 transition-all shadow-xl shadow-white/5 group w-fit"
            >
              {t[lang].btn} <HiArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-12">
            <div className="flex gap-6">
              {[
                { icon: FaLinkedin, href: 'https://linkedin.com/in/hajar-sandid', label: 'LinkedIn' },
                { icon: FaGithub, href: 'https://github.com/SandidHajar', label: 'GitHub' },
                { icon: FaEnvelope, href: t[lang].mailTo, label: 'Email' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 glass rounded-xl text-slate-400 hover:text-white hover:border-white/20 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>

            <div className="text-right">
              <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[.3em] mb-2">{t[lang].designed}</p>
              <h3 className="text-xl font-bold text-white tracking-tighter">Hajar Sandid</h3>
              <p className="text-sm text-slate-500 mt-2">© 2026. {t[lang].built}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
};

export default Footer;
