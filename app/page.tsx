import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Nav/Nav';
import Section from '../components/Section/Section';
import Education from '../components/Education/Education';
import Skills from '../components/Skills/Skills';
import FeaturedProject from '../components/sections/FeaturedProject';
import ProjectsGrid from '../components/sections/ProjectsGrid';
import WhatIBring from '../components/sections/WhatIBring';
import Footer from '../components/Footer/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp/FloatingWhatsApp';

export default function HomePage() {
  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Section />
        <div className="relative space-y-0">
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
  );
}
