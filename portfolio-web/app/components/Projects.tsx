"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { spring } from "../lib/motion";
import { useSmoothScroll } from "./SmoothScrollProvider";

export interface Project {
  id: string;
  index: string;
  title: string;
  category: "Hackathon Systems" | "School Works" | "Commissions";
  filterCategory: "Hackathon" | "School" | "Commissions";
  subtitle: string;
  description: string;
  longDescription: string;
  highlights: string[];
  tech: string[];
  image: string;
  githubLink: string;
  githubMobileLink?: string;
  liveLink?: string;
}

const PROJECTS: Project[] = [
  {
    id: "floodguard",
    index: "01",
    title: "Floodguard",
    category: "Hackathon Systems",
    filterCategory: "Hackathon",
    subtitle: "Real-Time Flood Level Monitoring & Offline SOS",
    description:
      "Real-time flood level alerts and emergency signaling powered by live PAGASA API hydrometeorological telemetry.",
    longDescription:
      "Floodguard provides live flood alerts and emergency response capabilities during severe weather disturbances. It ingests PAGASA API streams to track water levels and broadcast immediate advisories. Stranded citizens can transmit offline SOS beacons when data connectivity is lost.",
    highlights: [
      "Real-time flood telemetry integration via PAGASA API data streams",
      "Offline SOS beaconing protocol for disaster areas with cut connectivity",
      "Event-driven alerts and live flood level dashboards on Next.js & Supabase",
    ],
    tech: ["Next.js", "Supabase", "PAGASA API", "TypeScript", "Tailwind CSS"],
    image: "/flood-guard.jpg",
    githubLink: "https://github.com/Zanti00/floodguard-2",
  },
  {
    id: "reliefchain",
    index: "02",
    title: "ReliefChain",
    category: "Hackathon Systems",
    filterCategory: "Hackathon",
    subtitle: "Decentralized Aid Giving & Choice Platform",
    description:
      "Recipients choose their relief package (food stamps or cash) powered by the Stellar network for fast, near-zero fee aid disbursement.",
    longDescription:
      "ReliefChain empowers humanitarian aid recipients by giving them direct autonomy over relief types. Operating on the Stellar blockchain, the system avoids remittance fees and friction, coordinated through a recipient React Native app and coordinator Next.js portal.",
    highlights: [
      "Stellar SDK integration enabling near-zero fees and instant cryptographic relief disbursements",
      "Recipient allocation module allowing choice between food stamps or direct cash relief",
      "Cross-platform architecture: React Native client + Next.js admin dashboard on Supabase",
    ],
    tech: ["Next.js", "React Native", "Supabase", "Stellar SDK", "TypeScript"],
    image: "/relief-chain.png",
    githubLink: "https://github.com/ejay-detera/relief-chain-web",
    githubMobileLink: "https://github.com/ejay-detera/relief-chain",
  },
  {
    id: "memolink",
    index: "03",
    title: "Memolink",
    category: "Hackathon Systems",
    filterCategory: "Hackathon",
    subtitle: "Personalized AI Caregiver & Companion for Seniors",
    description:
      "AI caregiver companion for the elderly leveraging Gemini API & NLP, featuring medication scheduling and nostalgic memory archiving.",
    longDescription:
      "Memolink is an AI companion designed to assist senior citizens and family caregivers. Powered by Gemini API and NLP, it provides an empathetic conversational companion, recurring medication alert automation, and interactive storytelling for family memories.",
    highlights: [
      "Conversational AI companion personalized for senior citizens using Gemini API and NLP",
      "Caregiver dashboard for automated recurring medication scheduling",
      "Interactive Memory Lane feature capturing nostalgic life moments via Supabase",
    ],
    tech: ["React Native", "Supabase", "Gemini API", "NLP", "TypeScript"],
    image: "/memo-link.png",
    githubLink: "https://github.com/ejay-detera/memolink",
  },
  {
    id: "loreforge",
    index: "04",
    title: "LoreForge",
    category: "School Works",
    filterCategory: "School",
    subtitle: "AI-Powered Narrative RPG & Campaign Engine",
    description:
      "Turn-based RPG orchestrating dynamic campaign narratives, combat encounters, and item discoveries via structured Gemini API output.",
    longDescription:
      "LoreForge was built independently for an Advanced Database & Emerging Technologies course. It utilizes Google's Gemini API to generate dynamic story branching, encounter calculations, and NPC dialogue across Fantasy, Sci-Fi, and Horror settings.",
    highlights: [
      "Dynamic prompt engineering with structured JSON schema outputs from Gemini API",
      "Relational MySQL schema tracking multi-branch narrative states and player inventory",
      "Reactive player UI built with React hooked to a Laravel REST API",
    ],
    tech: ["Laravel", "React", "MySQL", "Gemini API", "Tailwind CSS"],
    image: "/LoreForge.jpg",
    githubLink: "https://github.com/ejay-detera/loreforge",
  },
  {
    id: "aigo",
    index: "05",
    title: "AiGO",
    category: "School Works",
    filterCategory: "School",
    subtitle: "AI-Driven Itinerary & Travel Budgeting Platform",
    description:
      "Generative AI travel planner delivering itemized schedules, geo-tagged Unsplash visual assets, and multi-traveler budget calculation.",
    longDescription:
      "AiGO automates personalized itinerary generation. Users provide trip parameters to receive optimized travel schedules alongside Unsplash photography, supported by a community itinerary-sharing ledger.",
    highlights: [
      "Multi-agent prompt pipelining for parallel itinerary generation and budget calculations",
      "Unsplash API caching layer reducing outbound latency and quota exhaustion",
      "MSSQL database schema with stored procedures for community ratings",
    ],
    tech: ["Laravel", "React", "MSSQL", "Gemini API", "Unsplash API"],
    image: "/AiGO.jpg",
    githubLink: "https://github.com/MaChewwwww/AiGO",
  },
  {
    id: "marekwenta",
    index: "06",
    title: "MareKwenta POS",
    category: "School Works",
    filterCategory: "School",
    subtitle: "Point-of-Sale & Raw-Ingredient Inventory System",
    description:
      "Desktop point-of-sale for Mare Cafe coordinating checkout, transaction auditing, and automatic raw-ingredient inventory deduction.",
    longDescription:
      "A desktop POS engineered in C# WinForms for Mare Cafe. It manages order dispatching, physical receipt generation, raw-ingredient level stock deduction per recipe, and end-of-day revenue auditing.",
    highlights: [
      "Atomic SQLite transactions preventing inventory desynchronization during high bursts",
      "Modular Object-Oriented C# WinForms architecture with strict separation of concerns",
      "Dynamic recipe-to-inventory deduction algorithm mapping menu items to grams of stock",
    ],
    tech: ["C#", "SQLite", "WinForms", ".NET Framework"],
    image: "/MareKwenta POS.jpg",
    githubLink: "https://github.com/ejay-detera/MareKwenta-POS",
  },
  {
    id: "cyperus",
    index: "07",
    title: "Cyperus",
    category: "Commissions",
    filterCategory: "Commissions",
    subtitle: "AI-Powered Adaptive E-Commerce Marketplace",
    description:
      "Commissioned capstone e-commerce platform that observes customer browsing patterns to provide hyper-personalized recommendations.",
    longDescription:
      "Cyperus was developed as a commissioned capstone application. The platform adapts storefront recommendations based on search history and category interaction. Served as lead full-stack developer on the catalog, cart, and order pipeline.",
    highlights: [
      "Server-side rendered Next.js catalog ensuring search indexing and fast load times",
      "PostgreSQL normalized database with indexes for product search and filtering",
      "Modular API routes handling checkout workflows and inventory reservation",
    ],
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    image: "/Cyperus.jpg",
    githubLink: "https://github.com/MaChewwwww/Cyperus",
  },
  {
    id: "trustmart",
    index: "08",
    title: "TrustMart",
    category: "Commissions",
    filterCategory: "Commissions",
    subtitle: "Security-First AI E-Commerce Platform",
    description:
      "E-commerce solution with role-based access control, merchant verification workflows, and fraud deterrence mechanisms.",
    longDescription:
      "TrustMart was commissioned to demonstrate secure commerce architecture. Built role-based access control separating platform admins, merchant storefronts, and shoppers, backed by relational data integrity and transaction rollbacks.",
    highlights: [
      "Role-Based Access Control (RBAC) separating admins, merchant stores, and customer accounts",
      "PostgreSQL relational models with foreign-key constraints and transaction rollbacks",
      "Responsive frontend delivering desktop-grade speed on mobile browsers",
    ],
    tech: ["Next.js", "PostgreSQL", "Node.js", "Tailwind CSS"],
    image: "/TrustMart.jpg",
    githubLink: "https://github.com/MaChewwwww/TrustMart",
  },
];

