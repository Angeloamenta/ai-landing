'use client'

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    // const navRef = useRef(null);
    // const logoRef = useRef(null);
    // const linksRef = useRef([]);
    // const [isScrolled, setIsScrolled] = useState(false);

    // useEffect(() => {
    //     // Initial reveal animation
    //     gsap.from(navRef.current, {
    //         y: -100,
    //         opacity: 0,
    //         duration: 1.2,
    //         ease: "power3.out",
    //         delay: 0.5
    //     });

    //     // Logo animation
    //     gsap.from(logoRef.current, {
    //         opacity: 0,
    //         x: -20,
    //         duration: 0.8,
    //         ease: "power2.out",
    //         delay: 1
    //     });

    //     // Links stagger animation
    //     gsap.from(linksRef.current, {
    //         opacity: 0,
    //         y: -20,
    //         stagger: 0.1,
    //         duration: 0.6,
    //         ease: "power2.out",
    //         delay: 1.2
    //     });

    //     // Scroll-based background change
    //     const handleScroll = () => {
    //         if (window.scrollY > 100) {
    //             setIsScrolled(true);
    //         } else {
    //             setIsScrolled(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <nav className="w-full  flex justify-around">
            <div className="">
                LANDING
            </div>
            <div className="">
                <button className="flex gap-2 ">
                    <span className="">Contact</span>
                    <span className="">Contact</span>
                    <span className="">Contact</span>
                </button>
            </div>
            <div className="">
                Contact
            </div>
        </nav>
    );
}
