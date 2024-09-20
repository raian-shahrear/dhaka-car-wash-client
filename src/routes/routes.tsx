import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import MainLayout from "@/components/layout/MainLayout";
import Error from "@/components/shared/beforeLogin/Error";
import Dashboard from "@/pages/afterLogin/dashboard/Dashboard";
import Home from "@/pages/beforeLogin/home/Home";
import ServiceDetails from "@/pages/beforeLogin/services/ServiceDetails";
import Services from "@/pages/beforeLogin/services/Services";
import Reviews from "@/pages/beforeLogin/home/Reviews";
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
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRouteForUser from "./ProtectedRouteForUser";
import MyReview from "@/pages/afterLogin/userManagement/myReview/MyReview";
import ClientReview from "@/pages/afterLogin/userManagement/ClientReview";

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
        element: (
          <ProtectedRouteForUser role="user">
            <Booking />
          </ProtectedRouteForUser>
        ),
      },
      {
        path: "/reviews",
        element: (
          <ProtectedRoute>
            <Reviews />
          </ProtectedRoute>
        ),
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
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "service-management",
        element: (
          <ProtectedRouteForUser role="admin">
            <ServiceManagement />
          </ProtectedRouteForUser>
        ),
      },
      {
        path: "slot-management",
        element: (
          <ProtectedRouteForUser role="admin">
            <SlotManagement />
          </ProtectedRouteForUser>
        ),
      },
      {
        path: "user-management/bookings",
        element: (
          <ProtectedRouteForUser role="admin">
            <Bookings />
          </ProtectedRouteForUser>
        ),
      },
      {
        path: "user-management/users",
        element: (
          <ProtectedRouteForUser role="admin">
            <Users />
          </ProtectedRouteForUser>
        ),
      },
      {
        path: "user-management/my-bookings",
        element: (
          <ProtectedRouteForUser role="user">
            <MyBookings />
          </ProtectedRouteForUser>
        ),
      },
      {
        path: "user-management/client-reviews",
        element: (
          <ProtectedRouteForUser role="admin">
            <ClientReview />
          </ProtectedRouteForUser>
        ),
      },
      {
        path: "user-management/my-reviews",
        element: (
          <ProtectedRouteForUser role="user">
            <MyReview />
          </ProtectedRouteForUser>
        ),
      },
      {
        path: "user-management",
        element: (
          <ProtectedRoute>
            <MyAccount />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
