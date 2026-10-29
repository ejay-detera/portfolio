"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SKILL_GROUPS = [
  {
    index: "01",
    title: "Frontend Web",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    index: "02",
    title: "Mobile & Cross-Platform",
    skills: ["React Native", "Flutter", "Dart", "Mobile UI Patterns", "Offline-First Sync"],
  },
  {
    index: "03",
    title: "Backend & Systems",
    skills: ["Laravel", "PHP", "Node.js", "C# (.NET / WinForms)", "Python", "REST APIs"],
  },
  {
    index: "04",
    title: "Databases & Storage",
    skills: ["PostgreSQL", "MySQL", "MSSQL", "Supabase", "SQLite", "Database Normalization (ERD)"],
  },
  {
    index: "05",
    title: "AI & Blockchain SDKs",
    skills: ["Google Gemini API", "Prompt Engineering", "NLP Processing", "Stellar SDK", "PAGASA Telemetry API"],
  },
  {
    index: "06",
    title: "Infrastructure & Tooling",
    skills: ["Git & GitHub", "Docker", "Nginx", "Figma", "Postman", "Mabl Automated QA"],
  },
];

export default function Skills() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(3);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  // Calculate visible columns and max index based on viewport width
  const updateBounds = useCallback(() => {
    if (typeof window === "undefined") return;
    const w = window.innerWidth;
    const visibleCols = w >= 1024 ? 3 : w >= 640 ? 2 : 1;
    const newMax = Math.max(0, SKILL_GROUPS.length - visibleCols);
    setMaxIndex(newMax);
    setCurrentIndex((prev) => Math.min(prev, newMax));
  }, []);

  useEffect(() => {
    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, [updateBounds]);

  // Animate track position and card contents whenever currentIndex changes
  const animateToIndex = useCallback(
    (nextIdx: number, dir: "forward" | "backward") => {
      if (!trackRef.current || !cardRefs.current[0]) return;

      const cardWidth = cardRefs.current[0].offsetWidth;
      const targetX = -nextIdx * cardWidth;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // 1. Glide track horizontally with GSAP
      gsap.to(trackRef.current, {
        x: targetX,
        duration: prefersReducedMotion ? 0 : 0.7,
        ease: "power3.inOut",
        overwrite: "auto",
      });

      if (prefersReducedMotion) return;

      // 2. Animate cards and their skill rows for tactile visual feedback on change
      const shiftX = dir === "forward" ? 28 : -28;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const heading = card.querySelector("h3");
        const items = card.querySelectorAll("li");

        gsap.fromTo(
          card,
          { opacity: 0.55 },
          {
            opacity: 1,
            duration: 0.55,
            ease: "expo.out",
            overwrite: "auto",
          }
        );

        if (heading) {
          gsap.fromTo(
            heading,
            { x: shiftX * 0.6, opacity: 0.4 },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "expo.out",
              overwrite: "auto",
            }
          );
        }

        if (items.length) {
          gsap.fromTo(
            items,
            { x: shiftX, opacity: 0.25 },
            {
              x: 0,
              opacity: 1,
              duration: 0.65,
              stagger: 0.035,
              ease: "expo.out",
               delay: (i - nextIdx) * 0.03 > 0 ? (i - nextIdx) * 0.03 : 0,
              overwrite: "auto",
            }
          );
        }
      });
    },
    []
  );

  const currentIndexRef = useRef(0);

  // Sync track x only on window resize
  useEffect(() => {
    const handleResize = () => {
      if (!trackRef.current || !cardRefs.current[0]) return;
      const cardWidth = cardRefs.current[0].offsetWidth;
      gsap.set(trackRef.current, { x: -currentIndexRef.current * cardWidth });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (currentIndex <= 0) return;
    const nextIdx = Math.max(0, currentIndex - 1);
    const nextDir: "forward" | "backward" = nextIdx === 0 ? "forward" : "backward";
    currentIndexRef.current = nextIdx;
    setDirection(nextDir);
    setCurrentIndex(nextIdx);
    animateToIndex(nextIdx, "backward");
  };

  const handleNext = () => {
    if (currentIndex >= maxIndex) return;
    const nextIdx = Math.min(maxIndex, currentIndex + 1);
    const nextDir: "forward" | "backward" = nextIdx >= maxIndex ? "backward" : "forward";
    currentIndexRef.current = nextIdx;
    setDirection(nextDir);
    setCurrentIndex(nextIdx);
    animateToIndex(nextIdx, "forward");
  };

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const atStart = currentIndex <= 0;
  const atEnd = currentIndex >= maxIndex;

  // Dynamic orange highlight:
  // Orange is on Right while advancing; once the end is reached, Orange switches to Left to return
  const isLeftOrange = atEnd || (direction === "backward" && !atStart);
  const isRightOrange = !isLeftOrange;

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center py-16 sm:py-24 bg-[var(--bg)] border-b border-[var(--line)]"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 space-y-12">

        {/* Header Bar: Title + Dynamic Circular Navigation Buttons (hidden on mobile, swipe used instead) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
          <div className="space-y-3">
            <span className="text-eyebrow text-[var(--accent)]">/ MY SKILLS</span>
            <h2 className="text-h2 text-[var(--text)] tracking-tight">
              An extensive list of skills
            </h2>
          </div>

          {/* Prev/Next Circular 56px Buttons: hidden on mobile, swipe replaces it */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              disabled={atStart}
              aria-label="Previous skill group"
              className={`group w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[var(--accent)] ${
                isLeftOrange
                  ? "bg-[var(--accent)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-press)] text-[var(--on-accent)] cursor-pointer hover:scale-105 active:scale-95"
                  : atStart
                  ? "border border-[var(--line)] text-[var(--text-faint)] opacity-45 cursor-not-allowed"
                  : "border border-[var(--line-strong)] hover:border-[var(--text)] text-[var(--text)] cursor-pointer"
              }`}
            >
              <ArrowLeft
                className={`w-5 h-5 transition-transform duration-200 ${
                  !atStart ? "group-hover:-translate-x-1" : ""
                }`}
              />
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={atEnd}
              aria-label="Next skill group"
              className={`group w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[var(--accent)] ${
                isRightOrange
                  ? "bg-[var(--accent)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-press)] text-[var(--on-accent)] cursor-pointer hover:scale-105 active:scale-95"
                  : atEnd
                  ? "border border-[var(--line)] text-[var(--text-faint)] opacity-45 cursor-not-allowed"
                  : "border border-[var(--line-strong)] hover:border-[var(--text)] text-[var(--text)] cursor-pointer"
              }`}
            >
              <ArrowRight
                className={`w-5 h-5 transition-transform duration-200 ${
                  !atEnd ? "group-hover:translate-x-1" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Animated Horizontal Track Viewport with Touch Swipe */}
        <div
          ref={viewportRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="relative overflow-hidden border-y border-[var(--line)] select-none touch-pan-y"
        >
          {/* Top Hairline Progress Indicator */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent z-10 pointer-events-none">
            <div
              className="h-full bg-[var(--accent)] transition-transform duration-500 ease-out origin-left"
              style={{
                transform: `scaleX(${maxIndex > 0 ? (currentIndex + 1) / (maxIndex + 1) : 1})`,
              }}
            />
          </div>

          <div
            ref={trackRef}
            className="flex divide-x divide-[var(--line)] will-change-transform"
          >
            {SKILL_GROUPS.map((group, idx) => (
              <div
                key={group.title}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-8 sm:p-10 space-y-6 bg-[var(--bg)] hover:bg-[var(--bg-raised)] transition-colors"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-h3 text-[var(--text)] tracking-tight">
                    {group.title}
                  </h3>
                  <span className="text-xs font-semibold tabular-nums text-[var(--text-faint)]">
                    {group.index}
                  </span>
                </div>
                <ul className="space-y-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm sm:text-base text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

