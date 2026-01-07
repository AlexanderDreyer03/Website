import React from 'react';
import Section from '@/components/Section';

export default function Impressum() {
  return (
    <div>
      <Section title="Impressum">
        <div className="max-w-3xl mx-auto prose prose-sm">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Angaben gemäß § 5 TMG</h2>

          <div className="mb-8 p-6 bg-blue-50 rounded-lg">
            <p className="font-bold">VorsorgeSpezial</p>
            <p>Unter den Linden 42</p>
            <p>10117 Berlin</p>
            <p>Deutschland</p>
          </div>

          <h3 className="text-lg font-bold text-blue-900 mt-6 mb-3">Verantwortliche Person</h3>
          <p>Peter Müller</p>
          <p>Telefon: +49 (0)30 1234-56</p>
          <p>E-Mail: info@vorsorgespezial.de</p>
          <p>Website: vorsorgespezial.de</p>

          <h3 className="text-lg font-bold text-blue-900 mt-6 mb-3">Registergericht</h3>
          <p>Amtsgericht Berlin-Charlottenburg</p>
          <p>Registernummer: HRB 123456 B</p>

          <h3 className="text-lg font-bold text-blue-900 mt-6 mb-3">Umsatzsteuer-ID</h3>
          <p>gemäß § 27a Umsatzsteuergesetz:<br/>
          USt-IdNr.: DE 123456789</p>

          <h3 className="text-lg font-bold text-blue-900 mt-6 mb-3">Berufshaftpflichtversicherung</h3>
          <p>Versicherer: [Versicherungsunternehmen eintragen]</p>
          <p>Versicherungsschutz: Gültig im In- und Ausland</p>

          <h3 className="text-lg font-bold text-blue-900 mt-6 mb-3">Verantwortlich für Inhalte</h3>
          <p>Peter Müller</p>
          <p>Unter den Linden 42, 10117 Berlin</p>

          <h3 className="text-lg font-bold text-blue-900 mt-6 mb-3">Haftungsausschluss</h3>
          <p>
            Die Inhalte dieser Website werden mit größter Sorgfalt erstellt. Allerdings übernehmen wir keine Gewähr 
            für die Aktualität, Richtigkeit und Vollständigkeit der Inhalte. Als Diensteanbieter sind wir gemäß 
            § 7 Abs.1 TMG für eigene Inhalte verantwortlich.
          </p>

          <h3 className="text-lg font-bold text-blue-900 mt-6 mb-3">Externe Links</h3>
          <p>
            Diese Website enthält Verweise (Links) zu Websites Dritter („externe Links"). Für den Inhalt dieser 
            externen Websites sind die jeweiligen Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen 
            werden solche Links unverzüglich entfernt.
          </p>

          <h3 className="text-lg font-bold text-blue-900 mt-6 mb-3">Urheberrecht</h3>
          <p>
            Die durch uns erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Vervielfältigung, 
            Bearbeitung oder Verbreitung ohne ausdrückliche Genehmigung sind nicht gestattet.
          </p>

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm">
            <p className="font-bold text-yellow-900 mb-2">⚠️ Wichtiger Hinweis</p>
            <p className="text-yellow-800">
              Dieser Impressum-Text muss mit einem Rechtsanwalt überprüft und an deine exakte Situation angepasst werden 
              (Registernummer, Versicherungsdaten, ggf. weitere Disclaimer). Dies ist nur eine Struktur-Vorlage.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
