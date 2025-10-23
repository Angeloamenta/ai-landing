'use client'

import React, { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Slider() {

  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lineslider",
        start: "top top",
        end: "+=150%", // durata del pin (più lungo = più tempo di animazione)
        pin: true,
        markers: true,
      },
    })

    // 1️⃣ Le linee salgono dal basso
    tl.from(".line", {
      scaleY: 0,
      transformOrigin: "bottom center",
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    })

    // 2️⃣ I filler riempiono da destra verso sinistra
    tl.from(".filler", {
      scaleX: 0,
      transformOrigin: "right center",
      duration: 0.3,
      stagger: { amount: 0.6, from: "end" },
      ease: "power2.inOut",
    }, "-=0.4")

    // 3️⃣ L’immagine appare gradualmente
    tl.from(".image-split", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    }, "-=0.5")

    // 4️⃣ I filler si ritirano da sinistra (effetto "tenda che si apre")
    tl.to(".filler", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.5,
      stagger: { amount: 0.6, from: "start" },
      ease: "power2.inOut",
    }, "+=0.3")

  }, [])

  return (
    <div className="lineslider h-screen grid grid-cols-3 relative overflow-hidden">
      {/* immagine di sfondo */}
      <img
        className="image-split w-full h-full object-cover absolute top-0 left-0"
        src="https://caymancompass.s3.amazonaws.com/wp-content/uploads/2025/01/AI-graphic-.jpeg"
        alt=""
      />

      {/* colonne verticali */}
      <div className="line border-r-2 border-amber-500 flex items-end justify-center relative">
        <div className="filler absolute inset-0 bg-amber-500"></div>
      </div>
      <div className="line border-r-2 border-amber-500 flex items-end justify-center relative">
        <div className="filler absolute inset-0 bg-amber-500"></div>
      </div>
      <div className="line border-r-2 border-amber-500 flex items-end justify-center relative">
        <div className="filler absolute inset-0 bg-amber-500"></div>
      </div>
    </div>
  )
}
