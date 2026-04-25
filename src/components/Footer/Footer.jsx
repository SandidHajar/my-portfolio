import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiMail, HiOutlineCheckCircle } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="relative pt-20 pb-10 overflow-hidden bg-[#020617]">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-premium relative z-10">
        <div className="glass rounded-[3.5rem] p-10 md:p-20 border-white/10 bg-white/[0.02] mb-20 relative overflow-hidden group">
          {/* Internal ambient glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-600/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-violet-600/30 transition-colors duration-700" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 status-pulse" />
                {t('footer.subtitle')}
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-10 tracking-tighter leading-[1.05]">
                {t('footer.title1')} <br />
                <span className="text-gradient drop-shadow-sm">{t('footer.title2')}</span>
              </h2>

              <div className="space-y-5 mb-12">
                <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em] ml-1">{t('footer.availabilityLabel')}</p>
                <div className="flex flex-wrap gap-3">
                  {t('footer.availability', { returnObjects: true }).map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2.5 text-slate-200 text-xs font-semibold bg-white/5 px-5 py-2.5 rounded-2xl border border-white/10 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all cursor-default"
                    >
                      <HiOutlineCheckCircle className="text-violet-400" size={16} />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <motion.a 
                  href="mailto:sandidhajar03@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-extrabold rounded-2xl hover:bg-slate-100 transition-all shadow-[0_10px_20px_rgba(255,255,255,0.1)] group"
                >
                  <HiMail size={22} />
                  {t('footer.btn')}
                  <HiArrowRight className="group-hover:translate-x-1.5 transition-transform" />
                </motion.a>
                
                <div className="flex items-center gap-3">
                  <a href="https://github.com/SandidHajar" target="_blank" rel="noreferrer" className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-white/5 transition-all group">
                    <FaGithub size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://www.linkedin.com/in/hajar-sandid-13656b386/" target="_blank" rel="noreferrer" className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-white/5 transition-all group">
                    <FaLinkedin size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative w-80 h-80 mx-auto">
                {/* Decorative rotating elements */}
                <div className="absolute inset-0 rounded-full border border-dashed border-violet-500/20 animate-spin-slow" />
                <div className="absolute inset-8 rounded-full border border-violet-500/10 animate-reverse-spin" />
                
                {/* Image container with massive glow */}
                <div className="absolute inset-10 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_80px_rgba(139,92,246,0.15)] group hover:shadow-[0_0_100px_rgba(139,92,246,0.3)] transition-all duration-700 bg-slate-900/40 backdrop-blur-sm">
                  <img 
                    src="/assets/hs-brand-icon.png" 
                    alt="Hajar Sandid" 
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-pink-600/5 opacity-50" />
                </div>

                {/* Floating indicator */}
                <motion.div 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 bg-violet-600 px-5 py-2.5 rounded-2xl shadow-[0_10px_20px_rgba(139,92,246,0.3)] border border-white/20"
                >
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Available</span>
                </motion.div>
                
                {/* Pulsing dot for availability */}
                <div className="absolute bottom-12 left-12 w-4 h-4 bg-emerald-500 rounded-full border-4 border-[#020617] shadow-lg status-pulse" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10 border-t border-white/5 text-slate-500 text-xs font-medium uppercase tracking-widest">
          <p>© 2024 - 2026 {t('navbar.name')}. ALL RIGHTS RESERVED.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
