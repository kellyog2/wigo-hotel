import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackButton from "./components/common/BackButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Room";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";
import BookingSuccess from "./pages/BookingSuccess";

import Services from "./components/home/Services";
import RoomDetails from "./components/common/rooms/RoomDetails";

function Layout() {
  const location = useLocation();

  // Hide footer on specific pages
  const hideFooter =
    location.pathname === "/booking" ||
    location.pathname === "/booking-success";

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition duration-300">

      {/* Navbar */}
      <Navbar />

      {/* Global Back Button */}
      <BackButton />

      {/* Main Pages */}
      <main className="flex-1">
        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Other Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />

          {/* Booking */}
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking-success" element={<BookingSuccess />} />

          {/* Room Details */}
          <Route path="/room-details" element={<RoomDetails />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>

      {/* Footer */}
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;