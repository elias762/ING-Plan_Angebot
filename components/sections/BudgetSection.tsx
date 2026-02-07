import SectionWrapper from "@/components/ui/SectionWrapper";

const fmt = (n: number) =>
  n.toLocaleString("de-DE", { minimumFractionDigits: 0 }) + "\u00A0\u20AC";

const leistungen = [
  {
    name: "Konzeption & Strukturierung",
    beschreibung:
      "Definition der Plattformlogik sowie Abstimmung der Anforderungen",
    aufwand: "2 Tage",
    tagessatz: 1000,
    gesamt: 2000,
  },
  {
    name: "Entwicklung der Plattformfunktionen",
    beschreibung:
      "Umsetzung der Module Angebotsbewertung und Projektsteuerung",
    aufwand: "9 Tage",
    tagessatz: 1000,
    gesamt: 9000,
  },
  {
    name: "Testing & Optimierung",
    beschreibung:
      "Qualitätssicherung, Fehlerbehebung und iterative Optimierung",
    aufwand: "4 Tage",
    tagessatz: 1000,
    gesamt: 4000,
  },
  {
    name: "Schulung der Mitarbeiter",
    beschreibung: "Einführung in Nutzung, Prozesse und Best Practices",
    aufwand: "1 Tag",
    tagessatz: 1000,
    gesamt: 1000,
  },
  {
    name: "Dokumentation & Trainingsmaterial",
    beschreibung: "Erstellung von Videomaterial und Manual",
    aufwand: "0,5 Tage",
    tagessatz: 1000,
    gesamt: 500,
  },
  {
    name: "Einführungsbegleitung & Support",
    beschreibung: "Unterstützung während Implementierungsphase",
    aufwand: "0,5 Tage",
    tagessatz: 1000,
    gesamt: 500,
  },
];

