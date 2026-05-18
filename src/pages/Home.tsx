import Hero from "../components/home/Hero";
import About from "./About";
import FeaturedRooms from "../components/home/FeaturedRooms";
import Services from "../components/home/Services";
import Gallery from "../components/home/Gallery";
import Testimonials from "../components/home/Testimonials";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedRooms />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;