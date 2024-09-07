import { Button } from "@/components/ui/button";
import { IoIosCart } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

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
      <li className="hidden lg:block">
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
      </li>
      <li>
        <Link to="/login">
          <Button className="text-sm bg-red-300 text-gray-900 font-medium py-2 h-fit transition-all duration-300 hover:bg-red-400">Login</Button>
        </Link>
        <Button className="text-sm bg-gray-900 text-white lg:bg-white lg:text-gray-900 font-medium py-2 h-fit transition-all duration-300 hover:bg-gray-900 lg:hover:bg-white">Sign up</Button>
      </li>
    </>
  );
};

export default NavbarItems;
