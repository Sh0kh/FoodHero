import { useState } from "react";
import Header from "../Components/Header/Header";
import Category from "../Components/HomePage/Category";
import ReklamaSwiper from "../Components/HomePage/ReklamaSwiper";
import TopSales from "../Components/HomePage/TopSales";

export default function Home(){

    const [cityId, setCityId] = useState(null);

    const handleCityChange = (newCityId) => {
        setCityId(newCityId);
        // You can also handle any side effects or actions here when the city changes
    };
    return(
        <div className="">
            <Header onCityChange={handleCityChange}/>
            <ReklamaSwiper />
            <TopSales/>
            <Category id={cityId}/>
        </div>
    )
}