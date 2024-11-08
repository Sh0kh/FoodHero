import Media from "../Components/Restinfo/Media";
import RestHeader from "../Components/Restinfo/RestHeader";
import ResSwiper from "../Components/Restinfo/ResSwiper";
import ResCards from "../Components/Restinfo/ResCards";

export default function RestInfo(){
    return(
        <div className="pb-[100px]">
            <RestHeader/>
            <Media/>
            <ResSwiper/>
            <ResCards/>
        </div>
    )
}