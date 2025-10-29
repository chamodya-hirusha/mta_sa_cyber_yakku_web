export default function ViewAllButton({ title }) {
  return (
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
  );
}