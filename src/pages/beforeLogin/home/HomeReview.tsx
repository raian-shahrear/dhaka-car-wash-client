import reviewBanner from "@/assets/home/home-review.jpg";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import clientImg1 from "@/assets/home/client/Jhon.jpg";
import clientImg2 from "@/assets/home/client/Sam.jpg";
import clientImg3 from "@/assets/home/client/Toya.jpg";
import { FaStar } from "react-icons/fa";
import HomeAddReviewModal from "./HomeAddReviewModal";
import { Link } from "react-router-dom";

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

const clientReviews = [
  {
    _id: "01",
    img: clientImg1,
    name: "Jhon Killer",
    rating: 3,
    review:
      "Fantastic service! My car has never looked this clean. The staff was friendly, and they took great care to make sure every detail was perfect. I’ll definitely be coming back regularly. Highly recommended!",
  },
  {
    _id: "02",
    img: clientImg2,
    name: "Sam Board",
    rating: 5,
    review:
      "I’m extremely impressed with the quality and speed of this car wash. They managed to make my car look like it just came off the showroom floor. The team was professional, and the eco-friendly products were a big plus for me!",
  },
  {
    _id: "03",
    img: clientImg3,
    name: "Toya Lopez",
    rating: 4,
    review:
      "Top-notch car wash service! The attention to detail was amazing, and they didn’t miss a spot. Great customer service, and I love that they use eco-friendly products. My car always looks pristine when I leave!",
  },
];

const HomeReview = () => {
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
              <HomeAddReviewModal />
            </div>
            <Swiper
              modules={[Pagination, A11y]}
              spaceBetween={30}
              breakpoints={swiperSlideBreakpoints}
              pagination={{ clickable: true }}
            >
              {clientReviews?.map((review) => (
                <SwiperSlide key={review?._id}>
                  <div className="p-5 shadow-lg rounded-md mt-1 mb-12 bg-review-background">
                    <div className="flex flex-col items-center gap-5">
                      <div className="w-[80px]">
                        <img
                          src={review?.img}
                          alt="client"
                          className="w-[80px] h-[80px] rounded-full object-cover object-center border-2 border-gray-900"
                        />
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: review?.rating }, (_, index) => (
                          <span
                            key={index}
                            className="text-amber-400 text-base"
                          >
                            <FaStar />
                          </span>
                        ))}
                      </div>
                      <div className="flex-1 text-center text-white">
                        <p className="font-semibold mb-2">{review?.name}</p>
                        <p className="text-sm">{review?.review}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center mt-4 sm:mt-6">
              <Link to="/reviews" className="w-fit">
                <Button
                  className="bg-white text-gray-900 font-medium py-2 h-fit transition-all duration-300 hover:bg-gray-200"
                  disabled={false}
                >
                  All Reviews
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="bg-review-login-overlay container h-full absolute top-0 left-2/4 -translate-x-2/4 flex flex-col justify-center items-center gap-4 p-5">
              <p className="text-gray-900 font-semibold text-lg text-center">If want to place your review or view all review, please login.</p>
              <Link to="/">
                <Button className="text-sm font-medium py-2 h-fit">Login</Button>
              </Link>
        </div> */}
      </div>
    </section>
  );
};

export default HomeReview;
