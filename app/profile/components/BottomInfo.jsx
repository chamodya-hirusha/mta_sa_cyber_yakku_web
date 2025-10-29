import React from 'react';
import { motion } from 'framer-motion';

const BottomInfo = () => {
  return (
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
  );
};

export default BottomInfo;