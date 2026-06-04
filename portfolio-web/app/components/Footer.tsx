"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";


export default function Footer() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "ejay.detera@example.com"; // Placeholder email

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ejaydetera", // Placeholder
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/ejaydetera", // Placeholder
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <footer id="contact" className="bg-surface/20 border-t border-surface/20 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Contact/CTA */}
        <div className="max-w-xl mx-auto mb-12">
          <SectionHeader title="Get In Touch" center className="mb-6" />
          <p className="text-text-secondary text-sm sm:text-base mb-6">

            I am currently open to new opportunities, collaborations, and projects. 
            Feel free to email me directly or reach out on my socials!
          </p>

          {/* Interactive Email Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-surface/30 p-2 rounded-2xl border border-accent/15 max-w-md mx-auto">
            <span className="text-sm font-mono text-text-primary px-3 py-1.5 select-all overflow-x-auto w-full sm:w-auto text-left sm:text-center">
              {emailAddress}
            </span>
            <button
              onClick={copyEmail}
              className={`w-full sm:w-auto rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
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
        <div className="flex justify-center gap-6 mb-12">
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
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-surface/30 pt-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <div>
            © {new Date().getFullYear()} E-jay P. Detera. All rights reserved.
          </div>
          <div>
            Built with Next.js 16 & Tailwind CSS v4
          </div>
        </div>

      </div>
    </footer>
  );
}
