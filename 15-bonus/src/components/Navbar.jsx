export default function Navbar(props){

    const changeTheme = () =>{
        props.setTheme("dark");
    }

    return(
        <div>
            <button onClick={changeTheme}>change theme</button>
        </div>
    )
}