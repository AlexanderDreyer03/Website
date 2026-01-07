import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import CTABlock from '@/components/CTABlock';

export default function Karriere() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    age: '',
    current_position: '',
    experience: '',
    region: '',
    additional_info: '',
    privacy_accepted: false
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.first_name || !formData.last_name || !formData.email || !formData.phone || 
        !formData.current_position || !formData.experience || !formData.privacy_accepted) {
      setError('Bitte fülle alle Pflichtfelder aus.');
      return;
    }

    setLoading(true);
    try {
      await base44.entities.CareerApplication.create(formData);
      setSubmitted(true);
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        age: '',
        current_position: '',
        experience: '',
        region: '',
        additional_info: '',
        privacy_accepted: false
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Fehler beim Senden. Bitte versuche es später erneut.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* HERO */}
      <section className="min-h-[400px] bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Berater gesucht</h1>
          <p className="text-xl text-cyan-50 max-w-2xl">
            Werde Teil unseres Teams. Wir suchen erfahrene Finanzberater für seriöse Kundenberatung im Bereich Vorsorge.
          </p>
        </div>
      </section>

      {/* WHO WE SEEK */}
      <Section title="Wen wir suchen" dark={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">DU BRINGST MIT:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span>Mindestens 3 Jahre Erfahrung in Finanzberatung oder angrenzenden Feldern</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span>Interesse an Vorsorge, Steuern und Strukturen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span>Freude am Kundenkontakt und Verständnis für deren Situation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span>Sorgfalt und Zuverlässigkeit</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span>Bereitschaft, regelmäßig dazuzulernen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span>Du magst Sicherheit und langfristige Planung statt Quick Wins</span>
              </li>
            </ul>
          </div>

          <div className="bg-cyan-50 rounded-xl p-8 border-2 border-cyan-500">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">WIR BIETEN:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span>Spannende, komplexe Kundenaufträge (keine standardisierten Verkaufsgesprächs)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span>Kontinuierliche Fortbildung und Mentoring</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span>Flexible Arbeitsgestaltung (Remote-Option, familienfreundliche Zeiten)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span>Faire Vergütung (Fixgehalt + Beteiligung)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span>Ein Team, das dich unterstützt</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FORM SECTION */}
      <Section title="Jetzt bewerben" dark={false}>
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <h3 className="text-green-800 font-bold text-lg mb-2">✓ Vielen Dank!</h3>
              <p className="text-green-700">
                Deine Bewerbung ist bei uns angekommen. Wir lesen jede Bewerbung sorgfältig und melden uns zeitnah.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Vorname *</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="Dein Vorname"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nachname *</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Dein Nachname"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="deine@email.de"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefonnummer *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+49 ..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alter</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="z.B. 32"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Region *</label>
                  <input
                    type="text"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    placeholder="z.B. Berlin, Remote, Hamburg"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Aktueller Beruf / Position *</label>
                <input
                  type="text"
                  name="current_position"
                  value={formData.current_position}
                  onChange={handleChange}
                  placeholder="z.B. Senior Finanzberater"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Erfahrung in der Finanzberatung *</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Beschreibe deine bisherigen Stationen, Schwerpunkte und was dich zur Bewerbung bewegt..."
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Weitere Informationen (optional)</label>
                <textarea
                  name="additional_info"
                  value={formData.additional_info}
                  onChange={handleChange}
                  placeholder="Lebenslauf, Link zu LinkedIn, oder weitere Details..."
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="border-t pt-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacy_accepted"
                    checked={formData.privacy_accepted}
                    onChange={handleChange}
                    className="w-5 h-5 mt-1 border border-gray-300 rounded focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    Ich stimme der Verarbeitung meiner Daten gemäß <a href="/datenschutz" className="text-cyan-600 hover:underline">Datenschutzerklärung</a> zu. *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Wird gesendet...' : 'Jetzt als Berater bewerben'}
              </button>
            </form>
          )}
        </div>
      </Section>

      {/* CLOSING CTA */}
      <Section dark={true} centered={true}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Fragen zur Stelle?</h2>
          <p className="text-gray-700 mb-6">
            Kontaktiere uns gerne vorab, wenn du Fragen zur Stelle oder dem Team hast.
          </p>
        </div>
      </Section>
    </div>
  );
}
