import React from 'react';
import { visitOfficeData } from '../data/contactData';

export default function VisitOfficeSection() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-purple-900/30 to-fuchsia-900/20 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-purple-500/30 text-center">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
            {visitOfficeData.title}
          </h3>
          <p className="text-purple-200/80 max-w-2xl mx-auto">
            {visitOfficeData.description}
          </p>
        </div>
      </div>
    </section>
  );
}