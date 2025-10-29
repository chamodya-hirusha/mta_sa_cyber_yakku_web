import { ShoppingCart } from 'lucide-react';
import { Button } from "../../ui/button";

export default function CartButton({ cartCount, onCartClick, isMobile = false }) {
  const baseClasses = "relative flex items-center gap-2 shadow-md shadow-purple-200/20 bg-gradient-to-r from-purple-600 to-red-600 hover:shadow-purple-200/40 hover:scale-105 transition-all";
  const mobileClasses = "px-3 py-2 min-h-[44px] touch-manipulation";
  const desktopClasses = "";

  return (
    <Button
      onClick={onCartClick}
      className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
    >
      <ShoppingCart className="w-5 h-5 text-white" />
      {cartCount > 0 && (
        <div className={`absolute bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold ${isMobile ? '-top-1 -right-1 w-5 h-5' : '-top-2 -right-2 w-5 h-5'}`}>
          {cartCount}
        </div>
      )}
    </Button>
  );
}