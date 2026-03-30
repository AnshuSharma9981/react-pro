

export default function RightCardContent(props){
    // console.log(props.tag,props.idx);
    return(

        <div className="absolute left-0 top-0 h-full w-full flex  flex-col justify-between p-8">

                <h2 className="h-12 w-12 text-xl font-bold rounded-full bg-white flex justify-center items-center">{props.idx+1}</h2>
                <div >
                    <p className="text-md leading-normal text-white mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, qui. Amet magni debitis dicta reiciendis repudiandae, cupiditate praesentium labore.</p>
                    
                    <div className="flex justify-between">
                        <button style={{backgroundColor:props.color}} className="text-black font-md px-8 py-2 rounded-full">{props.tag}</button>
                        <button className="text-white font-md px-3 py-2 rounded-full"><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
                
            </div>
    )
}