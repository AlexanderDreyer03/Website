import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import CTABlock from '@/components/CTABlock';

export default function UeberUns() {
  const consultants = [
    {
      name: 'Peter Müller',
      role: 'Gründer & Principal Consultant',
      bio: 'Seit 2010 im Geschäft mit Vorsorge und Finanzplanung. Spezialisiert auf bAV und Steueroptimierung für Unternehmen. Verheiratet, zwei Kinder.',
      focus: ['Betriebliche Altersvorsorge', 'Unternehmens-Strategie', 'Steuerliche Optimierung'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Sandra Richter',
      role: 'Senior Consultant Vorsorge',
      bio: 'Ausgebildete Finanzfachfrau mit 15 Jahren Erfahrung. Spezialisiert auf individuelle Kundenberatung, besonders für Frauen in Führungspositionen.',
      focus: ['Basisrente & private Altersvorsorge', 'BKV-Konzepte', 'Frauenspezifische Vorsorge'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
    },
    {
      name: 'Thomas Beck',
      role: 'Consultant Betriebliche Lösungen',
      bio: 'Experte für die Einführung von bAV und BKV in Mittelständern. Verständnis für Unternehmens-Prozesse und Mitarbeiter-Akzeptanz.',
      focus: ['Betriebliche Krankenversicherung', 'bAV-Implementierung', 'Mitarbeiter-Communication'],
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop'
    }
  ];

  const values = [
    {
      title: 'Transparenz',
      description: 'Keine versteckten Provisionen, keine Produkte, die wir nicht verstehen. Du weißt immer, warum wir was empfehlen.'
    },
    {
      title: 'Seriosität',
      description: 'Regulierung, Fortbildung, Ethik. Wir halten uns an die höchsten Standards in unserem Geschäft.'
    },
    {
      title: 'Verständlichkeit',
      description: 'Fach-Chinesisch hat keinen Platz in unseren Gesprächen. Du solltest alles verstehen.'
    },
    {
      title: 'Langfristige Partnerschaft',
      description: 'Wir verdienen nicht nur am Abschluss – wir verdienen daran, dass du zufrieden bist und bleibst.'
    },
    {
      title: 'Diskretion',
      description: 'Was du uns erzählst, bleibt bei uns. Punkt.'
    }
  ];

  return (
    <div>
      {/* HERO */}
      <section className="min-h-[400px] bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Wer wir sind</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Spezialisiert auf Vorsorge, Steueroptimierung und individuelle Finanzplanung für Unternehmer und Selbstständige.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <Section title="Unser Anspruch" centered={true}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            Seit vielen Jahren helfen wir Unternehmern, Selbstständigen und Gutverdienern, ihre Vorsorge intelligent zu gestalten. 
            Nicht standardisiert, sondern maßgeschneidert. Nicht oberflächlich, sondern tiefgreifend.
          </p>
          <p className="text-lg text-gray-700">
            <strong>Seriös. Verständlich. Nachhaltig.</strong> Das ist unser Versprechen an dich.
          </p>
        </div>
      </Section>

      {/* VALUES */}
      <Section title="Das zeichnet uns aus" subtitle="Warum unsere Kunden uns vertrauen" dark={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TEAM */}
      <Section title="Unser Team" subtitle="Die Berater hinter der Beratung">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {consultants.map((consultant, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition">
              {/* PHOTO */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={consultant.image} 
                  alt={consultant.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900">{consultant.name}</h3>
                <p className="text-cyan-600 font-semibold mb-3">{consultant.role}</p>
                <p className="text-gray-700 text-sm mb-4">{consultant.bio}</p>
                <div>
                  <p className="text-xs font-bold text-gray-600 mb-2">SCHWERPUNKTE:</p>
                  <ul className="space-y-1">
                    {consultant.focus.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-cyan-500">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CAREERS SECTION */}
      <Section title="Teil unseres Teams werden" subtitle="Wir wachsen und suchen Talente" dark={true} centered={true}>
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="text-lg text-gray-700 mb-6">
            Wenn du Lust hast auf intensive, maßgeschneiderte Kundenberatung, 
            Lernen bei erfahrenen Beratern und flexibles Arbeiten – 
            dann schau dir unsere offenen Stellen an.
          </p>
          <Link
            to={createPageUrl('karriere')}
            className="inline-block px-8 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition"
          >
            → Zu den offenen Stellenangeboten
          </Link>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section dark={false} centered={true}>
        <CTABlock
          title="Lass uns deine Vorsorge gemeinsam optimieren"
          description="Komm in den Austausch mit unserem Team. Wir freuen uns auf deine Anfrage."
          buttonText="Kostenloses Erstgespräch vereinbaren"
          linkTo="kontakt"
        />
      </Section>
    </div>
  );
}
