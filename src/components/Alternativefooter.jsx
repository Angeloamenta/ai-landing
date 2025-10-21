'use client'

import React, { use, useEffect } from "react"
import gsap from "gsap";

export default function Alternativefooter() {

    useEffect(() => {
        gsap.fromTo('.box-footer', {
            opacity: 0,
            backgroundColor: '#ffffffa2',

        }, {
            opacity: 1, duration: 1, stagger: 0.1, backgroundColor: 'transparent',
            scrollTrigger: {
                trigger: '.inner-footer',
                start: 'top bottom-=100px',
                toggleActions: "play none none reverse",
                // markers: true,
            },
        })}, []);

    const colors = ['#f496361a', '#f480541a', '#ea646f1a'];

    const randomizeBg = (e, type) => {
        if (type === 'enter') {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            e.currentTarget.style.backgroundColor = randomColor;
        } else {
            e.currentTarget.style.backgroundColor = 'transparent';
        }
    };

    return (
        <footer className="">
            

            <div className="inner-footer p-5 bg-linear-0 from-white/50 to-gray gap-0.5 grid grid-cols-12 relative">
                <div className="central-box flex absolute left-[50%] translate-x-[-50%] mt-5 rounded-2xl w-[25%] h-[95%] bg-black/20 p-5">
                <div className="blur-xl left-0 top-0 z-0 w-full h-full bg-black/30 absolute"></div>
                    <div className="w-full z-10 h-full">
                        <h3>PROJECTS</h3>
                        <ul>
                            <li>world</li>
                            <li>world</li>
                            <li>world</li>
                            <li>world</li>
                            <li>world</li>
                            <li>world</li>

                        </ul>
                    </div>

                </div>

                <div className="box-footer rounded-md h-50 hover:bg-white/5 transition duration-550 ease-in-out border flex items-end border-white/10 p-2 "
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>
                    <p className="uppercase text-[10px]">designers and</p>
                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10  transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border  border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>
                    <p className="uppercase text-[10px]">developers</p>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>
                                            <p className="uppercase text-[10px]">ux</p>


                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                {/* 2 */}
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border flex items-end border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>
                    <p className="uppercase text-[10px]">designers</p>


                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>
                    <p className="uppercase text-[10px]">ai</p>

                </div>

                {/* 3 */}
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>


                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>

                </div>
                <div className="box-footer rounded-md h-50 border flex items-end border-white/10 p-2 hover:bg-white/10 transition duration-550 ease-in-out"
                    onMouseEnter={(e) => randomizeBg(e, 'enter')}
                    onMouseLeave={(e) => randomizeBg(e, 'leave')}>
                    <p className="uppercase text-[10px]">with love by ideology</p>

                </div>


            </div>
        </footer>
    )
}

