export default function StatsSection({ stats }) {
  return (
    <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6">
      <div className="flex flex-col">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{stats.items}</span>
        <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Items</span>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{stats.users}</span>
        <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Users</span>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{stats.rating}</span>
        <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Rating</span>
      </div>
    </div>
  );
}