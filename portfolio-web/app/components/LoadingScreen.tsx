"use client";

import { useState, useEffect } from "react";
import ShapeGrid from "./ShapeGrid";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock scroll during initial loading
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const startTime = performance.now();
    const duration = 8000; // 8 seconds duration as requested

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Smooth steady progression up to 100% across 8 seconds
      const eased = Math.min(1, 1 - Math.pow(1 - t, 2.5));
      const currentVal = Math.floor(eased * 100);
      setProgress(currentVal);

      if (t < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            setIsDone(true);
            document.body.style.overflow = originalOverflow;
          }, 500); // 500ms smooth fade duration
        }, 300);
      }
    };

    const frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#06070E] transition-all duration-500 ease-out select-none ${
        isFading ? "opacity-0 scale-102 pointer-events-none" : "opacity-100 scale-100"
      }`}
      aria-hidden={isDone}
    >
      {/* Background Animated ShapeGrid matching Hero section */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-85">
        <ShapeGrid 
          speed={0.3} 
          squareSize={32}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.08)"
          hoverFillColor="rgba(229, 169, 60, 0.22)"
          shape="square"
          hoverTrailAmount={4}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-[280px] sm:max-w-xs w-full px-6">
        
        {/* Center Logo - Clean, Simple, Non-blinking */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Subtle Static Warm Halo */}
          <div className="absolute w-28 h-28 rounded-full bg-gradient-to-r from-[#E5A93C]/15 to-[#F97316]/15 blur-xl pointer-events-none" />
          
          <img
            src="/EJ-LOGO.png"
            alt="EJ"
            draggable={false}
            className="relative z-10 h-16 sm:h-20 w-auto object-contain drop-shadow-[0_4px_16px_rgba(229,169,60,0.3)] select-none"
          />
        </div>

        {/* Progress Bar & Details */}
        <div className="w-full space-y-2.5">
          {/* The Progress Bar Track */}
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#12131D] border border-[#2B3045] p-[1px]">
            {/* The Gradient Fill: Vibrant Yellow to Deep Orange */}
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#E5A93C] via-[#F59E0B] to-[#EA580C] transition-all duration-75 ease-out shadow-[0_0_12px_rgba(245,158,11,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Technical Loading Readout */}
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest uppercase">
            <span className="text-gray-400 font-semibold">LOADING</span>
            <span className="font-bold text-[#E5A93C]">
              {String(progress).padStart(3, "0")}%
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
