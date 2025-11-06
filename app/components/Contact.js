// "use client";
// import React, { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { FiMail, FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';

// gsap.registerPlugin(ScrollTrigger);

// // --- Reusable Input Component for the Form ---
// const InputGroup = ({ label, id, type = "text", placeholder }) => (
//     <div className="flex flex-col">
//         <label htmlFor={id} className="text-sm text-brand-muted mb-2">{label}</label>
//         <input
//             id={id}
//             type={type}
//             placeholder={placeholder}
//             className="bg-transparent border-b border-brand-border text-brand-off-white pb-2 focus:outline-none focus:border-brand-accent-blue transition-colors"
//         />
//     </div>
// );

// // --- Main Contact Component ---
// const Contact = () => {
//     const sectionRef = useRef(null);
//     const leftColRef = useRef(null);
//     const rightColRef = useRef(null);

//     useLayoutEffect(() => {
//         let ctx = gsap.context(() => {
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: 'top 65%',
//                 }
//             });

//             // Animate the two main columns sliding in
//             tl.from(leftColRef.current, { x: -100, opacity: 0, duration: 1, ease: 'power3.out' })
//               .from(rightColRef.current, { x: 100, opacity: 0, duration: 1, ease: 'power3.out' }, "-=0.8");

//             // Stagger-animate the content inside each column
//             gsap.from("#left-content > *", { y: 30, opacity: 0, stagger: 0.15, delay: 0.4, scrollTrigger: { trigger: leftColRef.current, start: 'top 70%' } });
//             gsap.from("#right-content > *", { y: 30, opacity: 0, stagger: 0.15, delay: 0.6, scrollTrigger: { trigger: rightColRef.current, start: 'top 70%' } });

//             // Animate the decorative line
//             gsap.from("#line-anim", {
//                 scaleX: 0,
//                 transformOrigin: 'left',
//                 duration: 1.5,
//                 ease: 'power3.inOut',
//                 scrollTrigger: {
//                     trigger: leftColRef.current,
//                     start: 'top 70%'
//                 }
//             });

//         }, sectionRef);
//         return () => ctx.revert();
//     }, []);

//     return (
//         <section id="contact" ref={sectionRef} className="min-h-screen grid pt-10 md:grid-cols-2 bg-brand-dark-bg text-brand-off-white">
            
//             {/* Left Column: Information */}
//             <div ref={leftColRef} className="p-8 md:p-16 flex flex-col justify-between">
//                 <div id="left-content">
//                     <h1 className="text-5xl md:text-7xl font-bold">Let's build something great.</h1>
//                     <div id="line-anim" className="w-24 h-1 bg-brand-accent-blue mt-6"></div>
//                     <p className="max-w-md mt-8 text-brand-muted">
//                         I'm currently available for freelance work and open to discussing new projects. Whether you have a question or just want to connect, feel free to reach out.
//                     </p>
//                 </div>
//                 <div id="left-content" className="mt-12">
//                     <div className="flex items-center gap-4 text-brand-muted">
//                         <FiMail />
//                         <span>rajkutti2003@gmail.com</span>
//                     </div>
//                     <div className="flex gap-6 mt-6">
//                         <a href="#" className="text-brand-muted hover:text-brand-accent-blue transition-colors text-2xl"><FiGithub /></a>
//                         <a href="#" className="text-brand-muted hover:text-brand-accent-blue transition-colors text-2xl"><FiLinkedin /></a>
//                     </div>
//                 </div>
//             </div>

//             {/* Right Column: Form */}
//             <div ref={rightColRef} className="bg-[#111111] p-8 md:p-16 flex items-center">
//                 <form id="right-content" className="w-full space-y-8">
//                     <InputGroup label="Full Name" id="name" placeholder="Name" />
//                     <InputGroup label="Email" id="email" type="email" placeholder="Email" />
//                     <InputGroup label="Subject" id="subject" placeholder="New Project Idea" />
//                     <div>
//                         <label htmlFor="message" className="text-sm text-brand-muted mb-2 block">Message</label>
//                         <textarea
//                             id="message"
//                             rows="4"
//                             placeholder="Message"
//                             className="w-full bg-transparent border-b border-brand-border text-brand-off-white pb-2 focus:outline-none focus:border-brand-accent-blue transition-colors"
//                         ></textarea>
//                     </div>
//                     <button type="submit" className="group bg-brand-accent-blue text-white font-bold py-4 px-8 rounded-full flex items-center gap-3 transition-transform hover:scale-105">
//                         Send Message
//                         <FiArrowRight className="transition-transform group-hover:translate-x-1" />
//                     </button>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default Contact;






