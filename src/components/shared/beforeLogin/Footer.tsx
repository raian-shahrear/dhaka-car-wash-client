import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "@/assets/logo/logo.png";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 pt-6 text-white">
      <div className="container mx-auto px-4 lg:px-10 xxl:px-0 py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10">
          <div>
            <a
              href="/"
              aria-label="Dhaka Car Wash"
              title="Dhaka Car Wash"
              className="inline-flex items-center gap-2"
            >
              <img src={logo} alt="logo" width="50px" />
              <span className="text-lg md:text-xl font-bold tracking-wide flex flex-col">
                <span className="uppercase text-red-300 -mb-[2px]">Dhaka</span>
                <span className="text-xs font-medium text-white">Car Wash</span>
              </span>
            </a>
            <p className="mt-3 text-sm">
              From Road Dust to Showroom Shine - Experience the Ultimate Car
              Wash That Cleans, Protects, and Transforms Your Ride with Every
              Visit!
            </p>
          </div>
          <div>
            <p className="text-lg mb-3 font-semibold">Quick Links</p>
            <nav className="lg:flex gap-16">
              <ul className="flex flex-col gap-y-1">
                <li>
                  <Link
                    to="/"
                    className="text-sm transition-all duration-300 hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-sm transition-all duration-300 hover:underline"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-comparison"
                    className="text-sm transition-all duration-300 hover:underline"
                  >
                    Comparison
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reviews"
                    className="text-sm transition-all duration-300 hover:underline"
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-y-1">
                <li>
                  <Link
                    to="/blogs"
                    className="text-sm transition-all duration-300 hover:underline"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="text-sm transition-all duration-300 hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="text-sm transition-all duration-300 hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <p className="text-lg mb-3 font-semibold">Contact Us</p>
            <div>
              <p className="flex items-center gap-2">
                <span>
                  <MdOutlineMail />
                </span>
                <span className="text-sm">contact@dhaka-car-wash.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <HiOutlinePhone />
                </span>
                <span className="text-sm">+01293474032</span>
              </p>
              <div className="mt-4">
                <p className="font-semibold mb-2">Social</p>
                <div className="flex items-center gap-3">
                  <a
                    href="/"
                    target="_blank"
                    className="text-white transition-all duration-300 hover:text-blue-600"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="text-white transition-all duration-300 hover:text-fuchsia-600"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="text-white transition-all duration-300 hover:text-red-600"
                  >
                    <FaPinterestP />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="text-white transition-all duration-300 hover:text-violet-600"
                  >
                    <FaTiktok />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="text-white transition-all duration-300 hover:text-cyan-600"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-6 mt-10">
        <p className="text-gray-400 text-xs">
          Copyright &copy; {new Date().getFullYear()}, Dhaka Car Wash
        </p>
      </div>
    </footer>
  );
};

export default Footer;
