"use client";

interface Milestone {
  id: string;
  role: string;
  organization: string;
  period: string;
  current?: boolean;
  description: string[];
  skills: string[];
}

const MILESTONES: Milestone[] = [
  {
    id: "freelance",
    role: "Full-Stack Software Developer",
    organization: "Freelance & Client Commissions",
    period: "Jan 2026 – Present",
    current: true,
    description: [
      "Architected and delivered customized web applications using Next.js, React, and Tailwind CSS for external academic and commercial clients.",
      "Engineered full database workflows, ERD modeling, and API routes ensuring fast sub-second response times.",
      "Conducted extensive code refactoring, ensuring production maintainability and responsive mobile UX.",
    ],
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: "cis",
    role: "Lead Frontend Developer",
    organization: "Commonwealth Information Society",
    period: "Oct 2025 – Jul 2026",
    current: false,
    description: [
      "Direct the overall UI/UX direction, producing high-fidelity design systems and interactive prototypes in Figma.",
      "Architected key system components including database ERDs and structured repository workflows for the engineering team.",
      "Trained and mentored junior frontend engineers in modern React, Tailwind CSS, and clean architectural principles.",
    ],
    skills: ["Figma", "System Architecture", "React", "Tailwind CSS", "Mentorship"],
  },
  {
    id: "gdg",
    role: "Frontend Developer",
    organization: "Google Developers Group on Campus",
    period: "Oct 2025 – May 2026",
    current: false,
    description: [
      "Engineered core pages and interactive dashboards using Next.js and Tailwind CSS.",
      "Constructed a modular library of reusable components translating community needs into production UI.",
      "Investigated and eliminated client-side bottlenecks and rendering glitches across diverse browser viewports.",
    ],
    skills: ["Next.js", "Component Libraries", "Tailwind CSS", "Performance Tuning"],
  },
  {
    id: "pupqc",
    role: "Bachelor of Science in Information Technology (BSIT)",
    organization: "Polytechnic University of the Philippines - Quezon City Campus",
    period: "2023 – 2027",
    current: false,
    description: [
      "Focusing on advanced database systems, software engineering, cloud computing, and systems analysis.",
      "Consistently applying academic rigor to real-world software products, client capstones, and community tools.",
      "Active developer and competitor in regional and international ASEAN hackathons.",
    ],
    skills: ["Database Modeling", "Software Engineering", "Systems Analysis", "Cloud Architecture"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 lg:py-36 bg-[var(--bg)] border-b border-[var(--line)]"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12 space-y-12">
        
        {/* Header */}
        <div className="space-y-3 pb-4">
          <span className="text-eyebrow text-[var(--accent)]">/ EXPERIENCE & EDUCATION</span>
          <h2 className="text-h2 text-[var(--text)] tracking-tight">
            Where I&apos;ve contributed
          </h2>
        </div>

        {/* 2-Column Ledger: Date on left, details on right */}
        <div className="border-t border-[var(--line)] divide-y divide-[var(--line)]">
          {MILESTONES.map((item) => (
            <article
              key={item.id}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-[var(--bg-raised)] transition-colors px-2 sm:px-4"
            >
              {/* Left Column: Date Range + Dandelion Current Dot */}
              <div className="md:col-span-4 space-y-2">
                <div className="text-sm font-semibold tabular-nums text-[var(--text-muted)]">
                  {item.period}
                </div>
                {item.current && (
                  <div className="flex items-center gap-2 text-xs font-medium text-[var(--text)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--highlight)] shrink-0" />
                    <span>Current</span>
                  </div>
                )}
              </div>

              {/* Right Column: Role, Org, Bullets & Skills */}
              <div className="md:col-span-8 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-h3 text-[var(--text)] tracking-tight">
                    {item.role}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] font-medium">
                    {item.organization}
                  </p>
                </div>

                <ul className="space-y-2">
                  {item.description.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-body)] leading-relaxed"
                    >
                      <span className="text-[var(--accent)] select-none mt-0.5">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Plain Comma-Separated Skills */}
                <div className="pt-1 text-xs text-[var(--text-faint)]">
                  <span className="text-[var(--text-muted)] font-medium">Domain: </span>
                  <span>{item.skills.join(", ")}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
