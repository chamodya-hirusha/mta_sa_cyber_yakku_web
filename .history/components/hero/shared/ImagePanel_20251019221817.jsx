export default function ImagePanel({ image, alt, floatingElements = [], variant = "purple" }) {
  const variants = {
    purple: {
      gradient: "from-purple-500/30 via-transparent to-pink-500/30",
      accent: "via-purple-500"
    },
    red: {
      gradient: "from-red-500/30 via-transparent to-purple-500/30",
      accent: "via-red-500"
    }
  };

  const style = variants[variant];

  return (
    <div className="relative h-64 sm:h-72 md:h-80 lg:h-auto min-h-[400px] md:min-h-[450px] lg:min-h-[500px] order-1 md:order-2 lg:order-2 overflow-hidden">

      {/* Gradient Overlays */}
      <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} z-10`}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-900/50 md:to-slate-900/60 lg:to-slate-900/80 z-10"></div>

      {/* Image Container */}
      <div className="relative h-full flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <div key={index} className={`absolute ${element.position} z-20`}>
          {element.content}
        </div>
      ))}

    </div>
  );
}