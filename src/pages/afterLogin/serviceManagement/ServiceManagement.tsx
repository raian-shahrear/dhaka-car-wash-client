import { Button } from "@/components/ui/button";
import { RiDeleteBin5Line } from "react-icons/ri";
import serviceImg from "@/assets/home/services/Car Disinfecting.jpg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddService from "./AddService";
import EditService from "./EditService";
import { toast } from "sonner";

const ServiceManagement = () => {
  // delete item
  const handleDeleteItem = (item: Record<string, unknown>) => {
    const isConfirmed = confirm("Are you sure to delete?");
    if (isConfirmed) {
      console.log(item.id);
      toast.warning("Service has been deleted!");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between flex-col sm:flex-row gap-2 mb-10">
        <h1 className="text-lg sm:text-xl font-bold">Services Management</h1>
        <AddService />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">SL</TableHead>
            <TableHead className="w-32">Service</TableHead>
            <TableHead className="w-52">Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="w-32">Service Cost</TableHead>
            <TableHead className="w-32">Duration</TableHead>
            <TableHead className="w-24">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <div>
                <img
                  src={serviceImg}
                  alt="product"
                  className="w-full h-20 object-cover object-center rounded"
                />
              </div>
            </TableCell>
            <TableCell className="font-bold">Car Disinfecting</TableCell>
            <TableCell className="font-medium">
              Car disinfecting goes beyond the standard cleaning to sanitize
              every surface inside your vehicle...
            </TableCell>
            <TableCell className="font-medium">$50</TableCell>
            <TableCell className="font-medium">50min</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <EditService />
                <Button
                  className="px-1 py-2 h-fit bg-red-700 rounded"
                  onClick={() => handleDeleteItem({ id: "01" })}
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

export default ServiceManagement;
