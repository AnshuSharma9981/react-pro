import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <h1>this is {theme}</h1>
      <Navbar theme={theme} setTheme={setTheme}/>
    </>
  )
}

export default App
