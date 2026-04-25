import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];

  const educationKeys = ['bootcamp', 'degree'];
  
  const educationIcons = {
    bootcamp: <FaCertificate className="text-pink-500" />,
    degree: <FaGraduationCap className="text-purple-500" />
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#0f172a]">
      {/* Background decoration */}
      <div className="section-glow-line" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none float-orb" />

      <div className="container-premium relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t('education.title1')} <span className="text-gradient">{t('education.title2')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            {t('education.subtitle')}
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationKeys.map((key, index) => {
            const item = t(`education.items.${key}`, { returnObjects: true });
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="glass rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-violet-500/30 transition-all duration-500 shadow-2xl relative overflow-hidden glass-shimmer">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Icon side */}
                    <div className="p-5 rounded-2xl bg-slate-900/50 border border-white/5 text-3xl group-hover:scale-110 transition-transform duration-500">
                      {educationIcons[key]}
                    </div>

                    {/* Content side */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full w-fit">
                          <FaCalendarAlt size={12} className="text-pink-500" />
                          {item.date}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-purple-300 font-semibold mb-4">
                        <FaMapMarkerAlt size={14} />
                        {item.school} • <span className="text-slate-400 font-normal">{item.location}</span>
                      </div>

                      <p className="text-slate-400 leading-relaxed mb-6 font-light">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {item.highlights.map((h, i) => (
                          <span key={i} className="text-[10px] md:text-sm font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg bg-violet-600/10 border border-violet-500/20 text-violet-300">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
