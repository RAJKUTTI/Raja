// "use client";

// import Link from "next/link";
// import Image from "next/image"; // --- IMPORT THE NEXT.JS IMAGE COMPONENT ---
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { FiMenu, FiX } from "react-icons/fi";

// // --- Data (No Changes) ---
// const navLinks = [
//   { href: "#about", label: "About" },
//   { href: "#skills", label: "Skills" },
//   { href: "#projects", label: "Projects" },
//   { href: "#contact", label: "Contact" },
// ];

// const socialLinks = [
//   { href: "https://github.com/rajkutti", label: "GitHub", icon: FaGithub },
//   { href: "https://www.linkedin.com/in/raja-s-0a548b316/", label: "LinkedIn", icon: FaLinkedin },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hoveredLink, setHoveredLink] = useState(null);

//   const handleNavClick = (e, href) => {
//     if (href.startsWith("#")) {
//       e.preventDefault();
//       const targetElement = document.querySelector(href);
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
//         setIsOpen(false);
//       }
//     }
//   };

//   const mobileMenuVariants = {
//     hidden: { opacity: 0, y: "-100%" },
//     visible: { opacity: 1, y: "0%", transition: { type: "tween", ease: "easeInOut", duration: 0.4 } },
//     exit: { opacity: 0, y: "-100%", transition: { type: "tween", ease: "easeInOut", duration: 0.3 } },
//   };

//   return (
//     <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-lg">
//       <div className="container mx-auto flex items-center justify-between px-4 py-1">
        
//         {/* --- UPDATED: Left Side: Image Logo --- */}
//         <motion.div 
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Link 
//             href="#home" 
//             onClick={(e) => handleNavClick(e, "#home")} 
//             aria-label="Scroll to top"
//             className="transition-transform hover:scale-105"
//           >
//             <Image
//               src="/mylogo.png" // The path to your logo in the `public` folder
//               alt="Portfolio Logo"
//               width={50} // Set the desired width of your logo
//               height={50} // Set the desired height of your logo
//               priority // Prioritize loading the logo as it's above the fold
//               className="h-auto" // Optional: ensures aspect ratio is maintained
//             />
//           </Link>
//         </motion.div>

//         {/* Center: Main Navigation (Desktop) - No changes */}
//         <motion.nav 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="hidden items-center gap-2 text-sm md:flex"
//         >
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               onClick={(e) => handleNavClick(e, link.href)}
//               onMouseEnter={() => setHoveredLink(link.href)}
//               onMouseLeave={() => setHoveredLink(null)}
//               className="relative rounded-md px-4 py-2 text-foreground/80 transition-colors hover:text-foreground"
//             >
//               <AnimatePresence>
//                 {hoveredLink === link.href && (
//                   <motion.div layoutId="highlight" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="absolute inset-0 z-0 rounded-md bg-foreground/10" />
//                 )}
//               </AnimatePresence>
//               <span className="relative z-10">{link.label}</span>
//               <AnimatePresence>
//                 {hoveredLink === link.href && (
//                   <motion.div layoutId="wave" initial={{ opacity: 0, y: 10, scaleX: 0 }} animate={{ opacity: 1, y: 0, scaleX: 1 }} exit={{ opacity: 0, y: 10, scaleX: 0 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />
//                 )}
//               </AnimatePresence>
//             </a>
//           ))}
//         </motion.nav>

//         {/* Right Side: Social Icons & Mobile Toggle - No changes */}
//         <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center gap-4"
//         >
//             <div className="hidden sm:flex items-center gap-4">
//               {socialLinks.map((social) => (
//                 <a key={social.href} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="text-foreground/80 transition-colors hover:text-primary">
//                   <social.icon size={22} />
//                 </a>
//               ))}
//             </div>
            
//             <button
//               aria-label="Toggle Menu"
//               className="z-50 text-foreground/80 transition-transform hover:scale-110 md:hidden"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={isOpen ? "close" : "menu"}
//                   initial={{ rotate: -90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: 90, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//                 </motion.div>
//               </AnimatePresence>
//             </button>
//         </motion.div>
//       </div>

