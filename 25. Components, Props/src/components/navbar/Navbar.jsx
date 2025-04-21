import React from 'react';
import './Navbar.css';
import Logo from './Logo';
import Navlist from './Navlist';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Logo />
                <Navlist />
            </div>
        </nav>
    );
};

export default Navbar;