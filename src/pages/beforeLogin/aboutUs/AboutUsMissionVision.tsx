import { GoGoal } from "react-icons/go";
import { BiWorld } from "react-icons/bi";

const AboutUsMissionVision = () => {
  return (
    <section className="grid md:grid-cols-2 items-center gap-x-10 gap-y-6 pt-10 mb-10">
      <div className="text-center bg-gray-900 rounded-md p-5 shadow-lg h-full">
        <span className="bg-red-300 inline-block text-gray-900 p-2 text-5xl rounded-full shadow-lg shadow-gray-900 mb-2 md:mt-[-50px]">
          <GoGoal />
        </span>
        <h2 className="text-2xl font-bold text-white mb-4">Mission</h2>
        <p className="text-gray-300 text-sm">
          At Dhaka Car Wash, our mission is to redefine vehicle care by
          delivering exceptional services that go beyond cleaning. We strive to
          provide a seamless, satisfying experience, ensuring every car receives
          the attention it deserves. Our focus on innovation, precision, and
          eco-conscious practices reflects our commitment to serving customers
          with the highest standards. By incorporating advanced technology and
          sustainable solutions, we aim to protect not only your vehicle but
          also the environment. For us, every car is a canvas, and our mission
          is to make it shine with excellence and care.
        </p>
      </div>
      <div className="text-center bg-gray-900 rounded-md p-5 shadow-lg h-full">
        <div className="bg-red-300 inline-block text-gray-900 p-2 text-5xl rounded-full shadow-lg shadow-gray-900 mb-2 md:mt-[-50px]">
          <BiWorld />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Vision</h2>
        <p className="text-gray-300 text-sm">
          Our vision is to be the premier car wash and detailing service, known
          for setting industry benchmarks in quality and sustainability. We
          envision a future where vehicle maintenance is synonymous with
          environmental responsibility, where our practices inspire others to
          adopt greener approaches. Through continuous improvement, customer
          engagement, and community support, we aim to expand our footprint and
          bring our services to more regions. At Dhaka Car Wash, our vision
          extends beyond clean cars—it’s about fostering trust, ensuring
          satisfaction, and leading a movement that prioritizes both your
          vehicle’s beauty and the planet’s well-being. Together, we drive
          toward a brighter, cleaner tomorrow.
        </p>
      </div>
    </section>
  );
};

export default AboutUsMissionVision;
