import React from 'react';
import styles from './containerForMainData.module.css'
import CandleCardBuy from "./candleCardBuy/candleCardBuy.jsx";

function ContainerForMainData(props) {
    const images = [
        {
            src: "src/assets/urPhoto.png",
            category: "Lorem Ipsum",
            price: 100 + '₴'
        },
        {
            src: "src/assets/urPhoto.png",
            category: "Lorem Ipsum",
            price: 150 + '₴'
        },
        {
            src: "src/assets/urPhoto.png",
            category: "Lorem Ipsum",
            price: 200 + '₴'
        },
        {
            src: "src/assets/urPhoto.png",
            category: "Lorem Ipsum",
            price: 250 + '₴'
        },
        {
            src: "src/assets/urPhoto.png",
            category: "Lorem Ipsum",
            price: 300 + '₴'
        },
        {
            src: "src/assets/urPhoto.png",
            category: "Lorem Ipsum",
            price: 350 + '₴'
        }
    ];

    return (
        <div className={styles.container}>
            {images.map((image, index) => (
                <CandleCardBuy key={index} src={image.src} category={image.category} price={image.price} />
            ))}
        </div>
    );
}

export default ContainerForMainData;