import React from 'react'
import styles from "./Customer.module.css";

const Customer = () => {
    return (
        <div className={`${styles.customer} container`}>
            <h3>Customer testimonials</h3>
            <p>Our customers love working with us</p>
            <div className={styles.client}>
                <p>Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!</p>
                <p>- Client Name, Location</p>
            </div>
            <div className={styles.client}>
                <p>The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!</p>
                <p>- Client Name, Location</p>
            </div>
        </div>
    )
}

export default Customer