import React from 'react';
import { teamMembers } from '../data/aboutData';

export default function TeamMembersSection() {
  return (
    <section className="py-20 bg-[#150429]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-fuchsia-300">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-purple-900/60 to-fuchsia-800/40 backdrop-blur-md rounded-2xl p-6 border border-purple-700/50 shadow-lg hover:shadow-fuchsia-700/40 transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover ring-2 ring-fuchsia-400/60"
              />
              <h3 className="text-xl font-semibold text-fuchsia-200">
                {member.name}
              </h3>
              <p className="text-purple-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}