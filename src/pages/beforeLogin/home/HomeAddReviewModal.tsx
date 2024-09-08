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

const HomeAddReviewModal = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="text-sm bg-red-300 text-gray-900 font-medium py-2 h-fit transition-all duration-300 hover:bg-red-400 mt-6"
          disabled={false}
        >
          Place your review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Review</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 py-8">
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Rating<span className="text-red-600">*</span>
              </label>
              <select
                name="slot"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
              >
                <option value="">Select Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Review<span className="text-red-600">*</span>
              </label>
              <textarea
                name="address"
                placeholder="Enter address"
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

export default HomeAddReviewModal;
