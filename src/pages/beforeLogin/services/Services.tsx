import { useState } from "react";
import ServiceFilter from "./ServiceFilter";
import serviceImg from "@/assets/home/services/Car Disinfecting.jpg";
import { FaArrowRight, FaRegClock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  // search/filter
  const [search, setSearch] = useState("");
  const [filterByMinPrice, setFilterByMinPrice] = useState("");
  const [filterByMaxPrice, setFilterByMaxPrice] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");

  console.log({ search, filterByMinPrice, filterByMaxPrice, sortByPrice });

  return (
    <div className="container mx-auto px-4 lg:px-10 pt-20 lg:pt-32 min-h-[67vh]">
      <ServiceFilter
        setSearch={setSearch}
        setFilterByMinPrice={setFilterByMinPrice}
        setFilterByMaxPrice={setFilterByMaxPrice}
        setSortByPrice={setSortByPrice}
      />

      <section className="pt-5 mb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10">
          <div className="shadow-lg rounded-lg">
            <img
              src={serviceImg}
              alt="service"
              className="w-full h-[250px] object-cover object-center rounded-tl-lg rounded-tr-lg"
            />
            <div className="px-5 pt-2 pb-5">
              <p className="text-lg font-bold mb-2">Car Disinfecting</p>
              <p className="text-sm mb-1">
                Deep cleaning and sanitizing of high-touch interior surfaces to
                eliminate bacteria, viruses, and allergens for a healthier car
                environment.
              </p>
              <p className="text-2xl font-bold mb-1">$50</p>
              <p className="text-sm font-medium flex items-center gap-1 mb-5">
                <FaRegClock />
                <span>60 min</span>
              </p>
              <Link to="/services/1" className="inline-block">
                <Button className="py-1 h-fit text-sm flex items-center gap-1">
                  <span>Details</span>
                  <FaArrowRight />
                </Button>
              </Link>
            </div>
          </div>
          <div className="shadow-lg rounded-lg">
            <img
              src={serviceImg}
              alt="service"
              className="w-full h-[250px] object-cover object-center rounded-tl-lg rounded-tr-lg"
            />
            <div className="px-5 pt-2 pb-5">
              <p className="text-lg font-bold mb-2">Car Disinfecting</p>
              <p className="text-sm mb-1">
                Deep cleaning and sanitizing of high-touch interior surfaces to
                eliminate bacteria, viruses, and allergens for a healthier car
                environment.
              </p>
              <p className="text-2xl font-bold mb-1">$50</p>
              <p className="text-sm font-medium flex items-center gap-1 mb-5">
                <FaRegClock />
                <span>60 min</span>
              </p>
              <Link to="/services/1" className="inline-block">
                <Button className="py-1 h-fit text-sm flex items-center gap-1">
                  <span>Details</span>
                  <FaArrowRight />
                </Button>
              </Link>
            </div>
          </div>
          <div className="shadow-lg rounded-lg">
            <img
              src={serviceImg}
              alt="service"
              className="w-full h-[250px] object-cover object-center rounded-tl-lg rounded-tr-lg"
            />
            <div className="px-5 pt-2 pb-5">
              <p className="text-lg font-bold mb-2">Car Disinfecting</p>
              <p className="text-sm mb-1">
                Deep cleaning and sanitizing of high-touch interior surfaces to
                eliminate bacteria, viruses, and allergens for a healthier car
                environment.
              </p>
              <p className="text-2xl font-bold mb-1">$50</p>
              <p className="text-sm font-medium flex items-center gap-1 mb-5">
                <FaRegClock />
                <span>60 min</span>
              </p>
              <Link to="/services/1" className="inline-block">
                <Button className="py-1 h-fit text-sm flex items-center gap-1">
                  <span>Details</span>
                  <FaArrowRight />
                </Button>
              </Link>
            </div>
          </div>
          <div className="shadow-lg rounded-lg">
            <img
              src={serviceImg}
              alt="service"
              className="w-full h-[250px] object-cover object-center rounded-tl-lg rounded-tr-lg"
            />
            <div className="px-5 pt-2 pb-5">
              <p className="text-lg font-bold mb-2">Car Disinfecting</p>
              <p className="text-sm mb-1">
                Deep cleaning and sanitizing of high-touch interior surfaces to
                eliminate bacteria, viruses, and allergens for a healthier car
                environment.
              </p>
              <p className="text-2xl font-bold mb-1">$50</p>
              <p className="text-sm font-medium flex items-center gap-1 mb-5">
                <FaRegClock />
                <span>60 min</span>
              </p>
              <Link to="/services/1" className="inline-block">
                <Button className="py-1 h-fit text-sm flex items-center gap-1">
                  <span>Details</span>
                  <FaArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
