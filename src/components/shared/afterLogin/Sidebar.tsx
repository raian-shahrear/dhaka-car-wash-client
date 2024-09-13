import logo from "@/assets/logo/logo.png";
import { Button } from "@/components/ui/button";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TUser } from "@/types";
import { verifyToken } from "@/utils/verifyToken";
import { FaCar, FaRegCircle } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import {
  MdOutlineClose,
  MdOutlineLogout,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ setControlSidebar, controlSidebar }) => {
  const reduxDispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  let user;
  if (token) {
    user = verifyToken(token);
  }

  const handleLogout = () => {
    reduxDispatch(logout());
  };
  return (
    <aside
      className={`z-10 w-[280px] md:w-[300px] h-screen border-r bg-white absolute lg:fixed top-0 transition-all duration-300 ${
        controlSidebar ? "left-0 lg:-left-[400%]" : "-left-[400%] lg:left-0"
      }`}
    >
      <div className="px-6 pt-1 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" width="45px" />
          <span className="text-lg font-bold tracking-wide flex flex-col">
            <span className="uppercase text-red-400 -mb-[2px]">Dhaka</span>
            <span className="text-xs font-medium text-gray-900">Car Wash</span>
          </span>
        </Link>
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => setControlSidebar(false)}
        >
          <span className="text-xl">
            <MdOutlineClose />
          </span>
        </div>
      </div>
      <div className="p-3 pt-8">
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink
              to="index"
              aria-label="Dashboard"
              title="Dashboard"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 w-full text-sm font-medium tracking-wide text-gray-900 px-4 py-2 bg-gray-100 rounded-[40px] transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
                  : "flex items-center gap-2 w-full text-sm font-medium tracking-wide text-gray-500 px-4 py-2 rounded-[40px] transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
              }
            >
              <span className="text-lg">
                <MdOutlineSpaceDashboard />
              </span>
              <span>Dashboard</span>
            </NavLink>
          </li>
          {(user as TUser)?.role === "admin" && (
            <li>
              <NavLink
                to="service-management"
                aria-label="Service Management"
                title="Service Management"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 w-full text-sm font-medium tracking-wide text-gray-900 px-4 py-2 bg-gray-100 rounded-[40px] transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
                    : "flex items-center gap-2 w-full text-sm font-medium tracking-wide text-gray-500 px-4 py-2 rounded-[40px] transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
                }
              >
                <span className="text-lg">
                  <FaCar />
                </span>
                Service Management
              </NavLink>
            </li>
          )}
          {(user as TUser)?.role === "admin" && (
            <li>
              <NavLink
                to="slot-management"
                aria-label="Slot Management"
                title="Slot Management"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 w-full text-sm font-medium tracking-wide text-gray-900 px-4 py-2 bg-gray-100 rounded-[40px] transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
                    : "flex items-center gap-2 w-full text-sm font-medium tracking-wide text-gray-500 px-4 py-2 rounded-[40px] transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
                }
              >
                <span className="text-lg">
                  <FaTimeline />
                </span>
                Slot Management
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="user-management"
              aria-label="User Management"
              title="User Management"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 w-full text-sm font-medium tracking-wide text-gray-900 px-4 py-2 bg-gray-100 rounded-[40px] transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
                  : "flex items-center gap-2 w-full text-sm font-medium tracking-wide text-gray-500 px-4 py-2 rounded-[40px] transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
              }
            >
              <span className="text-lg">
                <IoMdSettings />
              </span>
              User Management
            </NavLink>
            <ul className="ms-10 mt-2 flex flex-col gap-2">
              {(user as TUser)?.role === "admin" && (
                <li>
                  <NavLink
                    to="user-management/bookings"
                    aria-label="Bookings"
                    title="Bookings"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-2 w-full text-sm font-medium tracking-wide text-gray-900 transition-all duration-300 hover:text-gray-900"
                        : "flex items-center gap-2 w-full text-sm font-medium tracking-wide text-gray-500 transition-all duration-300 hover:text-gray-900"
                    }
                  >
                    <span className="text-xs">
                      <FaRegCircle />
                    </span>
                    <span>Bookings</span>
                  </NavLink>
                </li>
              )}
              {(user as TUser)?.role === "admin" && (
                <li>
                  <NavLink
                    to="user-management/users"
                    aria-label="Users"
                    title="Users"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-2 w-full text-sm font-medium tracking-wide text-gray-900 transition-all duration-300 hover:text-gray-900"
                        : "flex items-center gap-2 w-full text-sm font-medium tracking-wide text-gray-500 transition-all duration-300 hover:text-gray-900"
                    }
                  >
                    <span className="text-xs">
                      <FaRegCircle />
                    </span>
                    <span>Users</span>
                  </NavLink>
                </li>
              )}
              {(user as TUser)?.role === "user" && (
                <li>
                  <NavLink
                    to="user-management/my-bookings"
                    aria-label="My Bookings"
                    title="My Bookings"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-2 w-full text-sm font-medium tracking-wide text-gray-900 transition-all duration-300 hover:text-gray-900"
                        : "flex items-center gap-2 w-full text-sm font-medium tracking-wide text-gray-500 transition-all duration-300 hover:text-gray-900"
                    }
                  >
                    <span className="text-xs">
                      <FaRegCircle />
                    </span>
                    <span>My Bookings</span>
                  </NavLink>
                </li>
              )}
            </ul>
          </li>
          <li>
            <Button
              onClick={handleLogout}
              aria-label="Logout"
              title="Logout"
              className="flex items-center justify-start gap-2 w-full text-sm font-medium tracking-wide text-gray-500 bg-white px-4 py-2 rounded-[40px] transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
            >
              <span className="text-lg">
                <MdOutlineLogout />
              </span>
              Logout
            </Button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
