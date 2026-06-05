import SectionHeader from "./SectionHeader";

export default function About() {
  const skills = [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"] },
    { category: "Mobile", items: ["Flutter", "FlutterFlow"] },
    { category: "Backend", items: ["Next.js", "Laravel", "Python", "Nginx"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Supabase", "Firebase", "MongoDB"] },
    { category: "Tools & DevOps", items: ["Git", "GitHub", "Docker", "VS Code", "Figma"] },
    { category: "Desktop", items: ["QT", "PyQt", "Tkinter"] },
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
              Hello! I'm E-jay, a fullstack developer dedicated to crafting a reliable and efficient digital solutions.
              My journey in software development began with a simple html and css website, and then i started
              learning how the websites and systems run behind the scenes, leading me to specialize not only in building
              software applications but also in database design and system architecture.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I am currently a 3rd year Information Technology Student at Polytechnic University of the Philippines - Quezon City.
              I am still inexperienced, but I am willing to learn and put my heart on it. I am looking for an opportunity to grow
              my skills and knowledge in software development and make a meaningful contribution to a team.
            </p>

            {/* Quick Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="rounded-xl border border-accent/15 bg-surface/30 p-4 transition-all duration-300 hover:border-accent/30">
                <div className="font-semibold text-white">Full-Stack Capability</div>
                <div className="text-sm text-text-secondary mt-1">Experienced in both client-side interfaces and server-side databases.</div>
              </div>
              <div className="rounded-xl border border-accent/15 bg-surface/30 p-4 transition-all duration-300 hover:border-accent/30">
                <div className="font-semibold text-white">System Design</div>
                <div className="text-sm text-text-secondary mt-1">Experienced in both client-side interfaces and server-side databases.</div>
              </div>
              <div className="rounded-xl border border-accent/15 bg-surface/30 p-4 transition-all duration-300 hover:border-accent/30">
                <div className="font-semibold text-white">Database Design</div>
                <div className="text-sm text-text-secondary mt-1">Focused on writing readable, testable, and maintainable software patterns.</div>
              </div>
              <div className="rounded-xl border border-accent/15 bg-surface/30 p-4 transition-all duration-300 hover:border-accent/30">
                <div className="font-semibold text-white">Microservice Experience</div>
                <div className="text-sm text-text-secondary mt-1">Experienced in building and maintaining microservice-based applications.</div>
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
