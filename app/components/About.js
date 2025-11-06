// "use client";

// import React, { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { FiCode, FiLayout } from 'react-icons/fi';

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const sectionRef = useRef(null);

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       // Animate the drawing of the SVG path
//       const path = document.querySelector('.draw-me');
//       if (path) {
//         const pathLength = path.getTotalLength();
//         gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
//         gsap.to(path, {
//           strokeDashoffset: 0,
//           duration: 2,
//           ease: "power1.inOut",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top center",
//             end: "bottom center",
//             scrub: true,
//           }
//         });
//       }

//       // Animate the text and cards
//       gsap.from("#skills-content > *", {
//         opacity: 0,
//         y: 40,
//         stagger: 0.2,
//         duration: 1,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         }
//       });

//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} id="about" className="py-24 relative">
//       <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Column: Skill Cards with SVG Path */}
//         <div className="relative flex flex-col items-end gap-12">
//             <div className="bg-brand-blue p-6 rounded-lg w-48 text-center shadow-lg">
//                 <FiLayout size={40} className="mx-auto mb-2"/>
//                 <h3 className="font-bold">User Interface Design</h3>
//             </div>
//             <div className="bg-brand-dark-light border border-gray-700 p-6 rounded-lg w-48 text-center shadow-lg self-start ml-12">
//                 <FiCode size={40} className="mx-auto mb-2" />
//                 <h3 className="font-bold">Frontend Developer</h3>
//             </div>
            
//             {/* SVG Path for Animation */}
//             <svg className="absolute top-0 left-0 w-full h-full -z-10" width="500" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M400 60 C 200 120, 250 250, 100 300" stroke="#4A6CFD" strokeWidth="2" strokeLinecap="round" className="draw-me"/>
//             </svg>
//         </div>

//         {/* Right Column: Skill Descriptions */}
//         <div id="skills-content" className="flex flex-col gap-10">
//             <div>
//                 <p className="text-brand-text text-sm mb-2">- My Skills</p>
//                 <h3 className="text-2xl font-bold">User Interface Designer</h3>
//                 <p className="text-brand-text mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//             </div>
//             <div>
//                 <h3 className="text-2xl font-bold">Frontend Developer</h3>
//                 <p className="text-brand-text mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//             </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




"use client";

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCode, FiLayout } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the drawing of the SVG path
      const path = document.querySelector('.draw-me');
      if (path) {
        const pathLength = path.getTotalLength();
        gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        });
      }

      // Animate the text and cards
      gsap.from("#skills-content > *", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 relative">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Skill Cards with SVG Path */}
        <div className="relative flex flex-col items-end gap-12">
            <div className="bg-brand-blue p-6 rounded-lg w-48 text-center shadow-lg">
                <FiLayout size={40} className="mx-auto mb-2"/>
                <h3 className="font-bold">User Interface Design</h3>
            </div>
            <div className="bg-brand-dark-light border border-gray-700 p-6 rounded-lg w-48 text-center shadow-lg self-start ml-12">
                <FiCode size={40} className="mx-auto mb-2" />
                <h3 className="font-bold">Frontend Developer</h3>
            </div>
            
            {/* SVG Path for Animation */}
            <svg className="absolute top-0 left-0 w-full h-full -z-10" width="500" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M400 60 C 200 120, 250 250, 100 300" stroke="#4A6CFD" strokeWidth="2" strokeLinecap="round" className="draw-me"/>
            </svg>
        </div>

        {/* Right Column: Skill Descriptions */}
        <div id="skills-content" className="flex flex-col gap-10">
            <div>
                <p className="text-brand-text text-sm mb-2">- My Skills</p>
                <h3 className="text-2xl font-bold">User Interface Designer</h3>
                <p className="text-brand-text mt-2">I specialize in creating visually stunning and intuitive digital experiences. My design process focuses on user-centricity to deliver interfaces that are both beautiful and easy to navigate.</p>
            </div>
            <div>
                <h3 className="text-2xl font-bold">Frontend Developer</h3>
                <p className="text-brand-text mt-2">I bring designs to life by writing clean, efficient, and responsive code. My expertise lies in translating UI/UX concepts into interactive web applications using modern frontend technologies.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;