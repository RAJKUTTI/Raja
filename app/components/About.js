// "use client";

// import React, { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { FiCode, FiLayout, FiDownload } from 'react-icons/fi';

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const sectionRef = useRef(null);

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       // Animate the intro content at the top with a delay
//       gsap.from("#about-intro > *", {
//         opacity: 0,
//         y: 40,
//         stagger: 0.2,
//         duration: 1,
//         delay: 0.5, // <-- DELAY ADDED HERE
//         scrollTrigger: {
//           trigger: "#about-intro",
//           start: "top 80%",
//         }
//       });

//       // Animate the drawing of the SVG path (no delay needed for scrub)
//       const path = document.querySelector('.draw-me');
//       if (path) {
//         const pathLength = path.getTotalLength();
//         gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
//         gsap.to(path, {
//           strokeDashoffset: 0,
//           duration: 2,
//           ease: "power1.inOut",
//           scrollTrigger: {
//             trigger: ".skills-grid",
//             start: "top center",
//             end: "bottom center",
//             scrub: true,
//           }
//         });
//       }

//       // Animate the text and cards in the two-column layout with a delay
//       gsap.from("#skills-content > *", {
//         opacity: 0,
//         y: 40,
//         stagger: 0.2,
//         duration: 1,
//         delay: 0.3, // <-- DELAY ADDED HERE
//         scrollTrigger: {
//           trigger: ".skills-grid",
//           start: "top 70%",
//         }
//       });

//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   // Function to open PDF files in a new tab
//   const handleCertificateClick = (pdfUrl) => {
//     window.open(pdfUrl, '_blank');
//   };

//   return (
//     <section ref={sectionRef} id="about" className="py-24 relative">
//       <div className="container mx-auto px-6">
        
//         {/* Top Section for Personal Intro */}
//         <div id="about-intro" className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
//             <p className="text-brand-text mb-8">
//                 Hello! I'm <span className="font-bold">Raja</span>, a dedicated Fullstack Developer with a passion for creating elegant, high-performance web applications. I thrive on solving complex problems and turning innovative ideas into reality through clean code and user-centric design.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//                 <button 
//                   onClick={() => handleCertificateClick('/Raja S.pdf')}
//                   className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white font-semibold rounded-lg hover:brightness-110 transition-all duration-300"
//                 >
//                   <FiDownload /> Experience Certificate
//                 </button>
//                 <button 
//                   onClick={() => handleCertificateClick('/courseCertificate1.pdf')}
//                   className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white font-semibold rounded-lg hover:brightness-110 transition-all duration-300"
//                 >
//                   <FiDownload /> Course Certificate
//                 </button>
//                 <button 
//                   onClick={() => handleCertificateClick('/Intern Certificate.pdf')}
//                   className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white font-semibold rounded-lg hover:brightness-110 transition-all duration-300"
//                 >
//                   <FiDownload /> Internship Certificate
//                 </button>
//             </div>
//         </div>

//         {/* Divider */}
//         <div className="w-full max-w-4xl mx-auto border-t border-gray-700/50"></div>

//         {/* Two-Column UI for Skills */}
//         <div className="skills-grid grid md:grid-cols-2 gap-12 items-center mt-16">
//           {/* Left Column: Skill Cards */}
//           <div className="relative flex flex-col items-end gap-12">
//               <div className="bg-brand-blue p-6 rounded-lg w-48 text-center shadow-lg">
//                   <FiLayout size={40} className="mx-auto mb-2"/>
//                   <h3 className="font-bold">User Interface Design</h3>
//               </div>
//               <div className="bg-brand-dark-light border border-gray-700 p-6 rounded-lg w-48 text-center shadow-lg self-start ml-12">
//                   <FiCode size={40} className="mx-auto mb-2" />
//                   <h3 className="font-bold">Frontend Developer</h3>
//               </div>
              
//               <svg className="absolute top-0 left-0 w-full h-full -z-10" width="500" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M400 60 C 200 120, 250 250, 100 300" stroke="#4A6CFD" strokeWidth="2" strokeLinecap="round" className="draw-me"/>
//               </svg>
//           </div>

