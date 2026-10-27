"use client";

import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const emailAddress = "edetera41@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    const subject = encodeURIComponent(
      `Engineering Opportunity / Inquiry — ${formData.name || "Recruiter"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="text-[var(--text-primary)]"
    >
      <div className="mx-auto max-w-7xl border-x border-[var(--border-color)] bg-[var(--bg-base)]/80 backdrop-blur-[2px]">
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border-color)]">
          {/* Left 6 Columns: Direct Contact & Coordinates */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-2">
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
                Direct Contact
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-md">
                Available for software engineering internships, junior full-stack roles, and technical collaborations. Reach out directly via email or GitHub.
              </p>
            </div>

            {/* One-Click Copy Email Box */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                Primary Email Endpoint
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-[var(--border-color)] bg-[var(--bg-card)] p-3">
                <span className="font-mono text-sm text-[var(--text-primary)] px-2 select-all">
                  {emailAddress}
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    copied
                      ? "bg-[var(--brand-yellow)] text-[#0C0C0E]"
                      : "bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--brand-yellow)] hover:text-[var(--brand-yellow)]"
                  }`}
                >
                  {copied ? "Copied to Clipboard" : "Copy Email"}
                </button>
              </div>
            </div>

            {/* External Profiles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border border-[var(--border-color)] divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-color)] bg-[var(--bg-card)]">
              <a
                href="https://github.com/ejay-detera"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 flex items-center justify-between text-xs font-mono text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--brand-yellow)] transition-colors"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/e-jay-detera-56221532b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 flex items-center justify-between text-xs font-mono text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--brand-yellow)] transition-colors"
              >
                <span>LinkedIn</span>
                <span>↗</span>
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="p-4 flex items-center justify-between text-xs font-mono text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--brand-yellow)] transition-colors"
              >
                <span>Mail Client</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right 6 Columns: Quick Dispatch Form */}
          <div className="lg:col-span-6 p-6 sm:p-10 bg-[var(--bg-card)]/30">
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                Send Direct Inquiry
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-[var(--text-secondary)]"
                  >
                    Name / Organization
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Jane Doe / Acme Corp"
                    className="w-full border border-[var(--border-color)] bg-[var(--bg-base)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--brand-yellow)] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono text-[var(--text-secondary)]"
                  >
                    Reply-To Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="recruiter@company.com"
                    className="w-full border border-[var(--border-color)] bg-[var(--bg-base)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--brand-yellow)] focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-[var(--text-secondary)]"
                >
                  Role / Project Details *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Hello E-jay, we are looking for a software engineering intern / full-stack developer..."
                  className="w-full border border-[var(--border-color)] bg-[var(--bg-base)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--brand-yellow)] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-[var(--brand-yellow)] text-[#0C0C0E] px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#f2b94f] transition-colors cursor-pointer"
              >
                <span>Open in Mail Client</span>
                <span>→</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="px-6 py-5 sm:px-10 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <img
              src="/EJ-LOGO.png"
              alt="EJ"
              draggable={false}
              className="h-4 w-auto object-contain select-none"
            />
            <span>
              © {new Date().getFullYear()} E-jay P. Detera · BSIT Student at PUP Quezon City Campus
            </span>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-[var(--brand-yellow)] transition-colors cursor-pointer uppercase"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
