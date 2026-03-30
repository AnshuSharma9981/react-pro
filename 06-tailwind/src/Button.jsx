export default function Button(props){
    console.log(props);
    return (
        <div className="bg-blue-700  text-white px-30 py-8 text-center rounded-xl">
            <h3 className="font-semibold text-xl">{props.gender}</h3>
            <p className="font-semibold">{props.desc}</p>
        </div>
    )
}