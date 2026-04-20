import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import hajar from "../Images/hajar.png";

const Nav = () => {
  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth the mouse movement
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transform position into rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="flex items-center justify-center py-12 md:py-24 px-4 sm:px-6 relative overflow-hidden text-white" style={{ backgroundColor: '#0a0d1a' }}>
      {/* Background ambient blurs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10 pt-8">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 space-y-6 text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/50 bg-gradient-to-r from-purple-500/10 to-transparent text-purple-200 font-medium text-xs md:text-sm"
          >
            <span role="img" aria-label="rocket">🚀</span> Développeuse Full Stack & IA
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold leading-[1.15] text-white tracking-tight">
            Créons des <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
              Applications Web
            </span><br />
            Modernes & Scalables.
          </h1>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl font-light">
            Je suis <strong className="text-white font-bold">Hajar Sandid</strong>, une développeuse passionnée spécialisée dans la conception d'architectures SaaS multi-tenant et l'intégration de solutions d'intelligence artificielle.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#portfolio" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-xl shadow-purple-500/20 text-center text-sm">
              Voir mes projets
            </a>
            <a href="#contact" className="px-8 py-3.5 rounded-full border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-white font-semibold transition-all duration-300 text-center text-sm">
              Contactez-moi
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end perspective-1000"
          style={{ perspective: "1900px" }}
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-[300px] h-[400px] md:max-w-[420px] md:h-[580px] group"
          >
            {/* Neon Border Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[4rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

            {/* Image container */}
            <div
              style={{ transform: "translateZ(50px)" }}
              className="relative w-full h-full rounded-[4rem] overflow-hidden border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)] bg-slate-900"
            >
              <img
                src={hajar}
                alt="Hajar Sandid"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
            </div>

            {/* Status Badge - Pill Style */}
            <motion.div
              style={{ transform: "translateZ(100px)" }}
              className="absolute -bottom-6 -left-8 md:bottom-16 md:-left-12 bg-slate-900/60 backdrop-blur-xl border border-white/10 p-2.5 px-5 rounded-full shadow-2xl z-20 flex items-center gap-2.5"
            >
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </div>
              <span className="text-[9px] md:text-[11px] font-black text-white tracking-[0.2em] uppercase">Open to work</span>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>

      {/* Decorative line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
    </section>
  );
};

export default Nav;