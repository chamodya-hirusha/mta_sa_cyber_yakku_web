import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import CartButton from "../actions/CartButton";

export default function MobileActions({ cartCount, onCartClick, router }) {
  return (
    <div className="flex md:hidden items-center gap-3 sm:gap-4">
      <CartButton cartCount={cartCount} onCartClick={onCartClick} isMobile={true} />

      <motion.button
        onClick={() => {
          router.push('/profile');
        }}
        className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 transition-all shadow-md shadow-purple-200/20 hover:shadow-purple-200/40 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <User className="w-5 h-5 text-white" />
      </motion.button>
    </div>
  );
}