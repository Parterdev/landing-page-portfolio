import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, QrCode, Utensils } from 'lucide-react';
import { experienceData } from '../data/experience';
import { profileData } from '../data/profile';

export default function Experience() {
  const ExpandableAchievements = ({ achievements, company }: { achievements: string[], company: string }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const initialCount = 1;
    const showButton = achievements.length > initialCount;
    const visibleAchievements = isExpanded ? achievements : achievements.slice(0, initialCount);

    const getBulletIcon = (index: number) => {
      let iconColor = "text-brand-accent";
      if (index === 0) {
        if (company.includes("KFC")) iconColor = "text-red-500";
        else if (company.includes("Tipti")) iconColor = "text-orange-500";
        else if (company.includes("DEUNA")) iconColor = "text-purple-500";
      } else {
        // Colores variados para los demás impactos
        const alternateColors = ["text-sky-500", "text-emerald-500", "text-pink-500", "text-amber-500"];
        iconColor = alternateColors[(index - 1) % alternateColors.length];
      }

      if (company.includes("KFC")) return <Utensils size={14} className={`${iconColor} mt-0.5 shrink-0`} />;
      if (company.includes("Tipti")) return <ShoppingCart size={14} className={`${iconColor} mt-0.5 shrink-0`} />;
      if (company.includes("DEUNA")) return <QrCode size={14} className={`${iconColor} mt-0.5 shrink-0`} />;
      return <span className={`${iconColor} font-bold mt-[-2px] shrink-0`}>•</span>;
    };

    return (
      <div className="mt-4">
        <p className="text-sm font-semibold text-brand-navy dark:text-content-titleDark mb-2">Impacto y responsabilidades destacadas:</p>
        <ul className="space-y-2 text-sm leading-relaxed text-content-baseLight dark:text-content-baseDark">
          {visibleAchievements.map((ach, achIndex) => {
            const cleanAch = ach.replace(/^- /, '');
            return (
              <li key={achIndex} className="flex gap-2 items-start">
                {getBulletIcon(achIndex)}
                <span>{cleanAch}</span>
              </li>
            );
          })}
        </ul>
        {showButton && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-xs font-semibold text-brand-accent hover:text-brand-accentHover transition-colors flex items-center gap-1"
          >
            {isExpanded ? 'Ver menos' : 'Ver todo'}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
    );
  };

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
          Pasando a mi trayectoria laboral, aquí podrás conocer cómo en mis últimos tres roles he evolucionado desde el desarrollo de software hacia entornos cloud, automatización, DevSecOps y observabilidad de plataformas.
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
                    className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover bg-white border border-brand-slate/20 shadow-md grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-300"
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
              {exp.achievements && <ExpandableAchievements achievements={exp.achievements} company={exp.company} />}
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
        className="mt-16 flex flex-wrap gap-4 justify-start z-10 relative"
      >
        <a 
          href={profileData.cvUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-brand-accent/10 hover:bg-brand-accent text-brand-accent hover:text-white rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-brand-accent/25 hover:-translate-y-1"
        >
          <span>Ver currículum completo (ES)</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>

        {profileData.cvEnglishUrl && (
          <a 
            href={profileData.cvEnglishUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-brand-accent/30 hover:border-brand-accent text-brand-navy dark:text-content-titleDark hover:text-brand-accent bg-transparent hover:bg-brand-accent/5 rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-brand-accent/10 hover:-translate-y-1"
          >
            <span>Ver currículum completo (EN)</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        )}
      </motion.div>
    </section>
  );
}
