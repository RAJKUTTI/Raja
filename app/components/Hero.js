// "use client";
// import React, { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap';

// const Hero = () => {
//   const comp = useRef(null);

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       const t1 = gsap.timeline();
//       t1.from("#intro-text > *", {
//         opacity: 0,
//         y: 30,
//         stagger: 0.2,
//         duration: 0.8,
//         ease: "power3.out"
//       }).from("#hero-image", {
//         opacity: 0,
//         scale: 0.8,
//         duration: 1,
//         ease: "elastic.out(1, 0.5)"
//       }, "-=0.5");
//     }, comp);
//     return () => ctx.revert();
//   }, []);
  
//   return (
//     <section id="home" ref={comp} className="min-h-screen pt-10 pb-16">
//       <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
//         {/* Left Column: Intro Text */}
//         <div id="intro-text" className="flex flex-col gap-6 items-start">
//           <p className="text-brand-text">Introducing</p>
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight">Hello, <br />I'm Derick</h1>
//           <p className="text-brand-text max-w-md">
//             Since beginning my journey as a freelance designer nearly 8 years ago, I’ve done remote work for agencies and collaborated with talented people to create digital product.
//           </p>
//         </div>
        
//         {/* Right Column: Image with Shapes */}
//         <div id="hero-image" className="relative flex justify-center items-center">
//             <div className="absolute -bottom-10 -right-10 w-full h-full bg-[#E8D4C3] rounded-[55%_45%_46%_54%_/_49%_49%_51%_51%]"></div>
//             <img 
//                 src="/dp.jpg" // Place your profile image in the `public` folder
//                 alt="Derick" 
//                 className="relative z-10 w-[400px] h-auto object-cover"
//             />
//              {/* Decorative Elements */}
//             <div className="absolute top-10 -right-4 w-5 h-5 bg-white/20 rounded-full"></div>
//             <div className="absolute -bottom-16 left-0 w-24 h-24 bg-brand-blue rounded-[55%_45%_46%_54%_/_49%_49%_51%_51%]"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




"use client"

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

// --- Reusable SVG Doodle Components (No Changes) ---
const DoodleCircle = () => (
    <svg id="doodle-circle" className="absolute w-[110%] h-[110%] text-brand-olive" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="circle-path" d="M8.2,50.2c0-23.2,18.8-42,42-42s42,18.8,42,42s-18.8,42-42,42c-15.5,0-29.3-8.4-36.6-21.1 C2.7,60,0.6,50.7,4.5,42.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
);
const PlusSigns = () => (
    <div id="plus-doodle" className="absolute top-0 right-0 text-brand-olive transform -translate-y-1/4 translate-x-1/4">
        <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 20V80M20 50H80" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
            <path d="M75 5V35M60 20H90" stroke="currentColor" strokeWidth="5" strokeLinecap="round" transform="translate(10, -10) rotate(15)"/>
        </svg>
    </div>
);
const HashMarks = () => (
    <div id="hash-doodle" className="absolute bottom-0 left-0 text-brand-olive transform translate-y-1/4 -translate-x-1/4">
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 80L40 60M35 80L55 60M50 80L70 60M65 80L85 60" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        </svg>
    </div>
);


// --- Main Hero Component ---
const Hero = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // --- CHANGE #1: Make the component visible before the animation starts ---
      // This happens instantly, but after GSAP has set the initial states of the children.
      tl.to(comp.current, { visibility: 'visible', duration: 0 });

      // Animate intro text
      tl.from("#intro-text > *", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
      });

      // Animate profile picture
      tl.from("#hero-image", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.5");

      // Animate the circle doodle
      const path = document.querySelector("#circle-path");
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      tl.to(path, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power1.inOut"
      }, "-=1.2");

      // Animate the other doodles
      tl.from(["#plus-doodle", "#hash-doodle"], {
          opacity: 0,
          scale: 0.5,
          stagger: 0.2,
          duration: 0.5,
          ease: "back.out(1.7)"
      }, "-=1");

    }, comp);
    return () => ctx.revert();
  }, []);
  
  return (
    // --- CHANGE #2: Set the component to be hidden by default ---
    <section id="home" ref={comp} style={{ visibility: 'hidden' }} className="min-h-screen pt-28 pb-16 bg-brand-cream text-brand-olive">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
        
        {/* Left Column: Intro Text */}
        <div id="intro-text" className="flex flex-col gap-6 items-start text-white-800">
          <p>Introducing</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">Hello, <br />I'm Raja</h1>
          {/* Corrected Tailwind text color classes */}
          <p className="max-w-md text-white-600">
            A passionate frontend developer specializing in building clean, responsive websites and applications with modern technologies.
          </p>
        </div>
        
        {/* Right Column: Image with Animated Doodles */}
        <div className="relative flex justify-center items-center">
            <div id="hero-image-container" className="relative w-80 h-80 md:w-96 md:h-96">
                <DoodleCircle />
                <PlusSigns />
                <HashMarks />
                <img 
                    id="hero-image"
                    src="/dp.jpg" // CHANGE THIS to your new image file
                    alt="Raja" 
                    className="relative z-10 w-full h-full object-cover rounded-full"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;