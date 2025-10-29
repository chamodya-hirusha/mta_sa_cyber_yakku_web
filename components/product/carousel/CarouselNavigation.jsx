import { CarouselPrevious, CarouselNext } from "../../ui/carousel";

export default function CarouselNavigation({ isHovered }) {
  return (
    <>
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
    </>
  );
}