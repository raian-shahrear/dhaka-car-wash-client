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
import ServiceManagement from "@/pages/afterLogin/serviceManagement/ServiceManagement";
import SlotManagement from "@/pages/afterLogin/slotManagement/SlotManagement";
import Bookings from "@/pages/afterLogin/userManagement/Bookings";
import Users from "@/pages/afterLogin/userManagement/users/Users";
import MyAccount from "@/pages/afterLogin/userManagement/MyAccount";
import MyBookings from "@/pages/afterLogin/userManagement/myBookings/MyBookings";
import ServiceComparison from "@/pages/beforeLogin/services/ServiceComparison";

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
        path: "services",
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
      {
        path: "/service-comparison",
        element: <ServiceComparison />,
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
        path: "index",
        element: <Dashboard />,
      },
      {
        path: "service-management",
        element: <ServiceManagement />,
      },
      {
        path: "slot-management",
        element: <SlotManagement />,
      },
      {
        path: "user-management/bookings",
        element: <Bookings />,
      },
      {
        path: "user-management/users",
        element: <Users />,
      },
      {
        path: "user-management/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "user-management",
        element: <MyAccount />,
      },
    ],
  },
]);

export default router;
