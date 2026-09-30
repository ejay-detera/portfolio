"use client";

const TESTIMONIALS = [
  {
    quote: "E-jay architected our e-commerce platform from scratch with exceptional precision. His database modeling, technical clarity, and speed transformed our capstone requirements into a production-grade system.",
    author: "CLIENT CAPSTONE LEAD",
    role: "PLMun Academic Commission",
  },
  {
    quote: "As our Lead Frontend Developer, E-jay shaped the design direction in Figma, laid down our ERD architecture, and mentored multiple junior engineers on React and Tailwind best practices.",
    author: "COMMITS LEADERSHIP",
    role: "Commonwealth Information Society",
  },
  {
    quote: "Working alongside E-jay at Google Developers Group was seamless. He delivers clean, maintainable Next.js components, hunts down tricky client-side bugs, and elevates the whole sprint.",
    author: "DEVELOPER PEER",
    role: "Google Developers Group on Campus",
  },
];

export default function Highlights() {
  return (
    <section className="bg-[var(--brand-red)] text-white py-16 md:py-24 relative overflow-hidden border-b border-[var(--border-color)]">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column matching Niko Kane's "What clients say" */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold tracking-widest text-white uppercase font-mono bg-white/20 px-2.5 py-1 rounded-sm w-fit border border-white/20">
              REPUTATION & FEEDBACK
            </span>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              What peers & <br /> clients say
            </h2>

            {/* Giant quotation symbol directly from Niko Kane screenshot */}
            <div className="text-6xl sm:text-7xl font-serif text-white/30 leading-none select-none">
              “
            </div>
          </div>

          {/* Right 3-Column Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                className={`${idx > 0 ? "pt-6 md:pt-0 md:pl-6" : ""} flex flex-col justify-between space-y-6`}
              >
                <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-sans italic">
                  "{item.quote}"
                </p>

                <div className="pt-2 border-t border-white/20">
                  <div className="text-xs font-bold font-mono tracking-wider text-white uppercase">
                    {item.author}
                  </div>
                  <div className="text-[11px] text-white/80 font-mono mt-0.5">
                    {item.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Circular Rotating Stamp in Bottom-Right Corner (like Niko Kane!) */}
      <div className="hidden lg:flex absolute -bottom-6 -right-6 w-32 h-32 items-center justify-center pointer-events-none select-none text-white/40">
        <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
          <path
            id="highlightCircle"
            d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
            fill="none"
          />
          <text className="text-[9px] font-bold tracking-[0.25em] uppercase fill-current">
            <textPath href="#highlightCircle">
              • STRATEGIC • RELIABLE • PROVEN • TRUSTED
            </textPath>
          </text>
        </svg>
        <div className="absolute text-lg font-black text-white/70">
          ✳
        </div>
      </div>

    </section>
  );
}
