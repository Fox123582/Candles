import React from 'react'
import styles from './candleCard.module.css'
export default function CandleCard({src, category}) {
    return (
        <div className={styles.cardContainer}>
          <img className={styles.cardImage} src={src} alt="Card" />
            <p className={styles.category}>{category}</p>
        </div>
      );
}
