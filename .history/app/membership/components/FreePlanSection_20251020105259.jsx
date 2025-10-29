import React from 'react';

export default function FreePlanSection({ plan }) {
  return (
    <div className="relative max-w-7xl mx-auto px-4 mb-12">
      <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl hover:border-purple-500/50 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-pink-400 mb-2">{plan.name}</h3>
            <p className="text-slate-400">{plan.subscribers}</p>
          </div>
          <div className="flex-1 text-center">
            <div className="text-6xl font-bold text-white mb-2">
              ${plan.price}
            </div>
            <p className="text-slate-400">{plan.period}</p>
          </div>
          <div className="flex-1">
            {plan.features.map((feature, idx) => (
              <div key={idx} className="text-slate-300 mb-2">
                • {feature.label}
              </div>
            ))}
          </div>
          <div className="flex-1 flex justify-end">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105">
              Get Started for FREE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}