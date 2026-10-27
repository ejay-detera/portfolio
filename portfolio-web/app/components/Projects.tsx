"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export interface Project {
  id: string;
  title: string;
  category: "Hackathon Systems" | "School Works" | "Commissions";
  badge: string;
  subtitle: string;
  description: string;
  longDescription: string;
  architectureHighlights: string[];
  tech: string[];
  image: string;
  githubLink: string;
  githubMobileLink?: string;
  liveLink?: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  // ---------------- HACKATHON SYSTEMS ----------------
  {
    id: "floodguard",
    title: "Floodguard",
    category: "Hackathon Systems",
    badge: "Disaster Tech",
    subtitle: "Real-Time Flood Level Monitoring & Offline SOS",
    description:
      "Real-time flood level monitoring alerts with offline SOS emergency signaling powered by PAGASA API telemetry.",
    longDescription:
      "Floodguard provides real-time flood monitoring alerts and emergency response capabilities during severe weather disturbances. It integrates the Philippine Atmospheric, Geophysical and Astronomical Services Administration (PAGASA) API to ingest live hydrometeorological data, track water level thresholds, and broadcast immediate advisories to at-risk communities. An offline SOS feature allows stranded citizens to transmit emergency distress beacons even when cellular and data connectivity fail.",
    architectureHighlights: [
      "Real-time flood telemetry integration via PAGASA API data streams",
      "Offline SOS emergency beaconing protocol for disaster-stricken areas with compromised connectivity",
      "Reactive event-driven alerts and live flood level dashboards built on Next.js and Supabase",
    ],
    tech: ["Next.js", "Supabase", "PAGASA API", "TypeScript", "Tailwind CSS"],
    image: "/flood-guard.jpg",
    githubLink: "https://github.com/Zanti00/floodguard-2",
    featured: true,
  },
  {
    id: "reliefchain",
    title: "ReliefChain",
    category: "Hackathon Systems",
    badge: "Crypto Relief",
    subtitle: "Decentralized Aid Giving & Choice Platform",
    description:
      "Relief giving made easier—recipients can pick and choose their relief type (food stamps, cash). Leverages Stellar cryptocurrency for cheaper, faster transactions.",
    longDescription:
      "ReliefChain revolutionizes humanitarian aid distribution by giving beneficiaries direct choice over their aid—empowering them to select between food stamps, essential vouchers, or direct cash relief. By utilizing the Stellar blockchain network, the platform minimizes transaction overhead and remittance delays, operating through a dedicated React Native mobile app for recipients and a Next.js administrative dashboard for relief coordinators.",
    architectureHighlights: [
      "Stellar SDK integration enabling near-zero transaction fees and instant cryptographic relief disbursements",
      "Custom relief allocation module allowing recipients to select food stamps or direct cash relief",
      "Cross-platform architecture: React Native mobile client for recipients & Next.js admin portal on Supabase",
    ],
    tech: ["Next.js", "React Native", "Supabase", "Stellar SDK", "TypeScript", "Tailwind CSS"],
    image: "/relief-chain.png",
    githubLink: "https://github.com/ejay-detera/relief-chain-web",
    githubMobileLink: "https://github.com/ejay-detera/relief-chain",
    featured: true,
  },
  {
    id: "memolink",
    title: "Memolink",
    category: "Hackathon Systems",
    badge: "AI Healthcare",
    subtitle: "Personalized AI Caregiver & Companion for Seniors",
    description:
      "Personalized AI caregiver companion for the elderly leveraging Gemini API & NLP, featuring medicine reminders, elderly-specific chatbot, and memory lane.",
    longDescription:
      "Memolink is an intelligent, personalized AI caregiver companion designed to support the elderly and their caregivers. Powered by Google's Gemini API and Natural Language Processing (NLP), the app provides a warm, conversational AI companion tailored to senior citizens, alongside an interactive 'Memory Lane' to preserve and recount cherished life stories. For family and professional caregivers, Memolink provides scheduling tools to input and automate critical medication reminders.",
    architectureHighlights: [
      "Empathetic conversational AI chatbot personalized for elderly care using Gemini API and NLP",
      "Caregiver dashboard for scheduling recurring medicine reminders and tracking patient wellness",
      "Interactive Memory Lane feature capturing nostalgic life moments and family stories via Supabase",
    ],
    tech: ["React Native", "Supabase", "Gemini API", "NLP", "TypeScript"],
    image: "/memo-link.png",
    githubLink: "https://github.com/ejay-detera/memolink",
    featured: true,
  },

  // ---------------- SCHOOL WORKS ----------------
  {
    id: "loreforge",
    title: "LoreForge",
    category: "School Works",
    badge: "Solo Project",
    subtitle: "AI-Powered Narrative RPG & Campaign Engine",
    description:
      "An AI-powered turn-based RPG dynamically orchestrating campaign narratives, combat encounters, and item discoveries via Google Gemini API.",
    longDescription:
      "LoreForge was developed independently from system architecture through production deployment for an Advanced Database & Emerging Technologies course. The platform leverages Google's Gemini API to generate dynamic storytelling scenarios, procedural NPC dialogue, and encounter outcomes tailored to player choices across multiple genres (Fantasy, Sci-Fi, Horror). Users can publish custom campaigns to the community feed.",
    architectureHighlights: [
      "Dynamic prompt engineering with structured JSON schema outputs from Gemini API",
      "Relational MySQL schema tracking multi-branch narrative states and player inventory",
      "Reactive player UI built with React and Tailwind CSS hooked to a Laravel REST API",
    ],
    tech: ["Laravel", "React", "MySQL", "Gemini API", "Tailwind CSS"],
    image: "/LoreForge.jpg",
    githubLink: "https://github.com/ejay-detera/loreforge",
    featured: true,
  },
  {
    id: "aigo",
    title: "AiGO",
    category: "School Works",
    badge: "Course Project",
    subtitle: "AI-Driven Itinerary & Travel Budgeting Platform",
    description:
      "AI travel planning platform generating day-by-day itineraries, Unsplash destination visuals, and multi-traveler budget coordination.",
    longDescription:
      "AiGO automates travel planning through generative AI. Users input vacation duration, budget, and travel preferences to receive itemized schedules paired with geo-tagged images from the Unsplash API. A token-based gamification system rewards users who interact with the community by sharing itineraries and tips.",
    architectureHighlights: [
      "Multi-agent prompt pipelining for parallel itinerary generation and budget calculations",
      "Unsplash API caching layer reducing outbound latency and API quota exhaustion",
      "MSSQL database schema with stored procedures for reliable community ratings and ledger transactions",
    ],
    tech: ["Laravel", "React", "MSSQL", "Gemini API", "Unsplash API"],
    image: "/AiGO.jpg",
    githubLink: "https://github.com/MaChewwwww/AiGO",
  },
  {
    id: "marekwenta",
    title: "MareKwenta POS",
    category: "School Works",
    badge: "Final Course Project",
    subtitle: "Point-of-Sale & Raw-Ingredient Inventory System",
    description:
      "Desktop point-of-sale system for Mare Cafe handling end-to-end sales, transaction auditing, and automated ingredient deduction upon checkout.",
    longDescription:
      "A robust desktop POS system designed for Mare Cafe. It coordinates order dispatching, receipts generation, real-time inventory deductions at the raw-ingredient level, and analytical end-of-day sales reporting. Contributed to the overall UI layout and engineered the core business logic and SQLite database layer.",
    architectureHighlights: [
      "Atomic SQLite transactions preventing inventory desynchronization during high-traffic order bursts",
      "Modular Object-Oriented C# WinForms design pattern with clear separation of concerns",
      "Dynamic recipe-to-inventory deduction algorithm mapping menu items to grams/milliliters of stock",
    ],
    tech: ["C#", "SQLite", "WinForms", ".NET Framework"],
    image: "/MareKwenta POS.jpg",
    githubLink: "https://github.com/ejay-detera/MareKwenta-POS",
  },

  // ---------------- COMMISSIONS ----------------
  {
    id: "cyperus",
    title: "Cyperus",
    category: "Commissions",
    badge: "Commissioned Capstone",
    subtitle: "AI-Powered Adaptive E-Commerce Marketplace",
    description:
      "Commissioned e-commerce web platform for PLMun capstone that learns customer browsing patterns to provide hyper-personalized recommendations.",
    longDescription:
      "Cyperus was commissioned as a capstone application for PLMun students. The platform observes customer navigation patterns, frequently viewed storefronts, and purchasing history to feed an intelligent recommendation engine. Served as the lead full-stack developer responsible for the shopping catalog, cart flow, and secure order processing.",
    architectureHighlights: [
      "Server-side rendered Next.js catalog ensuring SEO discoverability and sub-second page loads",
      "PostgreSQL normalized database with complex indexing for product search and filtering",
      "Clean modular API routes handling checkout workflows and inventory reservation",
    ],
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "TypeScript", "AI Integration"],
    image: "/Cyperus.jpg",
    githubLink: "https://github.com/MaChewwwww/Cyperus",
  },
  {
    id: "trustmart",
    title: "TrustMart",
    category: "Commissions",
    badge: "Commissioned Capstone",
    subtitle: "Security-First AI E-Commerce Platform",
    description:
      "Full-stack e-commerce solution integrating artificial intelligence for fraud deterrence, seller verification, and personalized discovery.",
    longDescription:
      "TrustMart was commissioned to demonstrate modern e-commerce security and intelligent consumer matching. Acted as a full-stack engineer responsible for architecting the customer ordering journey, responsive storefront interface, and role-based access control for vendors and admins.",
    architectureHighlights: [
      "Role-Based Access Control (RBAC) separating administrative actions, merchant stores, and customer accounts",
      "Robust PostgreSQL relational models with foreign-key constraints and transaction rollbacks",
      "Responsive frontend designed to deliver desktop-class speed on mobile browsers",
    ],
    tech: ["Next.js", "PostgreSQL", "Node.js", "Tailwind CSS"],
    image: "/TrustMart.jpg",
    githubLink: "https://github.com/MaChewwwww/TrustMart",
  },
];

