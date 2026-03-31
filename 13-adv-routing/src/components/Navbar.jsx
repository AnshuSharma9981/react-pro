import {Link } from "react-router-dom";

export default function Navbar() {

  return (
    <div className="flex justify-between items-center px-10 py-5 bg-cyan-800 ">
        <h2 className="text-2xl font-bold">Google</h2>
        
        <div className="flex gap-10 texl-lg font-medium">

            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
            <Link to="/contact">Contact</Link>
            <Link to='/product'>Product</Link>

        </div>
    </div>
  )
}
