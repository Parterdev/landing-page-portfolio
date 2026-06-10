/** @type {import('tailwindcss').Config} */
export default {
  // Habilita el cambio manual entre modo claro y oscuro usando una clase en el <html>
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores de la Marca (Logotipo, botones, acentos)
        brand: {
          navy: '#0F172A',      // Azul Marino Profundo (Logo principal, H1 en Light)
          slate: '#334155',     // Azul Pizarra (Texto secundario del logo, íconos)
          accent: '#2563EB',    // Azul Rey (Botones principales, links, hover states)
          accentHover: '#1D4ED8',// Azul Rey más oscuro para interacciones
        },
        // Colores de Superficie (Fondos generales, tarjetas, navbar)
        surface: {
          light: '#F8FAFC',     // Blanco Humo (Fondo general Light)
          dark: '#0B1120',      // Azul Noche Profundo (Fondo general Dark - más oscuro que el Navy)
          cardLight: '#F1F5F9', // Gris Nube (Fondo de tarjetas/proyectos en Light)
          cardDark: '#1E293B',  // Azul Pizarra Oscuro (Fondo de tarjetas/proyectos en Dark)
        },
        // Colores de Contenido (Textos, descripciones, subtítulos)
        content: {
          baseLight: '#475569', // Gris Carbón (Párrafos en Light)
          baseDark: '#94A3B8',  // Gris Claro (Párrafos en Dark)
          titleDark: '#F8FAFC', // Blanco Humo (Títulos H1/H2 en Dark)
        }
      },
      fontFamily: {
        // Inter para la máxima legibilidad en párrafos y descripciones
        sans: ['"Inter"', 'sans-serif'],
        // Plus Jakarta Sans para el logotipo y títulos (aporta elegancia y estructura)
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        // JetBrains Mono para destacar tecnologías (React, Azure, Docker)
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
