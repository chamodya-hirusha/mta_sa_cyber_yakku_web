import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { contactInfo } from '../data/contactData';

const iconMap = {
  FaMapMarkerAlt: FaMapMarkerAlt,
  FaPhone: FaPhone,
  FaEnvelope: FaEnvelope,
  FaClock: FaClock
};

export default function ContactInfoCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 pt-20 gap-6 mb-20">
      {contactInfo.map((info, index) => {
        const IconComponent = iconMap[info.icon];
        return (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-purple-900/40 to-fuchsia-900/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-purple-500/30 text-center hover:scale-105 transition-all duration-300 hover:shadow-fuchsia-500/20 overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            <div className="relative z-10">
              <div className="mb-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <IconComponent className="text-3xl text-fuchsia-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-fuchsia-200">
                {info.title}
              </h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-purple-100/80 mb-2 text-sm">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}