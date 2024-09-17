import { Button } from "@/components/ui/button";
import { RiDeleteBin5Line } from "react-icons/ri";
import defaultImg from "@/assets/icon/default_image.jpg";
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
import {
  useDeleteServiceMutation,
  useGetAllServicesQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import Loading from "@/utils/Loading";
import { convertToHoursAndMinutes } from "@/utils/convertTime";
import { useState } from "react";
import { filterFun } from "@/utils/filter";
import Pagination from "@/components/shared/pagination/Pagination";

const ServiceManagement = () => {
  const [dataLimit, setDataLimit] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  // get filter data from the utility
  const filterObj = filterFun({
    dataLimit,
    pageCount,
  });
  const { data: services, isLoading } = useGetAllServicesQuery(filterObj);

  const [deleteService, { isLoading: isServiceDeleted }] =
    useDeleteServiceMutation();
  const [serviceUpdate, { isLoading: isServiceUpdated }] =
    useUpdateServiceMutation();

  const handleDeleteItem = async (id: Record<string, unknown>) => {
    const isConfirmed = confirm("Are you sure to delete?");
    if (isConfirmed) {
      const deleteData = await deleteService(id).unwrap();
      if (deleteData?.success) {
        toast.warning("Service has been deleted!");
      }
    }
  };

  // update featured product
  const handleFeaturedItem = async (checked: boolean, itemId: string) => {
    const updateService = {
      id: itemId,
      data: {
        isFeatured: checked,
      },
    };

    try {
      const newData = await serviceUpdate(updateService).unwrap();
      if (newData?.success) {
        if (checked) {
          toast.success("Added as a featured item.");
        } else {
          toast.success("Removed from featured group.");
        }
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };

  if (isLoading || isServiceDeleted || isServiceUpdated) {
    return <Loading />;
  }
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
            <TableHead className="w-36">Is Featured</TableHead>
            <TableHead className="w-24">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services?.data?.map((service: any, idx: number) => (
            <TableRow key={service?._id}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell>
                <div>
                  <img
                    src={service?.image ? service?.image : defaultImg}
                    alt="product"
                    className="w-full h-20 object-cover object-center rounded"
                  />
                </div>
              </TableCell>
              <TableCell className="font-bold">{service?.name}</TableCell>
              <TableCell className="font-medium">
                {service?.description?.length > 100
                  ? service?.description?.slice(0, 99) + "..."
                  : service?.description}
              </TableCell>
              <TableCell className="font-medium">${service?.price}</TableCell>
              <TableCell className="font-medium">
                {convertToHoursAndMinutes(service?.duration)}
              </TableCell>
              <TableCell>
                <div>
                  <label
                    htmlFor={`featured_item_${idx}`}
                    className="inline-flex items-center space-x-4 cursor-pointer"
                  >
                    <span className="relative">
                      <input
                        id={`featured_item_${idx}`}
                        type="checkbox"
                        className="hidden peer"
                        checked={service?.isFeatured}
                        onChange={(e) =>
                          handleFeaturedItem(e.target.checked, service._id)
                        }
                      />
                      <div className="w-12 h-6 rounded-full shadow-inner bg-gray-300 peer-checked:bg-gray-900"></div>
                      <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                    </span>
                  </label>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <EditService service={service} />
                  <Button
                    className="px-1 py-2 h-fit bg-red-700 rounded"
                    onClick={() => handleDeleteItem(service?._id)}
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
          data={services}
          dataLimit={dataLimit}
          setDataLimit={setDataLimit}
          pageCount={pageCount}
          setPageCount={setPageCount}
        />
      </section>
    </div>
  );
};

export default ServiceManagement;
