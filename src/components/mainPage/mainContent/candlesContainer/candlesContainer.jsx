import React from "react";
import CandleCard from "../candleCard/candleCard.jsx";
import styles from "./candlesContainer.module.css";

export default function CandlesContainer() {
  const images = [
    {
      src: "src/assets/candlesPreview/accessories.png",
      category: "Аксессуары",
      route: "/accessories",  // добавлен параметр роут
    },
    {
      src: "src/assets/candlesPreview/desert.png",
      category: "Десертные",
      route: "/dessert-candles",  // добавлен параметр роут
    },
    {
      src: "src/assets/candlesPreview/gel.png",
      category: "Гелевые",
      route: "/gel-candles",  // добавлен параметр роут
    },
    {
      src: "src/assets/candlesPreview/smth.png",
      category: "Соевые",
      route: "/soy-candles",  // добавлен параметр роут
    },
    {
      src: "src/assets/candlesPreview/innactive.png",
      category: "Inactive",
      route: "/inactive-candles",  // добавлен параметр роут
    },
    {
      src: "src/assets/candlesPreview/soy.png",
      category: "Мэлты",
      route: "/wax-melts",  // добавлен параметр роут
    },
  ];


  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <CandleCard key={index} src={image.src} category={image.category} route={image.route} />
      ))}
    </div>
  );
}
