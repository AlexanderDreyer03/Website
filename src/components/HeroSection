import React from 'react';

export default function HeroSection({ 
  badge, 
  title, 
  subtitle, 
  description, 
  children, 
  backgroundImage 
}) {
  return (
    <div 
      className="relative min-h-[600px] md:min-h-[700px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage 
          ? `url(${backgroundImage})` 
          : 'linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            {badge && (
              <div className="inline-block bg-white/90 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {badge}
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-xl text-blue-100 mb-6">
                {subtitle}
              </p>
            )}

            {description && (
              <p className="text-lg text-gray-100 mb-8 leading-relaxed max-w-lg">
                {description}
              </p>
            )}

            <p className="text-sm text-blue-200 font-medium">
              ✓ Kostenlos • Diskret • Erstgespräch
            </p>
          </div>

          {/* FORM / CTA AREA */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
