import React, { useEffect, useRef } from 'react';

const WaterRipple = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const ripplesRef = useRef<Array<{
    x: number;
    y: number;
    radius: number;
    opacity: number;
    maxRadius: number;
    speed: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const colors = ['#00C0A3', '#3ABEF9', '#1B2A41'];

    const createRipple = (x: number, y: number, intensity = 1) => {
      const baseRadius = Math.random() * 150 + 100;
      ripplesRef.current.push({
        x,
        y,
        radius: 0,
        opacity: 0.8 * intensity,
        maxRadius: baseRadius * intensity,
        speed: (Math.random() * 2 + 1) * intensity,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    const updateRipples = () => {
      ripplesRef.current = ripplesRef.current.filter(ripple => {
        ripple.radius += ripple.speed;
        ripple.opacity -= 0.008;
        return ripple.opacity > 0 && ripple.radius < ripple.maxRadius;
      });
    };

    const drawRipples = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ripplesRef.current.forEach(ripple => {
        // Outer ripple with gradient
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(
          ripple.x, ripple.y, ripple.radius * 0.8,
          ripple.x, ripple.y, ripple.radius
        );
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.8, `${ripple.color}${Math.floor(ripple.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Inner ripple
        if (ripple.radius > 20) {
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius - 15, 0, Math.PI * 2);
          ctx.strokeStyle = `${ripple.color}${Math.floor(ripple.opacity * 0.6 * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        
        // Core ripple
        if (ripple.radius > 40) {
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius - 30, 0, Math.PI * 2);
          ctx.strokeStyle = `${ripple.color}${Math.floor(ripple.opacity * 0.3 * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    };

    const animate = () => {
      updateRipples();
      drawRipples();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleClick = (e: MouseEvent) => {
      createRipple(e.clientX, e.clientY, 1.5);
      
      // Create multiple ripples for enhanced effect
      setTimeout(() => createRipple(e.clientX + Math.random() * 40 - 20, e.clientY + Math.random() * 40 - 20, 0.8), 100);
      setTimeout(() => createRipple(e.clientX + Math.random() * 60 - 30, e.clientY + Math.random() * 60 - 30, 0.6), 200);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() < 0.05) {
        createRipple(e.clientX + Math.random() * 100 - 50, e.clientY + Math.random() * 100 - 50, 0.4);
      }
    };

    // Enhanced auto-generate ripples
    const autoRipple = () => {
      if (Math.random() < 0.08) {
        createRipple(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight,
          Math.random() * 0.8 + 0.3
        );
      }
    };

    const intervalId = setInterval(autoRipple, 150);

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('click', handleClick);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearInterval(intervalId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-5"
      style={{ background: 'transparent' }}
    />
  );
};

export default WaterRipple;