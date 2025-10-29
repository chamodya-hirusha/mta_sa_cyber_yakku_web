export default function Badge({ text, variant = "purple", animated = false }) {
  const variants = {
    purple: {
      bg: "bg-purple-500/20",
      border: "border-purple-400/30",
      text: "text-purple-300",
      dot: "bg-purple-400"
    },
    red: {
      bg: "bg-red-500/20",
      border: "border-red-400/40",
      text: "text-red-300",
      dot: "bg-red-500"
    }
  };

  const style = variants[variant];

  return (
    <div className="inline-flex">
      <span className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold ${style.text} uppercase tracking-wider ${style.bg} rounded-full border ${style.border} backdrop-blur-sm ${animated ? 'animate-pulse' : ''}`}>
        {animated ? (
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
        ) : (
          <span className={`w-2 h-2 ${style.dot} rounded-full animate-pulse`}></span>
        )}
        {text}
      </span>
    </div>
  );
}