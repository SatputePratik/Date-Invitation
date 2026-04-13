'use client';
import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

export default function RosePetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 8,
      size: 8 + Math.random() * 10,
      rotation: Math.random() * 360,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal absolute"
          style={{
            left: `${p.left}%`,
            top: '-20px',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            width: `${p.size}px`,
            height: `${p.size * 1.3}px`,
          }}
        >
          <svg viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 2 C10 2, 18 8, 18 16 C18 21, 14 25, 10 25 C6 25, 2 21, 2 16 C2 8, 10 2, 10 2Z"
              fill="rgba(194, 49, 77, 0.5)"
              style={{ transform: `rotate(${p.rotation}deg)`, transformOrigin: 'center' }}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
