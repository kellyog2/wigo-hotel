interface RoomHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

const RoomHero = ({
  title,
  subtitle,
  image,
}: RoomHeroProps) => {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[5px] text-sm text-gray-300 mb-4">
            Luxury Room Experience
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoomHero;