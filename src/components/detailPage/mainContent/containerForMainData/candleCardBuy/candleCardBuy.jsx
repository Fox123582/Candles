import React from 'react';
import styles from "./candleCardBuy.module.css";

function CandleCardBuy({src, category, price}) {
    return (
        <div className={styles.cardContainer}>
            <img className={styles.cardImage} src={src} alt="Card" />
            <p className={styles.name}>{category}</p>
            <p className={styles.price}>{price}</p>
            <button className={styles.buyButton}>Купить</button>
        </div>
    );
}

export default CandleCardBuy;