import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { MdBookmarkAdded } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import defaultImg from "@/assets/icon/default_image.jpg";
import { convertToHoursAndMinutes } from "@/utils/convertTime";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { state: serviceData } = useLocation();
  const [chooseSlot, setChooseSlot] = useState("");

  // current date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const [selectDate, setSelectDate] = useState(formattedDate);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/booking`, { state: {chooseSlot, serviceData} });
  };
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
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-5 w-full lg:w-3/4">
              <input
                type="date"
                className="border border-gray-300 h-9 px-2 py-1 text-sm rounded-sm"
                min={selectDate}
                defaultValue={selectDate}
                onChange={(e) => setSelectDate(e.target.value)}
              />
              <select
                className="border border-gray-300 h-9 px-2 py-1 text-sm rounded-sm"
                onChange={(e) => setChooseSlot(e.target.value)}
              >
                <option value="">Select slot</option>
                <option value="01" disabled={true}>
                  12:00 - 13:00
                </option>
                <option value="02">13:00 - 14:00</option>
                <option value="03">14:00 - 15:00</option>
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
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;
