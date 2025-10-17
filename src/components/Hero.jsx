'use client'

import React, { useEffect, useRef, useState } from "react";

import SplineHero from "./utilities-component/SplineHero"
import TextPressure from "./ui/shadcn-io/text-pressure"

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {FlickeringGrid} from "@/components/ui/shadcn-io/flickering-grid";


gsap.registerPlugin(ScrollTrigger);



export default function Hero() {
    const [color, setColor] = useState('rgb(0 0 0)');


    useEffect(() => {

        gsap.to({}, {
      scrollTrigger: {
        trigger: '.change',

        toggleActions: "play none none reverse",
        scrub: true,
        markers: true,
        onUpdate: (self) => {
            const progress = self.progress;
            if (progress > 0.2) {
              setColor(`rgb(255 255 255)`);
            } else {        
              setColor(`rgb(0 0 0)`);
            }
        

        },
      },
    })

     gsap.to(document.body, {
        backgroundColor: 'rgb(0 0 0)',
        color: 'rgb(255 255 255)',
      scrollTrigger: {
        trigger: '.change',
        start: "top bottom-=100px",
        toggleActions: "play none none reverse",
        scrub: true,
        markers: true,
        
      },
    })


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
            <FlickeringGrid className='fixed inset-0 z-0 opacity-70'  color={color}/>
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
                    <TextPressure text="Landing AI" />
                    <h1 className="hidden text-9xl font-bold"></h1>
                </div>
                <div className="flex justify-end">
                    <p className="w-md text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quod error deserunt deleniti numquam fugiat aut dolorem sunt consectetur quisquam repellendus veniam</p>
                </div>
            </div>
        </div>
    )
}