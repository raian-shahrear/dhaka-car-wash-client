import serviceImg from "@/assets/home/services/Car Disinfecting.jpg";
import { Button } from "@/components/ui/button";
import { MdOutlinePayments } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Booking = () => {
  const navigate = useNavigate();
  const { state: chosenSlot } = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm();

  const handleBooking = (data) => {
    if (isValid || !isSubmitting) {
      const newBooking = {
        serviceId: "66852c13e0efb0c9f7020605",
        slotId: data.slot,
        vehicleType: data.vehicleType,
        vehicleBrand: data.brand,
        vehicleModel: data.model,
        manufacturingYear: data.year,
        registrationPlate: data.registration,
      };
      console.log(newBooking);
      navigate("/booking-successful", { replace: true });
    }
  };
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
          <form
            onSubmit={handleSubmit(handleBooking)}
            className="grid sm:grid-cols-2 gap-5"
          >
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
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                defaultValue={chosenSlot}
                {...register("slot", { required: true })}
              >
                <option value="">Select slot</option>
                <option value="01" disabled={true}>
                  12:00 - 13:00
                </option>
                <option value="02">13:00 - 14:00</option>
                <option value="03">14:00 - 15:00</option>
              </select>
              {errors.slot && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <select
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("vehicleType", { required: true })}
              >
                <option value="">Vehicle Type</option>
                <option value="car">Car</option>
                <option value="car">Car</option>
                <option value="car">Car</option>
              </select>
              {errors.vehicleType && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <input
                type="text"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                placeholder="Vehicle brand"
                {...register("brand", { required: true })}
              />
              {errors.brand && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <input
                type="text"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                placeholder="Vehicle model"
                {...register("model", { required: true })}
              />
              {errors.model && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <input
                type="text"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                placeholder="Manufacturing year"
                {...register("year", { required: true })}
              />
              {errors.year && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <input
                type="text"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                placeholder="Registration Plate"
                {...register("registration", { required: true })}
              />
              {errors.registration && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <Button
              type="submit"
              className="w-fit h-fit text-sm py-2 px-2 rounded flex items-center gap-1"
            >
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
