"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, User, Heart, ShoppingCart, Settings, LogOut, Shirt, TrendingUp, Star } from 'lucide-react';
import MobileNavigationMenu from "./MobileNavigationMenu";

const links = [
  {
    name: "Home",
    path: "/",
    icon: "🛍️"
  },
  {
    name: "skins",
    path: "/skins",
    icon: "👕"
  },
  {
    name: "vehicles",
    path: "/vehicles",
    icon: "🏎️"
  },
  {
    name: "currency",
    path: "/currency",
    icon: "💵"
  }
];

export default function SideNav({ isLoggedIn, setIsLoggedIn, sidenavOpen, setShowSidenav, activeTab, setActiveTab }) {
  const pathname = usePathname();

  return (
    <Sheet open={sidenavOpen} onOpenChange={setShowSidenav}>
      <SheetTrigger asChild>
        <button className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
          aria-label="Open navigation menu"
          type="button"
        >
          <CiMenuFries size={24} className="text-gray-700 dark:text-gray-200" />
        </button>
      </SheetTrigger>
      
      <SheetContent 
        side="left" 
        className="w-[200px] sm:w-[320px] bg-slate-900/80 backdrop-blur-xl border-l border-purple-500/20 p-0"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Zap className="w-5 h-5 text-red-400" />
            <span className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
              CYBER YAKKU
            </span>
          </motion.div>
        </div>

        {/* User Profile Section */}
        {isLoggedIn && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-purple-900/20 to-red-900/20 border border-purple-500/30 rounded-lg p-4 m-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-red-500 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Player Name</p>
                <p className="text-xs text-purple-400">Level 45</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 p-6">
          <AnimatePresence>
            {links.map((item, index) => {
              const isActive = activeTab === item.name;
              
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    onClick={() => {
                      setActiveTab(item.name);
                      setShowSidenav(false);
                    }}
                    className={`group relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 w-full text-left ${
                      isActive
                        ? "bg-gradient-to-r from-purple-500 to-red-500 text-white shadow-lg"
                        : "text-purple-300 hover:bg-purple-900/40"
                    }`}
                  >
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 w-1 h-8 bg-white rounded-r-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Icon */}
                    <span className="text-lg">{item.icon}</span>
                    
                    {/* Link Text */}
                    <span className="capitalize text-lg font-medium ml-2">
                      {item.name}
                    </span>
                    
                    {/* Hover Arrow */}
                    {!isActive && (
                      <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </nav>

        Additional Menu Items
        <div className="px-6 pb-6">
          <AnimatePresence>
            {isLoggedIn ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-2"
              >
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-purple-300 hover:bg-purple-900/40 transition-colors w-full text-left">
                  <Heart className="w-5 h-5" />
                  <span>Wishlist</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-purple-300 hover:bg-purple-900/40 transition-colors w-full text-left">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Order History</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-purple-300 hover:bg-purple-900/40 transition-colors w-full text-left">
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </button>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-900/20 transition-colors mt-4"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-2"
              >
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-purple-300 hover:bg-purple-900/40 transition-colors w-full text-left">
                  <Shirt className="w-5 h-5" />
                  <span>Browse All</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-purple-300 hover:bg-purple-900/40 transition-colors w-full text-left">
                  <TrendingUp className="w-5 h-5" />
                  <span>New Arrivals</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-purple-300 hover:bg-purple-900/40 transition-colors w-full text-left">
                  <Star className="w-5 h-5" />
                  <span>Best Sellers</span>
                </button>
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white font-bold rounded-lg transition-all mt-4"
                >
                  Login
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>



        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-purple-500/20">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-purple-400/60 text-center"
          >
            © 2025 Cyber Yakku. All rights reserved.
          </motion.p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
