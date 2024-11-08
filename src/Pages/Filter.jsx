import FilterChecked from "../Components/Filter/FilterChecked";
import Header from "../Components/Filter/Header";

export default function Filter(){
    return(
        <div className="Filter pb-[100px]">
            <Header/>
            <FilterChecked/>
        </div>
    )
}