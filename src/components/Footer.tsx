import React from 'react';
import { ArrowUp, Globe } from 'lucide-react';

interface FooterProps {
  lang: 'id' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#5E3BEE] flex items-center justify-center text-white text-xs font-black tracking-wider">
              FD
            </div>
            <span className="text-xl font-bold text-white font-['Space_Grotesk']">
              Fadila<span className="text-[#5E3BEE]">.</span>
            </span>
          </div>

          {/* Clean Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#home" className="hover:text-white transition-colors">
              {lang === 'id' ? 'Beranda' : 'Home'}
            </a>
            <a href="#expertise" className="hover:text-white transition-colors">
              {lang === 'id' ? 'Keahlian' : 'Expertise'}
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              {lang === 'id' ? 'Tentang' : 'About'}
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors">
              {lang === 'id' ? 'Portofolio' : 'Portfolio'}
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors">
              {lang === 'id' ? 'Testimoni' : 'Testimonials'}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {lang === 'id' ? 'Kontak' : 'Contact'}
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#EA4C89] transition-colors"
              aria-label="Dribbble"
            >
              Dribbble
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Fadila Disaputro. Made with craftsmanship.</p>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>{lang === 'id' ? 'Kembali ke atas' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
