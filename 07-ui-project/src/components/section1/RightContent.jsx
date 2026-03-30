import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

export default function RightContent(props){
    // console.log(props.users);
    return(

        <div className="h-full w-3/4 p-6 flex flex-nowrap gap-5 overflow-x-auto ">
            {
                props.users.map(function(elem ,idx){
                    return <RightCard img={elem.img} color={elem.color} tag={elem.tag} idx={idx}/> 
                })
            }
            
        </div>
    )
}