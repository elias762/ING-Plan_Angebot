"use client";

import { useMemo, useState } from "react";

const fmt = (n: number) =>
  n.toLocaleString("de-DE", { maximumFractionDigits: 0 }) + " €";

// Feste Annahmen
const AVG_VOLUME = 50000;
const EBIT_MARGIN = 0.1;
const HOURLY_RATE = 65;
const COST = 17000;

export default function RoiCard() {
  const [extraProjects, setExtraProjects] = useState(2);
  const [savedHours, setSavedHours] = useState(40);

  const result = useMemo(() => {
    const pipelineEbit = extraProjects * AVG_VOLUME * EBIT_MARGIN;
    const orgSavings = savedHours * HOURLY_RATE * 12;
    const totalEbit = pipelineEbit + orgSavings;
    const paybackMonths = totalEbit > 0 ? (COST / totalEbit) * 12 : Infinity;
    const roi3y = totalEbit > 0 ? Math.round(((totalEbit * 3 - COST) / COST) * 100) : 0;
    return { pipelineEbit, orgSavings, totalEbit, paybackMonths, roi3y };
  }, [extraProjects, savedHours]);

  return (
    <div className="mt-10">
      <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.15em] text-foreground-muted">
        Potenziellen ROI berechnen
      </p>

      <div className="overflow-hidden rounded border border-border bg-white">
        {/* Sliders */}
        <div className="grid gap-0 md:grid-cols-2">
          <div className="border-b border-border p-6 md:border-r">
            <p className="text-[11px] font-medium uppercase tracking-wider text-foreground-muted">
              Pipeline-Effekt
            </p>
            <div className="mt-4">
              <SliderInput
                label="Zusätzliche Projekte / Jahr"
                value={extraProjects}
                onChange={setExtraProjects}
                min={0}
                max={6}
                step={1}
                format={(v) => `${v}`}
              />
            </div>
            <p className="mt-3 text-[11px] text-foreground-muted/60">
              Annahme: Ø {fmt(AVG_VOLUME)} Volumen, {EBIT_MARGIN * 100} % Marge
            </p>
          </div>

          <div className="border-b border-border p-6">
            <p className="text-[11px] font-medium uppercase tracking-wider text-foreground-muted">
              Operative Einsparung
            </p>
            <div className="mt-4">
              <SliderInput
                label="Eingesparte Stunden / Monat"
                value={savedHours}
                onChange={setSavedHours}
                min={0}
                max={120}
                step={5}
                format={(v) => `${v} Std.`}
              />
            </div>
            <p className="mt-3 text-[11px] text-foreground-muted/60">
              Annahme: interner Stundensatz {HOURLY_RATE} €
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="bg-foreground p-6 text-white">
          <div className="grid grid-cols-4 gap-3">
            <div className="rounded bg-white/10 px-4 py-4 text-center">
              <p className="text-[10px] font-medium uppercase tracking-wider text-white/50">
                Gesamteffekt / Jahr
              </p>
              <p className="mt-2 text-xl font-semibold leading-none md:text-2xl">
                {fmt(result.totalEbit)}
              </p>
            </div>
            <div className="rounded bg-white/10 px-4 py-4 text-center">
              <p className="text-[10px] font-medium uppercase tracking-wider text-white/50">
                Payback
              </p>
              <p className="mt-2 text-xl font-semibold leading-none md:text-2xl">
                {result.paybackMonths === Infinity
                  ? "–"
                  : result.paybackMonths < 1
                    ? "<1"
                    : `~${Math.round(result.paybackMonths)}`}
                {result.paybackMonths !== Infinity && (
                  <span className="ml-1 text-sm font-normal text-white/50">Mon.</span>
                )}
              </p>
            </div>
            <div className="rounded bg-white/20 px-4 py-4 text-center">
              <p className="text-[10px] font-medium uppercase tracking-wider text-white/60">
                ROI (3 Jahre)
              </p>
              <p className="mt-2 text-xl font-semibold leading-none md:text-2xl">
                {result.roi3y > 0 ? `${result.roi3y}%` : "–"}
              </p>
            </div>
            <div className="rounded bg-white/10 px-4 py-4 text-center">
              <p className="text-[10px] font-medium uppercase tracking-wider text-white/50">
                Investition
              </p>
              <p className="mt-2 text-xl font-semibold leading-none md:text-2xl">
                {fmt(COST)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
}) {
  const pct = max === min ? 0 : ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="text-xs text-foreground-muted">{label}</p>
        <p className="text-sm font-medium text-foreground">{format(value)}</p>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-slider mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none"
        style={{
          background: `linear-gradient(to right, var(--color-foreground) 0%, var(--color-foreground) ${pct}%, #e5e5e5 ${pct}%, #e5e5e5 100%)`,
        }}
      />
    </div>
  );
}
