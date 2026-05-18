import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import logo from "../common/image/logo.png";

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
    <header className="w-full fixed top-0 left-0 z-50 bg-black/90 backdrop-blur-md shadow-sm transition duration-300">

      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">

          {/* LOGO IMAGE */}
          <img
            src={logo}
            alt="Wigo Hotel Logo"
            className="w-30 h-30 object-cover rounded-full "
          />

          {/* HOTEL NAME */}
          <div>
            <h1 className="text-xl font-bold text-yellow-500">
              Wigo Hotel
            </h1>

            <p className="text-xs text-gray-300 -mt-1">
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
                className="text-gray-200 font-medium hover:text-yellow-500 transition duration-300"
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
            className="w-11 h-11 rounded-full bg-gray-900 border border-yellow-500 flex items-center justify-center text-yellow-500 transition duration-300"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Book Button */}
          <button
            onClick={() => navigate("/booking")}
            className="bg-yellow-500 text-black px-5 py-2.5 rounded-xl font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Book Now
          </button>

        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">

          {/* Theme Button */}
          <button
            onClick={toggleDarkMode}
            className="text-yellow-500"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-500"
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
            className="md:hidden bg-black shadow-lg transition duration-300 border-t border-yellow-500"
          >
            <ul className="flex flex-col px-6 py-6 gap-6">

              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-200 font-medium hover:text-yellow-500"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Mobile Book Button */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/booking");
                }}
                className="bg-yellow-500 text-black py-3 rounded-xl font-semibold transition duration-300"
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