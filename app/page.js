import Image from "next/image";
import Header from "./components/Header"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Services />
    <Contact />
    <Footer />
    </>
  );
}
