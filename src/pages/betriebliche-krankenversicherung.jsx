import React from 'react';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import BenefitGrid from '@/components/BenefitGrid';
import Section from '@/components/Section';
import CTABlock from '@/components/CTABlock';

export default function BetrieblicheKrankenversicherung() {
  const benefitsEmployer = [
    {
      title: 'Echte Bindung',
      description: 'Mitarbeiter, denen die Gesundheit wichtig ist, bleiben länger. Das spart Recruitment-Kosten.'
    },
    {
      title: 'Weniger Ausfallzeiten',
      description: 'Prävention und Gesundheitsförderung senken Krankheitsquoten.'
    },
    {
      title: 'Attraktivität',
      description: 'In Bewerbungsgesprächen: „Wir kümmern uns um deine Gesundheit." Das zieht Top-Talente an.'
    },
    {
      title: 'Keine Lohnkostenerhöhung',
      description: 'Die BKV wird vom Arbeitgeber bezahlt (steuerbegünstigt). Die Mitarbeiter zahlen nichts.'
    }
  ];

  const benefitsEmployee = [
    {
      title: 'Bessere Leistungen',
      description: 'Zahnarzt, Physio, Wellness – oft besser als gesetzliche Krankenversicherung.'
    },
    {
      title: 'Keine Prämien aus der Tasche',
      description: 'Der Arbeitgeber zahlt die BKV komplett. Für den Mitarbeiter kostenlos.'
    },
    {
      title: 'Flexibilität',
      description: 'Oft Wahlfreiheit: z. B. mit oder ohne Zahnarzt, mit oder ohne Wellness.'
    },
    {
      title: 'Sicherheit',
      description: 'Gutes Gefühl: „Mein Arbeitgeber kümmert sich um meine Gesundheit."'
    }
  ];

  const meaning = [
    {
      title: 'Mitarbeiter bleiben in ihrer gesetzlichen KV',
      description: 'Sie erhalten ZUSATZ-Leistungen (z. B. Zahnarzt, Brillen, Wellness)'
    },
    {
      title: 'Für den Arbeitgeber',
      description: 'Betriebsausgabe, steuerlich absetzbar'
    },
    {
      title: 'Für Mitarbeiter',
      description: 'Geldwerter Vorteil (aber oft mit Sachbezugsfreibeträgen kombiniert, sodass keine zusätzliche Lohnsteuer anfällt)'
    },
    {
      title: 'Das ist',
      description: 'Völlig legal, sehr verbreitet und ein echter Mehrwert!'
    }
  ];

  const caseStudies = [
    {
      title: 'Beispiel 1: Personalbüro mit 40 Mitarbeitern',
      situation: 'Hohe Fluktuation, viele Frauen im Team, Wunsch nach Zahnarzt-Leistungen.',
      solution: 'BKV-Paket: Zahnarzt (80 %) + Sehhilfen + jährlicher Wellness-Zuschuss (€150/Jahr).',
      result: 'Weniger Fluktuation, Mitarbeiter berichten über bessere Mundgesundheit, Arbeitgeber zahlt ca. €50/Monat pro MA.'
    },
    {
      title: 'Beispiel 2: Handwerksbetrieb mit 18 Mitarbeitern',
      situation: 'Viele ältere Mitarbeiter, vermehrte Rückenprobleme, Krankheitsquote steigt.',
      solution: 'BKV-Paket: Zahnarzt + Sehhilfen + Physio/Osteopathie + Fitness-Zuschuss.',
      result: 'Mitarbeiter berichten von besserer Gesundheit. Krankheitsquote sinkt. Arbeitgeber spart im Ergebnis.'
    },
    {
      title: 'Beispiel 3: IT-Startup mit 25 Mitarbeitern',
      situation: 'Junge, digital-affine Mitarbeiter, hohe Konkurrenz um Talente, Budget begrenzt.',
      solution: 'Basis-BKV (Zahnarzt) + Wellness-App-Zugang + Yoga-Kurse (virtuell und vor Ort).',
      result: 'Attraktion von Neukunden, gute Arbeitgeber-bewertungen, Mitarbeiter nutzen die Angebote gerne.'
    }
  ];

  return (
    <div>
      <HeroSection
        badge="Gesundheit ist Talent-Magnet"
        title="BKV: Gesundheit als echten Wettbewerbsvorteil nutzen."
        subtitle="Bessere Mitarbeiterbindung, weniger Ausfallzeiten, echte Mehrwerte – und das ohne Brutto/Netto-Probleme für deine Mitarbeiter."
      >
        <div id="contact-form">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            BKV-Möglichkeiten prüfen lassen
          </h3>
          <ContactForm pageSource="bkv_page" submitText="BKV-Möglichkeiten anfragen" />
        </div>
      </HeroSection>

      <Section
        title="Vorteile der BKV"
        subtitle="Warum BKV die Geheimwaffe vieler erfolgreicher Unternehmer ist"
        dark={true}
      >
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Aus Sicht des Unternehmers</h3>
          <BenefitGrid benefits={benefitsEmployer} columns={2} />
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Aus Sicht der Mitarbeiter</h3>
          <BenefitGrid benefits={benefitsEmployee} columns={2} />
        </div>

        <div className="bg-white rounded-xl p-8 border-2 border-cyan-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Rechtliche & Steuerliche Einordnung</h3>
          <p className="text-gray-700 mb-6">
            <strong>Wichtig zu verstehen:</strong> BKV ist KEINE Umstellung auf private Krankenversicherung. 
            Es sind Zusatzleistungen, die der Arbeitgeber seinen Mitarbeitern über eine zusätzliche 
            Betriebliche Krankenversicherung finanziert.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {meaning.map((item, idx) => (
              <div key={idx} className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-900 mb-2">{item.title}</p>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="Unsere BKV-Konzepte"
        subtitle="Individuelle BKV-Pakete – schnell, einfach, effizient"
      >
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 space-y-4">
          <div className="flex gap-4">
            <span className="text-2xl">✓</span>
            <div>
              <h4 className="font-bold text-blue-900 mb-1">BEDARFSANALYSE</h4>
              <p className="text-gray-700">Welche Leistungen wünschen sich deine Mitarbeiter am meisten?</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-2xl">✓</span>
            <div>
              <h4 className="font-bold text-blue-900 mb-1">MODULARITÄT</h4>
              <p className="text-gray-700">Zahnarzt + Sehhilfe? Oder Zahnarzt + Wellness? Du entscheidest.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-2xl">✓</span>
            <div>
              <h4 className="font-bold text-blue-900 mb-1">KOSTENPLANUNG</h4>
              <p className="text-gray-700">Mit Budgetmodellen finden wir die beste Lösung für dein Unternehmen.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-2xl">✓</span>
            <div>
              <h4 className="font-bold text-blue-900 mb-1">MITARBEITERKOMMUNIKATION</h4>
              <p className="text-gray-700">Wir bereiten Info-Material vor und unterstützen bei der Kommunikation.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-2xl">✓</span>
            <div>
              <h4 className="font-bold text-blue-900 mb-1">ADMINISTRATION</h4>
              <p className="text-gray-700">Wir kümmern uns um Verträge, Meldungen und laufende Betreuung.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Praxisbeispiele"
        subtitle="BKV in echten Unternehmen – drei konkrete Beispiele"
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
          title="Gesundheit schafft Loyalität – auch in deinem Unternehmen"
          buttonText="BKV jetzt unverbindlich durchspielen"
          scrollToForm={true}
        />
      </Section>
    </div>
  );
}
