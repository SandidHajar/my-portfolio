import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Nav/Nav';
import ProjectsGrid from './components/sections/ProjectsGrid';
import Section from './components/Section/Section';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-[#020617] min-h-screen text-slate-100 selection:bg-violet-500/30">
        <Navbar />
        <main>
          <Hero />
          {/* Secondary Info Sections */}
          <div className="space-y-0 relative">
            <Section />
            <Education />
            <Skills />
          </div>
          <ProjectsGrid />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
