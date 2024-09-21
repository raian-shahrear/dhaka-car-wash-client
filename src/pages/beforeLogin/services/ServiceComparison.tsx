import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import Select from "react-select";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { TServiceOption } from "@/types";
import { FaArrowRotateLeft } from "react-icons/fa6";
import Loading from "@/utils/Loading";
import {
  useGetAllServicesQuery,
  useGetServiceListQuery,
} from "@/redux/api/serviceApi";
import { filterFun } from "@/utils/filter";
import { convertToHoursAndMinutes } from "@/utils/convertTime";

const ServiceComparison = () => {
  const navigate = useNavigate();
  const { data: serviceOptions, isLoading } = useGetServiceListQuery(undefined);
  const [selectService, setSelectService] = useState<TServiceOption[]>([]);
  const [comparisonServices, setComparisonService] = useState<any>([]);

  // get filter data from the utility
  const filterObj = filterFun({
    filterByService: selectService,
  });
  const { data: allServices, isLoading: isAllServiceData } =
    useGetAllServicesQuery(filterObj, { skip: !Object.keys(filterObj).length });
  useEffect(() => {
    if (selectService.length > 0) {
      setComparisonService(allServices?.data);
    }else{
      setComparisonService([]);
    }
  }, [selectService, allServices]);

  // reset filter
  const handleAllFilterToReset = () => {
    setSelectService([]);
    setComparisonService([]);
  };

  const handleRoute = (data: any) => {
    navigate(`/services/${data?._id}`, { state: data });
  };

  if (isLoading || isAllServiceData) {
    return (
      <div className="relative min-h-[67vh]">
        <Loading />
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 lg:px-10 pt-20 lg:pt-32 min-h-[67vh]">
      <div className="mb-10">
        <p className="font-bold text-xl sm:text-2xl mb-3">Service Comparison</p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <div className="w-full md:w-8/12">
            <Select
              isMulti
              value={selectService}
              name="services"
              options={serviceOptions?.data}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Select 2 or more services to compare"
              onChange={(selectedOptions) =>
                setSelectService(selectedOptions as TServiceOption[])
              }
            />
          </div>
          <Button
            type="reset"
            className="py-2 px-2 rounded w-fit"
            onClick={handleAllFilterToReset}
          >
            <FaArrowRotateLeft /> <span className="ml-2">Reset</span>
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">SL</TableHead>
            <TableHead>Service Title</TableHead>
            <TableHead>Service Cost</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisonServices?.map((service: any, idx: number) => (
            <TableRow key={service?._id}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell className="font-bold">{service?.name}</TableCell>
              <TableCell className="font-medium">${service?.price}</TableCell>
              <TableCell className="font-medium">
                {convertToHoursAndMinutes(service?.duration)}
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => handleRoute(service)}
                  type="button"
                  className="px-1 py-2 h-fit rounded w-fit"
                >
                  <BsBoxArrowInUpRight />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ServiceComparison;
