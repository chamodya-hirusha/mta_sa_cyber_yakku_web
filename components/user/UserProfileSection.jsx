"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User } from 'lucide-react';

export default function UserProfileSection({ isLoggedIn, user }) {
  const [profile, setProfile] = useState({ username: "", money: "" });

  useEffect(() => {
    if (isLoggedIn && user) {
      setProfile({
        username: user.username || "",
        money: user.money || ""
      });
    }
  }, [isLoggedIn, user]);

  if (!isLoggedIn) return null;

  return (
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
          <p className="text-sm font-bold text-white">{profile.username}</p>
          <p className="text-xs text-purple-400">{profile.money}</p>
        </div>
      </div>
    </motion.div>
  );
}
