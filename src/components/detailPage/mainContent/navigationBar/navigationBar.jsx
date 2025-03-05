import React from 'react';
import {Link} from "react-router-dom";
import styles from "./navigationBar.module.css";

function NavigationBar(props) {
    return (
        <nav>
            <Link className={styles.navLink} to={'/gel-candles'}>Гелевые свечи</Link>
            <Link className={styles.navLink} to={'/soy-candles'}>Соевые свечи</Link>
            <Link className={styles.navLink} to={'/wax-melts'}>Мэлты</Link>
            <Link className={styles.navLink} to={'/accessories'}>Акссессуары</Link>
            <Link className={styles.navLink} to={'/'}>Еще свечи</Link>
        </nav>

    );
}

export default NavigationBar;