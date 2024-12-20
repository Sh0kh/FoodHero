import { useState } from "react"

export default function SearchCategory() {

    const [active, setActive] = useState()

    return (
        <div className="mt-[30px]">
            <div className="Container">
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-[20px]">
                        Kafelar
                    </h2>
                    <button className="p-[8px] rounded-[10px] border-[1px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7.5 14.5C5.92 14.5 4.597 15.56 4.163 17H2V19H4.163C4.597 20.44 5.92 21.5 7.5 21.5C9.08 21.5 10.403 20.44 10.837 19H22V17H10.837C10.403 15.56 9.08 14.5 7.5 14.5ZM7.5 19.5C6.673 19.5 6 18.827 6 18C6 17.173 6.673 16.5 7.5 16.5C8.327 16.5 9 17.173 9 18C9 18.827 8.327 19.5 7.5 19.5ZM16.5 8.5C14.92 8.5 13.597 9.56 13.163 11H2V13H13.163C13.597 14.44 14.92 15.5 16.5 15.5C18.08 15.5 19.403 14.44 19.837 13H22V11H19.837C19.403 9.56 18.08 8.5 16.5 8.5ZM16.5 13.5C15.673 13.5 15 12.827 15 12C15 11.173 15.673 10.5 16.5 10.5C17.327 10.5 18 11.173 18 12C18 12.827 17.327 13.5 16.5 13.5Z" fill="#333333" />
                            <path d="M12.837 5C12.403 3.56 11.08 2.5 9.5 2.5C7.92 2.5 6.597 3.56 6.163 5H2V7H6.163C6.597 8.44 7.92 9.5 9.5 9.5C11.08 9.5 12.403 8.44 12.837 7H22.125V5H12.837ZM9.5 7.5C8.673 7.5 8 6.827 8 6C8 5.173 8.673 4.5 9.5 4.5C10.327 4.5 11 5.173 11 6C11 6.827 10.327 7.5 9.5 7.5Z" fill="#333333" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center justify-start gap-[10px] mt-[10px]">
                    <button onClick={() => setActive(1)} className={`py-[5px] px-[10px] rounded-[10px] bg-[#F5F5F5] ${active === 1 ? 'activeBar' : ''}`}>
                        Ochiqlar
                    </button>
                    <button onClick={() => setActive(2)} className={`py-[5px] px-[10px] rounded-[10px] bg-[#F5F5F5] ${active === 2 ? 'activeBar' : ''}`}>
                        Eng yaqinlari
                    </button>
                    <button onClick={() => setActive(3)} className={`py-[5px] px-[10px] rounded-[10px] bg-[#F5F5F5] ${active === 3 ? 'activeBar' : ''}`}>
                        Reyting
                    </button>
                </div>
            </div>
        </div>
    )
}