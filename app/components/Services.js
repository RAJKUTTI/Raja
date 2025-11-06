"use client";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMonitor, FiPenTool, FiCode } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FiMonitor size={40} className="text-brand-teal" />,
    title: "UI/UX Designer",
    description: "Crafting intuitive and engaging user interfaces. My focus is on creating seamless user experiences through in-depth research, wireframing, and interactive prototypes."
  },
  {
    icon: <FiPenTool size={40} className="text-brand-teal" />,
    title: "Graphic Designer",
    description: "Bringing ideas to life with visually compelling designs. I create a wide range of marketing materials, branding assets, and other visual communications."
  },
  {
    icon: <FiCode size={40} className="text-brand-teal" />,
    title: "Web Designer",
    description: "Building responsive and visually appealing websites. I specialize in designing modern, user-friendly web layouts that are both aesthetically pleasing and functional."
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  
  return (
    <section id='services' ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-brand-teal font-semibold">My services</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="bg-brand-dark-light p-8 rounded-lg flex flex-col items-center text-center gap-4"
            >
              {service.icon}
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;