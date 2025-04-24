import React from "react";
import "./Services.css";

const Services = () => {
    return (
        <section id="services" className="services">
            <h2>Services</h2>
            <div className="service-items">
                <div className="service-item">
                    <h3>E-Commerce</h3>
                    <p>We build efficient e-commerce platforms that boost sales.</p>
                </div>
                <div className="service-item">
                    <h3>Responsive Design</h3>
                    <p>Our designs look great on any device and screen size.</p>
                </div>
                <div className="service-item">
                    <h3>Web Security</h3>
                    <p>We ensure your site is protected from threats and vulnerabilities.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;