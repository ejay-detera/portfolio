"use client";

import { useState } from "react";
import SpecularButton from "./SpecularButton";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
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
    
    // Direct mailto fallback with pre-filled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#06070E] text-white pt-14 md:pt-18 border-t-2 border-[#363535] relative overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Interactive Contact Form & Direct Connection Card */}
        <div className="mb-12 rounded-3xl border border-[#363535] bg-[#12131D] p-6 sm:p-10 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--brand-yellow)]">
                  GET IN TOUCH
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                  Let's discuss your next project.
                </h3>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed font-sans">
                Whether you have an upcoming web project, need assistance with system architecture or mobile engineering, or want to collaborate — send a message or copy my direct email below!
              </p>

              {/* Copy Email Pill */}
              <div className="flex flex-col sm:flex-row items-center gap-3 rounded-2xl border border-[#363535] bg-[#06070E] p-2.5">
                <span className="text-xs sm:text-sm font-mono text-gray-200 px-3 truncate w-full sm:w-auto">
                  {emailAddress}
                </span>
                <button
                  onClick={copyEmail}
                  className={`w-full sm:w-auto rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    copied
                      ? "bg-[var(--brand-yellow)] text-white"
                      : "bg-[#363535] hover:bg-[var(--brand-yellow)] text-white"
                  }`}
                >
                  {copied ? "COPIED TO CLIPBOARD!" : "COPY EMAIL"}
                </button>
              </div>

              {/* Direct Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/ejay-detera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#363535] bg-[#06070E] text-gray-300 hover:text-white hover:border-[var(--brand-yellow)] transition-colors"
                  title="GitHub"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/e-jay-detera-56221532b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#363535] bg-[#06070E] text-gray-300 hover:text-white hover:border-[var(--brand-yellow)] transition-colors"
                  title="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#363535] bg-[#06070E] text-gray-300 hover:text-white hover:border-[var(--brand-yellow)] transition-colors"
                  title="Send Direct Email"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </a>
              </div>

            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="rounded-2xl border border-[var(--brand-yellow)] bg-[#06070E] p-8 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[var(--brand-yellow)]/20 border border-[var(--brand-yellow)] flex items-center justify-center text-[var(--brand-yellow)]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white">Opening Email Client!</h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Your email client is ready with your message. If it didn't open automatically, write directly to <strong className="text-[var(--brand-yellow)]">{emailAddress}</strong>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono font-bold text-[var(--brand-yellow)] underline uppercase"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full rounded-xl border border-[#363535] bg-[#06070E] px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-[var(--brand-yellow)] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-[#363535] bg-[#06070E] px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-[var(--brand-yellow)] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, or architecture needs..."
                      className="w-full rounded-xl border border-[#363535] bg-[#06070E] px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-[var(--brand-yellow)] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <SpecularButton
                    type="submit"
                    size="md"
                  >
                    <span style={{ color: '#FFFFFF' }}>SEND INQUIRY</span>
                    <span style={{ color: '#FFFFFF' }}>→</span>
                  </SpecularButton>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Niko Kane Style Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#363535]">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 font-black tracking-tight text-xl text-white">
              <span>EJAY DETERA</span>
              <span className="text-[var(--brand-yellow)]" style={{ color: '#E5A93C' }}>✳</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-sans max-w-sm">
              Full-stack software developer and system architect engineering resilient web applications, mobile platforms, and database schemas.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--brand-yellow)]">
              NAVIGATION
            </h5>
            <ul className="space-y-2 text-xs text-gray-400 font-sans">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#credentials" className="hover:text-white transition-colors">Credentials</a></li>
            </ul>
          </div>

          {/* Col 3: Services Offered */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--brand-yellow)]">
              SERVICES
            </h5>
            <ul className="space-y-2 text-xs text-gray-400 font-sans">
              <li>System Architecture & ERD</li>
              <li>Full-Stack Web Engineering</li>
              <li>Cross-Platform Mobile Apps</li>
              <li>AI & Emerging Tech Integration</li>
              <li>Database Design & Optimization</li>
            </ul>
          </div>

          {/* Col 4: Contact & Stamp */}
          <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--brand-yellow)]">
                DIRECT CONTACT
              </h5>
              <div className="text-xs text-gray-300 font-mono">
                edetera41@gmail.com
              </div>
              <div className="text-xs text-gray-400 font-sans">
                Quezon City, Philippines • Available Worldwide
              </div>
            </div>

            {/* Circular Stamp directly matching Niko Kane's bottom seal */}
            <div className="relative w-24 h-24 flex items-center justify-center border-2 border-[var(--brand-yellow)] rounded-full p-2 bg-[#12131D]">
              <svg className="w-full h-full animate-spin-slow text-white" viewBox="0 0 100 100">
                <path
                  id="footerSeal"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="none"
                />
                <text className="text-[8.5px] font-bold tracking-[0.2em] uppercase fill-white">
                  <textPath href="#footerSeal">
                    • CODE THAT MEANS SOMETHING
                  </textPath>
                </text>
              </svg>
              <div className="absolute text-sm text-[var(--brand-yellow)] font-bold" style={{ color: '#E5A93C' }}>
                ✳
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Back to Top Strip */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © {new Date().getFullYear()} E-jay P. Detera. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Built with Next.js 16 & JetBrains Mono</span>
            <button
              onClick={scrollToTop}
              className="text-[var(--brand-yellow)] hover:underline cursor-pointer uppercase font-bold"
            >
              BACK TO TOP ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
