import ImagePanel from '../shared/ImagePanel';

export default function HeroImage1({ data }) {
  const floatingElements = [
    {
      position: "top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8",
      content: (
        <div className="bg-black/40 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-purple-500/30">
          <p className="text-xs sm:text-sm text-purple-300 font-semibold">{data.floatingText}</p>
        </div>
      )
    }
  ];

  return (
    <ImagePanel
      image={data.image}
      alt={data.imageAlt}
      floatingElements={floatingElements}
      variant="purple"
    />
  );
}