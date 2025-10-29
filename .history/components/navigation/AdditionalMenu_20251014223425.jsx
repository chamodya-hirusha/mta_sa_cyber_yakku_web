"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingCart, Settings, LogOut, Shirt, TrendingUp, Star } from 'lucide-react';
import { safeLocalStorage } from '@/lib/utils';

export default function AdditionalMenu({ isLoggedIn, setIsLoggedIn, setLoginPopupOpen, setUser }) {
  // Handles frontend + backend logout logic
  const handleLogout = () => {
    // Use safe localStorage operations
    safeLocalStorage.removeItem("user");
    setIsLoggedIn(false);
    if (setUser) {
      setUser(null);
    }
    // Optionally: fetch('/api/logout', { method: "POST" });
  };

  return (
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
              onClick={handleLogout}
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
              onClick={() => {
                setLoginPopupOpen(true);
              }}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white font-bold rounded-lg transition-all mt-4"
            >
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
