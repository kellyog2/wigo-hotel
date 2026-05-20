import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide on homepage
  if (location.pathname === "/") return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        hidden sm:flex

        fixed top-24 left-6 z-50
        items-center gap-2

        bg-white dark:bg-black
        text-yellow-500

        border border-yellow-500

        shadow-lg shadow-yellow-500/20

        px-5 py-3
        rounded-xl
        font-medium

        hover:bg-yellow-500
        hover:text-black
        hover:scale-105

        transition duration-300
      "
    >
      <ArrowLeft size={18} />
      Back
    </button>
  );
};

export default BackButton;