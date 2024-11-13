// import { useState } from "react"

export default function Header() {
    // const [active, setActive] = useState(1)
    return (
        <div className="Header bg-[#F1EEF1] py-[20px] w-full">
            <div className="Container">
                <h2 className="font-bold text-[20px]">
                    Tops
                </h2>
                {/* <div className="flex items-center justify-start gap-[10px] mt-[10px]">
                    <button onClick={() => setActive(1)} className={`py-[5px] px-[10px] rounded-[10px] bg-[white] ${active === 1 ? 'activeBar' : ''}`}>
                        Kafelar
                    </button>
                    <button onClick={() => setActive(2)} className={`py-[5px] px-[10px] rounded-[10px] bg-[white] ${active === 2 ? 'activeBar' : ''}`}>
                        Reastaurant
                    </button>
                    <button onClick={() => setActive(3)} className={`py-[5px] px-[10px] rounded-[10px] bg-[white] ${active === 3 ? 'activeBar' : ''}`}>
                        Clubs
                    </button>
                    <button onClick={() => setActive(4)} className={`py-[5px] px-[10px] rounded-[10px] bg-[white] ${active === 4 ? 'activeBar' : ''}`}>
                        Milliy
                    </button>
                </div> */}
            </div>
        </div>
    )
}