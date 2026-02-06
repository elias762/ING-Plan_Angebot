import SectionWrapper from "@/components/ui/SectionWrapper";
import DemoFrame from "@/components/ui/DemoFrame";
import RoiCard from "@/components/ui/RoiCard";

export default function ZielsetzungSection() {
  return (
    <SectionWrapper id="zielsetzung" className="bg-background-alt">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Zielsetzung und Scope
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-foreground-muted">
          Ziel des Projekts ist die Entwicklung einer{" "}
          <strong>zentralen Plattform zur strukturierten Steuerung von Angeboten
          sowie zur operativen Projektsteuerung</strong>. Die Lösung soll
          bestehende Prozesse effizienter gestalten, die Übersicht erhöhen und
          langfristig die <strong>Grundlage für den Einsatz von KI</strong>{" "}
          schaffen. Dadurch soll ING-Plan in die Lage versetzt werden,{" "}
          <strong>nachhaltig zu skalieren</strong> und sich einen
          Wettbewerbsvorteil zu sichern.
        </p>
      </div>

      {/* 1.1 */}
      <div className="mt-20">
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold text-accent">1.1</span>
          <h3 className="text-2xl font-bold text-foreground">
            Angebotsbewertung und Pipeline-Steuerung
          </h3>
        </div>
        <div className="mt-6 space-y-4 text-foreground-muted leading-relaxed">
          <p>
            Dieses Modul der Software dient der{" "}
            <strong>strukturierten Erfassung und Bewertung eingehender
            Projektanfragen</strong>. Von der initialen Übersicht bis zum
            abschließenden Detail-Screening unterstützt das Tool die
            Geschäftsführung durch strukturierte Aufbereitung relevanter
            Informationen und verbessert dadurch{" "}
            <strong>Nachvollziehbarkeit, Effizienz und Skalierbarkeit</strong>{" "}
            des Bewertungsprozesses.
          </p>
          <p>
            Der anschließende Angebotsprozess kann innerhalb eines{" "}
            <strong>strukturierten Pipeline-Prozesses</strong> gesteuert werden.
            Wird ein Projekt gewonnen, wird es anschließend in den Bereich gemäß
            Abschnitt 1.2 überführt. Wird ein Angebot nicht erfolgreich
            abgeschlossen, wird es in einem Archiv abgelegt, in dem ergänzende
            Kommentare hinterlegt werden können. Dadurch entsteht die
            Möglichkeit, <strong>systematisch zu analysieren, woran Projekte
            gescheitert sind</strong>. Die entsprechenden Informationen werden in
            einer Datenbank aggregiert und können langfristig zur{" "}
            <strong>Optimierung zukünftiger Angebotsprozesse</strong> genutzt
            werden.
          </p>
        </div>
        <DemoFrame
          src="https://ing-prototype.vercel.app/angebote?pages=angebote&offer=b1"
          title="Demo: Angebotsbewertung und Pipeline-Steuerung"
        />
      </div>

      {/* 1.2 */}
      <div className="mt-16">
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold text-accent">1.2</span>
          <h3 className="text-2xl font-bold text-foreground">
            Operatives Projektmanagement und Steuerung
          </h3>
        </div>
        <div className="mt-6 space-y-4 text-foreground-muted leading-relaxed">
          <p>
            Neben der Angebotsbewertung ermöglicht die Plattform die{" "}
            <strong>zentrale Steuerung laufender Projekte</strong> und schafft
            eine einheitliche Übersicht über operative Tätigkeiten.
          </p>
          <p>
            Im Fokus steht das strukturierte Tracking bestehender Projekte, z.B
            hinsichtlich:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Kritikalität und Priorisierung</li>
            <li>Zentrale Projektdetails</li>
            <li>Verantwortlichkeiten</li>
            <li>Abrechnungsstand</li>
            <li>Allokierte Stunden</li>
          </ul>
          <p>
            Darauf aufbauend wird eine <strong>Management-Ansicht</strong>{" "}
            bereitgestellt, die strategische Planung sowie Teammeetings
            unterstützt und eine transparente Übersicht über{" "}
            <strong>Projektstatus, Ressourcenauslastung und Fortschritt</strong>{" "}
            ermöglicht.
          </p>
        </div>
        <DemoFrame
          src="https://ing-prototype.vercel.app/projekte?pages=dashboard,projekte"
          title="Demo: Operatives Projektmanagement und Steuerung"
        />
      </div>

      {/* 1.3 */}
      <div className="mt-16">
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold text-accent">1.3</span>
          <h3 className="text-2xl font-bold text-foreground">
            Übergreifende Zielsetzung
          </h3>
        </div>
        <div className="mt-6 text-foreground-muted leading-relaxed">
          <p>
            Durch die Bündelung beider Funktionsbereiche entsteht die Grundlage
            für eine <strong>zentrale ING-Plan-Plattform</strong>, auf der
            mehrere relevante Themen integriert bearbeitet werden können. Ziel
            ist die <strong>Reduktion paralleler Systeme</strong> sowie die
            Schaffung einer strukturierten Datenbasis für den{" "}
            <strong>zukünftigen Einsatz von KI</strong> zur nachhaltigen
            Skalierung und Weiterentwicklung.
          </p>
        </div>
        <RoiCard />
      </div>
    </SectionWrapper>
  );
}
