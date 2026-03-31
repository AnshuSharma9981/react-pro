import {Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="flex items-center justify-between px-15 py-8 bg-amber-300 text-xl font-bold">
          <h2>Sheriyans</h2>
          <div className="flex justify-between gap-10">
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
            <Link to="/contect">Contact</Link>
            <Link to='/product'>Product</Link>
          </div>
      </div>
    )
}