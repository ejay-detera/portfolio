"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useSmoothScroll } from "./SmoothScrollProvider";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Systems", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Credentials", href: "#credentials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollTo, stop, start } = useSmoothScroll();

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 120 && currentScrollY > lastScrollY.current + 8) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current - 8 || currentScrollY <= 80) {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;

      // Determine active nav section based on scroll position
      const scrollPos = currentScrollY + 120;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const target = document.querySelector(NAV_LINKS[i].href);
        if (target) {
          const top = (target as HTMLElement).offsetTop;
          if (scrollPos >= top) {
            setActiveSection(NAV_LINKS[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      stop();
    } else {
      start();
    }
  }, [mobileOpen, stop, start]);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    setMobileOpen(false);
    scrollTo(href, { offset: 0 }); // offset 0 allows section to fit the screen
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-transform duration-300 ease-out border-b border-[var(--line)] ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{
          backgroundColor: "color-mix(in oklch, var(--bg) 85%, transparent)",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
          <div className="flex h-18 items-center justify-between">
            {/* Left: Logo & Wordmark */}
            <button
              type="button"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-3 cursor-pointer group text-left"
            >
              <Image
                src="/EJ-LOGO.png"
                alt="E-jay Detera Logo"
                width={22}
                height={22}
                className="w-5.5 h-auto object-contain"
                priority
              />
              <span className="font-semibold text-base text-[var(--text)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                E-jay Detera
              </span>
            </button>

            {/* Desktop Navigation with Active Orange Box Highlight (media_1793300142042_02295cf9.png) */}
            <nav className="hidden md:flex items-center gap-3">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className={`relative text-sm px-3.5 py-1.5 transition-colors cursor-pointer ${
                      isActive
                        ? "text-[var(--text)] border-2 border-[var(--accent)] font-semibold"
                        : "text-[var(--text-muted)] hover:text-[var(--text)] border-2 border-transparent"
                    }`}
                  >
                    <span>{link.name}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              <span
                className={`w-6 h-[1.5px] bg-[var(--text)] transition-transform duration-200 ${
                  mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
                }`}
              />
              <span
                className={`w-6 h-[1.5px] bg-[var(--text)] transition-transform duration-200 ${
                  mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[var(--bg)]/92 flex flex-col md:hidden"
            data-lenis-prevent
          >
            <div className="flex h-18 items-center justify-between px-5 sm:px-8 border-b border-[var(--line)]">
              <span className="font-semibold text-base text-[var(--text)]">Navigation</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-lg text-[var(--text)] cursor-pointer"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 py-10 space-y-4">
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.3 }}
                  >
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className={`text-2xl font-bold py-1.5 px-3 transition-colors text-left cursor-pointer border-2 ${
                        isActive
                          ? "border-[var(--accent)] text-[var(--text)]"
                          : "border-transparent text-[var(--text-muted)] hover:text-[var(--text)]"
                      }`}
                    >
                      {link.name}
                    </button>
                  </motion.div>
                );
              })}
            </div>

            <div className="p-8 border-t border-[var(--line)] text-xs text-[var(--text-muted)] flex justify-between">
              <span>E-jay P. Detera</span>
              <span>PUP QC · BSIT</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
