import userAvatar from "@/assets/icon/user-avatar-black.png";
import { useGetAllUsersQuery } from "@/redux/api/authApi";
import { useGetUserUpcomingBookingsQuery } from "@/redux/api/bookingApi";
import { useAppSelector } from "@/redux/hooks";
import Loading from "@/utils/Loading";
import { useEffect, useState } from "react";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

interface NavbarProps {
  controlSidebar: boolean;
  setControlSidebar: (value: boolean) => void;
}

const Navbar = ({ setControlSidebar, controlSidebar }: NavbarProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const { data: allUsers, isLoading: isGetUserLoading } =
    useGetAllUsersQuery(undefined);
  const loggedInUser = allUsers?.data?.find(
    (info: any) => info?._id === user?._id
  );
  const { data: bookings, isLoading } =
    useGetUserUpcomingBookingsQuery(undefined);

  const [preview, setPreview] = useState(userAvatar);
  const [nearestSlot, setNearestSlot] = useState<any>(null);
  const [countdown, setCountdown] = useState("");
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    if (loggedInUser?.profile) {
      setPreview(loggedInUser?.profile);
    }
  }, [loggedInUser]);

  useEffect(() => {
    if (bookings && bookings.data.length > 0) {
      // Sort bookings to find the nearest one
      const upcomingBookings = bookings.data.filter(
        (booking: any) => !booking.isExpired
      );

      if (upcomingBookings.length > 0) {
        upcomingBookings.sort((a: any, b: any) => {
          const dateA = new Date(`${a.slot.date}T${a.slot.endTime}`);
          const dateB = new Date(`${b.slot.date}T${b.slot.endTime}`);
          return dateA.getTime() - dateB.getTime();
        });

        setNearestSlot(upcomingBookings[0]);
      }
    }
  }, [bookings]);

  useEffect(() => {
    if (nearestSlot) {
      const targetDate = new Date(
        `${nearestSlot.slot.date}T${nearestSlot.slot.endTime}`
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

          // Construct the countdown string dynamically
          let countdownString = "";
          if (days > 0) countdownString += `${days}d:`;
          if (hours > 0 || days > 0) countdownString += `${hours}h:`;
          if (minutes > 0 || hours > 0 || days > 0)
            countdownString += `${minutes}m:`;
          countdownString += `${seconds}s`;

          setCountdown(countdownString);
        } else {
          // Stop the countdown when it reaches zero and hide the countdown div
          setCountdown("00d:00h:00m:00s");
          setShowCountdown(false);
          clearInterval(interval);
        }
      };

      // Update the countdown every second
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [nearestSlot]);

  if (isLoading || isGetUserLoading) {
    return <Loading />;
  }

  return (
    <div className="h-12 border-b px-5 flex justify-between items-center bg-white">
      <div
        className="text-2xl cursor-pointer"
        onClick={() => setControlSidebar(!controlSidebar)}
      >
        <span
          className={`${
            controlSidebar ? "hidden lg:inline-block" : "inline-block lg:hidden"
          }`}
        >
          <RiMenuUnfoldFill />
        </span>
        <span
          className={`${
            controlSidebar ? "inline-block lg:hidden" : "hidden lg:inline-block"
          }`}
        >
          <RiMenuFoldFill />
        </span>
      </div>
      <div className="flex items-center gap-10">
        {user?.role === "user" && showCountdown && nearestSlot && (
          <div className="hidden md:flex flex-col text-center gap-[1px]">
            <span className="text-xs">
              Upcoming :{" "}
              <span className="font-medium">{nearestSlot.service.name}</span>
            </span>
            <span className="text-sm font-semibold">{countdown}</span>
          </div>
        )}
        <Link
          to="user-management"
          className="cursor-pointer flex items-center gap-2"
        >
          <img
            src={preview}
            alt="user"
            className="w-8 h-8 rounded-full border-2 object-cover object-center"
          />
          <div className="flex flex-col gap-[2px] max-w-28">
            <p className="text-xs font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
              {loggedInUser?.name}
            </p>
            {loggedInUser?.role === "admin" && (
              <p className="text-xs font-medium">Admin</p>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
