import { NavLink } from "react-router-dom";

export default function RestHeader() {
    return (
        <div className="RestHeader h-[200px] w-full relative">
            <div className="Container h-full w-full relative">
                <div className="absolute bottom-0 left-0 w-full h-[100px] backdrop-blur-md p-[20px]">
                   <NavLink to={'/'}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path d="M7.21289 0L0 7L7.21289 14L8.5 12.5L3.5 8H15V6H3.5L8.5 1.5L7.21289 0Z" fill="#999999" />
                    </svg>
                   </NavLink>
                    <div className="flex items-center justify-between mt-[20px]">
                        <div className="flex items-center gap-[10px]">
                            <div className="px-[15px] py-[8px] bg-[white] rounded-[15px] flex items-center gap-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                    <path d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z" fill="#FFA500" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                    <path d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z" fill="#FFA500" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                    <path d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z" fill="#FFA500" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                    <path d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z" fill="#FFA500" />
                                </svg>
                            </div>
                           <NavLink to='/comment'>
                           <div className="px-[15px] py-[5px] bg-[white] cursor-pointer rounded-[15px] flex items-center gap-[5px]">
                                <h2 className="text-[12px]  font-bold">
                                    Fikr | 58
                                </h2>
                            </div>
                           </NavLink>
                        </div>
                        <div className="px-[15px] py-[5px] bg-[#00E500B2] cursor-pointer rounded-[15px] flex items-center gap-[5px]">
                                <h2 className="text-[12px]   text-[white]">
                                    09:00
                                </h2>
                                <h2 className="text-[12px]  text-[white]">
                                    23:00
                                </h2>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
