import React from 'react';
import { heroData } from '../data/aboutData';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-rfrom-purple-700 via-purple-800 to-fuchsia-800 py-20">
      <div className="pt-20 mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-md">
          {heroData.title.split(' ').slice(0, -2).join(' ')} <span className="text-fuchsia-300">{heroData.title.split(' ').slice(-2).join(' ')}</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-purple-100">
          {heroData.subtitle}
        </p>
      </div>
    </section>
  );
}