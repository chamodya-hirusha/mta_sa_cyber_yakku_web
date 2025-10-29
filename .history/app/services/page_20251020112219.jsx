"use client";

import React, { useState } from "react";
import SideNav from '../../components/sidebar/SideNav';
import HeaderBar from '../../components/header/HeaderBar';
import CartSidebar from '../../components/sidebar/CartSidebar';
import { services } from './demoData';

export default function ServicesPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('services');

  const headerTabs = [
    { id: 'services', label: 'Services', icon: '⚙️' },
  ];

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

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

            {/* Cart Sidebar */}
            <CartSidebar
              cart={cart}
              showCart={showCart}
              onClose={() => setShowCart(false)}
              onRemove={removeFromCart}
              total={total}
            />
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