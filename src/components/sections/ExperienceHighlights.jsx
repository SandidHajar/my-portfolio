import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import { useLanguage } from '../../context/LanguageContext';

const ExperienceHighlights = () => {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title: "Expérience",
      subtitle: "Points Forts",
      highlights: [
        "Plus de 5 applications full-stack conçues et déployées",
        "Architecture SaaS et systèmes multi-tenants",
        "Authentification robuste et sécurité API (JWT/OTP)",
        "Applications temps réel (SSE / WebSockets)"
      ]
    },
    en: {
      title: "Experience",
      subtitle: "Highlights",
      highlights: [
        "5+ full-stack applications built and deployed",
        "SaaS architecture & Multi-tenant systems",
        "Robust Authentication & API Security (JWT/OTP)",
        "Real-time applications (SSE / WebSockets)"
      ]
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#020617]">
      <div className="container-premium">
        <div className="max-w-4xl mx-auto glass p-10 md:p-12 rounded-[2.5rem] border-white/5 relative group">
          {/* Subtle glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-pink-600/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-1000" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{t[lang].title}</h3>
              <p className="text-violet-400 font-bold uppercase tracking-widest text-xs">{t[lang].subtitle}</p>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t[lang].highlights.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <HiCheckCircle className="text-emerald-500 shrink-0" size={24} />
                  <span className="text-slate-200 font-medium text-sm md:text-base leading-tight">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