"use client";
import React, { useLayoutEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

// --- Reusable Input Component for the Form ---
const InputGroup = ({ label, id, type = "text", placeholder, value, onChange }) => (
    <div className="flex flex-col">
        <label htmlFor={id} className="text-sm text-brand-muted mb-2">{label}</label>
        <input
            id={id}
            name={id} // Add name attribute for state handling
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required // Add required attribute for validation
            className="bg-transparent border-b border-brand-border text-brand-off-white pb-2 focus:outline-none focus:border-brand-accent-blue transition-colors"
        />
    </div>
);

// --- Main Contact Component ---
const Contact = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null); // Ref for the container

    // --- State for form data and submission status ---
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [formStatus, setFormStatus] = useState({ status: 'idle', message: '' });

    // --- Handler to update form state ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // --- Handler for form submission with EmailJS ---
    const sendEmail = (e) => {
        e.preventDefault();
        setFormStatus({ status: 'sending', message: 'Sending...' });

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setFormStatus({ status: 'success', message: 'Message sent successfully!' });
            setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
        }).catch((err) => {
            console.log('FAILED...', err);
            setFormStatus({ status: 'error', message: 'Failed to send. Please try again.' });
        });
    };
    
    // --- GSAP Animations ---
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 50%',
                }
            });

            tl.from(containerRef.current, { scale: 0.9, opacity: 0, duration: 1, ease: 'power3.out' });
            gsap.from("#left-content > *", { y: 30, opacity: 0, stagger: 0.15, delay: 0.4, scrollTrigger: { trigger: containerRef.current, start: 'top 70%' } });
            gsap.from("#right-content > *", { y: 30, opacity: 0, stagger: 0.15, delay: 0.6, scrollTrigger: { trigger: containerRef.current, start: 'top 70%' } });
            gsap.from("#line-anim", { scaleX: 0, transformOrigin: 'left', duration: 1.5, ease: 'power3.inOut', scrollTrigger: { trigger: containerRef.current, start: 'top 70%' } });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="min-h-screen py-24 flex items-center bg-brand-dark-bg text-brand-off-white">
            
            {/* --- NEW: Container for reduced width --- */}
            <div ref={containerRef} className="container mx-auto px-6 grid md:grid-cols-2 rounded-lg overflow-hidden bg-[#111111] shadow-2xl shadow-black/30">
                {/* Left Column: Information */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div id="left-content">
                        <h1 className="text-4xl md:text-5xl font-bold">Let's build something great.</h1>
                        <div id="line-anim" className="w-24 h-1 bg-brand-accent-blue mt-6"></div>
                        <p className="max-w-md mt-8 text-brand-muted">
                            I'm currently available for freelance work. If you have a project or just want to connect, feel free to reach out.
                        </p>
                    </div>
                    {/* Note: I removed the duplicate ID from this div */}
                    <div className="mt-12" id="left-content-footer"> 
                        <div className="flex items-center gap-4 text-brand-muted">
                            <FiMail />
                            <span>rajkutti2003@gmail.com</span>
                        </div>
                        <div className="flex gap-6 mt-6">
                            <a href="https://github.com/rajkutti" className="text-brand-muted hover:text-brand-accent-blue transition-colors text-2xl"><FiGithub /></a>
                            <a href="https://www.linkedin.com/in/raja-s-0a548b316/" className="text-brand-muted hover:text-brand-accent-blue transition-colors text-2xl"><FiLinkedin /></a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-brand-dark-bg p-8 md:p-12 flex items-center">
                    <form id="right-content" onSubmit={sendEmail} className="w-full space-y-8">
                        <InputGroup label="Full Name" id="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                        <InputGroup label="Email" id="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                        <InputGroup label="Subject" id="subject" placeholder="New Project Idea" value={formData.subject} onChange={handleChange} />
                        <div>
                            <label htmlFor="message" className="text-sm text-brand-muted mb-2 block">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-brand-border text-brand-off-white pb-2 focus:outline-none focus:border-brand-accent-blue transition-colors"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button 
                                type="submit" 
                                disabled={formStatus.status === 'sending'}
                                className="group bg-brand-accent-blue text-white font-bold py-4 px-8 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 disabled:bg-gray-500 disabled:scale-100"
                            >
                                {formStatus.status === 'sending' ? 'Sending...' : 'Send Message'}
                                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </button>
                            {formStatus.message && (
                                <p className={`text-sm ${formStatus.status === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                                    {formStatus.message}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;