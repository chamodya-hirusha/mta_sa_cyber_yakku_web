"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import SideNav from '../../components/SideNav';
import HeaderBar from '../../components/HeaderBar';

export default function ContactPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const headerTabs = [
    { id: 'contact', label: 'Contact', icon: '📞' },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-fuchsia-400" />,
      title: "Address",
      details: ["123 Cyber Street", "Tech District, CY 12345"],
      gradient: "from-purple-600/20 to-fuchsia-600/20"
    },
    {
      icon: <FaPhone className="text-3xl text-purple-400" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
      gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
      icon: <FaEnvelope className="text-3xl text-blue-400" />,
      title: "Email",
      details: ["info@cyberyakku.com", "support@cyberyakku.com"],
      gradient: "from-cyan-600/20 to-blue-600/20"
    },
    {
      icon: <FaClock className="text-3xl text-green-400" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: 10:00 AM - 4:00 PM"],
      gradient: "from-green-600/20 to-emerald-600/20"
    }
  ];

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f021c] via-[#1a0933] to-[#0f021c] text-gray-100">

      {/* Side Navigation */}
      <SideNav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        sidenavOpen={sidenavOpen}
        setShowSidenav={setShowSidenav}
        activeTab="contact"
        setActiveTab={setActiveTab}
      />

      {/* Header */}
      <HeaderBar
        cartCount={cart.length}
        onCartClick={() => setShowCart(!showCart)}
        onMenuClick={() => setShowSidenav(!sidenavOpen)}
        headerTabs={headerTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-purple-900/40 to-fuchsia-900/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-purple-500/30 text-center hover:scale-105 transition-all duration-300 hover:shadow-fuchsia-500/20 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {info.icon}
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
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/50 via-fuchsia-900/30 to-purple-900/50 backdrop-blur-2xl p-10 md:p-12 rounded-3xl shadow-2xl border border-purple-500/40 relative overflow-hidden">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/5 via-purple-600/5 to-cyan-600/5 animate-pulse"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-3 text-center bg-gradient-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
                  Send us a Message
                </h2>
                <p className="text-center text-purple-200/70 mb-8">
                  Fill out the form below and we'll get back to you shortly
                </p>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-purple-200 mb-2 font-medium">First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        onFocus={() => setFocusedField('firstName')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full bg-slate-900/50 border ${focusedField === 'firstName' ? 'border-fuchsia-500' : 'border-purple-500/30'} rounded-xl px-5 py-3 text-white placeholder-purple-400/50 focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all duration-300 outline-none`}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-purple-200 mb-2 font-medium">Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        onFocus={() => setFocusedField('lastName')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full bg-slate-900/50 border ${focusedField === 'lastName' ? 'border-fuchsia-500' : 'border-purple-500/30'} rounded-xl px-5 py-3 text-white placeholder-purple-400/50 focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all duration-300 outline-none`}
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-purple-200 mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-slate-900/50 border ${focusedField === 'email' ? 'border-fuchsia-500' : 'border-purple-500/30'} rounded-xl px-5 py-3 text-white placeholder-purple-400/50 focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all duration-300 outline-none`}
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-purple-200 mb-2 font-medium">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-slate-900/50 border ${focusedField === 'subject' ? 'border-fuchsia-500' : 'border-purple-500/30'} rounded-xl px-5 py-3 text-white placeholder-purple-400/50 focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all duration-300 outline-none`}
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-purple-200 mb-2 font-medium">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows="6"
                      className={`w-full bg-slate-900/50 border ${focusedField === 'message' ? 'border-fuchsia-500' : 'border-purple-500/30'} rounded-xl px-5 py-3 text-white placeholder-purple-400/50 focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all duration-300 outline-none resize-none`}
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 hover:from-purple-700 hover:via-fuchsia-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/50 transform hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-purple-900/30 to-fuchsia-900/20 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-purple-500/30 text-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
              Visit Our Office
            </h3>
            <p className="text-purple-200/80 max-w-2xl mx-auto">
              Stop by our office for a coffee and let's discuss how we can bring your ideas to life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}