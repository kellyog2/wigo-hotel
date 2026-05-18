interface RoomGalleryProps {
  images: string[];
}

const RoomGallery = ({
  images,
}: RoomGalleryProps) => {
  return (
    <section className="w-full py-24 bg-white dark:bg-black transition duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-12">
          <p className="uppercase tracking-[4px] text-sm text-gray-500 dark:text-gray-400 mb-4">
            Room Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Explore The Space
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl group"
            >
              <img
                src={image}
                alt={`Room ${index + 1}`}
                className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomGallery;