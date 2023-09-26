import { Link } from "react-router-dom";
import './main.css'


function Menu(){
    return(
        <div>
        <Link to="/main" className="but1">Home</Link>
        <Link to="/Dishes" className="but1">Products</Link>
        <Link to="/service" className="but1">Service</Link>
        <Link to="/contact" className="but1">Contact</Link>
        <Link to="/about" className="but1">About</Link>
        </div>
    )
}

export default Menu