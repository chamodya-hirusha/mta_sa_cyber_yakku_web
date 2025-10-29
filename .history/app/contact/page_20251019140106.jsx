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

  const headerTabs = [
    { id: 'contact', label: 'Contact', icon: '📞' },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-fuchsia-400" />,
      title: "Address",
      details: ["123 Cyber Street", "Tech District, CY 12345"]
    },
    {
      icon: <FaPhone className="text-2xl text-purple-400" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"]
    },
    {
      icon: <FaEnvelope className="text-2xl text-blue-400" />,
      title: "Email",
      details: ["info@cyberyakku.com", "support@cyberyakku.com"]
    },
    {
      icon: <FaClock className="text-2xl text-green-400" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: 10:00 AM - 4:00 PM"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f021c] text-gray-100">

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

      {/* Contact Information */}
      <section className="py-20 pt-30 bg-[#150429]">
        <div className="container mx-auto px-6">


          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-tr from-purple-900/60 to-fuchsia-700/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-purple-700/40">
              <h2 className="text-3xl font-bold mb-6 text-center text-fuchsia-200">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-purple-200 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/50 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-200 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/50 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-purple-200 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/50 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/50 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/50 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-fuchsia-500/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

                    <div className="grid md:grid-cols-2 pt-20 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-tr from-purple-900/60 to-fuchsia-700/50 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-purple-700/40 text-center"
              >
                <div className="mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-200">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-purple-100/90 mb-1">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}