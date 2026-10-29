"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "motion/react";
import { Mail, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { useSmoothScroll } from "./SmoothScrollProvider";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.enum([
    "Web app",
    "Mobile app",
    "Database/backend",
    "Internship/role",
    "Other",
  ]),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(30, "Project details must be at least 30 characters"),
  honeypot: z.string().max(0, "Bot detected"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const { scrollTo } = useSmoothScroll();
  const emailAddress = "edetera41@gmail.com";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      projectType: "Web app",
      budget: "",
      timeline: "",
      message: "",
      honeypot: "",
    },
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || "Failed to submit inquiry");
      }

      setIsSuccess(true);
      reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setServerError(message);
    }
  };

  return (
    <footer
      id="contact"
      className="min-h-screen flex flex-col justify-between bg-[var(--bg)] border-b border-[var(--line)]"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-6 flex-1 flex flex-col justify-center space-y-8">
        
        {/* Eyebrow */}
        <div>
          <span className="text-eyebrow text-[var(--accent)]">/ CONTACT</span>
        </div>

        {/* 2-Column Split: Direct Contact vs Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h2 className="text-h2 text-[var(--text)] tracking-tight">
                Let&apos;s build something dependable.
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-body)] leading-relaxed">
                Available for full-stack engineering roles, internships, and technical contracts. Tell me about your team or project.
              </p>
            </div>

            {/* Direct Email Box with One-Click Copy */}
            <div className="space-y-2 border-t border-[var(--line)] pt-4">
              <span className="text-xs uppercase font-semibold tracking-wider text-[var(--text-muted)]">
                Email
              </span>
              <div className="flex items-center justify-between gap-3 p-2.5 bg-[var(--bg-sunken)] border border-[var(--line)]">
                <span className="text-xs sm:text-sm text-[var(--text)] select-all truncate">
                  {emailAddress}
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase bg-[var(--bg-raised)] hover:bg-[var(--line)] text-[var(--text)] border border-[var(--line)] transition-colors cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--highlight)]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2 border-t border-[var(--line)] pt-4">
              <span className="text-xs uppercase font-semibold tracking-wider text-[var(--text-muted)]">
                Profiles
              </span>
              <div className="flex items-center gap-6 pt-1">
                <a
                  href="https://github.com/ejay-detera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub ↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/e-jay-detera-56221532b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn ↗</span>
                </a>
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Mail Client ↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Inquiry Form with Compact Form Fields to Fit Screen */}
          <div className="lg:col-span-7 bg-[var(--bg-raised)] border border-[var(--line)] p-5 sm:p-7">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3 py-6 text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--accent)] text-[var(--on-accent)] mx-auto flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-h3 text-[var(--text)] tracking-tight">
                    Inquiry received
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-body)] max-w-[42ch] mx-auto">
                    Thank you for reaching out. I&apos;ll review the details and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="inline-block mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-3.5"
                  noValidate
                >
                  <input
                    type="text"
                    {...register("honeypot")}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {serverError && (
                    <div className="p-2.5 bg-[var(--danger)]/15 border border-[var(--danger)] text-xs text-[var(--text)]">
                      {serverError}
                    </div>
                  )}

                  {/* Name & Email 2-Column Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label
                        htmlFor="form-name"
                        className="block text-xs uppercase font-semibold tracking-wider text-[var(--text-muted)]"
                      >
                        Name *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        {...register("name")}
                        placeholder="Jane Doe"
                        className="w-full h-10 px-3.5 bg-[var(--bg-sunken)] border border-[var(--line)] text-xs sm:text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--accent)]"
                      />
                      {errors.name && (
                        <p className="text-[11px] text-[var(--danger)] pt-0.5">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="form-email"
                        className="block text-xs uppercase font-semibold tracking-wider text-[var(--text-muted)]"
                      >
                        Email *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        {...register("email")}
                        placeholder="jane@company.com"
                        className="w-full h-10 px-3.5 bg-[var(--bg-sunken)] border border-[var(--line)] text-xs sm:text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--accent)]"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-[var(--danger)] pt-0.5">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1">
                    <label
                      htmlFor="form-projectType"
                      className="block text-xs uppercase font-semibold tracking-wider text-[var(--text-muted)]"
                    >
                      Project Type *
                    </label>
                    <select
                      id="form-projectType"
                      {...register("projectType")}
                      className="w-full h-10 px-3 bg-[var(--bg-sunken)] border border-[var(--line)] text-xs sm:text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] cursor-pointer"
                    >
                      <option value="Web app">Web application</option>
                      <option value="Mobile app">Mobile application</option>
                      <option value="Database/backend">Database / Backend architecture</option>
                      <option value="Internship/role">Internship / Junior role opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Budget & Timeline (Optional Grid) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label
                        htmlFor="form-budget"
                        className="block text-xs uppercase font-semibold tracking-wider text-[var(--text-muted)]"
                      >
                        Budget Range (optional)
                      </label>
                      <input
                        id="form-budget"
                        type="text"
                        {...register("budget")}
                        placeholder="e.g. $1,000 – $3,000"
                        className="w-full h-10 px-3.5 bg-[var(--bg-sunken)] border border-[var(--line)] text-xs sm:text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="form-timeline"
                        className="block text-xs uppercase font-semibold tracking-wider text-[var(--text-muted)]"
                      >
                        Timeline (optional)
                      </label>
                      <input
                        id="form-timeline"
                        type="text"
                        {...register("timeline")}
                        placeholder="e.g. 1–2 months"
                        className="w-full h-10 px-3.5 bg-[var(--bg-sunken)] border border-[var(--line)] text-xs sm:text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1">
                    <label
                      htmlFor="form-message"
                      className="block text-xs uppercase font-semibold tracking-wider text-[var(--text-muted)]"
                    >
                      Project Details * (min 30 characters)
                    </label>
                    <textarea
                      id="form-message"
                      rows={3}
                      {...register("message")}
                      placeholder="Tell me about the problem, the tech stack expectations, and the intended timeline..."
                      className="w-full p-3 bg-[var(--bg-sunken)] border border-[var(--line)] text-xs sm:text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--accent)] resize-none"
                    />
                    {errors.message && (
                      <p className="text-[11px] text-[var(--danger)] pt-0.5">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-11 bg-[var(--accent)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-press)] text-[var(--on-accent)] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send inquiry</span>
                          <span>→</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <Image
              src="/EJ-LOGO.png"
              alt="E-jay Detera Logo"
              width={16}
              height={16}
              className="w-4 h-auto object-contain"
            />
            <span>
              © {new Date().getFullYear()} E-jay P. Detera · PUP QC BSIT
            </span>
          </div>

          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="text-xs uppercase font-semibold tracking-wider text-[var(--text-muted)] hover:text-[var(--text)] transition-colors cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
