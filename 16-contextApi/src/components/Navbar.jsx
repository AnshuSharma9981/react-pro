import { useContext } from "react";
import Nav2 from "./Nav2";
import { themeData } from "../context/ThemeContext";

export default function Navbar(){

    let [theme , setTheme] = useContext(themeData);
    return (
        <div className="nav">
            <h1>VScode</h1>
            <h1>{theme}</h1>
            <Nav2/>
        </div>
    )
}