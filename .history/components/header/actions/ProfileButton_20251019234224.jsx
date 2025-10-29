import { motion } from 'framer-motion';
import { User } from 'lucide-react';


export default function ProfileButton({ isLoggedIn, onLogout, router, profileOpen, setProfileOpen }) {
  return (
    <div className="relative">
      <motion.button
        onClick={() => {
          if (isLoggedIn) {
            setProfileOpen(!profileOpen);
          } else {
            router.push('/profile');
          }
        }}
        onMouseEnter={() => isLoggedIn && setProfileOpen(true)}
        onMouseLeave={() => setProfileOpen(false)}
        className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 transition-all shadow-md shadow-purple-200/20 hover:shadow-purple-200/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <User className="w-5 h-5 text-white" />
      </motion.button>
    </div>
  );
}