const CATEGORIES = ["All", "Hackathon Systems", "School Works", "Commissions"] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!previewProject) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [previewProject]);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const flagshipProjects =
    activeCategory === "All"
      ? filteredProjects.filter((p) => p.featured)
      : filteredProjects;

  const archiveProjects =
    activeCategory === "All"
      ? filteredProjects.filter((p) => !p.featured)
      : [];

  return (
    <section
      id="projects"
      className="border-b border-[var(--border-color)] text-[var(--text-primary)]"
    >
      <div className="mx-auto max-w-7xl border-x border-[var(--border-color)] bg-[var(--bg-base)]/80 backdrop-blur-[2px]">
        {/* Section Header Bar */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 px-6 py-7 sm:px-10 border-b border-[var(--border-color)]">
          <div className="space-y-1.5">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Shipped Systems & Architecture
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-2xl">
              Full-stack web platforms, decentralized mobile apps, and relational database engines built for hackathons, academic courses, and client commissions.
            </p>
          </div>

          {/* Filter Tabs — Single Clean Row, No Wrapping */}
          <div className="flex flex-wrap sm:flex-nowrap border border-[var(--border-color)] bg-[var(--bg-card)] divide-x divide-[var(--border-color)] w-fit shrink-0">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              const count =
                category === "All"
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer tabular-nums ${
                    isActive
                      ? "bg-[var(--brand-yellow)] text-[#0C0C0E] font-bold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Flagship Open Dossier Rows */}
        <div className="divide-y divide-[var(--border-color)]">
          {flagshipProjects.map((project, idx) => (
            <article
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border-color)] transition-colors hover:bg-[var(--bg-card)]/60"
            >
              {/* Col 1-2: Specification Index & Repository Links */}
              <div className="lg:col-span-2 p-6 sm:p-8 flex lg:flex-col justify-between gap-4 bg-[var(--bg-card)]/30">
                <div className="space-y-2">
                  <div className="font-mono text-xs text-[var(--text-muted)] tabular-nums">
                    SYS-0{idx + 1}
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-mono uppercase tracking-wider bg-[var(--bg-subtle)] text-[var(--brand-yellow)] border border-[var(--border-color)]">
                    {project.badge}
                  </div>
                  <div className="text-xs font-mono text-[var(--text-muted)] pt-1">
                    {project.category}
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-col gap-2 pt-2">
                  {project.githubMobileLink ? (
                    <>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between gap-2 px-3 py-2 text-xs font-mono bg-[var(--bg-subtle)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--brand-yellow)] hover:text-[var(--brand-yellow)] transition-colors"
                      >
                        <span>Web Repo</span>
                        <span>↗</span>
                      </a>
                      <a
                        href={project.githubMobileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between gap-2 px-3 py-2 text-xs font-mono bg-[var(--bg-subtle)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--brand-yellow)] hover:text-[var(--brand-yellow)] transition-colors"
                      >
                        <span>Mobile Repo</span>
                        <span>↗</span>
                      </a>
                    </>
                  ) : (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between gap-2 px-3 py-2 text-xs font-mono bg-[var(--bg-subtle)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--brand-yellow)] hover:text-[var(--brand-yellow)] transition-colors"
                    >
                      <span>Source Code</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Col 3-7: Core Engineering Narrative & Inline Architecture Notes */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-[var(--brand-red)]">
                    {project.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-white leading-relaxed max-w-[68ch]">
                    {project.longDescription}
                  </p>
                </div>

                {/* Inline Architecture Highlights (Never hidden behind a modal) */}
                <div className="space-y-2.5 border-t border-[var(--border-color)] pt-5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                    Architecture & Engineering Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.architectureHighlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed"
                      >
                        <span className="font-mono text-[var(--brand-yellow)] select-none mt-0.5">
                          —
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Strip */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Col 8-12: Visual Artifact Plate */}
              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-[var(--bg-card)]/40">
                <button
                  type="button"
                  onClick={() => setPreviewProject(project)}
                  className="group relative w-full overflow-hidden border border-[var(--border-color)] bg-[#08080A] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--brand-yellow)]"
                  aria-label={`Inspect ${project.title} interface screenshot`}
                >
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.subtitle}`}
                      draggable={false}
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 border-t border-[var(--border-color)] bg-[var(--bg-card)] text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--brand-yellow)] transition-colors">
                    <span>FIG. 0{idx + 1} // {project.title.toUpperCase()}</span>
                    <span>EXPAND [+]</span>
                  </div>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Remaining Archive Systems (2-Column Structural Grid when viewing "All") */}
        {archiveProjects.length > 0 && (
          <div className="border-t border-[var(--border-color)]">
            <div className="px-6 py-5 sm:px-10 bg-[var(--bg-card)] border-b border-[var(--border-color)] flex items-center justify-between">
              <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)]">
                Additional Course & Commissioned Systems
              </h3>
              <span className="text-xs font-mono text-[var(--text-muted)] tabular-nums">
                SYS-05 — SYS-0{PROJECTS.length}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)]">
              {archiveProjects.map((project, idx) => (
                <article
                  key={project.id}
                  className={`p-6 sm:p-8 flex flex-col justify-between space-y-5 hover:bg-[var(--bg-card)]/60 transition-colors ${
                    idx >= 2 ? "border-t border-[var(--border-color)]" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-[var(--text-muted)] tabular-nums">
                          SYS-0{idx + 5}
                        </span>
                        <span className="px-2 py-0.5 text-xs font-mono uppercase bg-[var(--bg-subtle)] text-[var(--brand-yellow)] border border-[var(--border-color)]">
                          {project.badge}
                        </span>
                      </div>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-[var(--text-primary)] hover:text-[var(--brand-yellow)] underline"
                      >
                        Source Code ↗
                      </a>
                    </div>

                    <div className="flex items-start gap-4">
                      <button
                        type="button"
                        onClick={() => setPreviewProject(project)}
                        className="w-28 sm:w-36 flex-shrink-0 border border-[var(--border-color)] bg-[#08080A] overflow-hidden group cursor-pointer"
                        aria-label={`Expand ${project.title} screenshot`}
                      >
                        <div className="aspect-[16/10] w-full overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            draggable={false}
                            className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform"
                          />
                        </div>
                      </button>

                      <div className="space-y-1">
                        <h4 className="font-display text-xl font-bold text-[var(--text-primary)]">
                          {project.title}
                        </h4>
                        <p className="text-xs font-mono text-[var(--brand-red)]">
                          {project.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed pt-1">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-1.5 border-t border-[var(--border-color)] pt-3">
                      {project.architectureHighlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-[var(--text-secondary)] leading-relaxed"
                        >
                          <span className="font-mono text-[var(--brand-yellow)] select-none">
                            —
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-mono bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Screenshot Lightbox Modal */}
      {mounted &&
        previewProject &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 sm:p-6"
            onClick={() => setPreviewProject(null)}
          >
            <div
              className="relative w-full max-w-4xl border border-[var(--border-color)] bg-[var(--bg-base)] text-[var(--text-primary)] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border-color)] bg-[var(--bg-card)]">
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-base text-white">
                    {previewProject.title}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {previewProject.subtitle}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewProject(null)}
                  className="px-3 py-1 text-xs font-mono uppercase border border-[var(--border-color)] bg-[var(--bg-subtle)] hover:border-[var(--brand-yellow)] hover:text-[var(--brand-yellow)] cursor-pointer"
                >
                  Close [ESC]
                </button>
              </div>
              <div className="p-4 sm:p-6 bg-[#08080A] max-h-[75vh] overflow-y-auto">
                <img
                  src={previewProject.image}
                  alt={previewProject.title}
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>
              <div className="px-5 py-3.5 border-t border-[var(--border-color)] bg-[var(--bg-card)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {previewProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-mono bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={previewProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 text-xs font-mono font-bold uppercase bg-[var(--brand-yellow)] text-[#0C0C0E] hover:bg-[#f2b94f]"
                  >
                    View Repository ↗
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
