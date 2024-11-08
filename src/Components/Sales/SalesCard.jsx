import { NavLink } from 'react-router-dom'
import foto from '../../images/Frame 1948753888.png'
import foto2 from '../../images/Icon (2).png'

export default function SalesCard() {
    return (
        <div className="SalesCard pb-[100px]">
            <div className="Container">
                <div className="flex mt-[30px] items-start justify-start flex-col gap-[30px]">
                    <NavLink className={'w-full'} to={'/info'}>
                    <div className='w-full'>
                        <img src={foto} alt="" />
                        <img className='w-full block mt-[10px]' src={foto2} alt="foto" />
                        <div className='mt-[20px] flex items-end justify-between w-full'>
                            <div >
                                <h2 className='font-bold text-[20px]'>
                                    Bro - Broccoli
                                </h2>
                                <span className='text-[#6A616B]'>
                                    Cofe • Bake • Chocolate
                                </span>
                            </div>
                            <button className='flex items-center gap-[5px] text-[#00F] text-[20px]'>
                                Batafsil
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                                    <path d="M1 1.5L7 7.5L1 13.5" stroke="#0000FF" stroke-width="2" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    </NavLink>
                    <NavLink className={'w-full'} to={'/info'}>
                    <div className='w-full'>
                        <img src={foto} alt="" />
                        <img className='w-full block mt-[10px]' src={foto2} alt="foto" />
                        <div className='mt-[20px] flex items-end justify-between w-full'>
                            <div >
                                <h2 className='font-bold text-[20px]'>
                                    Bro - Broccoli
                                </h2>
                                <span className='text-[#6A616B]'>
                                    Cofe • Bake • Chocolate
                                </span>
                            </div>
                            <button className='flex items-center gap-[5px] text-[#00F] text-[20px]'>
                                Batafsil
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                                    <path d="M1 1.5L7 7.5L1 13.5" stroke="#0000FF" stroke-width="2" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    </NavLink>
                    <NavLink className={'w-full'} to={'/info'}>
                    <div className='w-full'>
                        <img src={foto} alt="" />
                        <img className='w-full block mt-[10px]' src={foto2} alt="foto" />
                        <div className='mt-[20px] flex items-end justify-between w-full'>
                            <div >
                                <h2 className='font-bold text-[20px]'>
                                    Bro - Broccoli
                                </h2>
                                <span className='text-[#6A616B]'>
                                    Cofe • Bake • Chocolate
                                </span>
                            </div>
                            <button className='flex items-center gap-[5px] text-[#00F] text-[20px]'>
                                Batafsil
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                                    <path d="M1 1.5L7 7.5L1 13.5" stroke="#0000FF" stroke-width="2" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}