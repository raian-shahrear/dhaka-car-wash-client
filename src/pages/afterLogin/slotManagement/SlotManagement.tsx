import { useState } from "react";
import AddSlot from "./AddSlot";
import SlotStatusChange from "./SlotStatusChange";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { filterFun } from "@/utils/filter";
import { useGetAllSlotQuery } from "@/redux/api/slotApi";
import Loading from "@/utils/Loading";
import Pagination from "@/components/shared/pagination/Pagination";

const SlotManagement = () => {
  const [dataLimit, setDataLimit] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  // get filter data from the utility
  const filterObj = filterFun({
    dataLimit,
    pageCount,
  });
  const { data: slots, isLoading } = useGetAllSlotQuery(filterObj);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex items-center justify-between flex-col sm:flex-row gap-2 mb-10">
        <h1 className="text-lg sm:text-xl font-bold">Slot Management</h1>
        <AddSlot />
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
          {slots?.data?.map((slot: any, idx: number) => (
            <TableRow key={slot?._id}>
              <TableCell className="font-medium">{idx+1}</TableCell>
              <TableCell className="font-bold">{slot?.service?.name}</TableCell>
              <TableCell className="font-medium">{slot?.date}</TableCell>
              <TableCell className="font-medium">
                <div className="flex flex-col gap-1 min-w-20">
                  <div>
                    <span>Start : </span>
                    <span>{slot?.startTime}</span>
                  </div>
                  <div>
                    <span>End : </span>
                    <span>{slot?.endTime}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-medium">
                <span className={`${slot?.isBooked === 'available' ? "text-green-600" : slot?.isBooked === 'booked' ? "text-gray-600" : "text-red-600"}`}>{slot?.isBooked}</span>
              </TableCell>
              <TableCell>
                <SlotStatusChange slot={slot} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <section className="pt-10 mb-10">
        <Pagination
          data={slots}
          dataLimit={dataLimit}
          setDataLimit={setDataLimit}
          pageCount={pageCount}
          setPageCount={setPageCount}
        />
      </section>
    </div>
  );
};

export default SlotManagement;
