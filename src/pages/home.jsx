import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import BenefitGrid from '@/components/BenefitGrid';
import StepProcess from '@/components/StepProcess';
import Section from '@/components/Section';
import CTABlock from '@/components/CTABlock';

export default function Home() {
  const benefitBlocks = [
    {
      title: 'Steuerliche Vorteile gezielt nutzen',
      bullets: [
        'Richtige Vorsorgeform kann bis zu 25.000+ € p.a. Steuern sparen',
        'Absetzbarkeit von Beiträgen in vollem Umfang',
        'Optimale Nutzung von Freibeträgen und Fördermaßnahmen'
      ]
    },
    {
      title: 'Fördertöpfe ausschöpfen, die dir zustehen',
      bullets: [
        'Betriebliche Altersvorsorge: Arbeitgeberzuschüsse, Steuerersparnisse',
        'Basisrente: Erhöhte Sonderausgabenfähigkeit',
        'Krankenversicherung: Einsparungen durch BKV'
      ]
    },
    {
      title: 'Maßgeschneidert, nicht von der Stange',
      bullets: [
        'Jede Lebenssituation ist unterschiedlich',
        'Deine Vorsorge passt zu deinen Zielen und deinem Budget',
        'Flexible Anpassung bei Lebensveränderungen'
      ]
    },
    {
      title: 'Langfristig Vermögen aufbauen, sicher absichern',
      bullets: [
        'Notgroschen und Rentenlücke schließen',
        'Pflegekostenrisiko minimieren',
        'Berufsunfähigkeit decken, wo nötig'
      ]
    }
  ];

  const steps = [
    {
      title: 'ERSTGESPRÄCH',
      description: 'Du erzählst uns von deiner Situation, Zielen und Wünschen. Wir hören zu, stellen Fragen und verschaffen uns einen Überblick.',
      items: ['Dauer: ca. 30–45 Minuten', 'Kostenfrei und unverbindlich']
    },
    {
      title: 'ANALYSE & BESTANDSAUFNAHME',
      description: 'Wir analysieren deine aktuelle Lage: Einkommen, Vermögen, bestehende Verträge, Steuersituation, Familie, Risiken. So entstehen keine Lücken.',
      items: ['Vollständiges Bild deiner Finanzlage']
    },
    {
      title: 'INDIVIDUELLE KONZEPTENTWICKLUNG',
      description: 'Basierend auf der Analyse entwickeln wir konkrete Optionen – mit Szenarien, Kostenvergleich und steuerlichen Auswirkungen.',
      items: ['Verständlich aufbereitet', 'Mehrere Handlungsoptionen']
    },
    {
      title: 'UMSETZUNG & LANGFRISTIGE BEGLEITUNG',
      description: 'Wir kümmern uns um die Umsetzung, begleiten bei Abschlüssen und bleiben dein Ansprechpartner – regelmäßige Überprüfungen, Anpassungen.',
      items: ['Laufende Unterstützung', 'Anpassung bei Lebensveränderungen']
    }
  ];

  const offerings = [
    {
      icon: '👔',
      title: 'Betriebliche Altersvorsorge (bAV)',
      description: 'Mitarbeiterbindung und Vorsorge kombinieren – mit optimaler Steuergestaltung.',
      link: 'betriebliche-altersvorsorge',
      button: 'bAV-Möglichkeiten erkunden'
    },
    {
      icon: '🏥',
      title: 'Betriebliche Krankenversicherung (BKV)',
      description: 'Gesundheit als echter Wettbewerbsvorteil. Mit BKV bietest du echte Mehrwerte.',
      link: 'betriebliche-krankenversicherung',
      button: 'BKV-Vorteile kennenlernen'
    },
    {
      icon: '🎯',
      title: 'Basisrente (Rürup-Rente)',
      description: 'Maximale Steuerersparnis und sichere Altersvorsorge für Selbstständige und Freiberufler.',
      link: 'basisrente',
      button: 'Basisrente-Potenzial prüfen'
    }
  ];

  return (
    <div>
      {/* HERO */}
      <HeroSection
        badge="✓ Kostenlos • Diskret • Erstgespräch"
        title="Deine Vorsorge mit Spezialkonzepten, Steuervorteilen & Förderungen aufs nächste Level."
        subtitle="Individuelle Vorsorgekonzepte, die deine persönliche Situation und Steuersituation optimal nutzen – von der bAV über BKV bis Basisrente."
        description="Unsere Berater entwickeln individuelle, maßgeschneiderte Vorsorgekonzepte, um steuerliche Belastungen zu optimieren und dein Vermögen intelligent zu strukturieren."
      >
        <div id="contact-form">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Unverbindliches Erstgespräch anfragen
          </h3>
          <ContactForm pageSource="homepage" />
        </div>
      </HeroSection>

      {/* BENEFITS SECTION */}
      <Section
        title="Warum individuelle Vorsorge dein Vermögen und deine Steuerlast verändert"
        dark={true}
      >
        <BenefitGrid benefits={benefitBlocks} columns={2} />
      </Section>

      {/* OFFERINGS SECTION */}
      <Section
        title="Unsere Schwerpunkte"
        subtitle="Spezialisiert auf die Vorsorgeformen, die dein Vermögen transformieren"
        centered={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((offering, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-cyan-500 transition shadow-lg">
              <div className="text-5xl mb-4">{offering.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {offering.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {offering.description}
              </p>
              <Link
                to={createPageUrl(offering.link)}
                className="inline-block px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition font-medium"
              >
                → {offering.button}
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS SECTION */}
      <Section
        title="So läuft die Beratung ab"
        subtitle="Transparenz von Anfang an: Dein Weg zur optimalen Vorsorge"
        dark={true}
      >
        <StepProcess steps={steps} />
      </Section>

      {/* TESTIMONIAL */}
      <Section title="Was unsere Kunden über die Beratung sagen" centered={true}>
        <div className="max-w-3xl mx-auto bg-blue-50 rounded-xl p-8 border-l-4 border-cyan-500">
          <p className="text-lg text-gray-700 italic mb-4">
            "Ich bin Unternehmer und mein erster Gedanke war: ‚Naja, noch mehr Beratung, die eh nichts spart.' 
            Aber dann die Rechnung – dass ich 25.000 € pro Jahr einspare UND eine echte Vorsorge habe, 
            das war überraschend. Die Beratung hat sich selbst bezahlt."
          </p>
          <p className="font-bold text-blue-900">
            – Markus F., Inhaber einer Unternehmensgruppe
          </p>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section dark={true} centered={true}>
        <CTABlock
          title="Lass deine Vorsorge überprüfen – kostenlos und unverbindlich"
          description="Ob Unternehmer, Selbstständiger oder Gutverdiener mit Angestelltenstatus – die richtige Kombination aus Steuern sparen und Vermögen aufbauen ist oft einfacher als gedacht."
          buttonText="Kostenloses Erstgespräch anfragen"
          scrollToForm={true}
        />
      </Section>
    </div>
  );
}
