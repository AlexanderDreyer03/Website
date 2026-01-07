import React from 'react';

export default function StepProcess({ steps }) {
  return (
    <div className="space-y-8">
      {steps.map((step, idx) => (
        <div key={idx} className="flex gap-6">
          {/* STEP NUMBER */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white font-bold text-lg">
              {idx + 1}
            </div>
          </div>

          {/* STEP CONTENT */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-700">
              {step.description}
            </p>
            {step.items && (
              <ul className="mt-3 space-y-2">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-cyan-500 font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
