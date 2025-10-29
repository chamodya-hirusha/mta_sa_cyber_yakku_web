"use client";

import React, { useState } from "react";
import SideNav from "../../components/sidebar/SideNav";
import HeaderBar from "../../components/header/HeaderBar";
import ChatButtons from "../../components/common/ChatButtons";
import CartSidebar from "../../components/sidebar/CartSidebar";
import HeroSection from "./components/HeroSection";
import ContactForm from "./components/ContactForm";
import ContactInfoCards from "./components/ContactInfoCards";
import VisitOfficeSection from "./components/VisitOfficeSection";

export default function ContactPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");

  const headerTabs = [{ id: "contact", label: "Contact", icon: "📞" }];

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f021c] via-[#1a0933] to-[#0f021c] text-gray-100 flex flex-col relative overflow-hidden">
      {/* Header - fixed on top */}
      <HeaderBar
        cartCount={cart.length}
        onCartClick={() => setShowCart(!showCart)}
        onMenuClick={() => setShowSidenav(!sidenavOpen)}
        headerTabs={headerTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Side Navigation */}
      <SideNav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        sidenavOpen={sidenavOpen}
        setShowSidenav={setShowSidenav}
        activeTab="contact"
        setActiveTab={setActiveTab}
      />

      {/* Main Content */}
      <main className="flex-1 pt-[70px] pb-10 space-y-16">
        {/* 👆 padding-top keeps content below header */}
        <HeroSection />
        <ContactForm />
        <ContactInfoCards />
        <VisitOfficeSection />
      </main>

      {/* Floating Chat Buttons */}
      <ChatButtons />

      {/* Cart Sidebar (overlays correctly) */}
      <CartSidebar
        cart={cart}
        showCart={showCart}
        onClose={() => setShowCart(false)}
        onRemove={removeFromCart}
        total={total}
      />

      {/* Overlay for mobile sidenav */}
      {sidenavOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setShowSidenav(false)}
        ></div>
      )}
    </div>
  );
}
