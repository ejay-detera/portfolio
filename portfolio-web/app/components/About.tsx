import SectionHeader from "./SectionHeader";

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5/CSS3"] },
    { category: "Backend", items: ["Node.js", "PHP", "Laravel", "Express", "RESTful APIs", "GraphQL"] },
    { category: "Database & DevOps", items: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "Git", "AWS"] },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-base-light border-y border-surface/10 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="About Me" className="mb-16" />



        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Bio Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-text-primary">
              Passionate developer building modern, performant web applications.
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Hello! I'm E-jay, a software developer dedicated to crafting efficient digital solutions. 
              My journey in software development began with a curiosity about how websites and systems run 
              behind the scenes, leading me to specialize in building robust full-stack applications.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I enjoy translating complex user requirements into elegant, maintainable code. My primary 
              goal is to design architectures that scale and provide responsive, visually pleasing user 
              interfaces. I am always eager to learn new techniques and follow industry best practices.
            </p>

            {/* Quick Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="rounded-xl border border-accent/15 bg-surface/30 p-4 transition-all duration-300 hover:border-accent/30">
                <div className="font-semibold text-white">Full-Stack Capability</div>
                <div className="text-sm text-text-secondary mt-1">Experienced in both client-side interfaces and server-side databases.</div>
              </div>
              <div className="rounded-xl border border-accent/15 bg-surface/30 p-4 transition-all duration-300 hover:border-accent/30">
                <div className="font-semibold text-white">Clean Code Advocate</div>
                <div className="text-sm text-text-secondary mt-1">Focused on writing readable, testable, and maintainable software patterns.</div>
              </div>
            </div>
          </div>

          {/* Skills Column */}
          <div className="lg:col-span-6 space-y-8 bg-surface/20 rounded-3xl p-6 md:p-8 border border-accent/10">
            <h3 className="text-xl font-bold text-white mb-4">My Technical Stack</h3>
            
            <div className="space-y-6">
              {skills.map((group, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="text-sm font-semibold tracking-wider text-accent uppercase">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="rounded-lg bg-surface/60 px-3.5 py-1.5 text-sm font-medium text-text-primary border border-accent/15 hover:border-accent/40 transition duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
