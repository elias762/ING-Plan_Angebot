import { FileDown } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function DownloadSection() {
  return (
    <SectionWrapper id="download">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-foreground-muted">
          Angebot herunterladen
        </p>
        <p className="mt-4 max-w-xl text-[15px] leading-[1.8] text-foreground-muted">
          Ladet das Angebot gerne als PDF herunter und schaut es Euch in Ruhe
          an. Wenn alles für Euch passt, sendet uns das Dokument unterschrieben
          zurück, damit wir gemeinsam mit der Umsetzung starten können.
        </p>
        <a
          href="/Angebot_ING-Plan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="mt-6 inline-flex items-center gap-2.5 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-foreground/85"
        >
          <FileDown size={18} />
          Angebot als PDF herunterladen
        </a>
      </div>
    </SectionWrapper>
  );
}
