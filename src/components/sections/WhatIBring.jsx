import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineTemplate, 
  HiOutlineServer, 
  HiOutlineBriefcase, 
  HiOutlineLightningBolt 
} from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const WhatIBring = () => {
  const { t } = useTranslation();
  
  const icons = [
    HiOutlineTemplate,
    HiOutlineServer,
    HiOutlineBriefcase,
    HiOutlineLightningBolt
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#020617]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-premium relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tighter">
              {t('whatIBring.title')}
            </h2>
            <div className="h-px w-20 bg-violet-500 mx-auto opacity-50" />
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t('whatIBring.items', { returnObjects: true }).map((item, i) => {
              const Icon = icons[i] || HiOutlineLightningBolt;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-bl-full group-hover:bg-violet-600/10 transition-colors" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6 group-hover:bg-violet-500 group-hover:text-white transition-all shadow-lg">
                    <Icon size={26} />
                  </div>
                  
                  <h3 className="text-white font-bold text-lg md:text-xl tracking-tight relative z-10">
                    {item}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIBring;
