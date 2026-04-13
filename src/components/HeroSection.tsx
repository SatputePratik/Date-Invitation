'use client';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [lineVisible, setLineVisible] = useState(false);
  const [subVisible, setSubVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
    setTimeout(() => setLineVisible(true), 1200);
    setTimeout(() => setSubVisible(true), 1800);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center gradient-bg candle-glow">
      {/* Top ornament */}
      <div
        className="mb-8 transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(-20px)' }}
      >
        <div className="flex items-center gap-4 justify-center">
          <div className="gold-line w-16" />
          <span className="text-gold-200 text-xs tracking-[0.4em] uppercase font-sans">
            A Letter For You
          </span>
          <div className="gold-line w-16" />
        </div>
      </div>

      {/* Main title */}
      <div
        className="transition-all duration-1200 delay-300"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
      >
        <h1
          className="font-serif text-gold-200 text-glow leading-tight mb-2"
          style={{ fontSize: 'clamp(3rem, 12vw, 7rem)', fontStyle: 'italic', fontWeight: 400 }}
        >
          My Dearest
        </h1>
        <h2
          className="font-script text-rose-light text-glow-rose"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 6rem)' }}
        >
          Sharmishtha
        </h2>
      </div>

      {/* Gold divider */}
      <div
        className="my-8 transition-all duration-1000"
        style={{
          opacity: lineVisible ? 1 : 0,
          width: lineVisible ? '200px' : '0px',
          transition: 'opacity 1s, width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="gold-line" />
        <div className="flex justify-center mt-2">
          <span className="text-gold-300 text-lg">✦</span>
        </div>
      </div>

      {/* Subtitle */}
      <p
        className="font-sans text-gold-100 max-w-md leading-relaxed transition-all duration-1000"
        style={{
          fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
          opacity: subVisible ? 0.85 : 0,
          transform: subVisible ? 'translateY(0)' : 'translateY(20px)',
          fontStyle: 'italic',
          fontWeight: 300,
        }}
      >
        There is something I&apos;ve been holding close to my heart, something I wrote just for you...
      </p>

      {/* Scroll hint */}
      <div
        className="absolute bottom-12 flex flex-col items-center gap-2 transition-all duration-1000"
        style={{ opacity: subVisible ? 0.6 : 0 }}
      >
        <span className="text-gold-200 text-xs tracking-widest uppercase font-sans">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold-300 to-transparent" />
      </div>
    </section>
  );
}
