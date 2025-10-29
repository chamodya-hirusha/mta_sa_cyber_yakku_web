import React from 'react';
import { heroData } from '../data/contactData';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          {heroData.title}
        </h1>
        <p className="text-xl text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          {heroData.subtitle}
        </p>
      </div>
    </section>
  );
}