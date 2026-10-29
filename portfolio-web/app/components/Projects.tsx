"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, LayoutGroup } from "motion/react";
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

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.filterCategory === activeFilter);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 sm:py-28 bg-[var(--bg-raised)] border-b border-[var(--line)]"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header + Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
          <div className="space-y-3">
            <span className="text-eyebrow text-[var(--accent)]">/ SHIPPED SYSTEMS</span>
            <h2 className="text-h2 text-[var(--text)] tracking-tight">
              Built for real users and real load
            </h2>
          </div>

          {/* Filter Tabs with Sliding Motion Underline */}
          <div className="flex items-center gap-6 border-b border-[var(--line)] pb-2 overflow-x-auto">
            {FILTERS.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  className={`relative text-xs uppercase font-medium tracking-wider pb-2 transition-colors cursor-pointer ${
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
        </div>

        {/* Unified 01-08 Project Rows */}
        <LayoutGroup>
          <div className="border-t border-[var(--line)] divide-y divide-[var(--line)]">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedProject(project)}
                  className="group py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start cursor-pointer hover:bg-[var(--bg)]/50 transition-colors px-2 sm:px-4"
                >
                  {/* Left: Index & Meta */}
                  <div className="lg:col-span-1">
                    <span className="text-lg font-bold tabular-nums text-[var(--text-muted)] group-hover:text-[var(--highlight)] transition-colors">
                      {project.index}
                    </span>
                  </div>

                  {/* Center: Title, Subtitle, Highlights & Stack */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-h3 text-[var(--text)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)]">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-[var(--text-body)] leading-relaxed max-w-[58ch]">
                      {project.description}
                    </p>

                    <ul className="space-y-1.5 pt-1">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-[var(--text-muted)]"
                        >
                          <span className="text-[var(--accent)] select-none">—</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Plain Comma-Separated Stack (No Pills!) */}
                    <div className="pt-2 text-xs text-[var(--text-faint)]">
                      <span className="text-[var(--text-muted)] font-medium">Stack: </span>
                      <span>{project.tech.join(", ")}</span>
                    </div>
                  </div>

                  {/* Right: Screenshot Plate (0 radius, 1px hairline border) */}
                  <div className="lg:col-span-4 flex flex-col items-end gap-3">
                    <div className="relative aspect-[16/10] w-full overflow-hidden border border-[var(--line)] bg-[var(--bg-sunken)]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 360px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-[var(--accent)] group-hover:translate-x-1 transition-transform">
                      Expand system details →
                    </span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </LayoutGroup>

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
