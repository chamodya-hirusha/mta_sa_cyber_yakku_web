import { motion } from "framer-motion";

export default function CarouselContainer({ children, isHovered, setIsHovered }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative bg-gradient-to-br from-[#1a0b2e]/35 via-[#16082a]/20 to-[#120720]/35 p-2 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 backdrop-blur-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative glow effects */}
      <div className="absolute top-0 left-0 w-22 sm:w-22 h-32 sm:h-22 bg-purple-500/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-22 sm:w-22 h-32 sm:h-28 bg-pink-500/20 rounded-full blur-3xl opacity-50"></div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="relative z-10">
        {children}
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
    </motion.div>
  );
}