"use client";

const SERVICES = [
  {
    icon: (
      <svg className="w-6 h-6 text-[var(--brand-yellow)]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "System Architecture",
    description: "Designing resilient backend architectures, Entity Relationship Diagrams (ERDs), API gateways, and scalable database schemas.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[var(--brand-yellow)]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Full-Stack Development",
    description: "Building production-grade web applications with Next.js, React, Tailwind CSS, TypeScript, and Laravel with strict clean code standards.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[var(--brand-yellow)]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Mobile App Engineering",
    description: "Crafting fluid cross-platform iOS and Android apps with Flutter, FlutterFlow, Supabase, and real-time state management.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[var(--brand-yellow)]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI & Emerging Tech",
    description: "Integrating Gemini LLMs, intelligent prompt agents, recommendation algorithms, and live video streaming with Agora AI.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-[#363535] bg-[#06070E] text-white py-14 md:py-18 relative overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Title Column matching Niko Kane */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[var(--brand-yellow)] uppercase font-mono">
              SERVICES
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              What I can <br className="hidden sm:block" /> do for you
            </h2>

            {/* Hand-drawn double yellow wavy doodle (exactly like Niko Kane screenshot!) */}
            <div className="w-28 text-[var(--brand-yellow)] pt-1">
              <svg viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <path d="M2 6 Q 15 1 30 6 T 60 6 T 90 6 T 118 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M2 18 Q 15 13 30 18 T 60 18 T 90 18 T 118 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* 4 Service Columns matching Niko Kane */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#363535]">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className={`${index > 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""} space-y-3 group`}
              >
                <div className="p-2.5 rounded-lg bg-[#141622] border border-[#363535] w-fit group-hover:border-[var(--brand-yellow)] transition-colors">
                  {service.icon}
                </div>
                
                <h3 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-[var(--brand-yellow)] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs text-gray-400 leading-relaxed font-sans font-normal">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
