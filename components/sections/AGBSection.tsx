import SectionWrapper from "@/components/ui/SectionWrapper";
import { ReactNode } from "react";

interface AGBItem {
  nr: string;
  title: string;
  content: ReactNode;
}

const agbItems: AGBItem[] = [
  {
    nr: "3.1",
    title: "Anwendungsbereich",
    content: (
      <>
        Diese AGB gelten für <strong>sämtliche Beratungs-, Entwicklungs- und
        Implementierungsleistungen</strong> der Asuno. Abweichende Bedingungen
        gelten nur bei <strong>schriftlicher Vereinbarung</strong>.
      </>
    ),
  },
  {
    nr: "3.2",
    title: "Rücktritt und Terminverschiebung",
    content: (
      <>
        Eine kostenfreie Terminverschiebung ist bis{" "}
        <strong>14 Tage vor Projektstart</strong> möglich. Bei späterer
        Stornierung werden <strong>50 % der vereinbarten Projektgebühr</strong>{" "}
        berechnet. Bereits erbrachte Leistungen werden separat abgerechnet.
      </>
    ),
  },
  {
    nr: "3.3",
    title: "Absage durch Asuno",
    content: (
      <>
        Bei Krankheit, höherer Gewalt oder unvorhersehbaren Ereignissen wird ein
        alternativer Termin vereinbart. Bereits geleistete Zahlungen werden{" "}
        <strong>vollständig erstattet</strong>. Weitergehende Ansprüche sind
        ausgeschlossen.
      </>
    ),
  },
  {
    nr: "3.4",
    title: "Zahlungsbedingungen",
    content: (
      <>
        Rechnungen sind innerhalb von <strong>14 Tagen ohne Abzug</strong> zu
        begleichen. Bei längeren Projekten können Teilrechnungen gestellt werden.
      </>
    ),
  },
  {
    nr: "3.5",
    title: "Nutzungsrechte und Urheberrecht",
    content: (
      <>
        Nach vollständiger Bezahlung gehen{" "}
        <strong>sämtliche Nutzungsrechte</strong> an den entwickelten
        Arbeitsergebnissen auf den Auftraggeber über. Asuno darf generische
        Methoden anonymisiert weiterverwenden.
      </>
    ),
  },
  {
    nr: "3.6",
    title: "Datenschutz",
    content: (
      <>
        Personenbezogene Daten werden ausschließlich im Rahmen{" "}
        <strong>gesetzlicher Datenschutzbestimmungen</strong> verarbeitet. Ein
        Widerspruch gegen die Verarbeitung ist jederzeit per E-Mail möglich.
      </>
    ),
  },
  {
    nr: "3.7",
    title: "Haftung",
    content: (
      <>
        Asuno haftet uneingeschränkt bei Verletzung von Leben, Körper oder
        Gesundheit sowie bei <strong>Vorsatz oder grober Fahrlässigkeit</strong>.
        Bei leichter Fahrlässigkeit haftet Asuno nur bei Verletzung{" "}
        <strong>wesentlicher Vertragspflichten</strong> und beschränkt auf den
        vorhersehbaren Schaden.
      </>
    ),
  },
  {
    nr: "3.8",
    title: "Gerichtsstand",
    content: (
      <>
        Gerichtsstand ist <strong>Frankfurt am Main</strong>.
      </>
    ),
  },
];

export default function AGBSection() {
  return (
    <SectionWrapper id="agb" className="bg-background-alt">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Allgemeine Geschäftsbedingungen (AGB)
        </h2>
      </div>

      <div className="mt-16 grid gap-6">
        {agbItems.map((item) => (
          <div
            key={item.nr}
            className="rounded-xl border border-border bg-white p-8"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-lg font-bold text-accent">{item.nr}</span>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
