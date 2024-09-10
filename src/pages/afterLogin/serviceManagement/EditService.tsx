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
import { FaEdit } from "react-icons/fa";

const EditService = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-1 py-2 h-fit rounded">
          <FaEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Service</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 py-8">
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter title"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Service cost
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter cost"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Duration (in min)
              </label>
              <input
                type="number"
                name="duration"
                placeholder="Enter duration"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter description"
                className="border border-gray-300 w-full min-h-20 px-2 py-1 text-sm rounded-sm"
              ></textarea>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save change</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditService;
