import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useSignUpMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import { getImageUrl } from "@/utils/getImageUrl";
import Loading from "@/utils/Loading";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm();
  const [showPass, setShowPass] = useState(false);
  // from redux to register user
  const [signUpUser, { isLoading }] = useSignUpMutation();

  const handleSignup: SubmitHandler<FieldValues> = async (data) => {
    if (isValid || !isSubmitting) {
      try {
        const imageUrl = await getImageUrl(data.profile[0]);
        // Create a new user
        const newUser = {
          name: data.name,
          email: data.email,
          password: data.password,
          phone: data.phone,
          address: data.address,
          profile: imageUrl,
        };
        const newData = await signUpUser(newUser).unwrap();
        if (newData?.success) {
          toast.success("User has been registered!");
          navigate("/login", { replace: true });
        }
      } catch (err: any) {
        toast.error(
          err?.data?.message ? err?.data?.message : "Something went wrong!"
        );
      }
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto px-4 lg:px-10 xxl:px-0 py-20 min-h-screen flex justify-center items-center">
      <div className="w-full z-10">
        <div className="w-full sm:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto p-5 md:p-8 shadow-xl rounded-md bg-gray-100 text-gray-900">
          <p className="font-bold text-2xl text-center mb-8">Sign Up</p>
          <form
            onSubmit={handleSubmit(handleSignup)}
            className="flex flex-col gap-8 items-center"
          >
            <div className="w-full grid grid-cols-1 gap-5">
              <div className="w-full grid grid-cols-1 gap-5">
                <div>
                  <label className="text-xs font-semibold mb-1 inline-block">
                    Full Name<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                    placeholder="Enter name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-600 mt-[2px] inline-block">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1 inline-block">
                    Email<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                    placeholder="Enter email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-600 mt-[2px] inline-block">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1 inline-block">
                    Password<span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      className="border border-gray-300 w-full h-9 pl-2 pr-8 py-1 text-sm rounded-sm"
                      placeholder="Enter password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message:
                            "Password must be at least 6 characters long",
                        },
                        pattern: {
                          value: /(?=.*\d)(?=.*[A-Z])(?=.*[!#@$%&? " ])/,
                          message:
                            "Password must have at least one uppercase, one special character and one numeric value",
                        },
                      })}
                    />
                    <span
                      className="cursor-pointer text-lg absolute top-[9px] right-2"
                      onClick={() => setShowPass(!showPass)}
                    >
                      {showPass ? <IoMdEye /> : <IoMdEyeOff />}
                    </span>
                  </div>
                  {errors.password ? (
                    <span className="text-xs text-red-600 mt-[2px] inline-block">
                      {(errors as any).password?.message}
                    </span>
                  ) : (
                    <small className="text-xs text-gray-600 mt-1 inline-block">
                      [Hints: password must contain 1 uppercase, 1 number, 1
                      special character and 6 letter long]
                    </small>
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1 inline-block">
                    Phone No.<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                    placeholder="Enter phone"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-600 mt-[2px] inline-block">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1 inline-block">
                    User Image<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="file"
                    className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                    {...register("profile", { required: true })}
                  />
                  {errors.profile && (
                    <span className="text-xs text-red-600 mt-[2px] inline-block">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold mb-1 inline-block">
                  Address<span className="text-red-600">*</span>
                </label>
                <textarea
                  placeholder="Enter address"
                  className="border border-gray-300 w-full min-h-20 px-2 py-1 text-sm rounded-sm"
                  {...register("address", { required: true })}
                ></textarea>
                {errors.address && (
                  <span className="text-xs text-red-600 mt-[2px] inline-block">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <Button
              type="submit"
              className="w-fit h-fit text-sm py-2 px-4 rounded flex items-center gap-1"
            >
              Sign Up
            </Button>
          </form>
          <p className="mt-4 text-xs font-medium text-center">
            Already have an account? Please{" "}
            <Link
              to="/login"
              className="text-blue-600 transition-all duration-300 hover:text-gray-900 hover:underline"
            >
              login
            </Link>
          </p>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 text-sm text-blue-600 font-bold mt-3 transition-all duration-300 hover:text-gray-900"
          >
            <FaLongArrowAltLeft />
            <span>Back Home</span>
          </Link>
        </div>
      </div>
      <div className="custom-shape-for-page">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Signup;
