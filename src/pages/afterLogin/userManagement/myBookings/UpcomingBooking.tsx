import { FaCalendarAlt, FaRegClock } from "react-icons/fa";

const UpcomingBooking = () => {
  return (
    <div className="mb-20">
      <div className="flex items-center justify-between flex-col sm:flex-row gap-2 mb-10">
        <h1 className="text-lg sm:text-xl font-bold">Upcoming Bookings</h1>
      </div>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5">
        <div className="shadow-md rounded-lg">
          <div className="h-28 bg-red-300 text-gray-900 text-xl font-bold flex justify-center items-center rounded-tl-md rounded-tr-md">
            <span>00:00:00</span>
          </div>
          <div className="p-4 text-center sm:text-start">
            <p className="text-base font-semibold mb-1">Car Disinfecting</p>
            <p className="text-sm font-semibold mb-2">$50</p>
            <p className="text-sm flex items-center justify-center sm:justify-start gap-1 mb-1">
              <span>
                <FaCalendarAlt />
              </span>
              <span>2024-07-31</span>
            </p>
            <div className="text-sm flex flex-col items-center sm:items-start gap-1 min-w-20">
              <div className="flex items-center gap-1">
                <span className="flex items-center gap-1">
                  <FaRegClock /> Start :
                </span>
                <span>12:00</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="flex items-center gap-1">
                  <FaRegClock /> End :
                </span>
                <span>13:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingBooking;
