"use client";

import React, { useState } from "react";
import { FaCode, FaMobileAlt, FaCloud, FaShieldAlt, FaRocket, FaHeadset } from "react-icons/fa";
import SideNav from '../../components/SideNav';
import HeaderBar from '../../components/header/HeaderBar';

export default function ServicesPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('services');

  const headerTabs = [
    { id: 'services', label: 'Services', icon: '⚙️' },
  ];

  const services = [
    {
      icon: <FaCode className="text-4xl text-fuchsia-400" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built with cutting-edge technologies to meet your unique business requirements."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-purple-400" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices."
    },
    {
      icon: <FaCloud className="text-4xl text-blue-400" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize your digital operations."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-400" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure data integrity."
    },
    {
      icon: <FaRocket className="text-4xl text-orange-400" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies to modernize your business processes."
    },
    {
      icon: <FaHeadset className="text-4xl text-pink-400" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services for all your digital solutions."
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
        activeTab="services"
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

      {/* Header */}
      <HeaderBar
        cartCount={cart.length}
        onCartClick={() => setShowCart(!showCart)}
        onMenuClick={() => setShowSidenav(!sidenavOpen)}
        headerTabs={headerTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Services Grid */}
      <section className="py-20 pt-30 bg-[#150429]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-tr from-purple-900/60 to-fuchsia-700/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-purple-700/40 hover:shadow-fuchsia-700/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-fuchsia-200">
                  {service.title}
                </h3>
                <p className="text-purple-100/90 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-fuchsia-800 to-purple-900 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4 text-fuchsia-200">
          Ready to Transform Your Business?
        </h2>
        <p className="mb-6 text-purple-100/90 max-w-2xl mx-auto">
          Let's discuss how our services can help you achieve your digital goals and stay ahead of the competition.
        </p>
        <button className="bg-white text-purple-800 font-semibold px-8 py-3 rounded-lg shadow hover:bg-purple-100 transition">
          Get Started Today
        </button>
      </section>
    </div>
  );
}