'use client'

import React, { useState, useEffect, useRef } from 'react';

const PixelFadeInImage = ({ src, alt = '', duration = 1200, pixelSize = 20 }) => {
  const [pixelation, setPixelation] = useState(pixelSize);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Reset pixelation quando cambia l'src
    setPixelation(pixelSize);
    
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    
    img.onload = () => {
      imgRef.current = img;
      drawPixelatedImage(pixelSize);
      
      // Animazione della pixelazione
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentPixel = pixelSize - (pixelSize - 1) * eased;
        
        setPixelation(currentPixel);
        drawPixelatedImage(currentPixel);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    };
  }, [src, duration, pixelSize]);

  const drawPixelatedImage = (pixel) => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    
    if (!canvas || !img) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    
    const w = canvas.width;
    const h = canvas.height;
    
    // Disegna l'immagine in piccolo
    const smallW = Math.max(1, w / pixel);
    const smallH = Math.max(1, h / pixel);
    
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, 0, 0, smallW, smallH);
    
    // Scala di nuovo alla dimensione originale
    ctx.drawImage(canvas, 0, 0, smallW, smallH, 0, 0, w, h);
  };

  return (
    <canvas
      ref={canvasRef}
      alt={alt}
      
    />
  );
};

export default PixelFadeInImage;