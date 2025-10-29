'use client';
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShoppingCart, Zap, Menu, User, LogOut, Settings } from 'lucide-react';
import { Button } from "./ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import Nav from "./HeaderNav";
import SearchBar from "./SearchBar";
import CYBER from './resources/Logo/CYBER_NEW.webp';

export default function HeaderBar({
  cartCount,
  onCartClick,
  onMenuClick,
  headerTabs,
  activeTab,
  setActiveTab,
  isLoggedIn,
  onLogout
}) {
  const [profileOpen, setProfileOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="py-2 sm:py-3 fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-purple-500/20">
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex items-center justify-between">
        {/* Left side - Menu and Logo */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Button
            onClick={onMenuClick}
            aria-label="Open side navigation"
            className="mr-auto text-purple-400 hover:text-red-400 transition-colors touch-manipulation"
          >
            <Menu className="w-6 h-6" />
          </Button>
          <Link href="/" className="flex items-center">
            <div className="p-1 sm:p-2 bg-gr0adient-to-br  rounded-lg">
              <Image
                src={CYBER}
                alt="CYBER"
                width={190} 
                height={70}
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden items-center gap-4 lg:gap-6 xl:gap-8">
          {/* HeaderNav Tabs */}
          <Nav />

          {/* Search Bar in the middle */}
          <SearchBar />

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Shopping Cart */}
            <Button
              onClick={onCartClick}
              className="relative flex items-center gap-2 shadow-md shadow-purple-200/20 bg-gradient-to-r from-purple-600 to-red-600 hover:shadow-purple-200/40 hover:scale-105 transition-all"
            >
              <ShoppingCart className="w-5 h-5 text-white" />
              <span className="font-bold text-white">{cartCount}</span>
              {cartCount > 0 && (
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {cartCount}
                </div>
              )}
            </Button>

            {/* Profile Icon */}
            <div className="relative ">
              <motion.button
                onClick={() => {
                  setProfileOpen(false);
                  router.push('/profile');
                }}
                className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 transition-all shadow-md shadow-purple-200/20 hover:shadow-purple-200/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="w-5 h-5 text-white" />
              </motion.button>

              {/* Profile Dropdown Menu */}
              <AnimatePresence>
                {profileOpen && isLoggedIn && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-slate-900 border border-purple-500/30 rounded-lg shadow-xl shadow-purple-500/20 overflow-hidden"
                  >
                    {/* Profile Header */}
                    <div className="bg-gradient-to-r from-purple-500 to-red-500 p-4">
                      <p className="text-white font-semibold text-sm">Player Name</p>
                      <p className="text-purple-200 text-xs">Level 45</p>
                    </div>

                    {/* Menu Items */}
                    <div className="p-2 space-y-1">
                      <button
                        onClick={() => {
                          setProfileOpen(false);
                          router.push('/profile');
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 text-purple-300 hover:bg-purple-900/40 rounded-lg transition-colors text-sm"
                      >
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </button>
                      <button className="w-full flex items-center gap-3 px-4 py-2 text-purple-300 hover:bg-purple-900/40 rounded-lg transition-colors text-sm">
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </button>
                      <div className="border-t border-purple-500/20 my-2" />
                      <button
                        onClick={() => {
                          setProfileOpen(false);
                          onLogout();
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors text-sm"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Right Side - Cart and Profile */}
        <div className="flex md:hidden items-center gap-3 sm:gap-4">
          {/* Mobile Shopping Cart */}
          <Button
            onClick={onCartClick}
            className="relative flex items-center gap-2 shadow-md shadow-purple-200/20 bg-gradient-to-r from-purple-600 to-red-600 hover:shadow-purple-200/40 hover:scale-105 transition-all px-3 py-2 min-h-[44px] touch-manipulation"
          >
            <ShoppingCart className="w-5 h-5 text-white" />
            <span className="font-bold text-white text-sm">{cartCount}</span>
            {cartCount > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {cartCount}
              </div>
            )}
          </Button>

          {/* Mobile Profile Icon */}
          <motion.button
            onClick={() => {
              setProfileOpen(false);
              router.push('/profile');
            }}
            className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 transition-all shadow-md shadow-purple-200/20 hover:shadow-purple-200/40 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <User className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </header>
  );
}