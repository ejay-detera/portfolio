"use client";

const CORE_PILLARS = [
  {
    title: "Full-Stack Development",
    desc: "End-to-end web engineering utilizing Next.js, React, and Laravel with strict component architecture and state management.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Laravel"],
  },
  {
    title: "Database Architecture",
    desc: "Robust relational schemas, ERD modeling, query optimization, and real-time backend synchronization.",
    tech: ["PostgreSQL", "MySQL", "Supabase", "SQLite", "Firebase"],
  },
  {
    title: "Mobile Applications",
    desc: "Cross-platform mobile apps using Flutter & FlutterFlow with responsive UI, native API access, and offline data persistence.",
    tech: ["Flutter", "Dart", "FlutterFlow", "REST APIs"],
  },
  {
    title: "AI Integration & APIs",
    desc: "Intelligent features combining Google Gemini API, generative prompts, automated recommendations, and Agora AI streaming.",
    tech: ["Gemini API", "AI Agents", "Agora AI", "Microservices"],
  },
];

const SKILL_CATEGORIES = [
  {
    name: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "Python", "C#", "Dart", "PHP", "HTML5", "CSS3", "React", "Next.js", "Laravel", "Flutter"],
  },
  {
    name: "Databases & Storage",
    items: ["PostgreSQL", "MySQL", "Supabase", "SQLite", "Firebase", "MongoDB"],
  },
  {
    name: "Tools, DevOps & Design",
    items: ["Git", "GitHub", "Docker", "Nginx", "Figma", "VS Code", "Postman", "WinForms"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-14 md:py-18 border-b border-[#363535] bg-[#06070E] relative overflow-hidden text-white">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-12 border-b border-[#363535]">

          {/* Left Column: Bold Statement Corner */}
          <div className="lg:col-span-6 space-y-6">

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-widest text-[var(--brand-red)] uppercase font-mono">
                ABOUT ME
              </span>
              <span className="h-px w-12 bg-[var(--brand-red)]/50" />
            </div>

            {/* Headline matching Niko Kane */}
            <h2 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight leading-[1.05]" style={{ color: '#FFFFFF' }}>
              Design with purpose. <br />
              Systems with{" "}
              <span className="text-[var(--brand-red)] italic relative inline-block">
                soul.
                {/* Underline wave */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[var(--brand-red)]" viewBox="0 0 100 15" fill="none">
                  <path d="M2 10 Q 25 2 50 10 T 98 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            {/* Stylized Handwritten Signature & Tag */}
            <div className="pt-4 flex flex-wrap items-center gap-5">
              <div className="font-serif italic text-3xl sm:text-4xl font-bold tracking-tight select-none" style={{ color: '#FFFFFF' }}>
                E-jay Detera
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--brand-yellow)]/10 text-[var(--brand-yellow)] border border-[var(--brand-yellow)]/30">
                Full-Stack Engineer
              </div>
            </div>

          </div>

          {/* Right Column: Narrative Bio & Rotating Stamp */}
          <div className="lg:col-span-6 space-y-4 relative">

            {/* Header row with enlarged BIOGRAPHY & ROOTS and rotating stamp */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#E5A93C' }} />
                <h3 className="text-sm sm:text-base md:text-lg font-mono font-bold uppercase tracking-wider" style={{ color: '#E5A93C' }}>
                  BIOGRAPHY & ROOTS
                </h3>
              </div>

              {/* Rotating Circular Stamp Badge (Using clean SVG icon, NO emojis!) */}
              <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                <div className="absolute inset-0 rounded-full border-2 border-[var(--brand-yellow)] bg-[#121420] text-white shadow-xl flex items-center justify-center">
                  <svg className="w-full h-full animate-spin-slow text-white" viewBox="0 0 100 100">
                    <path
                      id="aboutCircle"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      fill="none"
                    />
                    <text className="text-[8.5px] font-black tracking-[0.2em] uppercase fill-white">
                      <textPath href="#aboutCircle">
                        • BASED IN QUEZON CITY • PUP QC IT •
                      </textPath>
                    </text>
                  </svg>
                  {/* Clean SVG Globe Icon */}
                  <div className="absolute flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--brand-yellow)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Paragraphs with guaranteed bright light text and tight, natural spacing */}
            <div className="space-y-3.5 text-xs sm:text-sm leading-relaxed" style={{ color: '#E2E8F0' }}>
              <p>
                I'm <strong className="font-bold" style={{ color: '#FFFFFF' }}>E-jay Detera</strong>, a software developer
                and 3rd-year Information Technology student at <em className="font-semibold not-italic" style={{ color: '#FFFFFF' }}>Polytechnic University of the Philippines - Quezon City</em>.
                My journey into tech began with curiosity about how complex websites orchestrate data behind the scenes — which quickly evolved into a passion for software architecture, database design, and end-to-end full-stack systems.
              </p>
              <p>
                From architecting database ERDs and crafting reactive Next.js frontends to implementing cross-platform Flutter applications with AI APIs, I thrive on turning messy, complex problem spaces into robust, scalable, and intuitive software solutions.
              </p>
            </div>

            {/* Quick Credentials / Status tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-3 py-1 rounded-lg bg-[#181C2E] border border-[#2B3045] text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                PUP QC (BSIT 4th Year)
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-3 py-1 rounded-lg bg-[#181C2E] border border-[#2B3045] text-[var(--brand-yellow)]">
                11+ Production Projects
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-3 py-1 rounded-lg bg-[#181C2E] border border-[#2B3045] text-white">
                Figma to Code Specialist
              </span>
            </div>

          </div>

        </div>

        {/* Bento Grid: Core Competencies (Changed background color to distinct rich navy/charcoal) */}
        <div className="mt-16">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white" style={{ color: '#FFFFFF' }}>
              Core Competencies & Stack
            </h3>
            <span className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--brand-yellow)' }}>
              ✦ Production Standards
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border-2 border-[#363535] bg-[#181C2E] p-6 transition-all duration-300 hover:border-[var(--brand-yellow)] hover:-translate-y-1 shadow-md group"
              >
                <div className="space-y-3">
                  <div className="text-xs font-bold font-mono text-[var(--brand-red)] uppercase tracking-wider">
                    0{idx + 1} //
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-[var(--brand-yellow)] transition-colors" style={{ color: '#FFFFFF' }}>
                    {pillar.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#CBD5E1' }}>
                    {pillar.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-5 mt-4 border-t border-[#2B3045]">
                  {pillar.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#252B42] text-white border border-[#3A4260]"
                      style={{ color: '#FFFFFF' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack Tags Strip (Changed background color to distinct rich navy/charcoal) */}
        <div className="mt-10 rounded-2xl border-2 border-[#363535] bg-[#181C2E] p-6 sm:p-8 shadow-md">
          <h4 className="text-xs font-bold tracking-widest text-[var(--brand-yellow)] uppercase mb-6 font-mono">
            COMPREHENSIVE TOOLKIT & TECHNOLOGIES
          </h4>

          <div className="space-y-5">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="w-48 flex-shrink-0 text-xs font-bold uppercase tracking-wider text-white" style={{ color: '#FFFFFF' }}>
                  {cat.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="text-xs font-mono font-medium rounded-lg border border-[#3A4260] bg-[#252B42] px-3 py-1.5 text-white hover:border-[var(--brand-yellow)] transition-colors cursor-default"
                      style={{ color: '#FFFFFF' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
