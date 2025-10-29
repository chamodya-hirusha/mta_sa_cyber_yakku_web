"use client";

import React, { useState } from "react";
import SideNav from '../../components/sidebar/SideNav';
import HeaderBar from '../../components/header/HeaderBar';
import ChatButtons from '../../components/common/ChatButtons';
import CartSidebar from '../../components/sidebar/CartSidebar';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import ContactInfoCards from './components/ContactInfoCards';
import VisitOfficeSection from './components/VisitOfficeSection';

export default function ContactPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  const headerTabs = [
    { id: 'contact', label: 'Contact', icon: '📞' },
  ];

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

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

      <HeroSection />


        <div className="container mx-auto">
          <ContactForm />

          <ContactInfoCards />

          {/* Cart Sidebar */}
          <CartSidebar
            cart={cart}
            showCart={showCart}
            onClose={() => setShowCart(false)}
            onRemove={removeFromCart}
            total={total}
          />
        </div>
      </section>

      <VisitOfficeSection />

      <ChatButtons />
    </div>
  );
}