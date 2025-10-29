import { motion } from "framer-motion";

export default function CarouselHeader({ title, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between gap-3 mb-4 sm:mb-5 md:mb-6 lg:mb-8"
    >
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 shadow-lg shadow-purple-500/20">
          <span className="text-base sm:text-xl md:text-2xl lg:text-3xl">
            {icon}
          </span>
        </div>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>

      {/* View All Button (desktop) */}
      <button className="hidden md:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-purple-300 hover:text-white bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 hover:border-purple-400/50 rounded-lg transition-all duration-300">
        <span>View All</span>
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </motion.div>
  );
}