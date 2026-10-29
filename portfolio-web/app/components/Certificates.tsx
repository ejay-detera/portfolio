"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useSmoothScroll } from "./SmoothScrollProvider";

export interface Certificate {
  id: string;
  index: string;
  title: string;
  category: string;
  issuer: string;
  year: string;
  image: string;
  description: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: "ai-ready",
    index: "01",
    title: "AI Ready ASEAN Youth Challenge",
    category: "AI & Hackathons",
    issuer: "AI Singapore & ASEAN Foundation",
    year: "2026",
    image: "/ai-ready-hackathon-cert.jpg",
    description:
      "Certificate of Appreciation for contributing regional AI solutions tackling ASEAN sustainable development challenges.",
  },
  {
    id: "p2a-hackathon",
    index: "02",
    title: "P2A ASEAN Virtual Hackathon",
    category: "International Hackathon",
    issuer: "Passage to ASEAN (P2A)",
    year: "2025 – 2026",
    image: "/p2a-hackathon.png",
    description:
      "International collaborative hackathon developing cross-border technology initiatives across ASEAN member institutions.",
  },
  {
    id: "icip-cyber",
    index: "03",
    title: "ICIP Cybersecurity Certification",
    category: "Cybersecurity",
    issuer: "ICIP Information Security Program",
    year: "2025",
    image: "/icip-cert.jpg",
    description:
      "Certified proficiency in enterprise cybersecurity defense, penetration testing foundations, and threat mitigation.",
  },
  {
    id: "mabl-testing",
    index: "04",
    title: "Automated Testing & QA Proficiency",
    category: "Software Quality",
    issuer: "Mabl Quality Engineering",
    year: "2025",
    image: "/mabl-cert.jpg",
    description:
      "Proficiency in automated test authoring, end-to-end regression validation, and continuous testing in CI/CD pipelines.",
  },
  {
    id: "intro-cyber",
    index: "05",
    title: "Introduction to Cybersecurity",
    category: "Security Foundations",
    issuer: "Cisco Networking Academy",
    year: "2024",
    image: "/intro-to-cyber-cert.jpg",
    description:
      "Foundational certification in computer network security, encryption principles, and vulnerability scanning.",
  },
  {
    id: "linking-circles",
    index: "06",
    title: "Linking Circles: Ideas into Tech Ventures",
    category: "Entrepreneurship",
    issuer: "Commonwealth Information Society, PUP QC",
    year: "2026",
    image: "/Webinar-Linking-Circles_Feb27_E-Certificate_page-0001.jpg",
    description:
      "Technology venturing workshop focusing on business model generation, seed pitching, and technical MVP validation.",
  },
  {
    id: "career-ai",
    index: "07",
    title: "Career in the Era of Artificial Intelligence",
    category: "AI Industry",
    issuer: "CommITs Technical Assembly, PUP QC",
    year: "2026",
    image: "/Webinar-Career-Guidance_Jan10_E-Certificate_page-0001.jpg",
    description:
      "Executive seminar exploring enterprise AI disruption, LLM deployment architectures, and developer roles in modern tech.",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const { stop, start } = useSmoothScroll();

  useEffect(() => {
    if (selectedCert) {
      stop();
    } else {
      start();
    }
  }, [selectedCert, stop, start]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="credentials"
      className="py-20 sm:py-28 lg:py-36 bg-[var(--bg-raised)] border-b border-[var(--line)]"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12 space-y-12">
        
        {/* Header */}
        <div className="space-y-3 pb-4">
          <span className="text-eyebrow text-[var(--accent)]">/ CREDENTIALS</span>
          <h2 className="text-h2 text-[var(--text)] tracking-tight">
            Recognitions and certifications
          </h2>
        </div>

        {/* Table-style hairline rows: Index, Title, Issuer, Year, View ↗ */}
        <div className="border-t border-[var(--line)] divide-y divide-[var(--line)]">
          {CERTIFICATES.map((cert) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => setSelectedCert(cert)}
              className="w-full text-left py-6 px-2 sm:px-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[var(--bg)] transition-colors group cursor-pointer"
            >
              {/* Index */}
              <div className="md:col-span-1 text-sm font-semibold tabular-nums text-[var(--text-muted)] group-hover:text-[var(--highlight)] transition-colors">
                {cert.index}
              </div>

              {/* Title & Description */}
              <div className="md:col-span-6 space-y-0.5">
                <div className="text-base sm:text-lg font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  {cert.title}
                </div>
                <div className="text-xs text-[var(--text-muted)]">
                  {cert.description}
                </div>
              </div>

              {/* Issuer */}
              <div className="md:col-span-3 text-xs sm:text-sm text-[var(--text-muted)]">
                {cert.issuer}
              </div>

              {/* Year & View ↗ */}
              <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-6 text-xs sm:text-sm">
                <span className="tabular-nums text-[var(--text-muted)]">{cert.year}</span>
                <span className="font-semibold text-[var(--accent)] group-hover:translate-x-1 transition-transform">
                  View ↗
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Flat In-Page Certificate Viewer Modal (Flat 92% --bg, zero blur) */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10"
            style={{ backgroundColor: "oklch(0.19 0.005 60 / 0.92)" }}
            data-lenis-prevent
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--bg)] border border-[var(--line)] p-6 sm:p-8 space-y-6"
            >
              <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] pb-4">
                <div>
                  <div className="text-eyebrow text-[var(--accent)]">
                    {selectedCert.category} · {selectedCert.year}
                  </div>
                  <h3 className="text-h3 text-[var(--text)] tracking-tight mt-1">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    Issued by {selectedCert.issuer}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 border border-[var(--line)] text-[var(--text)] hover:border-[var(--text)] cursor-pointer"
                >
                  Close [ESC]
                </button>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--line)] bg-[var(--bg-sunken)]">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  sizes="800px"
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] border-t border-[var(--line)] pt-4">
                <span>{selectedCert.description}</span>
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--accent)] hover:underline shrink-0"
                >
                  Open raw asset ↗
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
