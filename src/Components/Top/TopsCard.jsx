import axios from "axios"
import { useEffect, useState } from "react"
import ReactLoading from 'react-loading';

export default function TopsCard() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const getAllRest = async () =>{
        try{
            const response = await axios.get(`/food-establishments/all`)
            setData(response?.data)
        }catch(error){
            console.log(error   )
        }finally{
            setLoading(false)
        }
    }

    console.log(data)

    useEffect(()=>{
        getAllRest()
    },[])

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen my-[30px] w-full'>
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }

    return (
        <div className="TopCard mt-[30px] pb-[100px]">
            <div className="Container">
                <div class="Top__Card wrapper">
                    <div class="card card-1"></div>
                    <div class="card card-2"></div>
                    <div class="card card-3"></div>
                    <div class="card card-4">Logolar</div>
                    <div class="card card-5">Logolar</div>
                    <div class="card card-6"></div>
                    <div class="card card-7"></div>
                    <div class="card card-8"></div>
                    <div class="card card-9"></div>
                    <div class="card card-10"></div>
                    <div class="card card-11"></div>
                </div>

            </div>
        </div>
    )
}