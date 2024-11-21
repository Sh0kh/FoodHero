import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Category from "../Components/HomePage/Category";
import ReklamaSwiper from "../Components/HomePage/ReklamaSwiper";
import TopSales from "../Components/HomePage/TopSales";
import axios from "axios";
import ReactLoading from 'react-loading';


export default function Home() {

    const [cityId, setCityId] = useState(null);

    const handleCityChange = (newCityId) => {
        setCityId(newCityId);
        // You can also handle any side effects or actions here when the city changes
    };

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getRestaurants = async () => {
            try {
                const response = await axios.get(`/food-establishments/all?cityId=${cityId}`);
                setData(response.data); // Update state with fetched data
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getRestaurants(); // Fetch data when `id` changes
    }, [cityId]);

    if (loading) {
        return (
            <div className='flex items-center h-screen justify-center my-[30px] w-full'>
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }

    return (
        <div className="">
            <Header onCityChange={handleCityChange} />
            <ReklamaSwiper />
            <TopSales />
            <Category dat={data} />
        </div>
    )
}