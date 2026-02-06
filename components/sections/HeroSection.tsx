"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent"
        >
          Angebot
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-normal leading-tight text-foreground md:text-4xl lg:text-5xl"
        >
          Entwicklung einer{" "}
          <strong className="font-bold text-accent">Projekt-</strong>{" "}
          <strong className="font-bold">und</strong>
          <br />
          <strong className="font-bold text-accent">Angebotssteuerungsplattform</strong>
          <br />
          bei ING-Plan
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex justify-center"
        >
          <Image
            src="/ing-plan-logo.png"
            alt="ING-Plan Logo"
            width={180}
            height={90}
            className="mx-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl text-left"
        >
          <p className="text-lg text-foreground-muted">
            Lieber Arne, lieber Frank,
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
            anbei erhaltet Ihr, wie besprochen, das Angebot auf Basis unserer
            Vorabgespräche sowie der von Euch erstellten Skizze.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
            Wir erachten die ausgearbeitete Platform/Softwarelösung als sehr
            vielversprechend und würden uns sehr freuen, diese gemeinsam mit Euch
            umzusetzen.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
            Sollten Fragen aufkommen, meldet Euch jederzeit gerne per{" "}
            <a
              href="mailto:elias@asuno.co"
              className="font-medium text-accent hover:underline"
            >
              E-Mail
            </a>{" "}
            oder telefonisch unter{" "}
            <a
              href="tel:+4917643936170"
              className="font-medium text-accent hover:underline"
            >
              +49 176 43936170
            </a>{" "}
            bei mir.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button href="#zielsetzung">Zum Angebot</Button>
          <Button href="#kontakt" variant="secondary">
            Kontakt aufnehmen
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
