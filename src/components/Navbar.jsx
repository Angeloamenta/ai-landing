'use client'
import React, { use } from "react";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export default function Navbar() {

        useEffect(() => {
    gsap.fromTo(navRef.current, {
        y: -100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.hero-section',
            start: "top top",
            end: "+=500",
            scrub: true,
            toggleActions: "play none none reverse"
        }
    });

    gsap.to(square.current, {
        rotation: 360,
        scrollTrigger: {
            trigger: document.body,
            start: "top center",
            end: "+=500",
            scrub: true,
            // markers:true,
        }
    });
    
}, []);

    
    const navRef = useRef(null)
    const square = useRef(null)


    return (
        <nav ref={navRef} className="fixed bg-white/80 backdrop-blur-md top-0 left-0 w-full p-4   z-50">
            <div className="container mx-auto w-full flex justify-between items-center">
                <div className=" m-auto text-xl font-bold">
                    <a href="#about" className="mx-2 text-gray-700 hover:text-gray-900">About</a>
                    <a href="#cases" className="mx-2 text-gray-700 hover:text-gray-900">Cases</a>
                    <a href="#contact" className="mx-2 text-gray-700 hover:text-gray-900">Contact</a>
                </div>
            <div>
                <div ref={square} className="bg-black h-8 w-8"></div>
            </div>
            </div>
        </nav>

    )
}