"use client";

import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex min-h-screen flex-col bg-[var(--bg)] text-[var(--text)]"
    >
      <Navbar />

      <main className="flex-grow">
        {/* Hero: base surface (--bg) */}
        <Hero />

        {/* About: raised surface (--bg-raised) */}
        <About />

        {/* Skills: base surface (--bg) */}
        <Skills />

        {/* Projects / Shipped Systems: raised surface (--bg-raised) */}
        <Projects />

        {/* Experience & Education: base surface (--bg) */}
        <Experience />

        {/* Credentials / Certificates: raised surface (--bg-raised) */}
        <Certificates />
      </main>

      {/* Footer / Contact: base surface (--bg) */}
      <Footer />
    </motion.div>
  );
}
