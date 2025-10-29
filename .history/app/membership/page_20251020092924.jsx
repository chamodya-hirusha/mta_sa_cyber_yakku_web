"use client";
import React, { useState } from 'react';
import SideNav from '../../components/sidebar/SideNav';
import HeaderBar from '../../components/header/HeaderBar';
import CartSidebar from '../../components/sidebar/CartSidebar';

export default function CyberYakkuPricing() {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('membership');

  const headerTabs = [
    { id: 'membership', label: 'Membership', icon: '👑' },
  ];

  // Dummy logout function for demonstration
  const handleLogout = () => setIsLoggedIn(false);

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const plans = [
    {
      name: 'Rookie',
      color: 'from-slate-600 to-slate-800',
      hoverColor: 'hover:from-slate-700 hover:to-slate-900',
      subscribers: '500 slots',
      price: 0,
      period: 'Free forever',
      features: [
        { label: 'Basic spawn', bold: false },
        { label: 'Standard vehicles', bold: false },
        { label: 'Limited weapons', bold: false },
        { label: 'Community support', bold: false }
      ],
      buttonColor: 'bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900',
      badge: null
    },
    {
      name: 'Street',
      color: 'from-orange-500 to-red-600',
      hoverColor: 'hover:from-orange-600 hover:to-red-700',
      subscribers: '2,000 slots',
      price: 9.99,
      period: 'Per month, cancel anytime',
      features: [
        { label: 'Custom spawns', bold: true },
        { label: 'Premium vehicles', bold: true },
        { label: 'Extended weapons', bold: false },
        { label: 'Priority support', bold: true }
      ],
      buttonColor: 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700',
      badge: null
    },
    {
      name: 'Elite',
      color: 'from-cyan-500 to-blue-600',
      hoverColor: 'hover:from-cyan-600 hover:to-blue-700',
      subscribers: '5,000 slots',
      price: 19.99,
      period: 'Per month, cancel anytime',
      features: [
        { label: 'VIP spawns', bold: true },
        { label: 'Exclusive vehicles', bold: true },
        { label: 'All weapons unlocked', bold: true },
        { label: 'Premium support', bold: true }
      ],
      buttonColor: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700',
      badge: 'POPULAR'
    },
    {
      name: 'Cyber Legend',
      color: 'from-purple-500 to-pink-600',
      hoverColor: 'hover:from-purple-600 hover:to-pink-700',
      subscribers: '10,000 slots',
      price: 39.99,
      period: 'Per month, cancel anytime',
      features: [
        { label: 'Legendary spawns', bold: true },
        { label: 'Custom vehicles', bold: true },
        { label: 'Unlimited arsenal', bold: true },
        { label: 'Dedicated admin support', bold: true }
      ],
      buttonColor: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700',
      badge: 'BEST VALUE'
    },
    {
      name: 'Yakku God',
      color: 'from-purple-500 to-red-500',
      hoverColor: 'hover:from-purple-600 hover:to-red-600',
      subscribers: 'Unlimited',
      price: 99.99,
      period: 'Per month, cancel anytime',
      features: [
        { label: 'God Mode spawns', bold: true },
        { label: 'Exclusive fleet', bold: true },
        { label: 'Full weapon access', bold: true },
        { label: '24/7 VIP support', bold: true }
      ],
      buttonColor: 'bg-gradient-to-r from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600',
      badge: 'ULTIMATE'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <SideNav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        sidenavOpen={sidenavOpen}
        setShowSidenav={setShowSidenav}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <HeaderBar
        cartCount={cart.length}
        onCartClick={() => setShowCart(!showCart)}
        onMenuClick={() => setShowSidenav(!sidenavOpen)}
        headerTabs={headerTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Membership Plans
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-4">
            Join Cyber Yakku MTA Server Today
          </p>
          <p className="text-lg text-slate-400">
            Wondering how much you'll save? Try our{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 underline">
              savings calculator
            </a>
            .
          </p>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-24 fill-slate-900/50">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Free Plan - Full Width */}
      <div className="relative max-w-7xl mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl hover:border-purple-500/50 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-pink-400 mb-2">{plans[0].name}</h3>
              <p className="text-slate-400">{plans[0].subscribers}</p>
            </div>
            <div className="flex-1 text-center">
              <div className="text-6xl font-bold text-white mb-2">
                ${plans[0].price}
              </div>
              <p className="text-slate-400">{plans[0].period}</p>
            </div>
            <div className="flex-1">
              {plans[0].features.map((feature, idx) => (
                <div key={idx} className="text-slate-300 mb-2">
                  • {feature.label}
                </div>
              ))}
            </div>
            <div className="flex-1 flex justify-end">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105">
                Get Started for FREE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Plans Grid */}
      <div className="relative max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.slice(1).map((plan, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative bg-slate-900/50 backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-300 ${
                hoveredPlan === index
                  ? 'border-purple-500 shadow-2xl shadow-purple-500/30 scale-105'
                  : 'border-slate-800 hover:border-purple-500/50'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r ${plan.color} text-white text-sm font-bold rounded-full shadow-lg`}>
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-6">
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-2`}>
                  {plan.name}
                </h3>
                <p className="text-slate-400 text-sm">{plan.subscribers}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-start mb-2">
                  <span className="text-3xl font-bold text-white mr-1">$</span>
                  <span className="text-6xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-slate-400 text-sm">{plan.period}</p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span className={`${feature.bold ? 'text-white font-semibold' : 'text-slate-400'}`}>
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 ${plan.buttonColor} text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}>
                Try FREE for 14 days
              </button>

              {/* Glow Effect on Hover */}
              {hoveredPlan === index && (
                <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-20 rounded-2xl blur-xl -z-10`}></div>
              )}
            </div>
          ))}

          
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="relative max-w-4xl mx-auto px-4 pb-20 text-center">
        <div className="bg-gradient-to-r from-purple-900/30 to-red-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">🎮 All Plans Include</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-300">
            <div>
              <div className="text-3xl mb-2">🚗</div>
              <div className="font-semibold">Custom Vehicles</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🔫</div>
              <div className="font-semibold">Weapon Access</div>
            </div>
            <div>
              <div className="text-3xl mb-2">💎</div>
              <div className="font-semibold">Exclusive Rewards</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}