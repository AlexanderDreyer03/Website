import React from 'react';
import Section from '@/components/Section';

export default function Datenschutz() {
  return (
    <div>
      <Section title="Datenschutzerklärung">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-sm text-gray-700 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">1. Verantwortlicher (Datenverantwortlicher)</h3>
              <p>
                VorsorgeSpezial<br/>
                Unter den Linden 42<br/>
                10117 Berlin<br/>
                Telefon: +49 (0)30 1234-56<br/>
                E-Mail: info@vorsorgespezial.de
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">2. Erhobene Daten und Datenquellen</h3>
              <p className="mb-3"><strong>A. Beim Kontaktformular:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer</li>
                <li>Ggf. weitere freiwillig mitgeteilte Informationen</li>
              </ul>
              <p className="mt-3"><strong>B. Über Cookies & Tracking:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP-Adresse</li>
                <li>Browser-Typ, Betriebssystem</li>
                <li>Besuchte Seiten, Verweilzeiten</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">3. Zweck der Datenverarbeitung</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Beantwortung von Anfragen und Bereitstellung von Beratungsdienstleistungen</li>
                <li>Rückkontakt zu Anfragen</li>
                <li>Verbesserung und Optimierung der Website</li>
                <li>Erfüllung rechtlicher Verpflichtungen (z. B. Steuerrecht)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">4. Rechtsgrundlagen</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Art. 6 Abs. 1 a) DSGVO: Einwilligung des Nutzers</li>
                <li>Art. 6 Abs. 1 b) DSGVO: Erfüllung eines Vertrages</li>
                <li>Art. 6 Abs. 1 c) DSGVO: Erfüllung gesetzlicher Pflichten</li>
                <li>Art. 6 Abs. 1 f) DSGVO: Berechtigte Interessen</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">5. Speicherdauer</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Kontaktformular-Daten: 3 Jahre nach letzter Aktivität / Abschluss eines Auftrages</li>
                <li>Cookie-Daten: 13 Monate oder gemäß Cookie-Einstellung</li>
                <li>Vertragsdaten: Gemäß steuer- und handelsrechtlicher Aufbewahrungspflichten (6–10 Jahre)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">6. Empfänger der Daten</h3>
              <p>Deine Daten werden an folgende Stellen weitergegeben:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Steuerberater / Rechtsanwälte (für Compliance)</li>
                <li>E-Mail-Anbieter</li>
                <li>Hosting-Anbieter</li>
                <li>Ggf. Geschäftspartner (z. B. Versicherer bei Vermittlung)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">7. Deine Rechte</h3>
              <p className="mb-3">Gemäß DSGVO hast du folgende Rechte:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung („Recht auf Vergessenwerden", Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenportabilität (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-3">Zur Ausübung deiner Rechte: E-Mail an info@vorsorgespezial.de</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">8. Widerspruchsrecht</h3>
              <p>
                Du kannst der Verarbeitung deiner Daten jederzeit widersprechen. 
                Kontaktiere uns unter: info@vorsorgespezial.de
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">9. Datensicherheit</h3>
              <p>
                Wir treffen technische und organisatorische Maßnahmen zur Sicherung deiner Daten 
                (z. B. SSL-Verschlüsselung, Zugriffskontrolle, regelmäßige Backups).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">10. Cookies</h3>
              <p className="mb-2">
                Diese Website nutzt Cookies zur Verbesserung der Nutzererfahrung. 
                Cookies sind kleine Dateien, die im Browser gespeichert werden.
              </p>
              <p className="mb-2"><strong>Arten von Cookies:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Notwendige Cookies: Funktionalität der Website</li>
                <li>Analytische Cookies: Besucherverhalten analysieren</li>
                <li>Marketing-Cookies: Zielgerichtete Werbung</li>
              </ul>
              <p className="mt-3">
                Du kannst Cookies in deinen Browser-Einstellungen verwalten oder ablehnen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">11. Änderungen dieser Datenschutzerklärung</h3>
              <p>
                Wir behalten uns vor, diese Erklärung anzupassen. Aktuelle Version: Januar 2024
              </p>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="font-bold text-yellow-900 mb-2">⚠️ Wichtiger Hinweis</p>
              <p className="text-yellow-800 text-sm">
                Diese Datenschutzerklärung muss auf deine exakte Website, deine Datenflüsse und ggf. deine Geschäftspartner 
                angepasst werden. Ein Fachanwalt für IT-Recht oder Datenschutz sollte diese überprüfen, bevor sie live geht. 
                Dies ist eine Struktur-Vorlage, keine vollständige Rechtsberatung.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
