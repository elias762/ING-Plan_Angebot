import SectionWrapper from "@/components/ui/SectionWrapper";
import DemoFrame from "@/components/ui/DemoFrame";
import RoiCard from "@/components/ui/RoiCard";

export default function ZielsetzungSection() {
  return (
    <SectionWrapper id="zielsetzung">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-foreground-muted">
          Kapitel 1
        </p>
        <h2 className="mt-3 text-xl font-semibold text-foreground md:text-2xl">
          Zielsetzung und Scope
        </h2>
        <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-foreground-muted">
          Ziel des Projekts ist die Entwicklung einer{" "}
          <strong className="font-medium text-foreground">zentralen Plattform zur strukturierten Steuerung von Angeboten
          sowie zur operativen Projektsteuerung</strong>. Die Lösung soll
          bestehende Prozesse effizienter gestalten, die Übersicht erhöhen und
          langfristig die <strong className="font-medium text-foreground">Grundlage für den Einsatz von KI</strong>{" "}
          schaffen. Dadurch soll ING-Plan in die Lage versetzt werden,{" "}
          <strong className="font-medium text-foreground">nachhaltig zu skalieren</strong> und sich einen
          Wettbewerbsvorteil zu sichern.
        </p>
      </div>

      {/* 1.1 */}
      <div className="mt-16">
        <div className="flex items-baseline gap-3">
          <span className="text-sm text-foreground-muted">1.1</span>
          <h3 className="text-lg font-semibold text-foreground">
            Angebotsbewertung und Pipeline-Steuerung
          </h3>
        </div>
        <div className="mt-5 space-y-4 text-[15px] leading-[1.8] text-foreground-muted">
          <p>
            Dieses Modul der Software dient der{" "}
            <strong className="font-medium text-foreground">strukturierten Erfassung und Bewertung eingehender
            Projektanfragen</strong>. Von der initialen Übersicht bis zum
            abschließenden Detail-Screening unterstützt das Tool die
            Geschäftsführung durch strukturierte Aufbereitung relevanter
            Informationen und verbessert dadurch{" "}
            <strong className="font-medium text-foreground">Nachvollziehbarkeit, Effizienz und Skalierbarkeit</strong>{" "}
            des Bewertungsprozesses.
          </p>
          <p>
            Der anschließende Angebotsprozess kann innerhalb eines{" "}
            <strong className="font-medium text-foreground">strukturierten Pipeline-Prozesses</strong> gesteuert werden.
            Wird ein Projekt gewonnen, wird es anschließend in den Bereich gemäß
            Abschnitt 1.2 überführt. Wird ein Angebot nicht erfolgreich
            abgeschlossen, wird es in einem Archiv abgelegt, in dem ergänzende
            Kommentare hinterlegt werden können. Dadurch entsteht die
            Möglichkeit, <strong className="font-medium text-foreground">systematisch zu analysieren, woran Projekte
            gescheitert sind</strong>. Die entsprechenden Informationen werden in
            einer Datenbank aggregiert und können langfristig zur{" "}
            <strong className="font-medium text-foreground">Optimierung zukünftiger Angebotsprozesse</strong> genutzt
            werden.
          </p>
        </div>
        <DemoFrame
          src="https://ing-prototype.vercel.app/angebote?pages=angebote&offer=b1"
          title="Angebotsbewertung & Pipeline"
          description="Bewertungsansicht, Detail-Screening und Pipeline-Steuerung live testen"
        />
      </div>

      {/* 1.2 */}
      <div className="mt-14">
        <div className="flex items-baseline gap-3">
          <span className="text-sm text-foreground-muted">1.2</span>
          <h3 className="text-lg font-semibold text-foreground">
            Operatives Projektmanagement und Steuerung
          </h3>
        </div>
        <div className="mt-5 space-y-4 text-[15px] leading-[1.8] text-foreground-muted">
          <p>
            Neben der Angebotsbewertung ermöglicht die Plattform die{" "}
            <strong className="font-medium text-foreground">zentrale Steuerung laufender Projekte</strong> und schafft
            eine einheitliche Übersicht über operative Tätigkeiten.
          </p>
          <p>
            Im Fokus steht das strukturierte Tracking bestehender Projekte, z.B
            hinsichtlich:
          </p>
          <ul className="ml-5 list-disc space-y-1.5 text-foreground-muted">
            <li>Kritikalität und Priorisierung</li>
            <li>Zentrale Projektdetails</li>
            <li>Verantwortlichkeiten</li>
            <li>Abrechnungsstand</li>
            <li>Allokierte Stunden</li>
          </ul>
          <p>
            Darauf aufbauend wird eine <strong className="font-medium text-foreground">Management-Ansicht</strong>{" "}
            bereitgestellt, die strategische Planung sowie Teammeetings
            unterstützt und eine transparente Übersicht über{" "}
            <strong className="font-medium text-foreground">Projektstatus, Ressourcenauslastung und Fortschritt</strong>{" "}
            ermöglicht.
          </p>
        </div>
        <DemoFrame
          src="https://ing-prototype.vercel.app/projekte?pages=dashboard,projekte"
          title="Projektmanagement & Dashboard"
          description="Dashboard-Übersicht, Projektsteuerung und Ressourcenansicht erkunden"
        />
      </div>

      {/* 1.3 */}
      <div className="mt-14">
        <div className="flex items-baseline gap-3">
          <span className="text-sm text-foreground-muted">1.3</span>
          <h3 className="text-lg font-semibold text-foreground">
            Übergreifende Zielsetzung
          </h3>
        </div>
        <div className="mt-5 text-[15px] leading-[1.8] text-foreground-muted">
          <p>
            Durch die Bündelung beider Funktionsbereiche entsteht die Grundlage
            für eine <strong className="font-medium text-foreground">zentrale ING-Plan-Plattform</strong>, auf der
            mehrere relevante Themen integriert bearbeitet werden können. Ziel
            ist die <strong className="font-medium text-foreground">Reduktion paralleler Systeme</strong> sowie die
            Schaffung einer strukturierten Datenbasis für den{" "}
            <strong className="font-medium text-foreground">zukünftigen Einsatz von KI</strong> zur nachhaltigen
            Skalierung und Weiterentwicklung.
          </p>
        </div>
        <RoiCard />
      </div>
    </SectionWrapper>
  );
}
