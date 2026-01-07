import React from 'react';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import BenefitGrid from '@/components/BenefitGrid';
import StepProcess from '@/components/StepProcess';
import Section from '@/components/Section';
import CTABlock from '@/components/CTABlock';

export default function Basisrente() {
  const targetGroups = [
    {
      title: 'Selbstständige & Freiberufler',
      description: 'Keine betriebliche Vorsorge, keine Rentenpunkte sammeln. Mit Basisrente: bis zu 27.565 € p.a. steuerlich absetzbar.'
    },
    {
      title: 'Unternehmer',
      description: 'Zusätzlich zur bAV kann eine Basisrente persönlich sinnvoll sein – für zusätzliche Rente und Steuersparnis.'
    },
    {
      title: 'Gutverdiener (Angestellte & Unternehmer)',
      description: 'Wenn die Rente knapp wird und Steuern sparen ein Thema ist: Basisrente ist oft die beste Lösung.'
    },
    {
      title: 'Ärzte, Anwälte, Berater',
      description: 'Häufig im Rahmen der Partnerschaft keine bAV. Basisrente + Zusatzrente kombiniert = optimale Lösung.'
    }
  ];

  const benefits = [
    {
      title: 'Maximale Steuerabsetzbarkeit',
      description: 'Im Jahr 2024 sind bis zu 27.565 € pro Jahr steuerlich absetzbar. Bei 42% Steuersatz sind das über €11.000 Steuerersparnis p.a.!'
    },
    {
      title: 'Langfristige Altersvorsorge',
      description: 'Als Selbstständiger sammelst du keine Rentenpunkte. Mit Basisrente baust du dir eine echte Zusatzrente auf.'
    },
    {
      title: 'Krisensicher und unverlierbar',
      description: 'Basisrente ist in Insolvenz besonders geschützt. Die Rente selbst ist unverlierbar – du bekommst sie garantiert.'
    },
    {
      title: 'Flexible Ausgestaltung',
      description: 'Klassisch oder Fonds-Rente? Mit oder ohne Hinterbliebenenleistung? Alles nach deinen Zielen konfigurierbar.'
    }
  ];

  const steps = [
    {
      title: 'ANALYSE DEINER SITUATION',
      description: 'Einkommen, Steuersatz, Lebenssituation, Versorgungslücke, Finanzielle Ziele. Daraus berechnen wir dein Potenzial.'
    },
    {
      title: 'SZENARIEN & OPTIONEN',
      description: 'Wie viel kannst du monatlich investieren? Was bringt Basisrente vs. andere Vorsorgeformen? Welche Renditeerwartung ist realistisch?'
    },
    {
      title: 'UMSETZUNG',
      description: 'Wir wählen den richtigen Anbieter und Tarif, kümmern uns um die Anmeldung und Abwicklung.'
    },
    {
      title: 'LAUFENDE ÜBERPRÜFUNG',
      description: 'Jährlich oder bei Lebensveränderungen: Passt die Basisrente noch zu deinen Zielen? Sollten wir anpassen?'
    }
  ];

  const faqs = [
    {
      question: 'Wie viel muss ich monatlich einzahlen?',
      answer: 'Es gibt kein Minimum. Von €100/Monat bis zur Obergrenze (27.565 € p.a.) – alles ist möglich.'
    },
    {
      question: 'Kann ich vorzeitig Geld abrufen?',
      answer: 'Nein – das ist ein Feature, kein Bug. Basisrente ist für das Alter konzipiert. Das bietet Schutz und Sicherheit.'
    },
    {
      question: 'Was ist der Unterschied zu einer normalen Rentenversicherung?',
      answer: 'Hauptunterschied: Basisrente ist steuerlich viel günstiger. Normale Rente hast du volle Kontrolle über dein Geld.'
    },
    {
      question: 'Kann ich die Basisrente zu meinem Steuerberater mitnehmen?',
      answer: 'Ja! Teile deine Rente mit. Alle modernen Anbieter stellen Bescheinigungen aus, die der Steuerberater direkt einträgt.'
    },
    {
      question: 'Gilt Basisrente auch für meinen Ehepartner?',
      answer: 'Ja – jeder Ehepartner kann einzeln bis 27.565 € einzahlen. Optimale Lösung für Paare!'
    }
  ];

  return (
    <div>
      {/* HERO */}
      <HeroSection
        badge="Für Selbstständige und Gutverdiener"
        title="Basisrente: Steuervorteile HEUTE nutzen, Versorgung MORGEN sichern."
        subtitle="Maximale steuerliche Absetzbarkeit, sichere Altersvorsorge, krisensicher und unverlierbar – für Selbstständige, Freiberufler und Gutverdiener."
      >
        <div id="contact-form">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Basisrenten-Potenzial prüfen
          </h3>
          <ContactForm pageSource="basisrente_page" submitText="Basisrente-Berechnung anfordern" />
        </div>
      </HeroSection>

      {/* TARGET GROUPS */}
      <Section
        title="Für wen ist die Basisrente sinnvoll?"
        subtitle="Typische Zielgruppen – vielleicht passt du auch dazu"
        dark={true}
      >
        <BenefitGrid benefits={targetGroups} columns={2} />
      </Section>

      {/* BENEFITS */}
      <Section
        title="Vorteile der Basisrente"
        subtitle="Warum Basisrente für dich die richtige Entscheidung sein kann"
      >
        <div className="space-y-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-8 bg-blue-50 rounded-xl border-l-4 border-cyan-500">
              <h3 className="text-xl font-bold text-blue-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        title="So entwickeln wir dein Basisrenten-Konzept"
        subtitle="Dein Weg zu mehr Steuerersparnis und Altersvorsorge"
        dark={true}
      >
        <StepProcess steps={steps} />
      </Section>

      {/* FAQ */}
      <Section
        title="Häufige Fragen"
        subtitle="Das fragst du dich vielleicht auch"
        centered={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-blue-900 mb-3">{faq.question}</h4>
              <p className="text-gray-700 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section dark={true} centered={true}>
        <CTABlock
          title="Deine individuelle Basisrenten-Strategie"
          description="Lass dein Potenzial an Steuerersparnis berechnen – kostenfrei und unverbindlich."
          buttonText="Basisrenten-Berechnung anfordern"
          scrollToForm={true}
        />
      </Section>
    </div>
  );
}
