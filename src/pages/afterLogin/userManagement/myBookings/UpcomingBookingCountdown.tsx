import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

const UpcomingBookingCountdown = ({ bookings }: { bookings: any }) => {
  const { user } = useAppSelector((state) => state.auth);
  const [nearestSlot, setNearestSlot] = useState<any>(null);
  const [countdown, setCountdown] = useState("");
  const [showCountdown, setShowCountdown] = useState(true);

  // check upcoming booking
  useEffect(() => {
    if (bookings && bookings.data.length > 0) {
      // Sort bookings to find the nearest one
      const upcomingBookings = bookings.data.filter(
        (booking: any) => !booking.isExpired
      );

      if (upcomingBookings.length > 0) {
        upcomingBookings.sort((a: any, b: any) => {
          const dateA = new Date(`${a.slot.date}T${a.slot.startTime}`);
          const dateB = new Date(`${b.slot.date}T${b.slot.startTime}`);
          return dateA.getTime() - dateB.getTime();
        });

        setNearestSlot(upcomingBookings[0]);
      }
    }
  }, [bookings]);

  // check booking slot to create counter
  useEffect(() => {
    if (nearestSlot) {
      const targetDate = new Date(
        `${nearestSlot.slot.date}T${nearestSlot.slot.startTime}`
      ).getTime();

      const updateCountdown = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          // Construct the countdown
          let countdownString = "";
          if (days > 0) countdownString += `${days}d:`;
          if (hours > 0 || days > 0) countdownString += `${hours}h:`;
          if (minutes > 0 || hours > 0 || days > 0)
            countdownString += `${minutes}m:`;
          countdownString += `${seconds}s`;

          setCountdown(countdownString);
        } else {
          // Stop the countdown when it reaches zero
          setCountdown("00d:00h:00m:00s");
          setShowCountdown(false);
          clearInterval(interval);
        }
      };

      // Update the countdown every second
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    }
  }, [nearestSlot]);

  return (
    <>
      {user?.role === "user" && showCountdown && nearestSlot && (
        <div className="md:hidden flex flex-col text-center gap-[1px] bg-gray-900 text-white p-4 rounded-lg mb-10">
          <span className="text-sm mb-2">
            Upcoming slot for :{" "}
            <span className="font-medium">{nearestSlot.service.name}</span>
          </span>
          <span className="text-lg font-semibold">{countdown}</span>
        </div>
      )}
    </>
  );
};

export default UpcomingBookingCountdown;
