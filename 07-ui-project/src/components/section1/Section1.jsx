import Navbar from "./Navbar";
import Page1Content from "./Page1Content";

export default function Section1(props){

    // console.log(props.users);
    return(

        <div className="h-screen w-full">
            <Navbar/>
            <Page1Content users={props.users}/>
        </div>
    )
}