"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const TABS = ["Work Experience", "Education", "Certificates"];

const EXPERIENCES = [
  {
    role: "Software Developer",
    company: "Freelance",
    period: "Jan 2026 - Present",
    initials: "FL",
    skills: ["React", "Tailwind CSS", "Next.js", "Frontend Refactoring"],
    description: [
      "Refactored and developed client-facing frontend interfaces using React and Tailwind CSS.",
      "Designed and built 4 core application features across 2 client projects in a team setting, leveraging Next.js and Tailwind CSS.",
    ],
  },
  {
    role: "Lead Frontend Developer",
    company: "Commonwealth Information Society",
    period: "Oct 2025 - Present",
    initials: "CIS",
    skills: ["UI/UX Design", "Figma", "System Architecture", "React", "Tailwind CSS", "Mentorship"],
    description: [
      "Designed high-fidelity Figma mockups and led the overall UI/UX direction of the web application.",
      "Architected key system components including the ERD and system architecture, and established the project file structure to streamline the team's development workflow.",
      "Mentored 2 frontend developers by teaching core React, Tailwind CSS, and frontend best practices, while guiding them throughout the development process.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Google Developers Group",
    period: "Oct 2025 - May 2026",
    initials: "GDG",
    skills: ["Next.js", "Tailwind CSS", "React", "Component Libraries", "Figma", "Debugging"],
    description: [
      "Developed 2 core application pages using Next.js and Tailwind CSS, ensuring clean component architecture and maintainable code structure.",
      "Built a library of reusable UI components, translating high-fidelity Figma designs into production-ready interfaces.",
      "Resolved client-side bugs across the application, improving overall stability and user experience.",
    ],
  },
];

const EDUCATION = [
  {
    institution: "Polytechnic University of the Philippines-Quezon City",
    degree: "Bachelor of Science in Information Technology",
    period: "2023 – 2027",
    details: [
      "Focusing on software development, web technologies, and systems administration.",
      "Developing key skills in frontend engineering, backend databases, and modern UI/UX design.",
    ]
  }
];

const CERTIFICATES = [
  {
    title: "AI Ready ASEAN Youth Challenge",
    detail: "Certificate of Appreciation",
    issuer: "AI Singapore & ASEAN Foundation",
    period: "May 2026",
  },
  {
    title: "ASEAN AI Hackathon 2026: Workshop 1",
    detail: "Human-Centric AI and Regional Problem Solving",
    issuer: "ASEAN Foundation",
    period: "Apr 2026",
  },
  {
    title: "Linking Circles: Morphing Ideas Into Tech Ventures",
    detail: "Technology Venturing Workshop",
    issuer: "CommITs, PUP Quezon City",
    period: "Feb 2026",
  },
  {
    title: "Career in the Era of Artificial Intelligence",
    detail: "AI Industry Seminar",
    issuer: "CommITs, PUP Quezon City",
    period: "Jan 2026",
  },
  {
    title: "Cybersecurity Overview Webinar",
    detail: "General Assembly Webinar",
    issuer: "CommITs General Assembly",
    period: "2024",
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState("Work Experience");

  return (
    <section id="experience" className="py-20 md:py-28 bg-base-light border-y border-surface/10 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Experience & Credentials" className="mb-8" />

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 bg-surface/20 p-1.5 rounded-xl border border-accent/10 w-fit mx-auto mb-16">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
                activeTab === tab
                  ? "bg-surface text-accent shadow-md border border-accent/20"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative">
          {activeTab === "Work Experience" && (
            <div className="relative max-w-3xl mx-auto md:mx-0">
              {/* Vertical axis line with premium gradient */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent/50 via-surface/30 to-surface/5 md:left-6" />

              <div className="space-y-12">
                {EXPERIENCES.map((exp, index) => (
                  <div key={index} className="relative pl-12 md:pl-16 group">
                    {/* Glowing Marker bullet */}
                    <div className="absolute left-[8px] top-4.5 h-5 w-5 rounded-full border-2 border-accent bg-base-light flex items-center justify-center transition-all duration-300 md:left-[16px] group-hover:border-accent group-hover:scale-125">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    </div>

                    {/* Content Box */}
                    <div className="space-y-4 rounded-2xl border border-accent/10 bg-surface/10 p-6 transition-all duration-300 hover:border-accent/25 hover:bg-surface/15 hover:shadow-[0_4px_20px_-6px_rgba(126,173,184,0.08)]">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          {/* Company Initials Badge */}
                          <div className="h-12 w-12 rounded-xl bg-accent/5 border border-accent/15 flex items-center justify-center text-xs font-bold text-accent group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                            {exp.initials}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-accent transition duration-200">
                              {exp.role}
                            </h3>
                            <div className="text-sm font-semibold text-text-secondary">
                              {exp.company}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md w-fit border border-accent/15 self-start sm:self-center">
                          {exp.period}
                        </span>
                      </div>

                      {/* Custom Chevrons Bullet List */}
                      <ul className="space-y-2.5">
                        {exp.description.map((bullet, idx) => (
                          <li key={idx} className="flex items-start text-sm text-text-secondary leading-relaxed">
                            <svg className="h-4 w-4 text-accent/70 mr-3 mt-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Utilized */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-surface/20">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-semibold text-text-secondary bg-surface/30 px-2 py-0.5 rounded border border-surface/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Education" && (
            <div className="max-w-3xl mx-auto">
              {EDUCATION.map((edu, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-accent/15 bg-surface/10 p-6 md:p-8 transition-all duration-300 hover:border-accent/35 hover:shadow-[0_4px_20px_-4px_rgba(126,173,184,0.15)] group"
                >
                  <div className="flex flex-col items-center text-center gap-6">
                    <div className="p-3 bg-accent/10 rounded-xl text-accent border border-accent/10">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479L12 20l-6.825-4.943a12.084 12.084 0 01.665-6.48l6.16 3.423z" />
                      </svg>
                    </div>
                    <div className="space-y-4 flex-grow w-full flex flex-col items-center">
                      <div className="flex flex-col items-center gap-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition duration-200">
                          {edu.institution}
                        </h3>
                        <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md w-fit border border-accent/15">
                          {edu.period}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
                        {edu.degree}
                      </div>
                      <ul className="inline-block text-left list-disc ml-5 space-y-2 text-sm text-text-secondary leading-relaxed max-w-xl">
                        {edu.details.map((bullet, idx) => (
                          <li key={idx} className="marker:text-accent/60">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Certificates" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {CERTIFICATES.map((cert, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-2xl border border-accent/10 bg-surface/10 p-6 transition-all duration-300 hover:border-accent/25 hover:bg-surface/15 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="p-2 bg-accent/10 rounded-lg text-accent border border-accent/10 group-hover:bg-accent/20 transition duration-200">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md border border-accent/15">
                        {cert.period}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-accent transition duration-200 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {cert.detail} • <span className="italic">{cert.issuer}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
