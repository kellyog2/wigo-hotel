const galleryImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop",
  },
];

const Gallery = () => {
  return (
    <section className="w-full py-24 bg-black transition duration-300">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-sm text-yellow-500 mb-4">
            Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Our Luxury Spaces
          </h2>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
            Take a visual tour through the elegance, comfort,
            and premium experience offered at Wigo Hotel & Suite.
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="
                overflow-hidden
                rounded-3xl
                group
                cursor-pointer
                bg-gray-900
                border border-yellow-500/30
                hover:border-yellow-500
                shadow-lg shadow-yellow-500/10
                transition duration-300
              "
            >
              <img
                src={item.image}
                alt="Hotel Gallery"
                className="
                  w-full
                  h-[350px]
                  object-cover
                  group-hover:scale-110
                  transition duration-500
                "
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Gallery;