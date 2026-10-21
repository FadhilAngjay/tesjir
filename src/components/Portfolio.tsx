import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, filterProjects } from '../utils/portfolioLogic';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  lang: 'id' | 'en';
}

export const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: lang === 'id' ? 'Semua Proyek' : 'All Projects' },
    { id: 'uiux', label: lang === 'id' ? 'UI & UX Design' : 'UI & UX Design' },
    { id: 'web', label: lang === 'id' ? 'Webflow & Dev' : 'Webflow & Dev' },
    { id: 'branding', label: lang === 'id' ? 'Branding & Logo' : 'Branding & Logo' },
    { id: 'mobile', label: lang === 'id' ? 'Mobile Apps' : 'Mobile Apps' },
  ];

  const filteredProjects = filterProjects(PROJECTS_DATA, selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Top Header matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-bold text-slate-900 tracking-wider uppercase block mb-2">
              {lang === 'id' ? 'Proyek Terbaru' : 'Recent Projects'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              {lang === 'id' ? 'Portofolio Saya' : 'My Portfolio'}
            </h2>
          </div>

          {/* Dribbble CTA Button matching Reference styling */}
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-auto px-5 py-3 text-sm font-semibold text-white bg-[#EA4C89] hover:bg-[#d83c78] rounded-xl shadow-xs transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#EA4C89]"
          >
            {/* Dribbble Basketball Icon */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm8.905 13.682c-.855-.178-2.583-.49-4.887-.49-.404 0-.82.012-1.246.035a26.688 26.688 0 0 1-1.07-3.02 22.38 22.38 0 0 0 5.867-2.732c.86 1.83 1.336 3.86 1.336 6.207zm-7.643-4.04c-.39-.99-.824-1.956-1.3-2.887a10.024 10.024 0 0 1 6.136 2.052 20.372 20.372 0 0 1-4.836 2.335v-.002a24.288 24.288 0 0 1 0-1.5zm-3.21-3.693c.484.945.926 1.927 1.32 2.932-2.836.812-5.748 1.258-8.106 1.378A10.013 10.013 0 0 1 10.052 5.95zm-6.236 4.98c2.47-.123 5.518-.592 8.473-1.45.39.972.748 1.98 1.066 3.013-3.793 1.2-7.228 3.52-9.61 6.64a9.99 9.99 0 0 1 .07-8.203zm4.013 9.775c2.14-2.868 5.27-5.02 8.784-6.17.65 1.767 1.155 3.655 1.493 5.626A10.033 10.033 0 0 1 7.828 20.704zm12.336-3.042c-.378-1.78-.857-3.498-1.45-5.11 2.09.034 3.698.31 4.542.48a9.993 9.993 0 0 1-3.092 4.63z" />
            </svg>
            <span>{lang === 'id' ? 'Kunjungi Dribbble' : 'Visit my Dribbble'}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Interactive Filter Tabs (Segmented controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5E3BEE] ${
                  isActive
                    ? 'bg-[#5E3BEE] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col rounded-2xl bg-white border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container with Zoom effect */}
                <div
                  onClick={() => setActiveModalProject(project)}
                  className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement?.querySelector('.card-fallback');
                      if (fallback) (fallback as HTMLElement).style.display = 'flex';
                    }}
                  />

                  {/* Fallback frame */}
                  <div className="card-fallback hidden w-full h-full bg-gradient-to-br from-slate-800 to-indigo-900 text-white flex-col items-center justify-center p-4 text-center">
                    <span className="font-bold text-lg">{project.title}</span>
                    <span className="text-xs text-indigo-200 mt-1">
                      {lang === 'id' ? project.categoryLabel.id : project.categoryLabel.en}
                    </span>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-800 shadow-xs">
                    {lang === 'id' ? project.categoryLabel.id : project.categoryLabel.en}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Clean unboxed metadata per Zero-Pill rule */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setActiveModalProject(project)}
                    className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#5E3BEE] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-6">
                    {lang === 'id' ? project.description.id : project.description.en}
                  </p>

                  {/* Card Bottom: View in Dribbble / Modal action */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      type="button"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-[#5E3BEE] transition-colors cursor-pointer"
                    >
                      <span>{project.linkText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      type="button"
                      aria-label={`Lihat detail ${project.title}`}
                      className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      {lang === 'id' ? 'Detail' : 'Details'}
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        lang={lang}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
