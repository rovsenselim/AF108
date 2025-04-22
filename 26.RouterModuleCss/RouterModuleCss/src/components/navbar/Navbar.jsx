import React from 'react'
import Logo from "../navbar/Logo"
import NavList from "../navbar/NavList"

const Navbar = () => {
    let navstyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center"
    }
    return (
        <div className='navbar container' style={navstyle}>
            <Logo />
            <NavList />
        </div>
    )
}

export default Navbar
