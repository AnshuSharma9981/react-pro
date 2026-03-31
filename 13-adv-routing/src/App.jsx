import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import {Routes , Route} from 'react-router-dom'
import Home from "./pages/Home"
import Product from "./pages/Product"
import About from './pages/About';
import Contact from './pages/Contact';
import Error404 from "./pages/Error404"
import Men from './pages/Men'
import Women from "./pages/Women"
import Navbar2 from "./components/Navbar2"


function App() {

  return (
    <div className="h-screen bg-black text-white">
      <Navbar /> 
      <Navbar2 /> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>} >
          <Route path='men' element={<Men/>} />
          <Route path='women' element={<Women/>} />
        </Route>
        

        <Route path="*" element={<Error404 />} />
      </Routes>
      
     
      

      <Footer />
    </div>
  )
}

export default App
