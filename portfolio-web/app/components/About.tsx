"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSmoothScroll } from "./SmoothScrollProvider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PARTNERS = [
  "Commonwealth Information Society",
  "Google Developers Group on Campus",
  "PUP Quezon City",
  "Freelance & Client Commissions",
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stat1Ref = useRef<HTMLSpanElement>(null);
  const stat2Ref = useRef<HTMLSpanElement>(null);
  const { scrollTo } = useSmoothScroll();

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      // Count up for stat 1 (8+)
      const obj1 = { val: 0 };
      gsap.to(obj1, {
        val: 8,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stat1Ref.current,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          if (stat1Ref.current) {
            stat1Ref.current.textContent = `${Math.floor(obj1.val)}+`;
          }
        },
      });

      // Count up for stat 2 (7)
      const obj2 = { val: 0 };
      gsap.to(obj2, {
        val: 7,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stat2Ref.current,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          if (stat2Ref.current) {
            stat2Ref.current.textContent = `${Math.floor(obj2.val)}`;
          }
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center py-16 sm:py-24 bg-[var(--bg-raised)] border-b border-[var(--line)]"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        
        {/* Eyebrow */}
        <div>
          <span className="text-eyebrow text-[var(--accent)]">/ ABOUT ME</span>
        </div>

        {/* 2-Column Split: Narrative vs Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: H2 + Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-h2 text-[var(--text)] tracking-tight">
              I&apos;ve been building systems since 2023
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[var(--text-body)] leading-relaxed max-w-[62ch]">
              <p>
                I am a full-stack developer and Information Technology student at the{" "}
                <span className="text-[var(--text)] font-semibold">
                  Polytechnic University of the Philippines - Quezon City Campus
                </span>
                .
              </p>
              <p>
                My focus centers on architecting clean relational databases, resilient backend API boundaries, and responsive frontend systems. From disaster-response telemetry to AI-assisted caregiving and point-of-sale inventory auditing, I enjoy turning complicated operational constraints into software that runs without fuss.
              </p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => scrollTo("#experience")}
                className="group inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--text)] hover:text-[var(--accent)] transition-colors cursor-pointer"
              >
                <span>More about me</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Two Large Dandelion Stat Numerals */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 pt-2 lg:pt-0">
            <div className="space-y-2 border-l border-[var(--line)] pl-6">
              <div className="text-stat text-[var(--highlight)]">
                <span ref={stat1Ref}>8+</span>
              </div>
              <p className="text-xs uppercase font-medium tracking-wider text-[var(--text-muted)]">
                Shipped Systems
              </p>
            </div>

            <div className="space-y-2 border-l border-[var(--line)] pl-6">
              <div className="text-stat text-[var(--highlight)]">
                <span ref={stat2Ref}>7</span>
              </div>
              <p className="text-xs uppercase font-medium tracking-wider text-[var(--text-muted)]">
                Verified Credentials
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Hairline + PREVIOUSLY WORKED WITH Wordmarks */}
        <div className="pt-8 sm:pt-12 border-t border-[var(--line)] space-y-5">
          <div className="text-eyebrow text-[var(--text-muted)]">
            PREVIOUSLY WORKED WITH
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {PARTNERS.map((partner) => (
              <div
                key={partner}
                className="text-xs sm:text-sm font-medium tracking-tight text-[var(--text-muted)] hover:text-[var(--text)] transition-colors leading-tight"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
