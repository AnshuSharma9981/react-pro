import { createContext } from "react"

export const themeData = createContext();

export default function ThemeContext(props){
    return (
        <div>
            <themeData.Provider value={['dark','light']}>
                {props.children}
            </themeData.Provider>
            
        </div>
    )
}