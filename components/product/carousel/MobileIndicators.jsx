export default function MobileIndicators({ products }) {
  return (
    <>
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
    </>
  );
}