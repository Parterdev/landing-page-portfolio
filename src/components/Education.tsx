import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Languages } from 'lucide-react';
import { educationData, languagesData } from '../data/education';

export default function Education() {
  return (
    <section id="educacion" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Educación (Toma 2 columnas en pantallas grandes) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-content-titleDark flex items-center gap-4">
                <span className="text-brand-accent font-mono text-xl md:text-2xl font-medium">02.</span>
                <span>Formación <span className="text-brand-accent">Académica</span></span>
              </h2>
              <p className="text-content-baseLight dark:text-content-baseDark mt-4 text-base md:text-lg max-w-2xl">
                Actualmente curso el último año de mi ingeniería (a distancia) para después integrarme a un programa de cuarto nivel de especialización en datos (esto a la par de Formación autónoma e Idiomas).
              </p>
            </div>

            <div className="bg-surface-cardLight dark:bg-surface-cardDark border border-brand-slate/10 dark:border-brand-slate/20 rounded-3xl p-8 shadow-xl">
              <div className="space-y-8">
                {educationData.map((item, idx) => (
                  <div key={item.id} className={`group flex flex-col sm:flex-row gap-6 ${idx !== educationData.length - 1 ? 'border-b border-brand-slate/10 dark:border-brand-slate/20 pb-8' : ''}`}>
                    <div className="shrink-0 flex items-start">
                      <div className="w-16 h-16 rounded-xl bg-surface-light dark:bg-surface-dark border border-brand-slate/10 dark:border-brand-slate/30 overflow-hidden shadow-sm flex items-center justify-center p-2 group-hover:border-brand-accent/50 transition-colors">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.institution}
                            className="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                          />
                        ) : (
                          <GraduationCap className="text-brand-accent/50" />
                        )}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-brand-navy dark:text-content-titleDark mb-1 group-hover:text-brand-accent transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-brand-accent font-medium mb-2">
                        {item.institution}
                      </p>
                      <div className="inline-block px-3 py-1 bg-surface-light dark:bg-surface-dark border border-brand-slate/10 dark:border-brand-slate/30 rounded-full text-xs font-mono text-content-baseLight dark:text-content-baseDark/80">
                        Estado: <span className="text-brand-navy dark:text-content-titleDark font-semibold">{item.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Idiomas (Toma 1 columna) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-content-titleDark flex items-center gap-4">
                <span className="text-brand-accent font-mono text-xl md:text-2xl font-medium">03.</span>
                Idiomas
              </h2>
            </div>

            <div className="bg-brand-accent/5 dark:bg-brand-accent/10 border border-brand-accent/20 rounded-3xl p-8 shadow-xl h-auto">
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-brand-accent/20 rounded-full text-brand-accent">
                  <Languages size={32} />
                </div>
              </div>

              <div className="space-y-6">
                {languagesData.map((lang) => (
                  <div key={lang.id} className="bg-surface-cardLight dark:bg-surface-cardDark p-5 rounded-2xl border border-brand-slate/10 dark:border-brand-slate/20 shadow-sm flex items-center gap-4 hover:-translate-y-1 transition-transform">
                    <span className="text-3xl">{lang.flag}</span>
                    <div>
                      <h4 className="font-bold text-brand-navy dark:text-content-titleDark text-lg">
                        {lang.language}
                      </h4>
                      <p className="text-brand-accent text-sm font-medium">
                        {lang.level}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
