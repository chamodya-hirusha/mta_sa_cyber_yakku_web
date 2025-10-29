import { Button } from "../../ui/button";

export default function CTASection({ primaryText, secondaryText, variant = "purple" }) {
  const variants = {
    purple: {
      primary: "from-purple-600 via-purple-500 to-pink-600 hover:from-purple-700 hover:via-purple-600 hover:to-pink-700",
      secondary: "border-purple-500/50 hover:border-purple-400 text-purple-300 hover:text-white hover:bg-purple-500/10"
    },
    red: {
      primary: "from-red-600 via-pink-600 to-purple-600 hover:from-red-700 hover:via-pink-700 hover:to-purple-700",
      secondary: "border-red-500/50 hover:border-red-400 text-red-300 hover:text-white hover:bg-red-500/10"
    }
  };

  const style = variants[variant];

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
      <Button
        className={`group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r ${style.primary} text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 text-sm sm:text-base md:text-lg overflow-hidden`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {primaryText}
          <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Button>

      <Button
        variant="outline"
        className={`px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-transparent border-2 ${style.secondary} font-bold rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base md:text-lg backdrop-blur-sm`}
      >
        {secondaryText}
      </Button>
    </div>
  );
}