import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  return (
    <SectionWrapper id="kontakt" className="bg-primary-dark text-white">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-light">
          Kontakt
        </p>
        <p className="max-w-2xl text-lg text-white/70">
          Sollten Fragen aufkommen, meldet Euch jederzeit gerne per{" "}
          <a href="mailto:elias@asuno.co" className="text-white hover:underline">E-Mail</a>{" "}
          oder telefonisch unter{" "}
          <a href="tel:+4917643936170" className="text-white hover:underline">+49 176 43936170</a>{" "}
          bei mir.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="mailto:elias@asuno.co">elias@asuno.co</Button>
          <Button
            href="tel:+4917643936170"
            variant="secondary"
            className="border-white/20 text-white hover:border-white hover:text-white"
          >
            +49 176 43936170
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
