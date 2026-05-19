import {
  Wifi,
  Dumbbell,
  Utensils,
  Waves,
  Car,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Wifi size={32} />,
    title: "Free WiFi",
    description:
      "Enjoy high-speed internet access throughout the hotel during your stay.",
  },
  {
    id: 2,
    icon: <Utensils size={32} />,
    title: "Restaurant",
    description:
      "Experience premium dining with delicious local and international cuisine.",
  },
  {
    id: 3,
    icon: <Dumbbell size={32} />,
    title: "Fitness Center",
    description:
      "Stay active with our fully equipped modern gym and fitness facilities.",
  },
  {
    id: 4,
    icon: <Waves size={32} />,
    title: "Swimming Pool",
    description:
      "Relax and unwind in our luxurious outdoor swimming pool area.",
  },
  {
    id: 5,
    icon: <Car size={32} />,
    title: "Free Parking",
    description:
      "Secure and spacious parking facilities available for all guests.",
  },
  {
    id: 6,
    icon: <ShieldCheck size={32} />,
    title: "24/7 Security",
    description:
      "Your comfort and safety are protected with our professional security team.",
  },
];

const Services = () => {
  return (
    <section className="w-full py-24 bg-white dark:bg-black transition duration-300">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          
          <p className="uppercase tracking-[4px] text-sm text-yellow-500 mb-4 font-semibold">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Premium Hotel Services
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            We provide world-class services designed to make your
            stay comfortable, luxurious, and unforgettable.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {services.map((service) => (
            <div
              key={service.id}
              className="
                bg-white dark:bg-[#111111]
                border border-yellow-500/20
                p-8
                rounded-3xl
                shadow-sm
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-yellow-500
                transition duration-300
                group
              "
            >
              
              {/* Icon */}
              <div
                className="
                  w-16 h-16 rounded-2xl
                  bg-yellow-500 text-black
                  flex items-center justify-center mb-6
                  group-hover:bg-black
                  group-hover:text-yellow-500
                  dark:group-hover:bg-yellow-500
                  dark:group-hover:text-black
                  transition duration-300
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  text-2xl font-semibold
                  text-gray-900 dark:text-white
                  mb-4
                  transition duration-300
                "
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-gray-600 dark:text-gray-400
                  leading-relaxed
                  transition duration-300
                "
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;