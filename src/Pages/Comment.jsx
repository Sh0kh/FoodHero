import Header from "../Components/Comment/Header";
import PersonComments from "../Components/Comment/PersonComments";

export default function Comment() {
    return (
        <div className="Commment pb-[100px]">
            <Header />
            <PersonComments/>
        </div>
    )
}