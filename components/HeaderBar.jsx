'use client';
import React from 'react';
import Link from "next/link";
import { ShoppingCart, Zap, Menu } from 'lucide-react';
import { Button } from "./ui/button";

export default function HeaderBar({ cartCount, onCartClick, onMenuClick, headerTabs, activeTab, setActiveTab }) {
  return (
    <header className="py-1 xl:py-1 fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-purple-500/20">
      <div className="p-3.5 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-red-500 rounded-lg">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              CYBER<span className="text-amber-200">.</span>YAKKU
            </h1>
          </div>
        </Link>
        
        <div className="hidden xl:flex items-center gap-8">
          {/* Tab Navigation */}
          <div className="flex gap-2">
            {headerTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm flex items-center ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-red-500 text-white shadow-lg shadow-red-500/40'
                    : 'bg-purple-900/20 text-purple-300 hover:bg-purple-900/40 border border-purple-500/30'
                }`}
              >
                <span className="mr-1">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
          
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
        </div>
        
        <div className="xl:hidden">
          <Button 
            onClick={onMenuClick}
            aria-label="Open mobile menu"
            className="p-2 text-purple-400 hover:text-red-400"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
