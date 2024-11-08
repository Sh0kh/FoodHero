import { useState } from "react"
import foto from '../../images/coffe.png'
export default function ResCards() {

    const [active, setActive] = useState()

    return (
        <div className="mt-[20px]">
            <div className="Container">
                <h2 className="font-bold text-[20px] mb-[10px]">
                    Menu
                </h2>
                <div className="flex items-center justify-start gap-[10px] mt-[10px]">
                    <button onClick={() => setActive(1)} className={`py-[5px] px-[10px] rounded-[10px] bg-[#F3F2F3] ${active === 1 ? 'activeBar' : ''}`}>
                        Aksiya
                    </button>
                    <button onClick={() => setActive(2)} className={`py-[5px] px-[10px] rounded-[10px] bg-[#F3F2F3] ${active === 2 ? 'activeBar' : ''}`}>
                        Bake
                    </button>
                    <button onClick={() => setActive(3)} className={`py-[5px] px-[10px] rounded-[10px] bg-[#F3F2F3] ${active === 3 ? 'activeBar' : ''}`}>
                        Drinks
                    </button>
                    <button onClick={() => setActive(4)} className={`py-[5px] px-[10px] rounded-[10px] bg-[#F3F2F3] ${active === 4 ? 'activeBar' : ''}`}>
                        Coffee
                    </button>
                </div>

                <div className="flex items-center justify-center flex-col gap-[10px] mt-[20px]">
                   <div className="w-full flex items-center justify-center rounded-[15px] bg-[#F0EFF0]">
                   <img className='' src={foto} alt="foto" />
                   </div>
                    <div className='flex items-end justify-between w-full'>
                        <div >
                            <span className='text-[#6A616B]'>
                                Coffe Americano
                            </span>
                        </div>
                        <button className='flex items-center gap-[5px] text-[#CC00CC] text-[20px]'>
                            12 000 uzs
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-[10px] mt-[20px]">
                   <div className="w-full flex items-center justify-center rounded-[15px] bg-[#F0EFF0]">
                   <img className='' src={foto} alt="foto" />
                   </div>
                    <div className='flex items-end justify-between w-full'>
                        <div >
                            <span className='text-[#6A616B]'>
                                Coffe Americano
                            </span>
                        </div>
                        <button className='flex items-center gap-[5px] text-[#CC00CC] text-[20px]'>
                            12 000 uzs
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-[10px] mt-[20px]">
                   <div className="w-full flex items-center justify-center rounded-[15px] bg-[#F0EFF0]">
                   <img className='' src={foto} alt="foto" />
                   </div>
                    <div className='flex items-end justify-between w-full'>
                        <div >
                            <span className='text-[#6A616B]'>
                                Coffe Americano
                            </span>
                        </div>
                        <button className='flex items-center gap-[5px] text-[#CC00CC] text-[20px]'>
                            12 000 uzs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}