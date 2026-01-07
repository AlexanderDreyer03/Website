import React from 'react';

export default function BenefitGrid({ benefits, columns = 4 }) {
  const colClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  }[columns] || 'md:grid-cols-4';

  return (
    <div className={`grid grid-cols-1 ${colClass} gap-6`}>
      {benefits.map((benefit, idx) => (
        <div key={idx} className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
          {benefit.icon && (
            <div className="text-3xl mb-4">{benefit.icon}</div>
          )}
          <h3 className="text-lg font-bold text-blue-900 mb-3">
            {benefit.title}
          </h3>
          {benefit.bullets ? (
            <ul className="space-y-2 text-sm text-gray-700">
              {benefit.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-700">
              {benefit.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
