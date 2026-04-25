import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Nav/Nav';
import FeaturedProject from './components/sections/FeaturedProject';
import ProjectsGrid from './components/sections/ProjectsGrid';
import Section from './components/Section/Section';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import WhatIBring from './components/sections/WhatIBring';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-[#020617] min-h-screen text-slate-100 selection:bg-violet-500/30">
        <Navbar />
        <main>
          <Hero />
          {/* About Section */}
          <Section />
          
          <div className="space-y-0 relative">
            <Education />
            <Skills />
          </div>

          <FeaturedProject />
          <ProjectsGrid />
          
          <WhatIBring />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}

export default App;