const FILTERS = ["All", "Hackathon", "School", "Commissions"] as const;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { stop, start } = useSmoothScroll();

  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const currentIndexRef = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(6);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.filterCategory === activeFilter);

  const updateBounds = useCallback(
    (itemCount: number) => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      const visibleCols = w >= 1024 ? 2 : 1;
      const newMax = Math.max(0, itemCount - visibleCols);
      setMaxIndex(newMax);
      setCurrentIndex((prev) => {
        const clamped = Math.min(prev, newMax);
        currentIndexRef.current = clamped;
        return clamped;
      });
    },
    []
  );

  useEffect(() => {
    updateBounds(filteredProjects.length);
    const onResize = () => {
      updateBounds(filteredProjects.length);
      if (trackRef.current && cardRefs.current[0]) {
        const cardWidth = cardRefs.current[0].offsetWidth;
        gsap.set(trackRef.current, { x: -currentIndexRef.current * cardWidth });
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [filteredProjects.length, updateBounds]);

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

      // 2. Animate system cards, titles, highlights, and screenshot plates
      const shiftX = dir === "forward" ? 32 : -32;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const heading = card.querySelector("h3");
        const bodyItems = card.querySelectorAll(".system-anim-item");
        const plate = card.querySelector(".system-plate");

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

        if (plate) {
          gsap.fromTo(
            plate,
            { scale: 0.96, opacity: 0.5 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.65,
              ease: "expo.out",
              overwrite: "auto",
            }
          );
        }

        if (heading) {
          gsap.fromTo(
            heading,
            { x: shiftX * 0.6, opacity: 0.35 },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "expo.out",
              overwrite: "auto",
            }
          );
        }

        if (bodyItems.length) {
          gsap.fromTo(
            bodyItems,
            { x: shiftX, opacity: 0.25 },
            {
              x: 0,
              opacity: 1,
              duration: 0.65,
              stagger: 0.04,
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

  const handleFilterChange = (tab: string) => {
    setActiveFilter(tab);
    currentIndexRef.current = 0;
    setCurrentIndex(0);
    setDirection("forward");
    if (trackRef.current) {
      gsap.to(trackRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto",
      });
    }
    requestAnimationFrame(() => {
      animateToIndex(0, "forward");
    });
  };

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

  useEffect(() => {
    if (selectedProject) {
      stop();
    } else {
      start();
    }
  }, [selectedProject, stop, start]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const atStart = currentIndex <= 0;
  const atEnd = currentIndex >= maxIndex;

  // Dynamic orange highlight:
  // Orange is on Right while advancing; once the end is reached, Orange switches to Left to return
  const isLeftOrange = (atEnd && !atStart) || (direction === "backward" && !atStart);
  const isRightOrange = !isLeftOrange && !atEnd;

  return (
    <section
      id="projects"
      className="relative min-h-[calc(100dvh-4.5rem)] lg:h-[calc(100dvh-4.5rem)] lg:max-h-[calc(100dvh-4.5rem)] flex flex-col justify-center py-6 sm:py-8 lg:py-10 bg-[var(--bg-raised)] border-b border-[var(--line)] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 space-y-4 sm:space-y-6 flex flex-col justify-center">
        
        {/* Section Header + Filter Tabs + Prev/Next Circular Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-1">
          <div className="space-y-2">
            <span className="text-eyebrow text-[var(--accent)]">/ SHIPPED SYSTEMS</span>
            <h2 className="text-h2 text-[var(--text)] tracking-tight">
              Built for real users and real load
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-5">
            {/* Filter Tabs with Sliding Motion Underline */}
            <div className="flex items-center gap-5 border-b border-[var(--line)] pb-1.5 overflow-x-auto">
              {FILTERS.map((tab) => {
                const isActive = activeFilter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => handleFilterChange(tab)}
                    className={`relative text-xs uppercase font-medium tracking-wider pb-1.5 transition-colors cursor-pointer ${
                      isActive ? "text-[var(--text)] font-semibold" : "text-[var(--text-muted)] hover:text-[var(--text)]"
                    }`}
                  >
                    <span>{tab}</span>
                    {isActive && (
                      <motion.div
                        layoutId="project-filter-underline"
                        className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[var(--accent)]"
                        transition={spring}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Prev/Next Circular 56px Buttons: hidden on mobile, swipe used instead */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                disabled={atStart}
                aria-label="Previous system"
                className={`group w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[var(--accent)] ${
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
                aria-label="Next system"
                className={`group w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[var(--accent)] ${
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
        </div>

        {/* Animated Horizontal Systems Track with Touch Swipe */}
        <div
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
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onClick={() => setSelectedProject(project)}
                className="w-full lg:w-1/2 flex-shrink-0 p-4 sm:p-5 lg:p-6 flex flex-col justify-between gap-3 sm:gap-4 cursor-pointer bg-[var(--bg-raised)] hover:bg-[var(--bg)]/60 transition-colors group"
              >
                <div className="space-y-3">
                  {/* Top Row: Constrained Screenshot Plate */}
                  <div className="system-plate relative h-[170px] sm:h-[190px] lg:h-[200px] w-full overflow-hidden border border-[var(--line)] bg-[var(--bg-sunken)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 540px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Header: Index + Category + Title */}
                  <div className="space-y-1">
                    <div className="system-anim-item flex items-center justify-between text-xs">
                      <span className="text-eyebrow text-[var(--accent)]">
                        {project.category}
                      </span>
                      <span className="font-bold tabular-nums text-[var(--text-muted)] group-hover:text-[var(--highlight)] transition-colors">
                        {project.index}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="system-anim-item text-xs sm:text-sm text-[var(--text-muted)] line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="system-anim-item text-xs sm:text-sm text-[var(--text-body)] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Footer: Stack & Expand Action */}
                <div className="system-anim-item pt-2.5 border-t border-[var(--line)] flex items-center justify-between gap-4">
                  <div className="text-xs text-[var(--text-faint)] truncate max-w-[70%]">
                    <span className="text-[var(--text-muted)] font-medium">Stack: </span>
                    <span>{project.tech.join(", ")}</span>
                  </div>
                  <span className="shrink-0 text-xs font-semibold tracking-wider uppercase text-[var(--accent)] group-hover:translate-x-1 transition-transform">
                    Expand →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>

      {/* In-Place Shared Layout / Modal Expand (Flat 92% --bg, zero blur) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10"
            style={{ backgroundColor: "oklch(0.19 0.005 60 / 0.92)" }}
            data-lenis-prevent
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--bg)] border border-[var(--line)] p-6 sm:p-10 space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] pb-5">
                <div>
                  <div className="text-eyebrow text-[var(--accent)]">
                    {selectedProject.category} · {selectedProject.index}
                  </div>
                  <h3 className="text-h2 text-[var(--text)] tracking-tight mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 border border-[var(--line)] text-[var(--text)] hover:border-[var(--text)] cursor-pointer"
                >
                  Close [ESC]
                </button>
              </div>

              {/* Full Screenshot */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-[var(--line)] bg-[var(--bg-sunken)]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="800px"
                  className="object-cover object-top"
                />
              </div>

              {/* Detailed Narrative */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase font-semibold tracking-wider text-[var(--text-muted)]">
                  Architecture & Systems Narrative
                </h4>
                <p className="text-sm sm:text-base text-[var(--text-body)] leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Architecture Highlights */}
              <div className="space-y-2 border-t border-[var(--line)] pt-4">
                <h4 className="text-xs uppercase font-semibold tracking-wider text-[var(--text-muted)]">
                  Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-body)]">
                      <span className="text-[var(--accent)] select-none">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions & Repositories */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line)] pt-5">
                <div className="text-xs text-[var(--text-faint)]">
                  <span className="text-[var(--text-muted)] font-medium">Stack: </span>
                  {selectedProject.tech.join(", ")}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-[var(--accent)] text-[var(--on-accent)] hover:bg-[var(--accent-hover)] transition-colors cursor-pointer"
                  >
                    <span>View Repository</span>
                    <span>↗</span>
                  </a>
                  {selectedProject.githubMobileLink && (
                    <a
                      href={selectedProject.githubMobileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase border border-[var(--line)] text-[var(--text)] hover:border-[var(--text)] transition-colors cursor-pointer"
                    >
                      <span>Mobile Repo</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
