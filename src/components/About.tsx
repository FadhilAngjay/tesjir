import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, Sparkles, Award, Coffee, Heart, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  lang: 'id' | 'en';
  onGetInTouch: () => void;
}

export const About: React.FC<AboutProps> = ({ lang, onGetInTouch }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCV = () => {
    // Generate simple text CV download
    const cvContent = `FADILA DISAPUTRO - SENIOR PRODUCT DESIGNER & FRONTEND ENGINEER
Email: fadiladisaputro123@gmail.com
Portfolio: https://dribbble.com
Location: Jakarta, Indonesia / Remote

EXPERIENCE SUMMARY:
- 5+ Years designing digital products for startups and enterprise clients.
- Specialist in UI/UX Design, Design Systems (Figma), Webflow, and React/Tailwind frontend.
- Recognized with 15+ design recognitions and proven conversion-focused UX results.

CORE SKILLS:
- Product Discovery, User Testing, Empathy Mapping, Information Architecture
- High-Fidelity Prototyping, Design Tokens, Micro-Interactions
- Responsive Webflow, React, TypeScript, Tailwind CSS, Performance Optimization
`;
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CV_Fadila_Disaputro_Product_Designer.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait with artistic purple brush-stroke splash */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              {/* Organic Brush-Stroke / Paint Splash Vector matching Reference */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <svg
                  viewBox="0 0 500 500"
                  className="w-[115%] h-[115%] text-[#5E3BEE] fill-current opacity-95 transition-transform duration-700 hover:scale-105"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M427.5,311.5Q394,373,338.5,417Q283,461,211,446.5Q139,432,92,377.5Q45,323,55.5,251Q66,179,109.5,123.5Q153,68,225,57.5Q297,47,358,89.5Q419,132,440,191Q461,250,427.5,311.5Z" />
                </svg>
              </div>

              {/* Secondary soft colored accents */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-indigo-200/50 blur-xl pointer-events-none -z-20" />

              {/* Portrait Image */}
              <div className="relative z-10 w-[85%] h-[85%] flex items-end justify-center overflow-hidden rounded-full border-4 border-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Fadila Disaputro Professional Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top select-none hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.about-fallback');
                    if (fallback) (fallback as HTMLElement).style.display = 'flex';
                  }}
                />
                <div className="about-fallback hidden w-full h-full bg-slate-100 flex flex-col items-center justify-center p-4 text-center">
                  <Sparkles className="w-12 h-12 text-[#5E3BEE] mb-2" />
                  <span className="font-bold text-slate-800">Fadila Disaputro</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Subhead */}
            <span className="text-sm font-bold text-slate-900 tracking-wider uppercase block mb-2">
              {lang === 'id' ? 'Tentang' : 'About'}
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-6">
              {lang === 'id' ? 'Tentang Saya' : 'About Me'}
            </h2>

            {/* Story Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
              {lang === 'id'
                ? 'Saya adalah Product Designer & Front-End Specialist dengan pengalaman lebih dari 5 tahun dalam mentransformasi ide kompleks menjadi produk digital yang intuitif, bernilai estetika tinggi, dan memikat pengguna.'
                : 'I am a Product Designer & Front-End Specialist with over 5 years of experience bridging intuitive UX research with polished, pixel-perfect web execution and high conversion.'}
            </p>

            {/* Story Paragraph 2 */}
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              {lang === 'id'
                ? 'Filosofi desain saya berakar pada kesederhanaan radikal dan perhatian mendalam pada interaksi mikro. Saya percaya bahwa produk hebat tercipta ketika riset kebutuhan pengguna dipadukan dengan performa teknologi tanpa cela dan transisi visual yang menyenangkan.'
                : 'My design philosophy is rooted in clarity, purposeful typography, and thoughtful micro-motion. I believe extraordinary products arise when deep user empathy is combined with flawless performance and delightful visual transitions.'}
            </p>

            {/* Competency Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#5E3BEE] shrink-0" />
                <span>{lang === 'id' ? 'Sistem Desain & Tokinisasi' : 'Design Systems & Tokens'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#5E3BEE] shrink-0" />
                <span>{lang === 'id' ? 'Aksesibilitas WCAG AA+' : 'WCAG AA+ Accessibility'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#5E3BEE] shrink-0" />
                <span>{lang === 'id' ? 'Animasi & Transisi Halus' : 'Fluid Motion & Micro-Interactions'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#5E3BEE] shrink-0" />
                <span>{lang === 'id' ? 'Front-End Modern (React/Tailwind)' : 'Modern Front-End (React/Tailwind)'}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleDownloadCV}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all duration-200 cursor-pointer active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-900"
              >
                <Download className="w-4 h-4" />
                <span>{downloadSuccess ? (lang === 'id' ? 'CV Terunduh!' : 'CV Downloaded!') : (lang === 'id' ? 'Unduh Resume / CV' : 'Download Resume')}</span>
              </button>

              <button
                onClick={onGetInTouch}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#5E3BEE] bg-[#5E3BEE]/10 hover:bg-[#5E3BEE]/20 rounded-lg transition-all duration-200 cursor-pointer active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5E3BEE]"
              >
                <span>{lang === 'id' ? 'Diskusikan Proyek' : "Let's Collaborate"}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
