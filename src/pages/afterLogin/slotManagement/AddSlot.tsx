import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { useCreateSlotMutation } from "@/redux/api/slotApi";
import Loading from "@/utils/Loading";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { toast } from "sonner";

const AddSlot = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm();
  const [modalOpen, setModalOpen] = useState(false);
  const [createSlot, { isLoading }] = useCreateSlotMutation();
  const { data: allServices, isLoading: isGetAllServices } =
    useGetAllServicesQuery(undefined);
  const serviceOptions = allServices?.data?.map((option: any) => ({
    value: option?._id,
    label: option?.name,
    duration: option?.duration,
  }));

  // current date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const handleAddService: SubmitHandler<FieldValues> = async (data) => {
    if (isValid || !isSubmitting) {
      try {
        const newSlot = {
          service: data?.service,
          date: data?.date,
          startTime: data?.startTime,
          endTime: data?.endTime,
        };
        const newData = await createSlot(newSlot).unwrap();
        if (newData?.success) {
          toast.success("Slot has been created!");
          reset();
        }
      } catch (err: any) {
        toast.error(err?.data?.message ? err?.data?.message : "Something went wrong!");
      }
    }
  };

  if (isLoading || isGetAllServices) {
    return <Loading />;
  }
  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <Button
          type="submit"
          className="w-fit h-fit text-xs py-2 px-2 rounded flex items-center gap-1"
          onClick={() => setModalOpen(true)}
        >
          <span className="text-xs">
            <FaPlus />
          </span>
          <span>Add Slot</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[550px]">
        <form onSubmit={handleSubmit(handleAddService)}>
          <DialogHeader>
            <DialogTitle>Add Slot</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 py-8">
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Service<span className="text-red-600">*</span>
              </label>
              <select
                className="border border-gray-300 w-full h-9 px-1 py-1 text-sm rounded-sm"
                {...register("service", { required: true })}
              >
                <option value="">Select service</option>
                {serviceOptions?.map((option: any) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}- {option?.duration}min
                  </option>
                ))}
              </select>
              {errors.service && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Date<span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                min={formattedDate}
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("date", { required: true })}
              />
              {errors.price && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Start Time<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="example: 10:00 "
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("startTime", { required: true })}
              />
              {errors.startTime && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                End Time<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="example: 14:00 "
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("endTime", { required: true })}
              />
              {errors.endTime && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={() => setModalOpen(!isValid || isSubmitting)}
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSlot;
