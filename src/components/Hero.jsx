'use client'

import React, { useEffect, useRef } from "react";

import SplineHero from "./utilities-component/SplineHero"
import TextPressure from "./ui/shadcn-io/text-pressure"

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


gsap.registerPlugin(ScrollTrigger);



export default function Hero() {


    useEffect(() => {
        gsap.to(splineHero.current, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero-section',
                start: "center top-=300px",
                end: "+=500",
                scrub: true,
                //   markers: true
            },
        });
    }, []);


    const splineHero = useRef(null)


    return (
        <div className="hero-section h-[100vh] p-10">
            <div ref={splineHero} className="w-full h-full fixed" style={{ zIndex: -1 }}>
                <DotLottieReact
                className=""
                    src="https://lottie.host/2046c2d4-6124-48c4-b804-75da79055681/YXnBI3VYVz.lottie"
                    loop
                    autoplay
                />
                <SplineHero />
            </div>
            <div className="container m-auto h-full w-full flex flex-col justify-evenly">
                <div>
                    <TextPressure />
                    <h1 className="hidden text-9xl font-bold"></h1>
                </div>
                <div className="flex justify-end">
                    <p className="w-md text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quod error deserunt deleniti numquam fugiat aut dolorem sunt consectetur quisquam repellendus veniam</p>
                </div>
            </div>
        </div>
    )
}