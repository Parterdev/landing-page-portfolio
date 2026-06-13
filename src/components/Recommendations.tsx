import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { recommendationsData } from '../data/recommendations';

export default function Recommendations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const nextSlide = () => {
    setIsExpanded(false);
    setCurrentIndex((prev) => (prev + 1) % recommendationsData.length);
  };

  const prevSlide = () => {
    setIsExpanded(false);
    setCurrentIndex((prev) => (prev - 1 + recommendationsData.length) % recommendationsData.length);
  };

  // Auto avance del carrusel cada 8 segundos (se detiene si se expande el texto)
  useEffect(() => {
    if (isExpanded) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [isExpanded, currentIndex]);

  return (
    <section id="recomendaciones" className="py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-content-titleDark flex items-center gap-4">
          <span className="text-brand-accent font-mono text-xl md:text-2xl font-medium">05.</span>
          Recomendaciones
          <div className="h-px bg-surface-cardLight dark:bg-surface-cardDark flex-grow ml-4 max-w-xs"></div>
        </h2>
        <p className="text-content-baseLight dark:text-content-baseDark mt-4 text-base md:text-lg max-w-2xl">
          Testimonios, referencias y comentarios profesionales que respaldan mi desempeño técnico, compromiso y evolución dentro de equipos multidisciplinarios.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-12">
        <div className="relative flex items-center justify-center">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full flex flex-col justify-center items-center text-center py-6"
            >
              <div className="mb-4 relative w-full">
                <div className="absolute -top-6 -left-6 text-brand-accent/20">
                  <Quote size={80} className="transform rotate-180" />
                </div>
                <div className="relative z-10 p-8 sm:p-12 rounded-3xl bg-surface-cardLight dark:bg-surface-cardDark border border-brand-slate/10 dark:border-brand-slate/20 shadow-xl w-full transition-all duration-500">
                  <div className="text-lg md:text-xl text-content-baseLight dark:text-content-baseDark leading-relaxed italic mb-4">
                    "{recommendationsData[currentIndex].shortText}"

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.span
                          initial={{ opacity: 0, height: 0, display: "block" }}
                          animate={{ opacity: 1, height: "auto", display: "block" }}
                          exit={{ opacity: 0, height: 0, display: "block" }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 overflow-hidden"
                        >
                          {recommendationsData[currentIndex].expandedText}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  {!isExpanded ? (
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="text-brand-accent hover:text-brand-accentHover font-medium mb-8 underline underline-offset-4 decoration-brand-accent/30 hover:decoration-brand-accent transition-colors text-sm"
                    >
                      Ver más...
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-brand-accent hover:text-brand-accentHover font-medium mb-8 underline underline-offset-4 decoration-brand-accent/30 hover:decoration-brand-accent transition-colors text-sm"
                    >
                      ...Ver menos
                    </button>
                  )}

                  <div className="flex flex-col items-center justify-center gap-4">
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1], y: [-2, 2, -2] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center border-2 border-brand-accent/30 text-brand-accent"
                    >
                      <User size={32} />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-brand-navy dark:text-content-titleDark text-lg">
                        {recommendationsData[currentIndex].name}
                      </h4>
                      <p className="text-sm font-mono text-brand-accent max-w-xs md:max-w-md mx-auto mt-1">
                        {recommendationsData[currentIndex].relationship}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Controles del Carrusel */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 sm:-ml-8 p-3 rounded-full bg-surface-cardLight dark:bg-surface-cardDark border border-brand-slate/20 dark:border-brand-slate/20 text-content-baseLight dark:text-content-baseDark hover:bg-brand-accent hover:text-white transition-all shadow-lg z-20"
          aria-label="Recomendación anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 sm:-mr-8 p-3 rounded-full bg-surface-cardLight dark:bg-surface-cardDark border border-brand-slate/20 dark:border-brand-slate/20 text-content-baseLight dark:text-content-baseDark hover:bg-brand-accent hover:text-white transition-all shadow-lg z-20"
          aria-label="Recomendación siguiente"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-4 z-20 relative">
          {recommendationsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsExpanded(false);
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx
                ? 'bg-brand-accent w-8'
                : 'bg-brand-slate/30 dark:bg-surface-cardDark hover:bg-brand-slate/50 w-2'
                }`}
              aria-label={`Ir a recomendación ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
