import { useGetAllReviewsQuery } from "@/redux/api/reviewApi";
import Loading from "@/utils/Loading";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const { data: allReviews, isLoading } = useGetAllReviewsQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto px-4 lg:px-10 pt-20 lg:pt-32 min-h-[67vh]">
      <section>
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Client Review
          </h2>
          <p className="text-gray-900 text-sm sm:text-base">
            Excellent car wash service! The team was professional, efficient,
            and paid great attention to detail. My car looks spotless and feels
            brand new every time. I appreciate the eco-friendly approach and
            quality products used. Highly recommend this service for anyone
            looking for a reliable and thorough car wash!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {allReviews?.data?.map((review: any) => (
            <div
              key={review?._id}
              className="p-5 shadow-lg rounded-md mt-1 mb-12 bg-review-background"
            >
              <div className="flex flex-col items-center gap-5">
                <div className="w-[80px]">
                  <img
                    src={review?.user?.profile}
                    alt="client"
                    className="w-[80px] h-[80px] rounded-full object-cover object-center border-2 border-gray-900"
                  />
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: review?.rating }, (_, index) => (
                    <span key={index} className="text-amber-400 text-base">
                      <FaStar />
                    </span>
                  ))}
                </div>
                <div className="flex-1 text-center text-white">
                  <p className="font-semibold mb-2">{review?.user?.name}</p>
                  <p className="text-sm">{review?.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
