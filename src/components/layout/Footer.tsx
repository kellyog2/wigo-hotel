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
import Container from "../layout/Container";

const Footer = () => {
  return (
    <footer
      className="
        w-full overflow-x-hidden
        bg-white dark:bg-black
        text-gray-900 dark:text-white
        py-20
        border-t border-yellow-500/20
        transition duration-300
      "
    >
      <Container>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo & Description */}
          <div className="min-w-0">

            <div className="flex items-center gap-3 mb-6">

              <div className="bg-yellow-500 text-black p-2 rounded-xl shrink-0">
                <Hotel size={24} />
              </div>

              <div className="min-w-0">
                <h2 className="text-2xl font-bold text-yellow-500 break-words">
                  Wigo Hotel
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Luxury & Comfort
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed break-words">
              Experience world-class hospitality, luxury
              accommodations, and unforgettable moments at
              Wigo Hotel & Suite.
            </p>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">

            <h3 className="text-xl font-semibold mb-6 text-yellow-500">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-600 dark:text-gray-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-500 transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-500 transition duration-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/rooms"
                  className="hover:text-yellow-500 transition duration-300"
                >
                  Rooms
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-500 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="min-w-0">

            <h3 className="text-xl font-semibold mb-6 text-yellow-500">
              Contact Info
            </h3>

            <div className="space-y-5 text-gray-600 dark:text-gray-400">

              <div className="flex items-start gap-3 min-w-0">
                <MapPin
                  size={20}
                  className="text-yellow-500 shrink-0 mt-1"
                />

                <p className="break-words">
                  123 Luxury Avenue, Abuja, Nigeria
                </p>
              </div>

              <div className="flex items-center gap-3 min-w-0">
                <Phone
                  size={20}
                  className="text-yellow-500 shrink-0"
                />

                <p className="break-all">
                  +234 812 345 6789
                </p>
              </div>

              <div className="flex items-center gap-3 min-w-0">
                <Mail
                  size={20}
                  className="text-yellow-500 shrink-0"
                />

                <p className="break-all">
                  info@wigohotel.com
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="min-w-0">

            <h3 className="text-xl font-semibold mb-6 text-yellow-500">
              Follow Us
            </h3>

            <div className="flex flex-wrap items-center gap-4">

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12 rounded-full
                  border border-yellow-500
                  text-yellow-500
                  flex items-center justify-center
                  hover:bg-yellow-500
                  hover:text-black
                  transition duration-300
                  shrink-0
                "
              >
                <FaFacebookF size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12 rounded-full
                  border border-yellow-500
                  text-yellow-500
                  flex items-center justify-center
                  hover:bg-yellow-500
                  hover:text-black
                  transition duration-300
                  shrink-0
                "
              >
                <FaInstagram size={18} />
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12 rounded-full
                  border border-yellow-500
                  text-yellow-500
                  flex items-center justify-center
                  hover:bg-yellow-500
                  hover:text-black
                  transition duration-300
                  shrink-0
                "
              >
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            border-t border-yellow-500/20
            mt-16 pt-8
            text-center
            text-gray-500 dark:text-gray-400
          "
        >
          <p className="break-words">
            © 2026{" "}
            <span className="text-yellow-500 font-semibold">
              Wigo Hotel & Suite
            </span>
            . All rights reserved.
          </p>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;