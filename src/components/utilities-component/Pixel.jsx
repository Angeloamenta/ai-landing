
'use client'

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Pixel({ src, containerClassName = "" }) {
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const pixelsRef = useRef([])

  useEffect(() => {
    if (!containerRef.current) return

    const pixels = pixelsRef.current
    const image = imageRef.current

    // Animazione iniziale: immagine pixelata
    

    // Animazione con ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1
      }
    })

    // Pixel scompaiono
    tl.to(pixels, {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      stagger: {
        amount: 0.9,
        from: "random",
        ease: "power2.inOut"
      },
      ease: "power2.inOut"
    })

    // Immagine appare
    tl.to(image, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.45")

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const gridSize = 40
  const pixelCount = gridSize * gridSize

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${containerClassName}`}>
      <img 
        ref={imageRef}
        className="w-full h-full object-cover"
        src={src}
        alt=""
      />
      
      <div className="absolute inset-0 grid" style={{
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        gridTemplateRows: `repeat(${gridSize}, 1fr)`
      }}>
        {Array.from({ length: pixelCount }).map((_, index) => (
          <div
            key={index}
            ref={el => pixelsRef.current[index] = el}
            className="bg-gray-600 w-full h-full"
          />
        ))}
      </div>
    </div>
  )
}