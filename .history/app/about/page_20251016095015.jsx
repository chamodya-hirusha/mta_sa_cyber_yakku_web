"use client";

import React, { useState } from "react";
import { FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";
import SideNav from '../../components/SideNav';
import HeaderBar from '../../components/HeaderBar';

export default function AboutPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  const headerTabs = [
    { id: 'about', label: 'About', icon: 'ℹ️' },
  ];
  return (
    <div className="min-h-screen bg-[#0f021c] text-gray-100">

      {/* Side Navigation */}
      <SideNav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        sidenavOpen={sidenavOpen}
        setShowSidenav={setShowSidenav}
        activeTab="about"
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
      <section className="bg-gradient-to-rfrom-purple-700 via-purple-800 to-fuchsia-800 py-20">
        <div className="pt-20 mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-md">
            About <span className="text-fuchsia-300">CYBER YAKKU</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-purple-100">
            At CYBER YAKKU, we are dedicated to delivering futuristic technology
            solutions that empower clients, inspire creativity, and accelerate
            digital innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#150429]">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-gradient-to-tr from-purple-900/60 to-fuchsia-700/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-purple-700/40 hover:shadow-fuchsia-700/40 transition-all duration-300 hover:-translate-y-1">
            <FaLightbulb className="text-5xl text-fuchsia-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-fuchsia-200">
              Our Mission
            </h2>
            <p className="text-purple-100/90">
              To create innovative digital solutions that make technology more
              human-centered and impactful across industries.
            </p>
          </div>

          <div className="bg-gradient-to-tr from-purple-900/60 to-fuchsia-700/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-purple-700/40 hover:shadow-fuchsia-700/40 transition-all duration-300 hover:-translate-y-1">
            <FaRocket className="text-5xl text-purple-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-fuchsia-200">
              Our Vision
            </h2>
            <p className="text-purple-100/90">
              To be a global leader in technology innovation, inspiring the
              future of digital transformation with creativity and precision.
            </p>
          </div>

          <div className="bg-gradient-to-tr from-purple-900/60 to-fuchsia-700/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-purple-700/40 hover:shadow-fuchsia-700/40 transition-all duration-300 hover:-translate-y-1">
            <FaUsers className="text-5xl text-purple-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-fuchsia-200">
              Our Team
            </h2>
            <p className="text-purple-100/90">
              A passionate team of innovators, creators, and developers committed
              to excellence and meaningful results.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-gradient-to-b from-[#1a0633] to-[#0f021c] py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src="https://source.unsplash.com/600x400/?cyber,technology"
              alt="CYBER YAKKU Story"
              className="rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.5)] border border-purple-800"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-fuchsia-300">
              Our Story
            </h2>
            <p className="mb-4 text-purple-100/90 leading-relaxed">
              Founded in 2020, CYBER YAKKU began as a small, ambitious startup
              with a mission to bridge creativity and technology. Over the
              years, we’ve transformed into a trusted digital powerhouse driven
              by innovation, integrity, and imagination.
            </p>
            <p className="text-purple-100/90 leading-relaxed">
              Our journey continues with bold ideas and cutting-edge
              technologies that shape the future of digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-[#150429]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10 text-fuchsia-300">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Alice Johnson", role: "CEO", img: "https://source.unsplash.com/200x200/?woman,face" },
              { name: "Bob Smith", role: "CTO", img: "https://source.unsplash.com/200x200/?man,face" },
              { name: "Carol White", role: "Designer", img: "https://source.unsplash.com/200x200/?woman,designer" },
              { name: "David Lee", role: "Developer", img: "https://source.unsplash.com/200x200/?man,developer" },
            ].map((member, index) => (
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

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-fuchsia-800 to-purple-900 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4 text-fuchsia-200">
          Join CYBER YAKKU on Our Journey
        </h2>
        <p className="mb-6 text-purple-100/90">
          Be a part of our story and help shape the future of digital
          innovation and creativity.
        </p>
        <button className="bg-white text-purple-800 font-semibold px-6 py-3 rounded-lg shadow hover:bg-purple-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
