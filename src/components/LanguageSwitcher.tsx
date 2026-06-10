import React, { useState } from 'react';

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState(() => {
    const match = document.cookie.match(/googtrans=\/es\/([a-z]{2})/);
    return match ? match[1] : 'es';
  });

  const changeLanguage = (lang: string) => {
    setCurrentLang(lang);
    
    // El método más confiable para Google Translate en React es setear la cookie y recargar
    if (lang === 'es') {
      // Para volver al original, borramos las cookies de traducción
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
    } else {
      // Para traducir, seteamos la cookie de origen/destino
      document.cookie = `googtrans=/es/${lang}; path=/`;
      document.cookie = `googtrans=/es/${lang}; domain=${window.location.hostname}; path=/`;
    }
    
    // Recarga rápida para aplicar la traducción
    window.location.reload();
  };

  return (
    <div className="notranslate flex items-center gap-2 text-sm font-medium text-brand-navy dark:text-content-titleDark bg-surface-cardLight dark:bg-surface-cardDark px-3 py-1.5 rounded-full border border-brand-slate/20 dark:border-surface-cardDark shadow-sm">
      <button 
        onClick={() => changeLanguage('es')}
        className={`flex items-center gap-1.5 transition-colors ${currentLang === 'es' ? 'text-brand-accent' : 'hover:text-brand-accent'}`}
        aria-label="Cambiar a Español"
      >
        <span className="text-base leading-none">🇪🇨</span> 
        <span className={currentLang === 'es' ? 'font-bold' : ''}>ES</span>
      </button>
      <span className="text-brand-slate/30 dark:text-brand-slate/50 pb-0.5">|</span>
      <button 
        onClick={() => changeLanguage('en')}
        className={`flex items-center gap-1.5 transition-colors ${currentLang === 'en' ? 'text-brand-accent' : 'hover:text-brand-accent'}`}
        aria-label="Switch to English"
      >
        <span className={currentLang === 'en' ? 'font-bold' : ''}>EN</span> 
        <span className="text-base leading-none">🇺🇸</span>
      </button>
    </div>
  );
}
