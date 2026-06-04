"use client";

import { useState, useEffect } from "react";

const ROLES = [
  "SOFTWARE DEVELOPER",
  "FULL-STACK DEVELOPER",
  "UI/UX DESIGNER",
  "MOBILE DEVELOPER",
  "SOFTWARE ARCHITECT"
];

const STATS = [
  { value: "5", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "Junior", label: "BSIT Student" },
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = ROLES[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
          return;
        }
      }

      const speed = isDeleting ? 40 : 100;
      timer = setTimeout(handleType, speed);
    };

    timer = setTimeout(handleType, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-bold tracking-widest text-accent uppercase">
                Welcome!
              </span>
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
                Hi, I'm <span className="text-accent">E-jay</span>
              </h1>

              {/* Typewriter Display */}
              <div className="inline-flex items-center bg-surface/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-accent/20 w-fit">
                <span className="text-sm font-semibold tracking-widest sm:text-base" style={{ color: 'white' }}>
                  I'M A <span className="text-accent">{currentText}</span>
                  <span className="ml-1 animate-pulse border-r-2 border-accent h-5 inline-block align-middle">&nbsp;</span>
                </span>
              </div>
            </div>

            <p className="text-base text-text-secondary sm:text-lg max-w-xl leading-relaxed">

            </p>

            {/* Button Actions */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={(e) => scrollToSection(e, "contact")}
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-base shadow-lg transition duration-300 hover:bg-accent/80 cursor-pointer"
              >
                Get in touch
                <svg
                  className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>

              <button
                onClick={(e) => scrollToSection(e, "projects")}
                className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-surface/20 px-6 py-3 text-sm font-bold text-text-primary transition duration-300 hover:bg-surface/50 hover:border-accent cursor-pointer"
              >
                View Projects
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-surface/30 max-w-md">
              {STATS.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl font-bold text-accent sm:text-3xl">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-text-secondary font-medium tracking-wide leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 
            Right Column - Crisp, Seamless Foreground Portrait
            Brings the user image to the front of the site structure instead of standard background watermark
          */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end z-20">
            {/* Themed backdrop blur/glow effect behind the portrait */}
            <div className="absolute -inset-4 bg-accent/5 rounded-full blur-3xl opacity-50 z-0 pointer-events-none" />

            {/* Floating Outer Wrapper (handles slow, ambient vertical movement) */}
            <div className="w-full max-w-[360px] sm:max-w-[400px] animate-float">
              {/* Interactive Inner Container (handles tactile hover lifts and tilts) */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl border border-accent/15 bg-base shadow-2xl z-10 transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-2 hover:rotate-1 hover:border-accent/35 hover:shadow-[0_20px_40px_rgba(126,173,184,0.15)] group">
                {/* Full opacity crisp user image with soft color correction */}
                <img
                  src="/E-jay Hero Section.png"
                  alt="E-jay P. Detera"
                  className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-102"
                />

                {/* Edge blending overlays: only washes out the very edges of the photo frame */}
                {/* Left Edge Blend */}
                <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-base to-transparent z-10 pointer-events-none" />
                {/* Right Edge Blend */}
                <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-base to-transparent z-10 pointer-events-none" />
                {/* Top Edge Blend */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-base to-transparent z-10 pointer-events-none" />
                {/* Bottom Edge Blend - Seamlessly transitions chest/black shirt into the layout below */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-base to-transparent z-10 pointer-events-none" />
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
