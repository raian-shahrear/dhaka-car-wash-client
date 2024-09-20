import { useGetUserUpcomingBookingsQuery } from "@/redux/api/bookingApi";
import Loading from "@/utils/Loading";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";
import { calculateTimeLeft, formatTimeLeft, TimeLeft } from "./myBooking.utils";
import UpcomingBookingCountdown from "./UpcomingBookingCountdown";

const UpcomingBooking = () => {
  const { data: bookings, isLoading } =
    useGetUserUpcomingBookingsQuery(undefined);
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: TimeLeft }>({});

  // check booking and set counter
  useEffect(() => {
    if (bookings?.data) {
      const timers: any = {}; // To hold timers for each booking

      bookings.data.forEach((booking: any) => {
        const { date, startTime } = booking.slot;

        // Set interval for each booking
        timers[booking._id] = setInterval(() => {
          const updatedTimeLeft = calculateTimeLeft(date, startTime);

          setTimeLeft((prevTimeLeft: any) => ({
            ...prevTimeLeft,
            [booking._id]: updatedTimeLeft,
          }));

          // Stop the timer if time has run out
          if (
            updatedTimeLeft.days === 0 &&
            updatedTimeLeft.hours === 0 &&
            updatedTimeLeft.minutes === 0 &&
            updatedTimeLeft.seconds === 0
          ) {
            clearInterval(timers[booking._id]);
          }
        }, 1000);
      });

      // Cleanup intervals
      return () => {
        Object.keys(timers).forEach((id) => clearInterval(timers[id]));
      };
    }
  }, [bookings]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mb-20">
      <UpcomingBookingCountdown bookings={bookings} />

      <div className="flex items-center justify-between flex-col sm:flex-row gap-2 mb-10">
        <h1 className="text-lg sm:text-xl font-bold">Upcoming Bookings</h1>
      </div>
      {bookings?.data?.length ? (
        <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
          {bookings?.data?.map((booking: any) => (
            <div key={booking?._id} className="shadow-md rounded-lg">
              <div className="h-28 bg-red-300 text-gray-900 text-lg xl:text-xl font-bold flex justify-center items-center rounded-tl-md rounded-tr-md">
                <span>
                  {formatTimeLeft(
                    timeLeft[booking._id] || {
                      days: 0,
                      hours: 0,
                      minutes: 0,
                      seconds: 0,
                    }
                  )}
                </span>
              </div>
              <div className="p-4 text-center sm:text-start">
                <p className="text-base font-semibold mb-1">
                  {booking?.service?.name}
                </p>
                <p className="text-sm font-semibold mb-2">
                  ৳{booking?.service?.price}
                </p>
                <p className="text-sm flex items-center justify-center sm:justify-start gap-1 mb-1">
                  <span>
                    <FaCalendarAlt />
                  </span>
                  <span>{booking?.slot?.date}</span>
                </p>
                <div className="text-sm flex flex-col items-center sm:items-start gap-1 min-w-20">
                  <div className="flex items-center gap-1">
                    <span className="flex items-center gap-1">
                      <FaRegClock /> Start :
                    </span>
                    <span>{booking?.slot?.startTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="flex items-center gap-1">
                      <FaRegClock /> End :
                    </span>
                    <span>{booking?.slot?.endTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <div className="flex items-center h-[10vh]">
          <p className="text-xl sm:text-2xl text-gray-300 font-medium">
            No upcoming data found
          </p>
        </div>
      )}
    </div>
  );
};

export default UpcomingBooking;
