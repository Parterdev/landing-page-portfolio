import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Construir un cuerpo de correo más enriquecido y formateado
    const subject = encodeURIComponent(`Nuevo contacto desde tu portafolio web de: ${formData.nombre}`);
    
    const bodyText = `Hola Paúl,

Me pongo en contacto contigo a través de tu sitio web personal.

---
DATOS DE CONTACTO:
Nombre: ${formData.nombre} ${formData.apellido}

MENSAJE:
${formData.mensaje}
---

Saludos cordiales,
${formData.nombre}
`;
    
    const body = encodeURIComponent(bodyText);
    
    // Abrir cliente de correo
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Reset después de 5 seg
  };

  return (
    <section id="contacto" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-12 bg-surface-cardLight dark:bg-surface-cardDark p-8 sm:p-12 rounded-3xl border border-brand-slate/10 dark:border-brand-slate/20 shadow-2xl relative overflow-hidden">
        
        {/* Glow decorativo de fondo */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-content-titleDark mb-4">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-content-baseLight dark:text-content-baseDark max-w-2xl mx-auto">
              Ya sea para hablar de tecnología, discutir un proyecto o explorar oportunidades de colaboración, me encantaría escucharte. ¡Escríbeme!
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="nombre" className="text-sm font-semibold text-brand-navy dark:text-content-titleDark">
                  Nombre <span className="text-brand-accent">*</span>
                </label>
                <input 
                  type="text" 
                  id="nombre"
                  name="nombre" 
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-brand-slate/20 dark:border-brand-slate/30 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-brand-navy dark:text-content-baseDark transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="apellido" className="text-sm font-semibold text-content-baseLight dark:text-content-baseDark/70">
                  Apellido <span className="text-xs font-normal opacity-70">(opcional)</span>
                </label>
                <input 
                  type="text" 
                  id="apellido"
                  name="apellido" 
                  value={formData.apellido}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-brand-slate/20 dark:border-brand-slate/30 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-brand-navy dark:text-content-baseDark transition-all"
                  placeholder="Tu apellido"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="mensaje" className="text-sm font-semibold text-brand-navy dark:text-content-titleDark">
                Mensaje <span className="text-brand-accent">*</span>
              </label>
              <textarea 
                id="mensaje"
                name="mensaje" 
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                required
                className="px-4 py-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-brand-slate/20 dark:border-brand-slate/30 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-brand-navy dark:text-content-baseDark transition-all resize-none"
                placeholder="¡Hola Paúl! Quería escribirte porque..."
              ></textarea>
            </div>

            <div className="flex justify-center mt-4">
              <button 
                type="submit" 
                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all shadow-lg ${
                  isSubmitted 
                    ? 'bg-green-600 text-white shadow-green-600/30' 
                    : 'bg-brand-accent hover:bg-brand-accentHover text-white shadow-brand-accent/30 hover:shadow-brand-accent/40 hover:-translate-y-1'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 size={20} />
                    ¡Abriendo correo!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
