import React from 'react';

export default function AdditionalInfoSection() {
  return (
    <div className="relative max-w-4xl mx-auto px-4 pb-20 text-center">
      <div className="bg-gradient-to-r from-purple-900/30 to-red-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-4">🎮 All Plans Include</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-300">
          <div>
            <div className="text-3xl mb-2">🚗</div>
            <div className="font-semibold">Custom Vehicles</div>
          </div>
          <div>
            <div className="text-3xl mb-2">🔫</div>
            <div className="font-semibold">Weapon Access</div>
          </div>
          <div>
            <div className="text-3xl mb-2">💎</div>
            <div className="font-semibold">Exclusive Rewards</div>
          </div>
        </div>
      </div>
    </div>
  );
}