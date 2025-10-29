import Link from "next/link";
import { NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import NavigationCategory from "./NavigationCategory";

export default function NavigationContent({ navData, activeTab, onItemClick }) {
  return (
    <NavigationMenuContent>
      <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
        <div className="row-span-3">
          <NavigationMenuLink asChild>
            <Link
              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-900/20 to-red-900/20 p-6 no-underline outline-none focus:shadow-md"
              href={`/${activeTab.toLowerCase()}`}
            >
              <div className="mb-2 mt-4 text-lg font-medium text-white">
                {navData.title}
              </div>
              <p className="text-sm leading-tight text-purple-300">
                {navData.description}
              </p>
            </Link>
          </NavigationMenuLink>
        </div>
        {navData.categories.map((category) => (
          <NavigationCategory
            key={category.name}
            category={category}
            activeTab={activeTab}
            onItemClick={onItemClick}
          />
        ))}
      </div>
    </NavigationMenuContent>
  );
}