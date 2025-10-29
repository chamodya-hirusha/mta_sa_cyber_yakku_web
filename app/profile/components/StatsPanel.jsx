import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const StatsPanel = ({ playerStats }) => {
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
  );
};

export default StatsPanel;