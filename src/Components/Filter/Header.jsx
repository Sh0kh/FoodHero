import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="Header  bg-[#F1EEF1] py-[20px] w-full">
            <div className="Container">
                <NavLink to={'/search'} aria-label="Go to Aksiyalar">
                <div className="flex items-center gap-[10px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                        <path d="M7.21289 0L0 7L7.21289 14L8.5 12.5L2.5 7L8.5 1.5L7.21289 0Z" fill="#7D827D" />
                    </svg>
                    <h2 className="text-[20px] font-bold">
                        Filter
                    </h2>
                </div>
                </NavLink>
            </div>
        </div>
    )
}