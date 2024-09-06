import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router-dom";

interface RouteError {
  status?: number;
  statusText?: string;
  message?: string;
}

const Error = () => {
  const error = useRouteError() as RouteError;
  return (
    <section className="flex items-center h-screen p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
            {error?.status}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            Sorry,{" "}
            {error?.statusText === "Not Found"
              ? `Page ${error?.statusText}!`
              : "Something Went Wrong!"}
          </p>
          <Link to="/">
            <Button className="h-fit p-2">Back to homepage</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
