import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  shape: 'circle' | 'triangle' | 'square' | 'diamond' | 'star';
  rotation: number;
  rotationSpeed: number;
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef({ x: -1000, y: -1000 }); // off-screen initially

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = ['#00C0A3', '#3ABEF9', '#1B2A41', '#FF6B6B', '#4ECDC4'];
    const shapes: Particle['shape'][] = ['circle', 'triangle', 'square', 'diamond', 'star'];

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000);

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          size: Math.random() * 4 + 4, // slightly bigger
          opacity: Math.random() * 0.7 + 0.5, // more visible
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
        });
      }
    };

    initParticles();

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if ('touches' in e && e.touches.length > 0) {
        pointerRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if ('clientX' in e) {
        pointerRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove);

    const drawParticle = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      switch (p.shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.lineTo(-p.size * 0.866, p.size * 0.5);
          ctx.lineTo(p.size * 0.866, p.size * 0.5);
          ctx.closePath();
          ctx.fill();
          break;
        case 'square':
          ctx.fillRect(-p.size, -p.size, p.size * 2, p.size * 2);
          break;
        case 'diamond':
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.lineTo(p.size, 0);
          ctx.lineTo(0, p.size);
          ctx.lineTo(-p.size, 0);
          ctx.closePath();
          ctx.fill();
          break;
        case 'star':
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            const angle = (i * Math.PI * 2) / 5 - Math.PI / 2;
            const x = Math.cos(angle) * p.size;
            const y = Math.sin(angle) * p.size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
            const innerAngle = ((i + 0.5) * Math.PI * 2) / 5 - Math.PI / 2;
            ctx.lineTo(Math.cos(innerAngle) * p.size * 0.4, Math.sin(innerAngle) * p.size * 0.4);
          }
          ctx.closePath();
          ctx.fill();
          break;
      }

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        // mouse/touch repulsion
        const dx = p.x - pointerRef.current.x;
        const dy = p.y - pointerRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repulsionRadius = 120;

        if (distance < repulsionRadius) {
          const force = (repulsionRadius - distance) / repulsionRadius;
          p.vx += (dx / distance) * force * 0.15;
          p.vy += (dy / distance) * force * 0.15;
        }

        // movement
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.rotation += p.rotationSpeed;

        // bounce on edges
        if (p.x < 0 || p.x > canvas.width) { p.vx *= -0.8; p.x = Math.max(0, Math.min(canvas.width, p.x)); }
        if (p.y < 0 || p.y > canvas.height) { p.vy *= -0.8; p.y = Math.max(0, Math.min(canvas.height, p.y)); }

        drawParticle(p);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
};
