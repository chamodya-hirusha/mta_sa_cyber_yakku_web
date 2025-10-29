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
                    className={`w-full bg-slate-900/50 border ${focusedField === field.name ? 'border-fuchsia-500' : 'border-purple-500/30'} rounded-xl px-5 py-3 text-white placeholder-purple-400/50 focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all duration-300 outline-none`}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>

            {formConfig.fields.slice(2).map((field) => (
              <div key={field.name}>
                <label className="block text-purple-200 mb-2 font-medium">{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    rows={field.rows}
                    className={`w-full bg-slate-900/50 border ${focusedField === field.name ? 'border-fuchsia-500' : 'border-purple-500/30'} rounded-xl px-5 py-3 text-white placeholder-purple-400/50 focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all duration-300 outline-none resize-none`}
                    placeholder={field.placeholder}
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-slate-900/50 border ${focusedField === field.name ? 'border-fuchsia-500' : 'border-purple-500/30'} rounded-xl px-5 py-3 text-white placeholder-purple-400/50 focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all duration-300 outline-none`}
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 hover:from-purple-700 hover:via-fuchsia-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/50 transform hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"
            >
              <span className="relative z-10">{formConfig.buttonText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}