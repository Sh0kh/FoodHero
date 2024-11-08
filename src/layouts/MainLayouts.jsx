import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";

export default function MainLayouts(){
    return(
        <div className="relative max-w-[450px] bg-white mx-auto h-screen overflow-hidden overflow-y-scroll ">
            <Outlet/>
            <Navbar/>
        </div>
    )
}