import React from 'react';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import Section from '@/components/Section';

export default function Kontakt() {
  return (
    <div>
      {/* HERO */}
      <HeroSection
        title="Lass dich unverbindlich beraten."
        subtitle="Wir freuen uns auf deine Anfrage zu bAV, BKV, Basisrente oder anderen Vorsorgeformen."
      >
        <div id="contact-form">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Kontaktformular
          </h3>
          <ContactForm pageSource="contact_page" />
        </div>
      </HeroSection>

      {/* CONTACT INFO */}
      <Section title="Oder erreiche uns direkt" centered={true}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-bold text-blue-900 mb-2">E-Mail</h3>
            <a href="mailto:info@vorsorgespezial.de" className="text-cyan-600 hover:underline">
              info@vorsorgespezial.de
            </a>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-bold text-blue-900 mb-2">Telefon</h3>
            <a href="tel:+4930123456" className="text-cyan-600 hover:underline">
              +49 (0)30 1234-56
            </a>
            <p className="text-sm text-gray-600 mt-2">Mo–Fr: 09:00–18:00 Uhr</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="font-bold text-blue-900 mb-2">Adresse</h3>
            <p className="text-gray-700">
              VorsorgeSpezial<br/>
              Unter den Linden 42<br/>
              10117 Berlin
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