//           {/* Right Column: Skill Descriptions */}
//           <div id="skills-content" className="flex flex-col gap-10">
//               <div>
//                   <p className="text-brand-text text-sm mb-2">- My Skills</p>
//                   <h3 className="text-2xl font-bold">User Interface Designer</h3>
//                   <p className="text-brand-text mt-2">I specialize in creating visually stunning and intuitive digital experiences. My design process focuses on user-centricity to deliver interfaces that are both beautiful and easy to navigate.</p>
//               </div>
//               <div>
//                   <h3 className="text-2xl font-bold">Frontend Developer</h3>
//                   <p className="text-brand-text mt-2">I bring designs to life by writing clean, efficient, and responsive code. My expertise lies in translating UI/UX concepts into interactive web applications using modern frontend technologies.</p>
//               </div>
//           </div>
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
import { FiCode, FiLayout, FiDownload } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the intro content at the top with a delay
      gsap.from("#about-intro > *", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: "#about-intro",
          start: "top 80%",
        }
      });

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
            trigger: ".skills-grid",
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        });
      }

      // Animate the text and cards in the two-column layout
      gsap.from("#skills-content > *", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 70%",
        }
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Function to open PDF files in a new tab
  const handleCertificateClick = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <section ref={sectionRef} id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        {/* Top Section for Personal Intro */}
        <div id="about-intro" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-brand-text mb-8">
                Hello! I'm <span className="font-bold">Raja</span>, a dedicated Fullstack Developer with a passion for creating elegant, high-performance web applications. I thrive on solving complex problems and turning innovative ideas into reality through clean code and user-centric design.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                {/* --- BUTTONS UPDATED with 'tidal-fill' class --- */}
                <button 
                  onClick={() => handleCertificateClick('/Raja S.pdf')}
                  className="relative overflow-hidden flex items-center gap-2 px-4 py-2 bg-brand-blue text-white font-semibold rounded-lg transition-all duration-300 tidal-fill"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FiDownload /> Experience Certificate
                  </span>
                </button>
                <button 
                  onClick={() => handleCertificateClick('/courseCertificate1.pdf')}
                  className="relative overflow-hidden flex items-center gap-2 px-4 py-2 bg-brand-blue text-white font-semibold rounded-lg transition-all duration-300 tidal-fill"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FiDownload /> Course Certificate
                  </span>
                </button>
                <button 
                  onClick={() => handleCertificateClick('/Intern Certificate.pdf')}
                  className="relative overflow-hidden flex items-center gap-2 px-4 py-2 bg-brand-blue text-white font-semibold rounded-lg transition-all duration-300 tidal-fill"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FiDownload /> Internship Certificate
                  </span>
                </button>
            </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-4xl mx-auto border-t border-gray-700/50"></div>

        {/* Two-Column UI for Skills */}
        <div className="skills-grid grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Left Column: Skill Cards */}
          <div className="relative flex flex-col items-end gap-12">
              <div className="bg-brand-blue p-6 rounded-lg w-48 text-center shadow-lg">
                  <FiLayout size={40} className="mx-auto mb-2"/>
                  <h3 className="font-bold">User Interface Design</h3>
              </div>
              <div className="bg-brand-dark-light border border-gray-700 p-6 rounded-lg w-48 text-center shadow-lg self-start ml-12">
                  <FiCode size={40} className="mx-auto mb-2" />
                  <h3 className="font-bold">Frontend Developer</h3>
              </div>
              
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
      </div>
      
      {/* --- NEW: CSS for Tidal/Wave Hover Effect --- */}
      <style jsx>{`
        .tidal-fill::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 100%;
          width: 200%;
          height: 200%;
          background-color: #3b5bdb; /* A slightly darker blue for the wave */
          border-radius: 40%;
          transform: translateX(-50%);
          transition: all 0.7s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 0;
        }
        .tidal-fill:hover::before {
          top: -30%;
          transform: translateX(-50%) rotate(25deg);
        }
      `}</style>
    </section>
  );
};

export default About;