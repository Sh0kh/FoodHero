import axios from "axios";
import Header from "../Components/SearchPage/Header";
import SearchCard from "../Components/SearchPage/SearchCard";
// import SearchCategory from "../Components/SearchPage/SearchCategory";
import { useEffect, useState } from "react";

import ReactLoading from 'react-loading';

export default function SearchPage(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const getSearchData = async()=>{
        try{
            const response = await axios.get(`/categories/all`)
            setData(response?.data)
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getSearchData()
    },[])

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen my-[30px] w-full'>
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }



    return(
        <div className="SearchPage">
            <Header/>
            {/* <SearchCategory/> */}
            <SearchCard data={data}/>
        </div>
    )
}