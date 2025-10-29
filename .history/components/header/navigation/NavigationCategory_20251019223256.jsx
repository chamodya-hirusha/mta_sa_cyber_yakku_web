import Link from "next/link";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import NavigationItem from "./NavigationItem";

export default function NavigationCategory({ category, activeTab, onItemClick }) {
  return (
    <div className="col-span-1">
      <h4 className="mb-3 text-sm font-semibold text-purple-400">
        {category.name}
      </h4>
      <ul className="space-y-1">
        {category.items.map((item) => (
          <NavigationItem
            key={item.name}
            item={item}
            category={activeTab.toLowerCase()}
            subcategory={category.name.toLowerCase()}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
    </div>
  );
}