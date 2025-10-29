"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils"; // shadcn cn utility (classNames merge)
export default function SearchBar({
  value = "",
  onChange,
  placeholder = "Search categories...",
  width = "350px",
  className,
  ...props
}) {
  const rootStyle =
    typeof width === "string" && width.startsWith("w-")
      ? width
      : undefined;

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-xl px-4 py-2 shadow-inner transition-all duration-300 focus-within:shadow-[0_0_12px_rgba(168,85,247,0.5)]",
        "bg-muted/70 text-muted-foreground",
        "bg-[#1a0b2e]/80",
        "shadow-purple-700/30",
        rootStyle,
        className
      )}
      style={
        !rootStyle
          ? 
            { width: typeof width === "number" ? `${width}px` : width }
          : undefined
      }
    >
      <Search className="text-purple-400" size={18} />
      <Input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-0 text-white placeholder:text-purple-400/60 focus:ring-0 focus-visible:ring-0 w-full p-0"
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
