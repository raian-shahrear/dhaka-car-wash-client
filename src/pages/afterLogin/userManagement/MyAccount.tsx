import defaultImg from "@/assets/icon/user-avatar-black.png";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import { FormEvent, useState } from "react";
import { FaEdit, FaUserEdit } from "react-icons/fa";

const MyAccount = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [preview, setPreview] = useState(user?.profile ? user?.profile : defaultImg);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const profileInput = form.elements.namedItem("profileImg") as HTMLInputElement;
    const profileFile = profileInput.files && profileInput.files[0];

    const updateUser = {
      name: (form.elements.namedItem("name") as HTMLInputElement)
      .value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement)
      .value,
      profile: profileFile || user?.profile,
      address: (form.elements.namedItem("address") as HTMLInputElement)
      .value
    };
    console.log(updateUser);
  };

  // Update the preview image when a new file is selected
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); 
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between flex-col sm:flex-row gap-2 mb-10">
        <h1 className="text-lg sm:text-xl font-bold">My Account</h1>
      </div>
      <section className="p-5 shadow-lg rounded-lg border-t-4 w-full md:w-8/12 lg:w-6/12">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="file"
              name="profileImg"
              id="profileImg"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="profileImg"
              className="inline-block relative cursor-pointer"
            >
              <img
                src={preview}
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
                defaultValue={user?.name}
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
                defaultValue={user?.email}
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
                defaultValue={user?.phone}
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Address
              </label>
              <textarea
                name="address"
                defaultValue={user?.address}
                className="border border-gray-300 w-full min-h-20 px-2 py-1 text-sm rounded-sm"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <Button
              type="submit"
              className="text-xs h-fit p-2 flex items-center gap-1"
            >
              <span className="text-sm">
                <FaUserEdit />
              </span>
              <span>Update</span>
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default MyAccount;
