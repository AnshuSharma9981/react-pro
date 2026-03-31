import { Route , Routes } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contect from './pages/Contect.jsx';
import Product from './pages/Product.jsx'
import Navbar from './components/Navbar.jsx'


export default function App(){

 localStorage.clear();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/product" element={<Product />} />
      </Routes>

    </div>
  )
}