'use client'

import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cases from '../lib/Cases'

gsap.registerPlugin(ScrollTrigger);

export default function Cases() {
  const [casesStudy, setCases] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const casesContainerRef = useRef(null)
  const caseRefs = useRef([])
  const imageRef = useRef(null)
  const cursorFollowerRef = useRef(null)

  useEffect(() => {
    setCases(cases)
  }, [])

  useEffect(() => {
    if (!casesStudy) return;

    const ctx = gsap.context(() => {
      caseRefs.current.forEach((caseEl) => {
        if (caseEl) {
          gsap.from(caseEl, {
            opacity: 0,
            y: 60,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: caseEl,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          });
        }
      });
    }, casesContainerRef);

    return () => ctx.revert();
  }, [casesStudy]);

  useEffect(() => {
    if (hoveredIndex !== null && imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out"
      });
    } else if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in"
      });
    }
  }, [hoveredIndex]);

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    setMousePosition({ x, y });

    if (imageRef.current && hoveredIndex !== null) {
      gsap.to(imageRef.current, {
        x: x - imageRef.current.offsetWidth / 2,
        y: y - imageRef.current.offsetHeight / 2,
        duration: 0.6,
        ease: "power2.out"
      });
    }

    if (cursorFollowerRef.current && hoveredIndex !== null) {
      gsap.to(cursorFollowerRef.current, {
        x: x,
        y: y,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  if (!casesStudy) {
    return (
      <div className="container mx-auto px-8 py-20">
        <div className="text-center text-gray-500">Loading cases...</div>
      </div>
    )
  }

  return (
    <div
      ref={casesContainerRef}
      className="cases-section relative px-8 py-20"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-0">
          {casesStudy.map((singleCase, index) => (
            <div
              key={index}
              ref={el => caseRefs.current[index] = el}
              className="case-item group cursor-none"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="py-16 border-b border-white/10 transition-all duration-500">
                <div className="flex items-center justify-between gap-12">
                  <div className="flex-grow overflow-hidden">
                    <div className="flex items-baseline gap-8 mb-4">
                      <span className="text-sm uppercase tracking-[0.3em] text-gray-600 transition-colors duration-500 group-hover:text-white">
                        0{index + 1}
                      </span>
                      <span className="text-sm uppercase tracking-[0.2em] text-gray-700 transition-colors duration-500 group-hover:text-gray-400">
                        {singleCase.description}
                      </span>
                    </div>
                    <h3 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight transition-all duration-700 ease-out group-hover:tracking-wide group-hover:translate-x-4">
                      {singleCase.title}
                    </h3>
                  </div>

                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-0 translate-x-8">
                    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center">
                      <svg className="w-8 h-8 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image with Advanced Effects */}
      {hoveredIndex !== null && (
        <>
          <div
            ref={imageRef}
            className="fixed pointer-events-none z-50"
            style={{
              left: 0,
              top: 0,
              opacity: 0,
              transform: 'scale(0.8)'
            }}
          >
            <div className="relative">
              {/* Animated border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 via-white/5 to-white/20 rounded-2xl blur-xl animate-pulse"></div>

              {/* Main image container */}
              <div className="relative w-[500px] h-[350px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src={casesStudy[hoveredIndex].img}
                  alt={casesStudy[hoveredIndex].title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Image label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-sm uppercase tracking-[0.2em] text-white/60 mb-2">
                    {casesStudy[hoveredIndex].description}
                  </div>
                  <div className="text-2xl font-light text-white">
                    {casesStudy[hoveredIndex].title}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom cursor follower */}
          <div
            ref={cursorFollowerRef}
            className="fixed pointer-events-none z-40 w-4 h-4 -ml-2 -mt-2"
            style={{ left: 0, top: 0 }}
          >
            <div className="w-full h-full bg-white rounded-full animate-pulse"></div>
          </div>
        </>
      )}
    </div>
  )
}
