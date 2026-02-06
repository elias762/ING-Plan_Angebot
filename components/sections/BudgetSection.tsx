import SectionWrapper from "@/components/ui/SectionWrapper";

const leistungen = [
  {
    name: "Konzeption & Strukturierung",
    beschreibung:
      "Definition der Plattformlogik sowie Abstimmung der Anforderungen",
    aufwand: "2 Tage",
    tagessatz: "1.000 €",
    gesamt: "2.000 €",
  },
  {
    name: "Entwicklung der Plattformfunktionen",
    beschreibung:
      "Umsetzung der Module Angebotsbewertung und Projektsteuerung",
    aufwand: "9 Tage",
    tagessatz: "1.000 €",
    gesamt: "9.000 €",
  },
  {
    name: "Testing & Optimierung",
    beschreibung:
      "Qualitätssicherung, Fehlerbehebung und iterative Optimierung",
    aufwand: "4 Tage",
    tagessatz: "1.000 €",
    gesamt: "4.000 €",
  },
  {
    name: "Schulung der Mitarbeiter",
    beschreibung: "Einführung in Nutzung, Prozesse und Best Practices",
    aufwand: "1 Tag",
    tagessatz: "1.000 €",
    gesamt: "1.000 €",
  },
  {
    name: "Dokumentation & Trainingsmaterial",
    beschreibung: "Erstellung von Videomaterial und Manual",
    aufwand: "0,5 Tage",
    tagessatz: "1.000 €",
    gesamt: "500 €",
  },
  {
    name: "Einführungsbegleitung & Support",
    beschreibung: "Unterstützung während Implementierungsphase",
    aufwand: "0,5 Tage",
    tagessatz: "1.000 €",
    gesamt: "500 €",
  },
];

