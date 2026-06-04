"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Dynamically sets visibility to animate in AND out on scroll
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.05, // Trigger as soon as 5% of the section is visible
        rootMargin: "-50px 0px -50px 0px", // Margins to account for sticky navbar and screen boundaries
      }
    );

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform origin-center ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-[0.99] pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
}
