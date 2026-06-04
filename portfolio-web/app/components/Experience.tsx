import SectionHeader from "./SectionHeader";

const EXPERIENCES = [

  {
    role: "Full-Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2024 - Present",
    description: [
      "Lead developer on high-traffic Vue.js and Laravel web applications, modernizing frontend performance and backend query runtimes.",
      "Spearheaded database query optimization for contract tracking modules, improving page loads by 40%.",
      "Created reusable component libraries using Tailwind CSS and TypeScript, lowering styling overhead for developer onboarding.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Core Systems Corp",
    period: "2022 - 2024",
    description: [
      "Built custom microservices processing push notifications and emails leveraging Express, Redis, and WebSockets.",
      "Successfully integrated third-party payment gateways and audit tracking interfaces within strict compliance standards.",
      "Maintained and updated Laravel API routes, managing schemas and table migrations for clean relational architecture.",
    ],
  },
  {
    role: "B.S. in Computer Science",
    company: "State University",
    period: "2018 - 2022",
    description: [
      "Focused on systems analysis, database design, and object-oriented programming concepts.",
      "Graduated with honors; completed a Capstone Project: an automated contract lifecycle system.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-base-light border-y border-surface/10 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Work Experience" className="mb-16" />

        {/* Timeline container */}
        <div className="relative max-w-3xl mx-auto md:mx-0">
          {/* Vertical axis line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-surface md:left-6" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="relative pl-12 md:pl-16 group">
                {/* Marker bullet */}
                <div className="absolute left-[9px] top-1.5 h-4.5 w-4.5 rounded-full border-2 border-base bg-surface group-hover:bg-accent group-hover:scale-110 transition duration-200 md:left-[17px]" />

                {/* Content Box */}
                <div className="space-y-3 rounded-2xl border border-accent/10 bg-surface/10 p-6 transition-all duration-300 hover:border-accent/25 hover:bg-surface/15">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-accent transition duration-200">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-text-secondary">
                    {exp.company}
                  </div>

                  <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-text-secondary leading-relaxed">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} className="marker:text-accent/60">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
