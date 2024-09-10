import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormEvent } from "react";
import { FaPlus } from "react-icons/fa";

const AddService = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="submit"
          className="w-fit h-fit text-xs py-2 px-2 rounded flex items-center gap-1"
        >
          <span className="text-xs">
            <FaPlus />
          </span>
          <span>Add Service</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[550px]">
        <form onSubmit={handleSubmit}>
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
                name="title"
                placeholder="Enter title"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Service cost<span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter cost"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Duration (in min)<span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                name="duration"
                placeholder="Enter duration"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Description<span className="text-red-600">*</span>
              </label>
              <textarea
                name="description"
                placeholder="Enter description"
                className="border border-gray-300 w-full min-h-20 px-2 py-1 text-sm rounded-sm"
                required
              ></textarea>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Submit</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddService;
