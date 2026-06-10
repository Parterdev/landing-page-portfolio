import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { YoutubeIcon } from './icons/YoutubeIcon';

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'Github':
    case 'GitHub':
      return <GithubIcon size={20} className="text-white" />;
    case 'LinkedIn':
      return <LinkedinIcon size={20} className="text-white" />;
    case 'Youtube':
      return <YoutubeIcon size={20} className="text-white" />;
    default:
      return <ExternalLink size={20} className="text-white" />;
  }
};

const getPlatformColor = (platform: string) => {
  switch (platform) {
    case 'Github':
    case 'GitHub':
      return 'bg-gray-800';
    case 'LinkedIn':
      return 'bg-[#0a66c2]';
    case 'Youtube':
      return 'bg-[#ff0000]';
    default:
      return 'bg-brand-accent';
  }
};

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleProjects = projectsData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="proyectos" className="py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16 flex justify-between items-end"
      >
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-content-titleDark flex items-center gap-4 w-full">
            <span className="text-brand-accent font-mono text-xl md:text-2xl font-medium">04.</span>
            <span><span className="text-brand-accent">Entradas</span> Destacadas</span>
            <div className="h-px bg-surface-cardLight dark:bg-surface-cardDark flex-grow ml-4 max-w-xs hidden sm:block"></div>
          </h2>
          <p className="text-content-baseLight dark:text-content-baseDark mt-4 text-base md:text-lg max-w-2xl">
            Descubre mis últimas actividades dentro de comunidades o proyectos personales.
          </p>
        </div>
      </motion.div>

      <div className="relative min-h-[600px] md:min-h-[700px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {visibleProjects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-surface-cardLight dark:bg-surface-cardDark rounded-2xl overflow-hidden border border-brand-slate/10 dark:border-brand-slate/20 hover:border-brand-accent/50 dark:hover:border-brand-accent/50 transition-all hover:shadow-xl hover:-translate-y-1 h-full"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-brand-navy/5">
                  {/* Badge de plataforma */}
                  <div className={`absolute top-4 right-4 z-10 p-2 rounded-lg shadow-lg ${getPlatformColor(project.platform)}`}>
                    {getPlatformIcon(project.platform)}
                  </div>

                  {/* Imagen con zoom al hover */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay gradiente para asegurar contraste si es necesario */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-brand-navy dark:text-content-titleDark mb-3 group-hover:text-brand-accent transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-content-baseLight dark:text-content-baseDark text-sm leading-relaxed flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Ver más <ArrowRight size={16} />
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles de Slider / Paginación */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center items-center gap-6 z-10 relative">
          <button
            onClick={prevPage}
            className="p-3 rounded-full border border-brand-slate/20 dark:border-surface-cardDark text-content-baseLight dark:text-content-baseDark hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all"
            aria-label="Página anterior"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${currentPage === idx
                    ? 'bg-brand-accent w-6'
                    : 'bg-brand-slate/30 dark:bg-surface-cardDark hover:bg-brand-slate/50'
                  }`}
                aria-label={`Ir a página ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="p-3 rounded-full border border-brand-slate/20 dark:border-surface-cardDark text-content-baseLight dark:text-content-baseDark hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all"
            aria-label="Página siguiente"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
}
