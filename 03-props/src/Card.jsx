export default function Card(props){
    // console.log(props.img);

    return(
        <div className="parent">
            <div className='card'>
                <img src={props.img[props.idx]} alt='human' />
                <h1>{props.user}</h1>
                <p>I am {props.age} year old</p>
                <button>view profile</button>
            </div>    
        </div>
    )
}