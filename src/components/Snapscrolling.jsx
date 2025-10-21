'use client'
import React, { useEffect } from "react"
import gsap from "gsap";

export default function Snapscrolling() {
 
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="h-screen flex items-center justify-center bg-red-400 snap-center text-white text-4xl font-bold">
        Sezione 1
      </section>

      <section className="h-screen flex items-center justify-center bg-blue-400 snap-center text-white text-4xl font-bold">
        Sezione 2
      </section>

      <section className="h-screen flex items-center justify-center bg-green-400 snap-center text-white text-4xl font-bold">
        Sezione 3
      </section>
    </div>
    )
}