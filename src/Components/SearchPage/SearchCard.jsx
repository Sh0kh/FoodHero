import { NavLink } from 'react-router-dom'
import foto from '../../images/Icon (1).png'

export default function SearchCard() {
    return (
        <div className="pb-[100px]">
            <div className="Container">
                <div className="flex flex-col gap-[10px]">
                    <NavLink to={'/info'}>
                        <div className="flex items-center justify-center flex-col gap-[10px] mt-[20px]">
                            <img className='w-full' src={foto} alt="foto" />
                            <div className='flex items-end justify-between w-full'>
                                <div >
                                    <h2 className='font-bold text-[20px]'>
                                        Bro - Broccoli
                                    </h2>
                                    <span className='text-[#6A616B]'>
                                        Cofe • Bake • Chocolate
                                    </span>
                                </div>
                                <button className='flex items-center gap-[5px] text-[#00F] text-[20px]'>
                                    More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                                        <path d="M1 1.5L7 7.5L1 13.5" stroke="#0000FF" stroke-width="2" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to={'/info'}>
                        <div className="flex items-center justify-center flex-col gap-[10px] mt-[20px]">
                            <img className='w-full' src={foto} alt="foto" />
                            <div className='flex items-end justify-between w-full'>
                                <div >
                                    <h2 className='font-bold text-[20px]'>
                                        Bro - Broccoli
                                    </h2>
                                    <span className='text-[#6A616B]'>
                                        Cofe • Bake • Chocolate
                                    </span>
                                </div>
                                <button className='flex items-center gap-[5px] text-[#00F] text-[20px]'>
                                    More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                                        <path d="M1 1.5L7 7.5L1 13.5" stroke="#0000FF" stroke-width="2" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to={'/info'}>
                        <div className="flex items-center justify-center flex-col gap-[10px] mt-[20px]">
                            <img className='w-full' src={foto} alt="foto" />
                            <div className='flex items-end justify-between w-full'>
                                <div >
                                    <h2 className='font-bold text-[20px]'>
                                        Bro - Broccoli
                                    </h2>
                                    <span className='text-[#6A616B]'>
                                        Cofe • Bake • Chocolate
                                    </span>
                                </div>
                                <button className='flex items-center gap-[5px] text-[#00F] text-[20px]'>
                                    More
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