import PastBooking from "./PastBooking";
import UpcomingBooking from "./UpcomingBooking";

const MyBookings = () => {
    return (
        <div>
            <UpcomingBooking />
            <PastBooking />
        </div>
    );
};

export default MyBookings;