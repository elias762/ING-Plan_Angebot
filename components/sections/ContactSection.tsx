import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ContactSection() {
  return (
    <SectionWrapper id="kontakt">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-foreground-muted">
          Kontakt
        </p>
        <p className="mt-4 max-w-xl text-[15px] leading-[1.8] text-foreground-muted">
          Sollten Fragen aufkommen, meldet Euch jederzeit gerne bei mir.
        </p>
        <div className="mt-6 space-y-1.5">
          <p className="text-sm">
            <a
              href="mailto:elias@asuno.co"
              className="text-foreground underline decoration-foreground-muted/40 underline-offset-2 transition-colors hover:decoration-foreground"
            >
              elias@asuno.co
            </a>
          </p>
          <p className="text-sm">
            <a
              href="tel:+4917643936170"
              className="text-foreground underline decoration-foreground-muted/40 underline-offset-2 transition-colors hover:decoration-foreground"
            >
              +49 176 43936170
            </a>
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
