import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Membership Plans
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 mb-4">
          Join Cyber Yakku MTA Server Today
        </p>
        <p className="text-lg text-slate-400">
          Wondering how much you'll save? Try our{' '}
          <a href="#" className="text-purple-400 hover:text-purple-300 underline">
            savings calculator
          </a>
          .
        </p>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-24 fill-slate-900/50">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
}