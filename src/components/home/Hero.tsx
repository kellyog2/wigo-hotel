import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const heroSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    title: "Luxury Redefined",
    subtitle:
      "Experience world-class comfort and elegance at Wigo Hotel & Suite.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=2070&auto=format&fit=crop",
    title: "Relax In Style",
    subtitle:
      "Premium rooms designed for unforgettable moments and relaxation.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    title: "A Five-Star Experience",
    subtitle:
      "Enjoy exceptional hospitality, luxury dining, and premium services.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={heroSlides[current].id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <img
            src={heroSlides[current].image}
            alt={heroSlides[current].title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70 transition duration-300" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl text-white"
              >
                <p className="uppercase tracking-[5px] text-sm mb-4 text-gray-200 dark:text-gray-300">
                  Wigo Hotel & Suite
                </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                  {heroSlides[current].title}
                </h1>

                <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-8 leading-relaxed">
                  {heroSlides[current].subtitle}
                </p>

                {/* BUTTONS FIXED */}
                <div className="flex items-center gap-4">
                  <Button
                    btnText="Book Now"
                    btnStyle="bg-white text-black hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800"
                    onClick={() => navigate("/booking")}
                  />

                  <Button
                    btnText="Explore Rooms"
                    btnStyle="border border-white text-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-black"
                    onClick={() => navigate("/rooms")}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 dark:bg-black/40 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-black transition"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 dark:bg-black/40 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-black transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;