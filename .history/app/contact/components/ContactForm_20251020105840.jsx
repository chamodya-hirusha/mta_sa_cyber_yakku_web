import React, { useState } from 'react';
import { formConfig } from '../data/contactData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gradient-to-br from-purple-900/50 via-fuchsia-900/30 to-purple-900/50 backdrop-blur-2xl p-10 md:p-12 rounded-3xl shadow-2xl border border-purple-500/40 relative overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/5 via-purple-600/5 to-cyan-600/5 animate-pulse"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-3 text-center bg-gradient-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
            {formConfig.title}
          </h2>
          <p className="text-center text-purple-200/70 mb-8">
            {formConfig.subtitle}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {formConfig.fields.slice(0, 2).map((field) => (
                <div key={field.name}>
                  <label className="block text-purple-200 mb-2 font-medium">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
