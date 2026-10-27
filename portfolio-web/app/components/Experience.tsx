"use client";

const MILESTONES = [
  {
    id: "freelance",
    type: "Engineering",
    role: "Full-Stack Software Developer",
    organization: "Freelance & Client Commissions",
    period: "Jan 2026 – Present",
    tag: "CURRENT",
    description: [
      "Architected and delivered customized web applications using Next.js, React, and Tailwind CSS for external academic and commercial clients.",
      "Engineered full database workflows, ERD modeling, and API routes ensuring fast sub-second response times.",
      "Conducted extensive code refactoring, ensuring production maintainability and responsive mobile UX.",
    ],
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: "cis",
    type: "Leadership",
    role: "Lead Frontend Developer",
    organization: "Commonwealth Information Society",
    period: "Oct 2025 – Present",
    tag: "LEADERSHIP",
    description: [
      "Direct the overall UI/UX direction, producing high-fidelity design systems and interactive prototypes in Figma.",
      "Architected key system components including database ERDs and structured repository workflows for the engineering team.",
      "Trained and mentored 2 junior frontend engineers in modern React, Tailwind CSS, and clean architectural principles.",
    ],
    skills: ["Figma", "System Architecture", "React", "Tailwind CSS", "Mentorship"],
  },
  {
    id: "gdg",
    type: "Community",
    role: "Frontend Developer",
    organization: "Google Developers Group on Campus",
    period: "Oct 2025 – May 2026",
    tag: "COMMUNITY",
    description: [
      "Engineered core pages and interactive dashboards using Next.js and Tailwind CSS.",
      "Constructed a modular library of reusable components translating complex community needs into production UI.",
      "Investigated and eliminated client-side bottlenecks and rendering glitches across diverse browser viewports.",
    ],
    skills: ["Next.js", "Component Libraries", "Tailwind CSS", "Performance Tuning"],
  },
  {
    id: "pupqc",
    type: "Education",
    role: "Bachelor of Science in Information Technology (BSIT)",
    organization: "Polytechnic University of the Philippines - Quezon City Campus",
    period: "2023 – 2027",
    tag: "BSIT STUDENT",
    description: [
      "Focusing on advanced database systems, software engineering, cloud computing, and systems analysis.",
      "Consistently applying academic rigor to real-world software products, client capstones, and community tools.",
      "Active developer and competitor in regional and international ASEAN hackathons.",
    ],
    skills: ["Database Modeling", "Software Engineering", "Systems Analysis", "Cloud Architecture"],
  },
];

const STACK_SPECIFICATION = [
  {
    layer: "Frontend & Mobile",
    items: ["Next.js", "React", "React Native", "TypeScript", "JavaScript", "Flutter", "Dart", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    layer: "Backend & Systems",
    items: ["Laravel", "PHP", "Node.js", "C# (.NET / WinForms)", "Python", "REST APIs", "Stellar SDK", "Gemini API"],
  },
  {
    layer: "Databases & Storage",
    items: ["PostgreSQL", "MySQL", "MSSQL", "Supabase", "SQLite", "Firebase", "MongoDB"],
  },
  {
    layer: "Infrastructure & Tooling",
    items: ["Git & GitHub", "Docker", "Nginx", "Figma", "Postman", "Mabl QA", "VS Code"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-[var(--border-color)] text-[var(--text-primary)]"
    >
      <div className="mx-auto max-w-7xl border-x border-[var(--border-color)] bg-[var(--bg-base)]/80 backdrop-blur-[2px]">
        {/* Section Header */}
        <div className="px-6 py-7 sm:px-10 border-b border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Experience, Education & Stack
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-2xl">
              Engineering roles, organizational leadership, academic background at PUP Quezon City Campus, and production technical toolkit.
            </p>
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider shrink-0">
            Quezon City, Metro Manila, PH
          </div>
        </div>

        {/* 12-Column Split Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border-color)]">
          {/* Left 7 Columns: Chronological Experience & Education Ledger */}
          <div className="lg:col-span-7 divide-y divide-[var(--border-color)]">
            {MILESTONES.map((item) => (
              <article
                key={item.id}
                className="p-6 sm:p-8 space-y-4 hover:bg-[var(--bg-card)]/50 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-[var(--brand-yellow)] tabular-nums">
                    {item.period}
                  </span>
                  <span className="px-2 py-0.5 text-xs font-mono uppercase tracking-wider bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                    {item.tag}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                    {item.role}
                  </h3>
                  <p className="text-sm font-mono text-[var(--brand-red)]">
                    {item.organization}
                  </p>
                </div>

                <ul className="space-y-2 pt-1">
                  {item.description.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
                    >
                      <span className="font-mono text-[var(--brand-yellow)] select-none mt-0.5">
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs font-mono bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Right 5 Columns: Technical Stack Specification & Engineering Profile */}
          <div className="lg:col-span-5 divide-y divide-[var(--border-color)] bg-[var(--bg-card)]/30">
            {/* Concise Engineering Profile */}
            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                Engineering Background
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  I am <strong className="text-[var(--text-primary)] font-semibold">E-jay P. Detera</strong>, a full-stack developer and BSIT Student at <strong className="text-[var(--text-primary)] font-semibold">Polytechnic University of the Philippines - Quezon City Campus</strong>.
                </p>
                <p>
                  My work focuses on relational database design, clean backend boundaries, and reactive web and mobile interfaces—turning complex problem domains like disaster telemetry, decentralized relief distribution, and raw-ingredient inventory auditing into dependable software.
                </p>
              </div>
            </div>

            {/* Technical Stack Matrix */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  Technical Stack Matrix
                </h3>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  PRODUCTION
                </span>
              </div>

              <div className="divide-y divide-[var(--border-color)] border border-[var(--border-color)] bg-[var(--bg-base)]">
                {STACK_SPECIFICATION.map((group) => (
                  <div key={group.layer} className="p-4 space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--brand-yellow)]">
                      {group.layer}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--border-color)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
