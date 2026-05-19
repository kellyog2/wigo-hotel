import { Link } from "react-router-dom";
import {
  BedDouble,
  Star,
  Users,
  Wifi,
  Bath,
} from "lucide-react";

import Button from "../Button";

interface RoomCardProps {
  image: string;
  title: string;
  price: string;
  guests: string;
  rating: string;
  description: string;
}

const RoomCard = ({
  image,
  title,
  price,
  guests,
  rating,
  description,
}: RoomCardProps) => {
  return (
    <div
      className="
        bg-white dark:bg-black
        border border-yellow-500/30
        rounded-3xl
        overflow-hidden
        shadow-lg
        hover:shadow-yellow-500/20
        hover:-translate-y-2
        transition duration-300
        group
      "
    >

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Price */}
        <div className="absolute top-5 right-5 bg-yellow-500 text-black px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
          {price}/Night
        </div>
      </div>

      {/* Content */}
      <div className="p-8">

        {/* Title + Rating */}
        <div className="flex items-center justify-between mb-4">

          <h3 className="text-2xl font-semibold text-yellow-500">
            {title}
          </h3>

          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={18} fill="currentColor" />

            <span className="text-sm text-gray-700 dark:text-gray-300">
              {rating}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
          {description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap items-center gap-4 text-gray-700 dark:text-gray-300 mb-8">

          <div className="flex items-center gap-2">
            <Users size={18} className="text-yellow-500" />
            <span>{guests}</span>
          </div>

          <div className="flex items-center gap-2">
            <BedDouble size={18} className="text-yellow-500" />
            <span>King Size Bed</span>
          </div>

          <div className="flex items-center gap-2">
            <Wifi size={18} className="text-yellow-500" />
            <span>Free WiFi</span>
          </div>

          <div className="flex items-center gap-2">
            <Bath size={18} className="text-yellow-500" />
            <span>Bathtub</span>
          </div>
        </div>

        {/* BOOK NOW BUTTON */}
        <Link
          to="/booking"
          state={{
            image: image,
            title: title,
            price: price,
          }}
          className="block"
        >
          <Button
            btnText="Book Now"
            type="button"
            btnStyle="w-full bg-yellow-500 text-black hover:bg-yellow-400 font-semibold"
          />
        </Link>

      </div>
    </div>
  );
};

export default RoomCard;