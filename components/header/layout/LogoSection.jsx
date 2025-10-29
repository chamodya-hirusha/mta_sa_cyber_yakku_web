import Link from "next/link";
import Image from "next/image";
import { Menu } from 'lucide-react';
import { Button } from "../../ui/button";
import CYBER from '../../resources/Logo/CYBER_NEW.webp';

export default function LogoSection({ onMenuClick }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <Button
        onClick={onMenuClick}
        aria-label="Open side navigation"
        className="mr-auto text-purple-400 hover:text-red-400 transition-colors touch-manipulation"
      >
        <Menu className="w-6 h-6" />
      </Button>
      <Link href="/" className="flex items-center">
        <div className="p-1 sm:p-2 bg-gr0adient-to-br  rounded-lg">
          <Image
            src={CYBER}
            alt="CYBER"
            width={190}
            height={70}
          />
        </div>
      </Link>
    </div>
  );
}