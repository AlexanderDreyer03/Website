import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';

export default function ContactForm({ 
  pageSource = 'website',
  submitText = 'Jetzt kostenloses Gespräch vereinbaren'
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    status: '',
    situation: '',
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

    if (!formData.name || !formData.email || !formData.phone || !formData.privacy_accepted) {
      setError('Bitte fülle alle Pflichtfelder aus.');
      return;
    }

    setLoading(true);
    try {
      await base44.entities.ContactRequest.create({
        ...formData,
        page_source: pageSource
      });
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        status: '',
        situation: '',
        privacy_accepted: false
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Fehler beim Senden. Bitte versuche es später erneut.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-green-800 font-bold text-lg mb-2">✓ Vielen Dank!</h3>
        <p className="text-green-700">
          Deine Anfrage ist bei uns angekommen. Wir melden uns zeitnah mit Terminvorschlägen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Dein Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          E-Mail *
        </label>
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
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Telefonnummer *
        </label>
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

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Status / Gesellschaftsform
        </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
        >
          <option value="">— Bitte wählen —</option>
          <option value="einzelunternehmer">Einzelunternehmer/in</option>
          <option value="selbststaendig">Selbstständige/r</option>
          <option value="gmbh">GmbH</option>
          <option value="gmbh_co_kg">GmbH & Co. KG</option>
          <option value="ag">AG</option>
          <option value="ek">e.K.</option>
          <option value="freiberufler">Freiberufler/in</option>
          <option value="angestellter">Angestellte/r mit Vorsorgeinteresse</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Deine Situation / Deine Fragen
        </label>
        <textarea
          name="situation"
          value={formData.situation}
          onChange={handleChange}
          placeholder="Erzähle uns kurz von deiner Situation oder deinen Fragen..."
          rows="3"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
        ></textarea>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="space-y-3 border-t pt-4">
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

        <p className="text-xs text-gray-600">
          ✓ Deine Angaben werden vertraulich behandelt.<br/>
          ✓ Wir melden uns zeitnah mit Terminvorschlägen.
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Wird gesendet...' : submitText}
      </button>
    </form>
  );
}
