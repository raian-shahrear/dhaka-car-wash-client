import reviewBanner from "@/assets/home/home-review.jpg";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import { FaStar } from "react-icons/fa";
import HomeAddReviewModal from "./HomeAddReviewModal";
import { Link } from "react-router-dom";
import { TUser } from "@/types";
import { useGetAllReviewsQuery } from "@/redux/api/reviewApi";
import Loading from "@/utils/Loading";
import { filterFun } from "@/utils/filter";

const swiperSlideBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 50,
  },
};

type TUserProps = {
  user: TUser;
};

const HomeReview = ({ user }: TUserProps) => {
  const filterObj = filterFun({
    dataLimit: 3,
  });
  const { data: allReviews, isLoading } = useGetAllReviewsQuery(filterObj);

  if (isLoading) {
    <div className="relative h-64">
      <Loading />
    </div>;
  }

  return (
    <section className="pt-10 mb-10">
      <div className="relative">
        <img
          src={reviewBanner}
          alt="review"
          className="w-full object-cover object-center h-[900px] sm:h-[800px] md:h-[750px] 2xl:h-[700px]"
        />
        <div className="bg-feature-overlay w-full h-full absolute top-0 left-0"></div>
        <div className="w-full absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
          <div className="container mx-auto px-4 lg:px-10">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Client Review
              </h2>
              <p className="text-white text-sm sm:text-base">
                Excellent car wash service! The team was professional,
                efficient, and paid great attention to detail. My car looks
                spotless and feels brand new every time. I appreciate the
                eco-friendly approach and quality products used. Highly
                recommend this service for anyone looking for a reliable and
                thorough car wash!
              </p>
              {user?.role === "user" && <HomeAddReviewModal />}
            </div>
            {allReviews?.data?.length && (
              <>
                <Swiper
                  modules={[Pagination, A11y]}
                  spaceBetween={30}
                  breakpoints={swiperSlideBreakpoints}
                  pagination={{ clickable: true }}
                >
                  {allReviews?.data?.map((review: any) => (
                    <SwiperSlide key={review?._id}>
                      <div className="p-5 shadow-lg rounded-md mt-1 mb-12 bg-review-background">
                        <div className="flex flex-col items-center gap-5">
                          <div className="w-[80px]">
                            <img
                              src={review?.user?.profile}
                              alt="client"
                              className="w-[80px] h-[80px] rounded-full object-cover object-center border-2 border-gray-900"
                            />
                          </div>
                          <div className="flex gap-1">
                            {Array.from(
                              { length: review?.rating },
                              (_, index) => (
                                <span
                                  key={index}
                                  className="text-amber-400 text-base"
                                >
                                  <FaStar />
                                </span>
                              )
                            )}
                          </div>
                          <div className="flex-1 text-center text-white">
                            <p className="font-semibold mb-2">
                              {review?.user?.name}
                            </p>
                            <p className="text-sm">{review?.review}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="flex justify-center mt-4 sm:mt-6">
                  <Button
                    className="bg-white text-gray-900 font-medium py-2 h-fit transition-all duration-300 hover:bg-gray-200"
                    disabled={user?.userEmail ? false : true}
                  >
                    <Link to="/reviews" className="w-fit">
                      All Reviews
                    </Link>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
        {!user?.userEmail && (
          <div className="bg-review-login-overlay container h-full absolute top-0 left-2/4 -translate-x-2/4 flex flex-col justify-center items-center gap-4 p-5">
            <p className="text-gray-900 font-semibold text-lg text-center">
              If want to place your review or view all review, please login.
            </p>
            <Link to="/login">
              <Button className="text-sm font-medium py-2 h-fit">Login</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeReview;
