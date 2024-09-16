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
import { useUpdateReviewMutation } from "@/redux/api/reviewApi";
import Loading from "@/utils/Loading";
import { FormEvent } from "react";
import { FaEdit } from "react-icons/fa";
import { toast } from "sonner";

const EditReview = ({ review }: { review: any }) => {
  const [updateReview, { isLoading }] = useUpdateReviewMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    try {
      const updateService = {
        id: review?._id,
        data: {
          rating: Number((form.elements.namedItem("rating") as HTMLInputElement).value),
          review: (form.elements.namedItem("review") as HTMLTextAreaElement)
            .value,
        },
      };
      const newData = await updateReview(updateService).unwrap();
      if (newData?.success) {
        toast.success("Review has been updated!");
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };

  if (isLoading) {
    return <Loading />;
  }
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
            <DialogTitle>Edit Review</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 py-8">
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Rating
              </label>
              <select
                name="rating"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                defaultValue={review?.rating}
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
                Review
              </label>
              <textarea
                name="review"
                placeholder="Enter review"
                className="border border-gray-300 w-full min-h-20 px-2 py-1 text-sm rounded-sm"
                defaultValue={review?.review}
              ></textarea>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="submit"
                className="w-fit h-fit text-xs py-2 px-2 rounded"
              >
                Save change
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditReview;
