"use client";

import { useState, useEffect } from "react";
import SpecularButton from "./SpecularButton";

import StaggeredMenu from "./StaggeredMenu";

const NAV_ITEMS = [
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CREDENTIALS", href: "#credentials" },
  { name: "CONTACT", href: "#contact" },
];

const MENU_ITEMS = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CREDENTIALS", href: "#credentials" },
  { name: "CONTACT", href: "#contact" },
];

const SOCIAL_ITEMS = [
  { label: "GitHub", link: "https://github.com/ejay-detera" },
  { label: "LinkedIn", link: "https://linkedin.com" },
  { label: "Email", link: "mailto:edetera41@gmail.com" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Near top of page, no sub-section is active
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      // Check if at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 60) {
        setActiveSection("#contact");
        return;
      }

      // Measure using getBoundingClientRect for absolute accuracy with transforms & layouts
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
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#06070E]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">

          {/* Brand Logo - Guaranteed Pure White High Contrast */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 font-black tracking-tighter text-sm sm:text-base md:text-lg hover:opacity-85 transition-opacity"
            style={{ color: '#FFFFFF' }}
          >
            <img
              src="/EJ-LOGO.png"
              alt="EJ"
              draggable={false}
              className="h-5 sm:h-6 w-auto object-contain filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)] select-none"
            />
            <span className="hidden md:inline" style={{ color: '#FFFFFF' }}>E-JAY DETERA</span>
            <span
              className="hidden md:inline-flex items-center justify-center select-none"
              style={{ color: '#E5A93C' }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 animate-spin-slow"
                fill="none"
                stroke="#E5A93C"
                strokeWidth="2.8"
                strokeLinecap="round"
              >
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
                <circle cx="12" cy="12" r="1.5" fill="#E5A93C" />
              </svg>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-semibold tracking-wider">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative py-1.5 transition-colors duration-200 cursor-pointer font-bold"
                  style={{ color: isActive ? '#E5A93C' : '#CBD5E1' }}
                >
                  <span className="hover:text-white transition-colors">
                    {item.name}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-[var(--brand-yellow)] shadow-[0_0_8px_rgba(229,169,60,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area: Specular CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <SpecularButton
              size="sm"
              onClick={(e) => handleNavClick(e as any, "#contact")}
            >
              <span style={{ color: '#FFFFFF' }}>LET'S WORK TOGETHER</span>
              <span style={{ color: '#FFFFFF' }}>→</span>
            </SpecularButton>
          </div>

          {/* Mobile Right Controls: StaggeredMenu (React Bits) */}
          <div className="flex md:hidden items-center">
            <StaggeredMenu
              position="right"
              isFixed={true}
              showLogo={false}
              items={MENU_ITEMS.map((item) => ({
                label: item.name,
                ariaLabel: `Go to ${item.name} section`,
                link: item.href,
                onClick: (e) => handleNavClick(e, item.href),
              }))}
              socialItems={SOCIAL_ITEMS}
              displaySocials={true}
              displayItemNumbering={true}
              colors={['#141624', '#DE4E2B', '#E5A93C']}
              accentColor="#E5A93C"
              menuButtonColor="#ffffff"
              openMenuButtonColor="#E5A93C"
              ctaText="LET'S WORK TOGETHER"
              ctaLink="#contact"
              onCtaClick={(e) => handleNavClick(e, "#contact")}
            />
          </div>

        </div>
      </div>
    </header>
  );
}
