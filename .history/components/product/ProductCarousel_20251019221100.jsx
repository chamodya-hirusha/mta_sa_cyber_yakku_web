"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import CarouselHeader from "./carousel/CarouselHeader";
import CarouselContainer from "./carousel/CarouselContainer";
import CarouselNavigation from "./carousel/CarouselNavigation";
import MobileIndicators from "./carousel/MobileIndicators";
import ViewAllButton from "./carousel/ViewAllButton";
import { defaultProducts } from "../../lib/productData";

export default function ProductCarousel({ title, icon, addToCart, products: propProducts }) {
  const [isHovered, setIsHovered] = React.useState(false);

  // Use products from props if provided, otherwise fallback to default products
  const products = propProducts || defaultProducts;

  return (
    <div className=" w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      <CarouselHeader title={title} icon={icon} />

      <CarouselContainer isHovered={isHovered} setIsHovered={setIsHovered}>
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
                className="basis-[100%] sm:basis-1/1 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/1 pl-2 sm:pl-3 md:pl-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="h-full"
                >
                  <ProductCard product={product} addToCart={addToCart} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNavigation isHovered={isHovered} />
        </Carousel>

        <MobileIndicators products={products} />
      </CarouselContainer>

      <ViewAllButton title={title} />
    </div>
  );
}
