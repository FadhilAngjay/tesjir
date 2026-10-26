import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  lang: 'id' | 'en';
  onToggleLang: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  lang,
  onToggleLang,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: lang === 'id' ? 'Beranda' : 'Home', id: 'home' },
    { href: '#expertise', label: lang === 'id' ? 'Keahlian' : 'Expertise', id: 'expertise' },
    { href: '#about', label: lang === 'id' ? 'Tentang Saya' : 'About me', id: 'about' },
    { href: '#portfolio', label: lang === 'id' ? 'Portofolio' : 'Portfolio', id: 'portfolio' },
    { href: '#testimonials', label: lang === 'id' ? 'Testimoni' : 'Testimonials', id: 'testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5E3BEE] rounded-sm"
        >
          <div className="w-8 h-8 rounded-lg bg-[#5E3BEE] flex items-center justify-center text-white text-xs font-black shadow-xs group-hover:scale-105 transition-transform tracking-wider">
            FD
          </div>
          <span className="font-extrabold text-slate-950 font-['Space_Grotesk'] text-lg">
            Fadila<span className="text-[#5E3BEE]">.</span>
          </span>
        </a>

        {/* Zone 2: 4-5 Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative whitespace-nowrap shrink-0 transition-colors py-1 hover:text-slate-950 ${
                  isActive ? 'text-[#5E3BEE] font-semibold' : 'text-slate-600'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#5E3BEE] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action + Language Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            type="button"
            aria-label="Toggle language"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5E3BEE]"
          >
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <span className="uppercase">{lang}</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenContact}
            type="button"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#5E3BEE] border-2 border-[#5E3BEE] hover:bg-[#5E3BEE] hover:text-white rounded-lg transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0 shadow-xs cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5E3BEE]"
          >
            {lang === 'id' ? 'Hubungi Saya' : 'Contact Me'}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5E3BEE]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${
                    activeSection === link.id
                      ? 'text-[#5E3BEE] font-semibold pl-2 border-l-2 border-[#5E3BEE]'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  type="button"
                  className="w-full py-3 text-center text-sm font-semibold text-white bg-[#5E3BEE] hover:bg-[#4d2ed4] rounded-lg transition-colors cursor-pointer"
                >
                  {lang === 'id' ? 'Hubungi Saya' : 'Contact Me'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
