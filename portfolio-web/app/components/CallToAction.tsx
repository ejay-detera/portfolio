"use client";

import SpecularButton from "./SpecularButton";

export default function CallToAction() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#12131D] text-white py-12 md:py-16 relative overflow-hidden border-y-2 border-[#363535]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Headline Column */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[var(--brand-yellow)] uppercase font-mono">
              LET'S WORK TOGETHER
            </span>

            <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[0.95] text-white" style={{ color: '#FFFFFF' }}>
              Have a project <br /> in mind?
            </h2>

            {/* Red wavy underline doodle */}
            <div className="w-36 text-[var(--brand-red)] pt-2">
              <svg viewBox="0 0 140 20" fill="none" className="w-full h-auto">
                <path d="M2 10 Q 20 2 40 10 T 80 10 T 120 10 T 138 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Right Text & CTA */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative">
            
            <div className="max-w-sm space-y-5">
              <p
                className="text-sm sm:text-base font-normal leading-relaxed font-sans"
                style={{ color: '#E2E8F0' }}
              >
                I'd love to hear about your software vision and explore how we can architect and build something resilient together.
              </p>

              <div>
                <SpecularButton
                  size="md"
                  onClick={scrollToContact}
                >
                  <span style={{ color: '#FFFFFF' }}>START A PROJECT</span>
                  <span style={{ color: '#FFFFFF' }}>→</span>
                </SpecularButton>
              </div>
            </div>

            {/* Hand-drawn Hand doodle / Starburst graphic */}
            <div className="hidden sm:block w-28 h-28 text-[var(--brand-yellow)] flex-shrink-0">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Hand-drawn peace / OK gesture icon */}
                <path d="M40 85 C 40 70 35 60 30 50 C 27 45 25 35 30 30 C 35 25 40 30 42 35 C 42 28 44 20 50 20 C 56 20 56 28 56 35 C 57 28 60 22 66 22 C 72 22 72 30 72 37 C 73 30 76 25 82 27 C 88 29 86 38 84 48 C 80 65 75 85 75 85 Z" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Starburst rays */}
                <path d="M12 20 L24 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M5 40 L18 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M18 10 L22 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
