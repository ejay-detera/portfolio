"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Frontend Web",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    title: "Mobile & Cross-Platform",
    skills: ["React Native", "Flutter", "Dart", "Mobile UI Patterns", "Offline-First Sync"],
  },
  {
    title: "Backend & Systems",
    skills: ["Laravel", "PHP", "Node.js", "C# (.NET / WinForms)", "Python", "REST APIs"],
  },
  {
    title: "Databases & Storage",
    skills: ["PostgreSQL", "MySQL", "MSSQL", "Supabase", "SQLite", "Database Normalization (ERD)"],
  },
  {
    title: "AI & Blockchain SDKs",
    skills: ["Google Gemini API", "Prompt Engineering", "NLP Processing", "Stellar SDK", "PAGASA Telemetry API"],
  },
  {
    title: "Infrastructure & Tooling",
    skills: ["Git & GitHub", "Docker", "Nginx", "Figma", "Postman", "Mabl Automated QA"],
  },
];

export default function Skills() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.clientWidth * 0.75;
      gsap.to(trackRef.current, {
        scrollLeft: trackRef.current.scrollLeft - scrollAmount,
        duration: 0.6,
        ease: "power3.inOut",
      });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.clientWidth * 0.75;
      gsap.to(trackRef.current, {
        scrollLeft: trackRef.current.scrollLeft + scrollAmount,
        duration: 0.6,
        ease: "power3.inOut",
      });
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center py-16 sm:py-24 bg-[var(--bg)] border-b border-[var(--line)]"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 space-y-12">
        
        {/* Header Bar: Title + Circular Navigation Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
          <div className="space-y-3">
            <span className="text-eyebrow text-[var(--accent)]">/ MY SKILLS</span>
            <h2 className="text-h2 text-[var(--text)] tracking-tight">
              An extensive list of skills
            </h2>
          </div>

          {/* Prev/Next Circular 56px Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Previous skill group"
              className="w-14 h-14 rounded-full border border-[var(--line-strong)] hover:border-[var(--text)] flex items-center justify-center text-[var(--text)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Next skill group"
              className="w-14 h-14 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-press)] flex items-center justify-center text-[var(--on-accent)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontally Scrollable & Draggable Track */}
        <div
          ref={trackRef}
          className="flex gap-0 overflow-x-auto scrollbar-none snap-x snap-mandatory border-y border-[var(--line)] divide-x divide-[var(--line)] cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none" }}
        >
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="w-[85vw] sm:w-[48vw] lg:w-[33.333%] flex-shrink-0 p-8 sm:p-10 space-y-6 snap-start bg-[var(--bg)] hover:bg-[var(--bg-raised)] transition-colors"
            >
              <h3 className="text-h3 text-[var(--text)] tracking-tight">
                {group.title}
              </h3>
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
    </section>
  );
}
