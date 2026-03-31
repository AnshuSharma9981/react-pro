import { useNavigate } from "react-router-dom"

export default function Navbar2(){
  let navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>{
        navigate('/')
      }} className="font-medium cursor-pointer bg-green-800 px-4 py-2 m-4 rounded">Return to home</button>

      <button onClick={()=>{
        navigate(-1)
      }} className="font-medium cursor-pointer bg-green-800 px-4 py-2 m-4 rounded">Back</button>

      <button onClick={()=>{
        navigate(+1)
      }} className="font-medium cursor-pointer bg-green-800 px-4 py-2 m-4 rounded">next</button>
    </div>
  )
}