'use client'

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Cases from "./Cases";


gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Main() {
    const myVideo = useRef(null);
    const heroTextRef = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const iconsRef = useRef([]);
    const featureCardsRef = useRef([]);

    const blackBall = useRef(null);

    useEffect(() => {
        // Video animation
        gsap.from(myVideo.current, {
            scale: 0.5,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".video-container",
                toggleActions: "restart none none reset",
                start: "top center",
            },
        });

        const ctx = gsap.context(() => {
            // Hero text reveal animation
            if (heroTextRef.current) {
                const split = new SplitText(heroTextRef.current, {
                    type: "lines, words",
                    linesClass: "line-overflow",
                });

                gsap.from(split.words, {
                    opacity: 0,
                    y: 60,
                    rotateX: -80,
                    stagger: 0.015,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: heroTextRef.current,
                        start: "top 95%",
                        toggleActions: "play none none reverse",
                    }
                });
            }

            // Icons floating animation
            iconsRef.current.forEach((icon, index) => {
                if (icon) {
                    gsap.to(icon, {
                        y: -20,
                        duration: 2 + index * 0.3,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    });

                    gsap.from(icon, {
                        scale: 0,
                        rotation: 180,
                        duration: 0.7,
                        ease: "back.out(2)",
                        scrollTrigger: {
                            trigger: icon,
                            start: "top 95%",
                            toggleActions: "play none none reverse",
                        }
                    });
                }
            });

            // Feature cards stagger
            featureCardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.from(card, {
                        opacity: 0,
                        y: 50,
                        duration: 0.6,
                        delay: index * 0.08,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 95%",
                            toggleActions: "play none none reverse",
                        }
                    });
                }
            });


        }, []);


       const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".change",
        start: "top bottom",     
        end: "bottom top",       
        pin: true,               
        scrub: true,       
    
      },
    });

    // 1️⃣ Ingrandisce l'elemento
    tl.to(blackBall.current, {
      scale: 50,
      duration: 1,
      ease: "power2.inOut",
    })
    // 2️⃣ Sfuma via mentre la scala termina
      .to(blackBall.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power1.out",
      }, "-=0.3"); // inizia 0.3 secondi prima della fine della scala



        return () => ctx.revert();
    }, []);

    return (
        <main className="relative overflow-hidden">
            {/* ===== SECTION 1: Hero Statement - Essential Style ===== */}
            <section className="min-h-screen flex items-center justify-center px-8 py-32 relative">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 ref={heroTextRef} className="text-6xl md:text-8xl lg:text-[120px] font-light leading-[1.1] tracking-tight mb-12">
                        The first step towards an AI operating system
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
                        Experience the future where artificial intelligence seamlessly integrates with your creative workflow
                    </p>
                </div>
            </section>

            {/* ===== SECTION 2: Icon Features - Essential Style ===== */}
            <section ref={section2Ref} className="min-h-screen py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-start">
                        {/* Icon Feature 1 */}
                        <div className="text-center">
                            <div
                                ref={el => iconsRef.current[0] = el}
                                className="w-32 h-32 mx-auto mb-8 border border-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm bg-white/5"
                            >
                                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-light mb-4 tracking-tight">Intelligent Design</h3>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                AI that understands context and adapts to your creative vision in real-time
                            </p>
                        </div>

                        {/* Icon Feature 2 */}
                        <div className="text-center">
                            <div
                                ref={el => iconsRef.current[1] = el}
                                className="w-32 h-32 mx-auto mb-8 border border-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm bg-white/5"
                            >
                                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-light mb-4 tracking-tight">Natural Creation</h3>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                Describe your ideas naturally and watch them materialize instantly
                            </p>
                        </div>

                        {/* Icon Feature 3 */}
                        <div className="text-center">
                            <div
                                ref={el => iconsRef.current[2] = el}
                                className="w-32 h-32 mx-auto mb-8 border border-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm bg-white/5"
                            >
                                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-light mb-4 tracking-tight">Lightning Speed</h3>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                Build production-ready applications in minutes instead of months
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 3: video ===== */}
            <section ref={section3Ref} className="py-32 px-8 flex items-center">
                <div className="max-w-7xl relative w-full mx-auto">
                    <div className="video-container flex justify-center">
                        <iframe
                            ref={myVideo}
                            width="80%"
                            height="600"
                            src="https://www.youtube.com/embed/DZLlw5BNQ3g?si=6EK52qWxMfu4NCHT&amp;controls=0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-2xl"
                        ></iframe>
                    </div>

                    <div className="mt-16">
                        <p className="text-xl max-w-3xl md:text-2xl text-gray-500 leading-relaxed">
                            Seamlessly blend natural language with powerful AI capabilities to create experiences that were previously impossible.
                        </p>
                        <DotLottieReact
                            className=" absolute -bottom-50 right-0"
                            src="https://lottie.host/ce08c3cd-f456-43e1-9dee-7362dc351c82/IzOw2oYgxU.lottie"
                            loop
                            autoplay
                        />
                    </div>
                </div>
            </section>
            <section className="change  flex justify-center ">
                <div ref={blackBall} className="bg-black w-30 h-30 rounded-full">
                    
                </div>
            </section>

            {/* ===== SECTION 4: Two Column Deep Dive ===== */}
            <section ref={section4Ref} className="built min-h-screen py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* Left side - Title */}
                        <div className="lg:col-span-5">
                            <h3 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight sticky top-32">
                                Built for the next generation
                            </h3>
                        </div>

                        {/* Right side - Content */}
                        <div className="lg:col-span-7 space-y-16">
                            <div ref={el => featureCardsRef.current[0] = el}>
                                <div className="flex items-start gap-6 mb-6">
                                    <div className="w-12 h-12 border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-2">
                                        <span className="text-sm text-gray-600">01</span>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl md:text-3xl font-light mb-4 tracking-tight">Context-Aware Intelligence</h4>
                                        <p className="text-lg text-gray-500 leading-relaxed">
                                            Our AI doesn't just execute commands—it understands the broader context of your project. It learns from your decisions, anticipates your needs, and suggests improvements that align with your vision.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div ref={el => featureCardsRef.current[1] = el}>
                                <div className="flex items-start gap-6 mb-6">
                                    <div className="w-12 h-12 border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-2">
                                        <span className="text-sm text-gray-600">02</span>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl md:text-3xl font-light mb-4 tracking-tight">Real-Time Collaboration</h4>
                                        <p className="text-lg text-gray-500 leading-relaxed">
                                            Work alongside AI as a creative partner. Every change is reflected instantly, allowing for rapid iteration and experimentation. The boundary between thinking and creating disappears.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div ref={el => featureCardsRef.current[2] = el}>
                                <div className="flex items-start gap-6 mb-6">
                                    <div className="w-12 h-12 border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-2">
                                        <span className="text-sm text-gray-600">03</span>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl md:text-3xl font-light mb-4 tracking-tight">Production Excellence</h4>
                                        <p className="text-lg text-gray-500 leading-relaxed">
                                            Every output is optimized, accessible, and ready for deployment. No manual cleanup, no technical debt. Just clean, maintainable code that scales with your ambitions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 5: Mascotte AI ===== */}
            <section ref={section5Ref} className="min-h-screen py-32 px-8 flex items-center">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="mb-32">
                        <h3 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                            Mascotte AI
                        </h3>
                        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl">
                            Personaggi unici generati dall'intelligenza artificiale per dare vita al tuo brand
                        </p>
                    </div>

                    {/* Mascotte Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Luna", desc: "Guida digitale" },
                            { name: "Spark", desc: "Assistente creativo" },
                            { name: "Nova", desc: "Esploratore tech" },
                            { name: "Pixel", desc: "Designer virtuale" },
                            { name: "Echo", desc: "Comunicatore AI" },
                            { name: "Flux", desc: "Innovatore dinamico" }
                        ].map((mascot, index) => (
                            <div
                                key={mascot.name}
                                ref={el => featureCardsRef.current[index + 3] = el}
                                className="group aspect-square bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl border border-white/20 p-8 flex flex-col items-center justify-center hover:border-white/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
                            >
                                {/* Placeholder per mascotte AI */}
                                <div className="w-32 h-32 mb-6 border border-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                                    <svg className="w-16 h-16 text-gray-500 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-2xl font-light mb-2 tracking-tight">{mascot.name}</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-[0.2em]">{mascot.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SECTION 6: Process Timeline ===== */}
            <section className="min-h-screen py-32 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-32">
                        <h3 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tight">
                            From idea to reality in three steps
                        </h3>
                    </div>

                    <div className="space-y-32">
                        {[
                            {
                                num: "01",
                                title: "Describe",
                                desc: "Express your vision in natural language. Our AI interprets nuance, context, and intent to understand exactly what you want to build."
                            },
                            {
                                num: "02",
                                title: "Iterate",
                                desc: "Refine and adjust in real-time. The AI responds to your feedback, learns your preferences, and evolves the solution alongside your thinking."
                            },
                            {
                                num: "03",
                                title: "Deploy",
                                desc: "Launch with confidence. Every line of code is production-ready, optimized, and built according to industry best practices."
                            }
                        ].map((step, index) => (
                            <div
                                key={step.num}
                                ref={el => featureCardsRef.current[index + 9] = el}
                                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                            >
                                <div className="md:col-span-3">
                                    <div className="text-[120px] md:text-[180px] font-light leading-none text-gray-900">
                                        {step.num}
                                    </div>
                                </div>
                                <div className="md:col-span-9 space-y-6">
                                    <h4 className="text-4xl md:text-5xl font-light tracking-tight">
                                        {step.title}
                                    </h4>
                                    <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SECTION 7: Cases Integration ===== */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-8 mb-20">
                    <h3 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tight">
                        Real work from real teams
                    </h3>
                    <p className="text-2xl text-gray-500 max-w-3xl">
                        Explore case studies showcasing what's possible when human creativity meets artificial intelligence
                    </p>
                </div>

                <Cases />

                {/* CTA */}
                <div className="text-center mt-32 px-8">
                    <button className="group relative px-12 py-6 border border-white/20 rounded-full text-xl font-light overflow-hidden transition-all duration-500 hover:border-white hover:scale-105">
                        <span className="relative z-10">Explore the Playground</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    </button>
                </div>
            </section>
        </main>
    );
}
