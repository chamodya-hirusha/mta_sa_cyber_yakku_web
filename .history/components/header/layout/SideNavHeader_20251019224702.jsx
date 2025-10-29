"use client";

import { motion } from "framer-motion";
import { Zap } from 'lucide-react';
import Image from "next/image";
import CYBER from '../../resources/Logo/CYBER_NEW.webp';

export default function SideNavHeader() {
  return (
    <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2"
      >
        <Image
          src={CYBER}
          objectPosition="center"
          alt="CYBER"
          width={190}
          height={100}
          // className="w-16 h-6 sm:w-20 sm:h-8 md:w-24 md:h-10 lg:w-28 lg:h-12 xl:w-32 xl:h-14"
          priority
        />
      </motion.div>
    </div>
  );
}
