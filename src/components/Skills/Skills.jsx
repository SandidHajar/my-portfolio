import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  DiJavascript1, DiReact, DiNodejsSmall
} from "react-icons/di";
import { 
  SiLaravel, SiMongodb, SiTailwindcss, SiExpress, SiTypescript, SiRedis, SiPostgresql, SiPrisma, SiSupabase, SiVercel, SiOpenai 
} from "react-icons/si";
import { FaPhp, FaLock } from "react-icons/fa";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: <DiReact className="text-[#61dafb]" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-[#f0db4f]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#007acc]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38b2ac]" /> },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <DiNodejsSmall className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "Laravel", icon: <SiLaravel className="text-[#ff2d20]" /> },
      { name: "PHP", icon: <FaPhp className="text-[#777bb4]" /> },
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47a248]" /> },
      { name: "Redis", icon: <SiRedis className="text-[#d82c20]" /> },
      { name: "Supabase", icon: <SiSupabase className="text-[#3ecf8e]" /> },
    ]
  },
  {
    category: "AI & Modern Tools",
    skills: [
      { name: "AI/LLM Integration", icon: <SiOpenai className="text-[#10a37f]" /> },
      { name: "Prisma ORM", icon: <SiPrisma className="text-white" /> },
      { name: "JWT & OTP Auth", icon: <FaLock className="text-purple-400" /> },
      { name: "Git & Vercel", icon: <SiVercel className="text-white" /> },
    ]
  }
];

const Skills = () => {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title1: "Compétences",
      title2: "Techniques",
      subtitle: "Une expertise diversifiée couvrant tout le cycle de développement, du design UI à l'architecture backend et l'intégration d'IA."
    },
    en: {
      title1: "Technical",
      title2: "Skills",
      subtitle: "A diversified expertise covering the full development lifecycle, from UI design to backend architecture and AI integration."
    }
  };

  return (
    <section id="my_skills" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t[lang].title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{t[lang].title2}</span>
          </motion.h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            {t[lang].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 p-6 rounded-3xl hover:border-purple-500/40 transition-all duration-300 shadow-2xl"
            >
              <h3 className="text-purple-300 font-bold mb-6 text-xl tracking-wide uppercase">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-4 group">
                    <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;