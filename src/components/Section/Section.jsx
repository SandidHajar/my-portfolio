import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function Section() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title1: "À propos de",
      title2: "Moi",
      p1Start: "Je suis une technicienne spécialisée en développement digital, option web full stack (Bac+2). J'ai obtenu mon diplôme à l’Institut Spécialisé de Technologie Appliquée",
      p1Strong: "ISTA NTIC SYBA Marrakech",
      p1End: "en",
      p1Date: "juin 2024",
      quote: "\"Passionnée par l'innovation technologique, je mets à profit mes compétences pour concevoir des applications web modernes, fluides et sécurisées. De l'intégration d'API d'intelligence artificielle au développement de plateformes SaaS complexes, j'aime résoudre des problèmes techniques à l'aide de code robuste et de designs intuitifs.\""
    },
    en: {
      title1: "About",
      title2: "Me",
      p1Start: "I am a specialized technician in digital development, full-stack web option (Associate Degree). I graduated from the Specialized Institute of Applied Technology",
      p1Strong: "ISTA NTIC SYBA Marrakech",
      p1End: "in",
      p1Date: "June 2024",
      quote: "\"Passionate about technological innovation, I use my skills to design modern, fluid, and secure web applications. From integrating artificial intelligence APIs to developing complex SaaS platforms, I love solving technical problems using robust code and intuitive designs.\""
    }
  };

  return (
    <section id="about" className="py-20 text-slate-100 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t[lang].title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{t[lang].title2}</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full shadow-lg shadow-purple-500/20"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-slate-800/40 backdrop-blur-md border border-slate-700 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative group overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors duration-500" />
          
          <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8 relative z-10">
            {t[lang].p1Start} <strong className="text-purple-400 font-bold">{t[lang].p1Strong}</strong> {t[lang].p1End} <span className="underline decoration-pink-500 decoration-2 underline-offset-4 font-bold text-white">{t[lang].p1Date}</span>.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed relative z-10 font-medium italic border-l-4 border-purple-500 pl-6 py-2">
            {t[lang].quote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
