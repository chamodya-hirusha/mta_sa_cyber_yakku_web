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
