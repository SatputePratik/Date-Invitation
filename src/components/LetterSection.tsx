'use client';
import { useEffect, useRef, useState } from 'react';

export default function LetterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Envelope header */}
        <div
          className="text-center mb-12 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <div className="inline-flex items-center gap-4">
            <div className="gold-line w-12" />
            <div className="wax-seal w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold">
              ❤
            </div>
            <div className="gold-line w-12" />
          </div>
        </div>

        {/* Letter card */}
        <div
          className="relative rounded-sm p-8 md:p-12 transition-all duration-1200"
          style={{
            background: 'linear-gradient(135deg, #0e0a06, #130d07, #0e0a06)',
            border: '1px solid rgba(212, 168, 83, 0.2)',
            boxShadow: '0 0 80px rgba(212, 168, 83, 0.06), inset 0 0 60px rgba(0,0,0,0.5)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transitionDelay: '0.3s',
          }}
        >
          {/* Corner ornaments */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold-300 opacity-40" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold-300 opacity-40" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold-300 opacity-40" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold-300 opacity-40" />

          {/* Letter content */}
          <div className="relative z-10 space-y-6">
            <p
              className="font-script text-gold-200"
              style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)' }}
            >
              My Sammy,
            </p>

            <p className="font-sans text-gold-100 leading-loose" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', fontWeight: 300, opacity: 0.9 }}>
              There are moments that arrive quietly — like the pause between two heartbeats — and this is one of them. A moment where I stop pretending I don&apos;t notice the way you light up every room you walk into.
            </p>

            <p className="font-sans text-gold-100 leading-loose" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', fontWeight: 300, opacity: 0.9 }}>
              I&apos;ve been carrying this idea around for a while now — a day that&apos;s nothing but <span className="text-rose-light italic">us</span>. No rush, no distractions, just laughter, warmth, and the kind of time that feels stolen from the ordinary world.
            </p>

            <p className="font-sans text-gold-100 leading-loose" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', fontWeight: 300, opacity: 0.9 }}>
              I want to spend a Saturday with you. The whole day. I have it all planned — every little detail, every surprise, even the way the evening ends with you going home carrying something you didn&apos;t have when you arrived.
            </p>

            <p className="font-sans text-gold-100 leading-loose" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', fontWeight: 300, opacity: 0.9 }}>
              Because here&apos;s the truth, Sammy — you deserve a day that feels like a scene from a favourite film. And I want to be the one who gives that to you.
            </p>

            <div className="gold-line my-6" />

            <p
              className="font-script text-right text-gold-300"
              style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)' }}
            >
              — Yours, with all the warmth I have 🖤
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
