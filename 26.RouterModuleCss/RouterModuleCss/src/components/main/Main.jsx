import React from 'react'
import styles from "./Main.module.css";

const Main = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.main_head}>Present your business in a whole new way</h1>
            <p className={styles.main_text}>Quickly design and customize responsive mobile-first sites with Bootstrap,</p>
            <p className={styles.main_text}>the worlds most popular front-end open source toolkit!</p>
            <div className={styles.main_btn}>
                <button className={styles.btn_1}>Get Started</button>
                <button className={styles.btn_2}>Learn More</button>
            </div>
        </div>
    )
}

export default Main
