"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export interface Certificate {
  id: string;
  title: string;
  category: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: "ai-ready",
    title: "AI Ready ASEAN Youth Challenge",
    category: "AI & HACKATHONS",
    issuer: "AI Singapore & ASEAN Foundation",
    date: "May 2026",
    image: "/ai-ready-hackathon-cert.jpg",
    description: "Certificate of Appreciation for contributing regional AI solutions tackling ASEAN sustainable development challenges.",
  },
  {
    id: "p2a-hackathon",
    title: "P2A ASEAN Virtual Hackathon",
    category: "INTERNATIONAL HACKATHON",
    issuer: "Passage to ASEAN (P2A)",
    date: "2025 – 2026",
    image: "/p2a-hackathon.png",
    description: "International collaborative hackathon developing cross-border technology initiatives across ASEAN member institutions.",
  },
  {
    id: "icip-cyber",
    title: "ICIP Cybersecurity Certification",
    category: "CYBERSECURITY",
    issuer: "ICIP Information Security Program",
    date: "2025",
    image: "/icip-cert.jpg",
    description: "Certified proficiency in enterprise cybersecurity defense, penetration testing foundations, and threat mitigation.",
  },
  {
    id: "intro-cyber",
    title: "Introduction to Cybersecurity",
    category: "SECURITY FOUNDATIONS",
    issuer: "Cisco Networking Academy",
    date: "2024",
    image: "/intro-to-cyber-cert.jpg",
    description: "Comprehensive foundational certification in computer network security, encryption principles, and vulnerability scanning.",
  },
  {
    id: "mabl-testing",
    title: "Automated Testing & QA Proficiency",
    category: "SOFTWARE QUALITY",
    issuer: "Mabl Quality Engineering",
    date: "2025",
    image: "/mabl-cert.jpg",
    description: "Proficiency in automated test authoring, end-to-end regression validation, and continuous testing in CI/CD pipelines.",
  },
  {
    id: "linking-circles",
    title: "Linking Circles: Ideas into Tech Ventures",
    category: "ENTREPRENEURSHIP",
    issuer: "Commonwealth Information Society, PUP QC",
    date: "Feb 2026",
    image: "/Webinar-Linking-Circles_Feb27_E-Certificate_page-0001.jpg",
    description: "Technology venturing workshop focusing on business model generation, seed pitching, and technical MVP validation.",
  },
  {
    id: "career-ai",
    title: "Career in the Era of Artificial Intelligence",
    category: "AI INDUSTRY",
    issuer: "CommITs Technical Assembly, PUP QC",
    date: "Jan 2026",
    image: "/Webinar-Career-Guidance_Jan10_E-Certificate_page-0001.jpg",
    description: "Executive seminar exploring enterprise AI disruption, LLM deployment architectures, and developer roles in modern tech.",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Responsive cards per view calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll and handle escape when certificate modal is open
  useEffect(() => {
    if (selectedCert) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedCert(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalStyle;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedCert]);

  const maxIndex = Math.max(0, CERTIFICATES.length - cardsPerView);
  const totalPages = Math.max(1, maxIndex + 1);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Mobile Touch Swipe Handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  return (
    <section id="credentials" className="py-8 md:py-12 border-b border-[var(--border-color)] bg-[var(--bg-base)] relative overflow-hidden flex flex-col justify-center min-h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-4.5rem)] lg:max-h-[820px]">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 pb-4 border-b border-[var(--border-color)]">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-[var(--brand-red)] uppercase font-mono">
              VERIFIED CREDENTIALS
            </span>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight" style={{ color: '#FFFFFF' }}>
              Certificates & Hackathons
            </h2>

            <div className="w-32 text-[var(--brand-yellow)]">
              <svg viewBox="0 0 140 20" fill="none" className="w-full h-auto">
                <path d="M2 10 Q 20 2 40 10 T 80 10 T 120 10 T 138 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3">
            <div className="text-xs font-mono font-bold text-[var(--brand-yellow)] uppercase tracking-wider bg-[var(--bg-card)] border border-[var(--border-color)] px-3.5 py-1.5 rounded-full hidden sm:block">
              CLICK CARD TO INSPECT
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                disabled={maxIndex === 0}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#363535] bg-[#12131D] text-white hover:border-[var(--brand-yellow)] hover:bg-[#1A1C29] transition-all cursor-pointer shadow-xs disabled:opacity-40 disabled:cursor-not-allowed"
                title="Previous Certificates"
                aria-label="Previous Certificates"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <span className="text-xs font-mono font-bold text-gray-300 px-1">
                {String(Math.min(currentIndex + 1, totalPages)).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
              </span>

              <button
                onClick={nextSlide}
                disabled={maxIndex === 0}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#363535] bg-[#12131D] text-white hover:border-[var(--brand-yellow)] hover:bg-[#1A1C29] transition-all cursor-pointer shadow-xs disabled:opacity-40 disabled:cursor-not-allowed"
                title="Next Certificates"
                aria-label="Next Certificates"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 3-Item Carousel Window with Fixed Minimum Height & Touch Swipe */}
        <div
          className="relative overflow-hidden w-full py-2 min-h-[380px] touch-pan-y select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={`flex transition-transform duration-500 ease-out -mx-3 ${CERTIFICATES.length < cardsPerView ? "justify-center" : ""
              }`}
            style={{
              transform: CERTIFICATES.length < cardsPerView
                ? "none"
                : `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.id}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
              >
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="group cursor-pointer flex flex-col justify-between rounded-2xl border-2 border-[#363535] bg-[#0E101A] overflow-hidden transition-all duration-300 hover:border-[var(--brand-yellow)] hover:-translate-y-1 hover:shadow-xl h-[370px]"
                >
                  {/* Certificate Image Preview */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#06070E] border-b border-[#252836] flex-shrink-0">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      draggable={false}
                      className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500 select-none"
                    />
                    <div className="absolute top-2.5 right-2.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--brand-yellow)] text-[#06070E]">
                        {cert.category}
                      </span>
                    </div>
                  </div>

                  {/* Text Info */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-3">
                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold leading-snug line-clamp-1" style={{ color: '#FFFFFF' }}>
                        {cert.title}
                      </h3>
                      <p className="text-xs font-medium truncate" style={{ color: '#D1D5DB' }}>
                        {cert.issuer}
                      </p>
                      <p className="text-xs line-clamp-2 leading-relaxed" style={{ color: '#9CA3AF' }}>
                        {cert.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-[#252836] text-xs font-mono text-gray-400">
                      <span>{cert.date}</span>
                      <span className="font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1" style={{ color: '#E5A93C' }}>
                        INSPECT ↗
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots - Fixed Height Reserved */}
        <div className="flex items-center justify-center gap-1.5 pt-4 h-8">
          {maxIndex > 0 && Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${currentIndex === i
                  ? "w-6 bg-[var(--brand-yellow)]"
                  : "w-1.5 bg-[#363535] hover:bg-gray-400"
                }`}
              aria-label={`Go to certificate slide ${i + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Interactive Certificate Viewer Modal - Guaranteed 100% Upfront with Premium High Contrast */}
      {mounted && selectedCert && createPortal(
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[88vh] flex flex-col rounded-3xl border-2 border-[#363535] bg-[#0E101A] shadow-2xl text-white overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-[#363535] flex items-center justify-between flex-shrink-0 bg-[#0E101A]">
              <div className="pr-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider block" style={{ color: '#E5A93C' }}>
                  {selectedCert.category} • {selectedCert.issuer}
                </span>
                <h3 className="text-lg sm:text-2xl font-black leading-tight mt-1" style={{ color: '#FFFFFF' }}>
                  {selectedCert.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A1C29] text-white hover:bg-[var(--brand-red)] transition-colors cursor-pointer border border-[#363535] flex-shrink-0"
                aria-label="Close modal"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Certificate High-Res Viewer */}
            <div className="p-4 sm:p-6 bg-[#06070E] flex items-center justify-center flex-grow overflow-auto min-h-0 editorial-scrollbar">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                draggable={false}
                className="max-h-[52vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10 select-none"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-[#363535] flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-shrink-0 bg-[#0E101A]">
              <p className="text-xs sm:text-sm max-w-xl leading-relaxed" style={{ color: '#D1D5DB' }}>
                {selectedCert.description}
              </p>

              <div className="flex items-center gap-3">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full font-black px-5 py-2.5 text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md inline-flex items-center gap-1.5 font-mono"
                  style={{ backgroundColor: '#E5A93C', color: '#06070E' }}
                >
                  <span>OPEN ORIGINAL FILE</span>
                  <span>↗</span>
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-xs font-mono font-bold text-gray-400 hover:text-white transition-colors cursor-pointer ml-1"
                >
                  CLOSE [ESC]
                </button>
              </div>
            </div>

          </div>
        </div>,
        document.body
      )}

    </section>
  );
}
