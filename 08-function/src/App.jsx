import "./App.css"

function App() {

  function handleInput(eve){
    console.log(eve.target.value);
  }

  return (
    <>
        <input type="text" onChange={handleInput}  id="" />
        <button onClick={handleInput}>

          click me
        </button>
    </>
  )
}

export default App
