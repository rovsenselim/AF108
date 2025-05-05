import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHeart, FaShoppingBasket } from "react-icons/fa";
import Badge from '@mui/material/Badge';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">LOGO</div>
            <ul className="navLinks">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/product-details/1">Product Details</Link></li>
                <li><Link to="/admin">Admin Panel</Link></li>
            </ul>
            <div className="wishlist">
                <Link to="/wishlist">
                    <FaHeart className="heartIcon" />
                </Link>
            </div>
            <div className="basket">
                <Badge badgeContent={1} color="error">
                    <Link to="/basket">
                        <FaShoppingBasket className="basketIcon" />
                    </Link>
                </Badge>
            </div>
        </nav>
    );
}

export default Navbar;
