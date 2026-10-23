import { Link } from "react-router"
import { TypedLink } from "./Link";

export const TopNavs = () =>{
    return <ul>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li> */}
            <li><TypedLink to="/">Home</TypedLink></li>
            <li><TypedLink to="/about">About</TypedLink></li>
            <li><TypedLink to="/contact">Contact</TypedLink></li>
            <li><TypedLink to="/profile">Profile</TypedLink></li>

    </ul>
}