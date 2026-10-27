"use client";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -64;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="border-b border-[var(--border-color)] text-[var(--text-primary)]"
    >
      <div className="mx-auto max-w-7xl border-x border-[var(--border-color)] bg-[var(--bg-base)]/80 backdrop-blur-[2px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border-color)]">
          {/* Left 7 Columns: Engineering Monograph Identity & Thesis */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 lg:p-12 space-y-8">
            <div className="space-y-6">
              {/* Top Specification Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-color)] pb-4 text-xs font-mono text-[var(--text-muted)]">
                <span className="text-[var(--brand-yellow)] font-semibold uppercase tracking-wider">
                  Full-Stack Developer & Systems Architect
                </span>
                <span className="tabular-nums">QUEZON CITY, PH</span>
              </div>

              {/* Commanding Display Name */}
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[0.92] text-[var(--text-primary)]">
                E-jay P.
                <br />
                Detera
              </h1>

              {/* Engineering Thesis */}
              <p className="text-sm sm:text-base text-white max-w-[60ch] leading-relaxed">
                I'm a system developer and architect who build full-stack web applications, cross-platform mobile systems, and normalized relational databases.{" "}
                <strong className="text-[var(--brand-yellow)] font-semibold">
                  BSIT Student at Polytechnic University of the Philippines - Quezon City Campus
                </strong>
                .
              </p>

              {/* Action Controls */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center gap-3 bg-[var(--brand-yellow)] text-[#0C0C0E] px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#f2b94f] transition-colors cursor-pointer"
                >
                  <span>Inspect Shipped Systems</span>
                  <span>↓</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-2 border border-[var(--border-color)] bg-[var(--bg-subtle)] px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:border-[var(--brand-yellow)] hover:text-[var(--brand-yellow)] hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
                >
                  <span>Direct Contact</span>
                </button>

                <a
                  href="https://github.com/ejay-detera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--brand-yellow)] transition-colors"
                >
                  <span>github.com/ejay-detera</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Bottom Key Specification Strip */}
            <div className="grid grid-cols-3 border border-[var(--border-color)] divide-x divide-[var(--border-color)] bg-[var(--bg-card)]/80">
              <div className="p-3.5 sm:p-4">
                <div className="font-display text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] tabular-nums">
                  8+
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase mt-0.5">
                  Shipped Systems
                </div>
              </div>
              <div className="p-3.5 sm:p-4">
                <div className="font-display text-xl sm:text-2xl font-extrabold text-[var(--brand-yellow)]">
                  Full-Stack
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase mt-0.5">
                  Web · Mobile · DB
                </div>
              </div>
              <div className="p-3.5 sm:p-4">
                <div className="font-display text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
                  PUP QC
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase mt-0.5">
                  BSIT Student
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Clean Architectural Portrait Plate (No Eye SVG, No Paint Splashes) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[var(--bg-card)]/40">
            <div className="px-6 py-3.5 border-b border-[var(--border-color)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>FIG. 00 // ENGINEER PROFILE</span>
              <span className="text-[var(--text-muted)]">PUP QC</span>
            </div>

            <div className="relative flex items-end justify-center px-6 pt-8 overflow-hidden min-h-[360px] sm:min-h-[440px]">
              <img
                src="/E-jay Hero Section.png"
                alt="E-jay P. Detera — Full-Stack Developer"
                draggable={false}
                className="max-h-[380px] sm:max-h-[450px] w-auto object-contain object-bottom filter contrast-[1.04] select-none"
              />
            </div>

            <div className="px-6 py-3.5 border-t border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
              <span>E-JAY P. DETERA</span>
              <span className="text-[var(--text-muted)]">NEXT.JS · LARAVEL · SUPABASE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
