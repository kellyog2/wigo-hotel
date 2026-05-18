import { useNavigate } from "react-router-dom";
import RoomHero from "./RoomHero";
import RoomGallery from "./RoomGallery";
import RoomAmenities from "./RoomAmenities";
import RoomReviews from "./RoomReviews";
import Button from "../Button";

const roomImages = [
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
];

const RoomDetails = () => {
  const navigate = useNavigate();

  const roomData = {
    title: "Executive Suite",
    price: "$250",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
  };

  const handleBooking = () => {
    navigate("/booking", { state: roomData });
  };

  return (
    <div className="bg-white dark:bg-black transition duration-300">

      {/* Hero */}
      <RoomHero
        title="Executive Suite"
        subtitle="Experience premium comfort, luxury, and elegance in our world-class executive suite."
        image={roomData.image}
      />

      {/* Room Details */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-12">

          {/* Left Content */}
          <div className="lg:col-span-2">
            <p className="uppercase tracking-[4px] text-sm text-gray-500 dark:text-gray-400 mb-4">
              About This Room
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Executive Suite
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-6">
              Enjoy a luxurious stay in our Executive Suite designed
              for comfort, elegance, and premium relaxation.
              Experience spacious interiors, modern amenities,
              stunning views, and exceptional hospitality tailored
              for unforgettable moments.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-10">
              Whether you are traveling for business or leisure,
              this suite offers everything you need for a world-class
              hotel experience.
            </p>

            {/* BOOK NOW BUTTON ADDED */}
            <Button
              btnText="Book Now"
              btnStyle="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-xl"
              onClick={handleBooking}
            />
          </div>

        </div>
      </section>

      {/* Gallery */}
      <RoomGallery images={roomImages} />

      {/* Amenities */}
      <RoomAmenities />

      {/* Reviews */}
      <RoomReviews />
    </div>
  );
};

export default RoomDetails;