import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

interface TestimonialsProps {
  lang: 'id' | 'en';
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  return (
    <section id="testimonials" className="py-24 bg-[#F5F7FA] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header matching reference */}
        <div className="mb-14">
          <span className="text-sm font-bold text-slate-900 tracking-wider uppercase block mb-2">
            {lang === 'id' ? 'Umpan Balik Klien' : 'Client Feedback'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            {lang === 'id' ? 'Testimoni Klien' : 'Customer testimonials'}
          </h2>
        </div>

        {/* 3-Column Testimonial Grid matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* 5 Stars Rating matching green/teal star style in mockup */}
                <div className="flex items-center gap-1 text-[#006B6A] mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed mb-6 italic">
                  "{lang === 'id' ? t.content : t.contentEn}"
                </p>
              </div>

              {/* Author Lockup */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.avatar-fallback');
                    if (fallback) (fallback as HTMLElement).style.display = 'flex';
                  }}
                />
                <div className="avatar-fallback hidden w-12 h-12 rounded-full bg-[#5E3BEE]/10 text-[#5E3BEE] font-bold text-sm items-center justify-center border border-indigo-100">
                  {t.name.slice(0, 2).toUpperCase()}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">{t.name}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lang === 'id' ? t.role : t.roleEn} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
