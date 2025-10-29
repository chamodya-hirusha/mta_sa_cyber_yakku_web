"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

export default function ProductCarousel({ title, icon, addToCart, products: propProducts }) {
  const [isHovered, setIsHovered] = React.useState(false);

  // Use products from props if provided, otherwise fallback to default products
  const products = propProducts || [
    {
      id: 1,
      name: "Premium Yakku Credits",
      price: 9.99,
      image:
        "https://www.valencygraphics.com/cdn/shop/files/DataInc_1024x1024.png?v=1606900000",
      description:
        "1000 in-game credits to spend on vehicles, skins, or properties.",
      category: "Currency",
    },
    {
      id: 2,
      name: "Cyber Motorcycle",
      price: 19.99,
      image: "https://images4.alphacoders.com/115/1159513.png",
      description:
        "A high-speed neon-lit motorcycle for cruising the streets.",
      category: "Vehicles",
    },
    {
      id: 3,
      name: "VIP Membership",
      price: 29.99,
      image: "https://img.icons8.com/fluency/96/000000/vip.png",
      description:
        "Unlock exclusive skins, priority queue, and bonus XP for 30 days.",
      category: "Membership",
    },
    {
      id: 4,
      name: "Neon Skin Pack",
      price: 14.99,
      image:
        "https://graphicriver.img.customer.envatousercontent.com/files/127094512/01-cyberpunk-icons-vol1-preview.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "Customizable neon-themed character skins for your roleplay avatar.",
      category: "Cosmetics",
    },
    {
      id: 5,
      name: "Penthouse Property",
      price: 49.99,
      image:
        "https://cdnb.artstation.com/p/assets/images/images/037/578/984/large/javier-pintor-v-penthouse-01.jpg?1615470007",
      description:
        "Own a luxurious penthouse in the heart of the Cyber Yakku city.",
      category: "Properties",
    },
    {
      id: 6,
      name: "Weapon Skin: Neon Blaster",
      price: 12.99,
      image: "https://static.thenounproject.com/png/4879703-200.png",
      description: "A glowing weapon skin for your in-game arsenal.",
      category: "Cosmetics",
    },
  ];

  return (
    <div className=" w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between gap-3 mb-4 sm:mb-5 md:mb-6 lg:mb-8"
      >
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 shadow-lg shadow-purple-500/20">
            <span className="text-base sm:text-xl md:text-2xl lg:text-3xl">
              {icon}
            </span>
          </div>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>

        {/* View All Button (desktop) */}
        <button className="hidden md:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-purple-300 hover:text-white bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 hover:border-purple-400/50 rounded-lg transition-all duration-300">
          <span>View All</span>
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </motion.div>

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative bg-gradient-to-br from-[#1a0b2e]/35 via-[#16082a]/20 to-[#120720]/35 p-2 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 backdrop-blur-md overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Decorative glow effects */}
        <div className="absolute top-0 left-0 w-22 sm:w-22 h-32 sm:h-22 bg-purple-500/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-22 sm:w-22 h-32 sm:h-28 bg-pink-500/20 rounded-full blur-3xl opacity-50"></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="relative z-10">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              skipSnaps: false,
            }}
          >
            <CarouselContent
              className="-ml-2 sm:-ml-3 md:-ml-4"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {products.map((product, index) => (
                <CarouselItem
                  key={product.id}
                  className="basis-[0%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6 pl-2 sm:pl-3 md:pl-4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="h-full"
                  >
                    {/* Use your real ProductCard */}
                    <ProductCard product={product} addToCart={addToCart} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation buttons */}
            <CarouselPrevious
              className={`hidden md:flex absolute -left-4 lg:-left-5 xl:-left-6 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 hover:from-purple-700 hover:via-purple-600 hover:to-pink-700 text-white p-3 rounded-full transition-all duration-300 shadow-xl shadow-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/60 border-2 border-purple-400/40 hover:border-purple-300/60 ${
                isHovered ? "opacity-100 scale-100" : "opacity-60 scale-95"
              }`}
              aria-label="Previous products"
            />

            <CarouselNext
              className={`hidden md:flex absolute -right-4 lg:-right-5 xl:-right-6 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-pink-600 via-purple-500 to-purple-600 hover:from-pink-700 hover:via-purple-600 hover:to-purple-700 text-white p-3 rounded-full transition-all duration-300 shadow-xl shadow-pink-500/40 hover:shadow-2xl hover:shadow-pink-500/60 border-2 border-pink-400/40 hover:border-pink-300/60 ${
                isHovered ? "opacity-100 scale-100" : "opacity-60 scale-95"
              }`}
              aria-label="Next products"
            />
          </Carousel>

          {/* Mobile swipe indicators */}
          <div className="flex md:hidden justify-center items-center gap-2 mt-4 text-xs text-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span>Swipe to browse</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>

          {/* Dots Indicator */}
          <div className="flex md:hidden justify-center gap-1.5 mt-2">
            {products.slice(0, 5).map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-purple-500/40 transition-all duration-300"
              ></div>
            ))}
          </div>
        </div>

        {/* Bottom gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
      </motion.div>

      {/* Mobile "View All" button */}
      <button className="md:hidden w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 text-sm text-purple-300 bg-purple-500/10 border border-purple-500/30 rounded-lg transition-all duration-300 active:scale-95">
        <span>View All {title}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
