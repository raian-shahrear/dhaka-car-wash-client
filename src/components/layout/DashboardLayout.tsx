import { Outlet } from "react-router-dom";
import Sidebar from "../shared/afterLogin/Sidebar";
import Navbar from "../shared/afterLogin/Navbar";
import Footer from "../shared/afterLogin/Footer";

const DashboardLayout = () => {
    return (
        <div>
            <Sidebar />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default DashboardLayout;