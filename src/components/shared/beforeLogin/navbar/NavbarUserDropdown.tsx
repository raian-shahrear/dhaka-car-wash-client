import userAvatar from "@/assets/icon/user-avatar.png";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { useGetAllUsersQuery } from "@/redux/api/authApi";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Loading from "@/utils/Loading";
import { useEffect, useState } from "react";
import { FaUserGear } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineLogout, MdOutlineSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const NavbarUserDropdown = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { data: allUsers, isLoading: isGetUserLoading } =
    useGetAllUsersQuery(undefined);
  const loggedInUser = allUsers?.data?.find(
    (info: any) => info?._id === user?._id
  );
  const [preview, setPreview] = useState(userAvatar);
  useEffect(() => {
    if (loggedInUser?.profile) {
      setPreview(loggedInUser?.profile);
    }
  }, [loggedInUser]);

  const [controlDropdown, setControlDropdown] = useState(false);
  const reduxDispatch = useAppDispatch();

  const handleLogout = () => {
    reduxDispatch(logout());
  };

  if (isGetUserLoading) {
    return <Loading />;
  }
  return (
    <div className="relative">
      <div
        className="cursor-pointer"
        onClick={() => setControlDropdown(!controlDropdown)}
      >
        <img
          src={preview}
          alt="user"
          className="w-8 h-8 rounded-full border-2 object-cover object-center"
        />
      </div>
      <div
        className={`absolute top-9 right-0 bg-white rounded-lg shadow-xl w-60 z-10 ${
          controlDropdown ? "block" : "hidden"
        }`}
      >
        <div className="p-3 relative">
          <div className="w-44">
            <p className="text-sm font-semibold">{loggedInUser?.name}</p>
            <p
              className="text-xs text-ellipsis overflow-hidden"
              title={loggedInUser?.email}
            >
              {loggedInUser?.email}
            </p>
          </div>
          <span
            className="absolute top-2 right-4 cursor-pointer"
            onClick={() => setControlDropdown(false)}
          >
            <IoCloseSharp />
          </span>
        </div>
        <DropdownMenuSeparator />
        <ul className="p-1 pt-0">
          <li onClick={() => setControlDropdown(false)}>
            <Link
              to="/dashboard/index"
              className="w-full flex items-center gap-1 p-2 cursor-pointer rounded-md transition-all duration-300 hover:bg-gray-100"
            >
              <span className="text-lg">
                <MdOutlineSpaceDashboard />
              </span>
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
          </li>
          <li onClick={() => setControlDropdown(false)}>
            <Link
              to="/dashboard/user-management"
              className="w-full flex items-center gap-1 p-2 cursor-pointer rounded-md transition-all duration-300 hover:bg-gray-100"
            >
              <span className="text-lg">
                <FaUserGear />
              </span>
              <span className="text-sm font-medium">Manage Profile</span>
            </Link>
          </li>
          <li onClick={() => setControlDropdown(false)}>
            <div
              className="w-full flex items-center gap-1 p-2 cursor-pointer rounded-md transition-all duration-300 hover:bg-gray-100"
              onClick={handleLogout}
            >
              <span className="text-lg">
                <MdOutlineLogout />
              </span>
              <span className="text-sm font-medium">Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarUserDropdown;
