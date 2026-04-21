import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  })
};

export default function Section() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title1: "À propos de",
      title2: "Moi",
      intro: "Développeuse Full-Stack spécialisée dans les applications web modernes et les plateformes SaaS.",
      grad: {
        text1: "Diplômée en",
        date: "2024",
        text2: "de l'",
        school: "ISTA NTIC SYBA Marrakech",
        text3: ", je me concentre sur la création de systèmes évolutifs et performants avec React, Node.js, et Laravel."
      },
      expertiseTitle: "Mon expertise principale inclut la conception de :",
      expertiseList: [
        "APIs REST sécurisées et systèmes d'authentification",
        "Applications interactives en temps réel",
        "Architectures modulaires et maintenables"
      ],
      goal: "Mon objectif est de toujours fournir des solutions propres, performantes et centrées sur l'utilisateur."
    },
    en: {
      title1: "About",
      title2: "Me",
      intro: "Full-Stack Developer specialized in modern web applications and SaaS platforms.",
      grad: {
        text1: "A",
        date: "2024",
        text2: "graduate from",
        school: "ISTA NTIC SYBA Marrakech",
        text3: ", I focus on building scalable, high-performance systems using React, Node.js, and Laravel."
      },
      expertiseTitle: "My core expertise includes designing:",
      expertiseList: [
        "Secure REST APIs and authentication systems",
        "Real-time interactive applications",
        "Modular and maintainable architectures"
      ],
      goal: "My goal is to constantly deliver clean, performant, and user-centric solutions."
    }
  };

  return (
    <section id="about" className="py-20 text-slate-100 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      {/* Animated glow divider */}
      <div className="section-glow-line" />

      {/* Floating background orbs */}
      <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none float-orb" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none float-orb-delayed" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t[lang].title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{t[lang].title2}</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full shadow-lg shadow-purple-500/20"
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="bg-slate-800/40 backdrop-blur-md border border-slate-700 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative group overflow-hidden glass-shimmer animate-border-glow"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors duration-500 float-orb" />
          
          <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-white font-bold leading-tight mb-6 relative z-10">
            {t[lang].intro}
          </motion.p>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-8 relative z-10">
            {t[lang].grad.text1} <span className="underline decoration-pink-500 decoration-2 underline-offset-4 font-bold text-white">{t[lang].grad.date}</span> {t[lang].grad.text2} <strong className="text-purple-400 font-bold">{t[lang].grad.school}</strong>{t[lang].grad.text3}
          </motion.p>

          <motion.div variants={itemVariants} className="bg-slate-900/50 rounded-2xl p-6 mb-8 border border-slate-700/50 relative z-10 w-full md:w-fit">
            <p className="text-lg md:text-xl text-purple-300 font-medium mb-4">
              {t[lang].expertiseTitle}
            </p>
            <ul className="space-y-3">
              {t[lang].expertiseList.map((item, index) => (
                <motion.li 
                  key={index} 
                  custom={index}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start text-slate-300 text-lg"
                >
                  <motion.span 
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                    className="text-pink-500 mr-3 mt-1"
                  >
                    ✦
                  </motion.span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 leading-relaxed relative z-10 font-medium italic border-l-4 border-purple-500 pl-6 py-2">
            "{t[lang].goal}"
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
