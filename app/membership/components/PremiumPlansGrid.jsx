import React from 'react';

export default function PremiumPlansGrid({ plans, hoveredPlan, setHoveredPlan }) {
  return (
    <div className="relative max-w-7xl mx-auto px-4 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {plans.slice(1).map((plan, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredPlan(index)}
            onMouseLeave={() => setHoveredPlan(null)}
            className={`relative bg-slate-900/50 backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-300 ${hoveredPlan === index
                ? 'border-purple-500 shadow-2xl shadow-purple-500/30 scale-105'
                : 'border-slate-800 hover:border-purple-500/50'
              }`}
          >
            {/* Badge */}
            {plan.badge && (
              <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r ${plan.color} text-white text-sm font-bold rounded-full shadow-lg`}>
                {plan.badge}
              </div>
            )}

            {/* Plan Name */}
            <div className="mb-6">
              <h3 className={`text-3xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-2`}>
                {plan.name}
              </h3>
              <p className="text-slate-400 text-sm">{plan.subscribers}</p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-start mb-2">
                <span className="text-3xl font-bold text-white mr-1">$</span>
                <span className="text-6xl font-bold text-white">{plan.price}</span>
              </div>
              <p className="text-slate-400 text-sm">{plan.period}</p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span className={`${feature.bold ? 'text-white font-semibold' : 'text-slate-400'}`}>
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className={`w-full py-4 ${plan.buttonColor} text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}>
              Try FREE for 14 days
            </button>

            {/* Glow Effect on Hover */}
            {hoveredPlan === index && (
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-20 rounded-2xl blur-xl -z-10`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}