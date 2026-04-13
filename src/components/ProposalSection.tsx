'use client';
import { useEffect, useRef, useState } from 'react';

export default function ProposalSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [answered, setAnswered] = useState<'yes' | 'no' | null>(null);
  const [noCount, setNoCount] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [confetti, setConfetti] = useState<
    { id: number; x: number; color: string; size: number; delay: number }[]
  >([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleYes = () => {
    setAnswered('yes');
    const pieces = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: ['#d4a853', '#e8536e', '#f5e6c8', '#c2314d', '#e8c98a'][Math.floor(Math.random() * 5)],
      size: 6 + Math.random() * 8,
      delay: Math.random() * 1.5,
    }));
    setConfetti(pieces);
  };

  const handleNo = () => {
    setNoCount((c) => c + 1);
    // Runaway button
    const x = Math.random() * 60 - 30;
    const y = Math.random() * 60 - 30;
    setNoPos({ x, y });
  };

  const noMessages = [
    'Wait, what?',
    'Are you sure sure?',
    'Think again...',
    'Really though? 👀',
    "Come on Sammy...",
    'The pillow fight alone is worth it!',
    'Fine, keep running 😄',
    'I\'ll wait...',
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="confetti-piece fixed pointer-events-none z-50"
          style={{
            left: `${c.x}%`,
            top: '-20px',
            width: `${c.size}px`,
            height: `${c.size}px`,
            backgroundColor: c.color,
            animationDuration: `${1.5 + Math.random() * 2}s`,
            animationDelay: `${c.delay}s`,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
          }}
        />
      ))}

      <div
        className="max-w-xl mx-auto text-center transition-all duration-1200"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
      >
        {answered !== 'yes' ? (
          <>
            {/* Pre-question */}
            <div className="mb-8">
              <div className="gold-line max-w-xs mx-auto mb-8" />
              <p className="text-gold-200 text-xs tracking-[0.4em] uppercase font-sans mb-6 opacity-70">
                Next Saturday
              </p>
              <div
                className="font-script text-rose-light text-glow-rose mb-4"
                style={{ fontSize: 'clamp(1.2rem, 4vw, 1.6rem)' }}
              >
                Hey, Dani...
              </div>
              <h2
                className="font-serif text-gold-200 text-glow leading-tight"
                style={{ fontSize: 'clamp(2rem, 7vw, 4rem)', fontStyle: 'italic', fontWeight: 400 }}
              >
                Can I take you on a date?
              </h2>
              <div className="gold-line max-w-xs mx-auto mt-6 mb-8" />
              <p
                className="font-sans text-gold-100 leading-loose"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', fontWeight: 300, opacity: 0.8, fontStyle: 'italic' }}
              >
                One day. Just us. My place, a movie, a pillow fight, one cold beer, too many laughs, a surprise evening, and a drive home you won&apos;t forget.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 relative">
              {/* YES button */}
              <button
                onClick={handleYes}
                className="btn-gold rounded-sm px-10 py-4 text-sm tracking-widest animate-heartbeat"
                style={{ minWidth: '160px' }}
              >
                Yes, I&apos;d love that 🖤
              </button>

              {/* NO button — runs away */}
              <button
                onClick={handleNo}
                className="font-sans text-sm tracking-widest uppercase transition-all duration-300 px-8 py-4 rounded-sm"
                style={{
                  color: 'rgba(212, 168, 83, 0.4)',
                  border: '1px solid rgba(212, 168, 83, 0.15)',
                  background: 'transparent',
                  transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                  cursor: 'pointer',
                  fontSize: '0.7rem',
                  minWidth: '120px',
                }}
              >
                {noCount === 0
                  ? 'Hmm, maybe not'
                  : noMessages[Math.min(noCount - 1, noMessages.length - 1)]}
              </button>
            </div>

            {noCount > 0 && (
              <p
                className="mt-6 font-script text-rose-light opacity-70"
                style={{ fontSize: '1.1rem' }}
              >
                {noCount < 3
                  ? 'That button keeps running away for a reason... 😏'
                  : 'Your finger keeps coming back. That says everything. 🖤'}
              </p>
            )}
          </>
        ) : (
          /* YES response */
          <div className="bounce-in">
            <div
              className="font-script text-gold-200 text-glow mb-6"
              style={{ fontSize: 'clamp(2rem, 8vw, 4rem)' }}
            >
              She said Yes! 🌹
            </div>
            <div className="gold-line max-w-xs mx-auto mb-8" />
            <p
              className="font-serif text-gold-100 leading-loose mb-6"
              style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontStyle: 'italic', opacity: 0.9 }}
            >
              I knew you would.
            </p>
            <p
              className="font-sans text-gold-100 leading-loose"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', fontWeight: 300, opacity: 0.8 }}
            >
              Get ready for the best Saturday of your life, Sammy.<br />
              I&apos;ll take care of everything. You just have to show up. 🖤
            </p>
            <div className="gold-line max-w-xs mx-auto mt-8" />
            <p
              className="font-script text-rose-light mt-6"
              style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}
            >
              See you Saturday ✨
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
