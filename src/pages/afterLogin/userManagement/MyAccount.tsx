import defaultImg from "@/assets/icon/user-avatar-black.png";
import { Button } from "@/components/ui/button";
import { FaEdit, FaUserEdit } from "react-icons/fa";

const MyAccount = () => {
  return (
    <div>
      <div className="flex items-center justify-between flex-col sm:flex-row gap-2 mb-10">
        <h1 className="text-lg sm:text-xl font-bold">My Account</h1>
      </div>
      <section className="p-5 shadow-lg rounded-lg border-t-4 w-full md:w-8/12 lg:w-6/12">
        <form>
          <div className="mb-2">
            <input
              type="file"
              name="profileImg"
              id="profileImg"
              className="hidden"
            />
            <label
              htmlFor="profileImg"
              className="inline-block relative cursor-pointer"
            >
              <img
                src={defaultImg}
                alt="profile"
                className="w-16 h-16 rounded-full border-2 border-gray-300 p-1"
              />
              <span className="text-gray-900 text-lg absolute top-0 right-0 bg-white">
                <FaEdit />
              </span>
            </label>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue="Golzer M. Chowdhury"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Email
              </label>
              <input
                type="email"
                name="email"
                defaultValue="golzer@example.com"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                disabled
              />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Phone No.
              </label>
              <input
                type="text"
                name="phone"
                defaultValue="+8801643876521"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Address
              </label>
              <textarea
                name="address"
                defaultValue="30/A, Road-11, Banani, Dhaka"
                className="border border-gray-300 w-full min-h-20 px-2 py-1 text-sm rounded-sm"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <Button
              type="submit"
              className="text-xs h-fit p-2 flex items-center gap-1"
            >
              <span className="text-sm"><FaUserEdit /></span>
              <span>Update</span>
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default MyAccount;
