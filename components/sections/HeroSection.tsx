"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="px-8 pb-14 pt-16 md:px-12 md:pb-20 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header: Title left, Logo right */}
        <div className="flex items-start justify-between gap-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground-muted">
              Angebot
            </p>
            <h1 className="mt-4 text-[22px] font-light leading-relaxed text-foreground md:text-[28px] md:leading-snug">
              Entwicklung einer{" "}
              <span className="font-semibold">Projekt-</span> und{" "}
              <span className="font-semibold">Angebotssteuerungsplattform</span>{" "}
              bei ING-Plan
            </h1>
          </div>
          <Image
            src="/ing-plan-logo.png"
            alt="ING-Plan Logo"
            width={100}
            height={50}
            className="mt-1 shrink-0 hidden sm:block"
          />
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-border" />

        {/* Anschreiben */}
        <div className="space-y-4 text-[15px] leading-[1.8] text-foreground-muted">
          <p className="font-medium text-foreground">Lieber Arne, lieber Frank,</p>
          <p>
            anbei erhaltet Ihr, wie besprochen, das Angebot auf Basis unserer
            Vorabgespräche sowie der von Euch erstellten Skizze.
          </p>
          <p>
            Wir erachten die ausgearbeitete Platform/Softwarelösung als sehr
            vielversprechend und würden uns sehr freuen, diese gemeinsam mit Euch
            umzusetzen.
          </p>
          <p>
            Sollten Fragen aufkommen, meldet Euch jederzeit gerne per{" "}
            <a
              href="mailto:elias@asuno.co"
              className="text-foreground underline decoration-foreground-muted/40 underline-offset-2 transition-colors hover:decoration-foreground"
            >
              E-Mail
            </a>{" "}
            oder telefonisch unter{" "}
            <a
              href="tel:+4917643936170"
              className="text-foreground underline decoration-foreground-muted/40 underline-offset-2 transition-colors hover:decoration-foreground"
            >
              +49 176 43936170
            </a>{" "}
            bei mir.
          </p>
        </div>

        {/* Signature */}
        <div className="mt-10 space-y-0.5">
          <p className="text-[15px] text-foreground-muted">Beste Grüße,</p>
          <p className="text-[15px] font-medium text-foreground">Elias Hauck</p>
          <p className="text-sm text-foreground-muted">Partner bei Asuno</p>
        </div>
      </motion.div>
    </section>
  );
}
