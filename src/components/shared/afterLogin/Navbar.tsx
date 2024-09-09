import userAvatar from "@/assets/icon/user-avatar-black.png";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = ({ setControlSidebar, controlSidebar }) => {
  return (
    <div className="h-12 border-b px-5 flex justify-between items-center">
      <div
        className="text-2xl cursor-pointer"
        onClick={() => setControlSidebar(!controlSidebar)}
      >
        <span className={`${controlSidebar ? 'hidden lg:inline-block' : 'inline-block lg:hidden'}`}>
          <RiMenuUnfoldFill />
        </span>
        <span className={`${controlSidebar ? 'inline-block lg:hidden' : 'hidden lg:inline-block'}`}>
          <RiMenuFoldFill />
        </span>
      </div>
      <Link to="user-management" className="cursor-pointer flex items-center gap-2">
        <img
          src={userAvatar}
          alt="user"
          className="w-8 h-8 rounded-full border-2"
        />
        <div className="flex flex-col gap-[2px] max-w-28">
          <p className="text-xs font-semibold text-ellipsis whitespace-nowrap overflow-hidden">Golzer M. Chowdhury</p>
          <p className="text-xs font-medium">Admin</p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
