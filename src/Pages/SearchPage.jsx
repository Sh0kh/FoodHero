import SalesCard from "../Components/Sales/SalesCard";
import Header from "../Components/SearchPage/Header";
import SearchCard from "../Components/SearchPage/SearchCard";
import SearchCategory from "../Components/SearchPage/SearchCategory";

export default function SearchPage(){
    return(
        <div className="SearchPage">
            <Header/>
            <SearchCategory/>
            <SearchCard/>
        </div>
    )
}