import { motion } from 'framer-motion';
import { User, Settings, LogOut, UserCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export default function ProfileButton({ isLoggedIn, onLogout, router, profileOpen, setProfileOpen }) {
  if (!isLoggedIn) {
    return (
      <motion.button
        onClick={() => router.push('/profile')}
        className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 transition-all shadow-md shadow-purple-200/20 hover:shadow-purple-200/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <User className="w-5 h-5 text-white" />
      </motion.button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 transition-all shadow-md shadow-purple-200/20 hover:shadow-purple-200/40"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <User className="w-5 h-5 text-white" />
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-slate-900 border border-purple-500/30 rounded-lg shadow-lg">
        <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-purple-500/20" />
        <DropdownMenuItem
          className="text-purple-200 hover:bg-purple-500/20 hover:text-white cursor-pointer"
          onClick={() => router.push('/profile')}
        >
          <UserCircle className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-purple-200 hover:bg-purple-500/20 hover:text-white cursor-pointer"
          onClick={() => router.push('/settings')}
        >
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-purple-500/20" />
        <DropdownMenuItem
          className="text-red-400 hover:bg-red-500/20 hover:text-red-300 cursor-pointer"
          onClick={onLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}