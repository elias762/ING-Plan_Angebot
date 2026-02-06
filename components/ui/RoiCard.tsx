"use client";

import { useMemo, useState } from "react";

const fmt = (n: number) =>
  n.toLocaleString("de-DE", { maximumFractionDigits: 0 }) + " €";

export default function RoiCard() {
  // 1.1 – Pipeline
  const [volume, setVolume] = useState(50000);
  const [margin, setMargin] = useState(10);
  const [extraProjects, setExtraProjects] = useState(2);

  // 1.2 – Operative Steuerung
  const [activeProjects, setActiveProjects] = useState(10);
  const [adminHours, setAdminHours] = useState(4);
  const [hourlyRate, setHourlyRate] = useState(65);

  const cost = 17000;

  const result = useMemo(() => {
    const profitPerProject = volume * (margin / 100);
    const pipelineEbit = extraProjects * profitPerProject;
    const orgSavings = activeProjects * adminHours * hourlyRate * 12;
    const totalEbit = pipelineEbit + orgSavings;
    const paybackMonths = totalEbit > 0 ? (cost / totalEbit) * 12 : Infinity;
    const roi3y = totalEbit > 0 ? ((totalEbit * 3 - cost) / cost) * 100 : 0;
    return { pipelineEbit, orgSavings, totalEbit, paybackMonths, roi3y };
  }, [volume, margin, extraProjects, activeProjects, adminHours, hourlyRate]);

  const maxBar = Math.max(result.pipelineEbit, result.orgSavings, 1);

  return (
    <div className="mt-10">
      <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-accent">
        Potenziellen ROI der Lösung berechnen
      </p>

      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
        {/* Top: Sliders in two columns */}
        <div className="grid gap-0 md:grid-cols-2">
          {/* 1.1 */}
          <div className="border-b border-border p-6 md:border-r">
            <p className="text-[11px] font-bold uppercase tracking-wider text-accent">
              1.1 — Pipeline-Steuerung
            </p>
            <p className="mt-1 text-xs text-foreground-muted">
              Effekte durch bessere Angebotsbewertung
            </p>
            <div className="mt-5 space-y-5">
              <SliderInput
                label="Ø Projektvolumen"
                value={volume}
                onChange={setVolume}
                min={10000}
                max={200000}
                step={5000}
                format={(v) => fmt(v)}
              />
              <SliderInput
                label="EBIT-Marge"
                value={margin}
                onChange={setMargin}
                min={3}
                max={30}
                step={1}
                format={(v) => `${v} %`}
              />
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
          </div>

          {/* 1.2 */}
          <div className="border-b border-border p-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-accent">
              1.2 — Operative Steuerung
            </p>
            <p className="mt-1 text-xs text-foreground-muted">
              Eingesparte Koordinations- und Verwaltungszeit
            </p>
            <div className="mt-5 space-y-5">
              <SliderInput
                label="Laufende Projekte"
                value={activeProjects}
                onChange={setActiveProjects}
                min={1}
                max={30}
                step={1}
                format={(v) => `${v}`}
              />
              <SliderInput
                label="Eingesparte Std. / Projekt / Monat"
                value={adminHours}
                onChange={setAdminHours}
                min={0}
                max={12}
                step={1}
                format={(v) => `${v} Std.`}
              />
              <SliderInput
                label="Interner Stundensatz"
                value={hourlyRate}
                onChange={setHourlyRate}
                min={30}
                max={150}
                step={5}
                format={(v) => `${v} €`}
              />
            </div>
          </div>
        </div>

        {/* Bottom: Results */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Ergebnis
          </p>

          {/* Effect sources */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold">1.1</span>
                <p className="text-xs text-slate-300">Pipeline-Effekt</p>
              </div>
              <p className="mt-1 text-lg font-bold">{fmt(result.pipelineEbit)}</p>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-accent transition-all duration-500 ease-out"
                  style={{ width: `${maxBar > 0 ? Math.max((result.pipelineEbit / maxBar) * 100, result.pipelineEbit > 0 ? 4 : 0) : 0}%` }}
                />
              </div>
            </div>
            <div className="rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold">1.2</span>
                <p className="text-xs text-slate-300">Organisatorische Einsparung</p>
              </div>
              <p className="mt-1 text-lg font-bold">{fmt(result.orgSavings)}</p>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-accent/70 transition-all duration-500 ease-out"
                  style={{ width: `${maxBar > 0 ? Math.max((result.orgSavings / maxBar) * 100, result.orgSavings > 0 ? 4 : 0) : 0}%` }}
                />
              </div>
            </div>
          </div>

          {/* KPI row */}
          <div className="mt-5 grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-white/10 px-4 py-4 text-center backdrop-blur-sm">
              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                Gesamteffekt / Jahr
              </p>
              <p className="mt-2 text-2xl font-extrabold leading-none md:text-3xl">
                {fmt(result.totalEbit)}
              </p>
            </div>
            <div className="rounded-xl bg-white/10 px-4 py-4 text-center backdrop-blur-sm">
              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                Payback
              </p>
              <p className="mt-2 text-2xl font-extrabold leading-none md:text-3xl">
                {result.paybackMonths === Infinity
                  ? "–"
                  : result.paybackMonths < 1
                    ? "<1"
                    : `~${Math.round(result.paybackMonths)}`}
                {result.paybackMonths !== Infinity && (
                  <span className="ml-1 text-sm font-semibold text-slate-400">Mon.</span>
                )}
              </p>
            </div>
            <div className="rounded-xl bg-accent/20 px-4 py-4 text-center ring-1 ring-accent/30">
              <p className="text-[10px] font-medium uppercase tracking-wider text-accent-light">
                ROI nach 3 Jahren
              </p>
              <p className="mt-2 text-2xl font-extrabold leading-none text-accent-light md:text-3xl">
                {result.roi3y > 0 ? `${Math.round(result.roi3y)}%` : "–"}
              </p>
            </div>
          </div>

          {/* Plattformkosten */}
          <p className="mt-4 text-center text-xs text-slate-500">
            Plattformkosten (einmalig): {fmt(cost)}
          </p>
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
        <p className="text-sm font-bold text-foreground">{format(value)}</p>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-slider mt-2 h-2 w-full cursor-pointer appearance-none rounded-full outline-none"
        style={{
          background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${pct}%, #e2e8f0 ${pct}%, #e2e8f0 100%)`,
        }}
      />
    </div>
  );
}

function BarBlock({
  tag,
  label,
  value,
  max,
  color,
}: {
  tag: string;
  label: string;
  value: number;
  max: number;
  color: string;
}) {
  const pct = max > 0 ? (value / max) * 100 : 0;

  return (
    <div className="rounded-xl bg-background-alt p-4">
      <div className="flex items-center gap-2">
        <span className="rounded bg-accent/10 px-1.5 py-0.5 text-[10px] font-bold text-accent">
          {tag}
        </span>
        <p className="text-xs text-foreground-muted">{label}</p>
      </div>
      <p className="mt-2 text-xl font-bold text-foreground">{fmt(value)}</p>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500 ease-out`}
          style={{ width: `${Math.max(pct, value > 0 ? 4 : 0)}%` }}
        />
      </div>
    </div>
  );
}

function RoiKpi({
  label,
  value,
  unit,
  accent,
}: {
  label: string;
  value: string;
  unit: string;
  accent?: boolean;
}) {
  return (
    <div className="text-center md:text-left">
      <p className="text-[10px] font-medium uppercase tracking-wider text-foreground-muted">
        {label}
      </p>
      <p className={`mt-1 text-3xl font-extrabold leading-none ${accent ? "text-accent" : "text-foreground"}`}>
        {value}
        {unit && <span className="ml-1 text-base font-semibold text-foreground-muted">{unit}</span>}
      </p>
    </div>
  );
}
