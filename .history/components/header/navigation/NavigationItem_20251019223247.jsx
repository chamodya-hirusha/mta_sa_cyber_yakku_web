import Link from "next/link";
import { Info } from "lucide-react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

export default function NavigationItem({ item, category, subcategory, onItemClick }) {
  return (
    <li className="group">
      <NavigationMenuLink asChild>
        <Link
          href={item.href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/40 hover:text-accent-foreground focus:bg-purple-900/40 focus:text-accent-foreground"
        >
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium leading-none text-white">
              {item.name}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-purple-400 bg-purple-900/40 px-2 py-1 rounded-full">
                {item.count}
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onItemClick(item, subcategory);
                }}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-400 hover:text-white"
                aria-label={`View related items for ${item.name}`}
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-purple-300">
            Click to explore {item.name.toLowerCase()} options
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}