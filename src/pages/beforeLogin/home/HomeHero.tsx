import heroImg from "@/assets/home/home-hero.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className="relative w-full h-screen lg:h-[700px] mb-10">
      <img
        src={heroImg}
        alt="hero"
        className="w-full h-full object-cover object-top"
      />
      <div className="bg-feature-overlay lg:bg-home-hero-overlay w-full h-full absolute top-0 left-0"></div>
      <div className="w-full absolute bottom-12 left-0 text-center">
        <div className="container mx-auto px-4 lg:px-10 xxl:px-0">
          <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Drive Clean, Shine Brighter!</h1>
          <p className="mt-6 sm:font-medium text-sm sm:text-base md:text-lg text-white lg:text-gray-300">Experience the ultimate car care with our premium wash and detailing services, where every wash is a promise of excellence. From meticulous hand washes to deep interior cleans and paint protection, we go above and beyond to make your car look and feel brand new. Whether it's a quick touch-up or a full-service detail, your vehicle deserves the finest attention to keep it shining on every drive. At our car wash, perfection isn't just a service—it's our standard.</p>
          <Link to="/services" className="mt-8 inline-block">
            <Button className="text-sm lg:text-base bg-red-300 text-gray-900 font-medium py-2 h-fit transition-all duration-300 hover:bg-red-400">View Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
