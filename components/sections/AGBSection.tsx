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
        Diese AGB gelten für <strong className="font-medium text-foreground">sämtliche Beratungs-, Entwicklungs- und
        Implementierungsleistungen</strong> der Asuno. Abweichende Bedingungen
        gelten nur bei <strong className="font-medium text-foreground">schriftlicher Vereinbarung</strong>.
      </>
    ),
  },
  {
    nr: "3.2",
    title: "Rücktritt und Terminverschiebung",
    content: (
      <>
        Eine kostenfreie Terminverschiebung ist bis{" "}
        <strong className="font-medium text-foreground">14 Tage vor Projektstart</strong> möglich. Bei späterer
        Stornierung werden <strong className="font-medium text-foreground">50 % der vereinbarten Projektgebühr</strong>{" "}
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
        <strong className="font-medium text-foreground">vollständig erstattet</strong>. Weitergehende Ansprüche sind
        ausgeschlossen.
      </>
    ),
  },
  {
    nr: "3.4",
    title: "Zahlungsbedingungen",
    content: (
      <>
        Rechnungen sind innerhalb von <strong className="font-medium text-foreground">14 Tagen ohne Abzug</strong> zu
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
        <strong className="font-medium text-foreground">sämtliche Nutzungsrechte</strong> an den entwickelten
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
        <strong className="font-medium text-foreground">gesetzlicher Datenschutzbestimmungen</strong> verarbeitet. Ein
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
        Gesundheit sowie bei <strong className="font-medium text-foreground">Vorsatz oder grober Fahrlässigkeit</strong>.
        Bei leichter Fahrlässigkeit haftet Asuno nur bei Verletzung{" "}
        <strong className="font-medium text-foreground">wesentlicher Vertragspflichten</strong> und beschränkt auf den
        vorhersehbaren Schaden.
      </>
    ),
  },
  {
    nr: "3.8",
    title: "Gerichtsstand",
    content: (
      <>
        Gerichtsstand ist <strong className="font-medium text-foreground">Frankfurt am Main</strong>.
      </>
    ),
  },
];

export default function AGBSection() {
  return (
    <SectionWrapper id="agb">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-foreground-muted">
          Kapitel 3
        </p>
        <h2 className="mt-3 text-xl font-semibold text-foreground md:text-2xl">
          Allgemeine Geschäftsbedingungen
        </h2>
      </div>

      <div className="mt-10 divide-y divide-border">
        {agbItems.map((item) => (
          <div key={item.nr} className="py-5">
            <div className="flex items-baseline gap-3">
              <span className="text-xs text-foreground-muted">{item.nr}</span>
              <h3 className="text-sm font-semibold text-foreground">
                {item.title}
              </h3>
            </div>
            <p className="mt-3 pl-8 text-sm leading-relaxed text-foreground-muted">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
