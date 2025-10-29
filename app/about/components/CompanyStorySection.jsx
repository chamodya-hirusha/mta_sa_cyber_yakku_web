import React from 'react';
import { companyStoryData } from '../data/aboutData';

export default function CompanyStorySection() {
  return (
    <section className="bg-gradient-to-b from-[#1a0633] to-[#0f021c] py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src={companyStoryData.image}
            alt="CYBER YAKKU Story"
            className="rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.5)] border border-purple-800"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-fuchsia-300">
            {companyStoryData.title}
          </h2>
          {companyStoryData.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 text-purple-100/90 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}