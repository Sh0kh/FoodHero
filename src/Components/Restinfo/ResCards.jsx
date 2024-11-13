import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import CONFIG from "../../Utils/Config"
import ReactLoading from 'react-loading';


export default function ResCards() {
    const { ID } = useParams()
    const [active, setActive] = useState(1)
    const [data, setData] = useState('')
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)


    useEffect(() => {
        const getCategoryMenu = async () => {
            try {
                const response = await axios.get(`/menu-categories/by-establishment/${ID}`)
                setCategory(response?.data)
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        getCategoryMenu()
    }, [ID])

    useEffect(() => {
        const getMenu = async () => {
            try {
                const response = await axios.get(`/foods/by-category/${active}`)
                setData(response?.data)
            } catch (error) {
                console.log(error)
            }finally{
                setLoading2(false)
            }
        }
        getMenu()
    }, [active])

    
    if (loading && loading2) {
        return (
            <div className='flex items-center justify-center my-[30px] w-full'>
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }

    return (
        <div className="mt-[20px]">
            <div className="Container">
                <h2 className="font-bold text-[20px] mb-[10px]">
                    Menu
                </h2>
                <div className="flex items-center justify-start flex-wrap gap-[10px] mt-[10px]">
                    {category?.map((i, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(i?.id)}
                            className={`py-[5px] px-[10px] rounded-[10px] bg-[#F3F2F3] ${active === i?.id ? 'activeBar' : ''}`}
                        >
                            {i?.name}
                        </button>
                    ))}
                </div>
                {data && data?.length > 0 ? (
                    data?.map((i, index) => (
                        <div key={index} className="flex items-center justify-center flex-col gap-[10px] mt-[20px]">
                            <div className="w-full flex items-center justify-center rounded-[15px] bg-[#F0EFF0]">
                                <img className='rounded-[10px]' src={CONFIG.API_URL+'/' + i?.banner} alt="foto" />
                            </div>
                            <div className='flex items-end justify-between w-full'>
                                <div >
                                    <span className='text-[#6A616B]'>
                                        {i?.name}
                                    </span>
                                </div>
                                <button className='flex items-center gap-[5px] text-[#CC00CC] text-[20px]'>
                                    {i?.price} uzs
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex items-center justify-center py-[30px]" >
                        <h2>
                            Bo`sh
                        </h2>
                    </div>
                )}
            </div>
        </div>
    )
}