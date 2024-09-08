import clientImg1 from "@/assets/home/client/Jhon.jpg";
import clientImg2 from "@/assets/home/client/Sam.jpg";
import clientImg3 from "@/assets/home/client/Toya.jpg";
import { FaStar } from "react-icons/fa";

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

const Reviews = () => {
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
          {clientReviews?.map((review) => (
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
                    <span key={index} className="text-amber-400 text-base">
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
