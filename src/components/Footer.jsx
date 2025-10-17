'use client'

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Footer() {
    const footerRef = useRef(null);
    const topLineRef = useRef(null);
    const titleRef = useRef(null);
    const linksRef = useRef(null);
    const bottomRef = useRef(null);
    const circlesRef = useRef([]);
    const magneticRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animazione linea superiore
            gsap.from(topLineRef.current, {
                scaleX: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });

            // Animazione titolo con SplitText
            const split = new SplitText(titleRef.current, {
                type: "chars",
            });

            gsap.from(split.chars, {
                opacity: 0,
                y: 100,
                rotateX: -90,
                stagger: 0.02,
                duration: 1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                }
            });

            // Animazione link
            gsap.from(linksRef.current.children, {
                opacity: 0,
                y: 50,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: linksRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });

            // Animazione bottom
            gsap.from(bottomRef.current.children, {
                opacity: 0,
                y: 30,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: bottomRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            });

            // Animazione cerchi decorativi
            circlesRef.current.forEach((circle, i) => {
                if (circle) {
                    gsap.to(circle, {
                        y: -30,
                        duration: 2 + i * 0.5,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                    });

                    gsap.to(circle, {
                        scale: 1.2,
                        duration: 3 + i * 0.3,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                    });
                }
            });

            // Effetto magnetico sui link
            magneticRefs.current.forEach((elem) => {
                if (elem) {
                    elem.addEventListener('mousemove', (e) => {
                        const rect = elem.getBoundingClientRect();
                        const x = e.clientX - rect.left - rect.width / 2;
                        const y = e.clientY - rect.top - rect.height / 2;

                        gsap.to(elem, {
                            x: x * 0.3,
                            y: y * 0.3,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    });

                    elem.addEventListener('mouseleave', () => {
                        gsap.to(elem, {
                            x: 0,
                            y: 0,
                            duration: 0.5,
                            ease: "elastic.out(1, 0.5)"
                        });
                    });
                }
            });

            return () => split.revert();
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="relative bg-[#0a0a0a] text-white overflow-hidden">
            {/* Cerchi decorativi animati */}
            <div ref={el => circlesRef.current[0] = el} className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
            <div ref={el => circlesRef.current[1] = el} className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-600/20 to-orange-600/20 rounded-full blur-3xl"></div>
            <div ref={el => circlesRef.current[2] = el} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-600/10 to-emerald-600/10 rounded-full blur-3xl"></div>

            {/* Linea superiore animata */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent overflow-hidden">
                <div ref={topLineRef} className="h-full w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
            </div>

            <div className="container mx-auto px-8 py-20 relative z-10">
                {/* Titolo principale */}
                <div className="text-center mb-20">
                    <h2 ref={titleRef} className="text-7xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
                        Let's Connect
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                        Ready to create something extraordinary together?
                    </p>
                </div>

                {/* Grid di link */}
                <div ref={linksRef} className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Colonna 1 - Company */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-gray-400">Company</h3>
                        <ul className="space-y-4">
                            {['About', 'Services', 'Team', 'Careers'].map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        ref={el => magneticRefs.current.push(el)}
                                        className="text-2xl font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 inline-block"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colonna 2 - Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-gray-400">Services</h3>
                        <ul className="space-y-4">
                            {['Web Design', 'Development', 'Branding', 'Marketing'].map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                                        ref={el => magneticRefs.current.push(el)}
                                        className="text-2xl font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 inline-block"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colonna 3 - Connect */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-gray-400">Connect</h3>
                        <ul className="space-y-4">
                            {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        ref={el => magneticRefs.current.push(el)}
                                        className="text-2xl font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400 transition-all duration-300 inline-block"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colonna 4 - Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-gray-400">Contact</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:hello@landingai.com"
                                    ref={el => magneticRefs.current.push(el)}
                                    className="text-2xl font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 inline-block break-all"
                                >
                                    hello@<br/>landingai.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+1234567890"
                                    ref={el => magneticRefs.current.push(el)}
                                    className="text-2xl font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 inline-block"
                                >
                                    +1 234 567 890
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div ref={bottomRef} className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-white h-12 w-12 rounded-lg flex items-center justify-center">
                            <span className="text-black text-2xl font-bold">LA</span>
                        </div>
                        <span className="text-sm text-gray-500">Landing AI © 2025</span>
                    </div>

                    <div className="flex gap-8 text-sm text-gray-500">
                        <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>

                    <div className="text-sm text-gray-500">
                        Made with <span className="text-red-500 animate-pulse">♥</span> by Landing AI
                    </div>
                </div>
            </div>

            {/* Linea inferiore con gradiente animato */}
            <div className="relative h-1 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 via-blue-600 to-cyan-600 animate-gradient-x"></div>
            </div>

            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }
            `}</style>
        </footer>
    );
}
