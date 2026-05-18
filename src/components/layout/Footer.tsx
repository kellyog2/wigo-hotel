import {
  Hotel,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black dark:bg-gray-950 text-white py-20 transition duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white text-black p-2 rounded-xl">
                <Hotel size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Wigo Hotel
                </h2>

                <p className="text-sm text-gray-400">
                  Luxury & Comfort
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Experience world-class hospitality, luxury
              accommodations, and unforgettable moments at
              Wigo Hotel & Suite.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition duration-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/rooms"
                  className="hover:text-white transition duration-300"
                >
                  Rooms
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={20} />
                <p>123 Luxury Avenue, Abuja, Nigeria</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} />
                <p>+234 812 345 6789</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} />
                <p>info@wigohotel.com</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Follow Us
            </h3>

            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
              >
                <FaInstagram size={18} />
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
              >
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
          <p>
            © 2026 Wigo Hotel & Suite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;