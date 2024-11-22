import { useState } from "react";
import Header from "../Components/SearchPage/Header";
import SearchCard from "../Components/SearchPage/SearchCard";

export default function SearchPage(){
    
    const [filteredData, setFilteredData] = useState([]);

    // Функция для получения отфильтрованных данных
    const handleFilteredData = (data) => {
      setFilteredData(data);
    };



    return(
        <div className="SearchPage">
            <Header onFilter={handleFilteredData}/>
            {/* <SearchCategory/> */}
            <SearchCard data={filteredData}/>
        </div>
    )
}