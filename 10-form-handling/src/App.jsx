import { useState } from 'react'

import './App.css'

function App() {
  const [title, setTitle] = useState("")
  const [name, setName] = useState("anshu")

  const handleformSubmit = (eve)=>{
    eve.preventDefault();
    console.log("form submitted");
  }

  const onSubmit = () => {
    setName(rDH)

  }


  return (
    <>
      <form onSubmit={handleformSubmit}>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} name="" id="" />
        <button>submit</button>
      </form>

       <h2>{name}</h2>
       <button onClick={onSubmit}>Upadate</button>
    </>
  )
}

export default App
