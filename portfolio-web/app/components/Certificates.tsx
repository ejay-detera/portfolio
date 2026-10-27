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
    category: "AI & Hackathons",
    issuer: "AI Singapore & ASEAN Foundation",
    date: "May 2026",
    image: "/ai-ready-hackathon-cert.jpg",
    description:
      "Certificate of Appreciation for contributing regional AI solutions tackling ASEAN sustainable development challenges.",
  },
  {
    id: "p2a-hackathon",
    title: "P2A ASEAN Virtual Hackathon",
    category: "International Hackathon",
    issuer: "Passage to ASEAN (P2A)",
    date: "2025 – 2026",
    image: "/p2a-hackathon.png",
    description:
      "International collaborative hackathon developing cross-border technology initiatives across ASEAN member institutions.",
  },
  {
    id: "icip-cyber",
    title: "ICIP Cybersecurity Certification",
    category: "Cybersecurity",
    issuer: "ICIP Information Security Program",
    date: "2025",
    image: "/icip-cert.jpg",
    description:
      "Certified proficiency in enterprise cybersecurity defense, penetration testing foundations, and threat mitigation.",
  },
  {
    id: "mabl-testing",
    title: "Automated Testing & QA Proficiency",
    category: "Software Quality",
    issuer: "Mabl Quality Engineering",
    date: "2025",
    image: "/mabl-cert.jpg",
    description:
      "Proficiency in automated test authoring, end-to-end regression validation, and continuous testing in CI/CD pipelines.",
  },
  {
    id: "intro-cyber",
    title: "Introduction to Cybersecurity",
    category: "Security Foundations",
    issuer: "Cisco Networking Academy",
    date: "2024",
    image: "/intro-to-cyber-cert.jpg",
    description:
      "Comprehensive foundational certification in computer network security, encryption principles, and vulnerability scanning.",
  },
  {
    id: "linking-circles",
    title: "Linking Circles: Ideas into Tech Ventures",
    category: "Entrepreneurship",
    issuer: "Commonwealth Information Society, PUP QC",
    date: "Feb 2026",
    image: "/Webinar-Linking-Circles_Feb27_E-Certificate_page-0001.jpg",
    description:
      "Technology venturing workshop focusing on business model generation, seed pitching, and technical MVP validation.",
  },
  {
    id: "career-ai",
    title: "Career in the Era of Artificial Intelligence",
    category: "AI Industry",
    issuer: "CommITs Technical Assembly, PUP QC",
    date: "Jan 2026",
    image: "/Webinar-Career-Guidance_Jan10_E-Certificate_page-0001.jpg",
    description:
      "Executive seminar exploring enterprise AI disruption, LLM deployment architectures, and developer roles in modern tech.",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selectedCert) return;
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
  }, [selectedCert]);

  return (
    <section
      id="credentials"
      className="border-b border-[var(--border-color)] text-[var(--text-primary)]"
    >
      <div className="mx-auto max-w-7xl border-x border-[var(--border-color)] bg-[var(--bg-base)]/80 backdrop-blur-[2px]">
        {/* Section Header */}
        <div className="px-6 py-7 sm:px-10 border-b border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Verified Credentials & Hackathons
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-2xl">
              International ASEAN hackathon recognitions, cybersecurity certifications, and automated QA credentials. Select any record to inspect the certificate document.
            </p>
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)] tabular-nums shrink-0">
            {CERTIFICATES.length} VERIFIED RECORDS
          </div>
        </div>

        {/* Architectural Credential Ledger */}
        <div className="divide-y divide-[var(--border-color)]">
          {CERTIFICATES.map((cert, idx) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => setSelectedCert(cert)}
              className="w-full text-left grid grid-cols-1 lg:grid-cols-12 items-center gap-4 px-6 py-5 sm:px-10 hover:bg-[var(--bg-card)] transition-colors group cursor-pointer"
            >
              {/* Col 1-2: Index & Date */}
              <div className="lg:col-span-2 flex items-center gap-3">
                <span className="text-xs font-mono text-[var(--text-muted)] tabular-nums">
                  CRD-0{idx + 1}
                </span>
                <span className="text-xs font-mono text-[var(--brand-yellow)] tabular-nums">
                  {cert.date}
                </span>
              </div>

              {/* Col 3-7: Prominent Title & Summary */}
              <div className="lg:col-span-5 space-y-1">
                <div className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[var(--brand-yellow)] transition-colors">
                  {cert.title}
                </div>
                <p className="text-xs text-gray-300 line-clamp-1">
                  {cert.description}
                </p>
              </div>

              {/* Col 8-9: Issuer */}
              <div className="lg:col-span-2 text-xs font-mono text-gray-200">
                {cert.issuer}
              </div>

              {/* Col 10-12: Consistent Single-Line Category Tag & Fixed Action Button */}
              <div className="lg:col-span-3 flex items-center lg:justify-end gap-3">
                <span className="px-2.5 py-1 text-xs font-mono uppercase whitespace-nowrap bg-[var(--bg-subtle)] text-gray-200 border border-[var(--border-color)]">
                  {cert.category}
                </span>
                <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-mono whitespace-nowrap shrink-0 border border-[var(--border-color)] bg-[var(--bg-card)] text-white group-hover:border-[var(--brand-yellow)] group-hover:text-[var(--brand-yellow)] transition-colors">
                  VIEW ↗
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Certificate Verification Modal */}
      {mounted &&
        selectedCert &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 sm:p-6"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative w-full max-w-3xl border border-[var(--border-color)] bg-[var(--bg-base)] text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border-color)] bg-[var(--bg-card)]">
                <div className="space-y-0.5">
                  <div className="font-display font-bold text-base text-white">
                    {selectedCert.title}
                  </div>
                  <div className="text-xs font-mono text-[var(--text-muted)]">
                    {selectedCert.issuer} · {selectedCert.date}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-3 py-1 text-xs font-mono uppercase border border-[var(--border-color)] bg-[var(--bg-subtle)] hover:border-[var(--brand-yellow)] hover:text-[var(--brand-yellow)] cursor-pointer"
                >
                  Close [ESC]
                </button>
              </div>
              <div className="p-4 sm:p-6 bg-[#08080A] max-h-[75vh] overflow-y-auto">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>
              <div className="px-5 py-3 border-t border-[var(--border-color)] bg-[var(--bg-card)] text-xs text-[var(--text-secondary)]">
                {selectedCert.description}
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
