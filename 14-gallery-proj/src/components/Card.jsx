export default function Card(props){
    // console.log(props);
    return (
        <a href={props.elem.url} target='_blank'>
          <div className='h-60 w-70 bg-white  overflow-hidden rounded-xl'>
            <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
        </div>
        <h1 className='font-bold text-xl'>{props.elem.author}</h1>
        </a>
    )
}