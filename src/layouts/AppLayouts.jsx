import { Outlet } from "react-router-dom";

export default function AppLayouts(){
    return(
        <div className="h-full">
            <Outlet/>
        </div>
    )
}