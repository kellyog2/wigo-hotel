import {
  Mail,
  MapPin,
  Phone,
  Clock3,
  Send,
} from "lucide-react";
import Button from "../components/common/Button";

const Contact = () => {
  return (
    <section className="w-full py-24 bg-gray-50 dark:bg-black transition duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch With Us
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            We are always ready to assist you with bookings,
            reservations, and any inquiries about Wigo Hotel & Suite.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Card */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm flex items-start gap-5 transition duration-300">
              <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center">
                <MapPin size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Address
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  25 Luxury Avenue, Central District,
                  Abuja, Nigeria
                </p>
              </div>
            </div>

            {/* Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center">
                <Phone size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Phone
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  +234 800 000 0000
                </p>
              </div>
            </div>

            {/* Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center">
                <Mail size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Email
                </h3>

                <p className="text-gray-600">
                  info@wigohotel.com
                </p>
              </div>
            </div>

            {/* Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center">
                <Clock3 size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Opening Hours
                </h3>

                <p className="text-gray-600">
                  Open 24/7 For Reservations & Support
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-3xl shadow-sm transition duration-300" >
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full h-14 px-5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-14 px-5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full h-14 px-5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full p-5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
              </div>

              {/* Button */}
              <Button
                btnText="Send Message"
                btnStyle="w-full bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-2"
              />
            </form>

            {/* Icon */}
            <div className="hidden">
              <Send />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;