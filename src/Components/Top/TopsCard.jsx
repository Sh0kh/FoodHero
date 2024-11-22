import axios from "axios"
import { useEffect, useState } from "react"
import ReactLoading from 'react-loading';
import CONFIG from "../../Utils/Config";
import { NavLink } from "react-router-dom";
export default function TopsCard() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const getAllRest = async () => {
        try {
            const response = await axios.get(`/food-establishments/all`)
            setData(response?.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    console.log(data)

    useEffect(() => {
        getAllRest()
    }, [])

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen my-[30px] w-full'>
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }

    if (data?.length === 0) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1>
                    Bo`sh
                </h1>
            </div>
        )
    }

    return (
        <div className="TopCard mt-[30px] pb-[100px]">
            <div className="Container">
                <div className="Top__Card wrapper">
                    {data?.map((i, index) => (
                        <div key={index} className="card card-1">
                            <NavLink to={`/info/${i?.id}`}>
                                <img src={CONFIG.API_URL + i?.banner} alt="foto" />
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}