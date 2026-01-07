import React from 'react';

export default function Section({ 
  title, 
  subtitle, 
  children, 
  dark = false,
  centered = false,
  maxWidth = 'max-w-7xl'
}) {
  return (
    <section className={`py-16 md:py-24 ${dark ? 'bg-blue-50' : 'bg-white'}`}>
      <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8`}>
        {(title || subtitle) && (
          <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg text-gray-700 ${centered ? 'max-w-2xl mx-auto' : ''}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
