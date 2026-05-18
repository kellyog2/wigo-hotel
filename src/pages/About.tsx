import { Award, Building2, Users, ShieldCheck } from "lucide-react";
import Button from "../components/common/Button";

const features = [
  {
    id: 1,
    icon: <Building2 size={32} />,
    title: "Luxury Rooms",
    description:
      "Experience premium comfort with beautifully designed modern suites.",
  },
  {
    id: 2,
    icon: <Users size={32} />,
    title: "Professional Staff",
    description:
      "Our dedicated team ensures exceptional hospitality and customer care.",
  },
  {
    id: 3,
    icon: <Award size={32} />,
    title: "Five-Star Service",
    description:
      "Enjoy top-tier services crafted to deliver unforgettable experiences.",
  },
  {
    id: 4,
    icon: <ShieldCheck size={32} />,
    title: "Safe & Secure",
    description:
      "Your comfort, privacy, and security are always our highest priority.",
  },
];

const About = () => {
  return (
     <section className="w-full py-24 bg-gray-50 dark:bg-black transition duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
              alt="Hotel"
              className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
            />

            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg w-56">
              <h3 className="text-4xl font-bold text-black">10+</h3>
              <p className="text-gray-600 mt-2">
                Years of Luxury Hospitality Experience
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="uppercase tracking-[4px] text-sm text-gray-900 dark:text-white mb-4">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Welcome To Wigo Hotel & Suite
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              At Wigo Hotel & Suite, we redefine luxury and comfort by
              delivering world-class hospitality experiences tailored to your
              lifestyle. From elegant rooms to exceptional services, every
              detail is designed to give you a memorable stay.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether you're traveling for business, vacation, or relaxation,
              Wigo Hotel provides the perfect atmosphere of sophistication,
              comfort, and serenity.
            </p>

            <Button
              btnText="Explore More"
              btnStyle="bg-black text-white hover:bg-gray-800"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;