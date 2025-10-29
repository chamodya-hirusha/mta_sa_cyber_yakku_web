import CardImage from '../shared/CardImage';
import CardContent from '../shared/CardContent';

export default function DesktopCard({ card }) {
  return (
    <div
      className={`${card.bg} rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm cursor-pointer group`}
    >
      <CardImage card={card} heightClass="h-48 lg:h-52" />
      <CardContent card={card} />
    </div>
  );
}