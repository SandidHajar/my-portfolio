'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  const phoneNumber = '212681686825';
  const message = encodeURIComponent(
    "Bonjour Hajar, j'ai vu votre portfolio et j'aimerais discuter d'un projet avec vous."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-[9999] md:bottom-8 md:right-8"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/30 bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.32)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(37,211,102,0.48)] md:h-16 md:w-16"
      >
        <div className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20 group-hover:opacity-40" />
        <div className="absolute inset-0 rounded-full border border-white/20 bg-white/10 backdrop-blur-[2px]" />
        <FaWhatsapp size={30} className="relative z-10 transition-transform group-hover:scale-110" />
        <div className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white opacity-0 transition-opacity group-hover:opacity-100">
          Discutons sur WhatsApp
        </div>
      </a>
    </motion.div>
  );
}
