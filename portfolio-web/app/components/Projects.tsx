"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const CATEGORIES = ["All", "Web App", "Microservices", "Frontend"];


const PROJECTS = [
  {
    title: "Contract Management Suite",
    description: "An enterprise-grade contract management portal featuring status tracking, dynamic user roles, audit logging, and automated approval workflows.",
    tech: ["Vue.js", "Laravel", "PHP", "PostgreSQL", "Tailwind CSS"],
    category: "Web App",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Notification Microservice",
    description: "A highly-scalable event notification system handling high-throughput webhooks, email alerts, and live push notifications via message queuing.",
    tech: ["Node.js", "Express", "Redis", "Docker", "WebSockets"],
    category: "Microservices",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Auth & Audit Security Module",
    description: "A centralized security microservice that manages user authentication, authorization indexes, and tracks user actions with comprehensive audit trails.",
    tech: ["Laravel", "PHP", "MySQL", "API Gateways"],
    category: "Microservices",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Developer Portfolio Website",
    description: "A fast, SEO-optimized portfolio featuring smooth-scroll sections, typewriter effects, custom theme integration, and high visual standards.",
    tech: ["Next.js", "Tailwind CSS v4", "TypeScript", "React"],
    category: "Frontend",
    githubLink: "#",
    liveLink: "#",
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-accent/15 bg-surface/10 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_4px_20px_-4px_rgba(126,173,184,0.15)] group"
            >
              <div className="space-y-4">
                {/* Project Header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 px-2.5 py-1 rounded-md">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubLink}
                      className="text-text-secondary hover:text-white transition duration-200"
                      title="GitHub Repository"
                    >
                      <svg className="h-5.5 w-5.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                    <a
                      href={project.liveLink}
                      className="text-text-secondary hover:text-white transition duration-200"
                      title="Live Demo"
                    >
                      <svg className="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition duration-200">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-6 mt-4 border-t border-surface/20">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold text-text-secondary bg-surface/40 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
