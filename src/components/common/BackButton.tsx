import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide on homepage (optional but clean UX)
  if (location.pathname === "/") return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-24 left-6 z-50 flex items-center gap-2 
      bg-white dark:bg-gray-900 text-gray-800 dark:text-white 
      shadow-md px-4 py-2 rounded-xl hover:scale-105 transition"
    >
      <ArrowLeft size={18} />
      Back
    </button>
  );
};

export default BackButton;