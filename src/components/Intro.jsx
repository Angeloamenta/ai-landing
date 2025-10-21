'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';


export default function Intro() {
    const introRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
                tl.to(introRef.current, {scale: 20, duration: 2 })
                .to(introRef.current, {opacity: 0, duration: 1})

    }, []);

    return (
        <div ref={introRef} className="relative h-screen ">
            <div className="fixed inset-0 transorm- bg-black [mask:radial-gradient(circle_100px_at_50%_50%,transparent_99px,black_100px)] [-webkit-mask:radial-gradient(circle_100px_at_50%_50%,transparent_99px,black_100px)] pointer-events-none"></div>
        </div>

    );
}