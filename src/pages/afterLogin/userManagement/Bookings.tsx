import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Bookings = () => {
  return (
    <div>
      <div className="flex items-center justify-between flex-col sm:flex-row gap-2 mb-10">
        <h1 className="text-lg sm:text-xl font-bold">All Bookings</h1>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">SL</TableHead>
            <TableHead className="w-52">Service</TableHead>
            <TableHead>Booked Date</TableHead>
            <TableHead>Slot</TableHead>
            <TableHead>Service Cost</TableHead>
            <TableHead>Transaction Id</TableHead>
            <TableHead className="w-52">Vehicle Details</TableHead>
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
            <TableCell className="font-medium">$50</TableCell>
            <TableCell className="font-medium">Tx2345780765gg544</TableCell>
            <TableCell className="font-medium">
              <div className="flex flex-col gap-1">
                <div className="grid grid-cols-[100px_auto]">
                  <span>Type :</span>
                  <span>Car</span>
                </div>
                <div className="grid grid-cols-[100px_auto]">
                  <span>Brand :</span>
                  <span>Toyota</span>
                </div>
                <div className="grid grid-cols-[100px_auto]">
                  <span>Model :</span>
                  <span>Camry</span>
                </div>
                <div className="grid grid-cols-[100px_auto]">
                  <span>Menu. Year :</span>
                  <span>2019</span>
                </div>
                <div className="grid grid-cols-[100px_auto]">
                  <span>Reg. Plant :</span>
                  <span>ABC123</span>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Bookings;
