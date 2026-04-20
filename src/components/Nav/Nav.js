import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowNarrowRight, HiDownload } from 'react-icons/hi';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { lang } = useLanguage();

  const t = {
    fr: {
      badge: "Disponible pour Stage / CDI / Remote",
      title1: "Développeuse Full-stack créant des",
      title2: "systèmes SaaS scalables",
      subtitle: "Spécialisée dans la conception d'architectures multi-tenant robustes, l'orchestration de moteurs d'automatisation haute performance et l'ingénierie de systèmes de synchronisation en temps réel à grande échelle.",
      btnWork: "Voir les projets",
      btnCV: "Télécharger CV",
      btnContact: "Me contacter",
      stats: [
        { label: 'Architecture Cloud', sub: 'Prêt pour la production' },
        { label: 'System Design', sub: 'Axé sur la performance' },
        { label: 'Code Propre', sub: 'Conception évolutive' },
        { label: 'Sécurité', sub: 'Standards entreprise' }
      ]
    },
    en: {
      badge: "Available for Internship / Full-time / Remote",
      title1: "Full-stack developer building",
      title2: "scalable SaaS systems",
      subtitle: "Specialized in designing robust multi-tenant architectures, orchestrating high-performance automation engines, and engineering real-time synchronization systems that scale.",
      btnWork: "View Projects",
      btnCV: "Download Resume",
      btnContact: "Contact Me",
      stats: [
        { label: 'Cloud Architecture', sub: 'Production Ready' },
        { label: 'System Design', sub: 'Performance Driven' },
        { label: 'Clean Code', sub: 'Scalable Patterns' },
        { label: 'Security', sub: 'Enterprise Standards' }
      ]
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-premium relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-8 border-violet-500/20"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 status-pulse shadow-[0_0_10px_#10b981]" />
            <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
              {t[lang].badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-white mb-8"
          >
            {t[lang].title1} <br />
            <span className="text-gradient">{t[lang].title2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-12 font-light"
          >
            {t[lang].subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <a 
              href="#work" 
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold transition-all shadow-xl shadow-violet-600/20 group"
            >
              {t[lang].btnWork} 
              <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/hajar_sandid_cv.pdf"
              download="hajar_sandid_cv.pdf"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass hover:bg-white/5 text-white font-bold transition-all group"
            >
              <HiDownload className="text-violet-400 group-hover:-translate-y-0.5 transition-transform" size={20} />
              {t[lang].btnCV}
            </a>

            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-slate-400 hover:text-white font-bold transition-colors"
            >
              {t[lang].btnContact}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 pt-12 border-t border-slate-900 grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl"
        >
          {t[lang].stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-1">
              <span className="text-slate-100 font-bold tracking-tight">{stat.label}</span>
              <span className="text-sm text-slate-500">{stat.sub}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
