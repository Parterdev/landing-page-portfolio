import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar({ isDark, toggleDark }: { isDark: boolean, toggleDark: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['inicio', 'experiencia', 'proyectos', 'recomendaciones'];
      let current = 'inicio';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          // Si la sección ha subido más allá del tercio superior de la ventana
          if (element.getBoundingClientRect().top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Llamar una vez para setear el estado inicial
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Experiencia', href: '#experiencia', id: 'experiencia' },
    { name: 'Proyectos', href: '#proyectos', id: 'proyectos' },
    { name: 'Recomendaciones', href: '#recomendaciones', id: 'recomendaciones' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'bg-surface-light dark:bg-surface-dark py-4 shadow-sm' : isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={isDark ? "/favicon_brand_home_white.png" : "/favicon_brand_home.png"}
            alt="Paúl Terán Logo"
            className="w-16 h-16 object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors relative ${activeSection === link.id
                  ? 'text-brand-accent'
                  : 'text-brand-navy dark:text-content-titleDark hover:text-brand-accent'
                }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-accent rounded-full animate-pulse"></span>
              )}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button onClick={toggleDark} className="p-2 rounded-full hover:bg-surface-cardLight dark:hover:bg-surface-cardDark transition-colors" aria-label="Toggle Dark Mode">
              {isDark ? <Sun size={20} className="text-brand-accent" /> : <Moon size={20} className="text-brand-navy dark:text-content-titleDark" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex items-center gap-2 p-1.5 px-3 bg-surface-cardLight dark:bg-surface-cardDark border border-brand-slate/20 rounded-full text-brand-navy dark:text-content-titleDark shadow-sm">
            <span className="text-sm font-medium">Menú</span>
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface-light dark:bg-surface-dark border-b border-surface-cardLight dark:border-surface-cardDark py-4 px-6 flex flex-col gap-4 shadow-xl z-50">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium py-2 transition-colors ${
                  index !== navLinks.length - 1 ? 'border-b border-surface-cardLight dark:border-surface-cardDark' : ''
                } ${activeSection === link.id
                  ? 'text-brand-accent pl-2 border-l-2 border-l-brand-accent'
                  : 'hover:text-brand-accent'
                }`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Mobile Theme Toggle con texto guía */}
          <div className="border-t border-surface-cardLight dark:border-surface-cardDark pt-4 mt-2">
            <button onClick={toggleDark} className="flex items-center justify-between w-full p-3 rounded-xl bg-surface-cardLight dark:bg-surface-cardDark text-brand-navy dark:text-content-titleDark border border-brand-slate/10 hover:border-brand-accent transition-colors">
              <span className="font-medium text-sm text-content-baseLight dark:text-content-baseDark">Aspecto visual</span>
              <div className="flex items-center gap-2 bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent px-3 py-1.5 rounded-full transition-colors">
                <span className="text-sm font-bold">{isDark ? 'Modo Claro' : 'Modo Oscuro'}</span>
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </div>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
