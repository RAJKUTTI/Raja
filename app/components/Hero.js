"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

// --- Reusable SVG Doodle Components (No Changes) ---
const DoodleCircle = () => (
    <svg
        id="doodle-circle"
        className="absolute w-[110%] h-[110%] text-brand-olive"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            id="circle-path"
            d="M8.2,50.2c0-23.2,18.8-42,42-42s42,18.8,42,42s-18.8,42-42,42c-15.5,0-29.3-8.4-36.6-21.1 
      C2.7,60,0.6,50.7,4.5,42.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
        />
    </svg>
);

const PlusSigns = () => (
    <div
        id="plus-doodle"
        className="absolute top-0 right-0 text-brand-olive transform -translate-y-1/4 translate-x-1/4"
    >
        <svg
            className="w-12 h-12"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M50 20V80M20 50H80"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
            />
            <path
                d="M75 5V35M60 20H90"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                transform="translate(10, -10) rotate(15)"
            />
        </svg>
    </div>
);

const HashMarks = () => (
    <div
        id="hash-doodle"
        className="absolute bottom-0 left-0 text-brand-olive transform translate-y-1/4 -translate-x-1/4"
    >
        <svg
            className="w-16 h-16"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 80L40 60M35 80L55 60M50 80L70 60M65 80L85 60"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
            />
        </svg>
    </div>
);


// --- Main Hero Component ---
const Hero = () => {
    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.to(comp.current, { visibility: "visible", duration: 0 });

            // Animate intro text
            tl.from("#intro-text > *", {
                opacity: 0,
                y: 30,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
            });

            // Animate profile picture
            tl.from(
                "#hero-image",
                {
                    opacity: 0,
                    scale: 0.8,
                    duration: 1,
                    ease: "back.out(1.7)",
                },
                "-=0.5"
            );

            // Animate doodle circle path
            const path = document.querySelector("#circle-path");
            if (path) {
                const length = path.getTotalLength();
                gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
                tl.to(
                    path,
                    {
                        strokeDashoffset: 0,
                        duration: 1.5,
                        ease: "power1.inOut",
                    },
                    "-=1.2"
                );
            }

            // Animate the other doodles
            tl.from(
                ["#plus-doodle", "#hash-doodle"],
                {
                    opacity: 0,
                    scale: 0.5,
                    stagger: 0.2,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                },
                "-=1"
            );
        }, comp);
        return () => ctx.revert();
    }, []);

    const handleResumeClick = () => {
        window.open("/resume.pdf", "_blank");
    };

    return (
        <section
            id="home"
            ref={comp}
            style={{ visibility: "hidden" }}
            className="min-h-screen pt-28 pb-16 bg-brand-cream text-brand-olive relative overflow-hidden"
        >
            {/* Background Stars */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Canvas>
                    <Stars />
                </Canvas>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-16 relative z-10">
                {/* Left Column: Intro Text */}
                <div
                    id="intro-text"
                    className="flex flex-col gap-8 items-start text-white-800"
                >
                    <p>Introducing</p>

                    {/* Animated Gradient Text */}
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x bg-[length:200%_200%]">
                        Hello,<br />I'm Raja
                    </h1>

                    <p className="max-w-md text-white-600">
                        A passionate fullstack developer specializing in building clean,
                        responsive websites and applications with modern technologies.
                    </p>

                    <button
                        onClick={handleResumeClick}
                        className="px-8 py-3 rounded-full font-bold text-white transition-transform duration-300 bg-gradient-to-r from-green-500 via-lime-500 to-emerald-600 hover:scale-105 hover:shadow-lg hover:brightness-110"
                    >
                        View Resume
                    </button>
                </div>

                {/* Right Column: Image with Animated Doodles */}
                <div className="relative flex justify-center items-center">
                    <div
                        id="hero-image-container"
                        className="relative w-80 h-80 md:w-96 md:h-96"
                    >
                        <DoodleCircle />
                        <PlusSigns />
                        <HashMarks />
                        <img
                            id="hero-image"
                            src="/dp.jpg"
                            alt="Raja"
                            className="relative z-10 w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>
            </div>

            {/* Inline Gradient Animation */}
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
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
        </section>
    );
};

export default Hero;