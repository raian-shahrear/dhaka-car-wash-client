import serviceImg from "@/assets/home/services/Car Disinfecting.jpg";
import { Button } from "@/components/ui/button";
import { FaRegClock } from "react-icons/fa";
import { MdBookmarkAdded } from "react-icons/md";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  return (
    <div className="pt-10 lg:pt-32 min-h-[67vh]">
      <div className="container mx-auto p-4 lg:p-10 shadow-lg">
        <section className="h-full lg:h-[500px] mb-10">
          <img
            src={serviceImg}
            alt="service"
            className=" w-full h-full object-cover object-center rounded-lg"
          />
        </section>
        <section>
          <p className="font-bold sm:text-2xl mb-3">Car Disinfecting</p>
          <p className="text-sm sm:text-base mb-3">
            Car disinfecting goes beyond the standard cleaning to sanitize every
            surface inside your vehicle, ensuring a safe and healthy
            environment. This service uses EPA-approved disinfectants to kill
            99.9% of bacteria, viruses, and allergens on high-touch areas such
            as the steering wheel, door handles, gear shifters, and seats. It’s
            ideal for those concerned about hygiene, especially after
            transporting pets, children, or passengers. The process also
            includes deep cleaning air vents to remove airborne contaminants,
            providing peace of mind with every drive. A disinfected car not only
            looks clean but also promotes health and well-being for everyone
            inside.
          </p>
          <p className="text-sm sm:text-base mb-3 flex items-center gap-1">
            <span>Service cost:</span> <span className="font-bold">$50</span>
          </p>
          <p className="text-sm sm:text-base flex items-center gap-1 mb-3">
            <span>Duration: </span>
            <FaRegClock />
            <span className="font-bold">60 min</span>
          </p>
          <div className="grid sm:grid-cols-2 gap-5 w-full lg:w-3/4">
            <input
              type="date"
              className="border border-gray-300 h-9 px-2 py-1 text-sm rounded-sm"
            />
            <select className="border border-gray-300 h-9 px-2 py-1 text-sm rounded-sm">
              <option value="">Select slot</option>
              <option value="12:00 - 13:00" disabled={true}>
                12:00 - 13:00
              </option>
              <option value="13:00 - 14:00">13:00 - 14:00</option>
              <option value="14:00 - 15:00">14:00 - 15:00</option>
            </select>
          </div>

          <div className="mt-8">
            <Link to="/booking" className="inline-block">
              <Button className="bg-red-300 text-gray-900 h-fit text-sm py-2 px-2 rounded transition-all duration-300 hover:bg-red-400 flex items-center gap-1">
                <span className="text-lg">
                  <MdBookmarkAdded />
                </span>
                Book Service
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;
