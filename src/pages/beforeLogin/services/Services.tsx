import { useState } from "react";
import ServiceFilter from "./ServiceFilter";
import defaultImg from "@/assets/icon/default_image.jpg";
import { FaArrowRight, FaRegClock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Loading from "@/utils/Loading";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { convertToHoursAndMinutes } from "@/utils/convertTime";
import useDebounce from "@/hooks/useDebounce";
import Pagination from "@/components/shared/pagination/Pagination";
import { filterFun } from "@/utils/filter";

const Services = () => {
  const navigate = useNavigate();
  const [dataLimit, setDataLimit] = useState(10);
  const [pageCount, setPageCount] = useState(1);

  // search/filter
  const [searchItem, setSearchItem] = useState("");
  const [filterByMinPrice, setFilterByMinPrice] = useState("");
  const [filterByMaxPrice, setFilterByMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Use the debounce hook with a delay of 300ms
  const debouncedSearch = useDebounce(searchItem, 300);

  // get filter data from the utility
  const filterObj = filterFun({
    search: debouncedSearch,
    filterByMinPrice,
    filterByMaxPrice,
    sortBy,
    dataLimit,
    pageCount,
  });
  // get all data by using filter data
  const { data: services, isLoading } = useGetAllServicesQuery(filterObj);

  const handleRoute = (data: any) => {
    navigate(`/services/${data?._id}`, { state: data });
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto px-4 lg:px-10 pt-20 lg:pt-32 min-h-[67vh]">
      <ServiceFilter
        setSearchItem={setSearchItem}
        setFilterByMinPrice={setFilterByMinPrice}
        setFilterByMaxPrice={setFilterByMaxPrice}
        setSortBy={setSortBy}
      />

      <section className="pt-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10">
          {services?.data?.map((service: any) => (
            <div key={service?._id} className="shadow-lg rounded-lg">
              <img
                src={service?.image ? service?.image : defaultImg}
                alt="service"
                className="w-full h-[250px] object-cover object-center rounded-tl-lg rounded-tr-lg"
              />
              <div className="px-5 pt-2 pb-5">
                <p className="text-lg font-bold mb-2">{service?.name}</p>
                <p className="text-sm mb-1">
                  {service?.description?.length > 100
                    ? service?.description?.slice(0, 99) + "..."
                    : service?.description}
                </p>
                <p className="text-2xl font-bold mb-1">${service?.price}</p>
                <p className="text-sm font-medium flex items-center gap-1 mb-5">
                  <FaRegClock />
                  <span>{convertToHoursAndMinutes(service?.duration)}</span>
                </p>
                <Button
                  onClick={() => handleRoute(service)}
                  className="py-1 h-fit text-sm flex items-center gap-1"
                >
                  <span>Details</span>
                  <FaArrowRight />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

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

export default Services;
