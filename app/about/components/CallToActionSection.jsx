import React from 'react';
import { callToActionData } from '../data/aboutData';

export default function CallToActionSection() {
  return (
    <section className="bg-gradient-to-r from-fuchsia-800 to-purple-900 py-16 text-center text-white">
      <h2 className="text-3xl font-bold mb-4 text-fuchsia-200">
        {callToActionData.title}
      </h2>
      <p className="mb-6 text-purple-100/90">
        {callToActionData.description}
      </p>
      <button className="bg-white text-purple-800 font-semibold px-6 py-3 rounded-lg shadow hover:bg-purple-100 transition">
        {callToActionData.buttonText}
      </button>
    </section>
  );
}