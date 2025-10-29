export default function ScrollIndicator({ cards }) {
  return (
    <div className="flex justify-center gap-1.5 mt-4">
      {cards.map((_, i) => (
        <div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-purple-500/40 transition-all duration-300"
        ></div>
      ))}
    </div>
  );
}