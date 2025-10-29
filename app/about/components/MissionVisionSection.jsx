import React from 'react';
import { FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';
import { missionVisionData } from '../data/aboutData';

const iconMap = {
  FaLightbulb: FaLightbulb,
  FaRocket: FaRocket,
  FaUsers: FaUsers
};

export default function MissionVisionSection() {
  return (
    <section className="py-20 bg-[#150429]">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
        {missionVisionData.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div key={index} className="bg-gradient-to-tr from-purple-900/60 to-fuchsia-700/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-purple-700/40 hover:shadow-fuchsia-700/40 transition-all duration-300 hover:-translate-y-1">
              <IconComponent className="text-5xl text-fuchsia-400 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2 text-fuchsia-200">
                {item.title}
              </h2>
              <p className="text-purple-100/90">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}