"use client";

import { useEffect } from "react";

export default function PreventDrag() {
  useEffect(() => {
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.tagName === "IMG" ||
        target instanceof HTMLImageElement ||
        target?.closest("img")
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("dragstart", handleDragStart, { capture: true });
    return () => {
      window.removeEventListener("dragstart", handleDragStart, { capture: true });
    };
  }, []);

  return null;
}
