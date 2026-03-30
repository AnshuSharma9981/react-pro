import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function Page1Content(props){
    // console.log(props.users)
    return(

        <div className="py-10 h-[90vh]  gap-10 flex  items-center justify-between  px-18">
            <LeftContent/>
            <RightContent users={props.users}/>
        </div>
    )
}