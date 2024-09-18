import { Button } from "@/components/ui/button";
import { FormEvent, useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { MdBookmarkAdded } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import defaultImg from "@/assets/icon/default_image.jpg";
import { convertToHoursAndMinutes } from "@/utils/convertTime";
import { DayPicker } from "react-day-picker";
import {
  useGetAllSlotQuery,
  useGetSlotByServiceIdQuery,
} from "@/redux/api/slotApi";
import Loading from "@/utils/Loading";
import { filterFun } from "@/utils/filter";
import { useAppSelector } from "@/redux/hooks";
import { upcomingSlotExist } from "./service.utils";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { state: serviceData } = useLocation();
  const { user } = useAppSelector((state) => state.auth);
  const { data: slotsByService, isLoading } = useGetSlotByServiceIdQuery(
    serviceData?._id
  );
  const [chooseSlot, setChooseSlot] = useState("");
  const [chooseDate, setChooseDate] = useState("");
  const [isSlotExist, setIsSlotExist] = useState(false);
  const [selectDate, setSelectDate] = useState<Date | undefined>(undefined);
  
  // isUpcomingSlotExist
  useEffect(() => {
    if (slotsByService?.data?.length) {
      const isUpcomingSlotExist = upcomingSlotExist(slotsByService);
      if (isUpcomingSlotExist) {
        setIsSlotExist(true);
      } else {
        setIsSlotExist(false);
      }
    } else {
      setIsSlotExist(false);
    }
  }, [slotsByService]);

  // calender
  const calenderDates = slotsByService?.data?.map((info: any) => {
    if (info?.date) {
      const [year, month, day] = info.date.split("-").map(Number);
      return new Date(year, month - 1, day);
    }
  });
  useEffect(() => {
    if (selectDate) {
      const year = selectDate?.getFullYear();
      const month = String(selectDate.getMonth() + 1).padStart(2, "0");
      const day = String(selectDate.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      setChooseDate(formattedDate);
    }
  }, [selectDate]);

  // get filter data from the utility
  const filterObj = filterFun({
    serviceId: serviceData?._id,
    slotDate: chooseDate,
  });
  // get all data by using filter data
  const { data: allSlots, isLoading: isGetAllSlot } = useGetAllSlotQuery(
    filterObj,
    { skip: Object.keys(filterObj).length !== 2 }
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/booking`, { state: { chooseSlot, serviceData, allSlots } });
  };

  if (isLoading || isGetAllSlot) {
    return <Loading />;
  }
  return (
    <div className="pt-10 lg:pt-32 min-h-[67vh]">
      <div className="container mx-auto p-4 lg:p-10 shadow-lg">
        <section className="h-full lg:h-[500px] mb-10">
          <img
            src={serviceData?.image ? serviceData?.image : defaultImg}
            alt="service"
            className=" w-full h-full object-cover object-center rounded-lg"
          />
        </section>
        <section>
          <p className="font-bold text-xl sm:text-2xl mb-3">
            {serviceData?.name}
          </p>
          <p className="text-sm sm:text-base mb-3">
            {serviceData?.description}
          </p>
          <p className="text-sm sm:text-base mb-3 flex items-center gap-1">
            <span>Service cost:</span>{" "}
            <span className="font-bold">${serviceData?.price}</span>
          </p>
          <p className="text-sm sm:text-base flex items-center gap-1 mb-3">
            <span>Duration: </span>
            <FaRegClock />
            <span className="font-bold">
              {convertToHoursAndMinutes(serviceData?.duration)}
            </span>
          </p>
          {user?.role === "user" &&
            slotsByService?.data?.length && isSlotExist && (
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-[322px_auto] gap-5 w-full lg:w-3/4 xl:w-2/4">
                  <DayPicker
                    mode="single"
                    captionLayout="dropdown"
                    selected={selectDate}
                    onSelect={(data) => {
                      if (data) {
                        setSelectDate(data);
                      }
                    }}
                    disabled={{
                      before: new Date(),
                    }}
                    modifiers={{
                      selectable: calenderDates,
                    }}
                    modifiersClassNames={{
                      selectable: "selectable-day",
                    }}
                  />
                  <select
                    className="border border-gray-300 h-9 px-2 py-1 text-sm rounded-sm"
                    onChange={(e) => setChooseSlot(e.target.value)}
                    disabled={!allSlots?.data?.length}
                  >
                    <option value="">Select slot</option>
                    {allSlots?.data?.map((option: any) => (
                      <option
                        key={option?._id}
                        value={option?._id}
                        disabled={option?.isBooked !== "available"}
                      >
                        {option?.startTime} - {option?.endTime}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-8">
                  <Button
                    type="submit"
                    className="bg-red-300 text-gray-900 h-fit text-sm py-2 px-2 rounded transition-all duration-300 hover:bg-red-400 flex items-center gap-1"
                    disabled={chooseSlot ? false : true}
                  >
                    <span className="text-lg">
                      <MdBookmarkAdded />
                    </span>
                    Book Service
                  </Button>
                </div>
              </form>
            )}
          {(user?.role === "user" && !slotsByService?.data?.length) || (user?.role === "user" && !isSlotExist) && (
            <div className="pt-4">
              <p className="text-2xl text-gray-300 font-medium">
                No slot is available for this service
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;
