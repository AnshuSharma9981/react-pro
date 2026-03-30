
import { useState } from 'react'
import './App.css'

function App() {
  let [name , setName]= useState({user:"anshu sharma" , age:23});

  // function changeName(){
  //   let newname= {...name};
  //   newname.user= "radha sharma";
  //   newname.age=22;
  //   setName((newname));
  // }

  
  function changeName(){
    setName(prev=>({...name, age:90}));
  }

  return (
    <>
      <h1>{name.user} is {name.age} year old</h1>
      <button onClick={changeName}>update</button>
        
    </>
  )
}

export default App
