import Button from "../components/common/Button";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type RoomType = {
  image: string;
  title: string;
  price: string;
};

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const room = location.state as RoomType | undefined;

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !cardNumber || !cvv || !expiry || !cardName) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setTimeout(() => {
        navigate("/booking-success", {
          state: {
            name,
            email,
            room,
          },
        });
      }, 1200);
    }, 1800);
  };

  return (
    <section className="relative w-full min-h-screen py-24 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-sm text-gray-300 mb-4">
            Reservation
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book Your Stay
          </h2>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Reserve your luxury room at Wigo Hotel & Suite.
          </p>
        </div>

        {/* Selected Room */}
        {room && (
          <div className="mb-10 bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl">

            <img
              src={room.image}
              alt={room.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              {/* Room Info */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {room.title}
                </h3>

                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {room.price}/night
                </p>
              </div>

              {/* Change Room Button */}
              <button
                onClick={() => navigate("/rooms")}
                className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition duration-300"
              >
                Change Room
              </button>

            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12">

          <form
            onSubmit={handleBooking}
            className="grid md:grid-cols-2 gap-8"
          >

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-14 px-5 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 px-5 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              placeholder="Card Holder Name"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="w-full h-14 px-5 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full h-14 px-5 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full h-14 px-5 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="password"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full h-14 px-5 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-black"
            />

            {/* Button */}
            <div className="md:col-span-2">
              <Button
                type="submit"
                btnText={loading ? "Processing..." : "Confirm Booking"}
                btnStyle="w-full bg-black dark:bg-white text-white dark:text-black hover:opacity-90"
                disabled={loading}
              />
            </div>

            {/* Success Message */}
            {success && (
              <div className="md:col-span-2 text-center text-green-600 font-bold text-lg">
                Booking Successful 🎉 Redirecting...
              </div>
            )}

          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;