//       {/* Mobile Menu Overlay - No changes */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             variants={mobileMenuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="absolute top-full left-0 w-full h-screen bg-background/95 backdrop-blur-lg md:hidden"
//           >
//               <nav className="container mx-auto flex flex-col items-center gap-6 px-4 pt-16">
//                 {navLinks.map((link) => (
//                   <a
//                     key={`mobile-${link.href}`}
//                     href={link.href}
//                     onClick={(e) => handleNavClick(e, link.href)}
//                     className="rounded-md px-4 py-2 text-2xl font-medium text-foreground/90 transition-colors hover:bg-foreground/10 hover:text-primary w-full text-center"
//                   >
//                     {link.label}
//                   </a>
//                 ))}
//               </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }







"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

// --- Data (No Changes) ---
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/rajkutti", label: "GitHub", icon: FaGithub },
  { href: "https://www.linkedin.com/in/raja-s-0a548b316/", label: "LinkedIn", icon: FaLinkedin },
];

// --- NEW: Sprinkle Effect Components and Logic ---
const SPRINKLE_COUNT = 12;

// Helper to generate random numbers in a range
const randomFrom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Generate a memoized array of sprinkle properties
const sprinkles = Array.from({ length: SPRINKLE_COUNT }).map(() => ({
  id: Math.random(),
  color: `hsl(${randomFrom(180, 300)}, 100%, 70%)`, // Random cool colors (blues, purples, pinks)
  x: `${randomFrom(-60, 60)}px`,
  y: `${randomFrom(-60, 60)}px`,
  scale: randomFrom(0.6, 1.2),
  rotation: randomFrom(-120, 120),
}));

// The main component that renders the sprinkle animation
const Sprinkles = () => (
  <motion.div
    className="absolute inset-0 z-0"
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={{
      visible: { transition: { staggerChildren: 0.04 } }, // Animate children with a slight delay
      hidden: { transition: { staggerChildren: 0.04, staggerDirection: -1 } }, // Reverse stagger on exit
    }}
  >
    {sprinkles.map((sprinkle) => (
      <motion.div
        key={sprinkle.id}
        className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full"
        style={{ backgroundColor: sprinkle.color }}
        variants={{
          hidden: { opacity: 0, scale: 0, x: "-50%", y: "-50%" },
          visible: {
            opacity: [0, 1, 0], // Fade in, then fade out
            scale: sprinkle.scale,
            x: `calc(-50% + ${sprinkle.x})`,
            y: `calc(-50% + ${sprinkle.y})`,
            rotate: sprinkle.rotation,
          },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    ))}
  </motion.div>
);


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsOpen(false);
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: "0%", transition: { type: "tween", ease: "easeInOut", duration: 0.4 } },
    exit: { opacity: 0, y: "-100%", transition: { type: "tween", ease: "easeInOut", duration: 0.3 } },
  };

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-1">
        
        {/* Left Side: Image Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="#home" 
            onClick={(e) => handleNavClick(e, "#home")} 
            aria-label="Scroll to top"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/mylogo.png"
              alt="Portfolio Logo"
              width={50}
              height={50}
              priority
              className="h-auto"
            />
          </Link>
        </motion.div>

        {/* Center: Main Navigation (Desktop) */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden items-center gap-2 text-sm md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative rounded-md px-4 py-2 text-foreground/80 transition-colors hover:text-foreground"
            >
              <span className="relative z-10">{link.label}</span>
              
              {/* --- UPDATED: Replaced old effect with the new Sprinkles effect --- */}
              <AnimatePresence>
                {hoveredLink === link.href && <Sprinkles />}
              </AnimatePresence>
            </a>
          ))}
        </motion.nav>

        {/* Right Side: Social Icons & Mobile Toggle */}
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
        >
            <div className="hidden sm:flex items-center gap-4">
              {socialLinks.map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="text-foreground/80 transition-colors hover:text-primary">
                  <social.icon size={22} />
                </a>
              ))}
            </div>
            
            <button
              aria-label="Toggle Menu"
              className="z-50 text-foreground/80 transition-transform hover:scale-110 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 w-full h-screen bg-background/95 backdrop-blur-lg md:hidden"
          >
              <nav className="container mx-auto flex flex-col items-center gap-6 px-4 pt-16">
                {navLinks.map((link) => (
                  <a
                    key={`mobile-${link.href}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="rounded-md px-4 py-2 text-2xl font-medium text-foreground/90 transition-colors hover:bg-foreground/10 hover:text-primary w-full text-center"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}