import { ArrowLeft, Hotel } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const NotFound = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-2xl">
        {/* Icon */}
        <div className="w-24 h-24 mx-auto rounded-3xl bg-black text-white flex items-center justify-center mb-8">
          <Hotel size={50} />
        </div>

        {/* 404 */}
        <h1 className="text-7xl md:text-9xl font-bold text-gray-900 mb-6">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Page Not Found
        </h2>

        {/* Text */}
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Sorry, the page you are looking for does not exist or
          may have been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <Button
            btnText="Back To Home"
            btnStyle="bg-black text-white hover:bg-gray-800 inline-flex items-center gap-2"
          />
        </Link>

        {/* Hidden Icon */}
        <div className="hidden">
          <ArrowLeft />
        </div>
      </div>
    </section>
  );
};

export default NotFound;