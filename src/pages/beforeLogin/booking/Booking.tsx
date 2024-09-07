import serviceImg from "@/assets/home/services/Car Disinfecting.jpg";
import { Button } from "@/components/ui/button";
import { MdBookmarkAdded } from "react-icons/md";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <section className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-10 lg:pt-32 min-h-[67vh]">
      <div className="mb-10 grid lg:grid-cols-2 gap-x-10 gap-y-6">
        <div>
          <img
            src={serviceImg}
            alt="service"
            className="w-full h-full object-cover object-center rounded-md"
          />
        </div>
        <div>
          <p className="font-bold text-2xl mb-2">Car Disinfecting</p>
          <p className="font-semibold text-lg mb-4">$50</p>
          <div>
          <div>
            <select className="border border-gray-300 w-full h-9 px-2 py-2 text-sm rounded-sm">
              <option value="">Select slot</option>
              <option value="12:00 - 13:00" disabled={true}>
                12:00 - 13:00
              </option>
              <option value="13:00 - 14:00">13:00 - 14:00</option>
              <option value="14:00 - 15:00">14:00 - 15:00</option>
            </select>
          </div>
          <div>
            
          </div>
          </div>

          <div className="mt-8">
            <Link to="/booking">
              <Button className="bg-red-300 text-gray-900 h-fit text-sm py-2 px-2 rounded transition-all duration-300 hover:bg-red-400 flex items-center gap-1">
                <span className="text-lg">
                  <MdBookmarkAdded />
                </span>
                Book Service
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
