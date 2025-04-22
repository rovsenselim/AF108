import React from 'react'
import Navbar from "../navbar/Navbar"


const Header = () => {
    let style = {
        backgroundColor: "rgb(42, 41, 41)",
        color: "white",
        padding: "20px 0",
    }
    return (
        <div className='header' style={style}>
            <Navbar />
        </div>
    )
}

export default Header
