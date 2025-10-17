'use client'

import { useEffect, useState } from "react"
import cases from '../lib/Cases'
import SplineHero from "./utilities-component/SplineHero"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';




export default function Cases() {
  const [casesStudy, setCases] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setCases(cases)
  }, [])

  const handleMouseMove = (e, index) => {
    const container = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - container.left,
      y: container.height / 2
    })
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  if (!casesStudy) {
    return (
      <div className="container">
        Nessun caso studio trovato
      </div>
    )
  }

  return (
    <div className="cases container mx-auto relative px-4 py-30 min-h-screen">
        <div  className="w-full h-full container absolute m-auto " style={{ zIndex: -1 }}> 
                {/* <SplineHero /> */}
                <DotLottieReact
                className="absolute w-full -top-50"
                    src="https://lottie.host/2046c2d4-6124-48c4-b804-75da79055681/YXnBI3VYVz.lottie"
                    loop
                    autoplay
                />
                
            </div>
      <div className="">
        {casesStudy.map((singleCase, index) => (
          <div
            key={index}
            className="relative border-b border-gray-200 mt-10  cursor-pointer transition-colors"
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
          >
            <h2 className="text-5xl uppercase text-gray-800 hover:text-gray-900 transition-colors">
              {singleCase.title}
            </h2>

            {/* Immagine che segue il mouse */}
            {hoveredIndex === index && (
              <div
                className="absolute pointer-events-none z-50 transition-opacity duration-300"
                style={{
                  left: `60%`,
                  top: `${mousePosition.y}px`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <img
                  src={singleCase.img}
                  alt={singleCase.title}
                  className="w-80 h-60 object-cover rounded-lg shadow-2xl"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}