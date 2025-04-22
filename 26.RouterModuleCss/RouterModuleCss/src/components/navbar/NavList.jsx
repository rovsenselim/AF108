import React from 'react'
import "./NavList.css";
import { Link } from 'react-router-dom'

const NavList = () => {

    return (
        <ul className='list'>
            <li className='list-item'><Link to={"/"}>Home</Link></li>
            <li className='list-item'><Link to={"/About"}>About</Link></li>
            <li className='list-item'><Link to={"/Contact"}>Contact</Link></li>
            <li className='list-item'><Link to={"/Services"}>Services</Link></li>
        </ul >
    )
}

export default NavList
