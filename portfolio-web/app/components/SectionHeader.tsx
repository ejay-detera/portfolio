"use client";

import { useEffect, useRef, useState } from "react";

interface SectionHeaderProps {
  title: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeader({ title, center = false, className = "" }: SectionHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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
      className={`group space-y-4 cursor-default transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${center ? "text-center" : "text-center md:text-left"} ${className}`}
    >
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl transition-colors duration-300 group-hover:text-accent">
        {title}
      </h2>
      <div
        className={`h-1 bg-accent rounded-full transition-all duration-500 ease-in-out group-hover:bg-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.9)] ${
          center ? "mx-auto w-16 group-hover:w-32" : "mx-auto md:mx-0 w-16 group-hover:w-32"
        }`}
      />
    </div>
  );
}

