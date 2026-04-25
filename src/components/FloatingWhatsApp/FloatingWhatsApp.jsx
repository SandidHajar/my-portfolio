import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {

  const phoneNumber = "212681686825"; 
  const message = encodeURIComponent("Bonjour Hajar, j'ai vu votre portfolio et j'aimerais discuter d'un projet avec vous.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-[9999]"
    >
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all group"
      >
        {/* Pulsing effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40" />
        
        {/* Glass overlay */}
        <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-[2px] border border-white/20" />
        
        {/* Icon */}
        <FaWhatsapp size={32} className="relative z-10 group-hover:scale-110 transition-transform" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">
          Discutons sur WhatsApp
        </div>
      </a>
    </motion.div>
  );
};

export default FloatingWhatsApp;
