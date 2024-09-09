import { Outlet } from "react-router-dom";
import Sidebar from "../shared/afterLogin/Sidebar";
import Navbar from "../shared/afterLogin/Navbar";
import Footer from "../shared/afterLogin/Footer";
import { useState } from "react";

const DashboardLayout = () => {
  const [controlSidebar, setControlSidebar] = useState(false);
  return (
    <div className="flex">
      <Sidebar setControlSidebar={setControlSidebar} controlSidebar={controlSidebar} />
      <div className={`flex-1 transition-all duration-300 ${controlSidebar ? 'ml-0' : 'ml-0 lg:ml-[300px]'}`}>
        <Navbar setControlSidebar={setControlSidebar} controlSidebar={controlSidebar} />
        <div className="p-5 h-[90.8vh]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
