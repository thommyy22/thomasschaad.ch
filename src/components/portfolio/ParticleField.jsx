import React, { useEffect, useRef } from 'react';

const GREEN = '68,170,109';
const SHAPES = ['circle', 'square', 'plus', 'triangle'];

class Particle {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.xSpeed = (Math.random() - 0.5) * 0.8;
    this.ySpeed = (Math.random() - 0.5) * 0.6;
    this.size = 12;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.01;
    this.shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    this.alpha = 0.35 + Math.random() * 0.25;
  }

  path(ctx) {
    const s = this.size;
    switch (this.shape) {
      case 'circle':
        ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
        break;
      case 'square':
        ctx.rect(-s / 2, -s / 2, s, s);
        break;
      case 'triangle':
        {
          const h = (s * Math.sqrt(3)) / 2;
          ctx.moveTo(0, -h / 2);
          ctx.lineTo(-s / 2, h / 2);
          ctx.lineTo(s / 2, h / 2);
          ctx.closePath();
        }
        break;
      case 'plus':
      default:
        ctx.moveTo(-s / 2, 0);
        ctx.lineTo(s / 2, 0);
        ctx.moveTo(0, -s / 2);
        ctx.lineTo(0, s / 2);
        break;
    }
  }

  draw(ctx, boost) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.beginPath();
    this.path(ctx);
    ctx.fill();
    ctx.strokeStyle = `rgba(${GREEN},${boost ? 1 : this.alpha})`;
    ctx.stroke();
    ctx.restore();
  }

  move(width, height, boost) {
    if (this.x < -this.size) this.x = width + this.size;
    if (this.x > width + this.size) this.x = -this.size;
    if (this.y < -this.size) this.y = height + this.size;
    if (this.y > height + this.size) this.y = -this.size;
    const m = boost ? 2.6 : 1;
    this.x += this.xSpeed * m;
    this.y += this.ySpeed * m;
    this.rotation += this.rotSpeed * m;
  }
}

function readBgColor() {
  try {
    const c = window.getComputedStyle(document.body).backgroundColor;
    return c && c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent' ? c : '#ffffff';
  } catch {
    return '#ffffff';
  }
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function ParticleField({ className = 'absolute inset-0 w-full h-full pointer-events-none', density = 16000 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];
    let raf;
    let bg = readBgColor();
    let boost = false;
    const onScroll = () => {
      boost = window.scrollY < window.innerHeight * 0.5;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const resize = () => {
      const parent = canvas.parentElement;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      const count = Math.max(40, Math.floor((width * height) / density));
      particles = Array.from({ length: count }, () => new Particle(width, height));
      render();
    };

    const render = (animate = true) => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.fillStyle = bg;
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw(ctx, boost);
        if (animate) particles[i].move(width, height, boost);
      }
    };

    const loop = () => {
      render(true);
      raf = requestAnimationFrame(loop);
    };

    const updateBg = () => {
      bg = readBgColor();
    };

    resize();
    const reduced = prefersReducedMotion();
    if (!reduced) {
      raf = requestAnimationFrame(loop);
    }
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    const mo = new MutationObserver(updateBg);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}