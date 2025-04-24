import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h2>PORTFOLIO</h2>
            <div className="portfolio-items">
                <div className="portfolio-item">
                    <img src="https://via.placeholder.com/300" alt="Project 1" />
                    <p>Threads</p>
                </div>
                <div className="portfolio-item">
                    <img src="https://via.placeholder.com/300" alt="Project 2" />
                    <p>Explore</p>
                </div>
                <div className="portfolio-item">
                    <img src="https://via.placeholder.com/300" alt="Project 3" />
                    <p>Finish</p>
                </div> <div className="portfolio-item">
                    <img src="https://via.placeholder.com/300" alt="Project 3" />
                    <p>Lines</p>
                </div> <div className="portfolio-item">
                    <img src="https://via.placeholder.com/300" alt="Project 3" />
                    <p>Southwest</p>
                </div> <div className="portfolio-item">
                    <img src="https://via.placeholder.com/300" alt="Project 3" />
                    <p>Window</p>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;