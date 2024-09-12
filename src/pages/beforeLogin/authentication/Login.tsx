import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm();

  const [showPass, setShowPass] = useState(false);

  const handleLogin = (data) => {
    if (isValid || !isSubmitting) {
      const newLogin = {
        email: data.email,
        password: data.password,
      };
      console.log(newLogin);
      navigate("/", { replace: true });
    }
  };
  return (
    <div className="container mx-auto px-4 lg:px-10 xxl:px-0 py-20 min-h-screen flex justify-center items-center">
      <div className="w-full">
        <div className="w-full sm:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto p-5 md:p-8 shadow-xl rounded-md bg-gray-100 text-gray-900">
          <p className="font-bold text-2xl text-center mb-8">Login</p>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col gap-8 items-center"
          >
            <div className="w-full grid grid-cols-1 gap-5">
              <div>
                <label className="text-xs font-semibold mb-1 inline-block">
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                  placeholder="Enter email"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                      message: "Please set email in right pattern",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-xs text-red-600 mt-[2px] inline-block">
                    {errors.email?.message}
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
                    {...register("password", { required: true })}
                  />
                  <span
                    className="cursor-pointer text-lg absolute top-[9px] right-2"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <IoMdEye /> : <IoMdEyeOff />}
                  </span>
                </div>
                {errors.password && (
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
              Login
            </Button>
          </form>
          <p className="mt-4 text-xs font-medium text-center">
            Don't have account? Please{" "}
            <Link
              to="/signup"
              className="text-blue-600 transition-all duration-300 hover:text-gray-900 hover:underline"
            >
              sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
