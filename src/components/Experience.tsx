import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { experienceData } from '../data/experience';
import { profileData } from '../data/profile';

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-content-titleDark flex items-center gap-4">
          <span className="text-brand-accent font-mono text-xl md:text-2xl font-medium">01.</span>
          <span><span className="text-brand-accent">Experiencia</span> Laboral</span>
          <div className="h-px bg-surface-cardLight dark:bg-surface-cardDark flex-grow ml-4 max-w-xs"></div>
        </h2>
        <p className="text-content-baseLight dark:text-content-baseDark mt-4 text-base md:text-lg max-w-2xl">
          He aquí un poco de mis últimos tres empleos donde he destacado mi paso como developer hacia cloud engineer.
        </p>
      </motion.div>

      <div className="relative space-y-12">
        {/* Línea vertical continua del Timeline */}
        <div className="absolute left-0 sm:left-2 top-2 bottom-0 w-0.5 bg-surface-cardLight dark:bg-surface-cardDark rounded-full"></div>

        {experienceData.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 pl-6 sm:pl-10"
          >
            {/* Fondo hover sutil que abarca toda la fila */}
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:block lg:group-hover:bg-surface-cardLight/50 dark:lg:group-hover:bg-surface-cardDark/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] lg:group-hover:drop-shadow-lg"></div>
            
            {/* Punto del timeline con animación */}
            <div className="absolute -left-[5px] sm:left-[3px] top-1.5 flex h-3 w-3 items-center justify-center z-20">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent opacity-40"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(37,99,235,0.8)]"></span>
            </div>

            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-content-baseLight/70 dark:text-content-baseDark/70 sm:col-span-2">
              <div className="mb-2">{exp.period}</div>
              {exp.image && (
                <div className="mt-2 md:mt-4">
                  <img 
                    src={exp.image} 
                    alt={exp.company} 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover bg-white border border-brand-slate/20 shadow-md grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              )}
            </header>
            
            <div className="z-10 sm:col-span-6">
              <h3 className="font-bold text-lg leading-snug text-brand-navy dark:text-content-titleDark group-hover:text-brand-accent transition-colors">
                {exp.role} · {exp.company}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-content-baseLight dark:text-content-baseDark">
                {exp.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
                {exp.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>
                    <div className="flex items-center rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-mono font-medium leading-5 text-brand-accent">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 flex justify-start z-10 relative"
      >
        <a 
          href={profileData.cvUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-brand-accent/10 hover:bg-brand-accent text-brand-accent hover:text-white rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-brand-accent/25 hover:-translate-y-1"
        >
          <span>Ver currículum completo</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
