import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { techSkills, softSkills } from '../data/skills';

// Renderizador dinámico de iconos
const IconWrapper = ({ iconName, className }: { iconName: string, className?: string }) => {
  const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Code;
  return <IconComponent className={className} size={24} />;
};

export default function Skills() {
  return (
    <section className="py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-content-titleDark mb-4">
          Core <span className="text-brand-accent">Skills</span>
        </h2>
        <p className="text-content-baseLight dark:text-content-baseDark max-w-2xl mx-auto">
          Un equilibrio entre sólida base técnica, principios arquitectónicos y habilidades interpersonales para entregar valor real.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Tech Skills Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface-cardLight dark:bg-surface-cardDark border border-brand-slate/10 dark:border-brand-slate/20 rounded-3xl p-8 sm:p-10 shadow-xl hover:border-brand-accent/30 transition-colors"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
                <LucideIcons.Terminal size={28} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy dark:text-content-titleDark">
                Tech Skills
              </h3>
            </div>
            
            <div className="space-y-6">
              {techSkills.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className={`mt-1 transition-all duration-300 opacity-100 grayscale-0 md:opacity-50 md:grayscale md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-110 ${item.color}`}>
                    <IconWrapper iconName={item.icon} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy dark:text-content-titleDark mb-1">
                      {item.category}
                    </h4>
                    <p className="text-sm text-content-baseLight dark:text-content-baseDark leading-relaxed">
                      {item.skills}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-surface-cardLight dark:bg-surface-cardDark border border-brand-slate/10 dark:border-brand-slate/20 rounded-3xl p-8 sm:p-10 shadow-xl hover:border-brand-accent/30 transition-colors"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
                <LucideIcons.BrainCircuit size={28} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy dark:text-content-titleDark">
                Soft Skills
              </h3>
            </div>
            
            <div className="space-y-6">
              {softSkills.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className={`mt-1 transition-all duration-300 opacity-100 grayscale-0 md:opacity-50 md:grayscale md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-110 ${item.color}`}>
                    <IconWrapper iconName={item.icon} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy dark:text-content-titleDark mb-1">
                      {item.skill}
                    </h4>
                    <p className="text-sm text-content-baseLight dark:text-content-baseDark leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
