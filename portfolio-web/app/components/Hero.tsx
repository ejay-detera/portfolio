"use client";

import { useEffect, useState } from "react";
import ShapeGrid from "./ShapeGrid";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-4.5rem)] lg:max-h-[860px] flex items-center border-b border-[#363535] bg-[#06070E] overflow-hidden py-10 lg:py-0"
    >
      {/* Background Animated ShapeGrid (React Bits) */}
      <div className="absolute inset-0 z-0">
        <ShapeGrid 
          speed={0.3} 
          squareSize={32}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.08)"
          hoverFillColor="rgba(229, 169, 60, 0.22)"
          shape="square"
          hoverTrailAmount={4}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full h-full relative z-10 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center h-full">
          
          {/* Left Column: Massive Editorial Typography & Action CTA (Niko Kane Inspired) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 lg:space-y-6 z-20 py-4 lg:py-8">
            
            {/* Top Red Eyebrow Tag */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[var(--brand-red)] uppercase flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[var(--brand-red)] animate-ping" />
                FULL-STACK DEVELOPER & SYSTEM ARCHITECT
              </span>
            </div>

            {/* Massive Hero Name with Integrated Rotating Stamp */}
            <div className="relative w-fit">
              <h1 
                className="text-6xl sm:text-8xl lg:text-7xl xl:text-8xl font-black tracking-tight uppercase leading-[0.85]" 
                style={{ color: '#FFFFFF' }}
              >
                <span className="block">E-JAY</span>
                <span className="inline-flex items-center gap-3 sm:gap-4 lg:gap-5">
                  <span>DETERA</span>
                  <span 
                    className="inline-flex items-center justify-center select-none"
                    style={{ color: '#E5A93C' }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 animate-spin-slow"
                      fill="none"
                      stroke="#E5A93C"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="2" x2="12" y2="22" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                      <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
                      <circle cx="12" cy="12" r="1.5" fill="#E5A93C" />
                    </svg>
                  </span>
                </span>
              </h1>

              {/* Hand-Drawn Red Swooping Underline */}
              <div className="w-56 sm:w-80 mt-3 text-[var(--brand-red)]">
                <svg viewBox="0 0 320 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <path 
                    d="M4 14C65 4 135 18 200 8C250 2 290 14 316 11" 
                    stroke="currentColor" 
                    strokeWidth="4.5" 
                    strokeLinecap="round" 
                  />
                </svg>
              </div>
            </div>

            {/* Editorial Bio Statement */}
            <p 
              className="text-sm sm:text-base max-w-lg leading-relaxed font-sans pt-1" 
              style={{ color: '#CBD5E1' }}
            >
              I build resilient digital products with an emphasis on robust database design,
              clean system architecture, and modern full-stack web and mobile applications.
              Currently a 3rd-year IT student at Polytechnic University of the Philippines.
            </p>

            {/* Prominent Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Golden Yellow Pill Button (Directly like Niko Kane VIEW MY WORK) */}
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-3 rounded-full bg-[var(--brand-yellow)] text-[#06070E] px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider font-mono hover:bg-[#F2B94F] hover:shadow-[0_6px_25px_rgba(229,169,60,0.45)] transition-all cursor-pointer shadow-lg"
              >
                <span>VIEW MY WORK</span>
                <span className="text-base font-black">→</span>
              </button>

              {/* Secondary Editorial Outline Button */}
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-[#363535] bg-[#12131D] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:border-[var(--brand-yellow)] hover:bg-[#1A1C29] transition-all cursor-pointer font-mono"
                style={{ color: '#FFFFFF' }}
              >
                <span>GET IN TOUCH</span>
              </button>

              {/* Minimal GitHub Link */}
              <a
                href="https://github.com/ejay-detera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold hover:text-[var(--brand-yellow)] text-gray-400 transition-colors py-2 px-2"
              >
                <span>GITHUB</span>
                <span>↗</span>
              </a>
            </div>

          </div>

          {/* Right Column: Commanding Portrait Showcase (Niko Kane Inspired Artwork) */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[580px]">
            
            {/* The Graphic Canvas Container */}
            <div className="relative flex items-end justify-center w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[500px] h-full">
              
              {/* Graphic Element 1: Large Painted Yellow Square Swatch behind torso/head */}
              <img
                src="/paint-square.png"
                alt=""
                draggable={false}
                className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] lg:w-[540px] lg:h-[540px] max-w-none object-contain z-0 pointer-events-none select-none drop-shadow-2xl -rotate-6 top-0 sm:top-4 lg:-top-4"
              />

              {/* Graphic Element 2: Bold Red Eye Doodle at Top-Right of Head */}
              <div className="absolute top-2 sm:top-4 -right-2 sm:-right-6 lg:-right-8 w-28 sm:w-36 h-24 text-[var(--brand-red)] z-20 pointer-events-none select-none">
                <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                  {/* 3 upper eyelashes/rays */}
                  <line x1="60" y1="2" x2="60" y2="18" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  <line x1="32" y1="8" x2="42" y2="22" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  <line x1="88" y1="8" x2="78" y2="22" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  {/* Eye contour */}
                  <path d="M10 48 Q 60 16 110 48 Q 60 80 10 48 Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  {/* Pupil */}
                  <circle cx="60" cy="48" r="14" fill="currentColor" />
                  <circle cx="64" cy="44" r="4.5" fill="#06070E" />
                </svg>
              </div>

              {/* Graphic Element 3: Horizontal Painterly Brush Streak under Eye */}
              <img
                src="/paint-rectangle.png"
                alt=""
                draggable={false}
                className="absolute top-28 sm:top-36 -right-6 sm:-right-10 w-32 sm:w-44 h-auto object-contain z-10 pointer-events-none select-none opacity-85 invert brightness-50"
              />

              {/* Graphic Element 4: Dot Matrix Grid block under Streak */}
              <div className="absolute top-40 sm:top-48 -right-4 sm:-right-8 grid grid-cols-4 gap-2 z-10 pointer-events-none">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} className="w-2 h-2 rounded-full bg-[#363535]" />
                ))}
              </div>

              {/* The Cutout Portrait Image standing tall & grounded directly at the bottom */}
              <div className="relative z-10 flex items-end justify-center w-full">
                <img
                  src="/E-jay Hero Section.png"
                  alt="E-jay P. Detera - Full-Stack Developer"
                  draggable={false}
                  className="max-h-[420px] sm:max-h-[500px] lg:max-h-[580px] xl:max-h-[640px] w-auto object-contain object-bottom filter contrast-[1.05] drop-shadow-[0_25px_30px_rgba(0,0,0,0.9)] select-none pointer-events-auto"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
