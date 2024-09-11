import profileImg from "@/assets/icon/user-avatar.png";
import { FaHouseUser, FaPhoneAlt, FaUserCog, FaUserEdit } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { HiUserGroup } from "react-icons/hi";
import { RiFileList3Line } from "react-icons/ri";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const role: string = "admin";

  return (
    <div>
      <h1 className="text-lg sm:text-xl font-bold">Dashboard</h1>
      <div
        className={`mt-10 grid sm:grid-cols-2 ${
          role === "admin"
            ? "lg:grid-cols-[300px_auto_auto_auto] 2xl:grid-cols-[minmax(300px,auto)_minmax(300px,auto)_minmax(300px,auto)_minmax(300px,auto)] gap-5"
            : "lg:grid-cols-[minmax(300px,auto)_minmax(300px,auto)] gap-5 lg:gap-10"
        }`}
      >
        <section className="lg:min-w-[300px] border border-gray-900 bg-gray-800 shadow-md rounded-lg">
          <div className="grid grid-cols-[auto_20px] gap-4 p-4 border-b border-gray-600">
            <div className="flex items-center gap-3">
              <img
                src={profileImg}
                alt="user"
                className="w-14 h-14 rounded-full border-2 border-red-300 p-1"
              />
              <div className="text-white max-w-[70%]">
                <p className="mb-1 text-base font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                  Golzer M. Chowdhury
                </p>
                <p className="text-xs text-ellipsis overflow-hidden whitespace-nowrap">
                  golzer@gmail.com
                </p>
              </div>
            </div>
            <div className="text-white text-xl">
              <Link to="/dashboard/user-management">
                <FaUserEdit />
              </Link>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div className="text-white text-sm grid grid-cols-[90px_auto] items-start">
              <p className="flex items-center gap-1">
                <span className="text-base">
                  <FaUserCog />
                </span>
                <span>Role :</span>
              </p>
              <p>Admin</p>
            </div>
            <div className="text-white text-sm grid grid-cols-[90px_auto] items-start">
              <p className="flex items-center gap-1">
                <span className="text-base">
                  <FaPhoneAlt />
                </span>
                <span>Phone :</span>
              </p>
              <p>+8801643876521</p>
            </div>
            <div className="text-white text-sm grid grid-cols-[90px_auto] items-start">
              <p className="flex items-center gap-1">
                <span className="text-base">
                  <FaHouseUser />
                </span>
                <span>Address :</span>
              </p>
              <p>30/A, Road-11, Banani, Dhaka</p>
            </div>
          </div>
        </section>
        {role === "admin" && (
          <section className="border border-gray-100 bg-gray-50 shadow-md px-4 py-10 rounded-lg text-center flex items-center justify-center flex-col gap-4">
            <p className="text-3xl -mb-2">
              <GrServices />
            </p>
            <p className="font-semibold text-gray-500">Total Services</p>
            <p className="text-2xl font-bold">0</p>
          </section>
        )}
        <section className="border border-red-100 bg-red-50 shadow-md px-4 py-10 rounded-lg text-center flex items-center justify-center flex-col gap-4">
          <p className="text-3xl -mb-2">
            <RiFileList3Line />
          </p>
          <p className="font-semibold text-gray-500">Total Bookings</p>
          <p className="text-2xl font-bold">0</p>
        </section>
        {role === "admin" && (
          <section className="border border-yellow-100 bg-yellow-50 shadow-md px-4 py-10 rounded-lg text-center flex items-center justify-center flex-col gap-4">
            <p className="text-3xl -mb-2">
              <HiUserGroup />
            </p>
            <p className="font-semibold text-gray-500">Total Users</p>
            <p className="text-2xl font-bold">0</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
