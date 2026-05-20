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
      "Experience world class comfort and elegance at Wigo Hotel & Suite.",
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
    title: "A Five Star Experience",
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
    <section
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
        bg-white dark:bg-black
        transition duration-300
      "
    >

      <AnimatePresence mode="wait">
        <motion.div
          key={heroSlides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full overflow-hidden"
        >

          {/* Background Image */}
          <img
            src={heroSlides[current].image}
            alt={heroSlides[current].title}
            className="
              w-full
              h-full
              object-cover
              object-center
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 dark:bg-black/75 transition duration-300" />

          {/* Gold Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/40 via-black/20 to-black/60 dark:from-yellow-900/50 dark:via-black/30 dark:to-black/70" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl"
              >

                {/* Small Text */}
                <p
                  className="
                    uppercase
                    tracking-[5px]
                    text-xs sm:text-sm
                    mb-4
                    text-yellow-500
                    font-semibold
                  "
                >
                  Wigo Hotel & Suite
                </p>

                {/* Heading */}
                <h1
                  className="
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                    font-bold
                    leading-tight
                    mb-6
                    text-white
                    break-words
                  "
                >
                  {heroSlides[current].title}
                </h1>

                {/* Subtitle */}
                <p
                  className="
                    text-base
                    sm:text-lg
                    md:text-xl
                    text-gray-200
                    mb-8
                    leading-relaxed
                    max-w-xl
                  "
                >
                  {heroSlides[current].subtitle}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4">

                  {/* Book Button */}
                  <Button
                    btnText="Book Now"
                    btnStyle="
                      bg-yellow-500
                      text-black
                      font-semibold
                      hover:bg-yellow-400
                    "
                    onClick={() => navigate("/booking")}
                  />

                  {/* Explore Button */}
                  <Button
                    btnText="Explore Rooms"
                    btnStyle="
                      border border-yellow-500
                      text-yellow-500
                      hover:bg-yellow-500
                      hover:text-black
                      font-semibold
                    "
                    onClick={() => navigate("/rooms")}
                  />
                </div>

              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="
          absolute
          left-3 sm:left-5
          top-1/2
          -translate-y-1/2
          z-20

          p-2 sm:p-3
          rounded-full

          text-yellow-500

          transition duration-300

          sm:bg-white/20
          sm:dark:bg-black/70
          sm:border sm:border-yellow-500
          sm:backdrop-blur-md

          sm:hover:bg-yellow-500
          sm:hover:text-black
        "
      >
        <ChevronLeft size={24} />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="
          absolute
          right-3 sm:right-5
          top-1/2
          -translate-y-1/2
          z-20

          p-2 sm:p-3
          rounded-full

          text-yellow-500

          transition duration-300

          sm:bg-white/20
          sm:dark:bg-black/70
          sm:border sm:border-yellow-500
          sm:backdrop-blur-md

          sm:hover:bg-yellow-500
          sm:hover:text-black
        "
      >
        <ChevronRight size={24} />
      </button>

      {/* DOTS */}
      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          flex items-center gap-3
          z-20
        "
      >
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-yellow-500 w-10"
                : "bg-yellow-500/40 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;