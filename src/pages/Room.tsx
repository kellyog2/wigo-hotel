import RoomCard from "../components/common/rooms/RoomCard";
import { rooms } from "../data/Room";

const Rooms = () => {
  return (
    <section className="w-full py-24 bg-white dark:bg-black transition duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-sm text-gray-500 dark:text-gray-400 mb-4">
            Our Rooms
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Luxury Rooms & Suites
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Discover premium accommodations designed with elegance,
            comfort, and modern luxury for a memorable stay.
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              image={room.image}
              title={room.title}
              price={room.price}
              guests={room.guests}
              rating={room.rating}
              description={room.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;