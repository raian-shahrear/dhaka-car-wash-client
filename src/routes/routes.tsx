import DashboardLayout from "@/components/layout/DashboardLayout";
import MainLayout from "@/components/layout/MainLayout";
import Error from "@/components/shared/beforeLogin/Error";
import Dashboard from "@/pages/afterLogin/dashboard/Dashboard";
import Home from "@/pages/beforeLogin/home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    }
])

export default router;