'use client'

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function About() {
  const myVideo = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    // 🎬 ANIMAZIONE VIDEO
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

    const split = new SplitText(splitRef.current, {
      type: "lines, words",
      linesClass: "line-overflow", // utile per mascherare
    });

    gsap.from(split.words, {
      y: 100,
      autoAlpha: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: splitRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    // 🧹 cleanup (evita memory leak)
    return () => split.revert();
  }, []);

  return (
    <div className="py-50">
      <section>
        <div className="container m-auto">
          <div>
            <h2
              ref={splitRef}
              className="split text-5xl text-center leading-tight"
            >
              ESSENTIAL IS THE FIRST STEP
              <br />
              TOWARDS AN AI OPERATING SYSTEM
            </h2>
          </div>

          <div className="video-container flex justify-center mt-30">
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
        </div>

        <div className="container m-auto mt-20 flex justify-center">
          <div className="card h-64 w-[30%] bg-white backdrop-blur-lg border border-white/20 rounded-2xl p-6 ">
            <h3 className="text-lg text-center mb-5 font-bold">About Us</h3>
            <p className="text-sm  text-center">
              We are a team of passionate individuals committed to making a
              difference in the world through innovative technology.
            </p>
          </div>
        </div>
      </section>

      {/* 2nd section */}
      <section className="m-auto container mt-50 relative">
        <div>
          <h2 className="text-5xl text-center">
            ESSENTIAL IS THE FIRST STEP
            <br />
            TOWARDS AN AI OPERATING SYSTEM
          </h2>
          <DotLottieReact
          className="w-80 absolute -top-30 right-0"
            src="https://lottie.host/ce08c3cd-f456-43e1-9dee-7362dc351c82/IzOw2oYgxU.lottie"
            loop
            autoplay
          />
        </div>
      </section>
    </div>
  );
}
