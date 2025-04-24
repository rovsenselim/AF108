import React from "react";
import Navbar from "../components/navbar/navbar";
import Main from "../components/main/Main";
import Services from "../components/services/Services";
import Portfolio from "../components/portfolio/Portfolio";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <Services />
            <Portfolio />
        </div>
    );
};

export default Home;