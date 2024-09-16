import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "sonner";
import EditReview from "./EditReview";
import { useAppSelector } from "@/redux/hooks";
import { useDeleteReviewMutation, useGetSingleReviewQuery } from "@/redux/api/reviewApi";
import Loading from "@/utils/Loading";

const MyReview = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { data: reviews, isLoading } = useGetSingleReviewQuery(user?._id);
  const [deleteReview, { isLoading: isReviewDeleted }] = useDeleteReviewMutation();

  const reviewDate = reviews?.data[0]?.createdAt
    .split("T")[0]
    .split("-")
    .join("/");

  // delete item
  const handleDeleteItem = async(id: Record<string, unknown>) => {
    const isConfirmed = confirm("Are you sure to delete?");
    if (isConfirmed) {
      const deleteData = await deleteReview(id).unwrap();
      console.log(deleteData)
      toast.warning("Review has been deleted!");
    }
  };

  if (isLoading || isReviewDeleted) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex items-center justify-between flex-col sm:flex-row gap-2 mb-10">
        <h1 className="text-lg sm:text-xl font-bold">My Review</h1>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">SL</TableHead>
            <TableHead className="w-52">Published At</TableHead>
            <TableHead>Review</TableHead>
            <TableHead className="w-32">Rating</TableHead>
            <TableHead className="w-24">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews?.data?.map((review: any, idx: number) => (
            <TableRow key={review?._id}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell className="font-medium">{reviewDate}</TableCell>
              <TableCell className="font-medium">{review?.review?.length > 110 ? review?.review?.slice(0, 109)+'...' : review?.review}</TableCell>
              <TableCell className="font-medium">{review?.rating}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <EditReview review={review} />
                  <Button
                    className="px-1 py-2 h-fit bg-red-700 rounded"
                    onClick={() => handleDeleteItem(review?._id)}
                  >
                    <RiDeleteBin5Line />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyReview;
