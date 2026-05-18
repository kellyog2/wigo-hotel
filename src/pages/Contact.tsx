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
    <section className="w-full py-24 bg-black transition duration-300">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          
          <p className="uppercase tracking-[4px] text-sm text-yellow-500 mb-4 font-semibold">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch With Us
          </h2>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
            We are always ready to assist you with bookings,
            reservations, and any inquiries about Wigo Hotel & Suite.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="space-y-8">

            {/* Address */}
            <div className="bg-gray-900 border border-yellow-500/20 p-8 rounded-3xl shadow-sm flex items-start gap-5 hover:border-yellow-500 transition duration-300">
              
              <div className="w-16 h-16 rounded-2xl bg-yellow-500 text-black flex items-center justify-center">
                <MapPin size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Address
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  25 Luxury Avenue, Central District,
                  Abuja, Nigeria
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gray-900 border border-yellow-500/20 p-8 rounded-3xl shadow-sm flex items-start gap-5 hover:border-yellow-500 transition duration-300">
              
              <div className="w-16 h-16 rounded-2xl bg-yellow-500 text-black flex items-center justify-center">
                <Phone size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Phone
                </h3>

                <p className="text-gray-400">
                  +234 800 000 0000
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-900 border border-yellow-500/20 p-8 rounded-3xl shadow-sm flex items-start gap-5 hover:border-yellow-500 transition duration-300">
              
              <div className="w-16 h-16 rounded-2xl bg-yellow-500 text-black flex items-center justify-center">
                <Mail size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Email
                </h3>

                <p className="text-gray-400">
                  info@wigohotel.com
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-gray-900 border border-yellow-500/20 p-8 rounded-3xl shadow-sm flex items-start gap-5 hover:border-yellow-500 transition duration-300">
              
              <div className="w-16 h-16 rounded-2xl bg-yellow-500 text-black flex items-center justify-center">
                <Clock3 size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Opening Hours
                </h3>

                <p className="text-gray-400">
                  Open 24/7 For Reservations & Support
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 border border-yellow-500/20 p-8 md:p-10 rounded-3xl shadow-sm hover:border-yellow-500 transition duration-300">
            
            <form className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full h-14 px-5 rounded-xl 
                  border border-gray-700 
                  bg-black 
                  text-white 
                  placeholder:text-gray-500
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-yellow-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-14 px-5 rounded-xl 
                  border border-gray-700 
                  bg-black 
                  text-white 
                  placeholder:text-gray-500
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-yellow-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full h-14 px-5 rounded-xl 
                  border border-gray-700 
                  bg-black 
                  text-white 
                  placeholder:text-gray-500
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-yellow-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full p-5 rounded-xl 
                  border border-gray-700 
                  bg-black 
                  text-white 
                  placeholder:text-gray-500
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-yellow-500 
                  resize-none"
                />
              </div>

              {/* Button */}
              <Button
                btnText="Send Message"
                btnStyle="w-full bg-yellow-500 text-black hover:bg-yellow-400 font-semibold flex items-center justify-center gap-2"
              />
            </form>

            {/* Hidden Icon */}
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