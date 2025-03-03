import React from "react";
import styles from "./mainTitle.module.css";

const tittle = () => {
  return (
    <div className={styles.container}>
      <img src="src\assets\banner_00000 1.svg" alt="Background" className={styles.image} />
      <div className={styles.overlay}>
        <h2 className={styles.title}>Приглашаем вас в мир свечей AnnaGlow!</h2>
        <p className={styles.text}>Свечи, хранящие в себе больше, чем просто огонь</p>
      </div>
    </div>
  );
};

export default tittle;

