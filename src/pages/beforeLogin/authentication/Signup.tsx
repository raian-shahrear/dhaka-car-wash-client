import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useSignUpMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import { getImageUrl } from "@/utils/getImageUrl";
import Loading from "@/utils/Loading";

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
        toast.error(err?.data?.message);
      }
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto px-4 lg:px-10 xxl:px-0 py-20 min-h-screen flex justify-center items-center">
      <div className="w-full">
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
        </div>
      </div>
    </div>
  );
};

export default Signup;
