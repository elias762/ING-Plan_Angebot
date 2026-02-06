"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import SignaturePad from "signature_pad";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function SignatureSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const padRef = useRef<SignaturePad | null>(null);
  const [signed, setSigned] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(ratio, ratio);
      padRef.current?.clear();
    };

    const pad = new SignaturePad(canvas, {
      penColor: "#0f172a",
      backgroundColor: "rgba(0,0,0,0)",
      minWidth: 1.5,
      maxWidth: 3,
    });

    pad.addEventListener("endStroke", () => {
      setSigned(!pad.isEmpty());
    });

    padRef.current = pad;
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const handleClear = useCallback(() => {
    padRef.current?.clear();
    setSigned(false);
    setConfirmed(false);
  }, []);

  const handleConfirm = useCallback(() => {
    setConfirmed(true);
  }, []);

  const today = new Date().toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <SectionWrapper id="unterschrift">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Unterschrift
        </h2>
        <p className="mt-4 text-foreground-muted leading-relaxed">
          Mit der Unterschrift bestätige ich das vorliegende Angebot
          einschließlich der aufgeführten Konditionen und
          Allgemeinen Geschäftsbedingungen.
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-white p-6 shadow-sm">
          {/* Signer info */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
                Name
              </p>
              <p className="mt-1 text-lg font-semibold text-foreground">
                Elias Hauck
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
                Datum
              </p>
              <p className="mt-1 text-lg font-semibold text-foreground">
                {today}
              </p>
            </div>
          </div>

          {/* Signature pad */}
          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
              Unterschrift
            </p>
            <div
              className={`relative mt-2 overflow-hidden rounded-xl border-2 border-dashed transition-colors ${
                confirmed
                  ? "border-green-300 bg-green-50/50"
                  : "border-border bg-background-alt"
              }`}
            >
              <canvas
                ref={canvasRef}
                className={`h-40 w-full cursor-crosshair ${confirmed ? "pointer-events-none opacity-80" : ""}`}
              />
              {!signed && !confirmed && (
                <p className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm text-foreground-muted/50">
                  Hier unterschreiben
                </p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-4 flex items-center justify-between">
            {!confirmed ? (
              <>
                <button
                  onClick={handleClear}
                  className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
                >
                  Zurücksetzen
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={!signed}
                  className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                    signed
                      ? "bg-accent text-white hover:bg-accent-light shadow-sm"
                      : "cursor-not-allowed bg-slate-100 text-slate-400"
                  }`}
                >
                  Unterschrift bestätigen
                </button>
              </>
            ) : (
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2 text-green-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm font-semibold">Unterschrift bestätigt</p>
                </div>
                <button
                  onClick={handleClear}
                  className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
                >
                  Erneut unterschreiben
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
