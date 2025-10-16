'use client'

import react, { useEffect, useRef } from "react"

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function About() {



    const myVideo = useRef(null)

    useEffect(() => {
        gsap.from(myVideo.current, {
            scale: 0.5,
            duration: 1,
            ease: "power2.out",

            scrollTrigger: {
                trigger: '.video-container',
                toggleActions: 'restart none none reset',
                start: 'top center',
                // markers:true,

            }

        }
        )
    }, [])

    return (
        <div className=" py-50">
            <div className="container m-auto">
                <div>
                    <h2 className="text-5xl text-center">ESSENTIAL IS THE FIRST STEP
                        TOWARDS AN AI OPERATING SYSTEM</h2>
                </div>
                <div className="video-container flex justify-center mt-30">
                    <iframe
                        ref={myVideo}
                        width="80%"
                        height="600"
                        src="https://www.youtube.com/embed/DZLlw5BNQ3g?si=6EK52qWxMfu4NCHT&amp;controls=0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        className=" rounded-2xl"
                    ></iframe>
                </div>
            </div>
            <div className="container m-auto mt-20 flex justify-center">
                <div className="card h-64  bg-white backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col justify-center items-center">
                    <h3 className="text-lg font-bold">About Us</h3>
                    <p className="text-sm w-2xl">We are a team of passionate individuals committed to making a difference in the worl <br/>
                     through innovative technology.</p>
                </div>
            </div>
        </div >
    )
}