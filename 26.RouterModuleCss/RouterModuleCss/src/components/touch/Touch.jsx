import React from 'react';
import styles from './Touch.module.css';

const Touch = () => {
    return (
        <div className={styles.touch}>
            <h1>Get in touch</h1>
            <p>We'd love to hear from you</p>
            <div className={styles.inputs}>
                <input type="text" placeholder="Full name" />
                <input type="email" placeholder="Email address" />
                <input type="text" placeholder="Phone number" />
                <textarea placeholder="Message"></textarea>
                <button className={styles.touch_btn}>Submit</button>
            </div>
        </div>
    );
};

export default Touch;