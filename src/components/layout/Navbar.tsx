import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Hotel,
  Moon,
  Sun,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Get saved theme from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm transition duration-300">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-xl transition duration-300">
            <Hotel size={24} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Wigo Hotel
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
              Luxury & Comfort
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="text-gray-700 dark:text-gray-200 font-medium hover:text-black dark:hover:text-white transition duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">

          {/* Theme Button */}
          <button
            onClick={toggleDarkMode}
            className="w-11 h-11 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-black dark:text-white transition duration-300"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* CTA BUTTON FIXED */}
          <button
            onClick={() => navigate("/booking")}
            className="bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-xl font-medium hover:opacity-90 transition duration-300"
          >
            Book Now
          </button>

        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">

          {/* Theme Button */}
          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-white"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black dark:text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-black shadow-lg transition duration-300"
          >
            <ul className="flex flex-col px-6 py-6 gap-6">

              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-700 dark:text-gray-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* MOBILE BOOK NOW FIXED */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/booking");
                }}
                className="bg-black dark:bg-white text-white dark:text-black py-3 rounded-xl font-medium transition duration-300"
              >
                Book Now
              </button>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;