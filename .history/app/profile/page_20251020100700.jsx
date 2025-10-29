"use client";
import React, { useState } from 'react';
import SideNav from '../../components/sidebar/SideNav';
import HeaderBar from '../../components/header/HeaderBar';
import CartSidebar from '../../components/sidebar/CartSidebar';
import TopBar from './components/TopBar';
import StatsPanel from './components/StatsPanel';
import HealthResources from './components/HealthResources';
import AbilitiesSection from './components/AbilitiesSection';
import BottomInfo from './components/BottomInfo';


export default function GamingHUD() {
  const [selectedClass, setSelectedClass] = useState('assault');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [headerTabs, setHeaderTabs] = useState([]);
  const [activeTab, setActiveTab] = useState('profile');

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const playerStats = {
    level: 73,
    name: "Shadow Player",
    class: "Assault Rifle",
    health: 100,
    armor: 85,
    ammo: 240,
    stats: [
      { label: "Kills", value: "1,245", color: "text-red-400" },
      { label: "Deaths", value: "342", color: "text-red-400" },
      { label: "K/D Ratio", value: "3.64", color: "text-green-400" },
      { label: "Headshots", value: "542", color: "text-yellow-400" },
      { label: "Streak", value: "Lost", color: "text-gray-400" },
      { label: "Accuracy", value: "78%", color: "text-blue-400" },
      { label: "Flying", value: "Enabled", color: "text-purple-400" },
      { label: "Mode Info", value: "Loaded", color: "text-cyan-400" }
    ],
    abilities: [
      { name: "Thermal", icon: "🔥", status: "Ready" },
      { name: "UAV Strike", icon: "📡", status: "Ready" },
      { name: "Tactical Nuke", icon: "☢️", status: "Ready" }
    ]
  };




  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden relative">
      {/* Side Navigation */}
      <SideNav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        sidenavOpen={sidenavOpen}
        setShowSidenav={setShowSidenav}
        activeTab="skins"
        setActiveTab={() => { }}
      />
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Header */}
      <HeaderBar
        cartCount={cart.length}
        onCartClick={() => setShowCart(!showCart)}
        onMenuClick={() => setShowSidenav(!sidenavOpen)}
        headerTabs={headerTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* Main HUD Container */}
      <div className="relative z-10 pt-30 p-8 max-w-7xl mx-auto">
        {/* Top Bar */}
        <TopBar playerStats={playerStats} />

      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Panel - Stats */}
          <StatsPanel playerStats={playerStats} />

          {/* Right Panel - Health & Resources */}
          <HealthResources playerStats={playerStats} />
        </div>

       {/* Abilities Section */}
       <AbilitiesSection playerStats={playerStats} />

       {/* Bottom Info */}
       <BottomInfo />

        </div>
         
  
        {/* Cart Sidebar */}
        <CartSidebar
          cart={cart}
          showCart={showCart}
          onClose={() => setShowCart(false)}
          onRemove={removeFromCart}
          total={total}
        />
         
  
      </div>
    );
  }
