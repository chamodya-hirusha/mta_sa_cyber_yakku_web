import React from 'react';
import { motion } from 'framer-motion';
import { Swords } from 'lucide-react';

const AbilitiesSection = ({ playerStats }) => {
  return (
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
  );
};

export default AbilitiesSection;