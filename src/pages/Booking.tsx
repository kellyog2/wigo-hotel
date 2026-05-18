import Button from "../components/common/Button";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type RoomType = {
  title: string;
  price: string;
};

const roomOptions: RoomType[] = [
  {
    title: "Deluxe Room",
    price: "$120",
  },
  {
    title: "Executive Suite",
    price: "$220",
  },
  {
    title: "Presidential Suite",
    price: "$450",
  },
];

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedRoom = location.state as RoomType | undefined;

  const [room, setRoom] = useState<RoomType>(
    selectedRoom || roomOptions[0]
  );

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleRoomChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selected = roomOptions.find(
      (item) => item.title === e.target.value
    );

    if (selected) {
      setRoom(selected);
    }
  };

  const handleBooking = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !cardNumber ||
      !cvv ||
      !expiry ||
      !cardName
    ) {
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
    <section className="w-full py-24 bg-gray-50 dark:bg-black transition duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-sm text-yellow-500 mb-4">
            Reservation
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Book Your Stay
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Reserve your luxury room at Wigo Hotel & Suite.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm p-8 md:p-12">

          <form
            onSubmit={handleBooking}
            className="grid md:grid-cols-2 gap-8"
          >

            {/* ROOM SELECTION */}
            <div className="md:col-span-2">
              <label className="block mb-3 font-semibold text-black dark:text-white">
                Select Room Plan
              </label>

              <select
                value={room.title}
                onChange={handleRoomChange}
                className="w-full h-14 px-5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white"
              >
                {roomOptions.map((item) => (
                  <option
                    key={item.title}
                    value={item.title}
                  >
                    {item.title} - {item.price}/Night
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Room Display */}
            <div className="md:col-span-2 bg-gray-100 dark:bg-black rounded-2xl p-5">
              <h3 className="text-2xl font-bold text-yellow-500">
                {room.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Price: {room.price}/Night
              </p>
            </div>

            {/* Inputs */}
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-14 px-5 rounded-xl border"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 px-5 rounded-xl border"
            />

            <input
              type="text"
              placeholder="Card Holder Name"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="w-full h-14 px-5 rounded-xl border"
            />

            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full h-14 px-5 rounded-xl border"
            />

            <input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full h-14 px-5 rounded-xl border"
            />

            <input
              type="password"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full h-14 px-5 rounded-xl border"
            />

            {/* Button */}
            <div className="md:col-span-2">
              <Button
                type="submit"
                btnText={
                  loading
                    ? "Processing..."
                    : "Confirm Booking"
                }
                btnStyle="w-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400"
                disabled={loading}
              />
            </div>

            {/* Success Message */}
            {success && (
              <div className="md:col-span-2 text-green-600 font-bold text-center">
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