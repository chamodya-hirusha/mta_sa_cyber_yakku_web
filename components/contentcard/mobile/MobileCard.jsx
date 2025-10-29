import CardImage from '../shared/CardImage';
import CardContent from '../shared/CardContent';

export default function MobileCard({ card, index }) {
  // Create diverse card widths for mobile
  const widths = ['w-72', 'w-64', 'w-80', 'w-64', 'w-72', 'w-68'];
  const heights = ['h-48', 'h-44', 'h-52', 'h-44', 'h-48', 'h-46'];

  return (
    <div
      className={`flex-shrink-0 ${widths[index % widths.length]} ${card.bg} rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 snap-start backdrop-blur-sm shadow-lg hover:shadow-purple-500/20`}
    >
      <CardImage
        card={card}
        isMobile={true}
        heightClass={heights[index % heights.length]}
      />
      <CardContent card={card} isMobile={true} />
    </div>
  );
}