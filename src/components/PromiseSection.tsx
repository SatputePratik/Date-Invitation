'use client';
import { useEffect, useRef, useState } from 'react';

const promises = [
  { icon: '🎭', text: 'Laughter that makes your stomach hurt' },
  { icon: '🤫', text: 'Moments between us that stay between us' },
  { icon: '🌙', text: 'An evening you\'ll want to revisit in your head' },
  { icon: '🧸', text: 'Warmth, comfort, and a little bit of chaos' },
  { icon: '💫', text: 'Surprises when you least expect them' },
  { icon: '🍺', text: 'One beer, real conversations, no pretending' },
  { icon: '🎬', text: 'Movies we won\'t fully watch but will remember' },
  { icon: '🌹', text: 'A day that feels different from every other' },
];

export default function PromiseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 px-6">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,26,46,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        <div
          className="text-center mb-16 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <p className="text-gold-200 text-xs tracking-[0.4em] uppercase font-sans mb-4 opacity-70">
            What I Promise You
          </p>
          <h2
            className="font-serif text-gold-200"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontStyle: 'italic', fontWeight: 400 }}
          >
            A Day Of
          </h2>
          <div className="gold-line max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {promises.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-sm transition-all duration-700"
              style={{
                background: 'rgba(20, 14, 4, 0.7)',
                border: '1px solid rgba(212, 168, 83, 0.1)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 0.1 + 0.3}s`,
              }}
            >
              <span className="text-2xl flex-shrink-0">{p.icon}</span>
              <p
                className="font-sans text-gold-100"
                style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', fontWeight: 300, opacity: 0.9 }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* Closing quote */}
        <div
          className="mt-16 text-center transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '1.2s',
          }}
        >
          <div className="gold-line max-w-xs mx-auto mb-8" />
          <blockquote
            className="font-serif text-gold-200 text-glow"
            style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontStyle: 'italic', opacity: 0.85 }}
          >
            &ldquo; Some days leave marks. I want to give you one of those days. &rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
