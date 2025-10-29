import Badge from '../shared/Badge';
import CTASection from '../shared/CTASection';

export default function HeroContent2({ data }) {
  return (
    <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 order-2 md:order-1 lg:order-1 z-10">

      {/* Badge with Timer Effect */}
      <Badge text={data.badge} variant="red" animated={true} />

      {/* Main Heading with Urgency */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400">
          {data.title.split(' ')[0]} {data.title.split(' ')[1]}
        </span>
        <span className="block text-white mt-1 sm:mt-2">
          {data.title.split(' ').slice(2).join(' ')}
        </span>
      </h2>

      {/* Subheading */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300/90 leading-relaxed max-w-xl">
        {data.subtitle}
      </p>

      {/* Offer Highlights */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs sm:text-sm text-red-300 font-semibold backdrop-blur-sm">
          🎁 Bonus Items
        </span>
        <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs sm:text-sm text-purple-300 font-semibold backdrop-blur-sm">
          💎 Exclusive Access
        </span>
        <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-xs sm:text-sm text-pink-300 font-semibold backdrop-blur-sm">
          ⚡ Special Discounts
        </span>
      </div>

      {/* CTA Section */}
      <CTASection
        primaryText={data.primaryButton}
        secondaryText={data.secondaryButton}
        variant="red"
      />

      {/* Countdown or Urgency Indicator */}
      <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs sm:text-sm text-red-300 font-semibold">{data.urgencyText}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="text-xs sm:text-sm text-gray-400">{data.usersClaimed}</span>
        </div>
      </div>

    </div>
  );
}