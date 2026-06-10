import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Recommendations from './components/Recommendations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseSpotlight from './components/MouseSpotlight';

function App() {
  const [isDark, setIsDark] = useState(true); // Default a dark mode

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-accent/30 selection:text-brand-accent relative">
      <MouseSpotlight />
      <Navbar isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full relative z-10">
        <Hero />
      </main>
      
      {/* Sección Skills que rompe el grid para abarcar más ancho */}
      <Skills />
      
      <main className="flex-grow px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full relative z-10">
        <Experience />
        <Education />
        <Projects />
        <Recommendations />
        <Contact />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
