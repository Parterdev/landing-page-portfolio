import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp, User, X } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { profileData } from '../data/profile';
import LanguageSwitcher from './LanguageSwitcher';
import GeometricBackground from './GeometricBackground';

export default function Footer({ isDark }: { isDark: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Bloquear el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isAboutOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isAboutOpen]);

  return (
    <footer ref={footerRef} className="border-t border-surface-cardLight dark:border-surface-cardDark bg-surface-light dark:bg-surface-dark mt-20 relative overflow-hidden">
      <GeometricBackground className="hidden md:block absolute" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">

        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#inicio" className="flex items-center gap-2 group mb-2">
            <img
              src={isDark ? "/favicon_brand_home_white.png" : "/favicon_brand_home.png"}
              alt="Paúl Terán Logo"
              className="w-24 h-24 object-contain transition-transform group-hover:scale-105"
            />
          </a>
          <p className="text-sm text-content-baseLight dark:text-content-baseDark mt-2 text-center md:text-left max-w-xs">
            {profileData.title} enfocado en construir y asegurar infraestructuras escalables.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <LanguageSwitcher />
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsAboutOpen(true)}
              className="text-content-baseLight dark:text-content-baseDark hover:text-brand-accent dark:hover:text-brand-accent transition-colors"
              aria-label="Sobre mí"
            >
              <User size={22} />
            </button>
            <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="text-content-baseLight dark:text-content-baseDark hover:text-brand-accent dark:hover:text-brand-accent transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-content-baseLight dark:text-content-baseDark hover:text-brand-accent dark:hover:text-brand-accent transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href={profileData.social.instagram} target="_blank" rel="noopener noreferrer" className="text-content-baseLight dark:text-content-baseDark hover:text-brand-accent dark:hover:text-brand-accent transition-colors">
              <InstagramIcon size={20} />
            </a>
          </div>
          <p className="text-sm font-mono text-content-baseLight/80 dark:text-content-baseDark/80 flex items-center justify-center gap-1">
            Diseñado y construido con <span className="animate-pulse inline-block transform scale-110">❤️</span> por {profileData.name}
          </p>
        </div>

      </div>

      {/* Scroll to Top Button */}
      <div
        className={`fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[40] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
          }`}
      >
        <button
          onClick={scrollToTop}
          className="p-3 md:p-4 bg-brand-accent hover:bg-brand-accent/90 text-white rounded-full shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 hover:-translate-y-1 transition-all"
          aria-label="Volver arriba"
        >
          <ArrowUp size={24} />
        </button>
      </div>

      {/* About Me Modal */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isAboutOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop oscuro */}
        <div
          className="absolute inset-0 bg-brand-navy/60 dark:bg-[#020617]/80 backdrop-blur-sm"
          onClick={() => setIsAboutOpen(false)}
        ></div>

        {/* Tarjeta Glassmorphism */}
        <div className={`relative bg-surface-light dark:bg-surface-dark border border-brand-slate/10 dark:border-brand-slate/20 rounded-3xl p-8 max-w-lg w-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] dark:shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)] transition-all duration-500 transform ${isAboutOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}`}>
          <button
            onClick={() => setIsAboutOpen(false)}
            className="absolute top-4 right-4 p-2 text-content-baseLight dark:text-content-baseDark hover:text-brand-accent dark:hover:text-brand-accent transition-colors rounded-full hover:bg-surface-cardLight dark:hover:bg-surface-cardDark"
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>

          <h3 className="text-2xl md:text-3xl font-bold text-brand-navy dark:text-content-titleDark mb-6 flex items-center gap-3">
            ¿Deseas conocerme aún más?
          </h3>

          <div className="space-y-5 text-content-baseLight dark:text-content-baseDark text-sm md:text-base leading-relaxed">
            <p>
              Pues te cuento que soy una persona que colabora activamente en comunidades como <strong className="text-brand-accent font-semibold">Tribu Tech Latam</strong> o <strong className="text-brand-accent font-semibold">Google Developer Groups</strong>. Estudio de manera autónoma con plataformas como Platzi, Udemy o Coursera.
            </p>

            <p className="font-medium text-brand-navy dark:text-content-titleDark">
              Cuando me desconecto de los servidores, me dedico a:
            </p>

            <ul className="space-y-4 mt-2">
              <li className="flex items-center gap-4 bg-surface-cardLight dark:bg-surface-cardDark p-3 rounded-xl border border-brand-slate/5 dark:border-brand-slate/10">
                <span className="text-2xl drop-shadow-sm">🍳</span>
                <span className="font-medium">Ejecutar "algoritmos culinarios"</span>
              </li>
              <li className="flex items-center gap-4 bg-surface-cardLight dark:bg-surface-cardDark p-3 rounded-xl border border-brand-slate/5 dark:border-brand-slate/10">
                <span className="text-2xl drop-shadow-sm">🏃‍♂️</span>
                <span className="font-medium">Sumar kilómetros corriendo</span>
              </li>
              <li className="flex items-center gap-4 bg-surface-cardLight dark:bg-surface-cardDark p-3 rounded-xl border border-brand-slate/5 dark:border-brand-slate/10">
                <span className="text-2xl drop-shadow-sm">📚</span>
                <span className="font-medium">Inmerso en un buen libro o descubriendo nuevos lugares y pintando 🎨</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
