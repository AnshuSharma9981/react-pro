import { useState } from "react"


export default function App(){

  const [formData , setFormData] = useState({
    username:"",
    description:"",
    rating:3,
  })

  const handleinputChange =(eve)=>{
    let fieldName = eve.target.name;
    let newVal = eve.target.value;
    
    setFormData((curr)=>{
      curr[fieldName]=newVal;
      return {...curr }
    })
  }

  const handleformSubmit =(eve)=>{
    eve.preventDefault();
    console.log(formData);
  }

  return(
    <div className="h-screen bg-black text-white">
      <form className="flex justify-between items-start flex-col gap-5 p-10"  onSubmit={handleformSubmit}>
        <div className="flex  flex-col items-start w-1/2 gap-5">
          <input type="text" 
          placeholder="Enter username"
          className="px-5 py-2 border-2 rounded"
          name="username"
          value={formData.username}
          onChange={handleinputChange}/>

          <input type="text" 
          placeholder="write details" 
          className="px-5 h-20  py-2 border-2 rounded"
          name="description"
          value={formData.description}
          onChange={handleinputChange}/>

          <input type="number"  max={5} min={1} name='rating' value={formData.rating} onChange={handleinputChange} className="px-5 py-2 border-2 rounded"/>

          <button className="px-5 py-2 border rounded bg-white text-black">Add note</button>
        </div>
        
        <img className="h-80" src="https://gallery.yopriceville.com/downloadfullsize/send/14426" alt="" />
      </form>
    </div>
  )
}