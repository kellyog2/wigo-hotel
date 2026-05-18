import { BedDouble, Star, Users } from "lucide-react";
import Button from "../common/Button";

const featuredRooms = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop",
    title: "Deluxe Room",
    price: "$120",
    guests: "2 Guests",
    rating: "4.8",
    description:
      "Elegant deluxe room designed with modern luxury and premium comfort.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    title: "Executive Suite",
    price: "$220",
    guests: "4 Guests",
    rating: "5.0",
    description:
      "Luxury executive suite offering spacious interiors and premium amenities.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
    title: "Presidential Suite",
    price: "$450",
    guests: "6 Guests",
    rating: "5.0",
    description:
      "An exclusive presidential suite crafted for a world-class luxury experience.",
  },
];

const FeaturedRooms = () => {
  return (
    <section className="w-full py-24 bg-gray-50 dark:bg-black transition duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-sm text-gray-500 dark:text-gray-400 mb-4">
            Featured Rooms
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Discover Our Luxury Rooms
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Explore premium accommodations carefully designed to
            provide elegance, comfort, and unforgettable experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-80 object-cover hover:scale-110 transition duration-500"
                />

                <div className="absolute top-5 right-5 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-xl text-sm font-medium transition duration-300">
                  {room.price}/Night
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {room.title}
                  </h3>

                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={18} fill="currentColor" />

                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {room.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {room.description}
                </p>

                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-8">
                  <Users size={18} />
                  <span>{room.guests}</span>

                  <span className="mx-2">•</span>

                  <BedDouble size={18} />
                  <span>King Size Bed</span>
                </div>

                <Button
                  btnText="Book Now"
                  btnStyle="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;