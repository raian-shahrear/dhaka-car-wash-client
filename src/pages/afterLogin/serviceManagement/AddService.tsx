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
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm();
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddService = async (data) => {
    if (isValid || !isSubmitting) {
      const newService = {
        name: data.title,
        description: data.description,
        price: data.price,
        duration: data.duration,
        isDeleted: false,
      };
      console.log(newService);
    }
  };
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
                Service cost<span className="text-red-600">*</span>
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
