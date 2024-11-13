import CONFIG from '../../Utils/Config'

export default function SearchCard({ data }) {
    return (
        <div className="pb-[100px]">
            <div className="Container">
                <div className="flex flex-col gap-[10px]">
                    {data && data?.length > 0 ? (
                        data?.map((i, index) => (
                            <div key={index} className="flex items-center justify-center flex-col gap-[10px] mt-[20px]">
                                <img className='w-full' src={CONFIG.API_URL + `/uploads/` + i?.image} alt="foto" />
                                <div className='flex items-end justify-between w-full'>
                                    <div >
                                        <h2 className='font-bold text-[20px]'>
                                            {i?.name}
                                        </h2>
                                        <span className='text-[#6A616B]'>
                                            Cofe • Bake • Chocolate
                                        </span>
                                    </div>
                                    {/* <button className='flex items-center gap-[5px] text-[#00F] text-[20px]'>
                                        More
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                                            <path d="M1 1.5L7 7.5L1 13.5" stroke="#0000FF" stroke-width="2" />
                                        </svg>
                                    </button> */}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='flex items-center justify-center py-[30px]'>
                            <h2 >
                                Bo`sh
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}