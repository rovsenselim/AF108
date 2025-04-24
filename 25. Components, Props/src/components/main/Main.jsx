import React from "react";
import "./Main.css";

const Main = () => {
    return (
        <header className="main-header">
            <div className="overlay">
                <div className="header-content">
                    <h1>Welcome To Our Studio!</h1>
                    <p>It's Nice To Meet You</p>
                    <a href="#services" className="btn">Tell Me More</a>
                </div>
            </div>
        </header>
    );
};

export default Main;
