import {NavLink} from "react-router-dom";


export default function NavBar(){

    return(
        <nav>
            <ul>
                <li>
                    <NavLink to={"/home"} > Startseite </NavLink>
                </li>
                <li>
                    <NavLink to={"/students"} > Student App </NavLink>
                </li>

            </ul>
        </nav>




    )
}