import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function CTABlock({ 
  title, 
  description, 
  buttonText = 'Jetzt anfragen',
  scrollToForm = false,
  linkTo = null
}) {
  const handleClick = (e) => {
    if (scrollToForm) {
      e.preventDefault();
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-12 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
      )}
      {scrollToForm ? (
        <button
          onClick={handleClick}
          className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition"
        >
          → {buttonText}
        </button>
      ) : (
        <Link
          to={createPageUrl(linkTo)}
          className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition"
        >
          → {buttonText}
        </Link>
      )}
      <p className="text-blue-200 text-sm mt-6">
        ✓ Kostenlos • Diskret • Keine automatische Nachbestellung
      </p>
    </div>
  );
}
