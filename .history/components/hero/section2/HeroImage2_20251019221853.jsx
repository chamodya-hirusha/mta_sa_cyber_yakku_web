import ImagePanel from '../shared/ImagePanel';

export default function HeroImage2({ data }) {
  const floatingElements = [
    {
      position: "top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8",
      content: (
        <div className="relative">
          <div className="absolute inset-0 bg-red-500 blur-xl opacity-50 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-red-600 to-pink-600 backdrop-blur-md px-4 sm:px-5 py-3 sm:py-4 rounded-lg border border-red-400/50 shadow-2xl">
            <p className="text-xs text-red-100 font-semibold uppercase tracking-wide">Save Up To</p>
            <p className="text-2xl sm:text-3xl font-black text-white">{data.discount}</p>
          </div>
        </div>
      )
    },
    {
      position: "bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8",
      content: (
        <div className="bg-black/50 backdrop-blur-md px-3 sm:px-4 py-2 rounded-lg border border-red-500/30">
          <p className="text-xs sm:text-sm text-red-300 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Limited Stock
          </p>
        </div>
      )
    }
  ];

  return (
    <ImagePanel
      image={data.image}
      alt={data.imageAlt}
      floatingElements={floatingElements}
      variant="red"
    />
  );
}