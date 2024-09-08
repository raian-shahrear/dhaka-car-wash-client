import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import NavbarUserDropdown from "./NavbarUserDropdown";

const NavbarItems = () => {
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
      <li className="flex items-center gap-2 relative">
        <div className="hidden lg:block">
          <NavbarUserDropdown />
        </div>
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
      </li>
    </>
  );
};

export default NavbarItems;
