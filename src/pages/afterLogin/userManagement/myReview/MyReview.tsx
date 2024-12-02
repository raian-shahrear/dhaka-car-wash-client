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
import {
  useDeleteReviewMutation,
  useGetSingleReviewQuery,
} from "@/redux/api/reviewApi";
import Loading from "@/utils/Loading";
import { useState } from "react";
import { filterFun } from "@/utils/filter";
import Pagination from "@/components/shared/pagination/Pagination";

const MyReview = () => {
  const [dataLimit, setDataLimit] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  // get filter data from the utility
  const filterObj = filterFun({
    dataLimit,
    pageCount,
  });
  const { data: reviews, isLoading } = useGetSingleReviewQuery(filterObj);

  const [deleteReview, { isLoading: isReviewDeleted }] =
    useDeleteReviewMutation();

  // delete item
  const handleDeleteItem = async (id: Record<string, unknown>) => {
    const isConfirmed = confirm("Are you sure to delete?");
    if (isConfirmed) {
      const deleteData = await deleteReview(id).unwrap();
      if (deleteData.success) {
        toast.warning("Review has been deleted!");
      }
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
      {reviews?.data?.length ? (
        <>
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
                  <TableCell className="font-medium">{(pageCount - 1) * dataLimit + idx + 1}</TableCell>
                  <TableCell className="font-medium">
                    {review?.createdAt?.split("T")[0]?.split("-")?.join("/")}
                  </TableCell>
                  <TableCell className="font-medium">
                    {review?.review?.length > 100
                      ? review?.review?.slice(0, 99) + "..."
                      : review?.review}
                  </TableCell>
                  <TableCell className="font-medium">
                    {review?.rating}
                  </TableCell>
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
          <section className="pt-10 mb-10">
            <Pagination
              data={reviews}
              dataLimit={dataLimit}
              setDataLimit={setDataLimit}
              pageCount={pageCount}
              setPageCount={setPageCount}
            />
          </section>
        </>
      ) : (
        <div className="flex justify-center items-center h-[30vh]">
          <p className="text-xl sm:text-2xl text-gray-300 font-medium">
            No review data found
          </p>
        </div>
      )}
    </div>
  );
};

export default MyReview;
