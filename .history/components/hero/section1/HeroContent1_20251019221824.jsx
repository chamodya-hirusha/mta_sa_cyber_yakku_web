import Badge from '../shared/Badge';
import CTASection from '../shared/CTASection';
import StatsSection from '../shared/StatsSection';
import { heroStats } from '../../../lib/heroData';

export default function HeroContent1({ data }) {
  return (
    <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 order-2 md:order-1 lg:order-1 z-10 min-h-0">

      {/* Badge */}
      <Badge text={data.badge} />

      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-tight">
        {data.title}
      </h1>

      {/* Subheading */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300/90 leading-relaxed max-w-xl">
        {data.subtitle}
      </p>

      {/* CTA Section */}
      <CTASection
        primaryText={data.primaryButton}
        secondaryText={data.secondaryButton}
        variant="purple"
      />

      {/* Stats */}
      <StatsSection stats={heroStats} />

    </div>
  );
}