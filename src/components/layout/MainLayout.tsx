import { Outlet } from "react-router-dom";
import Navbar from "../shared/beforeLogin/navbar/Navbar";
import Footer from "../shared/beforeLogin/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <div className="pt-10">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;