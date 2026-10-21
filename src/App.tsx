import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Scroll spy to highlight active section in Navbar
  useEffect(() => {
    const sectionIds = ['home', 'expertise', 'about', 'portfolio', 'testimonials', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#5E3BEE]/20 selection:text-[#5E3BEE]">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          lang={lang}
          onGetInTouch={() => scrollToSection('contact')}
          onExploreWork={() => scrollToSection('portfolio')}
        />

        {/* Expertise / Skills Section */}
        <Expertise lang={lang} />

        {/* About Me Section */}
        <About
          lang={lang}
          onGetInTouch={() => scrollToSection('contact')}
        />

        {/* Portfolio / Recent Projects Section */}
        <Portfolio lang={lang} />

        {/* Testimonials Section */}
        <Testimonials lang={lang} />

        {/* Contact Me Section */}
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
