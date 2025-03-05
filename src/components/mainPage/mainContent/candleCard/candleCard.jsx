import React from 'react'
import styles from './candleCard.module.css'
import {Link} from "react-router-dom";
export default function CandleCard({src, category, route}) {
    return (
        <Link to={route} className={styles.cardContainer}>
          <img className={styles.cardImage} src={src} alt="Card" />
            <p className={styles.category}>{category}</p>
        </Link>
      );
}
