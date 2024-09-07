import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BookingSuccessful = () => {
  return (
    <div className="container mx-auto px-4 lg:px-10 xxl:px-0 lg:pt-[74px] min-h-[67vh] flex justify-center items-center">
      <div className="w-full mt-10">
        <div className="w-full md:w-8/12 lg:w-6/12 mx-auto p-5 md:p-8 shadow-lg rounded-md text-center bg-gray-900 text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Congratulation!</h2>
          <p className="text-sm md:text-lg font-semibold">
            Your service has been booked successfully.
          </p>
          <div className="mt-10">
            <Link to="/">
              <Button className="bg-red-300 text-gray-900 h-fit py-2 px-2 rounded transition-all duration-300 hover:bg-red-300 hover:text-gray-900">
                Back to home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccessful;
