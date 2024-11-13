import axios from "axios";
import Header from "../Components/Sales/Header";
import SalesCard from "../Components/Sales/SalesCard";
import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';

export default function Sales(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const GetSales = async ()=>{
        try{
            const response = await axios.get(`/promotions/all`)
            setData(response?.data)
        }catch(error){  
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    console.log(data)

    useEffect(()=>{
        GetSales()
    },[])


    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen my-[30px] w-full'>
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }

    return(
        <div className="Sales">
            <Header/>
            <SalesCard data={data}/>
        </div>
    )
}