export default function BudgetSection() {
  return (
    <SectionWrapper id="budget">
      <div>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Projektbudget und Kostenaufstellung
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
          Für Konzeption, Entwicklung und Einführung der Plattform kalkulieren
          wir einen Gesamtaufwand von{" "}
          <strong>17 Beratungstagen</strong> zu einem Tagessatz von{" "}
          <strong>1.000 Euro</strong>. Daraus ergibt sich ein kalkuliertes
          Gesamtprojektvolumen von{" "}
          <strong className="text-foreground">17.000 Euro</strong>.
        </p>
        <div className="mt-6 rounded-xl border-l-4 border-accent bg-accent/5 px-6 py-5">
          <p className="leading-relaxed text-foreground">
            Die Abrechnung erfolgt auf Basis eines{" "}
            <strong>transparenten Timesheet-Modells</strong>. Alle Tätigkeiten
            werden dokumentiert, sodass ING-Plan jederzeit nachvollziehen kann,
            wann welche Leistungen erbracht wurden. Sollte der tatsächliche
            Aufwand unterhalb der kalkulierten Beratungstage liegen, erfolgt die
            Abrechnung{" "}
            <strong className="text-accent">ausschließlich nach real erbrachtem Aufwand</strong>. Der
            genannte Gesamtpreis stellt somit die{" "}
            <strong className="text-accent">gekappte Obergrenze</strong> da.
          </p>
        </div>
      </div>

      {/* 2.1 Leistungsbestandteile */}
      <div className="mt-20">
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold text-accent">2.1</span>
          <h3 className="text-2xl font-bold text-foreground">
            Leistungsbestandteile
          </h3>
        </div>

        {/* Desktop Table */}
        <div className="mt-8 hidden overflow-hidden rounded-xl border border-border md:block">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-background-alt">
                <th className="px-6 py-4 text-sm font-semibold text-foreground">
                  Leistungsbestandteil
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-foreground">
                  Beschreibung
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-foreground text-right">
                  Aufwand
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-foreground text-right">
                  Tagessatz
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-foreground text-right">
                  Gesamt
                </th>
              </tr>
            </thead>
            <tbody>
              {leistungen.map((item, i) => (
                <tr
                  key={i}
                  className="border-b border-border last:border-b-0 hover:bg-background-alt/50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-foreground">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground-muted">
                    {item.beschreibung}
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground-muted text-right">
                    {item.aufwand}
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground-muted text-right">
                    {item.tagessatz}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-foreground text-right">
                    {item.gesamt}
                  </td>
                </tr>
              ))}
              <tr className="bg-primary-dark text-white">
                <td className="px-6 py-4 text-sm font-bold">Gesamt</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 text-sm font-bold text-right">
                  17 Tage
                </td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 text-sm font-bold text-right">
                  17.000 €
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="mt-8 space-y-4 md:hidden">
          {leistungen.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-white p-6"
            >
              <p className="font-semibold text-foreground">{item.name}</p>
              <p className="mt-1 text-sm text-foreground-muted">
                {item.beschreibung}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm text-foreground-muted">
                  {item.aufwand} &middot; {item.tagessatz}
                </span>
                <span className="font-bold text-foreground">{item.gesamt}</span>
              </div>
            </div>
          ))}
          <div className="rounded-xl bg-primary-dark p-6 text-white">
            <div className="flex items-center justify-between">
              <span className="font-bold">Gesamt — 17 Tage</span>
              <span className="text-xl font-bold">17.000 €</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2.2 Zahlungsmodalitäten */}
      <div className="mt-16">
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold text-accent">2.2</span>
          <h3 className="text-2xl font-bold text-foreground">
            Zahlungsmodalitäten
          </h3>
        </div>
        <ul className="mt-6 ml-6 list-disc space-y-2 text-foreground-muted leading-relaxed">
          <li><strong>20 % Anzahlung</strong> bei Projektstart</li>
          <li><strong>80 % Restzahlung</strong> nach erfolgreicher Projektabnahme</li>
        </ul>
      </div>

      {/* 2.3 Nutzungsrechte */}
      <div className="mt-16">
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold text-accent">2.3</span>
          <h3 className="text-2xl font-bold text-foreground">
            Nutzungsrechte und Intellectual Property
          </h3>
        </div>
        <p className="mt-6 text-foreground-muted leading-relaxed">
          Die entwickelte Lösung sowie sämtliche damit verbundenen
          Nutzungsrechte gehen{" "}
          <strong>zu 100 % auf ING-Plan über</strong>. Die Plattform kann
          eigenständig oder gemeinsam mit externen Partnern weiterentwickelt
          werden.
        </p>
      </div>

      {/* 2.4 Datenschutz und KI-Nutzung */}
      <div className="mt-16">
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold text-accent">2.4</span>
          <h3 className="text-2xl font-bold text-foreground">
            Datenschutz und KI-Nutzung
          </h3>
        </div>
        <div className="mt-6 space-y-4 text-foreground-muted leading-relaxed">
          <p>
            Der Schutz sensibler Unternehmens- und personenbezogener Daten
            besitzt <strong>höchste Priorität</strong>. Sämtliche Daten werden{" "}
            <strong>gemäß DSGVO</strong> verarbeitet.
          </p>
          <p>Dabei gelten insbesondere folgende Grundsätze:</p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              Hosting und Datenverarbeitung erfolgen auf{" "}
              <strong>DSGVO-konformen Servern innerhalb Deutschlands bzw.
              der EU</strong>
            </li>
            <li>
              Es werden ausschließlich Systeme eingesetzt, die eine{" "}
              <strong>datenschutzkonforme Speicherung und Verarbeitung</strong>{" "}
              gewährleisten
            </li>
            <li>
              Unternehmensdaten werden{" "}
              <strong>nicht für externe Trainingszwecke von KI-Modellen
              verwendet</strong>
            </li>
            <li>
              Zugriff auf Daten erfolgt{" "}
              <strong>ausschließlich innerhalb definierter
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
