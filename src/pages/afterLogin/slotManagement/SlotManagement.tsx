import SlotStatusChange from "./SlotStatusChange";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SlotManagement = () => {
  return (
    <div>
      <div className="flex items-center justify-between flex-col sm:flex-row gap-2 mb-10">
        <h1 className="text-lg sm:text-xl font-bold">Slot Management</h1>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">SL</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Slot</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-36">Change Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell className="font-bold">Car Disinfecting</TableCell>
            <TableCell className="font-medium">2024-07-31</TableCell>
            <TableCell className="font-medium">
              <div className="flex flex-col gap-1 min-w-20">
                <div>
                  <span>Start : </span>
                  <span>12:00</span>
                </div>
                <div>
                  <span>End : </span>
                  <span>13:00</span>
                </div>
              </div>
            </TableCell>
            <TableCell className="font-medium"><span className="text-red-600">Cancelled</span></TableCell>
            <TableCell>
              <SlotStatusChange />
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">2</TableCell>
            <TableCell className="font-bold">Car Disinfecting</TableCell>
            <TableCell className="font-medium">2024-07-31</TableCell>
            <TableCell className="font-medium">
              <div className="flex flex-col gap-1">
                <div>
                  <span>Start : </span>
                  <span>12:00</span>
                </div>
                <div>
                  <span>End : </span>
                  <span>13:00</span>
                </div>
              </div>
            </TableCell>
            <TableCell className="font-medium"><span className="text-gray-400">Booked</span></TableCell>
            <TableCell>
              <SlotStatusChange />
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">2</TableCell>
            <TableCell className="font-bold">Car Disinfecting</TableCell>
            <TableCell className="font-medium">2024-07-31</TableCell>
            <TableCell className="font-medium">
              <div className="flex flex-col gap-1">
                <div>
                  <span>Start : </span>
                  <span>12:00</span>
                </div>
                <div>
                  <span>End : </span>
                  <span>13:00</span>
                </div>
              </div>
            </TableCell>
            <TableCell className="font-medium"><span className="text-green-500">Available</span></TableCell>
            <TableCell>
              <SlotStatusChange />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default SlotManagement;
