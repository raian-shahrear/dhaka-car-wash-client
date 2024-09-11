import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto px-4 lg:px-10 xxl:px-0 py-20 min-h-screen flex justify-center items-center">
      <div className="w-full">
        <div className="w-full sm:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto p-5 md:p-8 shadow-xl rounded-md bg-gray-100 text-gray-900">
          <p className="font-bold text-2xl text-center mb-8">Login</p>
          <form className="flex flex-col gap-8 items-center">
            <div className="w-full grid grid-cols-1 gap-5">
              <div>
                <label className="text-xs font-semibold mb-1 inline-block">
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold mb-1 inline-block">
                  Password<span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-fit h-fit text-sm py-2 px-4 rounded flex items-center gap-1"
            >
              Login
            </Button>
          </form>
          <p className="mt-4 text-xs font-medium text-center">Don't have account? Please <Link to="/signup" className="text-blue-600 transition-all duration-300 hover:text-gray-900 hover:underline">sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
