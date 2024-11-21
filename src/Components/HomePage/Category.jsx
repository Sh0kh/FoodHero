import { NavLink } from 'react-router-dom';
import CONFIG from '../../Utils/Config';

export default function Category({ data }) {

    return (
        <div className="mt-[15px] pb-[100px]">
            <div className="Container">
                <h2 className="font-bold mb-[15px] text-[20px]">
                    Ovqatlanish maskanlari
                </h2>
                {data && data.length > 0 ? (
                    data?.map((i, index) => (
                        <NavLink key={index} to={`/info/${i?.id}`}>
                            <div className="flex items-center justify-center flex-col gap-[10px] mt-[20px]">
                                <img className='w-full rounded-[10px]' src={CONFIG.API_URL + i?.banner} alt="foto" />
                                <div className='flex items-end justify-between w-full'>
                                    <div>
                                        <h2 className='font-bold text-[20px]'>
                                            {i?.title}
                                        </h2>
                                        <span className='text-[#6A616B]'>
                                            Cofe • Bake • Chocolate
                                        </span>
                                    </div>
                                    <button className='flex items-center gap-[5px] text-[#00F] text-[20px]'>
                                        More
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                                            <path d="M1 1.5L7 7.5L1 13.5" stroke="#0000FF" strokeWidth="2" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </NavLink>
                    ))
                ) : (
                    <div className='flex items-center justify-center py-[30px]'>
                        <h2>
                            Bo`sh
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
}
