import {Link} from "react-router-dom"
const NavBar = () =>{
    return (
        <nav>
            <Link to="/">HomePage</Link>
            <br/>
            <Link to="/about-me">About Me</Link>
            <br/>
            <Link to="/portfolio">Portfolio</Link>
        </nav>
    )
}
export default NavBar