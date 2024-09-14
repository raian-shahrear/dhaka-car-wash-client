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

const ClientReview = () => {
  const handleDeleteItem = (item: Record<string, unknown>) => {
    const isConfirmed = confirm("Are you sure to delete?");
    if (isConfirmed) {
      console.log(item._id);
      toast.warning("Review has been deleted!");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between flex-col sm:flex-row gap-2 mb-10">
        <h1 className="text-lg sm:text-xl font-bold">Client Review</h1>
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
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell className="font-medium">2024/09/21</TableCell>
            <TableCell className="font-medium">
              Fantastic service! My car has never looked this clean. The staff
              was friendly, and they took great...
            </TableCell>
            <TableCell className="font-medium">4</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button
                  className="px-1 py-2 h-fit bg-red-700 rounded"
                  onClick={() => handleDeleteItem({ _id: "01" })}
                >
                  <RiDeleteBin5Line />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ClientReview;
