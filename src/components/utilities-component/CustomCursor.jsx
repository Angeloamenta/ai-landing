'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const trailsRef = useRef([]);
  const positionRef = useRef({ x: 0, y: 0 });
  const trailDataRef = useRef([]);

  useEffect(() => {
    document.body.style.cursor = 'none';
    
    let trailId = 0;
    let animationFrameId;

    const updatePositions = () => {
      // Aggiorna cursore principale
      if (cursorRef.current && dotRef.current) {
        const x = positionRef.current.x;
        const y = positionRef.current.y;
        cursorRef.current.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
        dotRef.current.style.transform = `translate(${x - 2}px, ${y - 2}px)`;
      }

      // Aggiorna trail
      trailDataRef.current.forEach((point, index) => {
        const trail = trailsRef.current[index];
        if (trail) {
          const progress = index / Math.max(trailDataRef.current.length - 1, 1);
          const size = 8 + progress * 32;
          const opacity = 0.1 + progress * 0.4;
          const grayValue = Math.floor(200 - Math.abs((progress * 2 - 1)) * 180);
          
          trail.style.transform = `translate(${point.x - size / 2}px, ${point.y - size / 2}px)`;
          trail.style.width = `${size}px`;
          trail.style.height = `${size}px`;
          trail.style.opacity = opacity;
          trail.style.backgroundColor = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
        }
      });

      animationFrameId = requestAnimationFrame(updatePositions);
    };

    const handleMouseMove = (e) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      // Aggiungi punto al trail (meno frequentemente)
      if (trailId % 2 === 0) {
        trailDataRef.current.push({ x: e.clientX, y: e.clientY, id: trailId });
        if (trailDataRef.current.length > 10) {
          trailDataRef.current.shift();
        }
      }
      trailId++;
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    updatePositions();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = '';
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Trail elements */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          ref={el => trailsRef.current[i] = el}
          className="absolute rounded-full mix-blend-difference will-change-transform"
          style={{ opacity: 0 }}
        />
      ))}

      {/* Cursore principale */}
      <div
        ref={cursorRef}
        className="absolute rounded-full mix-blend-difference will-change-transform"
        style={{ width: '40px', height: '40px' }}
      />

      {/* Punto centrale */}
      <div
        ref={dotRef}
        className="absolute rounded-full mix-blend-difference will-change-transform"
        style={{ width: '4px', height: '4px' }}
      />
    </div>
  );
}