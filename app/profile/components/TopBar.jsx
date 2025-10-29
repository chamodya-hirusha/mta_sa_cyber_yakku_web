import React from 'react';
import { motion } from 'framer-motion';

const TopBar = ({ playerStats }) => {
  return (
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
  );
};

export default TopBar;