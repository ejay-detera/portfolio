"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { useSmoothScroll } from "./SmoothScrollProvider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLDivElement>(null);
  const headlineLine2Ref = useRef<HTMLDivElement>(null);
  const orangeRuleRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const supportingRef = useRef<HTMLParagraphElement>(null);
  const scrollBtnRef = useRef<HTMLButtonElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const { scrollTo } = useSmoothScroll();

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // 1. Orange rule scales scaleX 0 -> 1 (origin left)
      tl.fromTo(
        orangeRuleRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.6 }
      );

      // 2. Headline lines slide up from overflow masks
      tl.fromTo(
        [headlineLine1Ref.current, headlineLine2Ref.current],
        { yPercent: 110 },
        { yPercent: 0, duration: 1.1, stagger: 0.1 },
        "-=0.4"
      );

      // 3. Portrait scales 1.05 -> 1 and fades in smoothly
      tl.fromTo(
        portraitRef.current,
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4 },
        0.2
      );

      // 4. Supporting copy and right rail fade & slide up
      tl.fromTo(
        [supportingRef.current, railRef.current],
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
        "-=0.8"
      );

      // 5. Scroll button fades in
      tl.fromTo(
        scrollBtnRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6 },
        "-=0.4"
      );

      // Subtle parallax on portrait scrub (travel < 10%)
      gsap.to(portraitRef.current, {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[calc(100svh-4.5rem)] flex flex-col justify-between bg-[var(--bg)] border-b border-[var(--line)] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 pt-6 sm:pt-10 pb-0 flex-1 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-6 justify-between items-end">
        
        {/* Left Column: Headline, Thesis, CTA (z-20) */}
        <div className="w-full lg:col-span-5 z-20 flex flex-col justify-center pb-8 sm:pb-12 lg:pb-16 space-y-6">
          {/* Orange Rule */}
          <div
            ref={orangeRuleRef}
            className="w-16 h-[3px] bg-[var(--accent)]"
          />

          {/* 2-Line Headline with line-masks */}
          <h1 className="text-display text-[var(--text)] tracking-tight">
            <span className="block overflow-hidden py-1">
              <span ref={headlineLine1Ref} className="block">
                I&apos;m E-jay, a
              </span>
            </span>
            <span className="block overflow-hidden py-1 text-[var(--text)]">
              <span ref={headlineLine2Ref} className="block">
                Full-Stack Developer
              </span>
            </span>
          </h1>

          {/* Supporting line (max 38ch) */}
          <p
            ref={supportingRef}
            className="text-sm sm:text-base text-[var(--text-muted)] max-w-[38ch] leading-relaxed"
          >
            I build full-stack web applications, mobile systems, and normalized databases that hold up in production.
          </p>

          {/* Circular 56px Orange Scroll Button */}
          <div className="pt-2">
            <button
              ref={scrollBtnRef}
              type="button"
              onClick={() => scrollTo("#about")}
              aria-label="Scroll to About section"
              className="w-14 h-14 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-press)] flex items-center justify-center text-[var(--on-accent)] transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-none focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              <ArrowDown className="w-5 h-5 animate-bounce" style={{ animationDuration: "2.4s" }} />
            </button>
          </div>
        </div>

        {/* Center: Full Uncut Portrait with Soft Silhouette Backlight (z-10) */}
        <div
          ref={portraitRef}
          className="w-full lg:col-span-4 z-10 flex justify-center items-end relative h-[420px] sm:h-[520px] lg:h-[620px]"
        >
          {/* Subtle warm backlight plate to separate black t-shirt from dark ground */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 w-3/4 h-3/5 rounded-full pointer-events-none opacity-45"
            style={{
              background: "radial-gradient(ellipse at center, oklch(0.28 0.01 60) 0%, transparent 70%)",
            }}
          />

          <div className="relative w-full h-full flex items-end justify-center">
            <Image
              src="/E-jay Hero Section.png"
              alt="E-jay P. Detera — Portrait"
              width={600}
              height={800}
              priority
              className="h-full w-auto max-w-none object-contain object-bottom select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        {/* Right Rail: 3 Stacked Blocks with Hairline Dividers (z-20) */}
        <div
          ref={railRef}
          className="w-full lg:col-span-3 z-20 pb-8 sm:pb-12 lg:pb-16 flex flex-col gap-6 lg:pl-4 divide-y divide-[var(--line)]"
        >
          {/* Block 1: About Me */}
          <div className="space-y-2 pt-2 first:pt-0">
            <span className="text-eyebrow text-[var(--accent)]">/ ABOUT ME</span>
            <p className="text-sm text-[var(--text-muted)] leading-snug">
              BSIT Student at PUP Quezon City campus architecting resilient software.
            </p>
            <button
              type="button"
              onClick={() => scrollTo("#about")}
              className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[var(--text)] hover:text-[var(--accent)] transition-colors cursor-pointer"
            >
              <span>Learn more</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Block 2: My Work */}
          <div className="space-y-2 pt-5">
            <span className="text-eyebrow text-[var(--accent)]">/ MY WORK</span>
            <p className="text-sm text-[var(--text-muted)] leading-snug">
              8+ production & hackathon systems shipped across web, mobile, and DB.
            </p>
            <button
              type="button"
              onClick={() => scrollTo("#projects")}
              className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[var(--text)] hover:text-[var(--accent)] transition-colors cursor-pointer"
            >
              <span>Browse systems</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Block 3: Follow Me */}
          <div className="space-y-2 pt-5">
            <span className="text-eyebrow text-[var(--accent)]">/ FOLLOW ME</span>
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://github.com/ejay-detera"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors p-1"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/e-jay-detera-56221532b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors p-1"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:edetera41@gmail.com"
                aria-label="Send direct email"
                className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors p-1"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
