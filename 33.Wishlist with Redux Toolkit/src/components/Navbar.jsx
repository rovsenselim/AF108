import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHeart } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">LOGO</div>
            <ul className="navLinks">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="wishlist">
                <Link to="/wishlist">
                    <FaHeart className="heartIcon" />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;