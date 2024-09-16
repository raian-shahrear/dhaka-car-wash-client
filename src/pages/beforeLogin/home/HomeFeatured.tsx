import defaultImg from "@/assets/icon/default_image.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { useGetFeaturedServicesQuery } from "@/redux/api/serviceApi";
import Loading from "@/utils/Loading";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HomeFeatured = () => {
  const navigate = useNavigate();
  const { data: services, isLoading } = useGetFeaturedServicesQuery(undefined);

  const handleRoute = (data: any)=>{
    navigate(`/services/${data?._id}`, { state: data });
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="container mx-auto px-4 lg:px-10 pt-10 mb-10">
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
          Our Best Services
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Experience a top-quality car wash service that combines advanced
          cleaning technology with professional care. We offer a range of
          services, from quick washes to deep detailing, ensuring your vehicle
          looks spotless and shiny inside and out. Fast, convenient, and
          environmentally friendly—drive in for a sparkling clean car every
          time!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services?.data?.map((service: any) => (
          <div
            key={service?._id}
            className="relative rounded-md transition-all duration-300 hover:shadow-xl h-full"
          >
            <img
              src={service?.image ? service?.image : defaultImg}
              alt="feature"
              className="w-full h-[300px] sm:h-[250px] md:h-auto lg:h-[300px] 2xl:h-auto rounded-md object-cover object-center"
            />
            <div className="bg-feature-overlay w-full h-full absolute top-0 left-0 rounded-md"></div>
            <div className="w-full absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
              <div className="text-center p-10 lg:p-5 xl:p-10">
                <p className="text-xl font-semibold text-red-300">
                  {service?.name}
                </p>
                <p className="mt-6 text-sm text-white">
                  {service?.description?.length > 80
                    ? service?.description.slice(0, 79) + "..."
                    : service?.description}
                </p>
                <div className="flex justify-center items-center mt-8">
                  <Button type="button" onClick={()=>handleRoute(service)}  className="bg-transparent p-0 h-fit w-fit text-white text-xs flex items-center gap-1 transition-all duration-300 hover:gap-2 hover:bg-transparent">
                    <span>View Details</span>
                    <IoIosArrowForward />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeFeatured;
