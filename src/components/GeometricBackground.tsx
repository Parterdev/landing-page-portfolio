import React, { useEffect, useRef } from 'react';

export default function GeometricBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      angle: number;
      spinSpeed: number;
      color: string;
      offsetX: number;
      offsetY: number;

      constructor(x: number, y: number) {
        this.baseX = x;
        this.baseY = y;
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 2; // Longitud de la línea
        this.angle = Math.random() * Math.PI * 2;
        this.spinSpeed = (Math.random() - 0.5) * 0.02;
        this.offsetX = Math.random() * 1000;
        this.offsetY = Math.random() * 1000;
        
        // Colores tecnológicos inspirados en la marca (Azules, Celestes, Grises, y un toque cálido suave)
        const colors = [
          '#0870b8', // Brand Accent
          '#38bdf8', // Light Blue
          '#818cf8', // Indigo
          '#f43f5e', // Rose (sutil como en Antigravity)
          '#fbbf24', // Amber
          '#94a3b8'  // Slate
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(time: number) {
        // Movimiento orgánico tipo ola
        this.x = this.baseX + Math.sin(time * 0.001 + this.offsetX) * 15;
        this.y = this.baseY + Math.cos(time * 0.001 + this.offsetY) * 15;
        this.angle += this.spinSpeed;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        ctx.fillStyle = this.color;
        // Transparencia sutil para que no abrume el contenido
        ctx.globalAlpha = 0.4;
        
        // Dibujar un pequeño guión o rectángulo (estilo confeti geométrico)
        ctx.beginPath();
        ctx.roundRect(-this.size, -1.5, this.size * 2, 3, 1.5);
        ctx.fill();
        ctx.restore();
      }
    }

    const initParticles = () => {
      particles = [];
      const spacing = 45; // Distancia entre partículas (cuadrícula)
      
      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          // Añadir un poco de aleatoriedad a la posición base para que no sea una cuadrícula perfecta
          const randomX = x + (Math.random() - 0.5) * 20;
          const randomY = y + (Math.random() - 0.5) * 20;
          particles.push(new Particle(randomX, randomY));
        }
      }
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((particle) => {
        particle.update(time);
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Observar cambios de tamaño
    window.addEventListener('resize', resize);
    resize();
    animate(0);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60 dark:opacity-40 transition-opacity duration-500 ${className}`}
      aria-hidden="true"
    />
  );
}
