import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Tag, Feather, Code2, ArrowRight, X, CheckCircle } from 'lucide-react';
import { EXPERTISE_DATA, ExpertiseItem } from '../data/portfolioData';

interface ExpertiseProps {
  lang: 'id' | 'en';
}

export const Expertise: React.FC<ExpertiseProps> = ({ lang }) => {
  const [selectedExpertise, setSelectedExpertise] = useState<ExpertiseItem | null>(null);

  const renderIcon = (iconName: string) => {
    const iconClass = 'w-7 h-7 text-[#006B6A]';
    switch (iconName) {
      case 'Compass':
        return <Compass className={iconClass} />;
      case 'Tag':
        return <Tag className={iconClass} />;
      case 'Feather':
        return <Feather className={iconClass} />;
      case 'Code2':
        return <Code2 className={iconClass} />;
      default:
        return <Compass className={iconClass} />;
    }
  };

  return (
    <section id="expertise" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-sm font-bold text-slate-900 tracking-wider uppercase block mb-2">
            {lang === 'id' ? 'Keahlian Saya' : 'My Skills'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            {lang === 'id' ? 'Bidang Keahlian' : 'My Expertise'}
          </h2>
        </div>

        {/* 4-Card Grid matching exact visual reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE_DATA.map((item, idx) => {
            const isFirst = idx === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedExpertise(item)}
                className={`group relative flex flex-col justify-between p-7 rounded-xl bg-[#F5F7FA] transition-all duration-200 cursor-pointer hover:shadow-lg ${
                  isFirst
                    ? 'border-b-4 border-[#5E3BEE] bg-[#F5F7FA]'
                    : 'border-b-4 border-transparent hover:border-[#5E3BEE]'
                }`}
              >
                <div>
                  {/* Icon Box with rounded square and subtle shadow */}
                  <div className="w-14 h-14 rounded-xl bg-white shadow-xs flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                    {renderIcon(item.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#5E3BEE] transition-colors">
                    {lang === 'id' ? item.title : item.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {lang === 'id' ? item.description : item.descriptionEn}
                  </p>
                </div>

                {/* Micro CTA */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5E3BEE] mt-auto group-hover:translate-x-1 transition-transform">
                  <span>{lang === 'id' ? 'Lihat Metodologi' : 'View Methodology'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal for Expertise */}
      <AnimatePresence>
        {selectedExpertise && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExpertise(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg bg-white rounded-2xl p-7 shadow-2xl z-10 border border-slate-100"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                    {renderIcon(selectedExpertise.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {lang === 'id' ? selectedExpertise.title : selectedExpertise.titleEn}
                    </h3>
                    <span className="text-xs text-slate-500">Core Discipline</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedExpertise(null)}
                  type="button"
                  aria-label="Tutup dialog"
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                {lang === 'id' ? selectedExpertise.description : selectedExpertise.descriptionEn}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  {lang === 'id' ? 'Output & Pendekatan Utama' : 'Key Deliverables & Approach'}
                </h4>
                <div className="flex flex-col gap-2.5">
                  {selectedExpertise.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-slate-800">
                      <CheckCircle className="w-4 h-4 text-[#5E3BEE] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedExpertise(null)}
                  type="button"
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#5E3BEE] hover:bg-[#4d2ed4] rounded-lg transition-colors cursor-pointer"
                >
                  {lang === 'id' ? 'Tutup' : 'Close'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
