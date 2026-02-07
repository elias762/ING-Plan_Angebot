import { ArrowUpRight } from "lucide-react";

interface DemoFrameProps {
  src: string;
  title: string;
  description?: string;
}

export default function DemoFrame({ src, title, description }: DemoFrameProps) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-8 flex items-center justify-between gap-6 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-6 text-white transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
    >
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/60">
          Interaktiver Prototyp
        </p>
        <p className="mt-1.5 text-base font-semibold leading-snug">
          {title}
        </p>
        {description && (
          <p className="mt-1 text-sm text-white/70">{description}</p>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-2 rounded-md bg-white/15 px-4 py-2.5 text-sm font-medium transition-colors group-hover:bg-white/25">
        Jetzt ausprobieren
        <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </a>
  );
}
