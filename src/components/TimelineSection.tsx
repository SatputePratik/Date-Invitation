'use client';
import { useEffect, useRef, useState } from 'react';

const timeline = [
  {
    time: 'Morning',
    emoji: '☀️',
    icon: '🏠',
    title: 'My Place — The Beginning',
    description:
      'You arrive. I open the door. And just like that, the day begins. Come in, make yourself at home — because for today, this is our little world. We meet here, where everything is ready and waiting for you.',
    color: '#d4a853',
  },
  {
    time: 'Afternoon',
    emoji: '🎬',
    icon: '🍿',
    title: 'Movie Magic & Cosy Chaos',
    description:
      'Lights dimmed, blankets pulled, and a film we\'ll half-watch because we\'ll be too busy talking over it. Movies, snacks, and the kind of comfortable silence that only happens when you\'re exactly where you\'re supposed to be.',
    color: '#c49a3c',
  },
  {
    time: 'Mid Afternoon',
    emoji: '🛋️',
    icon: '🍺',
    title: 'One Beer & A Lot of Honesty',
    description:
      'Just one beer. Okay, maybe two. We\'ll sit close, talk about everything and nothing, and somewhere in the middle of it — we\'ll cuddle, because that\'s just what happens when the afternoon gets soft and golden.',
    color: '#b8860b',
  },
  {
    time: 'Late Afternoon',
    emoji: '🪶',
    icon: '💥',
    title: 'The Pillow Fight',
    description:
      'No warnings. Just chaos. Pillows flying, laughter echoing off the walls, and at least one of us ending up completely out of breath. The rules? There are no rules. The loser? Whoever laughs first.',
    color: '#e8536e',
  },
  {
    time: 'Between',
    emoji: '🎁',
    icon: '✨',
    title: 'Surprises Along the Way',
    description:
      'I\'ve hidden little things throughout the day — moments, gestures, surprises you won\'t see coming. No spoilers. Just keep an eye out. I might tease you, I might make you smile when you least expect it.',
    color: '#d4a853',
  },
  {
    time: 'Evening',
    emoji: '🌙',
    icon: '🌟',
    title: 'The Spot — Our Evening',
    description:
      'As the sun goes down, I take you somewhere. A place I chose just for this night, just for you. You\'ll know why I picked it the moment you see it. The best view, the best company — this is where the magic peaks.',
    color: '#c2314d',
    special: true,
  },
  {
    time: 'Night',
    emoji: '🚗',
    icon: '🌌',
    title: 'The Ride Home',
    description:
      'I drop you home. But not before the drive itself becomes a memory — the city lights, low music, windows down a little, and that feeling that something beautiful just happened and you can\'t quite name it yet.',
    color: '#8b1a2e',
  },
];

export default function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [revealedItems, setRevealedItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    timeline.forEach((_, i) => {
      setTimeout(() => {
        setRevealedItems((prev) => [...prev, i]);
      }, i * 200);
    });
  }, [visible]);

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold-200 text-xs tracking-[0.4em] uppercase font-sans mb-4 opacity-70">
            Our Day Together
          </p>
          <h2
            className="font-serif text-gold-200 text-glow"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontStyle: 'italic', fontWeight: 400 }}
          >
            How It Unfolds
          </h2>
          <div className="gold-line max-w-xs mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,168,83,0.3), transparent)' }}
          />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="relative flex gap-6 md:gap-10 transition-all duration-700"
                style={{
                  opacity: revealedItems.includes(i) ? 1 : 0,
                  transform: revealedItems.includes(i) ? 'translateX(0)' : 'translateX(-30px)',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 flex flex-col items-center" style={{ width: '48px' }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl relative z-10 timeline-glow"
                    style={{
                      background: `radial-gradient(circle at 40% 40%, ${item.color}33, ${item.color}11)`,
                      border: `1px solid ${item.color}44`,
                    }}
                  >
                    {item.emoji}
                  </div>
                  {/* Time label */}
                  <span
                    className="text-xs mt-2 font-sans tracking-wider text-center"
                    style={{ color: item.color, opacity: 0.7, fontSize: '0.6rem', letterSpacing: '0.1em' }}
                  >
                    {item.time}
                  </span>
                </div>

                {/* Content card */}
                <div
                  className="flex-1 rounded-sm p-5 md:p-6 mb-2"
                  style={{
                    background: item.special
                      ? `linear-gradient(135deg, rgba(139,26,46,0.2), rgba(10,6,2,0.9))`
                      : 'linear-gradient(135deg, rgba(20,14,4,0.9), rgba(10,6,2,0.95))',
                    border: `1px solid ${item.color}22`,
                    boxShadow: item.special ? `0 0 30px rgba(194,49,77,0.1)` : 'none',
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-lg">{item.icon}</span>
                    <h3
                      className="font-serif"
                      style={{
                        color: item.color,
                        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                        fontStyle: item.special ? 'italic' : 'normal',
                      }}
                    >
                      {item.title}
                    </h3>
                    {item.special && (
                      <span className="text-xs tracking-widest text-gold-200 opacity-60 uppercase font-sans">
                        ✦ Surprise
                      </span>
                    )}
                  </div>
                  <p
                    className="font-sans text-gold-100 leading-relaxed"
                    style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', fontWeight: 300, opacity: 0.85 }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