export default function BudgetSection() {
  return (
    <SectionWrapper id="budget">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-foreground-muted">
          Kapitel 2
        </p>
        <h2 className="mt-3 text-xl font-semibold text-foreground md:text-2xl">
          Projektbudget und Kostenaufstellung
        </h2>
        <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-foreground-muted">
          Für Konzeption, Entwicklung und Einführung der Plattform kalkulieren
          wir einen Gesamtaufwand von{" "}
          <strong className="font-medium text-foreground">17 Beratungstagen</strong> zu einem Tagessatz von{" "}
          <strong className="font-medium text-foreground">1.000 Euro</strong>. Daraus ergibt sich ein kalkuliertes
          Gesamtprojektvolumen von{" "}
          <strong className="font-medium text-foreground">17.000 Euro</strong>.
        </p>
        <div className="mt-6 border-l-2 border-foreground/20 pl-5 py-4">
          <p className="text-[15px] leading-[1.8] text-foreground-muted">
            Die Abrechnung erfolgt auf Basis eines{" "}
            <strong className="font-medium text-foreground">transparenten Timesheet-Modells</strong>. Alle Tätigkeiten
            werden dokumentiert, sodass ING-Plan jederzeit nachvollziehen kann,
            wann welche Leistungen erbracht wurden. Sollte der tatsächliche
            Aufwand unterhalb der kalkulierten Beratungstage liegen, erfolgt die
            Abrechnung{" "}
            <strong className="font-medium text-foreground">ausschließlich nach real erbrachtem Aufwand</strong>. Der
            genannte Gesamtpreis stellt somit die{" "}
            <strong className="font-medium text-foreground">gekappte Obergrenze</strong> da.
          </p>
        </div>
      </div>

      {/* 2.1 Leistungsbestandteile */}
      <div className="mt-16">
        <div className="flex items-baseline gap-3">
          <span className="text-sm text-foreground-muted">2.1</span>
          <h3 className="text-lg font-semibold text-foreground">
            Leistungsbestandteile
          </h3>
        </div>
        <p className="mt-4 text-[15px] leading-[1.8] text-foreground-muted">
          Die Aufwandsschätzung basiert auf Erfahrungswerten aus vergleichbaren Projekten und berücksichtigt den abgestimmten Funktionsumfang.
        </p>

        {/* Desktop Table */}
        <div className="mt-8 hidden overflow-hidden border-y border-border md:block">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-[11px] font-medium uppercase tracking-wider text-foreground-muted">
                  Leistungsbestandteil
                </th>
                <th className="px-4 py-3 text-[11px] font-medium uppercase tracking-wider text-foreground-muted">
                  Beschreibung
                </th>
                <th className="px-4 py-3 text-[11px] font-medium uppercase tracking-wider text-foreground-muted text-right">
                  Aufwand
                </th>
                <th className="px-4 py-3 text-[11px] font-medium uppercase tracking-wider text-foreground-muted text-right">
                  Tagessatz
                </th>
                <th className="px-4 py-3 text-[11px] font-medium uppercase tracking-wider text-foreground-muted text-right">
                  Gesamt
                </th>
              </tr>
            </thead>
            <tbody>
              {leistungen.map((item, i) => (
                <tr
                  key={i}
                  className="border-b border-border/60 last:border-b-0"
                >
                  <td className="px-4 py-3.5 text-sm font-medium text-foreground">
                    {item.name}
                  </td>
                  <td className="px-4 py-3.5 text-sm text-foreground-muted">
                    {item.beschreibung}
                  </td>
                  <td className="px-4 py-3.5 text-sm text-foreground-muted text-right">
                    {item.aufwand}
                  </td>
                  <td className="px-4 py-3.5 text-sm text-foreground-muted text-right whitespace-nowrap">
                    {fmt(item.tagessatz)}
                  </td>
                  <td className="px-4 py-3.5 text-sm font-medium text-foreground text-right whitespace-nowrap">
                    {fmt(item.gesamt)}
                  </td>
                </tr>
              ))}
              <tr className="bg-foreground text-white">
                <td className="px-4 py-3.5 text-sm font-medium">Gesamt</td>
                <td className="px-4 py-3.5"></td>
                <td className="px-4 py-3.5 text-sm font-medium text-right">
                  17 Tage
                </td>
                <td className="px-4 py-3.5"></td>
                <td className="px-4 py-3.5 text-sm font-medium text-right whitespace-nowrap">
                  {fmt(17000)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="mt-8 space-y-3 md:hidden">
          {leistungen.map((item, i) => (
            <div
              key={i}
              className="border-b border-border pb-4"
            >
              <p className="text-sm font-medium text-foreground">{item.name}</p>
              <p className="mt-1 text-xs text-foreground-muted">
                {item.beschreibung}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-foreground-muted">
                  {item.aufwand} &middot; {fmt(item.tagessatz)}
                </span>
                <span className="text-sm font-medium text-foreground">{fmt(item.gesamt)}</span>
              </div>
            </div>
          ))}
          <div className="bg-foreground px-4 py-4 text-white rounded">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Gesamt — 17 Tage</span>
              <span className="text-lg font-semibold">{fmt(17000)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2.2 Zahlungsmodalitäten */}
      <div className="mt-14">
        <div className="flex items-baseline gap-3">
          <span className="text-sm text-foreground-muted">2.2</span>
          <h3 className="text-lg font-semibold text-foreground">
            Zahlungsmodalitäten
          </h3>
        </div>
        <ul className="mt-5 ml-5 list-disc space-y-2 text-[15px] leading-[1.8] text-foreground-muted">
          <li><strong className="font-medium text-foreground">20 % Anzahlung</strong> bei Projektstart</li>
          <li><strong className="font-medium text-foreground">80 % Restzahlung</strong> nach erfolgreicher Projektabnahme</li>
        </ul>
      </div>

      {/* 2.3 Nutzungsrechte */}
      <div className="mt-14">
        <div className="flex items-baseline gap-3">
          <span className="text-sm text-foreground-muted">2.3</span>
          <h3 className="text-lg font-semibold text-foreground">
            Nutzungsrechte und Intellectual Property
          </h3>
        </div>
        <p className="mt-5 text-[15px] leading-[1.8] text-foreground-muted">
          Die entwickelte Lösung sowie sämtliche damit verbundenen
          Nutzungsrechte gehen{" "}
          <strong className="font-medium text-foreground">zu 100 % auf ING-Plan über</strong>. Die Plattform kann
          eigenständig oder gemeinsam mit externen Partnern weiterentwickelt
          werden.
        </p>
      </div>

      {/* 2.4 Datenschutz und KI-Nutzung */}
      <div className="mt-14">
        <div className="flex items-baseline gap-3">
          <span className="text-sm text-foreground-muted">2.4</span>
          <h3 className="text-lg font-semibold text-foreground">
            Datenschutz und KI-Nutzung
          </h3>
        </div>
        <div className="mt-5 space-y-4 text-[15px] leading-[1.8] text-foreground-muted">
          <p>
            Der Schutz sensibler Unternehmens- und personenbezogener Daten
            besitzt <strong className="font-medium text-foreground">höchste Priorität</strong>. Sämtliche Daten werden{" "}
            <strong className="font-medium text-foreground">gemäß DSGVO</strong> verarbeitet.
          </p>
          <p>Dabei gelten insbesondere folgende Grundsätze:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              Hosting und Datenverarbeitung erfolgen auf{" "}
              <strong className="font-medium text-foreground">DSGVO-konformen Servern innerhalb Deutschlands bzw.
              der EU</strong>
            </li>
            <li>
              Es werden ausschließlich Systeme eingesetzt, die eine{" "}
              <strong className="font-medium text-foreground">datenschutzkonforme Speicherung und Verarbeitung</strong>{" "}
              gewährleisten
            </li>
            <li>
              Unternehmensdaten werden{" "}
              <strong className="font-medium text-foreground">nicht für externe Trainingszwecke von KI-Modellen
              verwendet</strong>
            </li>
            <li>
              Zugriff auf Daten erfolgt{" "}
              <strong className="font-medium text-foreground">ausschließlich innerhalb definierter
              Systemumgebungen</strong>
            </li>
          </ul>
          <p>
            Falls erforderlich, kann zusätzlich eine Vereinbarung zur
            Auftragsverarbeitung abgeschlossen werden.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
