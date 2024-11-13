import Media from "../Components/Restinfo/Media";
import RestHeader from "../Components/Restinfo/RestHeader";
import ResSwiper from "../Components/Restinfo/ResSwiper";
import ResCards from "../Components/Restinfo/ResCards";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';


export default function RestInfo() {
    const { ID } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getRestInfo = async () => {
            try {
                const response = await axios.get(`/food-establishments/${ID}`);
                setData(response?.data);
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false)
            }
        };

        getRestInfo();
    }, [ID]);  // Add `ID` as a dependency

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen my-[30px] w-full'>
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }


    return (
        <div className="pb-[100px]">
            <RestHeader data={data} />
            <Media data={data} />
            <ResSwiper data={data} />
            <ResCards data={data} />
        </div>
    );
}
