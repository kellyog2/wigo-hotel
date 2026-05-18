import {
  Award,
  Building2,
  Users,
  ShieldCheck,
} from "lucide-react";

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
    <section className="w-full py-24 bg-black transition duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Images */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
              alt="Hotel"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border border-yellow-500/30"
            />

            {/* Experience Card */}
            <div className="absolute -bottom-8 -right-8 bg-yellow-500 text-black p-6 rounded-2xl shadow-2xl w-56 border border-yellow-400">
              <h3 className="text-4xl font-bold">10+</h3>

              <p className="mt-2 font-medium">
                Years of Luxury Hospitality Experience
              </p>
            </div>
          </div>

          {/* Content */}
          <div>

            {/* Small Heading */}
            <p className="uppercase tracking-[4px] text-sm text-yellow-500 font-semibold mb-4">
              About Us
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Welcome To Wigo Hotel & Suite
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At Wigo Hotel & Suite, we redefine luxury and comfort by
              delivering world-class hospitality experiences tailored to your
              lifestyle. From elegant rooms to exceptional services, every
              detail is designed to give you a memorable stay.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Whether you're traveling for business, vacation, or relaxation,
              Wigo Hotel provides the perfect atmosphere of sophistication,
              comfort, and serenity.
            </p>

            {/* Button */}
            <Button
              btnText="Explore More"
              btnStyle="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-900 border border-yellow-500/20 p-8 rounded-3xl shadow-sm hover:shadow-yellow-500/20 hover:border-yellow-500 transition duration-300 group"
            >

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-yellow-500 text-black flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
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