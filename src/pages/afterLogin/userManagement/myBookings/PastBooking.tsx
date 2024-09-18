import Pagination from "@/components/shared/pagination/Pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetUserExpiredBookingsQuery } from "@/redux/api/bookingApi";
import { filterFun } from "@/utils/filter";
import Loading from "@/utils/Loading";
import { useState } from "react";

const PastBooking = () => {
  const [dataLimit, setDataLimit] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  // get filter data from the utility
  const filterObj = filterFun({
    dataLimit,
    pageCount,
  });
  const { data: bookings, isLoading } =
    useGetUserExpiredBookingsQuery(filterObj);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex items-center justify-between flex-col sm:flex-row gap-2 mb-10">
        <h1 className="text-lg sm:text-xl font-bold">Past Bookings</h1>
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
            <TableHead className="w-56">Vehicle Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings?.data?.map((booking: any, idx: number) => (
            <TableRow key={booking?._id}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell className="font-bold">
                {booking?.service?.name}
              </TableCell>
              <TableCell className="font-medium">
                {booking?.slot?.date}
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex flex-col gap-1 min-w-20">
                  <div>
                    <span>Start : </span>
                    <span>{booking?.slot?.startTime}</span>
                  </div>
                  <div>
                    <span>End : </span>
                    <span>{booking?.slot?.endTime}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-medium">
                ${booking?.service?.price}
              </TableCell>
              <TableCell className="font-medium">
                {booking?.transactionId}
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex flex-col gap-1">
                  <div className="grid grid-cols-[100px_auto]">
                    <span>Type :</span>
                    <span className="capitalize">{booking?.vehicleType}</span>
                  </div>
                  <div className="grid grid-cols-[100px_auto]">
                    <span>Brand :</span>
                    <span>{booking?.vehicleBrand}</span>
                  </div>
                  <div className="grid grid-cols-[100px_auto]">
                    <span>Model :</span>
                    <span>{booking?.vehicleModel}</span>
                  </div>
                  <div className="grid grid-cols-[100px_auto]">
                    <span>Menu. Year :</span>
                    <span>{booking?.manufacturingYear}</span>
                  </div>
                  <div className="grid grid-cols-[100px_auto]">
                    <span>Reg. Plant :</span>
                    <span>{booking?.registrationPlate}</span>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <section className="pt-10 mb-10">
        <Pagination
          data={bookings}
          dataLimit={dataLimit}
          setDataLimit={setDataLimit}
          pageCount={pageCount}
          setPageCount={setPageCount}
        />
      </section>
    </div>
  );
};

export default PastBooking;
