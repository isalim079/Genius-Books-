import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <div className="md:grid md:grid-cols-12">
                <div className="md:fixed z-30">
                    <Navbar></Navbar>
                </div>
                <div className="md:col-span-2">

                </div>
                <div className="md:col-span-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Root;
