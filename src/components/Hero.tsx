import React, { useState, useEffect } from 'react';
import { ArrowRight, Monitor, Smartphone, GitMerge } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { profileData } from '../data/profile';
import GeometricBackground from './GeometricBackground';

export default function Hero() {
  const specialtiesData = [
    { title: "Software Engineer", colorClass: "text-orange-500", bgClass: "bg-orange-500/10", Icon: Monitor },
    { title: "Mobile Developer", colorClass: "text-yellow-500", bgClass: "bg-yellow-500/10", Icon: Smartphone },
    { title: "DevOps Engineer", colorClass: "text-green-500", bgClass: "bg-green-500/10", Icon: GitMerge }
  ];
  const [currentSpecialtyIndex, setCurrentSpecialtyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialtyIndex((prev) => (prev + 1) % specialtiesData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="min-h-[85vh] w-full relative overflow-hidden flex flex-col justify-center">
      <GeometricBackground className="hidden md:block absolute" />
      <div className="pt-24 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 w-full">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 space-y-6 z-10"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-sm font-mono font-medium mb-2">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse mr-2"></span>
            Hola mundo, soy
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-brand-navy dark:text-content-titleDark leading-tight">
            {profileData.name}.
          </h1>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-slate dark:text-content-baseDark/80 leading-tight">
            {profileData.title}.
          </h2>

          <p className="text-lg md:text-xl max-w-2xl leading-relaxed mt-6 text-content-baseLight dark:text-content-baseDark">
            Profesional de tecnología con más de 6 años de experiencia diseñando e implementando soluciones innovadoras. Mi trayectoria combina enfoques holísticos en <span className="text-brand-accent font-medium">Desarrollo Full Stack</span>, <span className="text-brand-accent font-medium">DevSecOps</span> y actualmente <span className="text-brand-accent font-medium">Cloud, AI y Datos (MLOps)</span>.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-8">
            <a
              href="#contacto"
              className="flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-brand-accent/30 hover:shadow-brand-accent/40 hover:-translate-y-1"
            >
              Trabajemos juntos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#proyectos"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl font-medium border-2 border-brand-accent/30 text-brand-navy dark:text-content-titleDark hover:border-brand-accent hover:text-brand-accent transition-all hover:bg-brand-accent/5 hover:-translate-y-1 shadow-sm hover:shadow-brand-accent/20"
            >
              Ver últimos proyectos
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative w-72 h-72 md:w-96 md:h-96 shrink-0 z-10"
        >
          {/* Decorative background glow */}
          <div className="absolute inset-0 bg-brand-accent/20 dark:bg-brand-accent/30 rounded-full blur-[80px] animate-pulse"></div>

          <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-surface-cardLight dark:border-surface-cardDark shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-surface-cardLight dark:bg-surface-cardDark">
            <img
              src="/profile1.png"
              alt="Paúl Terán"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-surface-light dark:bg-surface-cardDark border border-surface-cardLight dark:border-surface-cardDark p-4 rounded-xl shadow-xl flex items-center gap-3"
          >
            <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentSpecialtyIndex}
                  initial={{ scale: 0, opacity: 0, rotate: -90 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 rounded-full flex items-center justify-center ${specialtiesData[currentSpecialtyIndex].bgClass} ${specialtiesData[currentSpecialtyIndex].colorClass}`}
                >
                  {React.createElement(specialtiesData[currentSpecialtyIndex].Icon, { size: 20 })}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="overflow-hidden min-w-[140px]">
              <p className="text-xs font-mono text-content-baseLight dark:text-content-baseDark mb-0.5">Especialidades</p>
              <div className="h-5 relative">
                <AnimatePresence mode="popLayout">
                  <motion.p
                    key={currentSpecialtyIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="font-bold text-brand-navy dark:text-content-titleDark text-sm absolute inset-0 whitespace-nowrap"
                  >
                    {specialtiesData[currentSpecialtyIndex].title}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
      </div>
    </section>
  );
}
