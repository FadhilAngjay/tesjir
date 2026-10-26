import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  lang: 'id' | 'en';
  onGetInTouch: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onGetInTouch, onExploreWork }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/60 to-white">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#5E3BEE]/5 via-purple-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Split Grid: Left Text, Right Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Kicker */}
            <span className="text-base sm:text-lg font-semibold text-slate-800 tracking-normal mb-3">
              {lang === 'id' ? 'Halo, saya Fadila' : 'Hey, I am Fadila'}
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-6 text-balance">
              {lang === 'id' ? (
                <>
                  I create <span className="text-[#5E3BEE]">product design</span> and brand experience
                </>
              ) : (
                <>
                  I create <span className="text-[#5E3BEE]">product design</span> and brand experience
                </>
              )}
            </h1>

            {/* Subparagraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              {lang === 'id'
                ? 'Membantu startup dan enterprise merancang antarmuka digital yang intuitif, sistem desain terstruktur, dan pengalaman pengguna yang mendorong pertumbuhan bisnis.'
                : 'Helping high-growth startups and enterprises architect thoughtful digital interfaces, scalable design systems, and delightful experiences that drive measurable outcomes.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onGetInTouch}
                type="button"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-[#5E3BEE] hover:bg-[#4d2ed4] active:scale-98 rounded-lg shadow-md shadow-[#5E3BEE]/25 transition-all duration-200 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5E3BEE] focus-visible:ring-offset-2"
              >
                <span>{lang === 'id' ? 'Mulai Diskusi' : 'Get In Touch'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreWork}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-lg shadow-2xs transition-all duration-200 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>{lang === 'id' ? 'Lihat Portofolio' : 'View Portfolio'}</span>
              </button>
            </div>

            {/* Quiet trust markers */}
            <div className="mt-8 flex items-center gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {lang === 'id' ? 'Tersedia untuk proyek baru' : 'Available for new projects'}
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{lang === 'id' ? 'Respon cepat < 24 jam' : 'Fast response < 24 hrs'}</span>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Container matching Reference */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] sm:max-w-[460px]">
              {/* Floating Sparkle Stars matching mockup design */}
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-6 left-8 z-20 text-[#5E3BEE]"
              >
                <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
                </svg>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3.5, delay: 0.5, ease: 'easeInOut' }}
                className="absolute top-10 -right-4 z-20 text-[#5E3BEE]"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
                </svg>
              </motion.div>

              <motion.div
                animate={{ y: [0, -7, 0], rotate: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, delay: 1, ease: 'easeInOut' }}
                className="absolute bottom-8 -left-5 z-20 text-[#5E3BEE]"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
                </svg>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1.5, ease: 'easeInOut' }}
                className="absolute -bottom-4 right-12 z-20 text-[#5E3BEE]"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
                </svg>
              </motion.div>

              {/* Decorative accent background box with rounded corners */}
              <div className="relative rounded-[32px] bg-[#E5ECF6] p-4 sm:p-6 overflow-hidden shadow-sm border border-blue-100/60 aspect-[4/4.4] flex items-end justify-center">
                {/* Subtle internal gradient ring */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/60 pointer-events-none" />

                {/* Decorative background circle */}
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/50 blur-xl pointer-events-none" />

                {/* Portrait Image with resilient error handling */}
                <div className="relative z-10 w-full h-full flex items-end justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                    alt="Fadila Disaputro - Senior Product Designer"
                    referrerPolicy="no-referrer"
                    className="w-auto h-[92%] object-cover object-top rounded-2xl drop-shadow-md select-none transition-transform duration-500 hover:scale-[1.02]"
                    onError={(e) => {
                      // Fallback to stylized SVG portrait representation if external network blocks
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement?.querySelector('.hero-fallback');
                      if (fallback) (fallback as HTMLElement).style.display = 'flex';
                    }}
                  />

                  {/* Fallback container matching Zero-Broken-Image policy */}
                  <div className="hero-fallback hidden flex-col items-center justify-center w-full h-[85%] rounded-2xl bg-gradient-to-b from-white to-blue-50 border border-blue-200/50 p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#5E3BEE]/10 flex items-center justify-center text-[#5E3BEE] mb-4">
                      <Sparkles className="w-10 h-10" />
                    </div>
                    <span className="text-xl font-bold text-slate-800">Fadila Disaputro</span>
                    <span className="text-sm text-slate-500 mt-1">Product Designer & Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
