import userAvatar from "@/assets/icon/user-avatar.png";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineLogout, MdOutlineSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const NavbarUserDropdown = () => {
  const [controlDropdown, setControlDropdown] = useState(false);
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={()=>setControlDropdown(!controlDropdown)}>
        <img
          src={userAvatar}
          alt="user"
          className="w-8 h-8 rounded-full border-2"
        />
      </div>
      <div
        className={`absolute top-9 right-0 bg-white rounded-lg shadow-xl w-60 z-10 ${controlDropdown ? 'block' : 'hidden'}`}
      >
        <div className="p-3 relative">
          <div className="w-44">
            <p className="text-sm font-semibold">Golzer M. Chowdhury</p>
            <p
              className="text-xs text-ellipsis overflow-hidden"
              title="golzer@gmail.com"
            >
              golzer@gmail.com
            </p>
          </div>
          <span className="absolute top-2 right-4 cursor-pointer" onClick={()=>setControlDropdown(false)}>
            <IoCloseSharp />
          </span>
        </div>
        <DropdownMenuSeparator />
        <ul className="p-1 pt-0">
          <li onClick={()=>setControlDropdown(false)}>
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
          <li onClick={()=>setControlDropdown(false)}>
            <div className="w-full flex items-center gap-1 p-2 cursor-pointer rounded-md transition-all duration-300 hover:bg-gray-100">
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
