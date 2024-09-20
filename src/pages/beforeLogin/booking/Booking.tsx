import defaultImg from "@/assets/icon/default_image.jpg";
import { Button } from "@/components/ui/button";
import { MdOutlinePayments } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Loading from "@/utils/Loading";
import { useAppSelector } from "@/redux/hooks";
import { useGetAllUsersQuery } from "@/redux/api/authApi";
import { toast } from "sonner";
import { useCreateBookingMutation } from "@/redux/api/bookingApi";

const Booking = () => {
  const { state: data } = useLocation();
  const { user } = useAppSelector((state) => state.auth);
  const { data: allUsers, isLoading: isGetUserLoading } =
    useGetAllUsersQuery(undefined);
  const loggedInUser = allUsers?.data?.find(
    (info: any) => info?._id === user?._id
  );
  const [createBooking, { isLoading }] = useCreateBookingMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm();

  const handleBooking: SubmitHandler<FieldValues> = async (formInfo) => {
    if (isValid || !isSubmitting) {
      try {
        const newBooking = {
          serviceId: data?.serviceData?._id,
          slotId: formInfo.slot,
          vehicleType: formInfo.vehicleType,
          vehicleBrand: formInfo.brand,
          vehicleModel: formInfo.model,
          manufacturingYear: Number(formInfo.year),
          registrationPlate: formInfo.registration,
        };
        const newData = await createBooking(newBooking).unwrap();
        if (newData?.success && newData?.data?.paymentSession?.result) {
          toast.success("Service booked successfully!");
          reset();
          // redirect to the payment url
          window.location.href = newData?.data?.paymentSession?.payment_url;
        }
      } catch (err: any) {
        toast.error(err?.data?.message);
      }
    }
  };

  if (isLoading || isGetUserLoading) {
    return (
      <div className="relative min-h-[67vh]">
        <Loading />
      </div>
    );
  }
  return (
    <section className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-10 lg:pt-32 min-h-[67vh]">
      {data ? (
        <div className="mb-10 grid lg:grid-cols-2 gap-x-10 gap-y-6">
          <div>
            <img
              src={
                data?.serviceData?.image ? data?.serviceData?.image : defaultImg
              }
              alt="service"
              className="w-full h-full object-cover object-center rounded-md"
            />
          </div>
          <div>
            <div className="mb-5">
              <div className="flex items-start gap-2">
                <p className="font-bold text-xl sm:text-2xl">
                  {data?.serviceData?.name}
                </p>
                <p className="font-semibold text-sm">
                  ৳{data?.serviceData?.price}
                </p>
              </div>
              <p className="mt-1 text-sm font-medium text-gray-500 ">
                Booking for: {data?.allSlots?.data[0]?.date}
              </p>
            </div>
            <form
              onSubmit={handleSubmit(handleBooking)}
              className="grid sm:grid-cols-2 gap-5"
            >
              <div>
                <input
                  type="text"
                  name="userName"
                  defaultValue={loggedInUser?.name}
                  className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                  readOnly
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  defaultValue={loggedInUser?.email}
                  className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                  readOnly
                />
              </div>
              <div>
                <select
                  className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                  defaultValue={data?.chooseSlot}
                  {...register("slot", { required: true })}
                >
                  <option value="">Select slot</option>
                  {data?.allSlots?.data?.map((option: any) => (
                    <option
                      key={option?._id}
                      value={option?._id}
                      disabled={option?.isBooked !== "available"}
                    >
                      {option?.startTime} - {option?.endTime}
                    </option>
                  ))}
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
                  <option value="truck">Truck</option>
                  <option value="SUV">SUV</option>
                  <option value="van">Van</option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="bus">Bus</option>
                  <option value="electricVehicle">ElectricVehicle</option>
                  <option value="hybridVehicle">HybridVehicle</option>
                  <option value="tractor">Tractor</option>
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
      ) : (
        <div className="flex justify-center items-center h-[30vh]">
          <p className="text-xl sm:text-2xl text-gray-300 font-medium">
            No booking data found
          </p>
        </div>
      )}
    </section>
  );
};

export default Booking;
