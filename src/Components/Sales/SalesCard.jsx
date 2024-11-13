// import { NavLink } from 'react-router-dom'
import CONFIG from '../../Utils/Config'

export default function SalesCard({ data }) {
    return (
        <div className="SalesCard pb-[100px]">
            <div className="Container">
                <div className="flex mt-[30px] items-start justify-start flex-col gap-[30px]">
                    {data?.map((i, index) => (
                        <div key={index} className='w-full'>
                            <img className='w-full block mt-[10px] rounded-[10px]' src={CONFIG.API_URL + `/uploads/` + i.banner} alt="foto" />
                            <div className='mt-[20px] flex items-end justify-between w-full'>
                                <div >
                                    <h2 className='font-bold text-[20px]'>
                                        {i?.title}
                                    </h2>
                                    <span className='text-[#6A616B]'>
                                        {i?.description}
                                    </span>
                                </div>
                                <div  className='flex items-end gap-[5px] flex-col'>
                                    <span>
                                        {i?.startDate?.split('T')[0]} --- {i?.endDate?.split('T')[0]}
                                    </span>
                                    <span className='font-bold'>
                                        {i?.discountPercentage} %
                                    </span>
                                </div>
                                {/* <button className='flex items-center gap-[5px] text-[#00F] text-[20px]'>
                                    Batafsil
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                                        <path d="M1 1.5L7 7.5L1 13.5" stroke="#0000FF" stroke-width="2" />
                                    </svg>
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}