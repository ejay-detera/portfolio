"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const CATEGORIES = ["All", "Web App", "Mobile App", "Desktop App"];

const PROJECTS = [
  {
    title: "Marekwenta POS",
    description: "A desktop point-of-sale system developed for Mare Cafe, designed and submitted as a final project for an Object-Oriented Programming course. The system handles end-to-end sales operations — from order processing to inventory tracking — with real-time ingredient deduction upon product sale. Contributed to the core UI layout and all backend business logic powering the POS workflows.",
    tech: ["C#", "SQLite", "WinForms"],
    category: "Desktop App",
    badge: "Team Project",
    image: "/MareKwenta POS.jpg",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "LoreForge",
    description: "An AI-powered, community-driven turn-based RPG developed independently from system architecture through deployment, submitted for an Advanced Database and Emerging Technologies course. The game dynamically generates a complete campaign narrative — including combat encounters, choices, and item discoveries — through the Gemini API, ensuring a unique experience with every playthrough. Supports multiple genres (Fantasy, Horror, Sci-Fi) and allows players to publish their campaigns for others to experience and respond to.",
    tech: ["Laravel", "React", "MySQL", "Gemini API"],
    category: "Web App",
    badge: "Solo",
    image: "/LoreForge.jpg",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "AiGO",
    description: "An AI-driven travel planning platform developed for a Web Development course. AiGO generates personalized trip itineraries complete with destination photos sourced from the Unsplash API, supports multi-traveler budgeting, and enables users to share and save curated trip plans within a community. A token-based system incentivizes engagement — users earn generation credits by interacting with others' plans through comments and ratings. Contributed as a full-stack developer across key features and the overall system architecture.",
    tech: ["Laravel", "React", "MSSQL", "Gemini API", "Unsplash API"],
    category: "Web App",
    badge: "4-Person Team",
    image: "/AiGO.jpg",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "AcadHeal",
    description: "A student-focused mobile application developed independently for a Mobile Development course. AcadHeal addresses academic burnout by combining productivity tools with mental wellness features — offering structured study sessions accompanied by ambient music, daily motivational quotes, and scheduled guided meditation. The app is designed to reduce study-related stress and encourage healthier, more sustainable academic habits.",
    tech: ["FlutterFlow", "Firebase"],
    category: "Mobile App",
    badge: "Solo",
    image: "/AcadHeal.jpg",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "HandLingo 2",
    description: "A research-oriented mobile application developed independently for a Research Fundamentals course, aimed at making Filipino Sign Language (FSL) more accessible to non-deaf learners. HandLingo 2 offers structured, progressive lessons spanning greetings to basic sentences, supplemented by quizzes, personal reflection notepads, and live video/group call functionality powered by Agora AI. The application's feature set is grounded in Social Constructivist Theory, with each module mapped to one of its foundational pillars.",
    tech: ["Flutter", "Supabase", "Agora AI"],
    category: "Mobile App",
    badge: "Solo • Research",
    image: "/HandLingo 2.jpg",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Cyperus",
    description: "A commissioned e-commerce web application built for a capstone project at PLMun. Cyperus leverages AI to learn individual customer preferences over time, identifying frequently visited shops and commonly purchased items to deliver personalized product recommendations. Served as a full-stack contributor, responsible for building the main shopping experience — from the product browsing interface to the ordering flow.",
    tech: ["Next.js", "PostgreSQL", "AI Integrated"],
    category: "Web App",
    badge: "Commissioned",
    image: "/Cyperus.jpg",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "TrustMart",
    description: "A commissioned e-commerce platform developed for a capstone project at PLMun, integrating artificial intelligence for both security enforcement and adaptive user learning. Served as a full-stack contributor, building the core shopping experience from product discovery through checkout, while contributing to the system's overall structure and data flow.",
    tech: ["Next.js", "PostgreSQL", "AI Integrated"],
    category: "Web App",
    badge: "Commissioned",
    image: "/TrustMart.jpg",
    githubLink: "#",
    liveLink: "#",
  },
];

const getBadgeStyles = (badge: string) => {
  const lowercaseBadge = badge.toLowerCase();
  if (lowercaseBadge.includes("solo")) {
    return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
  }
  if (lowercaseBadge.includes("team") || lowercaseBadge.includes("person")) {
    return "bg-sky-500/10 text-sky-400 border-sky-500/20";
  }
  if (lowercaseBadge.includes("commissioned")) {
    return "bg-amber-500/10 text-amber-400 border-amber-500/20";
  }
  return "bg-accent/10 text-accent border-accent/20";
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-surface/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader title="Featured Projects" className="mb-0" />

          {/* Filtering Tabs */}
          <div className="flex flex-wrap justify-center gap-2 bg-surface/20 p-1.5 rounded-xl border border-accent/10 w-fit mx-auto md:mx-0">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-surface text-accent shadow-md border border-accent/20"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col h-full overflow-hidden rounded-2xl border border-accent/15 bg-[#2c3a3d] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_4px_20px_-4px_rgba(126,173,184,0.15)] group"
            >
              {/* Project Image Container (Top) */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden border-b border-accent/15">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Vertical Gradient overlay (blends bottom of the image into the card body) */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#2c3a3d] via-[#2c3a3d]/60 to-transparent pointer-events-none" />
              </div>

              {/* Card Content (Bottom) */}
              <div className="flex flex-col justify-between flex-grow p-5 md:p-6">
                <div className="space-y-4">
                  {/* Project Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-wider text-accent uppercase bg-accent/10 px-2 py-0.5 rounded border border-accent/15">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded border ${getBadgeStyles(project.badge)}`}>
                        {project.badge}
                      </span>
                      <a
                        href={project.githubLink}
                        className="text-text-secondary hover:text-white transition duration-200"
                        title="GitHub Repository"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                      </a>
                      <a
                        href={project.liveLink}
                        className="text-text-secondary hover:text-white transition duration-200"
                        title="Live Demo"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition duration-200">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-[13px] text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-surface/20">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold text-text-secondary bg-surface/40 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
