import serviceImg from "@/assets/home/services/Car Disinfecting.jpg";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import { MdOutlinePayments } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();

  const handleBooking = (e: FormEvent) =>{
    e.preventDefault();
    navigate("/booking-successful", { replace: true });
  }
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
          <div className="flex items-start gap-2 mb-5">
            <p className="font-bold text-xl sm:text-2xl">Car Disinfecting</p>
            <p className="font-semibold text-sm">$50</p>
          </div>
          <form onSubmit={handleBooking} className="grid sm:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                name="userName"
                defaultValue="Golzer Mir Chowdhury"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                readOnly
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                defaultValue="golzer@gmail.com"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                readOnly
              />
            </div>
            <div>
              <select
                name="slot"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
              >
                <option value="">Select slot</option>
                <option value="14:00 - 15:00">12:00 - 13:00</option>
                <option value="13:00 - 14:00" selected>
                  13:00 - 14:00
                </option>
                <option value="14:00 - 15:00">14:00 - 15:00</option>
              </select>
            </div>
            <div>
              <select className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm">
                <option value="">Vehicle Type</option>
                <option value="car">Car</option>
                <option value="car">Car</option>
                <option value="car">Car</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                name="brand"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                placeholder="Vehicle brand"
              />
            </div>
            <div>
              <input
                type="text"
                name="model"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                placeholder="Vehicle model"
              />
            </div>
            <div>
              <input
                type="text"
                name="year"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                placeholder="Manufacturing year"
              />
            </div>
            <div>
              <input
                type="text"
                name="registration"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                placeholder="Registration Plate"
              />
            </div>
            <Button type="submit" className="w-fit h-fit text-sm py-2 px-2 rounded flex items-center gap-1">
              <span className="text-lg">
                <MdOutlinePayments />
              </span>
              Pay Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
