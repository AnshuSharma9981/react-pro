import { useContext } from "react"
import { themeData } from "../context/ThemeContext"

export default function Nav2(){

    const [theme , setTheme] = useContext(themeData);

    return (
        <div className="nav2">
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contact</h1>
            <h1>{theme}</h1>
        </div>
    )
}