import { Link } from "react-router"

export const Navs = () =>{
    return <ul className="flex justify-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
    </ul>
}