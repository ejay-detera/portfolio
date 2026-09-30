"use client";

import { useState, useEffect } from "react";

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState<"all" | "work" | "education">("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const ALL_MILESTONES = [
    {
      id: "freelance",
      type: "work" as const,
      role: "Full-Stack Software Developer",
      organization: "Freelance",
      period: "Jan 2026 – Present",
      tag: "CURRENT",
      initials: "FL",
      description: [
        "Architected and delivered customized web applications using Next.js, React, and Tailwind CSS for external academic and commercial clients.",
        "Engineered full database workflows, ERD modeling, and API routes ensuring fast sub-second response times.",
        "Conducted extensive code refactoring, ensuring production maintainability and responsive mobile UX.",
      ],
      skills: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Full-Stack"],
    },
    {
      id: "cis",
      type: "work" as const,
      role: "Lead Frontend Developer",
      organization: "Commonwealth Information Society",
      period: "Oct 2025 – Present",
      tag: "LEADERSHIP",
      initials: "CIS",
      description: [
        "Direct the overall UI/UX direction, producing high-fidelity design systems and interactive prototypes in Figma.",
        "Architected key system components including database ERDs and structured repository workflows for the engineering team.",
        "Trained and mentored 2 junior frontend engineers in modern React, Tailwind CSS, and clean architectural principles.",
      ],
      skills: ["Figma", "UI/UX", "System Architecture", "React", "Mentorship"],
    },
    {
      id: "gdg",
      type: "work" as const,
      role: "Frontend Developer",
      organization: "Google Developers Group on Campus",
      period: "Oct 2025 – May 2026",
      tag: "COMMUNITY",
      initials: "GDG",
      description: [
        "Engineered core pages and interactive dashboards using Next.js 15+ and Tailwind CSS.",
        "Constructed a modular library of reusable components translating complex community needs into production UI.",
        "Investigated and eliminated client-side bottlenecks and rendering glitches across diverse browser viewports.",
      ],
      skills: ["Next.js", "Component Libraries", "Tailwind CSS", "Bug Resolution"],
    },
    {
      id: "pupqc",
      type: "education" as const,
      role: "Bachelor of Science in Information Technology (BSIT)",
      organization: "Polytechnic University of the Philippines - Quezon City",
      period: "2023 – 2027 (Junior / 3rd Year)",
      tag: "ENROLLED",
      initials: "PUP",
      description: [
        "Focusing on advanced database systems, software engineering, cloud computing, and systems analysis.",
        "Consistently applying academic rigor to real-world software products, client capstones, and community tools.",
        "Active member and developer in collegiate technology initiatives and hackathons.",
      ],
      skills: ["Database Modeling", "Software Engineering", "Systems Analysis", "Cloud"],
    },
  ];

  const filteredMilestones = activeFilter === "all"
    ? ALL_MILESTONES
    : ALL_MILESTONES.filter((m) => m.type === activeFilter);

  // Responsive cards per view
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

  // Reset index on filter change
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  const maxIndex = Math.max(0, filteredMilestones.length - cardsPerView);

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
    <section id="experience" className="py-8 md:py-12 border-b border-[var(--border-color)] bg-[var(--bg-subtle)] relative overflow-hidden flex flex-col justify-center min-h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-4.5rem)] lg:max-h-[850px]">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 pb-4 border-b border-[var(--border-color)]">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-[var(--brand-red)] uppercase font-mono">
              CAREER & ACADEMIA
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight" style={{ color: '#FFFFFF' }}>
              Experience & Education
            </h2>
            <div className="w-32 text-[var(--brand-yellow)]">
              <svg viewBox="0 0 120 18" fill="none" className="w-full h-auto">
                <path d="M2 9 Q 20 2 40 9 T 80 9 T 118 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Filter Pills & Carousel Controls */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Filter Pills */}
            <div className="flex p-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)]">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeFilter === "all"
                    ? "bg-[var(--text-primary)] text-[var(--bg-base)] shadow-xs"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                ALL ({ALL_MILESTONES.length})
              </button>
              <button
                onClick={() => setActiveFilter("work")}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeFilter === "work"
                    ? "bg-[var(--text-primary)] text-[var(--bg-base)] shadow-xs"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                WORK ({ALL_MILESTONES.filter((m) => m.type === "work").length})
              </button>
              <button
                onClick={() => setActiveFilter("education")}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeFilter === "education"
                    ? "bg-[var(--text-primary)] text-[var(--bg-base)] shadow-xs"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                EDUCATION (1)
              </button>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                disabled={maxIndex === 0}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#363535] bg-[#12131D] text-white hover:border-[var(--brand-yellow)] hover:bg-[#1A1C29] transition-all cursor-pointer shadow-xs disabled:opacity-40 disabled:cursor-not-allowed"
                title="Previous Milestone"
                aria-label="Previous Milestone"
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
                title="Next Milestone"
                aria-label="Next Milestone"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Modern 3-Item Carousel Window with Mobile Touch Swipe & Generous Card Height */}
        <div 
          className="relative overflow-hidden w-full py-2 min-h-[405px] touch-pan-y select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            key={activeFilter}
            className={`flex transition-transform duration-500 ease-out -mx-3 animate-filter-fade ${
              filteredMilestones.length < cardsPerView ? "justify-center" : ""
            }`}
            style={{
              transform: filteredMilestones.length < cardsPerView
                ? "none"
                : `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {filteredMilestones.map((item, idx) => (
              <div
                key={item.id}
                className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 animate-card-enter ${
                  filteredMilestones.length === 1 ? "max-w-lg" : ""
                }`}
                style={{
                  animationDelay: `${idx * 65}ms`,
                }}
              >
                <div className="rounded-2xl border-2 border-[#363535] bg-[#0E101A] p-5 sm:p-6 shadow-xl hover:border-[var(--brand-yellow)] hover:-translate-y-1 hover:shadow-xl transition-all h-[390px] min-h-[390px] flex flex-col justify-between overflow-hidden">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#252836]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-yellow)] text-[#06070E] font-mono font-black text-xs shadow-xs flex-shrink-0">
                          {item.type === "education" ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                              <path d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
                            </svg>
                          ) : (
                            item.initials
                          )}
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--brand-yellow)] text-[#06070E]">
                            {item.tag}
                          </span>
                          <span className="text-[11px] font-mono text-gray-400 block mt-0.5">
                            {item.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-black leading-snug line-clamp-2" style={{ color: '#FFFFFF' }}>
                        {item.role}
                      </h3>
                      <p className="text-xs font-semibold font-mono mt-1" style={{ color: '#E5A93C' }}>
                        {item.organization}
                      </p>
                    </div>

                    <ul className="space-y-1.5 text-xs text-gray-300">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="font-bold mt-0.5 flex-shrink-0" style={{ color: '#E5A93C' }}>→</span>
                          <span className="leading-relaxed line-clamp-2">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {item.skills && (
                    <div className="flex flex-wrap gap-1 pt-3 border-t border-[#252836]">
                      {item.skills.map((s, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#1A1C29] text-gray-200 border border-[#2B3045]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators - Fixed Height Reserved */}
        <div className="flex items-center justify-center gap-1.5 pt-4 h-8">
          {maxIndex > 0 && Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                currentIndex === i
                  ? "w-6 bg-[var(--brand-yellow)]"
                  : "w-1.5 bg-[#363535] hover:bg-gray-400"
              }`}
              aria-label={`Go to milestone slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
