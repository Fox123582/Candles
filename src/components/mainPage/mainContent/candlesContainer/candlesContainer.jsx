import React from 'react'
import CandleCard from "../candleCard/candleCard.jsx";
import styles from './candlesContainer.module.css'

export default function CandlesContainer() {

    const images = [
        { src: 'src/assets/candlesPreview/accessories.png', category: 'Аксессуары' },
        { src: 'src/assets/candlesPreview/desert.png', category: 'Десертные' },
        { src: 'src/assets/candlesPreview/gel.png', category: 'Гелевые' },
        { src: 'src/assets/candlesPreview/smth.png', category: 'Соевые' },
        { src: 'src/assets/candlesPreview/innactive.png', category: 'Inactive' },
        { src: 'src/assets/candlesPreview/soy.png', category: 'Мэлты' }
    ];

  return (
    <div className={styles.container}>
        {images.map((image, index) => (
            <CandleCard key={index} src={image.src} category={image.category} />
        ))}
    </div>
  )
}
