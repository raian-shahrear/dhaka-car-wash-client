import { useState } from "react";
import NavbarItems from "./NavbarItems";
import logo from "@/assets/logo/logo.png";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-900 lg:fixed lg:w-full lg:z-10">
      <div className="container mx-auto px-4 lg:px-10 xxl:px-0 py-3">
        <div className="relative flex items-center justify-between">
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
          <ul className="items-center hidden space-x-8 lg:flex">
            <NavbarItems />
          </ul>
          <div className="lg:hidden">
            <div className="flex gap-4 items-center">
              <div>
                <Link
                  to="/cart"
                  aria-label="Cart"
                  title="Cart"
                  className="font-medium tracking-wide text-red-300 transition-all duration-300 hover:text-secondary relative"
                >
                  <span className="text-xl">
                    <IoIosCart />
                  </span>
                  <span className="bg-red-700 w-[19px] h-[19px] text-[9px] text-white flex justify-center items-center rounded-full absolute top-[-10px] right-[-8px]">
                    {/* {orderedProducts?.length ? orderedProducts?.length > 99 ? '99+' : orderedProducts?.length : 0} */}
                    0
                  </span>
                </Link>
              </div>
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-50" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
            </div>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Thunder Fitness"
                        title="Thunder Fitness"
                        className="inline-flex items-center"
                      >
                        <span className="text-lg md:text-xl font-bold tracking-wide text-gray-900 uppercase">
                          <span className="text-red-700">Dhaka</span> Car Wash
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <NavbarItems />
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
