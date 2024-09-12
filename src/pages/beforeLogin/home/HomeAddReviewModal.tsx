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
import { useForm } from "react-hook-form";

const HomeAddReviewModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm();
  const [modalOpen, setModalOpen] = useState(false);

  const handleReviewSubmit = async (data) => {
    if (isValid || !isSubmitting) {
      const newReview = {
        userId: "01",
        rating: data.rating,
        review: data.review,
      };
      console.log(newReview);
    }
  };
  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <Button
          className="text-sm bg-red-300 text-gray-900 font-medium py-2 h-fit transition-all duration-300 hover:bg-red-400 mt-6"
          disabled={false}
          onClick={() => setModalOpen(true)}
        >
          Place your review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[550px]">
        <form onSubmit={handleSubmit(handleReviewSubmit)}>
          <DialogHeader>
            <DialogTitle>Add Review</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 py-8">
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Rating<span className="text-red-600">*</span>
              </label>
              <select
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("rating", { required: true })}
              >
                <option value="">Select Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {errors.rating && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Review<span className="text-red-600">*</span>
              </label>
              <textarea
                placeholder="Enter review"
                className="border border-gray-300 w-full min-h-20 px-2 py-1 text-sm rounded-sm"
                {...register("review", { required: true })}
              ></textarea>
              {errors.review && (
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

export default HomeAddReviewModal;
