import Header from "../Components/Header/Header";
import Category from "../Components/HomePage/Category";
import ReklamaSwiper from "../Components/HomePage/ReklamaSwiper";
import TopSales from "../Components/HomePage/TopSales";

export default function Home(){
    return(
        <div className="">
            <Header/>
            <ReklamaSwiper/>
            <TopSales/>
            <Category/>
        </div>
    )
}