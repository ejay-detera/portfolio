"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { name: "Systems", href: "#projects" },
  { name: "Experience & Stack", href: "#experience" },
  { name: "Credentials", href: "#credentials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 60) {
        setActiveSection("#contact");
        return;
      }

      const navThreshold = 180;
      let matched = "";

      for (const item of NAV_ITEMS) {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navThreshold && rect.bottom > navThreshold) {
            matched = item.href;
            break;
          }
        }
      }

      if (matched) {
        setActiveSection(matched);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    setMobileOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -64;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg-base)]/95 border-b border-[var(--border-color)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 font-display font-bold tracking-tight text-sm sm:text-base text-[var(--text-primary)] hover:text-[var(--brand-yellow)] transition-colors"
          >
            <img
              src="/EJ-LOGO.png"
              alt="E-jay Detera Logo"
              draggable={false}
              className="h-5 w-auto object-contain select-none"
            />
            <span>E-JAY P. DETERA</span>
            <span className="hidden lg:inline-block text-xs font-mono font-normal text-[var(--text-muted)] border-l border-[var(--border-color)] pl-3">
              BSIT · PUP QC
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center h-full divide-x divide-[var(--border-color)] border-x border-[var(--border-color)]">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center h-full px-5 text-xs font-mono tracking-wider uppercase transition-colors ${
                    isActive
                      ? "bg-[var(--bg-subtle)] text-[var(--brand-yellow)] font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/ejay-detera"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-[#0C0C0E] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[var(--brand-yellow)] transition-colors"
            >
              <span>Contact</span>
              <span>→</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden inline-flex items-center justify-center px-3 py-2 border border-[var(--border-color)] bg-[var(--bg-card)] text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] hover:border-[var(--brand-yellow)]"
          >
            {mobileOpen ? "Close [×]" : "Menu [≡]"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-[var(--border-color)] bg-[var(--bg-base)] divide-y divide-[var(--border-color)]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-6 py-3.5 text-xs font-mono uppercase tracking-wider ${
                  isActive
                    ? "bg-[var(--bg-subtle)] text-[var(--brand-yellow)] font-bold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {item.name}
              </a>
            );
          })}
          <div className="px-6 py-4 flex items-center justify-between bg-[var(--bg-card)]">
            <a
              href="https://github.com/ejay-detera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              github.com/ejay-detera ↗
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="bg-[var(--brand-yellow)] text-[#0C0C0E] px-4 py-2 text-xs font-mono font-bold uppercase"
            >
              Contact →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
