import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import MainLayout from "@/components/layout/MainLayout";
import Error from "@/components/shared/beforeLogin/Error";
import Dashboard from "@/pages/afterLogin/dashboard/Dashboard";
import Home from "@/pages/beforeLogin/home/Home";
import ServiceDetails from "@/pages/beforeLogin/services/ServiceDetails";
import Services from "@/pages/beforeLogin/services/Services";
import Reviews from "@/pages/beforeLogin/home/Reviews";
import BookingSuccessful from "@/pages/beforeLogin/booking/BookingSuccessful";
import Booking from "@/pages/beforeLogin/booking/Booking";
import Login from "@/pages/beforeLogin/authentication/Login";
import Signup from "@/pages/beforeLogin/authentication/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/booking-successful",
        element: <BookingSuccessful />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
