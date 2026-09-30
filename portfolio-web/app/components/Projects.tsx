"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import SpecularButton from "./SpecularButton";

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
}

const PROJECTS: Project[] = [
  // ---------------- HACKATHON SYSTEMS ----------------
  {
    id: "floodguard",
    title: "Floodguard",
    category: "Hackathon Systems",
    badge: "Disaster Tech",
    subtitle: "Real-Time Flood Level Monitoring & Offline SOS",
    description: "Real-time flood level monitoring alerts with offline SOS emergency signaling powered by PAGASA API telemetry.",
    longDescription: "Floodguard provides real-time flood monitoring alerts and emergency response capabilities during severe weather disturbances. It integrates the Philippine Atmospheric, Geophysical and Astronomical Services Administration (PAGASA) API to ingest live hydrometeorological data, track water level thresholds, and broadcast immediate advisories to at-risk communities. An offline SOS feature allows stranded citizens to transmit emergency distress beacons even when cellular and data connectivity fail.",
    architectureHighlights: [
      "Real-time flood telemetry integration via PAGASA API data streams",
      "Offline SOS emergency beaconing protocol for disaster-stricken areas with compromised connectivity",
      "Reactive event-driven alerts and live flood level dashboards built on Next.js and Supabase",
    ],
    tech: ["Next.js", "Supabase", "PAGASA API", "TypeScript", "Tailwind CSS"],
    image: "/flood-guard.jpg",
    githubLink: "https://github.com/Zanti00/floodguard-2",
  },
  {
    id: "reliefchain",
    title: "ReliefChain",
    category: "Hackathon Systems",
    badge: "Crypto Relief",
    subtitle: "Decentralized Aid Giving & Choice Platform",
    description: "Relief giving made easier—recipients can pick and choose their relief type (food stamps, cash). Leverages Stellar cryptocurrency for cheaper, faster transactions.",
    longDescription: "ReliefChain revolutionizes humanitarian aid distribution by giving beneficiaries direct choice over their aid—empowering them to select between food stamps, essential vouchers, or direct cash relief. By utilizing the Stellar blockchain network, the platform minimizes transaction overhead and remittance delays, operating through a dedicated React Native mobile app for recipients and a Next.js administrative dashboard for relief coordinators.",
    architectureHighlights: [
      "Stellar SDK integration enabling near-zero transaction fees and instant cryptographic relief disbursements",
      "Custom relief allocation module allowing recipients to select food stamps or direct cash relief",
      "Cross-platform architecture: React Native mobile client for recipients & Next.js admin portal on Supabase",
    ],
    tech: ["Next.js", "React Native", "Supabase", "Stellar SDK", "TypeScript", "Tailwind CSS"],
    image: "/relief-chain.png",
    githubLink: "https://github.com/ejay-detera/relief-chain-web",
    githubMobileLink: "https://github.com/ejay-detera/relief-chain",
  },
  {
    id: "memolink",
    title: "Memolink",
    category: "Hackathon Systems",
    badge: "AI Healthcare",
    subtitle: "Personalized AI Caregiver & Companion for Seniors",
    description: "Personalized AI caregiver companion for the elderly leveraging Gemini API & NLP, featuring medicine reminders, elderly-specific chatbot, and memory lane.",
    longDescription: "Memolink is an intelligent, personalized AI caregiver companion designed to support the elderly and their caregivers. Powered by Google's Gemini API and Natural Language Processing (NLP), the app provides a warm, conversational AI companion tailored to senior citizens, alongside an interactive 'Memory Lane' to preserve and recount cherished life stories. For family and professional caregivers, Memolink provides scheduling tools to input and automate critical medication reminders.",
    architectureHighlights: [
      "Empathetic conversational AI chatbot personalized for elderly care using Gemini API and NLP",
      "Caregiver dashboard for scheduling recurring medicine reminders and tracking patient wellness",
      "Interactive Memory Lane feature capturing nostalgic life moments and family stories via Supabase",
    ],
    tech: ["React Native", "Supabase", "Gemini API", "NLP", "TypeScript"],
    image: "/memo-link.png",
    githubLink: "https://github.com/ejay-detera/memolink",
  },

  // ---------------- SCHOOL WORKS ----------------
  {
    id: "loreforge",
    title: "LoreForge",
    category: "School Works",
    badge: "Solo Project",
    subtitle: "AI-Powered Narrative RPG & Campaign Engine",
    description: "An AI-powered turn-based RPG dynamically orchestrating campaign narratives, combat encounters, and item discoveries via Google Gemini API.",
    longDescription: "LoreForge was developed independently from system architecture through production deployment for an Advanced Database & Emerging Technologies course. The platform leverages Google's Gemini API to generate dynamic storytelling scenarios, procedural NPC dialogue, and encounter outcomes tailored to player choices across multiple genres (Fantasy, Sci-Fi, Horror). Users can publish custom campaigns to the community feed.",
    architectureHighlights: [
      "Dynamic prompt engineering with structured JSON schema outputs from Gemini API",
      "Relational MySQL schema tracking multi-branch narrative states and player inventory",
      "Reactive player UI built with React and Tailwind CSS hooked to a Laravel REST API",
    ],
    tech: ["Laravel", "React", "MySQL", "Gemini API", "Tailwind CSS"],
    image: "/LoreForge.jpg",
    githubLink: "https://github.com/ejay-detera/loreforge",
  },
  {
    id: "aigo",
    title: "AiGO",
    category: "School Works",
    badge: "Course Project",
    subtitle: "AI-Driven Itinerary & Travel Budgeting Platform",
    description: "AI travel planning platform generating day-by-day itineraries, Unsplash destination visuals, and multi-traveler budget coordination.",
    longDescription: "AiGO automates travel planning through generative AI. Users input vacation duration, budget, and travel preferences to receive itemized schedules paired with geo-tagged images from the Unsplash API. A token-based gamification system rewards users who interact with the community by sharing itineraries and tips.",
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
    description: "Desktop point-of-sale system for Mare Cafe handling end-to-end sales, transaction auditing, and automated ingredient deduction upon checkout.",
    longDescription: "A robust desktop POS system designed for Mare Cafe. It coordinates order dispatching, receipts generation, real-time inventory deductions at the raw-ingredient level, and analytical end-of-day sales reporting. Contributed to the overall UI layout and engineered the core business logic and SQLite database layer.",
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
    description: "Commissioned e-commerce web platform for PLMun capstone that learns customer browsing patterns to provide hyper-personalized recommendations.",
    longDescription: "Cyperus was commissioned as a capstone application for PLMun students. The platform observes customer navigation patterns, frequently viewed storefronts, and purchasing history to feed an intelligent recommendation engine. Served as the lead full-stack developer responsible for the shopping catalog, cart flow, and secure order processing.",
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
    description: "Full-stack e-commerce solution integrating artificial intelligence for fraud deterrence, seller verification, and personalized discovery.",
    longDescription: "TrustMart was commissioned to demonstrate modern e-commerce security and intelligent consumer matching. Acted as a full-stack engineer responsible for architecting the customer ordering journey, responsive storefront interface, and role-based access control for vendors and admins.",
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  // Responsive cards per view calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset carousel index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Lock body scroll and handle escape when modal is active
  useEffect(() => {
    if (selectedProject) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedProject(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalStyle;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedProject]);

  const maxIndex = Math.max(0, filteredProjects.length - cardsPerView);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const totalPages = Math.max(1, maxIndex + 1);

  // Mobile Touch Swipe Handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  return (
    <section id="projects" className="py-8 md:py-12 border-b border-[var(--border-color)] bg-[var(--bg-base)] relative overflow-hidden flex flex-col justify-center min-h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-4.5rem)] lg:max-h-[820px]">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 pb-4 border-b border-[var(--border-color)]">
          
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-[var(--brand-red)] uppercase font-mono">
              FEATURED PROJECTS
            </span>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight" style={{ color: '#FFFFFF' }}>
              Selected work
            </h2>

            {/* Red / Yellow Wavy Underline */}
            <div className="w-32 text-[var(--brand-yellow)]">
              <svg viewBox="0 0 140 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <path d="M2 10 Q 20 2 40 10 T 80 10 T 120 10 T 138 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Filtering Category Pills & Carousel Nav Controls */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1 p-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)]">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[var(--text-primary)] text-[var(--bg-base)] shadow-xs"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Carousel Prev / Next Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                disabled={maxIndex === 0}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#363535] bg-[#12131D] text-white hover:border-[var(--brand-yellow)] hover:bg-[#1A1C29] transition-all cursor-pointer shadow-xs disabled:opacity-40 disabled:cursor-not-allowed"
                title="Previous Projects"
                aria-label="Previous Projects"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <span className="text-xs font-mono font-bold text-gray-300 px-1">
                {String(Math.min(currentIndex + 1, totalPages)).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
              </span>

              <button
                onClick={nextSlide}
                disabled={maxIndex === 0}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#363535] bg-[#12131D] text-white hover:border-[var(--brand-yellow)] hover:bg-[#1A1C29] transition-all cursor-pointer shadow-xs disabled:opacity-40 disabled:cursor-not-allowed"
                title="Next Projects"
                aria-label="Next Projects"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* GitHub Specular Button */}
            <SpecularButton
              size="sm"
              onClick={() => window.open("https://github.com/ejay-detera", "_blank")}
            >
              <span style={{ color: '#FFFFFF' }}>ALL GITHUB</span>
              <span style={{ color: '#FFFFFF' }}>→</span>
            </SpecularButton>
          </div>

        </div>

        {/* Modern 3-Item Carousel Window with Fixed Minimum Height & Touch Swipe */}
        <div 
          className="relative overflow-hidden w-full py-2 min-h-[390px] touch-pan-y select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            key={activeCategory}
            className={`flex transition-transform duration-500 ease-out -mx-3 animate-filter-fade ${
              filteredProjects.length < cardsPerView ? "justify-center" : ""
            }`}
            style={{
              transform: filteredProjects.length < cardsPerView
                ? "none"
                : `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 animate-card-enter ${
                  filteredProjects.length === 1 ? "max-w-lg" : ""
                }`}
                style={{
                  animationDelay: `${idx * 65}ms`,
                }}
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer flex flex-col justify-between rounded-2xl border-2 border-[#363535] bg-[#0E101A] overflow-hidden transition-all duration-300 hover:border-[var(--brand-yellow)] hover:-translate-y-1 hover:shadow-xl h-[380px]"
                >
                  {/* Image Frame Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#06070E] border-b border-[#252836] flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      draggable={false}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 select-none"
                    />
                    
                    {/* Badge Overlay */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#06070E]/85 text-white backdrop-blur-xs border border-white/10">
                        {project.badge}
                      </span>
                    </div>

                    {/* Category Overlay */}
                    <div className="absolute top-2.5 right-2.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--brand-yellow)] text-[#06070E]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Meta Content */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-black uppercase tracking-tight group-hover:text-[var(--brand-yellow)] transition-colors truncate" style={{ color: '#FFFFFF' }}>
                          {project.title}
                        </h3>
                        
                        {/* Editorial Arrow Icon */}
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#363535] text-white group-hover:bg-[var(--brand-yellow)] group-hover:text-[#06070E] group-hover:border-[var(--brand-yellow)] transition-all text-xs flex-shrink-0 ml-2">
                          →
                        </span>
                      </div>

                      <p className="text-xs font-semibold truncate font-mono" style={{ color: '#E5A93C' }}>
                        {project.subtitle}
                      </p>

                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1 pt-3 border-t border-[#252836]">
                      {project.tech.slice(0, 3).map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#1A1C29] text-gray-200 border border-[#2B3045]"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[10px] font-mono font-bold self-center ml-1" style={{ color: '#E5A93C' }}>
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots - Fixed Height Reserved */}
        <div className="flex items-center justify-center gap-1.5 pt-3 h-8">
          {maxIndex > 0 && Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                currentIndex === i
                  ? "w-6 bg-[var(--brand-yellow)]"
                  : "w-1.5 bg-[#363535] hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Interactive Project Detail Modal - Guaranteed 100% Upfront, Centered & Scroll-Locked */}
      {mounted && selectedProject && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] rounded-3xl border-2 border-[#363535] bg-[#0E101A] shadow-2xl text-white overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-[#06070E]/80 text-white hover:bg-[var(--brand-red)] transition-colors cursor-pointer border border-white/20"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto max-h-[85vh] editorial-scrollbar">
              
              {/* Modal Image Header */}
              <div className="relative aspect-[16/9] w-full bg-[#06070E] overflow-hidden border-b border-[#363535]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  draggable={false}
                  className="w-full h-full object-cover object-top select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E101A] via-transparent to-transparent opacity-95" />
                
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[var(--brand-yellow)] text-[#06070E]">
                      {selectedProject.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-white/20 text-white backdrop-blur-xs">
                      {selectedProject.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 space-y-5">
                
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider mb-2" style={{ color: '#E5A93C' }}>
                    PROJECT OVERVIEW
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Architecture Highlights */}
                <div className="rounded-xl border border-[#363535] bg-[#141624] p-4 space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    ENGINEERING & ARCHITECTURE HIGHLIGHTS
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    {selectedProject.architectureHighlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--brand-yellow)] font-bold mt-0.5">✦</span>
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full Tech Stack */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                    TECHNOLOGIES UTILIZED
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md border border-[#363535] bg-[#141624] text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#363535]">
                  <div className="flex flex-wrap gap-2.5">
                    {selectedProject.githubMobileLink ? (
                      <>
                        <a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#06070E] px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors font-mono"
                        >
                          <span>WEB REPO</span>
                          <span>→</span>
                        </a>
                        <a
                          href={selectedProject.githubMobileLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#363535] bg-[#141624] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:border-[var(--brand-yellow)] hover:bg-[#1A1C29] transition-colors font-mono"
                        >
                          <span>MOBILE REPO</span>
                          <span>→</span>
                        </a>
                      </>
                    ) : (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white text-[#06070E] px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors font-mono"
                      >
                        <span>VIEW GITHUB REPO</span>
                        <span>→</span>
                      </a>
                    )}
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#363535] bg-[#141624] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:border-[var(--brand-yellow)] transition-colors font-mono"
                      >
                        <span>LIVE DEMO</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-xs font-mono font-bold text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    CLOSE [ESC]
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>,
        document.body
      )}

    </section>
  );
}

