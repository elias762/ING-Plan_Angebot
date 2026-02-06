"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Maximize2, Minimize2 } from "lucide-react";

interface DemoFrameProps {
  src: string;
  title: string;
}

export default function DemoFrame({ src, title }: DemoFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative mt-8 overflow-hidden rounded-xl border border-border shadow-lg bg-white"
    >
      <button
        onClick={toggleFullscreen}
        className="absolute right-3 top-3 z-10 flex items-center gap-2 rounded-lg bg-slate-900/80 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-slate-900"
        title={isFullscreen ? "Vollbild beenden" : "Vollbild"}
      >
        {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        {isFullscreen ? "Schließen" : "Vollbild"}
      </button>
      <iframe
        src={src}
        title={title}
        className={isFullscreen ? "h-screen w-full" : "h-[600px] w-full"}
        loading="lazy"
      />
    </div>
  );
}
