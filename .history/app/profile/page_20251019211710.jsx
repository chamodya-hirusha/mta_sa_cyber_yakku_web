"use client";
import React, { useState } from 'react';
import { Zap, Shield, Heart, Crosshair, Swords } from 'lucide-react';
import { motion } from 'framer-motion';
import SideNav from '../../components/sidebar/SideNav';
import HeaderBar from '../../components/header/HeaderBar';

export default function GamingHUD() {
  const [selectedClass, setSelectedClass] = useState('assault');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [sidenavOpen, setShowSidenav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [headerTabs, setHeaderTabs] = useState([]);
  const [activeTab, setActiveTab] = useState('profile');

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
              LEVEL {playerStats.level}
            </h1>
            <p className="text-gray-400 text-lg mt-2">{playerStats.name}</p>
          </div>
          <div className="text-right">
            <p className="text-purple-400 font-semibold text-lg">Class: {playerStats.class}</p>
            <p className="text-gray-500 text-sm mt-1">Elite Tier</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Panel - Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              Combat Stats
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {playerStats.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-slate-900/60 border border-blue-500/20 rounded-lg p-4 hover:border-blue-500/50 transition-all"
                >
                  <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Panel - Health & Resources */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
           
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-red-500/30 rounded-xl p-4 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-white font-semibold">Health</span>
              </div>
              <div className="w-full h-8 bg-slate-900 rounded-lg border border-red-500/30 overflow-hidden">
                <motion.div
                  animate={{ width: `${playerStats.health}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-red-500 to-red-600 relative"
                >
                  <div className="absolute inset-0 opacity-50 bg-[linear-gradient(90deg,transparent,white,transparent)]"></div>
                </motion.div>
              </div>
              <p className="text-red-400 text-sm mt-2 font-bold">{playerStats.health}%</p>
            </div>

            {/* Armor Bar */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/30 rounded-xl p-4 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold">Armor</span>
              </div>
              <div className="w-full h-8 bg-slate-900 rounded-lg border border-blue-500/30 overflow-hidden">
                <motion.div
                  animate={{ width: `${playerStats.armor}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 relative"
                >
                  <div className="absolute inset-0 opacity-50 bg-[linear-gradient(90deg,transparent,white,transparent)]"></div>
                </motion.div>
              </div>
              <p className="text-blue-400 text-sm mt-2 font-bold">{playerStats.armor}%</p>
            </div>

            {/* Ammo Counter */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-500/30 rounded-xl p-4 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-3">
                <Crosshair className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">Ammo</span>
              </div>
              <p className="text-4xl font-black text-green-400">{playerStats.ammo}</p>
              <p className="text-green-500 text-xs mt-1">Rounds Ready</p>
            </div>
          </motion.div>
        </div>

        {/* Abilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Swords className="w-6 h-6 text-orange-400" />
            Active Abilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {playerStats.abilities.map((ability, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-pink-500/20 to-red-500/20 border border-pink-500/50 p-4 text-left transition-all hover:border-orange-500 hover:from-orange-500/30 hover:to-red-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative z-10">
                  <p className="text-3xl mb-2">{ability.icon}</p>
                  <p className="text-white font-bold">{ability.name}</p>
                  <p className="text-green-400 text-sm mt-1">{ability.status}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex justify-between items-center text-gray-500 text-sm"
        >
          <div className="flex gap-4">
            <span>⚡ Prestige: Master</span>
            <span>🎖️ Rank: Legend</span>
          </div>
          <div className="text-right">
            <p>Last Updated: <span className="text-purple-400">2m ago</span></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
