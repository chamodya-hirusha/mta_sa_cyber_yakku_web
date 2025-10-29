import { motion, AnimatePresence } from 'framer-motion';
import { User, LogOut, Settings } from 'lucide-react';

export default function ProfileDropdown({ isOpen, onClose, onLogout, router }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-48 bg-slate-900 border border-purple-500/30 rounded-lg shadow-xl shadow-purple-500/20 overflow-hidden"
        >
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-purple-500 to-red-500 p-4">
            <p className="text-white font-semibold text-sm">Player Name</p>
            <p className="text-purple-200 text-xs">Level 45</p>
          </div>

          {/* Menu Items */}
          <div className="p-2 space-y-1">
            <button
              onClick={() => {
                onClose();
                router.push('/profile');
              }}
              className="w-full flex items-center gap-3 px-4 py-2 text-purple-300 hover:bg-purple-900/40 rounded-lg transition-colors text-sm"
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 text-purple-300 hover:bg-purple-900/40 rounded-lg transition-colors text-sm">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
            <div className="border-t border-purple-500/20 my-2" />
            <button
              onClick={() => {
                onClose();
                onLogout();
              }}
              className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors text-sm"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}