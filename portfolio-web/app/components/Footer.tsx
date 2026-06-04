"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "edetera41@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/ejay-detera",
      icon: (
        <svg className="h-5.5 w-5.5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/e-jay-detera-56221532b/",
      icon: (
        <svg className="h-5.5 w-5.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="pt-20 md:pt-28 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Get In Touch Floating Glass Card */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-accent/15 bg-base-light/40 backdrop-blur-md p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-accent/30 transition-all duration-300">
          {/* Subtle glowing blob inside card */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-accent/5 blur-2xl group-hover:bg-accent/10 transition-all duration-300 pointer-events-none" />

          <SectionHeader title="Get In Touch" center className="mb-6" />
          <p className="text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: 'white' }}>
            I am currently open to new opportunities, collaborations, and projects.
            Feel free to copy my email directly or reach out to me on my social handles!
          </p>

          {/* Interactive Email Copy Pill */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-base/90 p-2 rounded-2xl border border-accent/15 max-w-md mx-auto shadow-inner group-hover:border-accent/30 transition-all duration-300">
            <span className="text-sm font-mono text-text-primary px-3 py-1.5 select-all overflow-x-auto w-full sm:w-auto text-left sm:text-center">
              {emailAddress}
            </span>
            <button
              onClick={copyEmail}
              className={`w-full sm:w-auto rounded-xl px-5 py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer ${
                copied
                  ? "bg-accent/20 text-accent border border-accent/30"
                  : "bg-surface text-text-primary hover:bg-accent hover:text-base border border-accent/10"
              }`}
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="flex justify-center gap-6 mb-16 mt-12">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface/50 text-text-secondary border border-accent/10 transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-base hover:border-accent/20"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
          <a
            href={`mailto:${emailAddress}`}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface/50 text-text-secondary border border-accent/10 transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-base hover:border-accent/20"
            title="Send Email"
          >
            <svg className="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
        </div>
      </div>

      {/* Dark Footer Band */}
      <footer className="w-full bg-[#182123] border-t border-surface/10 py-8 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <div>
            © {new Date().getFullYear()} E-jay P. Detera. All rights reserved.
          </div>
          <div>
            Built with Next.js 16 & Tailwind CSS v4
          </div>
        </div>
      </footer>
    </section>
  );
}
