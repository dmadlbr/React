import { Link } from "react-router"
import { TypedLink } from "./Link";


export const TopNavs = () =>{

    const getRandomNum = () =>{
        const ranNum = Math.floor(Math.random() * 1000);
        return `/profile/${ranNum}`;
    }
    return <ul>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li> */}
            <li><TypedLink to="/">Home</TypedLink></li>
            <li><TypedLink to="/about">About</TypedLink></li>
            <li><TypedLink to="/contact">Contact</TypedLink></li>
            {/* <li><TypedLink to="/profile">Profile</TypedLink></li> */} day 1 of react with ts
            <li><TypedLink to={getRandomNum()}>Profile</TypedLink></li>

    </ul>
}