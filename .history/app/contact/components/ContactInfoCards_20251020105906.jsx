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
