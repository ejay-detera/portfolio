"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail } from "lucide-react";
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
  const glowRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const supportingRef = useRef<HTMLParagraphElement>(null);
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

      // 3. Light turning on & spreading animation behind portrait
      tl.fromTo(
        glowRef.current,
        { scale: 0.15, opacity: 0, filter: "blur(20px)" },
        { scale: 1, opacity: 1, filter: "blur(54px)", duration: 1.5, ease: "power3.out" },
        0.15
      );

      // Continuous subtle ambient warm breathing
      gsap.to(glowRef.current, {
        scale: 1.08,
        opacity: 0.85,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.7,
      });

      // 4. Portrait scales and fades in smoothly
      tl.fromTo(
        portraitRef.current,
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4 },
        0.2
      );

      // 5. Supporting copy and right rail fade & slide up
      tl.fromTo(
        [supportingRef.current, railRef.current],
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
        "-=0.8"
      );

      // Subtle parallax on portrait scrub (travel <= 3%)
      gsap.to(portraitRef.current, {
        yPercent: 3,
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
      className="relative h-[calc(100dvh-4.5rem)] max-h-[calc(100dvh-4.5rem)] flex flex-col justify-between bg-[var(--bg)] border-b border-[var(--line)] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1200px] h-full px-5 sm:px-8 lg:px-12 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-6 items-center">

        {/* Left Column: Headline & Thesis (z-20) */}
        <div className="w-full lg:col-span-5 z-20 flex flex-col justify-center shrink-0 self-start lg:self-center pt-2 sm:pt-4 lg:pt-0 lg:translate-y-4 space-y-3 sm:space-y-4 lg:space-y-5">
          {/* Orange Rule */}
          <div
            ref={orangeRuleRef}
            className="w-12 sm:w-16 h-[3px] bg-[var(--accent)]"
          />

          {/* 2-Line Headline with line-masks */}
          <h1 className="text-display text-[var(--text)] tracking-tight">
            <span className="block overflow-hidden py-0.5 lg:py-1">
              <span ref={headlineLine1Ref} className="block">
                I&apos;m E-jay, a
              </span>
            </span>
            <span className="block overflow-hidden py-0.5 lg:py-1 text-[var(--text)]">
              <span ref={headlineLine2Ref} className="block">
                Full-Stack Developer
              </span>
            </span>
          </h1>

          {/* Supporting line (max 38ch) */}
          <p
            ref={supportingRef}
            className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] max-w-[34ch] lg:max-w-[38ch] leading-relaxed"
          >
            I build full-stack web applications, mobile systems, and normalized databases that hold up in production.
          </p>
        </div>

        {/* Center: Hero Portrait anchored flush to bottom border with glowing backlight (z-10) */}
        <div
          ref={portraitRef}
          className="w-full lg:col-span-4 z-10 flex-1 lg:flex-none flex justify-center items-end self-end relative h-full mx-auto overflow-visible"
        >
          {/* Main glowing light turning on / spreading behind portrait */}
          <div
            ref={glowRef}
            aria-hidden="true"
            className="absolute top-[10%] sm:top-[12%] left-1/2 -translate-x-1/2 w-[300px] sm:w-[420px] lg:w-[540px] h-[300px] sm:h-[420px] lg:h-[540px] rounded-full pointer-events-none -z-10"
            style={{
              background: "radial-gradient(circle at 50% 50%, oklch(0.70 0.19 48 / 0.55) 0%, oklch(0.87 0.16 92 / 0.28) 35%, oklch(0.70 0.19 48 / 0.12) 60%, transparent 75%)",
              filter: "blur(50px)",
            }}
          />

          {/* Secondary tighter warm halo behind head & glasses */}
          <div
            aria-hidden="true"
            className="absolute top-[14%] sm:top-[16%] left-1/2 -translate-x-1/2 w-44 sm:w-56 lg:w-64 h-44 sm:h-56 lg:h-64 rounded-full pointer-events-none -z-10 opacity-75"
            style={{
              background: "radial-gradient(circle at 50% 50%, oklch(0.87 0.16 92 / 0.40) 0%, oklch(0.70 0.19 48 / 0.22) 45%, transparent 70%)",
              filter: "blur(26px)",
            }}
          />

          <div className="relative w-full h-full flex items-end justify-center overflow-visible">
            <Image
              src="/ejay-hoodie-cropped.png"
              alt="E-jay P. Detera — Portrait"
              width={740}
              height={1052}
              priority
              className="h-[92%] sm:h-[88%] lg:h-[84%] w-auto max-w-none shrink-0 select-none drop-shadow-[0_6px_36px_rgba(0,0,0,0.85)] translate-y-[1px]"
            />
          </div>
        </div>

        {/* Right Rail: Desktop-only 3 Stacked Blocks with Hairline Dividers (z-20) */}
        <div
          ref={railRef}
          className="hidden lg:flex w-full lg:col-span-3 z-20 self-center lg:translate-y-4 flex-col gap-6 lg:pl-4 divide-y divide-[var(--line)]"
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
