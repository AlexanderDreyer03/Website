import React from 'react';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import BenefitGrid from '@/components/BenefitGrid';
import StepProcess from '@/components/StepProcess';
import Section from '@/components/Section';
import CTABlock from '@/components/CTABlock';

export default function BetrieblicheAltersvorsorge() {
  const benefitsCompany = [
    {
      title: 'Mitarbeiterbindung',
      description: 'Gute Talente bleiben. Wer eine sichere Altersvorsorge hat, wechselt nicht so leicht den Arbeitgeber.'
    },
    {
      title: 'Steuerliche Optimierung',
      description: 'bAV-Beiträge sind oft vollständig absetzbar. Je nach Form auch Sozialabgabeneinsparungen.'
    },
    {
      title: 'Wettbewerbsvorteil',
      description: 'Du positionierst dich als attraktiver Arbeitgeber – gerade in hart umkämpften Märkten.'
    },
    {
      title: 'Flexibilität',
      description: 'Je nach Unternehmensgröße und Budget: Direktzusage, Pensionsfonds, Versicherungslösung – individuell wählbar.'
    }
  ];

  const benefitsEmployee = [
    {
      title: 'Zusätzliche Rente',
      description: 'Auf die gesetzliche Rente obendrauf: echte Altersvorsorge, die zählt.'
    },
    {
      title: 'Steuerersparnisse',
      description: 'Beiträge der Mitarbeiter sind oft steuerbegünstigt (Entgeltumwandlung).'
    },
    {
      title: 'Sicherheit',
      description: 'Mit bAV haben Mitarbeiter in der Krise und im Alter ein Sicherheitsnetz.'
    },
    {
      title: 'Einfachheit',
      description: 'Der Arbeitgeber regelt es – der Mitarbeiter muss sich nicht kümmern.'
    }
  ];

  const steps = [
    {
      title: 'BESTANDSAUFNAHME & VERSORGUNGSANALYSE',
      description: 'Wie alt ist dein Team? Wer bleibt, wer wechselt? Welche bisherige Versorgung gibt es? Wir verschaffen uns das vollständige Bild.',
      items: []
    },
    {
      title: 'KONZEPTENTWICKLUNG & KOSTENVERGLEICH',
      description: 'Direkte Zusage? Pensionsfonds? Versicherung? Hybrid? Mit Szenarien und Kostenvergleichen findest du die beste Lösung.',
      items: []
    },
    {
      title: 'BETEILIGUNG DEINER MITARBEITER',
      description: 'Wir bereiten Infoveranstaltungen vor, erklären die Vorteile und beraten Mitarbeiter – damit die Akzeptanz hoch ist.',
      items: []
    },
    {
      title: 'UMSETZUNG & LAUFENDE BETREUUNG',
      description: 'Vertragsabschluss, Anmeldungen, Schulung der zuständigen Stelle. Danach: jährliche Überprüfung, Anpassungen bei Gesetzesänderungen.',
      items: []
    }
  ];

  const caseStudies = [
    {
      title: 'Fallbeispiel 1: Mittelständisches Unternehmen mit Fluktuation',
      situation: 'Ein Maschinenbaubetrieb mit 25 Mitarbeitern kämpft gegen Fluktuation. Gute Fachleute verlassen das Unternehmen.',
      solution: 'bAV-Pensionsfonds mit Entgeltumwandlung. Mitarbeiter sparen Steuern, Arbeitgeber spart Sozialabgaben.',
      result: 'Fluktuation sinkt um 30 %, Mitarbeiter verdienen real deutlich mehr (netto), Arbeitgeber spart Steuer/Sozialabgaben.'
    },
    {
      title: 'Fallbeispiel 2: Freiberufler mit Mitarbeitern',
      situation: 'Ein Steuerbüro mit 8 Mitarbeitern. Bislang keine echte bAV, nur kleine Gehaltserhöhungen jedes Jahr.',
      solution: 'Versicherungs-bAV (einfacher zu administrieren). Gehaltsumwandlung mit Arbeitgeberzuschuss.',
      result: 'Mitarbeiter haben erstmals echte Altersvorsorge, Steuerersparnis für den Freiberufler.'
    },
    {
      title: 'Fallbeispiel 3: Gründer wollen wachsen',
      situation: 'Ein Tech-Startup wächst schnell, braucht gute Mitarbeiter, muss aber mit kleinerem Budget wirtschaften.',
      solution: 'Schlanke bAV-Versicherung als „Differentialvorteil": Wir zahlen X Euro pro Mitarbeiter/Monat.',
      result: 'Bessere Chancen im Wettbewerb um Talente, Mitarbeiter loyal, Gründer wächst sicher.'
    }
  ];

  return (
    <div>
      <HeroSection
        badge="Strategie für Unternehmen"
        title="Betriebliche Altersvorsorge: Mitarbeiterbindung und Steuerersparnis kombiniert."
        subtitle="Mit bAV bindest du Talente, sparst Steuern und schaffst echte Mehrwerte für deine Mitarbeiter – ohne höhere Lohnkosten."
      >
        <div id="contact-form">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            bAV-Konzept jetzt anfragen
          </h3>
          <ContactForm pageSource="bav_page" submitText="bAV-Konzept anfragen" />
        </div>
      </HeroSection>

      <Section
        title="Warum bAV für dein Unternehmen?"
        subtitle="Doppelter Gewinn: Bindung stärken, Steuern senken"
        dark={true}
      >
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Vorteile für dein Unternehmen</h3>
          <BenefitGrid benefits={benefitsCompany} columns={2} />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Vorteile für deine Mitarbeiter</h3>
          <BenefitGrid benefits={benefitsEmployee} columns={2} />
        </div>
      </Section>

      <Section
        title="So gehen wir bei bAV vor"
        subtitle="Unser bewährter Prozess für deine bAV"
      >
        <StepProcess steps={steps} />
      </Section>

      <Section
        title="Typische Anwendungsfälle"
        subtitle="bAV in der Praxis: So könnte es auch für dein Unternehmen aussehen"
        dark={true}
      >
        <div className="space-y-6">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">{cs.title}</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Die Herausforderung:</strong> {cs.situation}</p>
                <p><strong>Die Lösung:</strong> {cs.solution}</p>
                <p><strong>Das Ergebnis:</strong> {cs.result}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section dark={true} centered={true}>
        <CTABlock
          title="Betriebliche Altersvorsorge – individuell und rentabel für dein Unternehmen"
          buttonText="Jetzt bAV prüfen lassen"
          scrollToForm={true}
        />
      </Section>
    </div>
  );
}
