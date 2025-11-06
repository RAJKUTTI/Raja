// "use client";
// import React, { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const skillsData = {
//   design: ["/ps.png", "/figma.png", "/xd.png"],
//   development: ["/angular.png", "/bootstrap.png", "/node.png", "/react.png"]
// };

// const Skills = () => {
//     const sectionRef = useRef(null);

//     useLayoutEffect(() => {
//         let ctx = gsap.context(() => {
//             // Floating animation for icons
//             gsap.to(".skill-icon", {
//                 y: "-=20",
//                 repeat: -1,
//                 yoyo: true,
//                 duration: 2,
//                 ease: "sine.inOut",
//                 stagger: {
//                     amount: 1,
//                     from: "random"
//                 }
//             });

//             // Fade in animation for the whole section
//             gsap.from(sectionRef.current, {
//                 opacity: 0,
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: "top 80%",
//                 }
//             });

//         }, sectionRef);
//         return () => ctx.revert();
//     }, []);

//     return (
//         <section id='skills' ref={sectionRef} className="py-24">
//             <div className="container mx-auto px-6 text-center">
//                 <p className="text-brand-text text-sm">- Tools and Technologies</p>
//                 <h2 className="text-4xl font-bold mt-2">Tools & Technologies I Use</h2>
//                 <div className="mt-16 grid md:grid-cols-2 gap-16">
//                     <div>
//                         <h3 className="text-brand-text mb-8">- for design</h3>
//                         <div className="flex justify-center items-center gap-8 flex-wrap">
//                             {skillsData.design.map(src => (
//                                 <img key={src} src={src} alt={src} className="w-16 h-16 object-contain skill-icon" />
//                             ))}
//                         </div>
//                     </div>
//                     <div>
//                         <h3 className="text-brand-text mb-8">- for developement</h3>
//                         <div className="flex justify-center items-center gap-8 flex-wrap">
//                             {skillsData.development.map(src => (
//                                 <img key={src} src={src} alt={src} className="w-16 h-16 object-contain skill-icon" />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Skills;




"use client";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// --- NEW: Import all the requested icons from react-icons ---
import {
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiBootstrap,
    SiReact,
    SiNextdotjs,
    SiAdobephotoshop,
    SiCoreldraw,
    SiCanva,
    SiFigma
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

// --- UPDATED: skillsData with the new list of skills and icons ---
const skillsData = {
  design: [
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    { name: "CorelDRAW", icon: <SiCoreldraw /> },
    { name: "Canva", icon: <SiCanva /> },
    { name: "Figma", icon: <SiFigma /> }
  ],
  development: [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> }
  ]
};

const Skills = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // --- UPDATED: Animation is now a "bouncy" elastic ease ---
            gsap.to(".skill-icon", {
                y: "-=20", // How high the bounce is
                repeat: -1,
                yoyo: true,
                duration: 1.5, // Duration of one up/down cycle
                // This elastic ease creates the bouncy effect
                ease: "elastic.inOut(1.75, 0.75)", 
                stagger: {
                    amount: 0.5, // Total time for all icons to start bouncing
                    from: "random"
                }
            });

            // Fade in animation for the section (no change)
            gsap.from(sectionRef.current, {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id='skills' ref={sectionRef} className="py-24">
            <div className="container mx-auto px-6 text-center">
                <p className="text-brand-text text-sm">- Tools and Technologies</p>
                <h2 className="text-4xl font-bold mt-2">Tools & Technologies I Use</h2>
                <div className="mt-16 grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-brand-text mb-8">- for design</h3>
                        <div className="flex justify-center items-center gap-8 flex-wrap">
                            {/* Rendering the new design skills */}
                            {skillsData.design.map(skill => (
                                <div key={skill.name} className="skill-icon text-5xl text-brand-text hover:text-white transition-colors cursor-pointer" title={skill.name}>
                                    {skill.icon}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-brand-text mb-8">- for developement</h3>
                        <div className="flex justify-center items-center gap-8 flex-wrap">
                            {/* Rendering the new development skills */}
                            {skillsData.development.map(skill => (
                                <div key={skill.name} className="skill-icon text-5xl text-brand-text hover:text-white transition-colors cursor-pointer" title={skill.name}>
                                    {skill.icon}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;