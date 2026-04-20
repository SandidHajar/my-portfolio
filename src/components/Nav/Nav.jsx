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
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 relative overflow-hidden text-white" style={{ backgroundColor: '#0f172a' }}>
      {/* Background ambient blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 z-10 mt-10 md:mt-0">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-medium text-sm mb-2"
          >
            🚀 Développeuse Full Stack & IA
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-md">
            Créons des <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-sm">
              Applications Web
            </span><br className="hidden md:block" />
            Modernes & Scalables.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-xl mx-auto md:mx-0 font-light">
            Je suis <strong className="text-white font-bold">Hajar Sandid</strong>, une développeuse passionnée spécialisée dans la conception d'architectures SaaS multi-tenant et l'intégration de solutions d'intelligence artificielle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <a href="#portfolio" className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/25 text-center text-sm md:text-base">
              Voir mes projets
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-gray-600 hover:bg-gray-800 text-gray-200 font-medium hover:scale-105 transition-all duration-300 text-center text-sm md:text-base">
              Contactez-moi
            </a>
          </div>

          <div className="flex gap-8 pt-8 border-t border-gray-800 mt-8 justify-center md:justify-start">
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">2+</div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Années d'expérience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">10+</div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Projets Réalisés</div>
            </div>
          </div>
        </motion.div>

        {/* 3D Interactive Portrait */}
        <motion.div 
          className="flex-1 flex justify-center perspective-1000"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-64 h-64 md:w-[420px] md:h-[420px] cursor-pointer"
          >
            {/* Multi-layered shadows/glows for 3D depth */}
            <div 
              style={{ transform: "translateZ(-50px)" }}
              className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 to-pink-600/40 rounded-full md:rounded-[3rem] blur-2xl animate-pulse" 
            />
            
            {/* The main image card */}
            <div 
              style={{ transform: "translateZ(50px)" }}
              className="relative w-full h-full"
            >
              <img 
                src={hajar} 
                alt="Hajar Sandid" 
                className="w-full h-full object-cover rounded-full md:rounded-[3rem] border-2 border-white/20 shadow-2xl z-10"
              />
              
              {/* Glass glare effect layer */}
              <div className="absolute inset-0 rounded-full md:rounded-[3rem] bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating 'Open to work' badge with even more Z-depth */}
            <motion.div 
              style={{ transform: "translateZ(80px)" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-gray-800/90 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-green-500 rounded-full relative" />
                <span className="text-sm font-semibold text-white">Open to work</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Nav;