import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Crosshair } from 'lucide-react';

const HealthResources = ({ playerStats }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-4"
    >
      {/* Health Bar */}
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
  );
};

export default HealthResources;