import feature1 from "@/assets/home/services/Exterior Wash.jpg";
import feature2 from "@/assets/home/services/Clay Bar Treatment.jpg";
import feature3 from "@/assets/home/services/Engine Bay Cleaning.jpg";
import feature4 from "@/assets/home/services/Paint Sealant.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const HomeFeatured = () => {
  return (
    <section className="container mx-auto px-4 lg:px-10 pt-10 mb-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Our Best Services
        </h2>
        <p className="text-gray-600">
          Experience a top-quality car wash service that combines advanced
          cleaning technology with professional care. We offer a range of
          services, from quick washes to deep detailing, ensuring your vehicle
          looks spotless and shiny inside and out. Fast, convenient, and
          environmentally friendly—drive in for a sparkling clean car every
          time!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="relative rounded-md transition-all duration-300 hover:shadow-xl h-full">
          <img src={feature1} alt="feature" className="w-full h-[300px] sm:h-[250px] md:h-auto lg:h-[300px] 2xl:h-auto rounded-md object-cover object-center" />
          <div className="bg-feature-overlay w-full h-full absolute top-0 left-0 rounded-md"></div>
          <div className="w-full absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
            <div className="text-center p-10 lg:p-5 xl:p-10">
              <p className="text-xl font-semibold text-red-300">
                Exterior Wash
              </p>
              <p className="mt-6 text-sm text-white">
                Quick wash with spot-free rinse and hand dry. Quick wash with
                spot-free rinse and hand dry.
              </p>
              <Link
                to="/"
                className="mt-10 text-white text-xs flex items-center justify-center gap-1 transition-all duration-300 hover:gap-2"
              >
                <span>View Details</span>
                <IoIosArrowForward />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative rounded-md transition-all duration-300 hover:shadow-xl h-full">
          <img src={feature2} alt="feature" className="w-full h-[300px] sm:h-[250px] md:h-auto lg:h-[300px] 2xl:h-auto rounded-md object-cover object-center" />
          <div className="bg-feature-overlay w-full h-full absolute top-0 left-0 rounded-md"></div>
          <div className="w-full absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
            <div className="text-center p-10 lg:p-5 xl:p-10">
              <p className="text-xl font-semibold text-red-300">
                Clay Bar Treatment
              </p>
              <p className="mt-6 text-sm text-white">
                Quick wash with spot-free rinse and hand dry. Quick wash with
                spot-free rinse and hand dry.
              </p>
              <Link
                to="/"
                className="mt-10 text-white text-xs flex items-center justify-center gap-1 transition-all duration-300 hover:gap-2"
              >
                <span>View Details</span>
                <IoIosArrowForward />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative rounded-md transition-all duration-300 hover:shadow-xl h-full">
          <img src={feature3} alt="feature" className="w-full h-[300px] sm:h-[250px] md:h-auto lg:h-[300px] 2xl:h-auto rounded-md object-cover object-center" />
          <div className="bg-feature-overlay w-full h-full absolute top-0 left-0 rounded-md"></div>
          <div className="w-full absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
            <div className="text-center p-10 lg:p-5 xl:p-10">
              <p className="text-xl font-semibold text-red-300">
                Engine Bay Cleaning
              </p>
              <p className="mt-6 text-sm text-white">
                Quick wash with spot-free rinse and hand dry. Quick wash with
                spot-free rinse and hand dry.
              </p>
              <Link
                to="/"
                className="mt-10 text-white text-xs flex items-center justify-center gap-1 transition-all duration-300 hover:gap-2"
              >
                <span>View Details</span>
                <IoIosArrowForward />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative rounded-md transition-all duration-300 hover:shadow-xl h-full">
          <img src={feature4} alt="feature" className="w-full h-[300px] sm:h-[250px] md:h-auto lg:h-[300px] 2xl:h-auto rounded-md object-cover object-center" />
          <div className="bg-feature-overlay w-full h-full absolute top-0 left-0 rounded-md"></div>
          <div className="w-full absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
            <div className="text-center p-10 lg:p-5 xl:p-10">
              <p className="text-xl font-semibold text-red-300">
                Paint Sealant
              </p>
              <p className="mt-6 text-sm text-white">
                Quick wash with spot-free rinse and hand dry. Quick wash with
                spot-free rinse and hand dry.
              </p>
              <Link
                to="/"
                className="mt-10 text-white text-xs flex items-center justify-center gap-1 transition-all duration-300 hover:gap-2"
              >
                <span>View Details</span>
                <IoIosArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;
