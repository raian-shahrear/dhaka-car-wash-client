import { Button } from "@/components/ui/button";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok, FaTwitter } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import { toast } from "sonner";

const HomeContact = () => {
  return (
    <section
      className="container mx-auto px-4 lg:px-10 pt-4 mb-10"
      data-aos="fade-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-900 mb-10">
        Contact Us
      </h2>
      <div className="w-full md:w-10/12 lg:w-7/12 mx-auto shadow-lg rounded-md border-t-4 border-gray-900 p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-x-5 lg:gap-x-10 gap-y-8">
          <div className="text-gray-900">
            <p className="font-bold text-lg">Thunder Fitness</p>
            <p className="flex items-center gap-2">
              <span>
                <MdOutlineMail />
              </span>
              <span>contact@thunder.com</span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <HiOutlinePhone />
              </span>
              <span>+01293474032</span>
            </p>
            <div className="mt-4">
              <p className="font-semibold mb-2">Social</p>
              <div className="flex items-center gap-3">
                <a
                  href="/"
                  target="_blank"
                  className="text-gray-900 transition-all duration-300 hover:text-blue-600"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="/"
                  target="_blank"
                  className="text-gray-900 transition-all duration-300 hover:text-fuchsia-600"
                >
                  <FaInstagram />
                </a>
                <a
                  href="/"
                  target="_blank"
                  className="text-gray-900 transition-all duration-300 hover:text-red-600"
                >
                  <FaPinterestP />
                </a>
                <a
                  href="/"
                  target="_blank"
                  className="text-gray-900 transition-all duration-300 hover:text-violet-600"
                >
                  <FaTiktok />
                </a>
                <a
                  href="/"
                  target="_blank"
                  className="text-gray-900 transition-all duration-300 hover:text-cyan-600"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <form
            className="flex-1 md:border-l md:pl-5 lg:pl-10"
            target="_blank"
            action="https://formsubmit.co/www.raianshahrear10@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New submission!" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Your email has been received. Thanks for reaching out to us."
            />
            <p className="font-semibold mb-2">Anything want to say?</p>
            <div className="mb-2">
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="border rou rounded text-sm p-2 w-full"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Write here..."
                className="border rou rounded text-sm p-2 w-full"
                required
              />
            </div>
            <Button
              type="submit"
              className="h-fit p-2"
              onClick={() => toast.success("Message has been sent.")}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
