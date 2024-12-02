import Lottie from "lottie-react";
import carWashAnim from "@/assets/about/lottie_animation/car-wash-anim.json";

const AboutUsHero = () => {
  return (
    <section className="grid md:grid-cols-2 items-center gap-x-10 gap-y-6 mb-10 md:mb-18">
      <div className="h-full bg-gray-100 rounded-md md:rounded-none md:rounded-tl-[100px] md:rounded-br-[100px] p-3">
        <Lottie animationData={carWashAnim} loop={true} className="h-full" />
      </div>
      <div className="text-center md:text-start">
        <h1 className="text-gray-900 text-2xl lg:text-3xl font-bold">
          About Us
        </h1>
        <p className="mt-4 text-gray-600">
          Welcome to Dhaka Car Wash, where we bring vehicles back to their best
          with exceptional car care services. Starting over a decade ago as a
          small facility in Dhaka, our mission has always been to combine
          quality, innovation, and customer satisfaction. From using
          cutting-edge techniques to employing eco-friendly practices, we’ve
          grown into a trusted name in the industry, serving thousands of loyal
          customers who value our dedication and attention to detail.
        </p>
        <p className="mt-3 text-gray-600">
          At Dhaka Car Wash, we take pride in our journey from a dream to a
          leading center for car washing and detailing. Our services, from
          advanced steam cleaning to hand-polished detailing, are designed to
          keep your car looking and feeling new. Committed to sustainability, we
          use water-saving methods and biodegradable products, ensuring care for
          both your vehicle and the environment. We are here to deliver
          excellence every time you visit.
        </p>
      </div>
    </section>
  );
};

export default AboutUsHero;
