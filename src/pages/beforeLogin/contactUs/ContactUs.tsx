import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import { toast } from "sonner";
const ContactUs = () => {
  const [changeEmail, setChangeEmail] = useState("");
  const [changeMessage, setChangeMessage] = useState("");
  return (
    <div className="container mx-auto px-4 lg:px-10 pt-20 lg:pt-32 min-h-[67vh]">
      <div className="w-full lg:w-8/12 mx-auto shadow-lg rounded-md border-t-4 border-gray-900 p-6 lg:p-10 bg-[#ffffff] contact-us-background">
        <div className="flex flex-col md:flex-row gap-x-5 lg:gap-x-10 gap-y-8">
          <div className="text-gray-900">
            <p className="font-bold text-lg">Dhaka Car Wash</p>
            <p className="flex items-center gap-2">
              <span>
                <MdOutlineMail />
              </span>
              <span>contact@dhaka-car-wash.com</span>
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
            target="_blank"
            action="https://formsubmit.co/www.raianshahrear10@gmail.com"
            method="POST"
            className="flex-1 md:border-l border-gray-300 md:pl-5 lg:pl-10"
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
                onChange={(e) => setChangeEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Write here..."
                className="border rou rounded text-sm p-2 w-full"
                onChange={(e) => setChangeMessage(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="h-fit p-2"
              onClick={() => toast.success("Message has been sent.")}
              disabled={changeEmail && changeMessage ? false : true}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-8/12 mx-auto mt-6 shadow-lg rounded-md p-6 lg:p-10 bg-[#ffffff]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173.9652567651983!2d4.845586469253307!3d45.76228925250189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea5f4a691e2b%3A0x82ee6479be13da2b!2s63%20Av.%20Mar%C3%A9chal%20de%20Saxe%2C%2069003%20Lyon%2C%20France!5e0!3m2!1sen!2sbd!4v1733142071580!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[300]"
        ></iframe>
        <p className="mt-4 text-sm font-medium text-center">
          63 Av. Maréchal de Saxe, 69003 Lyon, France
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
