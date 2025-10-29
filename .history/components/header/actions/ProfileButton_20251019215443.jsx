import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import ProfileDropdown from './ProfileDropdown';

export default function ProfileButton({ isLoggedIn, onLogout, router, profileOpen, setProfileOpen }) {
  return (
    <div className="relative">
      <motion.button
        onClick={() => {
          setProfileOpen(false);
          router.push('/profile');
        }}
        className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 transition-all shadow-md shadow-purple-200/20 hover:shadow-purple-200/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <User className="w-5 h-5 text-white" />
      </motion.button>

      <ProfileDropdown
        isOpen={profileOpen && isLoggedIn}
        onClose={() => setProfileOpen(false)}
        onLogout={onLogout}
        router={router}
      />
    </div>
  );
}