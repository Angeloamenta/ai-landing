'use client'

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const linksRef = useRef([]);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Initial reveal animation
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.5
        });

        // Logo animation
        gsap.from(logoRef.current, {
            opacity: 0,
            x: -20,
            duration: 0.8,
            ease: "power2.out",
            delay: 1
        });

        // Links stagger animation
        gsap.from(linksRef.current, {
            opacity: 0,
            y: -20,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
            delay: 1.2
        });

        // Scroll-based background change
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
                    : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div ref={logoRef} className="flex items-center">
                        <a href="/" className="group flex items-center gap-3">
                            <div className="w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm bg-white/5 transition-all duration-300 group-hover:border-white/40 group-hover:scale-110">
                                <span className="text-lg font-light">AI</span>
                            </div>
                            <span className="text-xl font-light tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Landing
                            </span>
                        </a>
                    </div>

                    {/* Center Links */}
                    <div className="hidden md:flex items-center gap-12">
                        {['About', 'Features', 'Cases', 'Contact'].map((item, index) => (
                            <a
                                key={item}
                                ref={el => linksRef.current[index] = el}
                                href={`#${item.toLowerCase()}`}
                                className="group relative text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div>
                        {/* <button className="group relative px-6 py-2.5 border border-white/20 rounded-full text-sm font-light tracking-wider overflow-hidden transition-all duration-300 hover:border-white hover:scale-105">
                            <span className="relative z-10">Get Started</span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        </button> */}
                        <DotLottieReact
        className="w-32 cursor-pointer"
      src="https://lottie.host/3d004f97-5fcc-4a41-a7fa-f64bc3a3df4c/QfKQmnAsDr.lottie"
      loop
      autoplay
    />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Button (placeholder) */}
            <div className="md:hidden absolute right-8 top-1/2 -translate-y-1/2">
                <button className="w-10 h-10 border border-white/20 rounded-lg flex flex-col items-center justify-center gap-1.5 hover:border-white/40 transition-colors">
                    <span className="w-5 h-[1px] bg-white"></span>
                    <span className="w-5 h-[1px] bg-white"></span>
                    <span className="w-5 h-[1px] bg-white"></span>
                </button>
            </div>
        </nav>
    );
}
