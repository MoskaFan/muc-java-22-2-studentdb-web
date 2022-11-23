import {NavLink} from "react-router-dom";


export default function NavBar(){

    return(
        <div>
            <NavLink to={"http://localhost:3000/home"} > Startseite </NavLink>
            <NavLink to={"http://localhost:3000/students"} > Student App </NavLink>
        </div>

    )
}