export default function Card(props){
    return(
        <a href={props.elem.url} target="_blank">
            <div className="h-70 w-80 overflow-hidden rounded-xl">
                <img className="h-full w-full object-cover hover:scale-95 rounded-xl" src={props.elem.download_url} alt="" />
            </div>
          
          <h2 className="font-semibold text-xl">{props.elem.author}</h2>
        </a>
    )
}