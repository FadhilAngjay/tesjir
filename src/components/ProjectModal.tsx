import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Calendar, User, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../utils/portfolioLogic';

interface ProjectModalProps {
  project: Project | null;
  lang: 'id' | 'en';
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, lang, onClose }) => {
  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl z-10 overflow-hidden flex flex-col border border-slate-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
            <div>
              <span className="text-xs font-semibold text-[#5E3BEE] uppercase tracking-wider">
                {lang === 'id' ? project.categoryLabel.id : project.categoryLabel.en}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              type="button"
              aria-label="Tutup jendela studi kasus"
              className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            {/* Visual Hero Preview */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.modal-fallback');
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              />
              <div className="modal-fallback hidden w-full h-full bg-gradient-to-tr from-slate-900 via-slate-800 to-indigo-950 text-white flex-col items-center justify-center p-6 text-center">
                <span className="text-2xl font-bold">{project.title}</span>
                <span className="text-sm text-slate-300 mt-1">Interactive Project Preview</span>
              </div>
            </div>

            {/* Metadata Info Bar (Unboxed text with separators per Zero-Pill rule) */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 py-2 border-y border-slate-100">
              <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>{project.client}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{project.year}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="text-slate-700 font-medium">
                <span>{project.tags.join(', ')}</span>
              </div>
            </div>

            {/* Detailed Description */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                {lang === 'id' ? 'Ringkasan & Solusi Desain' : 'Overview & Design Solution'}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {lang === 'id' ? project.longDescription.id : project.longDescription.en}
              </p>
            </div>

            {/* Impact / Metrics Strip */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                {lang === 'id' ? 'Dampak & Hasil Terukur' : 'Measurable Impact'}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="block text-2xl font-bold text-[#5E3BEE] font-mono tabular-nums">
                      {metric.value}
                    </span>
                    <span className="text-xs text-slate-600 font-medium block mt-0.5">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between gap-4">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#5E3BEE] hover:text-[#4d2ed4] hover:underline"
            >
              <span>{lang === 'id' ? 'Buka di Dribbble / Portfolio' : 'Open in Dribbble / Portfolio'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              type="button"
              className="px-5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg shadow-2xs transition-colors cursor-pointer"
            >
              {lang === 'id' ? 'Tutup' : 'Close'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
