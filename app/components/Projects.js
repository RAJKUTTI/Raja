"use client";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

// --- Project Data ---
// You can easily add or remove projects here
const projectsData = [
  {
    title: "EuroConnect",
    category: "Web design",
    description: "Built a responsive job search platform with GPT-3 integration for smart job suggestions.",
    image: "/euro.png", // Place this image in your `public` folder
    blobColor: "bg-blue-500",
    orientation: "left"
  },
  {
    title: "Screendocx",
    category: "Web design",
    description: "- Developed a document editor supporting DOCX/PDF import with real-time formatting, preview, and export. Implemented dynamic text styling, header/footer control, and responsive design. ",
    image: "/screendocx.png", // Place this image in your `public` folder
    blobColor: "bg-teal-500",
    orientation: "right"
  },
  {
    title: "Logos Matrimony",
    category: "Web design",
    description: "A basic Matrimony website with a clean and simple user interface built using React.js. Users can view profiles, add basic details, and browse matches. Designed with responsive layouts and smooth navigation for an easy user experience.",
    image: "/logosmatrimony.png", // Place this image in your `public` folder
    blobColor: "bg-pink-500",
    orientation: "left"
  }
];

// --- Reusable Project Card Component ---
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
        }
      });
    }, cardRef);
    return () => ctx.revert();
  }, []);

  const isRightOriented = project.orientation === 'right';

  return (
    <div ref={cardRef} className={`grid md:grid-cols-2 gap-12 items-center ${index > 0 ? 'mt-24' : ''}`}>
      {/* Image Column */}
      <div className={`relative w-full h-80 ${isRightOriented ? 'md:order-2' : ''}`}>
        <div className={`absolute top-0 left-0 w-[90%] h-full rounded-2xl ${project.blobColor} opacity-80 transform -rotate-6`}></div>
        <div className="absolute top-0 left-0 w-[90%] h-full bg-gray-800 rounded-2xl p-4 transform rotate-6 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
      
      {/* Text Column */}
      <div className={`flex flex-col items-start ${isRightOriented ? 'md:order-1' : ''}`}>
        <h3 className="text-4xl font-bold">{project.title}</h3>
        <p className="text-brand-text mt-4">{project.category}</p>
        <p className="text-brand-text mt-2 max-w-md">{project.description}</p>
        <a href="#" className="flex items-center gap-2 text-white mt-6 group">
          See Here
          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

// --- Main Projects Section Component ---
const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <p className="text-brand-text text-sm">- Recent Projects</p>
        <h2 className="text-4xl font-bold mt-2">Recent Projects</h2>

        <div className="mt-20 flex flex-col gap-16">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-24">
          <button className="bg-brand-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors">
            View all
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;