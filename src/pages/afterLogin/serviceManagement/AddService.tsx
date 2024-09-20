import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { getImageUrl } from "@/utils/getImageUrl";
import { useCreateServiceMutation } from "@/redux/api/serviceApi";
import Loading from "@/utils/Loading";

const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm();
  const [modalOpen, setModalOpen] = useState(false);
  const [createService, { isLoading }] = useCreateServiceMutation();

  const handleAddService: SubmitHandler<FieldValues> = async (data) => {
    if (isValid || !isSubmitting) {
      try {
        const imageUrl = await getImageUrl(data.image[0]);
        const newService = {
          name: data?.title,
          description: data?.description,
          price: Number(data?.price),
          duration: Number(data?.duration),
          image: imageUrl,
        };
        const newData = await createService(newService).unwrap();
        if (newData?.success) {
          toast.success("Service has been created!");
          reset();
        }
      } catch (err: any) {
        toast.error(err?.data?.message ? err?.data?.message : "Something went wrong!");
      }
    }
  };

  if (isLoading) {
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
          <span>Add Service</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[550px]">
        <form onSubmit={handleSubmit(handleAddService)}>
          <DialogHeader>
            <DialogTitle>Add Service</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 py-8">
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Title<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter title"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Service cost (in num)<span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter cost"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Duration (in min)<span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter duration"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("duration", { required: true })}
              />
              {errors.duration && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Service Image<span className="text-red-600">*</span>
              </label>
              <input
                type="file"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Description<span className="text-red-600">*</span>
              </label>
              <textarea
                placeholder="Enter description"
                className="border border-gray-300 w-full min-h-20 px-2 py-1 text-sm rounded-sm"
                {...register("description", { required: true })}
              ></textarea>
              {errors.description && (
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

export default AddService;
