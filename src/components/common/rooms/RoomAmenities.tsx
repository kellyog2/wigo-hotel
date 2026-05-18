import {
  Wifi,
  Tv,
  Bath,
  Coffee,
  AirVent,
  ShieldCheck,
  Utensils,
  Dumbbell,
} from "lucide-react";

const amenities = [
  {
    id: 1,
    icon: <Wifi size={28} />,
    title: "Free WiFi",
  },

  {
    id: 2,
    icon: <Tv size={28} />,
    title: "Smart TV",
  },

  {
    id: 3,
    icon: <Bath size={28} />,
    title: "Luxury Bathtub",
  },

  {
    id: 4,
    icon: <Coffee size={28} />,
    title: "Coffee Service",
  },

  {
    id: 5,
    icon: <AirVent size={28} />,
    title: "Air Conditioning",
  },

  {
    id: 6,
    icon: <ShieldCheck size={28} />,
    title: "24/7 Security",
  },

  {
    id: 7,
    icon: <Utensils size={28} />,
    title: "Restaurant Access",
  },

  {
    id: 8,
    icon: <Dumbbell size={28} />,
    title: "Fitness Center",
  },
];

const RoomAmenities = () => {
  return (
    <section className="w-full py-24 bg-gray-50 dark:bg-gray-950 transition duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-16">
          <p className="uppercase tracking-[4px] text-sm text-gray-500 dark:text-gray-400 mb-4">
            Amenities
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Premium Room Facilities
          </h2>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-black rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-2xl transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomAmenities;