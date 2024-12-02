import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import NavbarUserDropdown from "./NavbarUserDropdown";
import { useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { TUser } from "@/types";

const NavbarItems = () => {
  const { token } = useAppSelector((state) => state.auth);
  let user;
  if (token) {
    user = verifyToken(token);
  }
  return (
    <>
      <li>
        <NavLink
          to="/"
          aria-label="Home"
          title="Home"
          className={({ isActive }) =>
            isActive
              ? "text-sm font-medium tracking-wide text-gray-900 lg:text-white transition-all duration-300 lg:hover:text-white"
              : "text-sm font-medium tracking-wide text-gray-500 lg:text-gray-400 transition-all duration-300 lg:hover:text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          aria-label="Services"
          title="Services"
          className={({ isActive }) =>
            isActive
              ? "text-sm font-medium tracking-wide text-gray-900 lg:text-white transition-all duration-300 lg:hover:text-white"
              : "text-sm font-medium tracking-wide text-gray-500 lg:text-gray-400 transition-all duration-300 lg:hover:text-white"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service-comparison"
          aria-label="Comparison"
          title="Comparison"
          className={({ isActive }) =>
            isActive
              ? "text-sm font-medium tracking-wide text-gray-900 lg:text-white transition-all duration-300 lg:hover:text-white"
              : "text-sm font-medium tracking-wide text-gray-500 lg:text-gray-400 transition-all duration-300 lg:hover:text-white"
          }
        >
          Comparison
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          aria-label="Blogs"
          title="Blogs"
          className={({ isActive }) =>
            isActive
              ? "text-sm font-medium tracking-wide text-gray-900 lg:text-white transition-all duration-300 lg:hover:text-white"
              : "text-sm font-medium tracking-wide text-gray-500 lg:text-gray-400 transition-all duration-300 lg:hover:text-white"
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          aria-label="About Us"
          title="About Us"
          className={({ isActive }) =>
            isActive
              ? "text-sm font-medium tracking-wide text-gray-900 lg:text-white transition-all duration-300 lg:hover:text-white"
              : "text-sm font-medium tracking-wide text-gray-500 lg:text-gray-400 transition-all duration-300 lg:hover:text-white"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          aria-label="Contact Us"
          title="Contact Us"
          className={({ isActive }) =>
            isActive
              ? "text-sm font-medium tracking-wide text-gray-900 lg:text-white transition-all duration-300 lg:hover:text-white"
              : "text-sm font-medium tracking-wide text-gray-500 lg:text-gray-400 transition-all duration-300 lg:hover:text-white"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li className="flex items-center gap-2 relative">
        {(user as TUser)?.userEmail ? (
          <div className="hidden lg:block">
            <NavbarUserDropdown />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button className="text-xs bg-red-300 text-gray-900 font-medium p-1 h-fit transition-all duration-300 hover:bg-red-400">
                Login
              </Button>
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/signup">
              <Button className="text-xs bg-gray-900 text-white lg:bg-white lg:text-gray-900 font-medium p-1 h-fit transition-all duration-300 hover:bg-gray-900 lg:hover:bg-white">
                Sign up
              </Button>
            </Link>
          </div>
        )}
      </li>
    </>
  );
};

export default NavbarItems;
