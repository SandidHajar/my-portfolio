import React from 'react';
import { motion } from 'framer-motion';

export default function Section() {
  return (
    <section id="about" className="py-20 text-slate-100 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      {/* Subtle background decoration */}
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
            À propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Moi</span>
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
          {/* Animated corner glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors duration-500" />
          
          <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8 relative z-10">
            Je suis une technicienne spécialisée en développement digital, option web full stack (Bac+2). J'ai obtenu mon diplôme à l’Institut Spécialisé de Technologie Appliquée <strong className="text-purple-400 font-bold">ISTA NTIC SYBA Marrakech</strong> en <span className="underline decoration-pink-500 decoration-2 underline-offset-4 font-bold text-white">juin 2024</span>.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed relative z-10 font-medium italic border-l-4 border-purple-500 pl-6 py-2">
            "Passionnée par l'innovation technologique, je mets à profit mes compétences pour concevoir des applications web modernes, fluides et sécurisées. De l'intégration d'API d'intelligence artificielle au développement de plateformes SaaS complexes, j'aime résoudre des problèmes techniques à l'aide de code robuste et de designs intuitifs."
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}
