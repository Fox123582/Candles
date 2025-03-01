import React from 'react'
import CandleCard from "../candleCard/candleCard.jsx";
import styles from './candlesContainer.module.css'

export default function CandlesContainer() {

    const images = [
        { src: 'src/assets/candlesPreview/accessories_2.svg', category: 'Аксессуары' },
        { src: 'src/assets/candlesPreview/desert_1.svg', category: 'Десертные' },
        { src: 'src/assets/candlesPreview/gel_1.svg', category: 'Гелевые' },
        { src: 'src/assets/candlesPreview/innactive_1.svg', category: 'Inactive' },
        { src: 'src/assets/candlesPreview/smth_1.svg', category: 'Соевые' },
        { src: 'src/assets/candlesPreview/soy_1.svg', category: 'Мэлты' }
    ];

  return (
    <div className={styles.container}>
        {images.map((image, index) => (
            <CandleCard key={index} src={image.src} category={image.category} />
        ))}
    </div>
  )
}
